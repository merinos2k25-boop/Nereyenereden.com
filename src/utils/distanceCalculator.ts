import type { City } from '../data/citiesData';

export type TransportMode = 'car' | 'bus' | 'flight' | 'train' | 'walking';

export interface RouteResult {
  directDistanceKm: number;
  roadDistanceKm: number;
  durationMinutes: number;
  formattedDuration: string;
  fuelLiters: number;
  fuelCostTL: number;
  co2Kg: number;
  polylineCoords: [number, number][];
  isRealRoadPolyline: boolean;
  intermediateCities: City[];
}

const R = 6371;

export function calculateHaversineDistance(
  lat1: number,
  lng1: number,
  lat2: number,
  lng2: number
): number {
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round(R * c * 10) / 10;
}

export function generateCurvedPolyline(
  start: [number, number],
  end: [number, number],
  numPoints: number = 50,
  curvature: number = 0.15
): [number, number][] {
  const coords: [number, number][] = [];
  const [lat1, lng1] = start;
  const [lat2, lng2] = end;

  const midLat = (lat1 + lat2) / 2;
  const midLng = (lng1 + lng2) / 2;

  const dLat = lat2 - lat1;
  const dLng = lng2 - lng1;
  const normalLat = -dLng * curvature;
  const normalLng = dLat * curvature;

  const controlLat = midLat + normalLat;
  const controlLng = midLng + normalLng;

  for (let i = 0; i <= numPoints; i++) {
    const t = i / numPoints;
    const lat =
      Math.pow(1 - t, 2) * lat1 + 2 * (1 - t) * t * controlLat + Math.pow(t, 2) * lat2;
    const lng =
      Math.pow(1 - t, 2) * lng1 + 2 * (1 - t) * t * controlLng + Math.pow(t, 2) * lng2;
    coords.push([lat, lng]);
  }

  return coords;
}

export function findIntermediateCities(
  origin: City,
  destination: City,
  allCities: City[]
): City[] {
  const candidates = allCities.filter(
    (c) => c.id !== origin.id && c.id !== destination.id
  );

  const directDist = calculateHaversineDistance(
    origin.lat,
    origin.lng,
    destination.lat,
    destination.lng
  );

  const result: { city: City; distFromStart: number }[] = [];

  for (const c of candidates) {
    const d1 = calculateHaversineDistance(origin.lat, origin.lng, c.lat, c.lng);
    const d2 = calculateHaversineDistance(c.lat, c.lng, destination.lat, destination.lng);

    const totalDetour = d1 + d2;
    const detourRatio = totalDetour / directDist;

    const minLat = Math.min(origin.lat, destination.lat) - 0.5;
    const maxLat = Math.max(origin.lat, destination.lat) + 0.5;
    const minLng = Math.min(origin.lng, destination.lng) - 0.5;
    const maxLng = Math.max(origin.lng, destination.lng) + 0.5;

    if (
      c.lat >= minLat &&
      c.lat <= maxLat &&
      c.lng >= minLng &&
      c.lng <= maxLng &&
      detourRatio < 1.15
    ) {
      result.push({ city: c, distFromStart: d1 });
    }
  }

  result.sort((a, b) => a.distFromStart - b.distFromStart);
  return result.map((r) => r.city);
}

export function formatMinutes(totalMinutes: number): string {
  const mins = Math.round(totalMinutes);
  if (mins < 60) {
    return `${mins} dk`;
  }
  const hours = Math.floor(mins / 60);
  const remainingMins = mins % 60;
  if (remainingMins === 0) {
    return `${hours} saat`;
  }
  return `${hours} sa ${remainingMins} dk`;
}

