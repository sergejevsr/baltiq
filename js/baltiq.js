const STORAGE = {
  user: "baltiq_user",
  products: "baltiq_products",
  orders: "baltiq_orders",
  reviews: "baltiq_reviews",
  wallet: "baltiq_wallet",
  favorites: "baltiq_favorites",
};

const COMMISSION_EUR = 1;

const CARRIERS = [
  { id: "omniva", name: "Omniva", eta: "24–48 h", price: 2.99, hint: "LV / EE / LT" },
  { id: "dpd", name: "DPD Pickup", eta: "24–48 h", price: 2.49, hint: "LV / LT / EE" },
  { id: "venipak", name: "Venipak", eta: "1–2 d", price: 2.79, hint: "LV / LT / EE" },
  { id: "lpexpress", name: "LP Express", eta: "1–2 d", price: 2.59, hint: "LT / LV / EE" },
];

const LOCKERS = [
  { id: "om-riga-origo", carrier: "omniva", country: "LV", city: "Rīga", name: "Omniva Origo", address: "Stacijas laukums 2, Rīga, LV-1050" },
  { id: "om-riga-spice", carrier: "omniva", country: "LV", city: "Rīga", name: "Omniva Spice", address: "Lielirbes iela 29, Rīga, LV-1046" },
  { id: "om-riga-alfa", carrier: "omniva", country: "LV", city: "Rīga", name: "Omniva Alfa", address: "Brīvības gatve 372, Rīga, LV-1024" },
  { id: "om-liepaja", carrier: "omniva", country: "LV", city: "Liepāja", name: "Omniva Liepāja centrs", address: "Lielā iela 14, Liepāja, LV-3401" },
  { id: "om-dgp", carrier: "omniva", country: "LV", city: "Daugavpils", name: "Omniva Daugavpils", address: "Rīgas iela 9, Daugavpils, LV-5401" },
  { id: "om-jelgava", carrier: "omniva", country: "LV", city: "Jelgava", name: "Omniva Jelgava", address: "Lielā iela 19, Jelgava, LV-3001" },
  { id: "om-tln-ylemiste", carrier: "omniva", country: "EE", city: "Tallinn", name: "Omniva Ülemiste", address: "Suur-Sõjamäe tn 4, Tallinn, 11415" },
  { id: "om-tln-solaris", carrier: "omniva", country: "EE", city: "Tallinn", name: "Omniva Solaris", address: "Estonia puiestee 9, Tallinn, 10143" },
  { id: "om-tartu", carrier: "omniva", country: "EE", city: "Tartu", name: "Omniva Lõunakeskus", address: "Ringtee 75, Tartu, 50501" },
  { id: "om-parnu", carrier: "omniva", country: "EE", city: "Pärnu", name: "Omniva Pärnu Port Artur", address: "Lai 11, Pärnu, 80010" },
  { id: "om-narva", carrier: "omniva", country: "EE", city: "Narva", name: "Omniva Narva Astri", address: "Tallinna mnt 41, Narva, 20605" },
  { id: "om-vln-panorama", carrier: "omniva", country: "LT", city: "Vilnius", name: "Omniva Panorama", address: "Saltoniškių g. 9, Vilnius, 08105" },
  { id: "om-kaunas-mega", carrier: "omniva", country: "LT", city: "Kaunas", name: "Omniva Mega", address: "Islandijos pl. 32, Kaunas, 47446" },
  { id: "om-klaipeda", carrier: "omniva", country: "LT", city: "Klaipėda", name: "Omniva Akropolis", address: "Taikos pr. 61, Klaipėda, 91100" },
  { id: "dpd-riga-spice", carrier: "dpd", country: "LV", city: "Rīga", name: "DPD Pickup Spice", address: "Lielirbes iela 29, Rīga, LV-1046" },
  { id: "dpd-riga-centrs", carrier: "dpd", country: "LV", city: "Rīga", name: "DPD Pickup Galerija Centrs", address: "Audēju iela 16, Rīga, LV-1050" },
  { id: "dpd-riga-domina", carrier: "dpd", country: "LV", city: "Rīga", name: "DPD Pickup Domina", address: "Ieriķu iela 3, Rīga, LV-1084" },
  { id: "dpd-dgp", carrier: "dpd", country: "LV", city: "Daugavpils", name: "DPD Pickup Daugavpils", address: "Cietokšņa iela 60, Daugavpils, LV-5401" },
  { id: "dpd-vln-akropolis", carrier: "dpd", country: "LT", city: "Vilnius", name: "DPD Pickup Akropolis", address: "Ozo g. 25, Vilnius, 07150" },
  { id: "dpd-kaunas-akropolis", carrier: "dpd", country: "LT", city: "Kaunas", name: "DPD Pickup Akropolis", address: "Karaliaus Mindaugo pr. 49, Kaunas, 44333" },
  { id: "dpd-klaipeda", carrier: "dpd", country: "LT", city: "Klaipėda", name: "DPD Pickup Akropolis", address: "Taikos pr. 61, Klaipėda, 91100" },
  { id: "dpd-siauliai", carrier: "dpd", country: "LT", city: "Šiauliai", name: "DPD Pickup Tilžė", address: "Tilžės g. 225, Šiauliai, 76137" },
  { id: "dpd-tln-ylemiste", carrier: "dpd", country: "EE", city: "Tallinn", name: "DPD Pickup Ülemiste", address: "Suur-Sõjamäe tn 4, Tallinn, 11415" },
  { id: "dpd-tln-rocca", carrier: "dpd", country: "EE", city: "Tallinn", name: "DPD Pickup Rocca al Mare", address: "Paldiski mnt 102, Tallinn, 13522" },
  { id: "dpd-tartu", carrier: "dpd", country: "EE", city: "Tartu", name: "DPD Pickup Kaubamaja", address: "Riia 1, Tartu, 51004" },
  { id: "vp-riga-mols", carrier: "venipak", country: "LV", city: "Rīga", name: "Venipak Mols", address: "Krasta iela 46, Rīga, LV-1003" },
  { id: "vp-riga-domina", carrier: "venipak", country: "LV", city: "Rīga", name: "Venipak Domina Shopping", address: "Ieriķu iela 3, Rīga, LV-1084" },
  { id: "vp-jelgava", carrier: "venipak", country: "LV", city: "Jelgava", name: "Venipak Jelgava", address: "Rīgas iela 11, Jelgava, LV-3001" },
  { id: "vp-vln-cup", carrier: "venipak", country: "LT", city: "Vilnius", name: "Venipak CUP", address: "Upės g. 9, Vilnius, 09327" },
  { id: "vp-kaunas-savas", carrier: "venipak", country: "LT", city: "Kaunas", name: "Venipak PC Savas", address: "Savanorių pr. 346, Kaunas, 49480" },
  { id: "vp-panevezys", carrier: "venipak", country: "LT", city: "Panevėžys", name: "Venipak Panevėžys", address: "Klaipėdos g. 80, Panevėžys, 35190" },
  { id: "vp-tln-viru", carrier: "venipak", country: "EE", city: "Tallinn", name: "Venipak Viru Keskus", address: "Viru väljak 4, Tallinn, 10111" },
  { id: "vp-tartu-eeden", carrier: "venipak", country: "EE", city: "Tartu", name: "Venipak Eeden", address: "Kalda tee 1c, Tartu, 50703" },
  { id: "lp-vln-jasinskio", carrier: "lpexpress", country: "LT", city: "Vilnius", name: "LP Express J. Jasinskio", address: "J. Jasinskio g. 16, Vilnius, 01112" },
  { id: "lp-vln-ozas", carrier: "lpexpress", country: "LT", city: "Vilnius", name: "LP Express Ozas", address: "Ozo g. 18, Vilnius, 08243" },
  { id: "lp-kaunas", carrier: "lpexpress", country: "LT", city: "Kaunas", name: "LP Express Laisvės al.", address: "Laisvės al. 102, Kaunas, 44253" },
  { id: "lp-klaipeda", carrier: "lpexpress", country: "LT", city: "Klaipėda", name: "LP Express Akropolis", address: "Taikos pr. 61, Klaipėda, 91100" },
  { id: "lp-siauliai", carrier: "lpexpress", country: "LT", city: "Šiauliai", name: "LP Express Vilniaus g.", address: "Vilniaus g. 167, Šiauliai, 76352" },
  { id: "lp-riga-origo", carrier: "lpexpress", country: "LV", city: "Rīga", name: "LP Express Origo", address: "Stacijas laukums 2, Rīga, LV-1050" },
  { id: "lp-tln-viru", carrier: "lpexpress", country: "EE", city: "Tallinn", name: "LP Express Viru Keskus", address: "Viru väljak 4, Tallinn, 10111" },
];

