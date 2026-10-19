// Pricing data, taken from the current mobappcreator.com plan tables.
// A cell is `true` (included), `false` (not included) or a text value.
// Yearly prices are a 17% discount, rounded down, matching the "-17%" badge
// on the current site. CHECK these yearly figures before launch.

export type Cell = boolean | string;
export type Platform = "android" | "iphone" | "ipad";

export type Plan = {
  id: string;
  name: string;
  monthly: number;
  yearly: number; // per month, billed yearly
  blurb: string;
  platforms: Platform[];
  recommended?: boolean;
  highlights: string[];
};

export type FeatureRow = { label: string; group: string; values: Cell[] };

export type PlanFamily = {
  id: "business" | "agency";
  title: string;
  subtitle: string;
  plans: Plan[];
  rows: FeatureRow[];
};

const yearly = (m: number) => Math.floor(m * 0.83);

export const businessPlans: PlanFamily = {
  id: "business",
  title: "For your business",
  subtitle: "One app for your brand, on the App Store and Google Play.",
  plans: [
    {
      id: "starter",
      name: "Starter",
      monthly: 29,
      yearly: yearly(29),
      blurb: "Launch your first Android app.",
      platforms: ["android"],
      highlights: ["Native Android app", "5,000 push notifications / mo", "Form builder & social login", "1 GB storage"],
    },
    {
      id: "basic",
      name: "Basic",
      monthly: 49,
      yearly: yearly(49),
      blurb: "Android and iPhone, with media.",
      platforms: ["android", "iphone"],
      highlights: ["Android + iPhone apps", "Unlimited push notifications", "Radio & video streaming", "Store submission assistance"],
    },
    {
      id: "professional",
      name: "Professional",
      monthly: 59,
      yearly: yearly(59),
      blurb: "Monetize and engage your users.",
      platforms: ["android", "iphone"],
      recommended: true,
      highlights: ["Everything in Basic", "Monetization with AdMob", "Rich push & notification inbox", "White label app"],
    },
    {
      id: "advanced",
      name: "Advanced",
      monthly: 99,
      yearly: yearly(99),
      blurb: "Sell in-app and scale up.",
      platforms: ["android", "iphone", "ipad"],
      highlights: ["Everything in Professional", "iPad app + 5 live apps", "Ecommerce shop & API access", "Dedicated support"],
    },
  ],
  rows: [
    { group: "Apps", label: "Supported platforms", values: ["Android", "Android / iPhone", "Android / iPhone", "Android / iPhone / iPad"] },
    { group: "Apps", label: "Live apps", values: ["1", "1", "1", "5"] },
    { group: "Apps", label: "Apps in draft", values: ["5", "10", "20", "50"] },
    { group: "Apps", label: "Cloud storage", values: ["1 GB", "5 GB", "20 GB", "50 GB"] },
    { group: "Apps", label: "Additional app", values: ["USD 15", "USD 15", "USD 15", "USD 15"] },
    { group: "Apps", label: "App builder", values: [true, true, true, true] },
    { group: "Apps", label: "Real time updates", values: [true, true, true, true] },
    { group: "Apps", label: "Submission assistance", values: [false, true, true, true] },
    { group: "Apps", label: "Number of screens", values: ["10", "Unlimited", "Unlimited", "Unlimited"] },
    { group: "Apps", label: "Categories", values: ["10", "Unlimited", "Unlimited", "Unlimited"] },
    { group: "Apps", label: "Monthly active users", values: ["Unlimited", "Unlimited", "Unlimited", "Unlimited"] },
    { group: "Engagement", label: "Analytics", values: [true, true, true, true] },
    { group: "Engagement", label: "Push notifications", values: ["5,000", "Unlimited", "Unlimited", "Unlimited"] },
    { group: "Engagement", label: "Push notification inbox", values: [false, false, true, true] },
    { group: "Engagement", label: "Rich push notifications", values: [false, false, true, true] },
    { group: "Engagement", label: "Monetization (AdMob)", values: [false, false, true, true] },
    { group: "Modules", label: "Ecommerce shop", values: [false, false, false, true] },
    { group: "Modules", label: "Form builder", values: [true, true, true, true] },
    { group: "Modules", label: "Radio streaming", values: [false, true, true, true] },
    { group: "Modules", label: "Video streaming", values: [false, true, true, true] },
    { group: "Modules", label: "Social login", values: [true, true, true, true] },
    { group: "Modules", label: "White label apps", values: [false, false, true, true] },
    { group: "Modules", label: "API access", values: [false, false, false, true] },
    { group: "Service", label: "Support", values: ["Email", "Ticket", "Ticket", "Dedicated"] },
    { group: "Service", label: "Setup fee", values: ["Free", "Free", "Free", "Free"] },
  ],
};

