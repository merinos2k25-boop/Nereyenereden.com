export interface City {
  id: string;
  name: string;
  plateCode?: number;
  country: string;
  countryCode: string;
  lat: number;
  lng: number;
  region: string;
  population?: number;
  isProvinceTR: boolean;
  landmark?: string;
  flagEmoji: string;
}

export const CITIES: City[] = [
  // --- TÜRKİYE (81 İL) ---
  { id: 'tr-01', name: 'Adana', plateCode: 1, country: 'Türkiye', countryCode: 'TR', lat: 37.0000, lng: 35.3213, region: 'Akdeniz', population: 2263373, isProvinceTR: true, landmark: 'Taşköprü & Sabancı Camii', flagEmoji: '🇹🇷' },
  { id: 'tr-02', name: 'Adıyaman', plateCode: 2, country: 'Türkiye', countryCode: 'TR', lat: 37.7648, lng: 38.2786, region: 'Güneydoğu Anadolu', population: 635169, isProvinceTR: true, landmark: 'Nemrut Dağı', flagEmoji: '🇹🇷' },
  { id: 'tr-03', name: 'Afyonkarahisar', plateCode: 3, country: 'Türkiye', countryCode: 'TR', lat: 38.7507, lng: 30.5567, region: 'Ege', population: 747555, isProvinceTR: true, landmark: 'Afyon Kalesi', flagEmoji: '🇹🇷' },
  { id: 'tr-04', name: 'Ağrı', plateCode: 4, country: 'Türkiye', countryCode: 'TR', lat: 39.7191, lng: 43.0503, region: 'Doğu Anadolu', population: 510626, isProvinceTR: true, landmark: 'İshak Paşa Sarayı', flagEmoji: '🇹🇷' },
  { id: 'tr-05', name: 'Amasya', plateCode: 5, country: 'Türkiye', countryCode: 'TR', lat: 40.6499, lng: 35.8353, region: 'Karadeniz', population: 339529, isProvinceTR: true, landmark: 'Kral Kaya Mezarları', flagEmoji: '🇹🇷' },
  { id: 'tr-06', name: 'Ankara', plateCode: 6, country: 'Türkiye', countryCode: 'TR', lat: 39.9334, lng: 32.8597, region: 'İç Anadolu', population: 5803482, isProvinceTR: true, landmark: 'Anıtkabir', flagEmoji: '🇹🇷' },
  { id: 'tr-07', name: 'Antalya', plateCode: 7, country: 'Türkiye', countryCode: 'TR', lat: 36.8969, lng: 30.7133, region: 'Akdeniz', population: 2688004, isProvinceTR: true, landmark: 'Kaleiçi & Düden Şelalesi', flagEmoji: '🇹🇷' },
  { id: 'tr-08', name: 'Artvin', plateCode: 8, country: 'Türkiye', countryCode: 'TR', lat: 41.1828, lng: 41.8183, region: 'Karadeniz', population: 169403, isProvinceTR: true, landmark: 'Borçka Karagöl', flagEmoji: '🇹🇷' },
  { id: 'tr-09', name: 'Aydın', plateCode: 9, country: 'Türkiye', countryCode: 'TR', lat: 37.8560, lng: 27.8416, region: 'Ege', population: 1148241, isProvinceTR: true, landmark: 'Afrodisias Antik Kenti', flagEmoji: '🇹🇷' },
  { id: 'tr-10', name: 'Balıkesir', plateCode: 10, country: 'Türkiye', countryCode: 'TR', lat: 39.6484, lng: 27.8826, region: 'Marmara', population: 1257590, isProvinceTR: true, landmark: 'Ayvalık & Cunda', flagEmoji: '🇹🇷' },
  { id: 'tr-11', name: 'Bilecik', plateCode: 11, country: 'Türkiye', countryCode: 'TR', lat: 40.1506, lng: 29.9792, region: 'Marmara', population: 228673, isProvinceTR: true, landmark: 'Şeyh Edebali Türbesi', flagEmoji: '🇹🇷' },
  { id: 'tr-12', name: 'Bingöl', plateCode: 12, country: 'Türkiye', countryCode: 'TR', lat: 38.8853, lng: 40.4980, region: 'Doğu Anadolu', population: 282556, isProvinceTR: true, landmark: 'Yüzen Adalar', flagEmoji: '🇹🇷' },
  { id: 'tr-13', name: 'Bitlis', plateCode: 13, country: 'Türkiye', countryCode: 'TR', lat: 38.4006, lng: 42.1095, region: 'Doğu Anadolu', population: 353988, isProvinceTR: true, landmark: 'Ahlat Selçuklu Mezarlığı', flagEmoji: '🇹🇷' },
  { id: 'tr-14', name: 'Bolu', plateCode: 14, country: 'Türkiye', countryCode: 'TR', lat: 40.7358, lng: 31.6061, region: 'Karadeniz', population: 320824, isProvinceTR: true, landmark: 'Yedi Göller National Park', flagEmoji: '🇹🇷' },
  { id: 'tr-15', name: 'Burdur', plateCode: 15, country: 'Türkiye', countryCode: 'TR', lat: 37.7203, lng: 30.2906, region: 'Akdeniz', population: 273716, isProvinceTR: true, landmark: 'Salda Gölü', flagEmoji: '🇹🇷' },
  { id: 'tr-16', name: 'Bursa', plateCode: 16, country: 'Türkiye', countryCode: 'TR', lat: 40.1885, lng: 29.0610, region: 'Marmara', population: 3194720, isProvinceTR: true, landmark: 'Ulucami & Uludağ', flagEmoji: '🇹🇷' },
  { id: 'tr-17', name: 'Çanakkale', plateCode: 17, country: 'Türkiye', countryCode: 'TR', lat: 40.1553, lng: 26.4142, region: 'Marmara', population: 559383, isProvinceTR: true, landmark: 'Troya Antik Kenti & Şehitlik', flagEmoji: '🇹🇷' },
  { id: 'tr-18', name: 'Çankırı', plateCode: 18, country: 'Türkiye', countryCode: 'TR', lat: 40.6013, lng: 33.6134, region: 'İç Anadolu', population: 195789, isProvinceTR: true, landmark: 'Tuz Mağarası', flagEmoji: '🇹🇷' },
  { id: 'tr-19', name: 'Çorum', plateCode: 19, country: 'Türkiye', countryCode: 'TR', lat: 40.5506, lng: 34.9556, region: 'Karadeniz', population: 524130, isProvinceTR: true, landmark: 'Hattuşaş Hitit Başkenti', flagEmoji: '🇹🇷' },
  { id: 'tr-20', name: 'Denizli', plateCode: 20, country: 'Türkiye', countryCode: 'TR', lat: 37.7765, lng: 29.0864, region: 'Ege', population: 1056332, isProvinceTR: true, landmark: 'Pamukkale Travertenleri', flagEmoji: '🇹🇷' },
  { id: 'tr-21', name: 'Diyarbakır', plateCode: 21, country: 'Türkiye', countryCode: 'TR', lat: 37.9144, lng: 40.2306, region: 'Güneydoğu Anadolu', population: 1804880, isProvinceTR: true, landmark: 'Diyarbakır Surları & Malabadi', flagEmoji: '🇹🇷' },
  { id: 'tr-22', name: 'Edirne', plateCode: 22, country: 'Türkiye', countryCode: 'TR', lat: 41.6772, lng: 26.5557, region: 'Marmara', population: 414714, isProvinceTR: true, landmark: 'Selimiye Camii', flagEmoji: '🇹🇷' },
  { id: 'tr-23', name: 'Elazığ', plateCode: 23, country: 'Türkiye', countryCode: 'TR', lat: 38.6810, lng: 39.2264, region: 'Doğu Anadolu', population: 591497, isProvinceTR: true, landmark: 'Harput Kalesi', flagEmoji: '🇹🇷' },
  { id: 'tr-24', name: 'Erzincan', plateCode: 24, country: 'Türkiye', countryCode: 'TR', lat: 39.7500, lng: 39.5000, region: 'Doğu Anadolu', population: 239223, isProvinceTR: true, landmark: 'Girlevik Şelalesi', flagEmoji: '🇹🇷' },
  { id: 'tr-25', name: 'Erzurum', plateCode: 25, country: 'Türkiye', countryCode: 'TR', lat: 39.9043, lng: 41.2679, region: 'Doğu Anadolu', population: 749754, isProvinceTR: true, landmark: 'Çifte Minareli Medrese & Palandöken', flagEmoji: '🇹🇷' },
  { id: 'tr-26', name: 'Eskişehir', plateCode: 26, country: 'Türkiye', countryCode: 'TR', lat: 39.7767, lng: 30.5206, region: 'İç Anadolu', population: 906617, isProvinceTR: true, landmark: 'Odunpazarı Evleri & Porsuk Çayı', flagEmoji: '🇹🇷' },
  { id: 'tr-27', name: 'Gaziantep', plateCode: 27, country: 'Türkiye', countryCode: 'TR', lat: 37.0662, lng: 37.3833, region: 'Güneydoğu Anadolu', population: 2154051, isProvinceTR: true, landmark: 'Zeugma Mozaik Müzesi', flagEmoji: '🇹🇷' },
  { id: 'tr-28', name: 'Giresun', plateCode: 28, country: 'Türkiye', countryCode: 'TR', lat: 40.9128, lng: 38.3895, region: 'Karadeniz', population: 450862, isProvinceTR: true, landmark: 'Giresun Adası & Kalesi', flagEmoji: '🇹🇷' },
  { id: 'tr-29', name: 'Gümüşhane', plateCode: 29, country: 'Türkiye', countryCode: 'TR', lat: 40.4602, lng: 39.4814, region: 'Karadeniz', population: 148539, isProvinceTR: true, landmark: 'Karaca Mağarası', flagEmoji: '🇹🇷' },
  { id: 'tr-30', name: 'Hakkari', plateCode: 30, country: 'Türkiye', countryCode: 'TR', lat: 37.5833, lng: 43.7333, region: 'Doğu Anadolu', population: 287625, isProvinceTR: true, landmark: 'Cilo Dağları & Cennet Cehennem Vadisi', flagEmoji: '🇹🇷' },
  { id: 'tr-31', name: 'Hatay', plateCode: 31, country: 'Türkiye', countryCode: 'TR', lat: 36.2023, lng: 36.1613, region: 'Akdeniz', population: 1686043, isProvinceTR: true, landmark: 'St. Pierre Kilisesi & Mozaik Müzesi', flagEmoji: '🇹🇷' },
  { id: 'tr-32', name: 'Isparta', plateCode: 32, country: 'Türkiye', countryCode: 'TR', lat: 37.7648, lng: 30.5566, region: 'Akdeniz', population: 445678, isProvinceTR: true, landmark: 'Kuyucak Lavanta Köyü & Eğirdir', flagEmoji: '🇹🇷' },
  { id: 'tr-33', name: 'Mersin', plateCode: 33, country: 'Türkiye', countryCode: 'TR', lat: 36.8121, lng: 34.6415, region: 'Akdeniz', population: 1916432, isProvinceTR: true, landmark: 'Kızkalesi & Cennet Cehennem Obrukları', flagEmoji: '🇹🇷' },
  { id: 'tr-34', name: 'İstanbul', plateCode: 34, country: 'Türkiye', countryCode: 'TR', lat: 41.0082, lng: 28.9784, region: 'Marmara', population: 15907951, isProvinceTR: true, landmark: 'Ayasofya & Galata Kulesi', flagEmoji: '🇹🇷' },
  { id: 'tr-35', name: 'İzmir', plateCode: 35, country: 'Türkiye', countryCode: 'TR', lat: 38.4237, lng: 27.1428, region: 'Ege', population: 4462056, isProvinceTR: true, landmark: 'Saat Kulesi & Efes Antik Kenti', flagEmoji: '🇹🇷' },
  { id: 'tr-36', name: 'Kars', plateCode: 36, country: 'Türkiye', countryCode: 'TR', lat: 40.6013, lng: 43.0975, region: 'Doğu Anadolu', population: 284923, isProvinceTR: true, landmark: 'Ani Harabeleri & Sarıkamış', flagEmoji: '🇹🇷' },
  { id: 'tr-37', name: 'Kastamonu', plateCode: 37, country: 'Türkiye', countryCode: 'TR', lat: 41.3887, lng: 33.7827, region: 'Karadeniz', population: 378115, isProvinceTR: true, landmark: 'Valla Kanyonu & Kalesi', flagEmoji: '🇹🇷' },
  { id: 'tr-38', name: 'Kayseri', plateCode: 38, country: 'Türkiye', countryCode: 'TR', lat: 38.7205, lng: 35.4826, region: 'İç Anadolu', population: 1441523, isProvinceTR: true, landmark: 'Erciyes Dağı & Kayseri Kalesi', flagEmoji: '🇹🇷' },
  { id: 'tr-39', name: 'Kırklareli', plateCode: 39, country: 'Türkiye', countryCode: 'TR', lat: 41.7333, lng: 27.2167, region: 'Marmara', population: 369347, isProvinceTR: true, landmark: 'İğneada Longoz Ormanları', flagEmoji: '🇹🇷' },
  { id: 'tr-40', name: 'Kırşehir', plateCode: 40, country: 'Türkiye', countryCode: 'TR', lat: 39.1425, lng: 34.1709, region: 'İç Anadolu', population: 242944, isProvinceTR: true, landmark: 'Ahi Evran Türbesi & Cacabey', flagEmoji: '🇹🇷' },
  { id: 'tr-41', name: 'Kocaeli', plateCode: 41, country: 'Türkiye', countryCode: 'TR', lat: 40.7654, lng: 29.9408, region: 'Marmara', population: 2079072, isProvinceTR: true, landmark: 'Maşukiye & Kartepe', flagEmoji: '🇹🇷' },
  { id: 'tr-42', name: 'Konya', plateCode: 42, country: 'Türkiye', countryCode: 'TR', lat: 37.8746, lng: 32.4932, region: 'İç Anadolu', population: 2296347, isProvinceTR: true, landmark: 'Mevlana Müzesi & Çatalhöyük', flagEmoji: '🇹🇷' },
  { id: 'tr-43', name: 'Kütahya', plateCode: 43, country: 'Türkiye', countryCode: 'TR', lat: 39.4167, lng: 29.9833, region: 'Ege', population: 580701, isProvinceTR: true, landmark: 'Aizanoi Antik Kenti & Çini Müzesi', flagEmoji: '🇹🇷' },
  { id: 'tr-44', name: 'Malatya', plateCode: 44, country: 'Türkiye', countryCode: 'TR', lat: 38.3552, lng: 38.3095, region: 'Doğu Anadolu', population: 812580, isProvinceTR: true, landmark: 'Arslantepe Höyüğü', flagEmoji: '🇹🇷' },
  { id: 'tr-45', name: 'Manisa', plateCode: 45, country: 'Türkiye', countryCode: 'TR', lat: 38.6191, lng: 27.4289, region: 'Ege', population: 1468279, isProvinceTR: true, landmark: 'Spil Dağı National Park & Sardes', flagEmoji: '🇹🇷' },
  { id: 'tr-46', name: 'Kahramanmaraş', plateCode: 46, country: 'Türkiye', countryCode: 'TR', lat: 37.5858, lng: 36.9371, region: 'Akdeniz', population: 1177436, isProvinceTR: true, landmark: 'Eshab-ı Kehf & Taş Köprü', flagEmoji: '🇹🇷' },
  { id: 'tr-47', name: 'Mardin', plateCode: 47, country: 'Türkiye', countryCode: 'TR', lat: 37.3129, lng: 40.7350, region: 'Güneydoğu Anadolu', population: 870374, isProvinceTR: true, landmark: 'Eski Mardin Evleri & Deyrulzafaran', flagEmoji: '🇹🇷' },
  { id: 'tr-48', name: 'Muğla', plateCode: 48, country: 'Türkiye', countryCode: 'TR', lat: 37.2153, lng: 28.3636, region: 'Ege', population: 1048185, isProvinceTR: true, landmark: 'Bodrum, Fethiye Ölüdeniz & Marmaris', flagEmoji: '🇹🇷' },
  { id: 'tr-49', name: 'Muş', plateCode: 49, country: 'Türkiye', countryCode: 'TR', lat: 38.7432, lng: 41.5064, region: 'Doğu Anadolu', population: 405228, isProvinceTR: true, landmark: 'Malazgirt Ovası', flagEmoji: '🇹🇷' },
  { id: 'tr-50', name: 'Nevşehir', plateCode: 50, country: 'Türkiye', countryCode: 'TR', lat: 38.6244, lng: 34.7144, region: 'İç Anadolu', population: 310011, isProvinceTR: true, landmark: 'Kapadokya Peri Bacaları', flagEmoji: '🇹🇷' },
  { id: 'tr-51', name: 'Niğde', plateCode: 51, country: 'Türkiye', countryCode: 'TR', lat: 37.9667, lng: 34.6833, region: 'İç Anadolu', population: 365419, isProvinceTR: true, landmark: 'Alaaddin Camii & Aladağlar', flagEmoji: '🇹🇷' },
  { id: 'tr-52', name: 'Ordu', plateCode: 52, country: 'Türkiye', countryCode: 'TR', lat: 40.9839, lng: 37.8764, region: 'Karadeniz', population: 763190, isProvinceTR: true, landmark: 'Boztepe & Yason Burnu', flagEmoji: '🇹🇷' },
  { id: 'tr-53', name: 'Rize', plateCode: 53, country: 'Türkiye', countryCode: 'TR', lat: 41.0201, lng: 40.5234, region: 'Karadeniz', population: 344016, isProvinceTR: true, landmark: 'Ayder Yaylası & Zilkale', flagEmoji: '🇹🇷' },
  { id: 'tr-54', name: 'Sakarya', plateCode: 54, country: 'Türkiye', countryCode: 'TR', lat: 40.7569, lng: 30.3783, region: 'Marmara', population: 1080080, isProvinceTR: true, landmark: 'Sapanca Gölü & Acarlar Longozu', flagEmoji: '🇹🇷' },
  { id: 'tr-55', name: 'Samsun', plateCode: 55, country: 'Türkiye', countryCode: 'TR', lat: 41.2928, lng: 36.3313, region: 'Karadeniz', population: 1371274, isProvinceTR: true, landmark: 'Bandırma Vapuru & Onur Anıtı', flagEmoji: '🇹🇷' },
  { id: 'tr-56', name: 'Siirt', plateCode: 56, country: 'Türkiye', countryCode: 'TR', lat: 37.9333, lng: 41.9500, region: 'Güneydoğu Anadolu', population: 331700, isProvinceTR: true, landmark: 'Veysel Karani & Botan Kanyonu', flagEmoji: '🇹🇷' },
  { id: 'tr-57', name: 'Sinop', plateCode: 57, country: 'Türkiye', countryCode: 'TR', lat: 42.0231, lng: 35.1531, region: 'Karadeniz', population: 220799, isProvinceTR: true, landmark: 'Sinop Tarihi Cezaevi & Hamsilos', flagEmoji: '🇹🇷' },
  { id: 'tr-58', name: 'Sivas', plateCode: 58, country: 'Türkiye', countryCode: 'TR', lat: 39.7477, lng: 37.0179, region: 'İç Anadolu', population: 636121, isProvinceTR: true, landmark: 'Divriği Ulu Camii & Gök Medrese', flagEmoji: '🇹🇷' },
  { id: 'tr-59', name: 'Tekirdağ', plateCode: 59, country: 'Türkiye', countryCode: 'TR', lat: 40.9833, lng: 27.5167, region: 'Marmara', population: 1142451, isProvinceTR: true, landmark: 'Uçmakdere & Rakoczi Müzesi', flagEmoji: '🇹🇷' },
  { id: 'tr-60', name: 'Tokat', plateCode: 60, country: 'Türkiye', countryCode: 'TR', lat: 40.3167, lng: 36.5500, region: 'Karadeniz', population: 602567, isProvinceTR: true, landmark: 'Ballıca Mağarası & Tokat Kalesi', flagEmoji: '🇹🇷' },
  { id: 'tr-61', name: 'Trabzon', plateCode: 61, country: 'Türkiye', countryCode: 'TR', lat: 41.0027, lng: 39.7168, region: 'Karadeniz', population: 818023, isProvinceTR: true, landmark: 'Sümela Manastırı & Uzungöl', flagEmoji: '🇹🇷' },
  { id: 'tr-62', name: 'Tunceli', plateCode: 62, country: 'Türkiye', countryCode: 'TR', lat: 39.1079, lng: 39.5401, region: 'Doğu Anadolu', population: 84366, isProvinceTR: true, landmark: 'Munzur Vadisi Millî Parkı', flagEmoji: '🇹🇷' },
  { id: 'tr-63', name: 'Şanlıurfa', plateCode: 63, country: 'Türkiye', countryCode: 'TR', lat: 37.1674, lng: 38.7955, region: 'Güneydoğu Anadolu', population: 2170110, isProvinceTR: true, landmark: 'Göbeklitepe & Balıklıgöl', flagEmoji: '🇹🇷' },
  { id: 'tr-64', name: 'Uşak', plateCode: 64, country: 'Türkiye', countryCode: 'TR', lat: 38.6823, lng: 29.4082, region: 'Ege', population: 375454, isProvinceTR: true, landmark: 'Ulubey Kanyonu & Karun Hazineleri', flagEmoji: '🇹🇷' },
  { id: 'tr-65', name: 'Van', plateCode: 65, country: 'Türkiye', countryCode: 'TR', lat: 38.4891, lng: 43.4089, region: 'Doğu Anadolu', population: 1128749, isProvinceTR: true, landmark: 'Akdamar Adası & Van Gölü', flagEmoji: '🇹🇷' },
  { id: 'tr-66', name: 'Yozgat', plateCode: 66, country: 'Türkiye', countryCode: 'TR', lat: 39.8181, lng: 34.8147, region: 'İç Anadolu', population: 418442, isProvinceTR: true, landmark: 'Çamlık Milli Parkı & Basilica Therma', flagEmoji: '🇹🇷' },
  { id: 'tr-67', name: 'Zonguldak', plateCode: 67, country: 'Türkiye', countryCode: 'TR', lat: 41.4564, lng: 31.7987, region: 'Karadeniz', population: 588510, isProvinceTR: true, landmark: 'Gökgöl Mağarası & Maden Müzesi', flagEmoji: '🇹🇷' },
  { id: 'tr-68', name: 'Aksaray', plateCode: 68, country: 'Türkiye', countryCode: 'TR', lat: 38.3687, lng: 34.0370, region: 'İç Anadolu', population: 433055, isProvinceTR: true, landmark: 'Ihlara Vadisi & Hasan Dağı', flagEmoji: '🇹🇷' },
  { id: 'tr-69', name: 'Bayburt', plateCode: 69, country: 'Türkiye', countryCode: 'TR', lat: 40.2552, lng: 40.2249, region: 'Karadeniz', population: 84241, isProvinceTR: true, landmark: 'Baksı Müzesi & Bayburt Kalesi', flagEmoji: '🇹🇷' },
  { id: 'tr-70', name: 'Karaman', plateCode: 70, country: 'Türkiye', countryCode: 'TR', lat: 37.1759, lng: 33.2287, region: 'İç Anadolu', population: 260838, isProvinceTR: true, landmark: 'Karaman Kalesi & Binbirkilise', flagEmoji: '🇹🇷' },
  { id: 'tr-71', name: 'Kırıkkale', plateCode: 71, country: 'Türkiye', countryCode: 'TR', lat: 39.8468, lng: 33.5153, region: 'İç Anadolu', population: 277067, isProvinceTR: true, landmark: 'Çeşnigir Köprüsü', flagEmoji: '🇹🇷' },
  { id: 'tr-72', name: 'Batman', plateCode: 72, country: 'Türkiye', countryCode: 'TR', lat: 37.8812, lng: 41.1351, region: 'Güneydoğu Anadolu', population: 634491, isProvinceTR: true, landmark: 'Hasankeyf Antik Kenti', flagEmoji: '🇹🇷' },
  { id: 'tr-73', name: 'Şırnak', plateCode: 73, country: 'Türkiye', countryCode: 'TR', lat: 37.5164, lng: 42.4610, region: 'Güneydoğu Anadolu', population: 557605, isProvinceTR: true, landmark: 'Cudi Dağı & Kırmızı Medrese', flagEmoji: '🇹🇷' },
  { id: 'tr-74', name: 'Bartın', plateCode: 74, country: 'Türkiye', countryCode: 'TR', lat: 41.6358, lng: 32.3375, region: 'Karadeniz', population: 203351, isProvinceTR: true, landmark: 'Amasra & Kuşkayası Yol Anıtı', flagEmoji: '🇹🇷' },
  { id: 'tr-75', name: 'Ardahan', plateCode: 75, country: 'Türkiye', countryCode: 'TR', lat: 41.1105, lng: 42.7022, region: 'Doğu Anadolu', population: 92481, isProvinceTR: true, landmark: 'Çıldır Gölü & Ardahan Kalesi', flagEmoji: '🇹🇷' },
  { id: 'tr-76', name: 'Iğdır', plateCode: 76, country: 'Türkiye', countryCode: 'TR', lat: 39.9167, lng: 44.0333, region: 'Doğu Anadolu', population: 203594, isProvinceTR: true, landmark: 'Ağrı Dağı Eteği & Tuzluca Tuz Terapi', flagEmoji: '🇹🇷' },
  { id: 'tr-77', name: 'Yalova', plateCode: 77, country: 'Türkiye', countryCode: 'TR', lat: 40.6500, lng: 29.2667, region: 'Marmara', population: 296333, isProvinceTR: true, landmark: 'Yürüyen Köşk & Termal Kaplıcalar', flagEmoji: '🇹🇷' },
  { id: 'tr-78', name: 'Karabük', plateCode: 78, country: 'Türkiye', countryCode: 'TR', lat: 41.2061, lng: 32.6204, region: 'Karadeniz', population: 252058, isProvinceTR: true, landmark: 'Safranbolu Evleri', flagEmoji: '🇹🇷' },
  { id: 'tr-79', name: 'Kilis', plateCode: 79, country: 'Türkiye', countryCode: 'TR', lat: 36.7184, lng: 37.1212, region: 'Güneydoğu Anadolu', population: 147919, isProvinceTR: true, landmark: 'Ravanda Kalesi', flagEmoji: '🇹🇷' },
  { id: 'tr-80', name: 'Osmaniye', plateCode: 80, country: 'Türkiye', countryCode: 'TR', lat: 37.0742, lng: 36.2477, region: 'Akdeniz', population: 559405, isProvinceTR: true, landmark: 'Kastabala Antik Kenti & Karatepe', flagEmoji: '🇹🇷' },
  { id: 'tr-81', name: 'Düzce', plateCode: 81, country: 'Türkiye', countryCode: 'TR', lat: 40.8438, lng: 31.1565, region: 'Karadeniz', population: 405131, isProvinceTR: true, landmark: 'Güzeldere Şelalesi & Akçakoca', flagEmoji: '🇹🇷' },

  // --- KOMŞU VE YAKIN ÇEVRE ÜLKELERİ ---
  // Yunanistan
  { id: 'gr-ath', name: 'Atina (Athens)', country: 'Yunanistan', countryCode: 'GR', lat: 37.9838, lng: 23.7275, region: 'Yunanistan', population: 3153000, isProvinceTR: false, landmark: 'Akropolis & Parthenon', flagEmoji: '🇬🇷' },
  { id: 'gr-skg', name: 'Selanik (Thessaloniki)', country: 'Yunanistan', countryCode: 'GR', lat: 40.6401, lng: 22.9444, region: 'Yunanistan', population: 815000, isProvinceTR: false, landmark: 'Beyaz Kule & Atatürk Evi', flagEmoji: '🇬🇷' },
  { id: 'gr-axd', name: 'Dedeağaç (Alexandroupoli)', country: 'Yunanistan', countryCode: 'GR', lat: 40.8457, lng: 25.8739, region: 'Yunanistan', population: 57800, isProvinceTR: false, landmark: 'Dedeağaç Deniz Feneri', flagEmoji: '🇬🇷' },
  
  // Bulgaristan
  { id: 'bg-sof', name: 'Sofya (Sofia)', country: 'Bulgaristan', countryCode: 'BG', lat: 42.6977, lng: 23.3219, region: 'Bulgaristan', population: 1280000, isProvinceTR: false, landmark: 'Aleksandr Nevski Katedrali', flagEmoji: '🇧🇬' },
  { id: 'bg-plo', name: 'Filibe (Plovdiv)', country: 'Bulgaristan', countryCode: 'BG', lat: 42.1354, lng: 24.7453, region: 'Bulgaristan', population: 346000, isProvinceTR: false, landmark: 'Roma Amfitiyatrosu & Eski Şehir', flagEmoji: '🇧🇬' },
  { id: 'bg-var', name: 'Varna', country: 'Bulgaristan', countryCode: 'BG', lat: 43.2141, lng: 27.9147, region: 'Bulgaristan', population: 335000, isProvinceTR: false, landmark: 'Varna Karadeniz Sahili', flagEmoji: '🇧🇬' },
  { id: 'bg-bur', name: 'Burgaz (Burgas)', country: 'Bulgaristan', countryCode: 'BG', lat: 42.5048, lng: 27.4626, region: 'Bulgaristan', population: 200000, isProvinceTR: false, landmark: 'Burgaz Deniz Parkı', flagEmoji: '🇧🇬' },

  // Romanya
  { id: 'ro-buc', name: 'Bükreş (Bucharest)', country: 'Romanya', countryCode: 'RO', lat: 44.4323, lng: 26.1063, region: 'Romanya', population: 1830000, isProvinceTR: false, landmark: 'Parlamento Sarayı', flagEmoji: '🇷🇴' },
  { id: 'ro-cnd', name: 'Köstence (Constanța)', country: 'Romanya', countryCode: 'RO', lat: 44.1792, lng: 28.6498, region: 'Romanya', population: 283000, isProvinceTR: false, landmark: 'Köstence Gazinosu & Karadeniz', flagEmoji: '🇷🇴' },

  // Gürcistan
  { id: 'ge-tbs', name: 'Tiflis (Tbilisi)', country: 'Gürcistan', countryCode: 'GE', lat: 41.7151, lng: 44.8271, region: 'Gürcistan', population: 1170000, isProvinceTR: false, landmark: 'Narikala Kalesi & Barış Köprüsü', flagEmoji: '🇬🇪' },
  { id: 'ge-bat', name: 'Batum (Batumi)', country: 'Gürcistan', countryCode: 'GE', lat: 41.6168, lng: 41.6367, region: 'Gürcistan', population: 170000, isProvinceTR: false, landmark: 'Ali ve Nino Heykeli', flagEmoji: '🇬🇪' },

  // Ermenistan
  { id: 'am-evn', name: 'Erivan (Yerevan)', country: 'Ermenistan', countryCode: 'AM', lat: 40.1792, lng: 44.4991, region: 'Ermenistan', population: 1090000, isProvinceTR: false, landmark: 'Cumhuriyet Meydanı & Kaskad', flagEmoji: '🇦🇲' },

  // Azerbaycan
  { id: 'az-bak', name: 'Bakü (Baku)', country: 'Azerbaycan', countryCode: 'AZ', lat: 40.4093, lng: 49.8671, region: 'Azerbaycan', population: 2300000, isProvinceTR: false, landmark: 'Alev Kuleleri & Kız Kalesi', flagEmoji: '🇦🇿' },
  { id: 'az-gnj', name: 'Gence (Ganja)', country: 'Azerbaycan', countryCode: 'AZ', lat: 40.6828, lng: 46.3606, region: 'Azerbaycan', population: 335000, isProvinceTR: false, landmark: 'Nizami Gencevi Türbesi', flagEmoji: '🇦🇿' },
  { id: 'az-nak', name: 'Nahçıvan (Nakhchivan)', country: 'Azerbaycan', countryCode: 'AZ', lat: 39.2089, lng: 45.4122, region: 'Azerbaycan', population: 95000, isProvinceTR: false, landmark: 'Mümine Hatun Türbesi', flagEmoji: '🇦🇿' },

  // İran
  { id: 'ir-tbz', name: 'Tebriz (Tabriz)', country: 'İran', countryCode: 'IR', lat: 38.0962, lng: 46.2694, region: 'İran', population: 1550000, isProvinceTR: false, landmark: 'Tebriz Tarihi Kapalı Çarşısı', flagEmoji: '🇮🇷' },
  { id: 'ir-thr', name: 'Tahran (Tehran)', country: 'İran', countryCode: 'IR', lat: 35.6892, lng: 51.3890, region: 'İran', population: 8690000, isProvinceTR: false, landmark: 'Azadi Kulesi & Gülistan Sarayı', flagEmoji: '🇮🇷' },
  { id: 'ir-urm', name: 'Urmiye (Urmia)', country: 'İran', countryCode: 'IR', lat: 37.5527, lng: 45.0761, region: 'İran', population: 736000, isProvinceTR: false, landmark: 'Urmiye Gölü', flagEmoji: '🇮🇷' },

  // Irak
  { id: 'iq-erbil', name: 'Erbil (Hewlêr)', country: 'Irak', countryCode: 'IQ', lat: 36.1901, lng: 44.0091, region: 'Irak', population: 879000, isProvinceTR: false, landmark: 'Tarihi Erbil Kalesi', flagEmoji: '🇮🇶' },
  { id: 'iq-mos', name: 'Musul (Mosul)', country: 'Irak', countryCode: 'IQ', lat: 36.3400, lng: 43.1300, region: 'Irak', population: 1680000, isProvinceTR: false, landmark: 'Eski Musul Çarşısı', flagEmoji: '🇮🇶' },
  { id: 'iq-bgd', name: 'Bağdat (Baghdad)', country: 'Irak', countryCode: 'IQ', lat: 33.3152, lng: 44.3661, region: 'Irak', population: 7140000, isProvinceTR: false, landmark: 'Kurtuluş Anıtı & Dicle Nehri', flagEmoji: '🇮🇶' },

  // Suriye
  { id: 'sy-alp', name: 'Halep (Aleppo)', country: 'Suriye', countryCode: 'SY', lat: 36.2021, lng: 37.1343, region: 'Suriye', population: 1850000, isProvinceTR: false, landmark: 'Halep Kalesi', flagEmoji: '🇸🇾' },
  { id: 'sy-dam', name: 'Şam (Damascus)', country: 'Suriye', countryCode: 'SY', lat: 33.5138, lng: 36.2765, region: 'Suriye', population: 2070000, isProvinceTR: false, landmark: 'Emevi Camii', flagEmoji: '🇸🇾' },

  // Kıbrıs
  { id: 'cy-nic', name: 'Lefkoşa (Nicosia)', country: 'Kıbrıs', countryCode: 'CY', lat: 35.1856, lng: 33.3823, region: 'Kıbrıs', population: 200000, isProvinceTR: false, landmark: 'Büyük Han & Selimiye Camii', flagEmoji: '🇨🇾' },
  { id: 'cy-kyr', name: 'Girne (Kyrenia)', country: 'Kıbrıs', countryCode: 'CY', lat: 35.3364, lng: 33.3182, region: 'Kıbrıs', population: 33000, isProvinceTR: false, landmark: 'Girne Kalesi & Yat Limanı', flagEmoji: '🇨🇾' },
  { id: 'cy-fam', name: 'Gazimağusa (Famagusta)', country: 'Kıbrıs', countryCode: 'CY', lat: 35.1250, lng: 33.9500, region: 'Kıbrıs', population: 42000, isProvinceTR: false, landmark: 'Lala Mustafa Paşa Camii', flagEmoji: '🇨🇾' },

  // Lübnan
  { id: 'lb-bey', name: 'Beyrut (Beirut)', country: 'Lübnan', countryCode: 'LB', lat: 33.8938, lng: 35.5018, region: 'Lübnan', population: 2400000, isProvinceTR: false, landmark: 'Güvercin Kayalıkları (Raouché)', flagEmoji: '🇱🇧' },

  // Mısır
  { id: 'eg-cai', name: 'Kahire (Cairo)', country: 'Mısır', countryCode: 'EG', lat: 30.0444, lng: 31.2357, region: 'Mısır', population: 9600000, isProvinceTR: false, landmark: 'Giza Piramitleri & Nil Nehri', flagEmoji: '🇪🇬' },
  { id: 'eg-alex', name: 'İskenderiye (Alexandria)', country: 'Mısır', countryCode: 'EG', lat: 31.2001, lng: 29.9187, region: 'Mısır', population: 5200000, isProvinceTR: false, landmark: 'İskenderiye Kütüphanesi', flagEmoji: '🇪🇬' }
];

export const POPULAR_ROUTES = [
  { originId: 'tr-34', destId: 'tr-06', name: 'İstanbul ➔ Ankara' },
  { originId: 'tr-34', destId: 'tr-35', name: 'İstanbul ➔ İzmir' },
  { originId: 'tr-06', destId: 'tr-07', name: 'Ankara ➔ Antalya' },
  { originId: 'tr-35', destId: 'tr-07', name: 'İzmir ➔ Antalya' },
  { originId: 'tr-34', destId: 'tr-61', name: 'İstanbul ➔ Trabzon' },
  { originId: 'tr-34', destId: 'gr-ath', name: 'İstanbul ➔ Atina 🇬🇷' },
  { originId: 'tr-34', destId: 'bg-sof', name: 'İstanbul ➔ Sofya 🇧🇬' },
  { originId: 'tr-06', destId: 'az-bak', name: 'Ankara ➔ Bakü 🇦🇿' },
  { originId: 'tr-27', destId: 'tr-31', name: 'Gaziantep ➔ Hatay' },
];
