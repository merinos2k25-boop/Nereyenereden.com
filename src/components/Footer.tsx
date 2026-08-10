import React from 'react';
import { Navigation, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-white/10 bg-slate-950/90 text-slate-400 py-8 mt-12 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-1.5 rounded-lg bg-blue-600">
              <Navigation className="w-4 h-4 text-white transform -rotate-45" />
            </div>
            <div>
              <span className="text-white font-black text-base">Nereden Nereye</span>
              <p className="text-slate-500 text-[11px]">Türkiye & Komşu Ülkeler Mesafe ve Rota Platformu</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 text-slate-500">
            <div>© {new Date().getFullYear()} Nereden Nereye. Tüm Hakları Saklıdır.</div>
            <div className="hidden sm:inline">•</div>
            <div className="flex items-center gap-1 text-slate-400">
              <span>Özenle ve hassas GPS verileriyle tasarlandı</span>
              <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
