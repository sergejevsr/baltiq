const SUBCATEGORIES = {
  auto: ["auto_electronics", "auto_lights", "auto_interior", "auto_audio", "auto_oils", "auto_accessories", "other_auto"],
  tech: ["phones", "tablets", "computers", "photo", "audio", "consoles", "gps", "other_tech"],
  home: ["kitchen", "textiles", "decor", "tools", "plumbing", "health", "handmade", "antique", "gifts", "plants", "other_home"],
  fashion: ["women", "men", "shoes", "accessories", "workwear", "other_fashion"],
  kids: ["kids_clothes", "toys", "school", "carseats", "kids_food", "other_kids"],
  hobby: ["fitness", "fishing", "hunting", "tourism", "music", "collections", "boardgames", "other_hobby"],
  other: ["other"],
};

const SUB_TREE = {
  women: [
    "w_jackets", "w_down", "w_coats", "w_raincoats", "w_windbreakers", "w_fur", "w_sheepskin",
    "w_dresses", "w_evening", "w_wedding", "w_sundresses", "w_skirts", "w_blouses", "w_shirts",
    "w_sweaters", "w_cardigans", "w_turtleneck", "w_tops", "w_tees", "w_blazers", "w_waistcoats",
    "w_trousers", "w_jeans", "w_capri", "w_shorts", "w_leggings", "w_overalls", "w_suits",
    "w_sportswear", "w_swimsuits", "w_underwear", "w_nightgowns", "w_gowns", "w_stockings",
    "w_hats", "w_scarfs", "w_gloves", "w_collars", "w_corsets", "w_costume", "w_maternity",
    "w_accessories", "w_other",
  ],
  men: [
    "m_jackets", "m_down", "m_coats", "m_raincoats", "m_sheepskin", "m_blazers",
    "m_shirts", "m_tees", "m_sweaters", "m_trousers", "m_jeans", "m_shorts",
    "m_suits", "m_sportswear", "m_underwear", "m_gowns", "m_swim",
    "m_hats", "m_scarfs", "m_gloves", "m_costume", "m_accessories", "m_other",
  ],
  shoes: ["shoes_women", "shoes_men", "shoes_kids", "shoes_other"],
  accessories: [
    "acc_bijouterie", "acc_glasses", "acc_belts", "acc_wallets",
    "acc_women_bags", "acc_clutch", "acc_men_bags", "acc_kids_bags",
    "acc_backpacks", "acc_sport_bags", "acc_suitcases", "acc_other",
  ],
};

const VEHICLE_SUBS = new Set();
const BULKY_SUBS = new Set([
  "cars", "trucks", "moto", "motorcycles", "tires", "rent", "strollers", "bikes",
  "kids_furniture", "tv", "furniture", "building", "garden", "appliances",
]);

const FIELD_OPTIONS = {
  condition: ["new", "used"],
};

const BANKS = [
  { id: "smartid", name: "Smart-ID", countries: ["LV", "LT", "EE"] },
  { id: "swedbank", name: "Swedbank", countries: ["LV", "LT", "EE"] },
  { id: "seb", name: "SEB", countries: ["LV", "LT", "EE"] },
  { id: "luminor", name: "Luminor", countries: ["LV", "LT", "EE"] },
  { id: "citadele", name: "Citadele", countries: ["LV", "LT", "EE"] },
  { id: "lhv", name: "LHV", countries: ["EE"] },
  { id: "coop", name: "Coop Pank", countries: ["EE"] },
  { id: "sb", name: "Šiaulių bankas", countries: ["LT"] },
  { id: "revolut", name: "Revolut", countries: ["LV", "LT", "EE"] },
];

const PAYMENTS = [
  { id: "pts", name: "BALTIQ Pts", group: "wallet" },
  { id: "card", name: "Visa / Mastercard", group: "card" },
  { id: "applepay", name: "Apple Pay", group: "card" },
  { id: "googlepay", name: "Google Pay", group: "card" },
  { id: "swedbank", name: "Swedbank", group: "bank" },
  { id: "seb", name: "SEB", group: "bank" },
  { id: "luminor", name: "Luminor", group: "bank" },
  { id: "citadele", name: "Citadele", group: "bank" },
  { id: "lhv", name: "LHV", group: "bank" },
  { id: "paysera", name: "Paysera", group: "bank" },
  { id: "montonio", name: "Montonio", group: "bank" },
  { id: "revolut", name: "Revolut", group: "bank" },
];