const CATEGORY_IDS = ["all", "auto", "tech", "home", "fashion", "kids", "hobby", "other"];

const CATEGORY_FIELDS = {
  auto: [],
  tech: [],
  home: [],
  fashion: [],
  kids: [],
  hobby: [],
  other: [],
};

const SEED_PRODUCTS = [
  {
    id: "p1",
    title: "Игровой руль и педали",
    category: "hobby",
    country: "LT",
    city: "Vilnius",
    price_eur: 240,
    price_points: 240,
    seller: "Mantas R.",
    verified: true,
    subcategory: "collections",
    condition: "used",
    image: "https://images.unsplash.com/photo-1547394765-185e1e68f34e?auto=format&fit=crop&w=1200&q=80",
    description: "Руль, три педали и коробка. Работает. Отправлю в пакомат.",
  },
  {
    id: "p2",
    title: "iPhone 13 128GB, батарея 91%",
    category: "tech",
    country: "LV",
    city: "Rīga",
    price_eur: 310,
    price_points: 310,
    seller: "Elīna K.",
    verified: true,
    subcategory: "phones",
    condition: "used",
    image: "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?auto=format&fit=crop&w=1200&q=80",
    description: "Телефон работает. Батарея 91%. Есть кабель и чехол. Отправлю в пакомат.",
  },
  {
    id: "p3",
    title: "Автокресло Maxi-Cosi",
    category: "kids",
    country: "EE",
    city: "Tallinn",
    price_eur: 45,
    price_points: 45,
    seller: "Liis M.",
    verified: true,
    subcategory: "carseats",
    condition: "used",
    image: "https://images.unsplash.com/photo-1591348278863-a8fb3887e2aa?auto=format&fit=crop&w=1200&q=80",
    description: "Чистый. Без аварий. Отправлю в пакомат.",
  },
  {
    id: "p4",
    title: "Фара BMW F30 левая LED",
    category: "auto",
    country: "LV",
    city: "Liepāja",
    price_eur: 145,
    price_points: 145,
    seller: "Jānis P.",
    verified: true,
    subcategory: "auto_lights",
    condition: "used",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80",
    description: "Оригинал, без трещин. Отправлю в пакомат.",
  },
  {
    id: "p5",
    title: "PlayStation 5 Digital + 2 геймпада",
    category: "tech",
    country: "LT",
    city: "Kaunas",
    price_eur: 280,
    price_points: 280,
    seller: "Tomas V.",
    verified: true,
    subcategory: "consoles",
    condition: "used",
    image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=1200&q=80",
    description: "Приставка и два геймпада. Работает. Отправлю в пакомат.",
  },
  {
    id: "p6",
    title: "Часы Casio",
    category: "fashion",
    country: "EE",
    city: "Tartu",
    price_eur: 38,
    price_points: 38,
    seller: "Kristjan T.",
    verified: true,
    subcategory: "acc_bijouterie",
    condition: "used",
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a37?auto=format&fit=crop&w=1200&q=80",
    description: "Часы в коробке. Отправлю в пакомат.",
  },
  {
    id: "p7",
    title: "LEGO Technic 42115 Lamborghini",
    category: "kids",
    country: "LV",
    city: "Daugavpils",
    price_eur: 95,
    price_points: 95,
    seller: "Artūrs V.",
    verified: true,
    subcategory: "toys",
    condition: "used",
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=1200&q=80",
    description: "Все детали есть. Коробка и инструкция. Отправлю в пакомат.",
  },
  {
    id: "p8",
    title: "Куртка, размер M",
    category: "fashion",
    country: "LT",
    city: "Klaipėda",
    price_eur: 55,
    price_points: 55,
    seller: "Agnė D.",
    verified: true,
    subcategory: "w_jackets",
    condition: "used",
    image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=1200&q=80",
    description: "Куртка без пятен. Отправлю в пакомат.",
  },
  {
    id: "p9",
    title: "Наушники Sony",
    category: "tech",
    country: "LV",
    city: "Rīga",
    price_eur: 95,
    price_points: 95,
    seller: "Jānis P.",
    verified: true,
    subcategory: "audio",
    condition: "used",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=80",
    description: "Работают. Коробка есть. Отправлю в пакомат.",
  },
  {
    id: "f1",
    category: "fashion",
    subcategory: "w_dresses",
    country: "LV",
    city: "Rīga",
    price_eur: 22,
    seller: "Agnė D.",
    verified: true,
    condition: "used",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1200&q=80",
    description: "Женское платье, размер M. Носили мало. Отправлю в пакомат.",
  },
  {
    id: "f2",
    category: "fashion",
    subcategory: "w_jeans",
    country: "LT",
    city: "Vilnius",
    price_eur: 18,
    seller: "Agnė D.",
    verified: true,
    condition: "used",
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1200&q=80",
    description: "Женские джинсы, размер 38. Без дырок. Отправлю в пакомат.",
  },
  {
    id: "f3",
    category: "fashion",
    subcategory: "w_coats",
    country: "EE",
    city: "Tallinn",
    price_eur: 40,
    seller: "Liis M.",
    verified: true,
    condition: "used",
    image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format&fit=crop&w=1200&q=80",
    description: "Женское пальто, размер S. Тёплое. Отправлю в пакомат.",
  },
  {
    id: "f4",
    category: "fashion",
    subcategory: "w_sweaters",
    country: "LV",
    city: "Liepāja",
    price_eur: 12,
    seller: "Elīna K.",
    verified: true,
    condition: "used",
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=1200&q=80",
    description: "Женский свитер, размер L. Мягкий. Отправлю в пакомат.",
  },
  {
    id: "f5",
    category: "fashion",
    subcategory: "w_skirts",
    country: "LT",
    city: "Kaunas",
    price_eur: 10,
    seller: "Agnė D.",
    verified: true,
    condition: "new",
    image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=1200&q=80",
    description: "Юбка новая, размер 36. Не надевали. Отправлю в пакомат.",
  },
  {
    id: "f6",
    category: "fashion",
    subcategory: "m_shirts",
    country: "LV",
    city: "Rīga",
    price_eur: 15,
    seller: "Jānis P.",
    verified: true,
    condition: "used",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=1200&q=80",
    description: "Мужская рубашка, размер L. Белая. Отправлю в пакомат.",
  },
  {
    id: "f7",
    category: "fashion",
    subcategory: "m_trousers",
    country: "LT",
    city: "Klaipėda",
    price_eur: 16,
    seller: "Tomas V.",
    verified: true,
    condition: "used",
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=1200&q=80",
    description: "Мужские брюки, размер 50. Чёрные. Отправлю в пакомат.",
  },
  {
    id: "f8",
    category: "fashion",
    subcategory: "m_jackets",
    country: "EE",
    city: "Tartu",
    price_eur: 35,
    seller: "Kristjan T.",
    verified: true,
    condition: "used",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1200&q=80",
    description: "Мужская куртка, размер M. На весну. Отправлю в пакомат.",
  },
  {
    id: "f9",
    category: "fashion",
    subcategory: "m_jeans",
    country: "LV",
    city: "Daugavpils",
    price_eur: 20,
    seller: "Artūrs V.",
    verified: true,
    condition: "used",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=1200&q=80",
    description: "Мужские джинсы, размер 32. Отправлю в пакомат.",
  },
  {
    id: "f10",
    category: "fashion",
    subcategory: "shoes_women",
    country: "LV",
    city: "Rīga",
    price_eur: 28,
    seller: "Elīna K.",
    verified: true,
    condition: "used",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1200&q=80",
    description: "Женская обувь, размер 38. Носили дома. Отправлю в пакомат.",
  },
  {
    id: "f11",
    category: "fashion",
    subcategory: "shoes_men",
    country: "LT",
    city: "Vilnius",
    price_eur: 32,
    seller: "Mantas R.",
    verified: true,
    condition: "used",
    image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=1200&q=80",
    description: "Мужские кроссовки, размер 43. Чистые. Отправлю в пакомат.",
  },
  {
    id: "f12",
    category: "fashion",
    subcategory: "shoes_kids",
    country: "EE",
    city: "Tallinn",
    price_eur: 14,
    seller: "Liis M.",
    verified: true,
    condition: "used",
    image: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&w=1200&q=80",
    description: "Детские ботинки, размер 28. Без дырок. Отправлю в пакомат.",
  },
  {
    id: "f13",
    category: "fashion",
    subcategory: "acc_women_bags",
    country: "LV",
    city: "Jelgava",
    price_eur: 25,
    seller: "Elīna K.",
    verified: true,
    condition: "used",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1200&q=80",
    description: "Женская сумка. Замок работает. Отправлю в пакомат.",
  },
  {
    id: "f14",
    category: "fashion",
    subcategory: "acc_glasses",
    country: "LT",
    city: "Kaunas",
    price_eur: 9,
    seller: "Tomas V.",
    verified: true,
    condition: "new",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237ac008?auto=format&fit=crop&w=1200&q=80",
    description: "Очки солнцезащитные, новые. Отправлю в пакомат.",
  },
  {
    id: "f15",
    category: "fashion",
    subcategory: "acc_backpacks",
    country: "EE",
    city: "Pärnu",
    price_eur: 19,
    seller: "Kristjan T.",
    verified: true,
    condition: "used",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1200&q=80",
    description: "Рюкзак чёрный. Молнии целые. Отправлю в пакомат.",
  },
  {
    id: "f16",
    category: "fashion",
    subcategory: "acc_belts",
    country: "LV",
    city: "Ogre",
    price_eur: 8,
    seller: "Jānis P.",
    verified: true,
    condition: "used",
    image: "https://images.unsplash.com/photo-1624222247344-550fb60583c2?auto=format&fit=crop&w=1200&q=80",
    description: "Ремень кожаный. Длина около 110 см. Отправлю в пакомат.",
  },
  {
    id: "f17",
    category: "fashion",
    subcategory: "workwear",
    country: "LT",
    city: "Šiauliai",
    price_eur: 24,
    seller: "Mantas R.",
    verified: true,
    condition: "used",
    image: "https://images.unsplash.com/photo-1620793148254-4d8c4f0b6b0a?auto=format&fit=crop&w=1200&q=80",
    description: "Рабочий комбинезон, размер 52. Чистый. Отправлю в пакомат.",
  },
  {
    id: "f18",
    category: "fashion",
    subcategory: "other_fashion",
    country: "LV",
    city: "Valmiera",
    price_eur: 7,
    seller: "Artūrs V.",
    verified: true,
    condition: "new",
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=1200&q=80",
    description: "Новые носки, 5 пар, размер 42. Отправлю в пакомат.",
  },
];

