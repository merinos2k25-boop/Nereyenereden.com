import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import type { City } from '../data/citiesData';
import type { RouteResult } from '../utils/distanceCalculator';
import { Layers, RotateCcw, Eye, Compass } from 'lucide-react';

interface MapComponentProps {
  origin: City;
  destination: City;
  waypoints: City[];
  routeResult: RouteResult | null;
  allCities: City[];
  onSelectCityFromMap?: (city: City) => void;
  isLoadingRoute?: boolean;
}

export type TileLayerType = 'dark' | 'streets' | 'satellite' | 'topo';

export const MapComponent: React.FC<MapComponentProps> = ({
  origin,
  destination,
  waypoints,
  routeResult,
  allCities,
  onSelectCityFromMap,
  isLoadingRoute,
}) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const leafletMapRef = useRef<L.Map | null>(null);
  const markersLayerRef = useRef<L.LayerGroup | null>(null);
  const polylineLayerRef = useRef<L.LayerGroup | null>(null);

  const [activeTile, setActiveTile] = useState<TileLayerType>('dark');
  const [showAllCityPins, setShowAllCityPins] = useState(false);

  const tileProviders: Record<TileLayerType, { url: string; attribution: string; name: string }> = {
    dark: {
      url: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
      attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
      name: '🌙 Karanlık Gece',
    },
    streets: {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution: '&copy; OpenStreetMap contributors',
      name: '🗺️ Modern Sokak',
    },
    satellite: {
      url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
      attribution: 'Tiles &copy; Esri',
      name: '🛰️ Gerçekçi Uydu',
    },
    topo: {
      url: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
      attribution: 'Map data: &copy; OpenStreetMap',
      name: '⛰️ Topografik Arazi',
    },
  };

  useEffect(() => {
    if (!mapRef.current || leafletMapRef.current) return;

    const map = L.map(mapRef.current, {
      center: [39.0, 35.0],
      zoom: 6,
      zoomControl: false,
    });

    L.control.zoom({ position: 'bottomright' }).addTo(map);

    const currentTileConfig = tileProviders.dark;
    L.tileLayer(currentTileConfig.url, {
      maxZoom: 19,
      attribution: currentTileConfig.attribution,
    }).addTo(map);

    markersLayerRef.current = L.layerGroup().addTo(map);
    polylineLayerRef.current = L.layerGroup().addTo(map);

    leafletMapRef.current = map;

    return () => {
      map.remove();
      leafletMapRef.current = null;
    };
  }, []);

  useEffect(() => {
    const map = leafletMapRef.current;
    if (!map) return;

    map.eachLayer((layer) => {
      if (layer instanceof L.TileLayer) {
        map.removeLayer(layer);
      }
    });

    const config = tileProviders[activeTile];
    L.tileLayer(config.url, {
      maxZoom: 19,
      attribution: config.attribution,
    }).addTo(map);
  }, [activeTile]);

  useEffect(() => {
    const map = leafletMapRef.current;
    const markersGroup = markersLayerRef.current;
    const polylineGroup = polylineLayerRef.current;

    if (!map || !markersGroup || !polylineGroup) return;

    markersGroup.clearLayers();
    polylineGroup.clearLayers();

    const createOriginIcon = () =>
      L.divIcon({
        className: 'custom-pin-origin',
        html: `<div>A</div>`,
        iconSize: [38, 38],
        iconAnchor: [19, 19],
      });

    const createDestIcon = () =>
      L.divIcon({
        className: 'custom-pin-dest',
        html: `<div>B</div>`,
        iconSize: [38, 38],
        iconAnchor: [19, 19],
      });

    const createWaypointIcon = (index: number) =>
      L.divIcon({
        className: 'custom-pin-waypoint',
        html: `<div>${index + 1}</div>`,
        iconSize: [30, 30],
        iconAnchor: [15, 15],
      });

    const createSmallCityIcon = (name: string, flag: string) =>
      L.divIcon({
        className: 'custom-pin-city',
        html: `<div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(255,255,255,0.2); color: white; padding: 2px 6px; border-radius: 6px; font-size: 10px; white-space: nowrap; box-shadow: 0 2px 5px rgba(0,0,0,0.5); font-weight: 600;">${flag} ${name}</div>`,
        iconSize: [60, 20],
        iconAnchor: [30, 10],
      });

    L.marker([origin.lat, origin.lng], { icon: createOriginIcon() })
      .bindPopup(
        `<div style="text-align: center; font-family: inherit;">
          <div style="font-size: 14px; font-weight: 800; color: #ef4444;">${origin.flagEmoji} ${origin.name}</div>
          <div style="font-size: 11px; color: #9ca3af; margin-top: 2px;">KALKIŞ NOKTASI</div>
          ${origin.plateCode ? `<div style="font-size: 10px; background: #374151; padding: 2px 6px; border-radius: 4px; display: inline-block; margin-top: 4px;">Plaka: ${origin.plateCode}</div>` : ''}
          ${origin.landmark ? `<div style="font-size: 10px; color: #6366f1; margin-top: 4px;">🏛️ ${origin.landmark}</div>` : ''}
        </div>`
      )
      .addTo(markersGroup);

    L.marker([destination.lat, destination.lng], { icon: createDestIcon() })
      .bindPopup(
        `<div style="text-align: center; font-family: inherit;">
          <div style="font-size: 14px; font-weight: 800; color: #10b981;">${destination.flagEmoji} ${destination.name}</div>
          <div style="font-size: 11px; color: #9ca3af; margin-top: 2px;">VARIŞ NOKTASI</div>
          ${destination.plateCode ? `<div style="font-size: 10px; background: #374151; padding: 2px 6px; border-radius: 4px; display: inline-block; margin-top: 4px;">Plaka: ${destination.plateCode}</div>` : ''}
          ${destination.landmark ? `<div style="font-size: 10px; color: #10b981; margin-top: 4px;">🏛️ ${destination.landmark}</div>` : ''}
        </div>`
      )
      .addTo(markersGroup);

    waypoints.forEach((wp, idx) => {
      L.marker([wp.lat, wp.lng], { icon: createWaypointIcon(idx) })
        .bindPopup(
          `<div style="text-align: center;">
            <div style="font-size: 13px; font-weight: 700; color: #f59e0b;">${wp.flagEmoji} ${wp.name}</div>
            <div style="font-size: 10px; color: #9ca3af;">Ara Durak #${idx + 1}</div>
          </div>`
        )
        .addTo(markersGroup);
    });

    if (showAllCityPins) {
      allCities.forEach((city) => {
        if (city.id !== origin.id && city.id !== destination.id && !waypoints.some((w) => w.id === city.id)) {
          const marker = L.marker([city.lat, city.lng], {
            icon: createSmallCityIcon(city.name, city.flagEmoji),
          })
            .bindPopup(
              `<div style="font-size: 12px; font-weight: 700;">${city.flagEmoji} ${city.name}</div>`
            )
            .addTo(markersGroup);

          if (onSelectCityFromMap) {
            marker.on('click', () => onSelectCityFromMap(city));
          }
        }
      });
    }

    if (routeResult && routeResult.polylineCoords.length > 0) {
      L.polyline(routeResult.polylineCoords, {
        color: '#3b82f6',
        weight: 8,
        opacity: 0.4,
      }).addTo(polylineGroup);

      L.polyline(routeResult.polylineCoords, {
        color: routeResult.isRealRoadPolyline ? '#60a5fa' : '#34d399',
        weight: 4,
        opacity: 0.95,
        dashArray: routeResult.isRealRoadPolyline ? undefined : '8, 8',
      }).addTo(polylineGroup);

      const bounds = L.latLngBounds([
        [origin.lat, origin.lng],
        [destination.lat, destination.lng],
        ...waypoints.map((w) => [w.lat, w.lng] as [number, number]),
      ]);

      map.fitBounds(bounds, { padding: [60, 60], maxZoom: 12 });
    }
  }, [origin, destination, waypoints, routeResult, showAllCityPins, allCities, onSelectCityFromMap]);

  const handleResetView = () => {
    const map = leafletMapRef.current;
    if (!map) return;
    const bounds = L.latLngBounds([
      [origin.lat, origin.lng],
      [destination.lat, destination.lng],
    ]);
    map.fitBounds(bounds, { padding: [60, 60] });
  };

  return (
    <div className="w-full space-y-3">
      
      {/* 1. ÜST BAŞLIK VE KONTROL BUTONLARI (HARİTANIN TAMAMEN DIŞINDA YUKARIDA) */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-1">
        
        {/* Sol Taraf: Rota Bilgisi Badge (Yukarı Taşındı) */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="bg-slate-900/90 border border-slate-800 px-4 py-2 rounded-2xl text-xs font-semibold text-white flex items-center gap-2 shadow-lg">
            <Compass className="w-4 h-4 text-cyan-400 animate-spin" style={{ animationDuration: '10s' }} />
            <span>{origin.name} ➔ {destination.name}</span>
            {routeResult && (
              <span className="bg-blue-600/40 text-blue-300 px-2 py-0.5 rounded-full border border-blue-400/30 text-[11px] font-bold">
                {routeResult.roadDistanceKm} km
              </span>
            )}
          </div>

          {isLoadingRoute && (
            <div className="text-xs text-cyan-400 font-semibold flex items-center gap-2 bg-cyan-950/60 px-3 py-1.5 rounded-2xl border border-cyan-800/60">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              OSRM Rota Hesaplanıyor...
            </div>
          )}
        </div>

        {/* Sağ Taraf: Harita Aksiyon Butonları (Yukarı Taşındı) */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowAllCityPins(!showAllCityPins)}
            className={`px-3.5 py-2 rounded-2xl text-xs font-semibold flex items-center gap-2 shadow-lg transition-all border ${
              showAllCityPins
                ? 'bg-indigo-600 text-white border-indigo-400 shadow-indigo-600/30'
                : 'bg-slate-900/90 text-slate-300 border-slate-800 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <Eye className="w-3.5 h-3.5 text-indigo-400" />
            <span>Tüm İlleri Göster</span>
          </button>

          <button
            onClick={handleResetView}
            className="p-2.5 rounded-2xl bg-slate-900/90 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800 transition-all shadow-lg flex items-center justify-center"
            title="Harita Görünümünü Sıfırla"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* 2. HARİTA TİPİ SEÇİCİ ŞERİDİ (YUKARIDA) */}
      <div className="flex items-center justify-between bg-slate-900/90 border border-slate-800 p-1.5 rounded-2xl shadow-lg overflow-x-auto">
        <div className="text-[11px] font-bold text-slate-400 px-2.5 flex items-center gap-1.5 uppercase tracking-wider">
          <Layers className="w-3.5 h-3.5 text-blue-400" />
          <span>HARİTA KATMANI:</span>
        </div>
        <div className="flex items-center gap-1.5 overflow-x-auto">
          {(Object.keys(tileProviders) as TileLayerType[]).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTile(key)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                activeTile === key
                  ? 'bg-blue-600 text-white shadow-md scale-[1.02]'
                  : 'text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              {tileProviders[key].name}
            </button>
          ))}
        </div>
      </div>

      {/* 3. TEMİZ HARİTA ALANI (GÖRSELİ KAPATAN HİÇBİR ARAYÜZ KUTUSU KALMADI) */}
      <div className="relative w-full h-[520px] sm:h-[620px] rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
        <div ref={mapRef} className="w-full h-full" />

        {/* Sol Alt Köşe Lejantı */}
        <div className="absolute bottom-4 left-4 z-20 hidden sm:flex items-center gap-3 glass-panel px-3.5 py-2 rounded-xl text-xs text-slate-300 shadow-xl border border-white/10">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-500 shadow-sm" />
            <span>A: {origin.name}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-emerald-500 shadow-sm" />
            <span>B: {destination.name}</span>
          </div>
          {routeResult && (
            <div className="flex items-center gap-1.5 border-l border-slate-700 pl-3">
              <span className={`w-4 h-1 rounded ${routeResult.isRealRoadPolyline ? 'bg-blue-400' : 'bg-emerald-400'}`} />
              <span>{routeResult.isRealRoadPolyline ? 'Karayolu OSRM Rotası' : 'Geodesic Kuş Uçuşu'}</span>
            </div>
          )}
        </div>
      </div>

    </div>
  );
};