const EXTRA_LOCKERS = [];
const DOMAINS = ["baltiq.lv", "baltiq.lt", "baltiq.ee"];

const OPT_LABELS = {
  new: { ru: "Новое", lv: "Jauns", lt: "Nauja", et: "Uus", en: "New" },
  used: { ru: "Б/у", lv: "Lietots", lt: "Naudota", et: "Kasutatud", en: "Used" },
};

const SUB_LABELS = {
  auto_electronics: { ru: "Автоэлектроника", lv: "Autoelektronika", lt: "Autoelektronika", et: "Autoelektroonika", en: "Car electronics" },
  auto_lights: { ru: "Свет и фары", lv: "Apgaismojums", lt: "Žibintai", et: "Tuled", en: "Lights" },
  auto_interior: { ru: "Салон", lv: "Interjers", lt: "Salonas", et: "Salong", en: "Interior" },
  auto_audio: { ru: "Автоакустика", lv: "Autoakustika", lt: "Autoakustika", et: "Autohéli", en: "Car audio" },
  auto_oils: { ru: "Масла и химия", lv: "Eļļas, ķīmija", lt: "Tepalai", et: "Õlid", en: "Oils" },
  auto_accessories: { ru: "Аксессуары", lv: "Aksesuāri", lt: "Aksesuarai", et: "Tarvikud", en: "Accessories" },
  other_auto: { ru: "Другие запчасти", lv: "Citas detaļas", lt: "Kitos dalys", et: "Muud varuosad", en: "Other parts" },
  phones: { ru: "Телефоны", lv: "Telefoni", lt: "Telefonai", et: "Telefonid", en: "Phones" },
  tablets: { ru: "Планшеты", lv: "Planšetdatori", lt: "Planšetės", et: "Tahvelarvutid", en: "Tablets" },
  computers: { ru: "Компьютеры", lv: "Datori", lt: "Kompiuteriai", et: "Arvutid", en: "Computers" },
  photo: { ru: "Фото и видео", lv: "Foto, video", lt: "Foto, video", et: "Foto, video", en: "Photo" },
  audio: { ru: "Аудио", lv: "Audio", lt: "Audio", et: "Audio", en: "Audio" },
  consoles: { ru: "Приставки и игры", lv: "Konsoles, spēles", lt: "Konsolės, žaidimai", et: "Konsoolid", en: "Consoles" },
  gps: { ru: "GPS", lv: "GPS", lt: "GPS", et: "GPS", en: "GPS" },
  other_tech: { ru: "Другая электроника", lv: "Cita elektronika", lt: "Kita elektronika", et: "Muu elektroonika", en: "Other tech" },
  kitchen: { ru: "Для кухни", lv: "Virtuvei", lt: "Virtuvei", et: "Köök", en: "Kitchen" },
  textiles: { ru: "Текстиль", lv: "Tekstils", lt: "Tekstilė", et: "Tekstiil", en: "Textiles" },
  decor: { ru: "Декор", lv: "Dekors", lt: "Dekoras", et: "Dekoor", en: "Decor" },
  tools: { ru: "Инструменты", lv: "Instrumenti", lt: "Įrankiai", et: "Tööriistad", en: "Tools" },
  plumbing: { ru: "Сантехника", lv: "Santehnika", lt: "Santechnika", et: "Santehnika", en: "Plumbing" },
  health: { ru: "Здоровье и красота", lv: "Veselība, skaistums", lt: "Sveikata, grožis", et: "Tervis, ilu", en: "Health" },
  handmade: { ru: "Ручная работа", lv: "Rokdarbi", lt: "Rankdarbiai", et: "Käsitöö", en: "Handmade" },
  antique: { ru: "Антиквариат", lv: "Antikvariāts", lt: "Antikvaras", et: "Antiik", en: "Antique" },
  gifts: { ru: "Подарки", lv: "Dāvanas", lt: "Dovanos", et: "Kingitused", en: "Gifts" },
  plants: { ru: "Растения", lv: "Augi", lt: "Augalai", et: "Taimed", en: "Plants" },
  other_home: { ru: "Другое для дома", lv: "Cits mājai", lt: "Kita namams", et: "Muu kodu", en: "Other home" },
  women: { ru: "Женская одежда", lv: "Sieviešu apģērbs", lt: "Moterų drabužiai", et: "Naiste riided", en: "Women" },
  men: { ru: "Мужская одежда", lv: "Vīriešu apģērbs", lt: "Vyrų drabužiai", et: "Meeste riided", en: "Men" },
  shoes: { ru: "Обувь", lv: "Apavi", lt: "Avalynė", et: "Jalatsid", en: "Shoes" },
  bags: { ru: "Сумки", lv: "Somas", lt: "Krepšiai", et: "Kotid", en: "Bags" },
  jewelry: { ru: "Украшения и часы", lv: "Rotas, pulksteņi", lt: "Papuošalai, laikrodžiai", et: "Ehted, kellad", en: "Jewelry" },
  workwear: { ru: "Спецодежда", lv: "Specapģērbi", lt: "Darbo rūbai", et: "Tööriided", en: "Workwear" },
  accessories: { ru: "Сумки, очки, аксессуары", lv: "Somas, brilles, aksesuāri", lt: "Krepšiai, akiniai", et: "Kotid, prillid", en: "Bags and accessories" },
  other_fashion: { ru: "Разное", lv: "Dažādi", lt: "Įvairūs", et: "Muu", en: "Other" },
  w_jackets: { ru: "Куртки", lv: "Virsjakas", lt: "Striukės", et: "Joped", en: "Jackets" },
  w_down: { ru: "Пуховики", lv: "Dūnu jakas", lt: "Pūkinės", et: "Sulejoped", en: "Down jackets" },
  w_coats: { ru: "Пальто", lv: "Mēteļi", lt: "Paltai", et: "Mantlid", en: "Coats" },
  w_raincoats: { ru: "Плащи", lv: "Trenčkotmēteli", lt: "Lietpalčiai", et: "Vihmamanud", en: "Raincoats" },
  w_windbreakers: { ru: "Ветровки", lv: "Vējjakas", lt: "Vėjavarės", et: "Tuulejakid", en: "Windbreakers" },
  w_fur: { ru: "Шубы", lv: "Kažoki", lt: "Kailiniai", et: "Kasukad", en: "Fur coats" },
  w_sheepskin: { ru: "Дублёнки", lv: "Jēlādas kažoki", lt: "Aviakailiai", et: "Lambanahk", en: "Sheepskin" },
  w_dresses: { ru: "Платья", lv: "Kleitas", lt: "Suknelės", et: "Kleidid", en: "Dresses" },
  w_evening: { ru: "Вечерние, бальные платья", lv: "Vakara, balles kleitas", lt: "Vakarinės suknelės", et: "Õhtukleided", en: "Evening dresses" },
  w_wedding: { ru: "Свадебные платья", lv: "Kāzu kleitas", lt: "Vestuvinės suknelės", et: "Pruutkleidid", en: "Wedding dresses" },
  w_sundresses: { ru: "Сарафаны", lv: "Sarafāni", lt: "Sarafanai", et: "Sarafanid", en: "Sundresses" },
  w_skirts: { ru: "Юбки", lv: "Svārki", lt: "Sijonai", et: "Seelikud", en: "Skirts" },
  w_blouses: { ru: "Блузки, туники", lv: "Blūzes, tunikas", lt: "Palaidinės", et: "Pluusid", en: "Blouses" },
  w_shirts: { ru: "Рубашки", lv: "Krekli", lt: "Marškiniai", et: "Särgid", en: "Shirts" },
  w_sweaters: { ru: "Свитера", lv: "Džemperi", lt: "Megztiniai", et: "Kampsunid", en: "Sweaters" },
  w_cardigans: { ru: "Кофты", lv: "Adītas jakas", lt: "Megztos striukės", et: "Kardiganid", en: "Cardigans" },
  w_turtleneck: { ru: "Битловки", lv: "Bītlenes", lt: "Golfai", et: "Sallkraed", en: "Turtlenecks" },
  w_tops: { ru: "Топики", lv: "Topiņi", lt: "Topai", et: "Topid", en: "Tops" },
  w_tees: { ru: "Майки", lv: "T-krekli", lt: "Marškinėliai", et: "T-särgid", en: "T-shirts" },
  w_blazers: { ru: "Пиджаки, жакеты", lv: "Bleizeri, žaketes", lt: "Švarkai", et: "Pintsakud", en: "Blazers" },
  w_waistcoats: { ru: "Безрукавки", lv: "Vestes", lt: "Liemenės", et: "Vestid", en: "Waistcoats" },
  w_trousers: { ru: "Брюки", lv: "Bikses", lt: "Kelnės", et: "Püksid", en: "Trousers" },
  w_jeans: { ru: "Джинсы", lv: "Džinsi", lt: "Džinsai", et: "Teksad", en: "Jeans" },
  w_capri: { ru: "Капри, бриджи", lv: "Kapri bikses, bridži", lt: "Kapriai", et: "Kaprid", en: "Capri" },
  w_shorts: { ru: "Шорты", lv: "Šorti", lt: "Šortai", et: "Lühikesed püksid", en: "Shorts" },
  w_leggings: { ru: "Леггинсы", lv: "Legingi", lt: "Leginsai", et: "Retuusid", en: "Leggings" },
  w_overalls: { ru: "Комбинезоны", lv: "Kombinezoni", lt: "Kombinezonai", et: "Kombekad", en: "Overalls" },
  w_suits: { ru: "Костюмы", lv: "Uzvalki", lt: "Kostiumai", et: "Ülikonnad", en: "Suits" },
  w_sportswear: { ru: "Спортивная одежда", lv: "Sporta apģērbi", lt: "Sportinė apranga", et: "Spordiriided", en: "Sportswear" },
  w_swimsuits: { ru: "Купальники", lv: "Peldkostīmi", lt: "Maudymosi kostiumėliai", et: "Ujumistrikood", en: "Swimsuits" },
  w_underwear: { ru: "Нижнее бельё", lv: "Apakšveļa", lt: "Apatiniai", et: "Aluspesu", en: "Underwear" },
  w_nightgowns: { ru: "Пижамы", lv: "Naktsveļa", lt: "Pižamos", et: "Pidžaamad", en: "Nightwear" },
  w_gowns: { ru: "Халаты", lv: "Halāti", lt: "Chalatai", et: "Hommikumantlid", en: "Robes" },
  w_stockings: { ru: "Чулки, носки", lv: "Zeķubikses, zeķes", lt: "Pėdkelnės, kojaitės", et: "Sukad, sokid", en: "Socks" },
  w_hats: { ru: "Шапки, кепки, береты", lv: "Cepures, naģenes, beretes", lt: "Kepurės", et: "Mütsid", en: "Hats" },
  w_scarfs: { ru: "Шарфы", lv: "Šalles", lt: "Šalikai", et: "Sallid", en: "Scarves" },
  w_gloves: { ru: "Перчатки, варежки", lv: "Cimdi, dūraiņi", lt: "Pirštinės", et: "Kindad", en: "Gloves" },
  w_collars: { ru: "Воротники, накидки", lv: "Apkakles, apmetņi", lt: "Apykaklės", et: "Kraed", en: "Collars" },
  w_corsets: { ru: "Корсеты", lv: "Korsetes", lt: "Korsetai", et: "Korsetid", en: "Corsets" },
  w_costume: { ru: "Маскарадные костюмы", lv: "Karnevāla kostīmi", lt: "Karnavaliniai kostiumai", et: "Kostüümid", en: "Costumes" },
  w_maternity: { ru: "Одежда для беременных", lv: "Apģērbs grūtniecēm", lt: "Drabužiai nėščiosioms", et: "Rasedate riided", en: "Maternity" },
  w_accessories: { ru: "Аксессуары", lv: "Aksesuāri", lt: "Aksesuarai", et: "Aksessuaarid", en: "Accessories" },
  w_other: { ru: "Разное", lv: "Dažādi", lt: "Kita", et: "Muu", en: "Other" },
  m_jackets: { ru: "Куртки", lv: "Jakas", lt: "Striukės", et: "Joped", en: "Jackets" },
  m_down: { ru: "Пуховики", lv: "Dūnu jakas", lt: "Pūkinės", et: "Sulejoped", en: "Down jackets" },
  m_coats: { ru: "Пальто", lv: "Mēteļi", lt: "Paltai", et: "Mantlid", en: "Coats" },
  m_raincoats: { ru: "Плащи", lv: "Apmetņi", lt: "Lietpalčiai", et: "Vihmamanud", en: "Raincoats" },
  m_sheepskin: { ru: "Дублёнки", lv: "Jēlādas kažoki", lt: "Aviakailiai", et: "Lambanahk", en: "Sheepskin" },
  m_blazers: { ru: "Пиджаки", lv: "Bleizeri, žaketes", lt: "Švarkai", et: "Pintsakud", en: "Blazers" },
  m_shirts: { ru: "Рубашки", lv: "Krekli", lt: "Marškiniai", et: "Särgid", en: "Shirts" },
  m_tees: { ru: "Майки", lv: "Sporta krekli", lt: "Marškinėliai", et: "T-särgid", en: "T-shirts" },
  m_sweaters: { ru: "Свитера", lv: "Džemperi", lt: "Megztiniai", et: "Kampsunid", en: "Sweaters" },
  m_trousers: { ru: "Брюки", lv: "Bikses", lt: "Kelnės", et: "Püksid", en: "Trousers" },
  m_jeans: { ru: "Джинсы", lv: "Džinsi", lt: "Džinsai", et: "Teksad", en: "Jeans" },
  m_shorts: { ru: "Шорты", lv: "Šorti", lt: "Šortai", et: "Lühikesed püksid", en: "Shorts" },
  m_suits: { ru: "Костюмы", lv: "Uzvalki", lt: "Kostiumai", et: "Ülikonnad", en: "Suits" },
  m_sportswear: { ru: "Спортивная одежда", lv: "Sporta apģērbi", lt: "Sportinė apranga", et: "Spordiriided", en: "Sportswear" },
  m_underwear: { ru: "Нижнее бельё", lv: "Apakšveļa", lt: "Apatiniai", et: "Aluspesu", en: "Underwear" },
  m_gowns: { ru: "Халаты", lv: "Halāti", lt: "Chalatai", et: "Hommikumantlid", en: "Robes" },
  m_swim: { ru: "Плавки", lv: "Peldbikses", lt: "Plaukimo šortai", et: "Ujumispüksid", en: "Swim shorts" },
  m_hats: { ru: "Шапки, кепки", lv: "Cepures, naģenes", lt: "Kepurės", et: "Mütsid", en: "Hats" },
  m_scarfs: { ru: "Шарфы", lv: "Šalles", lt: "Šalikai", et: "Sallid", en: "Scarves" },
  m_gloves: { ru: "Перчатки, варежки", lv: "Cimdi, dūraiņi", lt: "Pirštinės", et: "Kindad", en: "Gloves" },
  m_costume: { ru: "Маскарадные костюмы", lv: "Karnevāla kostīmi", lt: "Karnavaliniai kostiumai", et: "Kostüümid", en: "Costumes" },
  m_accessories: { ru: "Аксессуары", lv: "Aksesuāri", lt: "Aksesuarai", et: "Aksessuaarid", en: "Accessories" },
  m_other: { ru: "Разное", lv: "Dažādi", lt: "Kita", et: "Muu", en: "Other" },
  shoes_women: { ru: "Женская обувь", lv: "Sieviešu apavi", lt: "Moterų avalynė", et: "Naiste jalatsid", en: "Women's shoes" },
  shoes_men: { ru: "Мужская обувь", lv: "Vīriešu apavi", lt: "Vyrų avalynė", et: "Meeste jalatsid", en: "Men's shoes" },
  shoes_kids: { ru: "Детская обувь", lv: "Bērnu apavi", lt: "Vaikų avalynė", et: "Lastejalatsid", en: "Kids' shoes" },
  shoes_other: { ru: "Другая обувь", lv: "Citi apavi", lt: "Kita avalynė", et: "Muud jalatsid", en: "Other shoes" },
  acc_bijouterie: { ru: "Бижутерия", lv: "Bižutērija", lt: "Bijuterija", et: "Bijouterie", en: "Fashion jewelry" },
  acc_glasses: { ru: "Очки", lv: "Brilles", lt: "Akiniai", et: "Prillid", en: "Glasses" },
  acc_belts: { ru: "Ремни, пояса", lv: "Siksnas, jostas", lt: "Diržai", et: "Vööd", en: "Belts" },
  acc_wallets: { ru: "Кошельки", lv: "Maki", lt: "Piniginės", et: "Rahakotid", en: "Wallets" },
  acc_women_bags: { ru: "Женские сумочки", lv: "Sieviešu somiņas", lt: "Moterų rankinės", et: "Naiste käekotid", en: "Women's bags" },
  acc_clutch: { ru: "Клатчи", lv: "Klači", lt: "Delninės", et: "Õhtukotid", en: "Clutches" },
  acc_men_bags: { ru: "Мужские сумки", lv: "Vīriešu somas", lt: "Vyrų krepšiai", et: "Meeste kotid", en: "Men's bags" },
  acc_kids_bags: { ru: "Детские сумки", lv: "Bērnu somas", lt: "Vaikų krepšiai", et: "Lastekotid", en: "Kids' bags" },
  acc_backpacks: { ru: "Рюкзаки", lv: "Mugursomas", lt: "Kuprinės", et: "Seljakotid", en: "Backpacks" },
  acc_sport_bags: { ru: "Спортивные сумки", lv: "Sporta somas", lt: "Sportiniai krepšiai", et: "Spordikotid", en: "Sports bags" },
  acc_suitcases: { ru: "Чемоданы", lv: "Čemodāni", lt: "Lagaminai", et: "Kohvrid", en: "Suitcases" },
  acc_other: { ru: "Другие аксессуары", lv: "Citi aksesuāri", lt: "Kiti aksesuarai", et: "Muud aksessuaarid", en: "Other accessories" },
  kids_clothes: { ru: "Детская одежда", lv: "Bērnu apģērbs", lt: "Vaikų rūbai", et: "Lasteriided", en: "Kids clothes" },
  toys: { ru: "Игрушки", lv: "Rotaļlietas", lt: "Žaislai", et: "Mänguasjad", en: "Toys" },
  school: { ru: "Школа и книги", lv: "Skola, grāmatas", lt: "Mokykla, knygos", et: "Kool, raamatud", en: "School" },
  carseats: { ru: "Автокресла", lv: "Autosēdeklīši", lt: "Kėdutės", et: "Turvatoolid", en: "Car seats" },
  kids_food: { ru: "Кормление", lv: "Barošana", lt: "Maitinimas", et: "Toitmine", en: "Feeding" },
  other_kids: { ru: "Другое детское", lv: "Cits bērniem", lt: "Kita vaikams", et: "Muu lastele", en: "Other kids" },
  fitness: { ru: "Фитнес", lv: "Fitnesa", lt: "Fitnesas", et: "Fitness", en: "Fitness" },
  fishing: { ru: "Рыбалка", lv: "Makšķerēšana", lt: "Žvejyba", et: "Kalastus", en: "Fishing" },
  hunting: { ru: "Охота", lv: "Medības", lt: "Medžioklė", et: "Jaht", en: "Hunting" },
  tourism: { ru: "Туризм", lv: "Tūrisms", lt: "Turizmas", et: "Turism", en: "Tourism" },
  music: { ru: "Музыка", lv: "Mūzika", lt: "Muzika", et: "Muusika", en: "Music" },
  collections: { ru: "Коллекции", lv: "Kolekcijas", lt: "Kolekcionavimas", et: "Kogumine", en: "Collections" },
  boardgames: { ru: "Настольные игры", lv: "Galda spēles", lt: "Stalo žaidimai", et: "Lauamängud", en: "Board games" },
  other_hobby: { ru: "Другое хобби", lv: "Cits hobijs", lt: "Kitas hobis", et: "Muu hobi", en: "Other hobby" },
  other: { ru: "Другое", lv: "Cits", lt: "Kita", et: "Muu", en: "Other" },
};

function optLabel(value) {
  const lang = window.BaltiqI18n ? window.BaltiqI18n.getLang() : "ru";
  const row = OPT_LABELS[value];
  return (row && (row[lang] || row.ru || row.en)) || value;
}

function subLabel(id) {
  const lang = window.BaltiqI18n ? window.BaltiqI18n.getLang() : "ru";
  const row = SUB_LABELS[id];
  return (row && (row[lang] || row.ru || row.en)) || id;
}

function legalName(country) {
  if (country === "LT") return "Jonas Petraitis";
  if (country === "EE") return "Mari Tamm";
  return "Jānis Bērziņš";
}