function getCategories() {
  const map = {};
  CATEGORY_IDS.forEach((id) => {
    map[id] = t("cat." + id);
  });
  return map;
}

const SEED_SELLERS = {
  "Mantas R.": { city: "Vilnius", country: "LT", bio: "Продаю технику. Отправляю в пакомат.", rating: 4.9, deals: 28, languages: "LT / RU", memberSince: "2024-03-12" },
  "Elīna K.": { city: "Rīga", country: "LV", bio: "Продаю телефоны. Отправляю в пакомат.", rating: 5, deals: 41, languages: "LV / RU", memberSince: "2023-11-02" },
  "Liis M.": { city: "Tallinn", country: "EE", bio: "Продаю детские вещи. Отправляю в пакомат.", rating: 4.8, deals: 19, languages: "ET / RU", memberSince: "2024-06-20" },
  "Jānis P.": { city: "Liepāja", country: "LV", bio: "Продаю запчасти. Отправляю в пакомат.", rating: 4.7, deals: 33, languages: "LV / RU", memberSince: "2023-08-14" },
  "Tomas V.": { city: "Kaunas", country: "LT", bio: "Продаю приставки. Отправляю в пакомат.", rating: 4.9, deals: 22, languages: "LT / RU", memberSince: "2024-01-09" },
  "Kristjan T.": { city: "Tartu", country: "EE", bio: "Продаю мелочи. Отправляю в пакомат.", rating: 4.6, deals: 15, languages: "ET / RU", memberSince: "2024-04-01" },
  "Artūrs V.": { city: "Daugavpils", country: "LV", bio: "Продаю игрушки. Отправляю в пакомат.", rating: 5, deals: 12, languages: "LV / RU", memberSince: "2025-02-18" },
  "Agnė D.": { city: "Klaipėda", country: "LT", bio: "Продаю одежду. Отправляю в пакомат.", rating: 4.8, deals: 18, languages: "LT / RU", memberSince: "2024-09-05" },
};

