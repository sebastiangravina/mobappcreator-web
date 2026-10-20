// Apps built with MobAppCreator, from the reviewed app-cards catalog (October 19, 2026).
// Only apps with a confirmed store listing are included. Descriptions are editorial summaries, not customer quotes.
// Images live in public/showcase/<slug>.webp (1000×786).

export type ShowcaseApp = {
  slug: string;
  name: string;
  category: string;
  description: string;
  android: boolean; // on Google Play
  ios: boolean; // on the App Store
};

export const showcaseApps: ShowcaseApp[] = [
  {"slug": "asppego", "name": "ASPPEGO", "category": "Unions & associations", "description": "The organization’s information and services, available on mobile.", "android": true, "ios": false},
  {"slug": "locatelli", "name": "Locatelli Serv Contábeis", "category": "Services & community", "description": "Locatelli information and content, together in a mobile experience.", "android": false, "ios": true},
  {"slug": "apostle-chad-collins", "name": "Apostle Chad Collins", "category": "Communities", "description": "A mobile space connecting the community with its content and information.", "android": true, "ios": false},
  {"slug": "certoviny", "name": "Čertoviny. České audio pohádky", "category": "Stories & audio", "description": "Stories narrated in Czech for families to enjoy together.", "android": true, "ios": false},
  {"slug": "cancun-2024-port", "name": "Cancun 2024 PORT", "category": "Events & travel", "description": "Event information and resources to support the attendee experience.", "android": true, "ios": false},
  {"slug": "meditapp", "name": "MeditApp", "category": "Wellbeing", "description": "Content and resources from the organization, within reach of its community.", "android": true, "ios": true},
  {"slug": "yyc-hot-chocolate-fest", "name": "YYC Hot Chocolate Fest", "category": "Events & community", "description": "Discover YYC Hot Chocolate Fest, the hot chocolate festival by Calgary Meals on Wheels.", "android": true, "ios": true},
  {"slug": "padeiros", "name": "Padeiros", "category": "Unions & associations", "description": "The organization’s information and services, available on mobile.", "android": false, "ios": true},
  {"slug": "telecaribe", "name": "Telecaribe Premium", "category": "Services & community", "description": "Telecaribe’s broadcasts and content, together in the Telecaribe Premium app.", "android": true, "ios": false},
  {"slug": "soundtrackfm", "name": "SOUNDTRACKFM", "category": "Radio & music", "description": "An app connecting the station’s audience with its content.", "android": true, "ios": false},
  {"slug": "rietvlei-family-church", "name": "Rietvlei Family Church", "category": "Communities", "description": "A mobile space connecting the community with its content and information.", "android": true, "ios": true},
  {"slug": "strasidelne-pohadky", "name": "Strašidelné pohádky", "category": "Stories & audio", "description": "Stories narrated in Czech for families to enjoy together.", "android": true, "ios": false},
  {"slug": "las-vegas-eng", "name": "Las Vegas WOA 2026 ENG", "category": "Events & travel", "description": "Event information and resources to support the attendee experience.", "android": true, "ios": false},
  {"slug": "solo-un-minuto", "name": "Solo Un Minuto", "category": "Wellbeing", "description": "Content and resources from the organization, within reach of its community.", "android": true, "ios": true},
  {"slug": "yyc-pizza-fest", "name": "YYC Pizza Fest", "category": "Events & community", "description": "Discover YYC Pizza Fest and explore Calgary’s participating pizzerias.", "android": true, "ios": true},
  {"slug": "sindbeneficente", "name": "Sindbeneficente", "category": "Unions & associations", "description": "The organization’s information and services, available on mobile.", "android": true, "ios": false},
  {"slug": "desahogo", "name": "DESAHOGO URBANO", "category": "Radio & music", "description": "An app connecting the station’s audience with its content.", "android": true, "ios": false},
  {"slug": "somec", "name": "Somec", "category": "Cooperatives & funds", "description": "Mobile access to the organization’s information and services.", "android": true, "ios": false},
  {"slug": "drc2-app", "name": "DRC2 App", "category": "Communities", "description": "A mobile space connecting the community with its content and information.", "android": true, "ios": true},
  {"slug": "ceske-pohadky-cela-kniha-kubula-a-kuba-kubikula", "name": "Kubula a Kuba Kubikula", "category": "Stories & audio", "description": "Stories narrated in Czech for families to enjoy together.", "android": true, "ios": false},
  {"slug": "las-vegas-esp", "name": "Las Vegas WOA 2026 ESP", "category": "Events & travel", "description": "Event information and resources to support the attendee experience.", "android": true, "ios": false},
  {"slug": "yagyanet", "name": "YagyaNet", "category": "Wellbeing", "description": "Content and resources from the organization, within reach of its community.", "android": true, "ios": true},
  {"slug": "omg-live", "name": "OMG LIVE", "category": "Services & community", "description": "OMG LIVE information and content, together in a mobile experience.", "android": true, "ios": true},
  {"slug": "fm-okey", "name": "Radio FM Okey", "category": "Radio & music", "description": "An app connecting the station’s audience with its content.", "android": true, "ios": true},
  {"slug": "fonalianza", "name": "Fonalianza", "category": "Cooperatives & funds", "description": "Mobile access to the organization’s information and services.", "android": true, "ios": false},
  {"slug": "gracia-tv-play", "name": "GRACIA TV PLAY", "category": "Communities", "description": "A mobile space connecting the community with its content and information.", "android": true, "ios": false},
  {"slug": "pohadky-broucci", "name": "Pohádky. Celá kniha Broučci", "category": "Stories & audio", "description": "Stories narrated in Czech for families to enjoy together.", "android": true, "ios": false},
  {"slug": "ruralinfo", "name": "Ruralinfo.net", "category": "Services & community", "description": "Ruralinfo information and content, together in a mobile experience.", "android": true, "ios": false},
  {"slug": "kqki-95-3-fm", "name": "KQKI 95.3 FM", "category": "Radio & music", "description": "An app connecting the station’s audience with its content.", "android": true, "ios": false},
  {"slug": "cooindegabo", "name": "Cooindegabo", "category": "Cooperatives & funds", "description": "Mobile access to the organization’s information and services.", "android": true, "ios": false},
  {"slug": "my-gcc-app", "name": "My GCC App", "category": "Communities", "description": "A mobile space connecting the community with its content and information.", "android": true, "ios": true},
  {"slug": "street-kids-direct", "name": "Street Kids Direct", "category": "Services & community", "description": "Street Kids Direct information and content, together in a mobile experience.", "android": true, "ios": true},
  {"slug": "temazos-remember", "name": "Temazos Remember", "category": "Radio & music", "description": "An app connecting the station’s audience with its content.", "android": true, "ios": true},
  {"slug": "fondecor", "name": "Fondecor", "category": "Cooperatives & funds", "description": "Mobile access to the organization’s information and services.", "android": true, "ios": false},
  {"slug": "faith-builders-app", "name": "Faith Builders App", "category": "Communities", "description": "A mobile space connecting the community with its content and information.", "android": true, "ios": false},
  {"slug": "les-roches-marbella-student-app", "name": "Les Roches Marbella students", "category": "Services & community", "description": "Les Roches Marbella Student app information and content, together in a mobile experience.", "android": true, "ios": true},
  {"slug": "radio-voz-de-la-calle", "name": "Radio Voz de la Calle", "category": "Radio & music", "description": "An app connecting the station’s audience with its content.", "android": true, "ios": false},
  {"slug": "sinteata", "name": "Sinteata", "category": "Unions & associations", "description": "The organization’s information and services, available on mobile.", "android": true, "ios": true},
  {"slug": "lucy", "name": "Preguntale a Lucy", "category": "Services & community", "description": "An AI assistant specializing in digital marketing for real estate agents.", "android": true, "ios": false},
  {"slug": "radio-christmas", "name": "Radio Christmas", "category": "Radio & music", "description": "An app connecting the station’s audience with its content.", "android": true, "ios": true},
  {"slug": "felevapan", "name": "Felevapan", "category": "Cooperatives & funds", "description": "Mobile access to the organization’s information and services.", "android": true, "ios": false},
  {"slug": "seacoturh", "name": "Seacoturh", "category": "Unions & associations", "description": "The organization’s information and services, available on mobile.", "android": true, "ios": false},
  {"slug": "prestigio-operadores", "name": "Prestigio Operadores", "category": "Services & community", "description": "Prestigio Operadores information and content, together in a mobile experience.", "android": true, "ios": false},
  {"slug": "jazz-world-radio", "name": "Jazz & World Radio", "category": "Radio & music", "description": "Jazz and world music, with a selection that also includes soul, blues and lounge.", "android": true, "ios": true},
  {"slug": "sindpd-rn", "name": "SINDPD RN", "category": "Unions & associations", "description": "The organization’s information and services, available on mobile.", "android": true, "ios": false},
  {"slug": "buildingpoint", "name": "BuildingPoint", "category": "Services & community", "description": "BuildingPoint information and content, together in a mobile experience.", "android": true, "ios": false},
  {"slug": "impact-103", "name": "Impact 103", "category": "Radio & music", "description": "An app connecting the station’s audience with its content.", "android": true, "ios": true},
  {"slug": "sincomerciarios-itapetininga-tatui-e-regiao", "name": "Sincomerciários Itapetininga", "category": "Unions & associations", "description": "The organization’s information and services, available on mobile.", "android": true, "ios": false},
  {"slug": "escuela-neijing", "name": "Escuela Neijing", "category": "Services & community", "description": "News, radio content, publications and the Escuela Neijing directory in one app.", "android": true, "ios": false},
  {"slug": "soul-radio", "name": "Soul Radio", "category": "Radio & music", "description": "Soul Radio’s programming: soul, funk, R&B and disco, available on mobile.", "android": true, "ios": true},
  {"slug": "discover-hawick", "name": "Discover Hawick", "category": "Services & community", "description": "Discover Hawick information and content, together in a mobile experience.", "android": true, "ios": false},
  {"slug": "okey-music", "name": "Okey Music 104.3", "category": "Radio & music", "description": "An app connecting the station’s audience with its content.", "android": true, "ios": true},
  {"slug": "sindmotorlix", "name": "Sindmotorlix", "category": "Unions & associations", "description": "The organization’s information and services, available on mobile.", "android": true, "ios": false},
  {"slug": "agenfor", "name": "Agenfor", "category": "Services & community", "description": "AGENFOR information and content, together in a mobile experience.", "android": true, "ios": false},
  {"slug": "relax-fm", "name": "Relax FM", "category": "Radio & music", "description": "An app connecting the station’s audience with its content.", "android": true, "ios": true},
  {"slug": "mitoay", "name": "MiTOAY", "category": "Services & community", "description": "MiTOAY information and content, together in a mobile experience.", "android": true, "ios": false},
  {"slug": "soundly", "name": "SoundLy", "category": "Radio & music", "description": "An app connecting the station’s audience with its content.", "android": true, "ios": true},
  {"slug": "luv-coffee-houston", "name": "Luv Coffee Houston", "category": "Services & community", "description": "The Luv Coffee experience, available on mobile.", "android": true, "ios": false},
  {"slug": "radio-sabia", "name": "Rádio Sabiá", "category": "Radio & music", "description": "An app connecting the station’s audience with its content.", "android": true, "ios": true},
  {"slug": "ands", "name": "ANDS", "category": "Unions & associations", "description": "The organization’s information and services, available on mobile.", "android": true, "ios": false},
  {"slug": "woodstats", "name": "WoodStats", "category": "Services & community", "description": "The WoodStats app from the Malaysian Timber Council.", "android": true, "ios": true},
  {"slug": "mi-electrica", "name": "Mi electrica", "category": "Services & community", "description": "Mi electrica information and content, together in a mobile experience.", "android": true, "ios": false},
  {"slug": "sindserh-ms", "name": "SINDSERH-MS", "category": "Unions & associations", "description": "The organization’s information and services, available on mobile.", "android": true, "ios": false},
  {"slug": "flowise", "name": "Flowise", "category": "Services & community", "description": "Flowise information and content, together in a mobile experience.", "android": true, "ios": true},
  {"slug": "distribuidora-urbana", "name": "Distribuidora Urbana", "category": "Services & community", "description": "Distribuidora Urbana information and content, together in a mobile experience.", "android": true, "ios": false},
  {"slug": "sindimar", "name": "Sindimar", "category": "Unions & associations", "description": "The organization’s information and services, available on mobile.", "android": true, "ios": false},
  {"slug": "help-me-cr", "name": "Help Me", "category": "Services & community", "description": "HELP ME CR information and content, together in a mobile experience.", "android": true, "ios": false},
  {"slug": "sindfisc-porto-velho", "name": "Sindfisc Porto Velho", "category": "Unions & associations", "description": "The organization’s information and services, available on mobile.", "android": true, "ios": false},
  {"slug": "mobappshopp", "name": "MobApp Shop", "category": "Services & community", "description": "MobappShopp information and content, together in a mobile experience.", "android": true, "ios": false},
  {"slug": "sindicato-seth", "name": "Sindicato SETH", "category": "Unions & associations", "description": "The organization’s information and services, available on mobile.", "android": true, "ios": false},
  {"slug": "sindirefeicoes-suzano-gru", "name": "Sindirefeições Suzano GRU", "category": "Unions & associations", "description": "The organization’s information and services, available on mobile.", "android": true, "ios": false},
  {"slug": "sintragastroh-sar", "name": "SINTRAGASTROH SAR", "category": "Unions & associations", "description": "The organization’s information and services, available on mobile.", "android": true, "ios": false},
  {"slug": "sethbr-bauru-e-regiao", "name": "SETHBR Bauru e Região", "category": "Unions & associations", "description": "The organization’s information and services, available on mobile.", "android": true, "ios": false},
  {"slug": "metalurgicos-de-cajamar-e-regiao", "name": "Metalúrgicos de Cajamar", "category": "Unions & associations", "description": "The organization’s information and services, available on mobile.", "android": true, "ios": false},
  {"slug": "apmc", "name": "APMC Sindicato", "category": "Unions & associations", "description": "The organization’s information and services, available on mobile.", "android": true, "ios": false},
  {"slug": "sincomerciarios-taubate", "name": "Sincomerciários Taubaté", "category": "Unions & associations", "description": "The organization’s information and services, available on mobile.", "android": true, "ios": false},
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