export const agencyPlans: PlanFamily = {
  id: "agency",
  title: "For agencies",
  subtitle: "Build apps for your clients under your own brand, and keep the margin.",
  plans: [
    {
      id: "agency-lite",
      name: "Agency Lite",
      monthly: 199,
      yearly: yearly(199),
      blurb: "Start reselling apps to clients.",
      platforms: ["android", "iphone", "ipad"],
      highlights: ["5 live apps, 100 drafts", "White label dashboard", "Custom domain & SSL", "Onboarding & training"],
    },
    {
      id: "agency",
      name: "Agency",
      monthly: 299,
      yearly: yearly(299),
      blurb: "Your brand, end to end.",
      platforms: ["android", "iphone", "ipad"],
      recommended: true,
      highlights: ["10 live apps, 500 drafts", "White label frontend", "Stripe billing for your clients", "Dedicated support"],
    },
    {
      id: "clone",
      name: "MobAppCreator Clone",
      monthly: 1599,
      yearly: yearly(1599),
      blurb: "Run your own app-builder platform.",
      platforms: ["android", "iphone", "ipad"],
      highlights: ["500 live apps, 10,000 drafts", "5,000 GB storage", "Ecommerce & API access", "USD 10 per additional app"],
    },
  ],
  rows: [
    { group: "Apps", label: "Supported platforms", values: ["Android / iPhone / iPad", "Android / iPhone / iPad", "Android / iPhone / iPad"] },
    { group: "Apps", label: "Live apps", values: ["5", "10", "500"] },
    { group: "Apps", label: "Apps in draft", values: ["100", "500", "10,000"] },
    { group: "Apps", label: "Cloud storage", values: ["10 GB", "100 GB", "5,000 GB"] },
    { group: "Apps", label: "Additional app", values: ["USD 15", "USD 12", "USD 10"] },
    { group: "Apps", label: "App builder", values: [true, true, true] },
    { group: "Apps", label: "Real time updates", values: [true, true, true] },
    { group: "Apps", label: "Submission assistance", values: [true, true, true] },
    { group: "Apps", label: "Number of screens", values: ["Unlimited", "Unlimited", "Unlimited"] },
    { group: "Apps", label: "Categories", values: ["Unlimited", "Unlimited", "Unlimited"] },
    { group: "Apps", label: "Monthly active users", values: ["Unlimited", "Unlimited", "Unlimited"] },
    { group: "White label", label: "White label dashboard", values: [true, true, true] },
    { group: "White label", label: "White label frontend", values: [false, true, true] },
    { group: "White label", label: "Custom domain and SSL", values: [true, true, true] },
    { group: "White label", label: "Stripe payment gateway", values: [false, true, true] },
    { group: "White label", label: "Product & pricing manager", values: [false, true, true] },
    { group: "White label", label: "Language manager", values: [true, true, true] },
    { group: "Engagement", label: "Analytics", values: [true, true, true] },
    { group: "Engagement", label: "Push notifications", values: ["Unlimited", "Unlimited", "Unlimited"] },
    { group: "Engagement", label: "Push notification inbox", values: [true, true, true] },
    { group: "Engagement", label: "Rich push notifications", values: [true, true, true] },
    { group: "Engagement", label: "Monetization (AdMob)", values: [true, true, true] },
    { group: "Modules", label: "Ecommerce shop", values: [false, false, true] },
    { group: "Modules", label: "Form builder", values: [true, true, true] },
    { group: "Modules", label: "Radio streaming", values: [true, true, true] },
    { group: "Modules", label: "Video streaming", values: [true, true, true] },
    { group: "Modules", label: "Social login", values: [true, true, true] },
    { group: "Modules", label: "White label apps", values: [true, true, true] },
    { group: "Modules", label: "API access", values: [false, false, true] },
    { group: "Service", label: "Support", values: ["Ticket", "Dedicated", "Dedicated"] },
    { group: "Service", label: "Onboarding and technical training", values: [true, true, true] },
    { group: "Service", label: "Setup fee", values: ["Free", "Free", "USD 49"] },
  ],
};

export const pricingNotes = [
  "Publishing on Google Play requires your own Google Play developer account.",
  "Publishing on the Apple App Store requires an Apple Developer account. Each app needs its own account.",
  "Push notification limits count messages sent per month. With 5,000 users and a 10,000-message plan, you can send 2 messages a month.",
  "MobAppCreator can’t guarantee store approval. Our team gives guidelines and advice to improve your chances, but approval decisions belong to Apple and Google.",
];