const SEED_REVIEWS = [
  { id: "r1", seller: "Elīna K.", from: "Artūrs V.", rating: 5, text: "Телефон как на фото. Забрала в пакомате.", at: "2026-09-12" },
  { id: "r2", seller: "Mantas R.", from: "Liis M.", rating: 5, text: "Руль пришёл целый.", at: "2026-08-03" },
  { id: "r3", seller: "Jānis P.", from: "Tomas V.", rating: 4, text: "Фара работает.", at: "2026-07-21" },
  { id: "r4", seller: "Liis M.", from: "Elīna K.", rating: 5, text: "Кресло чистое.", at: "2026-06-14" },
];

function t(key) {
  return window.BaltiqI18n ? window.BaltiqI18n.t(key) : key;
}

function allLockers() {
  const extra = typeof EXTRA_LOCKERS !== "undefined" ? EXTRA_LOCKERS : [];
  const pack = typeof LOCKER_PACK !== "undefined" ? LOCKER_PACK : [];
  const admin = loadJSON("baltiq_lockers_extra", []);
  const seen = new Set();
  const out = [];
  [...LOCKERS, ...extra, ...pack, ...admin].forEach((l) => {
    if (!l || !l.id || seen.has(l.id)) return;
    seen.add(l.id);
    out.push(l);
  });
  return out;
}