export async function computeRoute(
  origin: City,
  destination: City,
  waypoints: City[],
  mode: TransportMode,
  fuelPriceTL: number = 43.5,
  fuelConsumptionLPer100Km: number = 6.8,
  allCities: City[] = []
): Promise<RouteResult> {
  const directDistanceKm = calculateHaversineDistance(
    origin.lat,
    origin.lng,
    destination.lat,
    destination.lng
  );

  let roadDistanceKm = directDistanceKm;
  let durationMinutes = 0;
  let polylineCoords: [number, number][] = [];
  let isRealRoadPolyline = false;

  const points = [origin, ...waypoints, destination];
  const coordinatesString = points.map((p) => `${p.lng},${p.lat}`).join(';');

  if (mode === 'car' || mode === 'bus') {
    try {
      const url = `https://router.project-osrm.org/route/v1/driving/${coordinatesString}?overview=full&geometries=geojson`;
      const response = await fetch(url, { signal: AbortSignal.timeout(4000) });
      if (response.ok) {
        const data = await response.json();
        if (data.routes && data.routes.length > 0) {
          const route = data.routes[0];
          roadDistanceKm = Math.round((route.distance / 1000) * 10) / 10;
          const osrmDurationMinutes = route.duration / 60;

          polylineCoords = route.geometry.coordinates.map(
            (c: [number, number]) => [c[1], c[0]] as [number, number]
          );
          isRealRoadPolyline = true;

          if (mode === 'car') {
            durationMinutes = osrmDurationMinutes;
          } else {
            durationMinutes = osrmDurationMinutes * 1.2;
            const breakCount = Math.floor(durationMinutes / 240);
            durationMinutes += breakCount * 45;
          }
        }
      }
    } catch {
      isRealRoadPolyline = false;
    }
  }

  if (!isRealRoadPolyline) {
    if (mode === 'flight') {
      roadDistanceKm = Math.round(directDistanceKm);
      const flightHours = roadDistanceKm / 780;
      durationMinutes = flightHours * 60 + 90;
      polylineCoords = generateCurvedPolyline(
        [origin.lat, origin.lng],
        [destination.lat, destination.lng],
        60,
        0.18
      );
    } else if (mode === 'car') {
      roadDistanceKm = Math.round(directDistanceKm * 1.26 * 10) / 10;
      durationMinutes = (roadDistanceKm / 90) * 60;
      polylineCoords = generateCurvedPolyline(
        [origin.lat, origin.lng],
        [destination.lat, destination.lng],
        40,
        0.05
      );
    } else if (mode === 'bus') {
      roadDistanceKm = Math.round(directDistanceKm * 1.27 * 10) / 10;
      const drivingMins = (roadDistanceKm / 75) * 60;
      const breakCount = Math.floor(drivingMins / 240);
      durationMinutes = drivingMins + breakCount * 45;
      polylineCoords = generateCurvedPolyline(
        [origin.lat, origin.lng],
        [destination.lat, destination.lng],
        40,
        0.05
      );
    } else if (mode === 'train') {
      roadDistanceKm = Math.round(directDistanceKm * 1.32 * 10) / 10;
      durationMinutes = (roadDistanceKm / 110) * 60;
      polylineCoords = generateCurvedPolyline(
        [origin.lat, origin.lng],
        [destination.lat, destination.lng],
        40,
        0.08
      );
    } else if (mode === 'walking') {
      roadDistanceKm = Math.round(directDistanceKm * 1.22 * 10) / 10;
      durationMinutes = (roadDistanceKm / 5) * 60;
      polylineCoords = generateCurvedPolyline(
        [origin.lat, origin.lng],
        [destination.lat, destination.lng],
        30,
        0.02
      );
    }
  }

  const fuelLiters = Math.round(((roadDistanceKm / 100) * fuelConsumptionLPer100Km) * 10) / 10;
  const fuelCostTL = Math.round(fuelLiters * fuelPriceTL);

  let co2FactorGPerKm = 120;
  if (mode === 'bus') co2FactorGPerKm = 35;
  if (mode === 'flight') co2FactorGPerKm = 175;
  if (mode === 'train') co2FactorGPerKm = 14;
  if (mode === 'walking') co2FactorGPerKm = 0;

  const co2Kg = Math.round((roadDistanceKm * co2FactorGPerKm) / 1000);
  const intermediateCities = findIntermediateCities(origin, destination, allCities);

  return {
    directDistanceKm,
    roadDistanceKm,
    durationMinutes: Math.round(durationMinutes),
    formattedDuration: formatMinutes(durationMinutes),
    fuelLiters,
    fuelCostTL,
    co2Kg,
    polylineCoords,
    isRealRoadPolyline,
    intermediateCities,
  };
}
