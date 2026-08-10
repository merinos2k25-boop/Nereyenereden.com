import React from 'react';
import { X, ShieldCheck, FileText, Mail } from 'lucide-react';

export type LegalModalType = 'privacy' | 'terms' | 'contact' | null;

interface LegalModalsProps {
  activeModal: LegalModalType;
  onClose: () => void;
}

export const LegalModals: React.FC<LegalModalsProps> = ({ activeModal, onClose }) => {
  if (!activeModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="glass-panel w-full max-w-3xl rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/10 relative max-h-[85vh] flex flex-col text-xs sm:text-sm text-slate-300">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-3">
            {activeModal === 'privacy' && <ShieldCheck className="w-6 h-6 text-emerald-400" />}
            {activeModal === 'terms' && <FileText className="w-6 h-6 text-blue-400" />}
            {activeModal === 'contact' && <Mail className="w-6 h-6 text-amber-400" />}
            <div>
              <h2 className="text-xl font-black text-white">
                {activeModal === 'privacy' && 'Gizlilik Politikası'}
                {activeModal === 'terms' && 'Kullanım Koşulları'}
                {activeModal === 'contact' && 'Hakkımızda & İletişim'}
              </h2>
              <p className="text-xs text-slate-400">Nereden Nereye Yasal ve Kullanıcı Politikaları</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto py-4 space-y-4 leading-relaxed">
          {activeModal === 'privacy' && (
            <>
              <p>
                <strong>Nereden Nereye</strong> olarak gizliliğinize büyük önem veriyoruz. Bu Gizlilik Politikası, sitemizi ziyaret ettiğinizde toplanan bilgilerin türlerini ve nasıl kullanıldığını açıklar.
              </p>

              <h3 className="font-bold text-white text-base mt-3">1. Çerezler (Cookies) ve Google AdSense</h3>
              <p>
                Sitemiz, Google AdSense ve üçüncü taraf reklam sağlayıcılarının reklam sunmasını sağlamak amacıyla çerezler (cookies) kullanabilir. Google, çerezleri kullanarak sitemize ve İnternet'teki diğer sitelere yapılan ziyaretlere dayalı reklamlar sunar.
              </p>
              <p>
                Kullanıcılar, <a href="https://www.google.com/settings/ads" target="_blank" rel="noreferrer" className="text-blue-400 underline">Google Reklam Ayarları</a> sayfasını ziyaret ederek kişiselleştirilmiş reklamcılığı devre dışı bırakabilirler.
              </p>

              <h3 className="font-bold text-white text-base mt-3">2. Kişisel Verilerin Toplanmaması</h3>
              <p>
                Platformumuz üzerinden yapılan mesafe ve rota hesaplamaları tamamen anonimdir. Kullanıcılara ait hiçbir kişisel kimlik verisi, kredi kartı veya konum geçmişi sunucularımızda saklanmaz.
              </p>

              <h3 className="font-bold text-white text-base mt-3">3. Dış Bağlantılar</h3>
              <p>
                Sitemiz harita servisleri (OpenStreetMap, CartoDB, OSRM) için harici bağlantılar içerebilir. Bu dış sitelerin gizlilik uygulamalarından sorumlu değiliz.
              </p>
            </>
          )}

          {activeModal === 'terms' && (
            <>
              <p>
                <strong>Nereden Nereye</strong> web platformuna hoş geldiniz. Bu siteyi kullanarak aşağıdaki kullanım koşullarını kabul etmiş olursunuz.
              </p>

              <h3 className="font-bold text-white text-base mt-3">1. Hizmet Amacı</h3>
              <p>
                Sitemizde sunulan mesafe, seyahat süresi, yakıt masrafı ve harita verileri bilgilendirme ve tahmini kılavuzluk amacıyla sunulmaktadır.
              </p>

              <h3 className="font-bold text-white text-base mt-3">2. Sorumluluk Sınırı</h3>
              <p>
                Yol durumu, trafik yoğunluğu, hava şartları veya geçici otoyol çalışmaları nedeniyle gerçek seyahat sürelerinde farklılıklar oluşabilir. Sitemiz hesaplama farklarından doğabilecek gecikmelerden sorumlu tutulamaz.
              </p>

              <h3 className="font-bold text-white text-base mt-3">3. Fikri Mülkiyet</h3>
              <p>
                Sitenin arayüz tasarımı, logosu ve kaynak kodları koruma altındadır. Kodların izinsiz kopyalanması yasaktır.
              </p>
            </>
          )}

          {activeModal === 'contact' && (
            <>
              <p>
                <strong>Nereden Nereye</strong>, Türkiye ve komşu ülkeler arasındaki mesafe ve rota planlamasını sürücüler ve seyahat severler için en kolay ve şeffaf hale getirmek amacıyla geliştirilmiştir.
              </p>

              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-2 mt-3">
                <div className="font-bold text-white">📧 İletişim & Geri Bildirim:</div>
                <div className="text-slate-300">Görüş, öneri veya reklam iş birlikleri için bize ulaşabilirsiniz:</div>
                <div className="font-mono text-blue-400 font-bold">iletisim@neredennereye.com</div>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="pt-3 border-t border-slate-800 flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-colors"
          >
            Anladım & Kapat
          </button>
        </div>

      </div>
    </div>
  );
};
