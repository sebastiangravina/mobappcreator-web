// Global site settings. Change URLs and contact details here only.

export const site = {
  name: "MobAppCreator",
  url: "https://www.mobappcreator.com",
  tagline: "Build and manage amazing mobile apps.",
  description:
    "MobAppCreator is the no-code platform for small businesses, entrepreneurs and agencies to build, publish and grow native iPhone, iPad and Android apps.",
  appUrl: "https://apps.mobappcreator.com",
  signupUrl: "https://apps.mobappcreator.com",
  loginUrl: "https://apps.mobappcreator.com",
  helpUrl: "/help/",
  trialDays: 14,
  email: "info@mobappcreator.com",
  social: {
    twitter: "https://twitter.com/mobappcreator",
    youtube: "https://www.youtube.com/watch?v=iVM6D4HSooQ",
  },
  offices: [
    {
      country: "United States",
      company: "MobApp Labs LLC",
      lines: ["1900 N Bayshore Dr", "Miami, Florida 33132"],
    },
    {
      country: "Argentina",
      company: "MobApp Labs S.A.",
      lines: ["Tucumán 810", "Autonomous City of Buenos Aires", "C1049AAR"],
    },
  ],
};

export const mainNav = [
  { label: "Features", href: "/features/" },
  { label: "Showcase", href: "/showcase/" },
  { label: "Pricing", href: "/pricing/" },
  { label: "Agencies", href: "/pricing/?plan=agency" },
  { label: "Help", href: "/help/" },
  { label: "Contact", href: "/contact/" },
];

export const footerNav = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/features/" },
      { label: "Pricing", href: "/pricing/" },
      { label: "Showcase", href: "/showcase/" },
      { label: "For agencies", href: "/pricing/?plan=agency" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about/" },
          { label: "Contact", href: "/contact/" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "/help/" },
      { label: "Log in", href: "https://apps.mobappcreator.com" },
      { label: "Start free trial", href: "https://apps.mobappcreator.com" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms and Conditions", href: "/legal/terms/" },
      { label: "Privacy Policy", href: "/legal/privacy/" },
    ],
  },
];
