import React from 'react';
import { Navigation, Heart } from 'lucide-react';
import type { LegalModalType } from './LegalModals';

interface FooterProps {
  onOpenLegalModal: (type: LegalModalType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegalModal }) => {
  return (
    <footer className="w-full border-t border-white/10 bg-slate-950/90 text-slate-400 py-8 mt-12 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="p-1.5 rounded-lg bg-blue-600">
              <Navigation className="w-4 h-4 text-white transform -rotate-45" />
            </div>
            <div>
              <span className="text-white font-black text-base">Nereye Nereden</span>
              <p className="text-slate-500 text-[11px]">Türkiye & Komşu Ülkeler Mesafe ve Rota Platformu</p>
            </div>
          </div>

          {/* Legal Links for Google AdSense Policy Compliance */}
          <div className="flex flex-wrap items-center gap-4 text-slate-400 font-medium">
            <button
              onClick={() => onOpenLegalModal('privacy')}
              className="hover:text-blue-400 transition-colors"
            >
              Gizlilik Politikası
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenLegalModal('terms')}
              className="hover:text-blue-400 transition-colors"
            >
              Kullanım Koşulları
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenLegalModal('contact')}
              className="hover:text-blue-400 transition-colors"
            >
              Hakkımızda & İletişim
            </button>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 text-slate-500">
            <div>© {new Date().getFullYear()} Nereye Nereden</div>
            <div className="hidden sm:inline">•</div>
            <div className="flex items-center gap-1 text-slate-400">
              <span>Hassas GPS verileriyle üretildi</span>
              <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
