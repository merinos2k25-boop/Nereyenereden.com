import React, { useState } from 'react';
import type { City } from '../data/citiesData';
import { calculateHaversineDistance, formatMinutes } from '../utils/distanceCalculator';
import { X, Search, Compass, ArrowUpDown } from 'lucide-react';

interface DistanceMatrixModalProps {
  isOpen: boolean;
  onClose: () => void;
  cities: City[];
  onSelectRoute: (origin: City, dest: City) => void;
}

export const DistanceMatrixModal: React.FC<DistanceMatrixModalProps> = ({
  isOpen,
  onClose,
  cities,
  onSelectRoute,
}) => {
  const [selectedCenter, setSelectedCenter] = useState<City>(
    cities.find((c) => c.plateCode === 6) || cities[0]
  );
  const [search, setSearch] = useState('');
  const [regionFilter, setRegionFilter] = useState<string>('ALL');
  const [sortOrder, setSortOrder] = useState<'dist-asc' | 'dist-desc' | 'plate'>('dist-asc');

  if (!isOpen) return null;

  const matrixData = cities
    .filter((c) => c.id !== selectedCenter.id)
    .map((target) => {
      const directDist = calculateHaversineDistance(
        selectedCenter.lat,
        selectedCenter.lng,
        target.lat,
        target.lng
      );
      const roadDist = Math.round(directDist * 1.26);
      const durationMins = (roadDist / 90) * 60;

      return {
        target,
        directDist,
        roadDist,
        durationMins,
        formattedDuration: formatMinutes(durationMins),
      };
    });

  const filteredData = matrixData.filter((item) => {
    const matchesSearch =
      item.target.name.toLowerCase().includes(search.toLowerCase()) ||
      (item.target.plateCode && item.target.plateCode.toString().includes(search));
    const matchesRegion = regionFilter === 'ALL' || item.target.region === regionFilter;
    return matchesSearch && matchesRegion;
  });

  filteredData.sort((a, b) => {
    if (sortOrder === 'dist-asc') return a.roadDist - b.roadDist;
    if (sortOrder === 'dist-desc') return b.roadDist - a.roadDist;
    if (sortOrder === 'plate') {
      return (a.target.plateCode || 999) - (b.target.plateCode || 999);
    }
    return 0;
  });

  const regions = Array.from(new Set(cities.map((c) => c.region)));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="glass-panel w-full max-w-5xl rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/10 relative max-h-[90vh] flex flex-col">
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-blue-600/20 text-blue-400">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-white">81 İl & Komşu Ülkeler Mesafe Cetveli</h2>
              <p className="text-xs text-slate-400">
                Seçilen il ile tüm Türkiye ve komşu şehirler arasındaki mesafeleri karşılaştırın.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 my-4">
          <div className="sm:col-span-5">
            <label className="block text-xs font-semibold text-blue-400 mb-1">
              MERKEZ ŞEHİR SEÇİN:
            </label>
            <select
              value={selectedCenter.id}
              onChange={(e) => {
                const found = cities.find((c) => c.id === e.target.value);
                if (found) setSelectedCenter(found);
              }}
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white font-bold focus:outline-none focus:border-blue-500"
            >
              {cities.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.flagEmoji} {c.name} {c.plateCode ? `(${c.plateCode.toString().padStart(2, '0')})` : ''} - {c.region}
                </option>
              ))}
            </select>
          </div>

          <div className="sm:col-span-4">
            <label className="block text-xs font-semibold text-slate-400 mb-1">
              HEDEF ŞEHİR ARA:
            </label>
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Şehir veya plaka..."
                className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label className="block text-xs font-semibold text-slate-400 mb-1">
              BÖLGE:
            </label>
            <select
              value={regionFilter}
              onChange={(e) => setRegionFilter(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-blue-500"
            >
              <option value="ALL">Tüm Bölgeler</option>
              {regions.map((r) => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto border border-slate-800 rounded-2xl">
          <table className="w-full text-left text-xs">
            <thead className="sticky top-0 bg-slate-900 border-b border-slate-800 text-slate-400 font-semibold uppercase tracking-wider">
              <tr>
                <th className="px-4 py-3">Plaka / Bayrak</th>
                <th className="px-4 py-3">Hedef Şehir</th>
                <th className="px-4 py-3">Bölge</th>
                <th className="px-4 py-3 text-right">
                  <button
                    onClick={() => setSortOrder(sortOrder === 'dist-asc' ? 'dist-desc' : 'dist-asc')}
                    className="inline-flex items-center gap-1 hover:text-white"
                  >
                    <span>Karayolu Mesafesi</span>
                    <ArrowUpDown className="w-3 h-3 text-blue-400" />
                  </button>
                </th>
                <th className="px-4 py-3 text-right">Kuş Uçuşu</th>
                <th className="px-4 py-3 text-right">Tahmini Süre (Araç)</th>
                <th className="px-4 py-3 text-center">İşlem</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300">
              {filteredData.map((row) => (
                <tr key={row.target.id} className="hover:bg-slate-900/80 transition-colors">
                  <td className="px-4 py-2.5 font-bold">
                    <span className="mr-2 text-sm">{row.target.flagEmoji}</span>
                    {row.target.plateCode ? (
                      <span className="px-2 py-0.5 rounded bg-slate-800 text-blue-300 text-[10px]">
                        {row.target.plateCode.toString().padStart(2, '0')}
                      </span>
                    ) : (
                      <span className="text-[10px] text-slate-500">INT</span>
                    )}
                  </td>
                  <td className="px-4 py-2.5 font-bold text-white">
                    {row.target.name}
                  </td>
                  <td className="px-4 py-2.5 text-slate-400">{row.target.region}</td>
                  <td className="px-4 py-2.5 text-right font-black text-blue-400 text-sm">
                    {row.roadDist} km
                  </td>
                  <td className="px-4 py-2.5 text-right text-slate-400">
                    {row.directDist} km
                  </td>
                  <td className="px-4 py-2.5 text-right font-semibold text-emerald-400">
                    {row.formattedDuration}
                  </td>
                  <td className="px-4 py-2.5 text-center">
                    <button
                      onClick={() => {
                        onSelectRoute(selectedCenter, row.target);
                        onClose();
                      }}
                      className="px-3 py-1 rounded-lg bg-blue-600/30 hover:bg-blue-600 text-blue-300 hover:text-white border border-blue-500/30 text-[11px] font-semibold transition-all"
                    >
                      Haritada Göster
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <div>
            Toplam <span className="font-bold text-white">{filteredData.length}</span> şehir listeleniyor.
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium transition-colors"
          >
            Kapat
          </button>
        </div>
      </div>
    </div>
  );
};
