// Search-result descriptions (120–160 characters) for the Help Center.
// The shorter `description` in help.ts is still used on the page itself.

export const categoryMeta: Record<string, { title: string; description: string }> = {
  "getting-started": {
    title: "Getting Started with MobAppCreator",
    description:
      "New to MobAppCreator? Learn your way around the App Dashboard, add screens, design your app, set your launch icon and name, and preview it on your phone.",
  },
  publishing: {
    title: "Publishing Your App on the App Store and Google Play",
    description:
      "Everything you need to publish your app on the Apple App Store and Google Play: developer accounts, store guidelines, review times, pricing and launch tips.",
  },
  apple: {
    title: "Apple App Store Guides",
    description:
      "Create your Apple Developer account, set up two-factor authentication, give MobAppCreator access, avoid common App Store rejections and plan for review times.",
  },
  google: {
    title: "Google Play Guides",
    description:
      "Create a Google Play developer account, invite the MobAppCreator publishing team, find your developer name and URL, and know how long Google’s review takes.",
  },
  engagement: {
    title: "Push Notifications Guides",
    description:
      "Learn how to send push notifications from your MobAppCreator app to all users or groups, schedule them, add action buttons and write messages people open.",
  },
  ecommerce: {
    title: "eCommerce and Payment Gateways",
    description:
      "Sell from your mobile app: compare Stripe, PayPal, Mercado Pago and offline payments, and connect your payment gateway to your MobAppCreator shop.",
  },
  "pro-tips": {
    title: "Pro Tips for Your MobAppCreator App",
    description:
      "Get more from MobAppCreator: user registration and sign-in methods, AdMob ads, article elements and categories, submenus and arranging your app’s screens.",
  },
  developers: {
    title: "Developers: MobAppCreator API",
    description:
      "Use the MobAppCreator REST API with bearer token authentication to list and create app items, manage users and send push notifications from your own systems.",
  },
};

export const articleMeta: Record<string, string> = {
  "first-steps":
    "Get started with MobAppCreator: learn the App Dashboard’s side menu, main navigation and emulator, screen vs. platform features, and how to preview your app.",
  "designing-your-app":
    "Design your mobile app in MobAppCreator: set colors, typography and margins, customize the navigation menu and icons, and use messaging and analytics.",
  "introduction-to-screens":
    "A guide to MobAppCreator screens: content, forms, eCommerce, social, media and action screens, and how to choose the right ones to get your app approved.",
  "app-launch-icon":
    "App icon requirements for Google Play (512×512 px) and the Apple App Store (1024×1024 px), no transparency, and how to upload your launch icon in MobAppCreator.",
  "naming-your-app":
    "How to name your mobile app: App Store and Google Play character limits, the short name shown under the icon, and the longer name used in store listings.",
  "updating-your-app":
    "Update your MobAppCreator app in real time without resubmitting to the stores. Learn which changes go live instantly and which need a new store version.",
  "facebook-page":
    "Connect a public Facebook page to your MobAppCreator app using the page username or numeric page ID, and what to check if the content doesn’t appear.",
  "publishing-guide":
    "Checklist to publish your app on the Apple App Store and Google Play: developer accounts, account types, giving us access, publishing info and review times.",
  "store-guidelines":
    "Tips to get your app approved by Apple and Google: safety, performance, business, design and legal guidelines, plus advice on web views, login and descriptions.",
  "after-launch":
    "Your app is live. Now what? Four post-launch practices for success: revisit your launch checklist, promote your app, plan for maintenance and analyze usage.",
  "selling-your-app":
    "Should you charge for your app? When paid apps work, freemium options, and how to set a price on Google Play and the Apple App Store, step by step.",
  "why-publish-on-the-stores":
    "Choosing between the Apple App Store and Google Play: compare costs, monetization, review times and audiences to decide where to publish your app first.",
  "create-apple-developer-account":
    "Step-by-step guide to enrolling in the Apple Developer Program: Apple ID, individual vs. organization accounts, D-U-N-S number and the USD 99 yearly fee.",
  "two-factor-authentication":
    "Turn on two-factor authentication for your Apple Developer account on iPhone, iPad or Mac, and set up a trusted phone number to receive verification codes.",
  "give-mobappcreator-access":
    "Give the MobAppCreator publishing team admin access to your Apple Developer account in App Store Connect so we can submit your app to the App Store for you.",
  "enterprise-developer-account":
    "Requirements and steps to enroll in the Apple Developer Enterprise Program, used to distribute internal apps privately to your company’s own employees.",
  "apple-rejection-reasons":
    "The 10 most common reasons Apple rejects apps, from poor performance and web-wrapper apps to privacy, payments and incomplete info, and how to avoid them.",
  "apple-review-time":
    "How long Apple takes to review and approve a new app on the App Store, how you’ll be notified, and what to do if your app is rejected.",
  "create-google-play-developer-account":
    "Step-by-step guide to opening a Google Play developer account: sign-up, the one-time USD 25 fee, account details and what to do before publishing your app.",
  "link-google-play-account":
    "Invite the MobAppCreator publishing team to your Google Play Console as an admin, so we can publish your Android app and its updates on your behalf.",
  "find-google-play-account-name":
    "Find your Google Play developer account name and developer URL in the Play Console, and add them to your MobAppCreator publishing information.",
  "google-review-time":
    "How long Google takes to review and approve a new app on Google Play, why new developer accounts can take longer, and where to check your app’s status.",
  "push-notifications":
    "Send push notifications from your MobAppCreator app: choose an audience or group, write the title and message, add an action button and schedule delivery.",
  "payment-gateways":
    "What payment gateways are and why they matter for your shopping app. Compare Stripe, PayPal, Mercado Pago and offline payments in MobAppCreator.",
  "configure-payment-gateway":
    "Connect Stripe, PayPal, Mercado Pago or offline bank transfer payments to your MobAppCreator eCommerce shop app, with the keys you need for each one.",
  "allow-registration":
    "Let users register and sign in to your MobAppCreator app, and choose which screens require sign-in, without blocking content the app stores expect to be open.",
  "sign-in-methods":
    "Offer email and password, Facebook, Google, LinkedIn or Sign in with Apple in your MobAppCreator app, and turn each sign-in method on or off.",
  "display-news-articles":
    "Change how news articles are displayed in your MobAppCreator app using cell styles and columns, from simple lists to large image cards and grids.",
  "admob-monetization":
    "Monetize your MobAppCreator app with Google AdMob banner ads: create your AdMob account, app and ad units, then add your App ID and ad unit ID.",
  "custom-article-elements":
    "Extend articles in your MobAppCreator app with labels, rich text, events, galleries, YouTube videos, maps, MP3 audio, tags and click-to-call actions.",
  "article-categories":
    "Organize your MobAppCreator app’s articles with categories, so users can filter content from the top bar. Add, assign and activate categories in minutes.",
  "arrange-screens":
    "Change the order of screens in your MobAppCreator app by dragging them in the Main navigation tree. Your app updates to match instantly.",
  "create-submenu":
    "Group related screens in a submenu in your MobAppCreator app: add the Submenu component, name it, move screens into it and customize how it looks.",
  api: "MobAppCreator API reference: bearer token authentication, list, create and update app items, manage users and send push notifications with curl examples.",
};
