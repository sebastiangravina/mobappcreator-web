// Marketing content. Items marked SAMPLE are placeholders written for the
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

// SAMPLE — replace with real platform numbers.
export const stats = [
  { value: "100K+", label: "Apps created" },
  { value: "40M+", label: "App views" },
  { value: "60+", label: "Ready-made modules" },
  { value: "14 days", label: "Free trial, no card" },
];

// SAMPLE — placeholder testimonials. Replace with real, approved quotes.
export const testimonials = [
  {
    quote: "We had our restaurant app on both stores in a week. Online orders now come straight from the app.",
    name: "Sample customer",
    role: "Restaurant owner",
  },
  {
    quote: "The white label dashboard lets us sell apps to our clients under our own brand. It became a new revenue line.",
    name: "Sample customer",
    role: "Digital agency founder",
  },
  {
    quote: "Push notifications brought members back to our gym classes. It paid for itself in the first month.",
    name: "Sample customer",
    role: "Fitness studio manager",
  },
];

export const faqs = [
  {
    q: "Do I need to know how to code?",
    a: "No. You build your app by combining modules and choosing your design in the online editor. You see every change in a live preview.",
  },
  {
    q: "How does the free trial work?",
    a: "You get 14 days to build your app with every feature unlocked. Choose a plan when you are ready to publish.",
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

// SAMPLE — showcase apps. Replace with real customer apps and screenshots.
export const showcase = [
  { name: "La Parrilla", category: "Restaurant", color: "var(--orange)", desc: "Menu, online orders and table bookings." },
  { name: "Pulse Fitness", category: "Gym", color: "var(--lime)", desc: "Class schedule, memberships and push reminders." },
  { name: "Radio Sur 98.5", category: "Radio", color: "var(--magenta)", desc: "Live streaming, podcasts and news." },
  { name: "Costa Azul Resort", category: "Hotel", color: "var(--sky)", desc: "Room service, spa bookings and local guide." },
  { name: "Grace Community", category: "Church", color: "var(--magenta)", desc: "Sermons, events and donations." },
  { name: "Urban Cuts", category: "Salon", color: "var(--orange)", desc: "Appointments, loyalty and promotions." },
  { name: "Prime Realty", category: "Real estate", color: "var(--sky)", desc: "Listings, open houses and agent contact." },
  { name: "Green Valley Golf", category: "Golf", color: "var(--lime)", desc: "Tee times, scorecards and club news." },
];

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO
  category: string;
  readMinutes: number;
  color: string;
  body: { h?: string; p: string }[];
};

// SAMPLE — blog posts. Swap for a CMS (or MDX files) later.
export const posts: Post[] = [
  {
    slug: "why-your-small-business-needs-an-app",
    title: "Why your small business needs its own app in 2026",
    excerpt: "A website brings people in. An app keeps them coming back. Here is what changes when your brand lives on your customers’ home screen.",
    date: "2026-10-06",
    category: "Small business",
    readMinutes: 5,
    color: "var(--sky)",
    body: [
      { p: "Your customers already spend most of their phone time inside apps. Having your own puts your brand one tap away, next to the apps they use every day." },
      { h: "Direct, free reach", p: "Push notifications reach every customer who installed your app, at no cost per message. No algorithm decides who sees your offer." },
      { h: "Loyalty that sticks", p: "Bookings, orders and loyalty cards inside your app make repeat visits easier than going to a competitor." },
      { h: "Faster than you think", p: "With a no-code builder, a first version can be ready in an afternoon and live on the stores within days." },
    ],
  },
  {
    slug: "push-notifications-that-people-love",
    title: "7 push notification ideas your customers will actually like",
    excerpt: "Good push messages feel like a favor, not an ad. Seven examples you can copy this week.",
    date: "2026-09-22",
    category: "Marketing",
    readMinutes: 4,
    color: "var(--magenta)",
    body: [
      { p: "The best notifications are timely, personal and short. Here are seven that work for most small businesses." },
      { h: "1. The gentle reminder", p: "“Your class starts in 2 hours.” Useful, expected and appreciated." },
      { h: "2. The insider offer", p: "Give app users a perk nobody else gets. It rewards the install." },
      { h: "3. The news they asked for", p: "New menu, new arrivals, new episode: tell the people who opted in to hear it." },
    ],
  },
  {
    slug: "start-an-app-agency",
    title: "How to start selling mobile apps to your clients",
    excerpt: "Agencies are adding apps to their offer without hiring developers. A practical guide to pricing, packaging and delivery.",
    date: "2026-09-08",
    category: "Agencies",
    readMinutes: 7,
    color: "var(--orange)",
    body: [
      { p: "Most of your clients already pay you for a website, social media or ads. An app is a natural next step, and it brings recurring revenue." },
      { h: "Package it simply", p: "Offer a setup fee plus a monthly plan that includes hosting, updates and push campaigns." },
      { h: "Deliver under your brand", p: "A white label dashboard means your clients log in to your platform, on your domain, with your logo." },
    ],
  },
  {
    slug: "getting-approved-on-the-app-store",
    title: "Getting approved on the App Store: a checklist",
    excerpt: "Most rejections come from a handful of avoidable issues. Check these before you submit.",
    date: "2026-08-25",
    category: "Guides",
    readMinutes: 6,
    color: "var(--lime)",
    body: [
      { p: "Apple reviews every app by hand. These are the points that most often cause a rejection, and how to avoid them." },
      { h: "Real content, real value", p: "Apps that only wrap a website are often rejected. Use native features like push, bookings or offline content." },
      { h: "Complete metadata", p: "Screenshots, description, privacy policy URL and support contact must all be in place." },
    ],
  },
];