function lockersFor(carrierId, country) {
  return allLockers().filter((l) => (!carrierId || l.carrier === carrierId) && (!country || country === "all" || l.country === country));
}

function lockerCities(country, carrierId) {
  return [...new Set(lockersFor(carrierId, country).map((l) => l.city))].sort((a, b) => a.localeCompare(b));
}

function isVehicle() {
  return false;
}

function isLockerOk(item) {
  const bulky = typeof BULKY_SUBS !== "undefined" ? BULKY_SUBS : new Set();
  return !!(item && !bulky.has(item.subcategory));
}

function commissionFor() {
  return COMMISSION_EUR;
}

function isLoggedIn() {
  return !!getUser().verified;
}

function requireVerified(actionLabel) {
  const user = getUser();
  if (user.verified) return true;
  alert(t("loginOnly") + " " + (actionLabel || ""));
  window.location.href = "login.html";
  return false;
}

async function loadMessages() {
  try {
    const r = await fetch("/api/messages");
    if (r.ok) {
      const data = await r.json();
      saveJSON("baltiq_messages", data);
      return data;
    }
  } catch {}
  return loadJSON("baltiq_messages", []);
}

async function postMessage(msg) {
  const row = { id: "m" + Date.now(), at: new Date().toISOString(), ...msg };
  try {
    const r = await fetch("/api/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(row),
    });
    if (r.ok) return await r.json();
  } catch {}
  const list = [...loadJSON("baltiq_messages", []), row];
  saveJSON("baltiq_messages", list);
  return list;
}

function youtubeId(url) {
  const m = String(url || "").match(/(?:v=|youtu\.be\/|embed\/)([A-Za-z0-9_-]{11})/);
  return m ? m[1] : "";
}

function youtubeEmbed(url) {
  const id = youtubeId(url);
  if (!id) return "";
  return `https://www.youtube.com/embed/${id}`;
}

function countryFlag(code) {
  if (code === "LV") return "🇱🇻 LV";
  if (code === "LT") return "🇱🇹 LT";
  return "🇪🇪 EE";
}

function eurToPts(eur) {
  return Math.round(Number(eur) || 0);
}

function ptsToEur(pts) {
  return Number(pts) || 0;
}

function moneyLabel(eur) {
  const n = Number(eur) || 0;
  return `${n} € / ${eurToPts(n)} Pts`;
}

function loadJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function saveJSON(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function defaultUser() {
  return {
    id: "me",
    name: "Гость",
    email: "",
    phone: "",
    bio: "",
    city: "Rīga",
    country: "LV",
    points: 350,
    verified: false,
    verificationCode: "",
    preferredCarrier: "omniva",
    lockerCity: "Rīga",
    languages: "RU / LV",
    memberSince: new Date().toISOString().slice(0, 10),
    verifiedAt: "",
    avatarHue: 188,
  };
}

function getUser() {
  const user = { ...defaultUser(), ...loadJSON(STORAGE.user, {}) };
  return user;
}

function setUser(patch) {
  const next = { ...getUser(), ...patch };
  saveJSON(STORAGE.user, next);
  return next;
}

function adText(item) {
  return String((item && (item.description || item.title)) || "").trim();
}

function normalizeProduct(item) {
  const price = Number(item.price_eur) || 0;
  const text = adText(item);
  const images = Array.isArray(item.images) && item.images.length ? item.images : item.image ? [item.image] : [];
  return {
    ...item,
    description: text,
    title: text,
    price_eur: price,
    price_points: eurToPts(price),
    images,
    image: images[0] || item.image || "",
    specs: item.specs || {},
    youtube: item.youtube || "",
  };
}

function getProducts() {
  const seedIds = new Set(SEED_PRODUCTS.map((p) => p.id));
  const stored = loadJSON(STORAGE.products, null) || [];
  const userItems = stored.filter((p) => !seedIds.has(p.id) && isLockerOk(p));
  const merged = [...SEED_PRODUCTS, ...userItems].map(normalizeProduct);
  saveJSON(STORAGE.products, merged);
  return merged;
}

function setProducts(list) {
  saveJSON(STORAGE.products, list);
}

function getOrders() {
  return loadJSON(STORAGE.orders, []);
}

function addOrder(order) {
  const list = [order, ...getOrders()];
  saveJSON(STORAGE.orders, list);
  return list;
}

function updateOrder(id, patch) {
  const list = getOrders().map((o) => (o.id === id ? { ...o, ...patch } : o));
  saveJSON(STORAGE.orders, list);
  return list;
}

function getReviews() {
  const stored = loadJSON(STORAGE.reviews, null);
  if (!stored) {
    saveJSON(STORAGE.reviews, SEED_REVIEWS);
    return SEED_REVIEWS.slice();
  }
  return stored;
}

function addReview(review) {
  const list = [review, ...getReviews()];
  saveJSON(STORAGE.reviews, list);
  return list;
}

function reviewsFor(sellerName) {
  return getReviews().filter((r) => r.seller === sellerName);
}

function avgRating(sellerName) {
  const list = reviewsFor(sellerName);
  if (!list.length) return 5;
  return Math.round((list.reduce((s, r) => s + r.rating, 0) / list.length) * 10) / 10;
}

function getWallet() {
  return loadJSON(STORAGE.wallet, []);
}

function addWalletTx(tx) {
  const list = [{ id: "w" + Date.now(), at: new Date().toISOString(), ...tx }, ...getWallet()];
  saveJSON(STORAGE.wallet, list);
  return list;
}

function getFavorites() {
  return loadJSON(STORAGE.favorites, []);
}

function toggleFavorite(productId) {
  const set = new Set(getFavorites());
  if (set.has(productId)) set.delete(productId);
  else set.add(productId);
  const next = [...set];
  saveJSON(STORAGE.favorites, next);
  return next;
}

function isFavorite(productId) {
  return getFavorites().includes(productId);
}

function sellerPublic(name) {
  const user = getUser();
  if (name === user.name) {
    return {
      name: user.name,
      city: user.city,
      country: user.country,
      bio: user.bio,
      languages: user.languages,
      rating: avgRating(user.name),
      deals: getOrders().filter((o) => o.status === "received").length,
      memberSince: user.memberSince,
      verified: user.verified,
      preferredCarrier: user.preferredCarrier,
      isMe: true,
    };
  }
  const seed = SEED_SELLERS[name] || { city: "Rīga", country: "LV", bio: "Продавец BALTIQ.", rating: 5, deals: 0, languages: "RU", memberSince: "2026-01-01" };
  const listings = getProducts().filter((p) => p.seller === name);
  return {
    name,
    ...seed,
    rating: avgRating(name) || seed.rating,
    deals: seed.deals,
    verified: listings.some((p) => p.verified) || true,
    preferredCarrier: "omniva",
    isMe: false,
  };
}

function formatDate(iso) {
  if (!iso) return "—";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  const locale = (window.BaltiqI18n && window.BaltiqI18n.LANG_META[window.BaltiqI18n.getLang()]?.locale) || "ru-RU";
  return d.toLocaleDateString(locale);
}

function orderStatusLabel(status) {
  if (status === "escrow") return "Деньги на сайте";
  if (status === "shipped") return "В пути в пакомат";
  if (status === "received") return "Получено";
  return status;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

const CATEGORY_ICONS = {
  all: "fa-border-all",
  auto: "fa-car-side",
  tech: "fa-mobile-screen-button",
  home: "fa-couch",
  fashion: "fa-shirt",
  kids: "fa-baby-carriage",
  hobby: "fa-person-biking",
  other: "fa-box-open",
};

function categoryIcon(id) {
  return CATEGORY_ICONS[id] || "fa-tag";
}

function headerHTML(active) {
  const user = getUser();
  const lang = window.BaltiqI18n ? window.BaltiqI18n.getLang() : "ru";
  const order = window.BaltiqI18n ? window.BaltiqI18n.langOrder() : ["ru", "lv", "lt", "et", "en"];
  const params = new URLSearchParams(location.search);
  const onIndex = /(^|\/)(index\.html)?$/.test(location.pathname);
  const activeCat = onIndex ? params.get("cat") || "" : "";
  const q = onIndex ? params.get("q") || "" : "";

  const account = user.verified
    ? `<a href="profile.html" class="hidden sm:flex items-center gap-2 text-sm font-bold text-stone-800 hover:text-stone-950">
         <span class="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 grid place-items-center text-xs font-black">${escapeHtml(String(user.name || "?").slice(0, 1))}</span>
         <span class="max-w-[8rem] truncate">${escapeHtml(user.name)}</span>
       </a>
       <button type="button" id="logoutBtn" class="text-sm font-bold text-stone-500 hover:text-stone-900 px-2 py-2" aria-label="${t("navLogout")}"><i class="fa-solid fa-arrow-right-from-bracket" aria-hidden="true"></i></button>`
    : `<a href="login.html" class="text-sm font-bold px-3 sm:px-4 py-2.5 rounded-xl text-stone-800 hover:bg-stone-100">${t("navLogin")}</a>`;

  const nav = (href, label, key) =>
    `<a href="${href}" class="text-sm font-semibold ${active === key ? "text-stone-950" : "text-stone-500 hover:text-stone-900"}">${label}</a>`;

  const langOptions = order
    .map((code) => `<option value="${code}" ${code === lang ? "selected" : ""}>${code.toUpperCase()}</option>`)
    .join("");

  const pill = "shrink-0 inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-sm font-semibold text-stone-600 hover:bg-stone-100 hover:text-stone-900 aria-[current=page]:bg-stone-900 aria-[current=page]:text-white";
  const catLinks = CATEGORY_IDS.filter((id) => id !== "all")
    .map((id) => `<a href="index.html?cat=${id}" data-spa data-nav-cat="${id}" ${activeCat === id ? 'aria-current="page"' : ""} class="${pill}">
        <i class="fa-solid ${categoryIcon(id)} text-xs opacity-70" aria-hidden="true"></i>${t("cat." + id)}</a>`)
    .join("");

  return `
    <header class="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-stone-200 text-stone-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div class="flex flex-wrap items-center gap-x-4 gap-y-3 py-3">
          <a href="index.html" data-spa data-nav-cat="" class="flex items-center gap-2.5 shrink-0" aria-label="BALTIQ">
            <span class="w-9 h-9 rounded-xl bg-stone-900 text-amber-400 grid place-items-center text-lg font-black">B</span>
            <span class="text-xl sm:text-2xl font-black tracking-tight">BALTIQ</span>
          </a>
          <form id="headerSearch" action="index.html" method="get" role="search" class="order-last w-full md:order-none md:w-auto md:flex-1 md:max-w-xl">
            <label for="searchInput" class="sr-only">${t("searchBtn")}</label>
            <div class="relative flex items-center">
              <i class="fa-solid fa-magnifying-glass absolute left-4 text-stone-400 text-sm" aria-hidden="true"></i>
              <input id="searchInput" name="q" type="search" value="${escapeHtml(q)}" placeholder="${escapeHtml(t("searchPh"))}" autocomplete="off"
                class="w-full h-11 pl-10 pr-24 rounded-full bg-stone-100 border border-transparent text-[15px] text-stone-900 placeholder-stone-400 focus:bg-white focus:border-stone-300 focus:outline-none focus:ring-4 focus:ring-amber-200/60">
              <button type="submit" class="absolute right-1 h-9 px-4 rounded-full bg-stone-900 text-white text-sm font-bold hover:bg-stone-700">${t("searchBtn")}</button>
            </div>
          </form>
          <nav class="hidden lg:flex items-center gap-5" aria-label="BALTIQ">
            ${nav("how.html", t("navHow"), "how")}
            ${nav("profile.html", t("navProfile"), "profile")}
          </nav>
          <div class="ml-auto flex items-center gap-1.5 sm:gap-2">
            <label for="langSelect" class="sr-only">Language</label>
            <select id="langSelect" class="h-10 bg-transparent border border-stone-200 text-sm font-bold text-stone-700 rounded-xl px-2 hover:border-stone-300">${langOptions}</select>
            <a href="profile.html" class="hidden sm:inline-flex items-center gap-1.5 h-10 px-3 rounded-xl bg-amber-50 text-amber-800 text-sm font-bold border border-amber-200">
              <i class="fa-solid fa-coins text-xs" aria-hidden="true"></i>${user.points} Pts
            </a>
            ${account}
            <a href="sell.html" class="inline-flex items-center gap-2 h-10 px-4 rounded-xl bg-amber-400 text-stone-900 text-sm font-extrabold hover:bg-amber-300">
              <i class="fa-solid fa-plus text-xs" aria-hidden="true"></i><span>${t("navSell")}</span>
            </a>
          </div>
        </div>
      </div>
      <nav class="border-t border-stone-100" aria-label="${escapeHtml(t("catsTitle"))}">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 flex items-center gap-1 overflow-x-auto py-2 [scrollbar-width:none]">
          <a href="index.html" data-spa data-nav-cat="" ${onIndex && !activeCat && !q ? 'aria-current="page"' : ""} class="${pill}">
            <i class="fa-solid fa-house text-xs opacity-70" aria-hidden="true"></i>${t("home")}</a>
          ${catLinks}
        </div>
      </nav>
    </header>`;
}

function footerHTML() {
  const cats = CATEGORY_IDS.filter((id) => id !== "all")
    .map((id) => `<li><a class="hover:text-white" href="index.html?cat=${id}">${t("cat." + id)}</a></li>`)
    .join("");
  const carriers = CARRIERS.map((c) => `<span class="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-bold text-stone-300">${c.name}</span>`).join("");
  return `
    <footer class="bg-stone-950 text-stone-400 mt-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div class="space-y-4">
          <a href="index.html" class="inline-flex items-center gap-2.5">
            <span class="w-9 h-9 rounded-xl bg-amber-400 text-stone-900 grid place-items-center text-lg font-black">B</span>
            <span class="text-2xl font-black tracking-tight text-white">BALTIQ</span>
          </a>
          <p class="text-sm leading-relaxed max-w-md">${t("footer")}</p>
          <div class="flex flex-wrap gap-2">${carriers}</div>
        </div>
        <div>
          <h2 class="text-white text-sm font-bold mb-4">${t("catsTitle")}</h2>
          <ul class="space-y-2 text-sm">${cats}</ul>
        </div>
        <div>
          <h2 class="text-white text-sm font-bold mb-4">${t("help")}</h2>
          <ul class="space-y-2 text-sm">
            <li><a class="hover:text-white" href="how.html">${t("navHow")}</a></li>
            <li><a class="hover:text-white" href="lockers.html">${t("navLockers")}</a></li>
            <li><a class="hover:text-white" href="sell.html">${t("navSell")}</a></li>
            <li><a class="hover:text-white" href="profile.html">${t("navProfile")}</a></li>
            <li><a class="hover:text-white" href="admin.html">${t("navAdmin")}</a></li>
          </ul>
        </div>
      </div>
      <div class="border-t border-white/10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row gap-2 justify-between text-xs">
          <p>&copy; ${new Date().getFullYear()} BALTIQ · ${t("domains")}</p>
          <p>${t("footerShip")}</p>
        </div>
      </div>
    </footer>`;
}

function inSubGroup(item, group) {
  if (!item || !group) return false;
  if (item.subcategory === group) return true;
  const kids = typeof SUB_TREE !== "undefined" ? SUB_TREE[group] || [] : [];
  return kids.includes(item.subcategory);
}

function favButtonState(btn, on) {
  btn.setAttribute("aria-pressed", on ? "true" : "false");
  const icon = btn.querySelector("i");
  if (icon) icon.className = `${on ? "fa-solid text-rose-500" : "fa-regular text-stone-700"} fa-heart`;
}

let favDelegationBound = false;
function bindFavorites() {
  if (favDelegationBound) return;
  favDelegationBound = true;
  document.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-fav]");
    if (!btn) return;
    e.preventDefault();
    const id = btn.dataset.fav;
    const on = toggleFavorite(id).includes(id);
    document.querySelectorAll(`[data-fav="${CSS.escape(id)}"]`).forEach((b) => favButtonState(b, on));
  });
}

