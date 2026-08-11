import React from 'react';
import { MapPin, Navigation, Compass, Globe2, Sparkles } from 'lucide-react';

interface HeaderProps {
  onOpenMatrix: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenMatrix }) => {
  return (
    <header className="relative z-20 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
      {/* Glow highlight effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-24 bg-gradient-to-r from-blue-600/20 via-indigo-500/30 to-emerald-500/20 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex flex-col items-center text-center">

          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs sm:text-sm font-medium mb-3 shadow-inner">
            <Sparkles className="w-3.5 h-3.5 animate-pulse text-cyan-400" />
            <span>Türkiye & Komşu Ülkeler Canlı Mesafe ve Rota Platformu</span>
            <span className="bg-blue-500/20 text-blue-300 text-[10px] px-2 py-0.5 rounded-full font-semibold">81 İl + 30+ Ülke Şehri</span>
          </div>

          {/* MAIN HEADLINE requested: "Nereden Nereye" */}
          <div className="flex items-center justify-center gap-3">
            <div className="p-2.5 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 shadow-lg shadow-blue-500/30">
              <Navigation className="w-8 h-8 sm:w-10 sm:h-10 text-white transform -rotate-45" />
            </div>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-blue-200 drop-shadow-sm">
              Nereye Nereden
            </h1>
          </div>

          {/* Subtitle */}
          <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-2xl font-normal leading-relaxed">
            Türkiye'nin tüm 81 ili ve etrafındaki komşu ülkeler arasında gerçekçi harita rotası,
            karayolu mesafesi, tahmini seyahat süresi ve yakıt hesabı yapın.
          </p>

          {/* Header Action Buttons */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm">
            <button
              onClick={onOpenMatrix}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-700/90 text-slate-200 border border-slate-700/60 transition-all shadow-sm font-medium hover:border-blue-500/50"
            >
              <Compass className="w-4 h-4 text-cyan-400" />
              <span>81 İl Mesafe Cetveli</span>
            </button>
            <div className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-400">
              <Globe2 className="w-4 h-4 text-emerald-400" />
              <span>Canlı OSRM Harita Servisi</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-400">
              <MapPin className="w-4 h-4 text-rose-400" />
              <span>GPS Hassas Konumlandırma</span>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};
