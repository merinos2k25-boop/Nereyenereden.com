import React, { useState } from 'react';
import type { RouteResult, TransportMode } from '../utils/distanceCalculator';
import type { City } from '../data/citiesData';
import confetti from 'canvas-confetti';
import { 
  Clock, 
  MapPin, 
  Fuel, 
  Leaf, 
  Share2, 
  Printer, 
  CheckCircle2, 
  Layers,
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface RouteSummaryCardProps {
  origin: City;
  destination: City;
  mode: TransportMode;
  routeResult: RouteResult;
  fuelPriceTL: number;
  fuelConsumption: number;
  onFuelPriceChange: (price: number) => void;
  onFuelConsumptionChange: (cons: number) => void;
}

export const RouteSummaryCard: React.FC<RouteSummaryCardProps> = ({
  origin,
  destination,
  mode,
  routeResult,
  fuelPriceTL,
  fuelConsumption,
  onFuelPriceChange,
  onFuelConsumptionChange,
}) => {
  const [copied, setCopied] = useState(false);
  const [showFuelSettings, setShowFuelSettings] = useState(false);

  const handleShare = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    setCopied(true);
    confetti({ particleCount: 60, spread: 70, origin: { y: 0.8 } });
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  const getModeTitle = () => {
    switch (mode) {
      case 'car': return 'Otomobil İle';
      case 'bus': return 'Otobüs İle (Mola Dahil)';
      case 'flight': return 'Uçak İle (Havalimanı Dahil)';
      case 'train': return 'Tren / YHT İle';
      case 'walking': return 'Yürüyerek';
    }
  };

  return (
    <div className="glass-panel rounded-3xl p-6 sm:p-8 mt-6 shadow-2xl border border-white/10 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-widest">
            <Sparkles className="w-4 h-4 text-cyan-400" /> ROTA & MESAFE ÖZETİ
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white mt-1 flex items-center gap-2">
            <span>{origin.flagEmoji} {origin.name}</span>
            <ArrowRight className="w-5 h-5 text-blue-400" />
            <span>{destination.flagEmoji} {destination.name}</span>
          </h2>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleShare}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-medium transition-all shadow-sm"
          >
            {copied ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4 text-blue-400" />}
            <span>{copied ? 'Bağlantı Kopyalandı!' : 'Rotayı Paylaş'}</span>
          </button>
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-medium transition-all shadow-sm"
          >
            <Printer className="w-4 h-4 text-slate-400" />
            <span className="hidden sm:inline">Yazdır</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        <div className="bg-slate-900/80 border border-slate-800 hover:border-blue-500/40 rounded-2xl p-4 transition-all glass-card-hover">
          <div className="flex items-center justify-between text-slate-400 text-xs font-semibold mb-2">
            <span>KARAYOLU MESAFESİ</span>
            <MapPin className="w-4 h-4 text-blue-400" />
          </div>
          <div className="text-3xl font-black text-white">
            {routeResult.roadDistanceKm} <span className="text-sm font-bold text-slate-400">km</span>
          </div>
          <div className="mt-2 text-[11px] text-slate-400 flex items-center justify-between border-t border-slate-800 pt-2">
            <span>Kuş Uçuşu:</span>
            <span className="font-semibold text-slate-300">{routeResult.directDistanceKm} km</span>
          </div>
        </div>

        <div className="bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 rounded-2xl p-4 transition-all glass-card-hover">
          <div className="flex items-center justify-between text-slate-400 text-xs font-semibold mb-2">
            <span>TAHMİNİ SÜRE ({getModeTitle()})</span>
            <Clock className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-3xl font-black text-emerald-400">
            {routeResult.formattedDuration}
          </div>
          <div className="mt-2 text-[11px] text-slate-400 flex items-center justify-between border-t border-slate-800 pt-2">
            <span>Ortalama Hız:</span>
            <span className="font-semibold text-slate-300">
              {mode === 'car' ? '~90 km/s' : mode === 'bus' ? '~75 km/s' : mode === 'flight' ? '~780 km/s' : mode === 'train' ? '~110 km/s' : '~5 km/s'}
            </span>
          </div>
        </div>

        <div className="bg-slate-900/80 border border-slate-800 hover:border-amber-500/40 rounded-2xl p-4 transition-all glass-card-hover relative">
          <div className="flex items-center justify-between text-slate-400 text-xs font-semibold mb-2">
            <span>TAHMİNİ YAKIT MASRAFI</span>
            <button
              onClick={() => setShowFuelSettings(!showFuelSettings)}
              className="text-amber-400 hover:text-amber-300 transition-colors"
              title="Yakıt Ayarlarını Düzenle"
            >
              <Fuel className="w-4 h-4" />
            </button>
          </div>
          <div className="text-3xl font-black text-amber-400">
            {mode === 'car' || mode === 'bus' ? (
              <>
                {routeResult.fuelCostTL.toLocaleString('tr-TR')} <span className="text-sm font-bold text-slate-400">₺</span>
              </>
            ) : (
              <span className="text-xl text-slate-400 font-bold">- N/A -</span>
            )}
          </div>
          <div className="mt-2 text-[11px] text-slate-400 flex items-center justify-between border-t border-slate-800 pt-2">
            <span>Tüketim:</span>
            <span className="font-semibold text-slate-300">
              {mode === 'car' || mode === 'bus' ? `${routeResult.fuelLiters} Litre` : 'Bilet bazlı'}
            </span>
          </div>
        </div>

        <div className="bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 rounded-2xl p-4 transition-all glass-card-hover">
          <div className="flex items-center justify-between text-slate-400 text-xs font-semibold mb-2">
            <span>KARBON SALINIMI (CO2)</span>
            <Leaf className="w-4 h-4 text-cyan-400" />
          </div>
          <div className="text-3xl font-black text-cyan-400">
            {routeResult.co2Kg} <span className="text-sm font-bold text-slate-400">kg</span>
          </div>
          <div className="mt-2 text-[11px] text-slate-400 flex items-center justify-between border-t border-slate-800 pt-2">
            <span>Çevre Etkisi:</span>
            <span className={`font-semibold ${routeResult.co2Kg < 50 ? 'text-emerald-400' : routeResult.co2Kg < 150 ? 'text-amber-400' : 'text-rose-400'}`}>
              {routeResult.co2Kg < 50 ? '🌱 Düşük Salınım' : routeResult.co2Kg < 150 ? '⚠️ Orta Salınım' : '🚗 Yüksek Salınım'}
            </span>
          </div>
        </div>
      </div>

      {showFuelSettings && (
        <div className="mt-4 p-4 rounded-2xl bg-slate-900 border border-amber-500/40 shadow-xl">
          <div className="flex items-center justify-between text-xs font-bold text-amber-400 mb-3">
            <span>⛽ YAKIT MALİYET HESAPLAMA PARAMETRELERİ</span>
            <button onClick={() => setShowFuelSettings(false)} className="text-slate-400 hover:text-white">✕</button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="block text-slate-300 mb-1">Litre Fiyatı (TL/Litre):</label>
              <input
                type="number"
                step="0.5"
                value={fuelPriceTL}
                onChange={(e) => onFuelPriceChange(parseFloat(e.target.value) || 0)}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-1.5 text-white font-semibold focus:outline-none focus:border-amber-500"
              />
            </div>
            <div>
              <label className="block text-slate-300 mb-1">Araç Ortalama Tüketimi (L / 100 km):</label>
              <input
                type="number"
                step="0.2"
                value={fuelConsumption}
                onChange={(e) => onFuelConsumptionChange(parseFloat(e.target.value) || 0)}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-1.5 text-white font-semibold focus:outline-none focus:border-amber-500"
              />
            </div>
          </div>
        </div>
      )}

      {routeResult.intermediateCities.length > 0 && (
        <div className="mt-8 pt-6 border-t border-slate-800">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-slate-300 flex items-center gap-2">
              <Layers className="w-4 h-4 text-indigo-400" />
              <span>GÜZERGAH ÜZERİNDEKİ / YAKININDAKİ ŞEHİRLER ({routeResult.intermediateCities.length} ŞEHİR)</span>
            </h3>
            <span className="text-[11px] text-slate-500">Doğrusal Güzergah Analizi</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {routeResult.intermediateCities.map((city) => (
              <div
                key={city.id}
                className="px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-medium text-slate-300 flex items-center gap-2 hover:border-slate-700 transition-colors"
              >
                <span className="text-xs">{city.flagEmoji}</span>
                <span className="font-bold text-white">{city.name}</span>
                {city.plateCode && (
                  <span className="text-[10px] bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded">
                    {city.plateCode}
                  </span>
                )}
                {city.landmark && (
                  <span className="text-[10px] text-indigo-400 hidden sm:inline">
                    • {city.landmark.split('&')[0]}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 pt-6 border-t border-slate-800 text-xs">
        <div className="p-4 rounded-2xl bg-slate-900/60 border border-rose-500/20">
          <div className="font-bold text-rose-400 mb-1 flex items-center gap-2">
            <span>{origin.flagEmoji} {origin.name} Hakkında</span>
            {origin.plateCode && <span className="bg-rose-500/20 text-rose-300 px-2 py-0.5 rounded text-[10px]">Plaka {origin.plateCode}</span>}
          </div>
          <div className="text-slate-300 space-y-1 mt-2">
            <div><span className="text-slate-500">Ülke & Bölge:</span> {origin.country} ({origin.region})</div>
            {origin.population && <div><span className="text-slate-500">Nüfus:</span> {origin.population.toLocaleString('tr-TR')}</div>}
            {origin.landmark && <div><span className="text-slate-500">Öne Çıkan:</span> <span className="text-indigo-300 font-semibold">{origin.landmark}</span></div>}
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-slate-900/60 border border-emerald-500/20">
          <div className="font-bold text-emerald-400 mb-1 flex items-center gap-2">
            <span>{destination.flagEmoji} {destination.name} Hakkında</span>
            {destination.plateCode && <span className="bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded text-[10px]">Plaka {destination.plateCode}</span>}
          </div>
          <div className="text-slate-300 space-y-1 mt-2">
            <div><span className="text-slate-500">Ülke & Bölge:</span> {destination.country} ({destination.region})</div>
            {destination.population && <div><span className="text-slate-500">Nüfus:</span> {destination.population.toLocaleString('tr-TR')}</div>}
            {destination.landmark && <div><span className="text-slate-500">Öne Çıkan:</span> <span className="text-emerald-300 font-semibold">{destination.landmark}</span></div>}
          </div>
        </div>
      </div>
    </div>
  );
};