function injectChrome(active) {
  const headerMount = document.getElementById("app-header");
  const footerMount = document.getElementById("app-footer");
  if (headerMount) headerMount.innerHTML = headerHTML(active);
  if (footerMount) footerMount.innerHTML = footerHTML();
  const langSelect = document.getElementById("langSelect");
  if (langSelect) {
    langSelect.onchange = () => window.BaltiqI18n.setLang(langSelect.value);
  }
  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.onclick = () => {
      setUser({ verified: false, loginMethod: "", name: "Гость" });
      location.href = "index.html";
    };
  }
  bindFavorites();
  if (window.BaltiqI18n) window.BaltiqI18n.applyI18n(document);
}

function productCard(raw) {
  const item = normalizeProduct(raw);
  const href = `product.html?id=${encodeURIComponent(item.id)}`;
  const text = escapeHtml(adText(item));
  const fav = isFavorite(item.id);
  const isNew = item.condition === "new";
  const sub = item.subcategory ? subLabel(item.subcategory) : t("cat." + item.category);
  return `
    <article class="group relative flex flex-col bg-white text-stone-900 rounded-2xl border border-stone-200 overflow-hidden transition hover:shadow-xl hover:shadow-stone-900/5 hover:-translate-y-0.5">
      <a href="${href}" class="flex flex-col flex-1 focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-300 rounded-2xl">
        <div class="relative aspect-[4/5] bg-stone-100 overflow-hidden">
          <img src="${escapeHtml(item.image)}" alt="${text.slice(0, 120)}" loading="lazy" class="w-full h-full object-cover transition duration-500 group-hover:scale-105">
          <div class="absolute top-2.5 left-2.5 flex flex-wrap gap-1.5">
            ${isNew ? `<span class="px-2 py-1 rounded-md bg-amber-400 text-stone-900 text-[11px] font-extrabold">${optLabel("new")}</span>` : ""}
            <span class="px-2 py-1 rounded-md bg-white/90 backdrop-blur text-stone-800 text-[11px] font-bold">${countryFlag(item.country)}</span>
          </div>
        </div>
        <div class="p-3.5 pb-2 flex flex-col gap-1.5 flex-1">
          <div class="flex items-baseline gap-2">
            <span class="text-lg font-extrabold tracking-tight">${item.price_eur} €</span>
            <span class="text-xs font-bold text-amber-700">${item.price_points} Pts</span>
          </div>
          <h3 class="text-sm text-stone-700 leading-snug line-clamp-2 min-h-[2.5rem]">${text}</h3>
          <p class="text-xs text-stone-500 truncate">${escapeHtml(sub)}</p>
        </div>
      </a>
      <button type="button" data-fav="${escapeHtml(item.id)}" aria-pressed="${fav}" aria-label="${escapeHtml(t("favorite"))}"
        class="absolute top-2.5 right-2.5 w-9 h-9 rounded-full bg-white/90 backdrop-blur grid place-items-center shadow-sm transition hover:scale-110">
        <i class="${fav ? "fa-solid text-rose-500" : "fa-regular text-stone-700"} fa-heart" aria-hidden="true"></i>
      </button>
      <div class="px-3.5 pb-3.5 flex items-center justify-between gap-2 text-xs">
        <span class="inline-flex items-center gap-1 text-stone-500 min-w-0"><i class="fa-solid fa-location-dot text-[10px]" aria-hidden="true"></i><span class="truncate">${escapeHtml(item.city)}</span></span>
        <a href="profile.html?seller=${encodeURIComponent(item.seller)}" class="inline-flex items-center gap-1 font-semibold ${item.verified ? "text-emerald-700" : "text-rose-600"} hover:underline min-w-0">
          <i class="fa-solid ${item.verified ? "fa-circle-check" : "fa-circle-exclamation"} text-[10px]" aria-hidden="true"></i><span class="truncate">${escapeHtml(item.seller)}</span>
        </a>
      </div>
    </article>`;
}

