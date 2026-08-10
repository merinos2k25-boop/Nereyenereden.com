import React, { useState, useEffect } from 'react';
import { CITIES, type City } from './data/citiesData';
import { type TransportMode, type RouteResult, computeRoute } from './utils/distanceCalculator';
import { Header } from './components/Header';
import { RouteSelector } from './components/RouteSelector';
import { MapComponent } from './components/MapComponent';
import { RouteSummaryCard } from './components/RouteSummaryCard';
import { DistanceMatrixModal } from './components/DistanceMatrixModal';
import { SEOContentAndFAQ } from './components/SEOContentAndFAQ';
import { LegalModals, type LegalModalType } from './components/LegalModals';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [origin, setOrigin] = useState<City>(
    CITIES.find((c) => c.plateCode === 34) || CITIES[0]
  );
  const [destination, setDestination] = useState<City>(
    CITIES.find((c) => c.plateCode === 6) || CITIES[1]
  );

  const [waypoints, setWaypoints] = useState<City[]>([]);
  const [mode, setMode] = useState<TransportMode>('car');
  const [fuelPriceTL, setFuelPriceTL] = useState<number>(43.5);
  const [fuelConsumption, setFuelConsumption] = useState<number>(6.8);

  const [routeResult, setRouteResult] = useState<RouteResult | null>(null);
  const [isLoadingRoute, setIsLoadingRoute] = useState<boolean>(false);
  const [isMatrixOpen, setIsMatrixOpen] = useState<boolean>(false);
  const [activeLegalModal, setActiveLegalModal] = useState<LegalModalType>(null);

  useEffect(() => {
    let isSubscribed = true;

    async function calculate() {
      setIsLoadingRoute(true);
      const result = await computeRoute(
        origin,
        destination,
        waypoints,
        mode,
        fuelPriceTL,
        fuelConsumption,
        CITIES
      );
      if (isSubscribed) {
        setRouteResult(result);
        setIsLoadingRoute(false);
      }
    }

    calculate();

    return () => {
      isSubscribed = false;
    };
  }, [origin, destination, waypoints, mode, fuelPriceTL, fuelConsumption]);

  const handleSwap = () => {
    const temp = origin;
    setOrigin(destination);
    setDestination(temp);
  };

  const handleSelectRouteFromMatrix = (newOrigin: City, newDest: City) => {
    setOrigin(newOrigin);
    setDestination(newDest);
  };

  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 flex flex-col selection:bg-blue-500 selection:text-white">
      <Header onOpenMatrix={() => setIsMatrixOpen(true)} />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <RouteSelector
          cities={CITIES}
          origin={origin}
          destination={destination}
          waypoints={waypoints}
          mode={mode}
          onOriginChange={setOrigin}
          onDestinationChange={setDestination}
          onWaypointsChange={setWaypoints}
          onModeChange={setMode}
          onSwap={handleSwap}
        />

        <section className="my-6 relative">
          <MapComponent
            origin={origin}
            destination={destination}
            waypoints={waypoints}
            routeResult={routeResult}
            allCities={CITIES}
            onSelectCityFromMap={(city) => setDestination(city)}
            isLoadingRoute={isLoadingRoute}
          />
        </section>

        {routeResult && (
          <RouteSummaryCard
            origin={origin}
            destination={destination}
            mode={mode}
            routeResult={routeResult}
            fuelPriceTL={fuelPriceTL}
            fuelConsumption={fuelConsumption}
            onFuelPriceChange={setFuelPriceTL}
            onFuelConsumptionChange={setFuelConsumption}
          />
        )}

        {/* SEO Article & FAQ Component for Google AdSense Approval */}
        <SEOContentAndFAQ />
      </main>

      <DistanceMatrixModal
        isOpen={isMatrixOpen}
        onClose={() => setIsMatrixOpen(false)}
        cities={CITIES}
        onSelectRoute={handleSelectRouteFromMatrix}
      />

      <LegalModals
        activeModal={activeLegalModal}
        onClose={() => setActiveLegalModal(null)}
      />

      <Footer onOpenLegalModal={(type) => setActiveLegalModal(type)} />
    </div>
  );
};

export default App;
