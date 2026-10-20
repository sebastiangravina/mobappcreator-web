// Permanent (308) redirects for URLs from the old website and the old Intercom help center.
// Kept in next.config.ts (not vercel.json) so they work with or without the trailing slash.
import type { Redirect } from "next/dist/lib/load-custom-routes";

const helpHost = [{ type: "host" as const, value: "help.mobappcreator.com" }];

export const redirects: Redirect[] = [
  // Old help center (help.mobappcreator.com) articles, by Intercom article ID. These come first.
  { source: "/:lang(en|es)/articles/:article(4191132-.*)", has: helpHost, destination: "https://www.mobappcreator.com/help/getting-started/first-steps/", permanent: true },
  { source: "/:lang(en|es)/articles/:article(4192245-.*)", has: helpHost, destination: "https://www.mobappcreator.com/help/getting-started/designing-your-app/", permanent: true },
  { source: "/:lang(en|es)/articles/:article(4201325-.*)", has: helpHost, destination: "https://www.mobappcreator.com/help/getting-started/introduction-to-screens/", permanent: true },
  { source: "/:lang(en|es)/articles/:article(4342238-.*)", has: helpHost, destination: "https://www.mobappcreator.com/help/getting-started/app-launch-icon/", permanent: true },
  { source: "/:lang(en|es)/articles/:article(91224-.*)", has: helpHost, destination: "https://www.mobappcreator.com/help/getting-started/naming-your-app/", permanent: true },
  { source: "/:lang(en|es)/articles/:article(4343397-.*)", has: helpHost, destination: "https://www.mobappcreator.com/help/getting-started/updating-your-app/", permanent: true },
  { source: "/:lang(en|es)/articles/:article(91524-.*)", has: helpHost, destination: "https://www.mobappcreator.com/help/getting-started/facebook-page/", permanent: true },
  { source: "/:lang(en|es)/articles/:article(4176914-.*)", has: helpHost, destination: "https://www.mobappcreator.com/help/publishing/publishing-guide/", permanent: true },
  { source: "/:lang(en|es)/articles/:article(4174054-.*)", has: helpHost, destination: "https://www.mobappcreator.com/help/publishing/store-guidelines/", permanent: true },
  { source: "/:lang(en|es)/articles/:article(4174099-.*)", has: helpHost, destination: "https://www.mobappcreator.com/help/publishing/after-launch/", permanent: true },
  { source: "/:lang(en|es)/articles/:article(91120-.*)", has: helpHost, destination: "https://www.mobappcreator.com/help/publishing/selling-your-app/", permanent: true },
  { source: "/:lang(en|es)/articles/:article(91130-.*)", has: helpHost, destination: "https://www.mobappcreator.com/help/publishing/why-publish-on-the-stores/", permanent: true },
  { source: "/:lang(en|es)/articles/:article(4174070-.*)", has: helpHost, destination: "https://www.mobappcreator.com/help/apple/create-apple-developer-account/", permanent: true },
  { source: "/:lang(en|es)/articles/:article(4174073-.*)", has: helpHost, destination: "https://www.mobappcreator.com/help/apple/two-factor-authentication/", permanent: true },
  { source: "/:lang(en|es)/articles/:article(4209307-.*)", has: helpHost, destination: "https://www.mobappcreator.com/help/apple/give-mobappcreator-access/", permanent: true },
  { source: "/:lang(en|es)/articles/:article(4174093-.*)", has: helpHost, destination: "https://www.mobappcreator.com/help/apple/enterprise-developer-account/", permanent: true },
  { source: "/:lang(en|es)/articles/:article(4363060-.*)", has: helpHost, destination: "https://www.mobappcreator.com/help/apple/apple-rejection-reasons/", permanent: true },
  { source: "/:lang(en|es)/articles/:article(92690-.*)", has: helpHost, destination: "https://www.mobappcreator.com/help/apple/apple-review-time/", permanent: true },
  { source: "/:lang(en|es)/articles/:article(4174041-.*)", has: helpHost, destination: "https://www.mobappcreator.com/help/google/create-google-play-developer-account/", permanent: true },
  { source: "/:lang(en|es)/articles/:article(4174025-.*)", has: helpHost, destination: "https://www.mobappcreator.com/help/google/link-google-play-account/", permanent: true },
  { source: "/:lang(en|es)/articles/:article(4174049-.*)", has: helpHost, destination: "https://www.mobappcreator.com/help/google/find-google-play-account-name/", permanent: true },
  { source: "/:lang(en|es)/articles/:article(92807-.*)", has: helpHost, destination: "https://www.mobappcreator.com/help/google/google-review-time/", permanent: true },
  { source: "/:lang(en|es)/articles/:article(4191148-.*)", has: helpHost, destination: "https://www.mobappcreator.com/help/engagement/push-notifications/", permanent: true },
  { source: "/:lang(en|es)/articles/:article(4651289-.*)", has: helpHost, destination: "https://www.mobappcreator.com/help/ecommerce/payment-gateways/", permanent: true },
  { source: "/:lang(en|es)/articles/:article(4651325-.*)", has: helpHost, destination: "https://www.mobappcreator.com/help/ecommerce/configure-payment-gateway/", permanent: true },
  { source: "/:lang(en|es)/articles/:article(91672-.*)", has: helpHost, destination: "https://www.mobappcreator.com/help/pro-tips/allow-registration/", permanent: true },
  { source: "/:lang(en|es)/articles/:article(4245936-.*)", has: helpHost, destination: "https://www.mobappcreator.com/help/pro-tips/sign-in-methods/", permanent: true },
  { source: "/:lang(en|es)/articles/:article(4231361-.*)", has: helpHost, destination: "https://www.mobappcreator.com/help/pro-tips/display-news-articles/", permanent: true },
  { source: "/:lang(en|es)/articles/:article(4267581-.*)", has: helpHost, destination: "https://www.mobappcreator.com/help/pro-tips/admob-monetization/", permanent: true },
  { source: "/:lang(en|es)/articles/:article(4291950-.*)", has: helpHost, destination: "https://www.mobappcreator.com/help/pro-tips/custom-article-elements/", permanent: true },
  { source: "/:lang(en|es)/articles/:article(4303346-.*)", has: helpHost, destination: "https://www.mobappcreator.com/help/pro-tips/article-categories/", permanent: true },
  { source: "/:lang(en|es)/articles/:article(4303368-.*)", has: helpHost, destination: "https://www.mobappcreator.com/help/pro-tips/arrange-screens/", permanent: true },
  { source: "/:lang(en|es)/articles/:article(4303409-.*)", has: helpHost, destination: "https://www.mobappcreator.com/help/pro-tips/create-submenu/", permanent: true },
  { source: "/:lang(en|es)/articles/:article(5577757-.*)", has: helpHost, destination: "https://www.mobappcreator.com/help/developers/api/", permanent: true },
  // Anything else on the old help center goes to the new Help Center home.
  { source: "/:path*", has: helpHost, destination: "https://www.mobappcreator.com/help/", permanent: true },

  // Old site: language folders, blog and .html pages.
  { source: "/:lang(en|es)", destination: "/", permanent: true },
  { source: "/:lang(en|es)/:path*", destination: "/", permanent: true },
  { source: "/blog", destination: "/", permanent: true },
  { source: "/blog/:path*", destination: "/", permanent: true },
  { source: "/terms.html", destination: "/legal/terms/", permanent: true },
  { source: "/privacy.html", destination: "/legal/privacy/", permanent: true },
  { source: "/:page(index|home).html", destination: "/", permanent: true },
  { source: "/:page(pricing|prices|plans).html", destination: "/pricing/", permanent: true },
  { source: "/:page(features).html", destination: "/features/", permanent: true },
  { source: "/:page(contact|contact-us).html", destination: "/contact/", permanent: true },
  { source: "/:page(about|about-us).html", destination: "/about/", permanent: true },
  { source: "/:page(agency|agencies|reseller|white-label).html", destination: "/pricing/?plan=agency", permanent: true },
];
