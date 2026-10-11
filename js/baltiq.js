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

function headerHTML(active) {
  const user = getUser();
  const lang = window.BaltiqI18n ? window.BaltiqI18n.getLang() : "ru";
  const order = window.BaltiqI18n ? window.BaltiqI18n.langOrder() : ["ru", "lv", "lt", "et", "en"];
  const account = user.verified
    ? `<span class="text-base font-bold text-emerald-300">${escapeHtml(user.name)}</span>
       <button type="button" id="logoutBtn" class="text-base font-bold px-4 py-2 rounded-xl border border-slate-600">${t("navLogout")}</button>`
    : `<a href="login.html" class="text-base font-bold px-5 py-2.5 rounded-xl bg-white text-slate-900">${t("navLogin")}</a>`;

  const nav = (href, label, key) =>
    `<a href="${href}" class="text-lg font-bold ${active === key ? "text-cyan-300" : "text-slate-200 hover:text-white"}">${label}</a>`;

  const langOptions = order
    .map((code) => `<option value="${code}" ${code === lang ? "selected" : ""}>${window.BaltiqI18n.LANG_META[code].label}</option>`)
    .join("");

  return `
    <header class="bg-slate-900 border-b border-slate-800 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
        <a href="index.html" class="flex items-center gap-3 shrink-0">
          <div class="w-12 h-12 bg-cyan-500 text-slate-900 rounded-xl flex items-center justify-center text-2xl font-black">B</div>
          <span class="text-3xl font-black text-white">BALTIQ</span>
        </a>
        <nav class="hidden md:flex items-center gap-8">
          ${nav("index.html", t("navCatalog"), "catalog")}
          ${nav("how.html", t("navHow"), "how")}
          ${nav("profile.html", t("navProfile"), "profile")}
        </nav>
        <div class="flex items-center gap-3">
          <select id="langSelect" class="bg-slate-800 border border-slate-700 text-base font-bold text-slate-200 rounded-xl px-3 py-2">${langOptions}</select>
          ${account}
          <a href="profile.html" class="hidden sm:block text-base font-bold text-amber-300">${user.points} Pts</a>
          <a href="sell.html" class="bg-cyan-500 text-slate-900 text-base font-bold px-5 py-2.5 rounded-xl">${t("navSell")}</a>
        </div>
      </div>
    </header>`;
}

function footerHTML() {
  return `
    <footer class="border-t border-slate-800 mt-16 py-8 text-base text-slate-400">
      <div class="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row gap-3 justify-between">
        <p>${t("footer")}</p>
        <p>${t("footerShip")} · <a class="text-cyan-400" href="admin.html">${t("navAdmin")}</a></p>
      </div>
    </footer>`;
}

function inSubGroup(item, group) {
  if (!item || !group) return false;
  if (item.subcategory === group) return true;
  const kids = typeof SUB_TREE !== "undefined" ? SUB_TREE[group] || [] : [];
  return kids.includes(item.subcategory);
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
  if (window.BaltiqI18n) window.BaltiqI18n.applyI18n(document);
}

function productCard(raw) {
  const item = normalizeProduct(raw);
  return `
    <article class="bg-slate-800/60 border border-slate-700/60 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition flex flex-col">
      <a href="product.html?id=${encodeURIComponent(item.id)}" class="block group">
        <div class="relative h-48 bg-slate-900 overflow-hidden">
          <img src="${escapeHtml(item.image)}" alt="" class="w-full h-full object-cover group-hover:scale-105 transition duration-300">
          <span class="absolute top-3 right-3 bg-slate-900/90 px-2.5 py-1 rounded-full text-[10px] font-extrabold border border-slate-700">${countryFlag(item.country)}</span>
        </div>
        <div class="p-4">
          <h4 class="font-bold text-white text-base line-clamp-3 mb-2 leading-snug group-hover:text-cyan-400">${escapeHtml(adText(item))}</h4>
        </div>
      </a>
      <div class="px-4 pb-4 mt-auto">
        <a href="profile.html?seller=${encodeURIComponent(item.seller)}" class="flex items-center gap-1 text-[10px] font-bold ${item.verified ? "text-emerald-400" : "text-rose-300"} mb-2 hover:underline">
          <i class="fa-solid ${item.verified ? "fa-shield-check" : "fa-shield-halved"}"></i>
            <span>${escapeHtml(item.seller)} ${item.verified ? "(Smart-ID)" : t("notVerified")}</span>
        </a>
        <div class="flex items-center gap-2 mb-3">
          <span class="text-lg font-black text-white">${item.price_eur} €</span>
          <span class="text-[10px] text-slate-400 font-bold">=</span>
          <span class="text-[10px] font-extrabold text-amber-300 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">${item.price_points} Pts</span>
        </div>
        <a href="product.html?id=${encodeURIComponent(item.id)}" class="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-900 text-base font-bold py-3 rounded-xl flex items-center justify-center gap-2">${t("openCard")}</a>
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
