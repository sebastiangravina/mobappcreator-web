// Marketing content.
// first draft. Replace them with real data before launch.

export type IconName =
  | "bell" | "cart" | "form" | "radio" | "video" | "chart" | "user" | "tag"
  | "wand" | "rocket" | "megaphone" | "globe" | "bolt" | "layers" | "lock" | "store"
  | "palette" | "code";

export const steps = [
  {
    icon: "wand" as IconName,
    title: "Create",
    lead: "Build your app in minutes.",
    body: "Mix ready-made modules and customize your design. No code, no developers, live preview as you go.",
    color: "var(--sky)",
  },
  {
    icon: "rocket" as IconName,
    title: "Publish",
    lead: "Get it on the stores.",
    body: "We take care of the submission process on the Apple App Store and Google Play, with your brand front and center.",
    color: "var(--magenta)",
  },
  {
    icon: "megaphone" as IconName,
    title: "Grow",
    lead: "Promote and measure.",
    body: "Send push notifications, share your app and track how people use it with detailed statistics.",
    color: "var(--orange)",
  },
];

export const features: { icon: IconName; title: string; body: string; color: string }[] = [
  { icon: "bell", title: "Push notifications", body: "Reach every user instantly, with rich media and an in-app inbox.", color: "var(--magenta)" },
  { icon: "cart", title: "Ecommerce shop", body: "Sell products in your app with a catalog, cart and checkout.", color: "var(--orange)" },
  { icon: "form", title: "Form builder", body: "Bookings, sign-ups, surveys and quotes, straight to your inbox.", color: "var(--sky)" },
  { icon: "radio", title: "Radio streaming", body: "Stream your station live, even with the phone locked.", color: "var(--lime)" },
  { icon: "video", title: "Video streaming", body: "Bring your YouTube channel and live video into the app.", color: "var(--magenta)" },
  { icon: "tag", title: "Monetization", body: "Earn from your audience with AdMob ads placed for you.", color: "var(--orange)" },
  { icon: "chart", title: "Analytics", body: "See installs, sessions and the screens people love.", color: "var(--sky)" },
  { icon: "user", title: "Social login", body: "One-tap sign in with the accounts your users already have.", color: "var(--lime)" },
  { icon: "bolt", title: "Real-time updates", body: "Change content and design without resubmitting to the stores.", color: "var(--sky)" },
  { icon: "palette", title: "Your brand, everywhere", body: "Your icon, colors and name on the App Store and Google Play.", color: "var(--magenta)" },
  { icon: "layers", title: "Unlimited screens", body: "Grow from a simple menu to a full app as your business grows.", color: "var(--orange)" },
  { icon: "code", title: "API access", body: "Connect your own systems and data on the Advanced plans.", color: "var(--lime)" },
];

export const industries = [
  "Restaurants", "Hotels & resorts", "Gyms & fitness", "Churches", "Bands & DJs", "Real estate",
  "Hair salons", "Spas", "Dentists", "Golf courses", "Bars & clubs", "Lawyers",
  "Car dealerships", "Financial advisors", "Radio stations", "Magazines & eBooks",
  "Contractors", "Chiropractors", "Schools", "Any small business",
];

// Company facts confirmed by MobApp Labs (October 2026).
export const stats = [
  { value: "10+", label: "Years building apps" },
  { value: "20+", label: "Countries with live apps" },
  { value: "3", label: "Platforms: iPhone, iPad and Android" },
  { value: "14 days", label: "Free trial, no card" },
];


export const faqs = [
  {
    q: "Do I need to know how to code?",
    a: "No. You build your app by combining modules and choosing your design in the online editor. You see every change in a live preview.",
  },
  {
    q: "How does the free trial work?",
    a: "You get 14 days free to build and try your app, and no credit card is required to start. Choose a plan when you are ready to publish it on the stores.",
  },
  {
    q: "Will my app be on the App Store and Google Play?",
    a: "Yes. Your app is published under your brand. You need your own Apple Developer and Google Play developer accounts, and our team assists with the submission.",
  },
  {
    q: "Can I update my app after it is published?",
    a: "Yes. Content and design changes go live in real time, without waiting for a new store review.",
  },
  {
    q: "Can I build apps for my clients?",
    a: "Yes. The agency plans include a white label dashboard, custom domain and your own pricing, so you can resell apps under your brand.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. There are no commitments. You can cancel online at any time.",
  },
];