window.Baltiq = {
  CARRIERS,
  LOCKERS,
  COMMISSION_EUR,
  CATEGORY_IDS,
  CATEGORY_FIELDS,
  get CATEGORIES() {
    return getCategories();
  },
  getCategories,
  lockersFor,
  lockerCities,
  allLockers,
  isVehicle,
  isLockerOk,
  commissionFor,
  legalName: typeof legalName === "function" ? legalName : (c) => c,
  isLoggedIn,
  loadMessages,
  postMessage,
  youtubeId,
  youtubeEmbed,
  t,
  getUser,
  setUser,
  getProducts,
  setProducts,
  getOrders,
  addOrder,
  updateOrder,
  getReviews,
  addReview,
  reviewsFor,
  avgRating,
  getWallet,
  addWalletTx,
  getFavorites,
  toggleFavorite,
  isFavorite,
  sellerPublic,
  formatDate,
  orderStatusLabel,
  requireVerified,
  injectChrome,
  productCard,
  categoryIcon,
  inSubGroup,
  countryFlag,
  escapeHtml,
  eurToPts,
  ptsToEur,
  moneyLabel,
  adText,
  normalizeProduct,
  SUBCATEGORIES: typeof SUBCATEGORIES !== "undefined" ? SUBCATEGORIES : {},
  SUB_TREE: typeof SUB_TREE !== "undefined" ? SUB_TREE : {},
  FIELD_OPTIONS: typeof FIELD_OPTIONS !== "undefined" ? FIELD_OPTIONS : {},
  BANKS: typeof BANKS !== "undefined" ? BANKS : [],
  PAYMENTS: typeof PAYMENTS !== "undefined" ? PAYMENTS : [],
  optLabel: typeof optLabel === "function" ? optLabel : (v) => v,
  subLabel: typeof subLabel === "function" ? subLabel : (v) => v,
};
