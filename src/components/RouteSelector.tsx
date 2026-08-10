import React, { useState } from 'react';
import { type City, POPULAR_ROUTES } from '../data/citiesData';
import type { TransportMode } from '../utils/distanceCalculator';
import { 
  ArrowRightLeft, 
  Car, 
  Bus, 
  Plane, 
  Train, 
  Footprints, 
  Plus, 
  Trash2, 
  MapPin, 
  Search,
  Zap
} from 'lucide-react';

interface RouteSelectorProps {
  cities: City[];
  origin: City;
  destination: City;
  waypoints: City[];
  mode: TransportMode;
  onOriginChange: (city: City) => void;
  onDestinationChange: (city: City) => void;
  onWaypointsChange: (waypoints: City[]) => void;
  onModeChange: (mode: TransportMode) => void;
  onSwap: () => void;
}

export const RouteSelector: React.FC<RouteSelectorProps> = ({
  cities,
  origin,
  destination,
  waypoints,
  mode,
  onOriginChange,
  onDestinationChange,
  onWaypointsChange,
  onModeChange,
  onSwap,
}) => {
  const [originSearch, setOriginSearch] = useState('');
  const [destSearch, setDestSearch] = useState('');
  const [showOriginDropdown, setShowOriginDropdown] = useState(false);
  const [showDestDropdown, setShowDestDropdown] = useState(false);

  const filteredOriginCities = cities.filter((c) =>
    c.name.toLowerCase().includes(originSearch.toLowerCase()) ||
    c.region.toLowerCase().includes(originSearch.toLowerCase()) ||
    (c.plateCode && c.plateCode.toString().includes(originSearch))
  );

  const filteredDestCities = cities.filter((c) =>
    c.name.toLowerCase().includes(destSearch.toLowerCase()) ||
    c.region.toLowerCase().includes(destSearch.toLowerCase()) ||
    (c.plateCode && c.plateCode.toString().includes(destSearch))
  );

  const handleAddWaypoint = () => {
    const available = cities.find(
      (c) => c.id !== origin.id && c.id !== destination.id && !waypoints.some((w) => w.id === c.id)
    );
    if (available) {
      onWaypointsChange([...waypoints, available]);
    }
  };

  const handleRemoveWaypoint = (index: number) => {
    const updated = [...waypoints];
    updated.splice(index, 1);
    onWaypointsChange(updated);
  };

  const handleWaypointChange = (index: number, newCity: City) => {
    const updated = [...waypoints];
    updated[index] = newCity;
    onWaypointsChange(updated);
  };

  const transportModes: { id: TransportMode; label: string; icon: React.ReactNode; speed: string }[] = [
    { id: 'car', label: 'Otomobil', icon: <Car className="w-4 h-4" />, speed: '~90 km/s' },
    { id: 'bus', label: 'Otobüs', icon: <Bus className="w-4 h-4" />, speed: '~75 km/s' },
    { id: 'flight', label: 'Uçak', icon: <Plane className="w-4 h-4" />, speed: 'Kuş Uçuşu' },
    { id: 'train', label: 'Tren', icon: <Train className="w-4 h-4" />, speed: '~110 km/s' },
    { id: 'walking', label: 'Yürüyüş', icon: <Footprints className="w-4 h-4" />, speed: '~5 km/s' },
  ];

  return (
    <div className="glass-panel rounded-2xl p-5 sm:p-6 mb-6 shadow-2xl border border-white/10 relative z-30">
      <div className="mb-5">
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-2">
          <Zap className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
          <span>HIZLI POPÜLER ROTALAR:</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {POPULAR_ROUTES.map((route, idx) => {
            const org = cities.find((c) => c.id === route.originId);
            const dst = cities.find((c) => c.id === route.destId);
            if (!org || !dst) return null;
            const isActive = origin.id === org.id && destination.id === dst.id;

            return (
              <button
                key={idx}
                onClick={() => {
                  onOriginChange(org);
                  onDestinationChange(dst);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 border ${
                  isActive
                    ? 'bg-blue-600/30 text-blue-300 border-blue-500/60 shadow-sm'
                    : 'bg-slate-800/60 text-slate-300 border-slate-700/60 hover:bg-slate-700/80 hover:text-white'
                }`}
              >
                <span>{route.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
        <div className="md:col-span-5 relative">
          <label className="block text-xs font-semibold text-rose-400 mb-1.5 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
            <MapPin className="w-4 h-4 text-rose-500" />
            KALKIŞ NOKTASI (NEREDEN)
          </label>
          <div className="relative">
            <button
              type="button"
              onClick={() => {
                setShowOriginDropdown(!showOriginDropdown);
                setShowDestDropdown(false);
              }}
              className="w-full bg-slate-900/90 border border-slate-700 hover:border-rose-500/60 focus:border-rose-500 rounded-xl px-4 py-3 text-left flex items-center justify-between shadow-inner transition-all text-sm font-medium"
            >
              <div className="flex items-center gap-3 overflow-hidden">
                <span className="text-xl">{origin.flagEmoji}</span>
                <div>
                  <div className="text-white font-bold flex items-center gap-2">
                    {origin.name}
                    {origin.plateCode && (
                      <span className="text-[11px] px-1.5 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/30">
                        {origin.plateCode.toString().padStart(2, '0')}
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-slate-400">{origin.country} • {origin.region}</div>
                </div>
              </div>
              <Search className="w-4 h-4 text-slate-400" />
            </button>

            {showOriginDropdown && (
              <div className="absolute top-full left-0 mt-2 w-full max-h-80 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl overflow-hidden z-50 p-2">
                <div className="relative mb-2">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    value={originSearch}
                    onChange={(e) => setOriginSearch(e.target.value)}
                    placeholder="İl adı, plaka (06) veya ülke ara..."
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg pl-9 pr-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-rose-500"
                    autoFocus
                  />
                </div>
                <div className="overflow-y-auto max-h-60 space-y-1">
                  {filteredOriginCities.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => {
                        onOriginChange(c);
                        setShowOriginDropdown(false);
                        setOriginSearch('');
                      }}
                      className={`w-full text-left px-3 py-2 rounded-lg text-xs flex items-center justify-between transition-colors ${
                        c.id === origin.id ? 'bg-rose-600/30 text-rose-200 font-bold' : 'hover:bg-slate-800 text-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span>{c.flagEmoji}</span>
                        <span>{c.name}</span>
                        {c.plateCode && (
                          <span className="text-[10px] text-slate-400">({c.plateCode})</span>
                        )}
                      </div>
                      <span className="text-[10px] text-slate-500">{c.region}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="md:col-span-2 flex justify-center py-2 md:py-0">
          <button
            onClick={onSwap}
            title="Kalkış ve Varış Noktalarını Değiştir"
            className="p-3 rounded-full bg-blue-600/20 hover:bg-blue-600/40 text-blue-400 border border-blue-500/40 transition-transform active:scale-95 shadow-md flex items-center justify-center group"
          >
            <ArrowRightLeft className="w-5 h-5 group-hover:rotate-180 transition-transform duration-300" />
          </button>
        </div>

        <div className="md:col-span-5 relative">
          <label className="block text-xs font-semibold text-emerald-400 mb-1.5 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <MapPin className="w-4 h-4 text-emerald-500" />
            VARIŞ NOKTASI (NEREYE)
          </label>
          <div className="relative">
            <button
              type="button"
              onClick={() => {
                setShowDestDropdown(!showDestDropdown);
                setShowOriginDropdown(false);
              }}
              className="w-full bg-slate-900/90 border border-slate-700 hover:border-emerald-500/60 focus:border-emerald-500 rounded-xl px-4 py-3 text-left flex items-center justify-between shadow-inner transition-all text-sm font-medium"
            >
              <div className="flex items-center gap-3 overflow-hidden">
                <span className="text-xl">{destination.flagEmoji}</span>
                <div>
                  <div className="text-white font-bold flex items-center gap-2">
                    {destination.name}
                    {destination.plateCode && (
                      <span className="text-[11px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                        {destination.plateCode.toString().padStart(2, '0')}
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-slate-400">{destination.country} • {destination.region}</div>
                </div>
              </div>
              <Search className="w-4 h-4 text-slate-400" />
            </button>

            {showDestDropdown && (
              <div className="absolute top-full left-0 mt-2 w-full max-h-80 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl overflow-hidden z-50 p-2">
                <div className="relative mb-2">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    value={destSearch}
                    onChange={(e) => setDestSearch(e.target.value)}
                    placeholder="İl adı, plaka (34) veya ülke ara..."
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg pl-9 pr-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                    autoFocus
                  />
                </div>
                <div className="overflow-y-auto max-h-60 space-y-1">
                  {filteredDestCities.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => {
                        onDestinationChange(c);
                        setShowDestDropdown(false);
                        setDestSearch('');
                      }}
                      className={`w-full text-left px-3 py-2 rounded-lg text-xs flex items-center justify-between transition-colors ${
                        c.id === destination.id ? 'bg-emerald-600/30 text-emerald-200 font-bold' : 'hover:bg-slate-800 text-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span>{c.flagEmoji}</span>
                        <span>{c.name}</span>
                        {c.plateCode && (
                          <span className="text-[10px] text-slate-400">({c.plateCode})</span>
                        )}
                      </div>
                      <span className="text-[10px] text-slate-500">{c.region}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {waypoints.length > 0 && (
        <div className="mt-4 pt-3 border-t border-slate-800/80 space-y-2">
          <div className="text-xs font-semibold text-amber-400">ARA DURAKLAR (UĞRANACAK İLLER):</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {waypoints.map((wp, idx) => (
              <div key={idx} className="flex items-center justify-between bg-slate-900/80 border border-amber-500/30 rounded-xl px-3 py-2 text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-300 font-bold flex items-center justify-center text-[10px]">
                    {idx + 1}
                  </span>
                  <span className="font-semibold text-white">{wp.name}</span>
                  <span className="text-[10px] text-slate-400">({wp.region})</span>
                </div>
                <div className="flex items-center gap-1">
                  <select
                    value={wp.id}
                    onChange={(e) => {
                      const selected = cities.find((c) => c.id === e.target.value);
                      if (selected) handleWaypointChange(idx, selected);
                    }}
                    className="bg-slate-950 text-slate-300 text-[11px] rounded px-1.5 py-0.5 border border-slate-700 focus:outline-none"
                  >
                    {cities.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.flagEmoji} {c.name}
                      </option>
                    ))}
                  </select>
                  <button
                    onClick={() => handleRemoveWaypoint(idx)}
                    className="p-1 text-slate-400 hover:text-rose-400 transition-colors"
                    title="Durağı Kaldır"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mt-3 flex justify-end">
        <button
          onClick={handleAddWaypoint}
          className="text-xs text-amber-400 hover:text-amber-300 font-medium inline-flex items-center gap-1 hover:underline"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>+ Ara Durak Ekle</span>
        </button>
      </div>

      <div className="mt-5 pt-4 border-t border-slate-800">
        <div className="text-xs font-semibold text-slate-400 mb-2">ULAŞIM MODU SEÇİN:</div>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
          {transportModes.map((item) => {
            const isSelected = mode === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onModeChange(item.id)}
                className={`p-2.5 rounded-xl border text-xs font-medium transition-all flex flex-col items-center justify-center gap-1 ${
                  isSelected
                    ? 'bg-blue-600 text-white border-blue-400 shadow-lg shadow-blue-600/30 scale-[1.02]'
                    : 'bg-slate-900/60 text-slate-300 border-slate-800 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-1.5">
                  {item.icon}
                  <span>{item.label}</span>
                </div>
                <span className={`text-[10px] ${isSelected ? 'text-blue-100' : 'text-slate-500'}`}>
                  {item.speed}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
