// Apps built with MobAppCreator, from the reviewed app-cards catalog (October 19, 2026).
// Only apps with a confirmed store listing are included. Descriptions are editorial summaries, not customer quotes.
// Images live in public/showcase/<slug>.webp (1000×786).

/** Only what a card shows: no app names are sent to the browser. */
// `img` is a content hash: the image file name changes whenever the picture changes, and has no app name in it.
export type ShowcaseCardData = { img: string; category: string; ios: boolean; android: boolean };

export type ShowcaseApp = {
  slug: string;
  img: string; // card image: /showcase/cards/<img>.webp
  name: string;
  category: string;
  description: string;
  android: boolean; // on Google Play
  ios: boolean; // on the App Store
};

export const showcaseApps: ShowcaseApp[] = [
  {"slug": "asppego", "img": "f4380c924f", "name": "ASPPEGO", "category": "Unions & associations", "description": "The organization’s information and services, available on mobile.", "android": true, "ios": false},
  {"slug": "locatelli", "img": "65fe38ff5a", "name": "Locatelli Serv Contábeis", "category": "Services & community", "description": "Locatelli information and content, together in a mobile experience.", "android": false, "ios": true},
  {"slug": "apostle-chad-collins", "img": "c8acf89c0a", "name": "Apostle Chad Collins", "category": "Communities", "description": "A mobile space connecting the community with its content and information.", "android": true, "ios": false},
  {"slug": "certoviny", "img": "24c89fd13b", "name": "Čertoviny. České audio pohádky", "category": "Stories & audio", "description": "Stories narrated in Czech for families to enjoy together.", "android": true, "ios": false},
  {"slug": "cancun-2024-port", "img": "7fd92316da", "name": "Cancun 2024 PORT", "category": "Events & travel", "description": "Event information and resources to support the attendee experience.", "android": true, "ios": false},
  {"slug": "meditapp", "img": "f142073e6c", "name": "MeditApp", "category": "Wellbeing", "description": "Content and resources from the organization, within reach of its community.", "android": true, "ios": true},
  {"slug": "yyc-hot-chocolate-fest", "img": "4c5796c726", "name": "YYC Hot Chocolate Fest", "category": "Events & community", "description": "Discover YYC Hot Chocolate Fest, the hot chocolate festival by Calgary Meals on Wheels.", "android": true, "ios": true},
  {"slug": "padeiros", "img": "811e50298e", "name": "Padeiros", "category": "Unions & associations", "description": "The organization’s information and services, available on mobile.", "android": false, "ios": true},
  {"slug": "telecaribe", "img": "6a2e1a081e", "name": "Telecaribe Premium", "category": "Services & community", "description": "Telecaribe’s broadcasts and content, together in the Telecaribe Premium app.", "android": true, "ios": false},
  {"slug": "soundtrackfm", "img": "c9b51000be", "name": "SOUNDTRACKFM", "category": "Radio & music", "description": "An app connecting the station’s audience with its content.", "android": true, "ios": false},
  {"slug": "rietvlei-family-church", "img": "de07009569", "name": "Rietvlei Family Church", "category": "Communities", "description": "A mobile space connecting the community with its content and information.", "android": true, "ios": true},
  {"slug": "strasidelne-pohadky", "img": "19247f1497", "name": "Strašidelné pohádky", "category": "Stories & audio", "description": "Stories narrated in Czech for families to enjoy together.", "android": true, "ios": false},
  {"slug": "las-vegas-eng", "img": "4ebbdbf6b3", "name": "Las Vegas WOA 2026 ENG", "category": "Events & travel", "description": "Event information and resources to support the attendee experience.", "android": true, "ios": false},
  {"slug": "solo-un-minuto", "img": "e5e9c85f0f", "name": "Solo Un Minuto", "category": "Wellbeing", "description": "Content and resources from the organization, within reach of its community.", "android": true, "ios": true},
  {"slug": "yyc-pizza-fest", "img": "d1b5b20cfb", "name": "YYC Pizza Fest", "category": "Events & community", "description": "Discover YYC Pizza Fest and explore Calgary’s participating pizzerias.", "android": true, "ios": true},
  {"slug": "sindbeneficente", "img": "df6067396d", "name": "Sindbeneficente", "category": "Unions & associations", "description": "The organization’s information and services, available on mobile.", "android": true, "ios": false},
  {"slug": "desahogo", "img": "592ea86c19", "name": "DESAHOGO URBANO", "category": "Radio & music", "description": "An app connecting the station’s audience with its content.", "android": true, "ios": false},
  {"slug": "somec", "img": "8fd96e83fb", "name": "Somec", "category": "Cooperatives & funds", "description": "Mobile access to the organization’s information and services.", "android": true, "ios": false},
  {"slug": "drc2-app", "img": "052e0bacd4", "name": "DRC2 App", "category": "Communities", "description": "A mobile space connecting the community with its content and information.", "android": true, "ios": true},
  {"slug": "ceske-pohadky-cela-kniha-kubula-a-kuba-kubikula", "img": "27f7df8054", "name": "Kubula a Kuba Kubikula", "category": "Stories & audio", "description": "Stories narrated in Czech for families to enjoy together.", "android": true, "ios": false},
  {"slug": "las-vegas-esp", "img": "9dfc818b17", "name": "Las Vegas WOA 2026 ESP", "category": "Events & travel", "description": "Event information and resources to support the attendee experience.", "android": true, "ios": false},
  {"slug": "yagyanet", "img": "45e59fcdba", "name": "YagyaNet", "category": "Wellbeing", "description": "Content and resources from the organization, within reach of its community.", "android": true, "ios": true},
  {"slug": "omg-live", "img": "df9a6cd892", "name": "OMG LIVE", "category": "Services & community", "description": "OMG LIVE information and content, together in a mobile experience.", "android": true, "ios": true},
  {"slug": "fm-okey", "img": "9c8c87b3f5", "name": "Radio FM Okey", "category": "Radio & music", "description": "An app connecting the station’s audience with its content.", "android": true, "ios": true},
  {"slug": "fonalianza", "img": "a690cc2150", "name": "Fonalianza", "category": "Cooperatives & funds", "description": "Mobile access to the organization’s information and services.", "android": true, "ios": false},
  {"slug": "gracia-tv-play", "img": "9761398545", "name": "GRACIA TV PLAY", "category": "Communities", "description": "A mobile space connecting the community with its content and information.", "android": true, "ios": false},
  {"slug": "pohadky-broucci", "img": "e4f127c880", "name": "Pohádky. Celá kniha Broučci", "category": "Stories & audio", "description": "Stories narrated in Czech for families to enjoy together.", "android": true, "ios": false},
  {"slug": "ruralinfo", "img": "92bfb3155a", "name": "Ruralinfo.net", "category": "Services & community", "description": "Ruralinfo information and content, together in a mobile experience.", "android": true, "ios": false},
  {"slug": "kqki-95-3-fm", "img": "c66778a609", "name": "KQKI 95.3 FM", "category": "Radio & music", "description": "An app connecting the station’s audience with its content.", "android": true, "ios": false},
  {"slug": "cooindegabo", "img": "685b957afc", "name": "Cooindegabo", "category": "Cooperatives & funds", "description": "Mobile access to the organization’s information and services.", "android": true, "ios": false},
  {"slug": "my-gcc-app", "img": "bae69baf1d", "name": "My GCC App", "category": "Communities", "description": "A mobile space connecting the community with its content and information.", "android": true, "ios": true},
  {"slug": "street-kids-direct", "img": "04169e1f30", "name": "Street Kids Direct", "category": "Services & community", "description": "Street Kids Direct information and content, together in a mobile experience.", "android": true, "ios": true},
  {"slug": "temazos-remember", "img": "e8dfe7de6f", "name": "Temazos Remember", "category": "Radio & music", "description": "An app connecting the station’s audience with its content.", "android": true, "ios": true},
  {"slug": "fondecor", "img": "44be55e4eb", "name": "Fondecor", "category": "Cooperatives & funds", "description": "Mobile access to the organization’s information and services.", "android": true, "ios": false},
  {"slug": "faith-builders-app", "img": "32d23ddd77", "name": "Faith Builders App", "category": "Communities", "description": "A mobile space connecting the community with its content and information.", "android": true, "ios": false},
  {"slug": "les-roches-marbella-student-app", "img": "a97985fd29", "name": "Les Roches Marbella students", "category": "Services & community", "description": "Les Roches Marbella Student app information and content, together in a mobile experience.", "android": true, "ios": true},
  {"slug": "radio-voz-de-la-calle", "img": "99edbc9696", "name": "Radio Voz de la Calle", "category": "Radio & music", "description": "An app connecting the station’s audience with its content.", "android": true, "ios": false},
  {"slug": "sinteata", "img": "4faf89e1a7", "name": "Sinteata", "category": "Unions & associations", "description": "The organization’s information and services, available on mobile.", "android": true, "ios": true},
  {"slug": "lucy", "img": "323fd7d0b2", "name": "Preguntale a Lucy", "category": "Services & community", "description": "An AI assistant specializing in digital marketing for real estate agents.", "android": true, "ios": false},
  {"slug": "radio-christmas", "img": "1c073771e3", "name": "Radio Christmas", "category": "Radio & music", "description": "An app connecting the station’s audience with its content.", "android": true, "ios": true},
  {"slug": "felevapan", "img": "9125575916", "name": "Felevapan", "category": "Cooperatives & funds", "description": "Mobile access to the organization’s information and services.", "android": true, "ios": false},
  {"slug": "seacoturh", "img": "b74e4ad172", "name": "Seacoturh", "category": "Unions & associations", "description": "The organization’s information and services, available on mobile.", "android": true, "ios": false},
  {"slug": "prestigio-operadores", "img": "e3d6cb272d", "name": "Prestigio Operadores", "category": "Services & community", "description": "Prestigio Operadores information and content, together in a mobile experience.", "android": true, "ios": false},
  {"slug": "jazz-world-radio", "img": "eec7bdc13f", "name": "Jazz & World Radio", "category": "Radio & music", "description": "Jazz and world music, with a selection that also includes soul, blues and lounge.", "android": true, "ios": true},
  {"slug": "sindpd-rn", "img": "57c2bd900e", "name": "SINDPD RN", "category": "Unions & associations", "description": "The organization’s information and services, available on mobile.", "android": true, "ios": false},
  {"slug": "buildingpoint", "img": "91ce2d33a8", "name": "BuildingPoint", "category": "Services & community", "description": "BuildingPoint information and content, together in a mobile experience.", "android": true, "ios": false},
  {"slug": "impact-103", "img": "38501c8f88", "name": "Impact 103", "category": "Radio & music", "description": "An app connecting the station’s audience with its content.", "android": true, "ios": true},
  {"slug": "sincomerciarios-itapetininga-tatui-e-regiao", "img": "50e7d6430a", "name": "Sincomerciários Itapetininga", "category": "Unions & associations", "description": "The organization’s information and services, available on mobile.", "android": true, "ios": false},
  {"slug": "escuela-neijing", "img": "51bd422cb4", "name": "Escuela Neijing", "category": "Services & community", "description": "News, radio content, publications and the Escuela Neijing directory in one app.", "android": true, "ios": false},
  {"slug": "soul-radio", "img": "d3b1436d20", "name": "Soul Radio", "category": "Radio & music", "description": "Soul Radio’s programming: soul, funk, R&B and disco, available on mobile.", "android": true, "ios": true},
  {"slug": "discover-hawick", "img": "dae553214a", "name": "Discover Hawick", "category": "Services & community", "description": "Discover Hawick information and content, together in a mobile experience.", "android": true, "ios": false},
  {"slug": "okey-music", "img": "a17e108b1e", "name": "Okey Music 104.3", "category": "Radio & music", "description": "An app connecting the station’s audience with its content.", "android": true, "ios": true},
  {"slug": "sindmotorlix", "img": "98bf0323bb", "name": "Sindmotorlix", "category": "Unions & associations", "description": "The organization’s information and services, available on mobile.", "android": true, "ios": false},
  {"slug": "agenfor", "img": "e8dbccf45b", "name": "Agenfor", "category": "Services & community", "description": "AGENFOR information and content, together in a mobile experience.", "android": true, "ios": false},
  {"slug": "relax-fm", "img": "b8e4439bac", "name": "Relax FM", "category": "Radio & music", "description": "An app connecting the station’s audience with its content.", "android": true, "ios": true},
  {"slug": "mitoay", "img": "2ac8afb617", "name": "MiTOAY", "category": "Services & community", "description": "MiTOAY information and content, together in a mobile experience.", "android": true, "ios": false},
  {"slug": "soundly", "img": "8610f5f8cf", "name": "SoundLy", "category": "Radio & music", "description": "An app connecting the station’s audience with its content.", "android": true, "ios": true},
  {"slug": "luv-coffee-houston", "img": "1da3bac1b7", "name": "Luv Coffee Houston", "category": "Services & community", "description": "The Luv Coffee experience, available on mobile.", "android": true, "ios": false},
  {"slug": "radio-sabia", "img": "51a104b2d2", "name": "Rádio Sabiá", "category": "Radio & music", "description": "An app connecting the station’s audience with its content.", "android": true, "ios": true},
  {"slug": "ands", "img": "ba01573e00", "name": "ANDS", "category": "Unions & associations", "description": "The organization’s information and services, available on mobile.", "android": true, "ios": false},
  {"slug": "woodstats", "img": "f2d0aefe2b", "name": "WoodStats", "category": "Services & community", "description": "The WoodStats app from the Malaysian Timber Council.", "android": true, "ios": true},
  {"slug": "mi-electrica", "img": "876fd96353", "name": "Mi electrica", "category": "Services & community", "description": "Mi electrica information and content, together in a mobile experience.", "android": true, "ios": false},
  {"slug": "sindserh-ms", "img": "567f24426a", "name": "SINDSERH-MS", "category": "Unions & associations", "description": "The organization’s information and services, available on mobile.", "android": true, "ios": false},
  {"slug": "flowise", "img": "9dbd6b5096", "name": "Flowise", "category": "Services & community", "description": "Flowise information and content, together in a mobile experience.", "android": true, "ios": true},
  {"slug": "distribuidora-urbana", "img": "d94be07c92", "name": "Distribuidora Urbana", "category": "Services & community", "description": "Distribuidora Urbana information and content, together in a mobile experience.", "android": true, "ios": false},
  {"slug": "sindimar", "img": "f458d6b06b", "name": "Sindimar", "category": "Unions & associations", "description": "The organization’s information and services, available on mobile.", "android": true, "ios": false},
  {"slug": "help-me-cr", "img": "30a4975a6b", "name": "Help Me", "category": "Services & community", "description": "HELP ME CR information and content, together in a mobile experience.", "android": true, "ios": false},
  {"slug": "sindfisc-porto-velho", "img": "8384b88e13", "name": "Sindfisc Porto Velho", "category": "Unions & associations", "description": "The organization’s information and services, available on mobile.", "android": true, "ios": false},
  {"slug": "mobappshopp", "img": "f025eb07d8", "name": "MobApp Shop", "category": "Services & community", "description": "MobappShopp information and content, together in a mobile experience.", "android": true, "ios": false},
  {"slug": "sindicato-seth", "img": "9f50f6ecf1", "name": "Sindicato SETH", "category": "Unions & associations", "description": "The organization’s information and services, available on mobile.", "android": true, "ios": false},
  {"slug": "sindirefeicoes-suzano-gru", "img": "2b04931df3", "name": "Sindirefeições Suzano GRU", "category": "Unions & associations", "description": "The organization’s information and services, available on mobile.", "android": true, "ios": false},
  {"slug": "sintragastroh-sar", "img": "b89fcc9bdb", "name": "SINTRAGASTROH SAR", "category": "Unions & associations", "description": "The organization’s information and services, available on mobile.", "android": true, "ios": false},
  {"slug": "sethbr-bauru-e-regiao", "img": "be3ada9dda", "name": "SETHBR Bauru e Região", "category": "Unions & associations", "description": "The organization’s information and services, available on mobile.", "android": true, "ios": false},
  {"slug": "metalurgicos-de-cajamar-e-regiao", "img": "839abaf1c1", "name": "Metalúrgicos de Cajamar", "category": "Unions & associations", "description": "The organization’s information and services, available on mobile.", "android": true, "ios": false},
  {"slug": "apmc", "img": "f7763f72a4", "name": "APMC Sindicato", "category": "Unions & associations", "description": "The organization’s information and services, available on mobile.", "android": true, "ios": false},
  {"slug": "sincomerciarios-taubate", "img": "380903443d", "name": "Sincomerciários Taubaté", "category": "Unions & associations", "description": "The organization’s information and services, available on mobile.", "android": true, "ios": false},
];

export const showcaseCategories = Array.from(new Set(showcaseApps.map((a) => a.category)));

/** A varied selection for the home page, one per category. */
export const featuredShowcase: ShowcaseApp[] = ["relax-fm", "cancun-2024-port", "locatelli", "apostle-chad-collins", "meditapp", "certoviny"].map(
  (s) => showcaseApps.find((a) => a.slug === s)!,
);

/** App icons shown in the "Trusted by" section of the home page (icons in public/showcase/icons/). */
export const trustedApps: ShowcaseApp[] = [
  "jazz-world-radio",
  "relax-fm",
  "las-vegas-eng",
  "telecaribe",
  "certoviny",
  "yyc-pizza-fest",
  "discover-hawick",
  "rietvlei-family-church",
  "buildingpoint",
  "radio-voz-de-la-calle",
  "sinteata",
  "lucy",
  "cancun-2024-port",
  "soul-radio",
  "desahogo",
  "gracia-tv-play",
  "seacoturh",
  "okey-music",
  "impact-103",
  "woodstats",
  "sindbeneficente",
  "mitoay",
  "soundly",
  "distribuidora-urbana",
].map((s) => showcaseApps.find((a) => a.slug === s)!);
