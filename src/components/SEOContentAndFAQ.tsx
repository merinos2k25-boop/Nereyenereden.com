import React, { useState } from 'react';
import { HelpCircle, ChevronDown, BookOpen, ShieldCheck, MapPin, Fuel } from 'lucide-react';

export const SEOContentAndFAQ: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Türkiye illeri arasındaki karayolu mesafesi nasıl hesaplanır?',
      a: 'Sitemiz, Türkiye Karayolları Genel Müdürlüğü (KGM) verileri ve canlı OSRM (Open Source Routing Machine) karayolu harita servisini kullanarak iki nokta arasındaki en optimum sürüş rotasını ve gerçek karayolu kilometresini hesaplar.',
    },
    {
      q: 'Tahmini seyahat süreleri neleri kapsar?',
      a: 'Ulaşım moduna göre seyahat süresi değişmektedir: Otomobil için ortalama 90 km/s karayolu hızı, Otobüs için 75 km/s hız + 4 saatlik sürüş başına 45 dakika mola süresi, Uçak için kuş uçuşu mesafe + 90 dakika havalimanı ve güvenlik prosedürleri hesaba katılır.',
    },
    {
      q: 'Yakıt masrafı hesabı nasıl özelleştirilir?',
      a: 'Rota Özeti panelinde yer alan yakıt ayarları butonuna tıklayarak güncel benzin/motorin litre fiyatını (TL) ve aracınızın 100 kilometredeki ortalama yakıt tüketimini (L/100km) girip tam masrafınızı hesaplayabilirsiniz.',
    },
    {
      q: 'Komşu ülkelerin şehirleri arasındaki mesafeler dahil mi?',
      a: 'Evet, Türkiye\'nin 81 ilinin yanı sıra Yunanistan, Bulgaristan, Romanya, Gürcistan, Ermenistan, Azerbaycan, İran, Irak, Suriye, Kıbrıs, Lübnan ve Mısır\'ın ana şehirleri arasında da mesafe ve rota hesabı yapabilirsiniz.',
    },
    {
      q: 'Harita verileri ne kadar güncel ve güvenilirdir?',
      a: 'Haritalarımız OpenStreetMap, CartoDB ve Esri uydu sistemleri ile anlık olarak senkronize edilir. GPS tabanlı en hassas coğrafi koordinat verileri kullanılır.',
    },
  ];

  return (
    <section className="mt-12 space-y-8">
      
      {/* SEO Information Article Panel */}
      <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10">
        <div className="flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-widest mb-3">
          <BookOpen className="w-4 h-4 text-cyan-400" />
          <span>BİLGİ REHBERİ</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-white mb-4">
          Türkiye & Bölge Şehirleri Mesafe ve Rota Hesaplama Rehberi
        </h2>
        <div className="text-slate-300 text-xs sm:text-sm leading-relaxed space-y-3">
          <p>
            <strong>Nereden Nereye</strong>, seyahat planlayan sürücüler, yolcular, lojistik firmaları ve gezginler için tasarlanmış gelişmiş bir rota ve seyahat analiz platformudur. Türkiye'nin Adana'dan Zonguldak'a kadar tüm 81 ili ile komşu coğrafyamızdaki Atina, Sofya, Tiflis, Bakü, Tebriz, Erbil ve Lefkoşa gibi 30'u aşkın dünya şehri arasında anlık karayolu mesafesi hesaplayabilirsiniz.
          </p>
          <p>
            Platformumuz sadece km mesafesini değil; otomobil, otobüs, uçak, tren ve yürüyüş gibi farklı seyahat modlarına göre tahmini varış sürelerini, araç yakıt harcamasını (litre ve ₺) ve çevreye salınan karbon ayak izini (CO2 kg) ayrıntılı olarak raporlar.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 pt-6 border-t border-slate-800 text-xs">
          <div className="flex items-start gap-3 bg-slate-900/60 p-3.5 rounded-2xl border border-slate-800">
            <MapPin className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-white mb-1">81 İl + Komşular</div>
              <div className="text-slate-400">Türkiye'nin tüm illeri ve yakın komşu ülkelerin şehir veri tabanı.</div>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-slate-900/60 p-3.5 rounded-2xl border border-slate-800">
            <Fuel className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-white mb-1">Canlı Yakıt Simülatörü</div>
              <div className="text-slate-400">Aracınızın yakıt tüketimi ve güncel pompalama fiyatına göre masraf hesabı.</div>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-slate-900/60 p-3.5 rounded-2xl border border-slate-800">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-white mb-1">Canlı OSRM Rota</div>
              <div className="text-slate-400">Açık kaynaklı karayolu harita verileriyle gerçek virajlı otoyol çizimleri.</div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Accordion Section */}
      <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10">
        <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-widest mb-2">
          <HelpCircle className="w-4 h-4 text-amber-400" />
          <span>SIKÇA SORULAN SORULAR (SSS)</span>
        </div>
        <h2 className="text-xl font-black text-white mb-6">
          Mesafe ve Rota Hakkında Merak Edilenler
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between text-xs sm:text-sm font-bold text-white hover:text-blue-400 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0 ml-2 ${
                      isOpen ? 'rotate-180 text-blue-400' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-4 text-xs text-slate-300 border-t border-slate-800/60 pt-3 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
};
