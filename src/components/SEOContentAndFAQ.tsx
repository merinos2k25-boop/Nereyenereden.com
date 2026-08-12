import React, { useState } from 'react';
import { HelpCircle, ChevronDown, BookOpen, ShieldCheck, MapPin, Fuel, Car, Globe2, Navigation } from 'lucide-react';

export const SEOContentAndFAQ: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Türkiye illeri arasındaki karayolu mesafesi nasıl hesaplanır?',
      a: 'Sitemiz, canlı OSRM (Open Source Routing Machine) karayolu harita servisini kullanarak iki nokta arasındaki en optimum sürüş rotasını ve gerçek karayolu kilometresini hesaplar. Hesaplama, araç tipine uygun yolları, otoyolları ve devlet yollarını dikkate alarak yapılır. Sonuçlar, anlık trafik bilgisi olmaksızın standart sürüş koşullarına göre verilir.',
    },
    {
      q: 'İstanbul\'dan Ankara\'ya kaç kilometre?',
      a: 'İstanbul\'dan Ankara\'ya karayolu mesafesi yaklaşık 450-454 km\'dir. D100 (E80) güzergahı üzerinden ortalama 5 saat sürer. TEM Otoyolu üzerinden gidildiğinde süre yaklaşık 4,5 saate düşebilir. Sitemizden her iki şehri seçerek canlı rota ve güncel yakıt masrafınızı hesaplayabilirsiniz.',
    },
    {
      q: 'Tahmini seyahat süreleri neleri kapsar?',
      a: 'Ulaşım moduna göre seyahat süresi değişmektedir: Otomobil için ortalama 90 km/s karayolu hızı, Otobüs için 75 km/s hız + 4 saatlik sürüş başına 45 dakika mola süresi, Uçak için kuş uçuşu mesafe + 90 dakika havalimanı ve güvenlik prosedürleri hesaba katılır. Tren için Türkiye YHT ve konvansiyonel hat hızları baz alınır.',
    },
    {
      q: 'Yakıt masrafı hesabı nasıl özelleştirilir?',
      a: 'Rota Özeti panelinde yer alan yakıt ikonu butonuna tıklayarak güncel benzin/motorin litre fiyatını (TL) ve aracınızın 100 kilometredeki ortalama yakıt tüketimini (L/100km) girerek tam masrafınızı hesaplayabilirsiniz. Varsayılan değerler güncellenebildiğinden farklı araç tipleri için karşılaştırma yapabilirsiniz.',
    },
    {
      q: 'Komşu ülkelerin şehirleri arasındaki mesafeler dahil mi?',
      a: 'Evet! Türkiye\'nin 81 ilinin yanı sıra Yunanistan (Atina, Selanik, Dedeağaç), Bulgaristan (Sofya, Filibe, Varna), Romanya (Bükreş, Köstence), Gürcistan (Tiflis, Batum), Ermenistan (Erivan), Azerbaycan (Bakü, Gence, Nahçıvan), İran (Tebriz, Tahran, Urmiye), Irak (Erbil, Musul, Bağdat), Suriye (Halep, Şam), Kıbrıs (Lefkoşa, Girne, Gazimağusa), Lübnan (Beyrut) ve Mısır (Kahire, İskenderiye) şehirleri arasında mesafe ve rota hesabı yapabilirsiniz.',
    },
    {
      q: 'İzmir\'den Antalya\'ya araçla kaç saat sürer?',
      a: 'İzmir\'den Antalya\'ya karayoluyla mesafe yaklaşık 320-330 km olup ortalama sürüş süresi 3,5 ile 4 saat arasındadır. Muğla ve Denizli üzerinden geçen dağlık güzergah sürüşü uzatabilir. Sitemizde İzmir ve Antalya\'yı seçerek harita üzerinde tam rotanızı ve benzin masrafınızı görebilirsiniz.',
    },
    {
      q: 'Harita verileri ne kadar güncel ve güvenilirdir?',
      a: 'Haritalarımız OpenStreetMap, CartoDB Dark Matter ve Esri World Imagery uydu sistemleri ile senkronize edilir. GPS tabanlı hassas coğrafi koordinatlar kullanılır. 4 farklı harita katmanı (Karanlık Gece, Modern Sokak, Gerçekçi Uydu, Topografik Arazi) arasında geçiş yapabilirsiniz.',
    },
    {
      q: 'Türkiye\'den yurt dışına araba ile nasıl gidilir?',
      a: 'Türkiye\'den karayoluyla komşu ülkelere ulaşmak mümkündür. Bulgaristan ve Yunanistan\'a Edirne-Kapıkule ve İpsala sınır kapılarından geçilebilir. Gürcistan\'a Artvin-Sarp sınır kapısından, İran\'a Ağrı-Gürbulak veya Hakkari-Esendere kapılarından geçilebilir. Sitemizden kalkış ve varış noktalarını seçerek tüm sınır ötesi rotanızı planlayabilirsiniz.',
    },
  ];

  const popularRoutes = [
    { from: 'İstanbul', to: 'Ankara', km: '454 km', time: '~4,5 sa' },
    { from: 'İstanbul', to: 'İzmir', km: '480 km', time: '~5 sa' },
    { from: 'Ankara', to: 'Antalya', km: '550 km', time: '~6 sa' },
    { from: 'İzmir', to: 'Antalya', km: '325 km', time: '~4 sa' },
    { from: 'İstanbul', to: 'Trabzon', km: '1090 km', time: '~11 sa' },
    { from: 'Ankara', to: 'Erzurum', km: '900 km', time: '~9 sa' },
    { from: 'İstanbul', to: 'Atina', km: '~870 km', time: '~10 sa' },
    { from: 'Ankara', to: 'Bakü', km: '~2350 km', time: '~25 sa' },
  ];

  return (
    <section className="mt-12 space-y-8">

      {/* Popular Routes Quick Table */}
      <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10">
        <div className="flex items-center gap-2 text-xs font-bold text-rose-400 uppercase tracking-widest mb-3">
          <Navigation className="w-4 h-4 text-rose-400" />
          <span>POPÜLER ROTALAR HIZLI BAŞVURU TABLOSU</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-white mb-5">
          Türkiye'nin En Çok Sorulan Karayolu Mesafeleri
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-slate-800">
          <table className="w-full text-xs sm:text-sm text-left">
            <thead className="bg-slate-900 text-slate-400 font-semibold uppercase text-[11px] tracking-wider">
              <tr>
                <th className="px-4 py-3">Kalkış</th>
                <th className="px-4 py-3">Varış</th>
                <th className="px-4 py-3 text-right">Karayolu Mesafesi</th>
                <th className="px-4 py-3 text-right">Tahmini Süre</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {popularRoutes.map((r, idx) => (
                <tr key={idx} className="hover:bg-slate-900/60 transition-colors text-slate-300">
                  <td className="px-4 py-3 font-semibold text-white">{r.from}</td>
                  <td className="px-4 py-3 font-semibold text-white">{r.to}</td>
                  <td className="px-4 py-3 text-right font-bold text-blue-400">{r.km}</td>
                  <td className="px-4 py-3 text-right font-bold text-emerald-400">{r.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-[11px] text-slate-500 mt-3">* Süreler ortalama karayolu koşullarına göre tahmin edilmiştir. Trafik ve yol durumuna göre değişebilir.</p>
      </div>

      {/* SEO Information Article Panel */}
      <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10">
        <div className="flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-widest mb-3">
          <BookOpen className="w-4 h-4 text-cyan-400" />
          <span>BİLGİ REHBERİ</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-white mb-4">
          Türkiye & Komşu Ülkeler Arası Mesafe ve Rota Hesaplama Rehberi
        </h2>
        <div className="text-slate-300 text-xs sm:text-sm leading-relaxed space-y-4">
          <p>
            <strong>Nereden Nereye</strong>, seyahat planlayan sürücüler, yolcular, lojistik firmaları ve gezginler için tasarlanmış kapsamlı bir rota ve seyahat analiz platformudur. Türkiye'nin Adana'dan Zonguldak'a kadar tüm 81 ili ile komşu coğrafyamızdaki Atina, Sofya, Tiflis, Bakü, Tebriz, Erbil ve Lefkoşa gibi 30'u aşkın dünya şehri arasında anlık karayolu mesafesi ve rota hesabı yapabilirsiniz.
          </p>
          <p>
            Platformumuz sadece kilometre mesafesini değil; otomobil, otobüs, uçak, tren ve yürüyüş gibi farklı seyahat modlarına göre tahmini varış sürelerini, araç yakıt harcamasını (litre ve ₺) ve çevreye salınan karbon ayak izini (CO2 kg) ayrıntılı olarak raporlar. Yakıt fiyatı ve araç tüketim değerlerini kendinize göre özelleştirerek gerçekçi bir maliyet analizi yapabilirsiniz.
          </p>
          <p>
            Harita sistemi; CartoDB karanlık tema, OpenStreetMap cadde haritası, Esri uydu görüntüsü ve OpenTopoMap topografik arazi katmanları arasında geçiş imkanı sunmaktadır. OSRM motorunun sunduğu gerçek karayolu rota çizgileriyle harita üzerinde güzergahınızı net biçimde görebilirsiniz.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 pt-6 border-t border-slate-800 text-xs">
          <div className="flex items-start gap-3 bg-slate-900/60 p-3.5 rounded-2xl border border-slate-800">
            <MapPin className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-white mb-1">81 İl + 30+ Komşu Şehir</div>
              <div className="text-slate-400">Türkiye'nin tüm illeri ve yakın komşu ülkelerin kapsamlı şehir veri tabanı.</div>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-slate-900/60 p-3.5 rounded-2xl border border-slate-800">
            <Fuel className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-white mb-1">Canlı Yakıt Simülatörü</div>
              <div className="text-slate-400">Aracın tüketimi ve pompa fiyatına göre tam seyahat masrafı hesabı.</div>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-slate-900/60 p-3.5 rounded-2xl border border-slate-800">
            <Car className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-white mb-1">5 Ulaşım Modu</div>
              <div className="text-slate-400">Araba, otobüs, uçak, tren ve yürüyüş için ayrı süre hesabı.</div>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-slate-900/60 p-3.5 rounded-2xl border border-slate-800">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-white mb-1">Canlı OSRM Rota</div>
              <div className="text-slate-400">Gerçek karayolu harita verileriyle virajlı otoyol çizimleri.</div>
            </div>
          </div>
        </div>
      </div>

      {/* Regions Info Article */}
      <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10">
        <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3">
          <Globe2 className="w-4 h-4 text-emerald-400" />
          <span>TÜRKİYE BÖLGELER ARASI MESAFE REHBERİ</span>
        </div>
        <h2 className="text-xl font-black text-white mb-4">
          Türkiye'nin 7 Coğrafi Bölgesi Arasındaki Uzaklıklar
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <div className="space-y-3">
            <div className="p-4 bg-slate-900/60 rounded-2xl border border-slate-800">
              <div className="font-bold text-white mb-1">🌊 Marmara Bölgesi</div>
              <p>İstanbul, Bursa, Tekirdağ, Edirne, Kocaeli ve Yalova gibi şehirleri kapsayan Marmara Bölgesi, ülkenin en yoğun nüfuslu ve en gelişmiş altyapısına sahip bölgesidir. İstanbul'dan Bursa'ya mesafe yaklaşık 155 km, Edirne'ye ise yaklaşık 235 km'dir.</p>
            </div>
            <div className="p-4 bg-slate-900/60 rounded-2xl border border-slate-800">
              <div className="font-bold text-white mb-1">🏖️ Ege Bölgesi</div>
              <p>İzmir, Manisa, Aydın, Denizli, Muğla, Kütahya ve Uşak illerini kapsayan Ege Bölgesi, Türkiye'nin en önemli turizm ve tarım merkezlerinden biridir. İzmir'den Bodrum'a mesafe yaklaşık 250 km, Pamukkale'ye ise yaklaşık 195 km'dir.</p>
            </div>
            <div className="p-4 bg-slate-900/60 rounded-2xl border border-slate-800">
              <div className="font-bold text-white mb-1">🌺 Akdeniz Bölgesi</div>
              <p>Antalya, Mersin, Adana, Hatay, Isparta, Burdur ve Kahramanmaraş'ı içine alan bu bölge, ülkenin en uzun sahil şeridine sahiptir. Antalya'dan Mersin'e mesafe yaklaşık 320 km, Adana'ya ise yaklaşık 380 km'dir.</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="p-4 bg-slate-900/60 rounded-2xl border border-slate-800">
              <div className="font-bold text-white mb-1">🌾 İç Anadolu Bölgesi</div>
              <p>Ankara, Konya, Kayseri, Eskişehir, Nevşehir ve Sivas'ın yer aldığı İç Anadolu, Türkiye'nin coğrafi merkezi ve başkentidir. Ankara'dan Konya'ya mesafe yaklaşık 260 km, Kayseri'ye yaklaşık 340 km'dir. Kapadokya bölgesi olarak ünlü Nevşehir Ankara'ya 300 km uzaklıktadır.</p>
            </div>
            <div className="p-4 bg-slate-900/60 rounded-2xl border border-slate-800">
              <div className="font-bold text-white mb-1">🌲 Karadeniz Bölgesi</div>
              <p>Trabzon, Samsun, Ordu, Rize ve Giresun'u kapsayan Karadeniz kıyı şeridi boyunca uzanan bölge yemyeşil doğası ve çay bahçeleriyle ünlüdür. Trabzon'dan Samsun'a mesafe yaklaşık 360 km, Samsun'dan İstanbul'a mesafe yaklaşık 730 km'dir.</p>
            </div>
            <div className="p-4 bg-slate-900/60 rounded-2xl border border-slate-800">
              <div className="font-bold text-white mb-1">🏔️ Doğu ve Güneydoğu Anadolu</div>
              <p>Van, Erzurum, Diyarbakır, Gaziantep, Şanlıurfa ve Mardin'i kapsayan bu bölgeler hem tarihi zenginlikleri hem de coğrafi güzellikleriyle öne çıkar. Ankara'dan Erzurum'a mesafe yaklaşık 900 km, Van'a ise 1.300 km'dir.</p>
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
          Mesafe ve Rota Hesaplama Hakkında Merak Edilenler
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
                  <div className="px-5 pb-4 text-xs sm:text-sm text-slate-300 border-t border-slate-800/60 pt-3 leading-relaxed">
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
