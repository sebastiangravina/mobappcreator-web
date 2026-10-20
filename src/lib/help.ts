// Help Center content, recreated from the MobAppCreator Intercom help center
// (34 published articles, October 2026). Drafts were not imported.
//
// Inline formatting inside any text: **bold**, `code`, [label](url).
// Links to other help articles use their path, e.g. /help/apple/create-apple-developer-account/

import type { Name as IconName } from "@/components/Icon";

export type Block =
  | { p: string }
  | { h: string }
  | { ul: string[] }
  | { ol: string[] }
  | { steps: { title: string; body?: string }[] }
  | { note: string; tone?: "info" | "warning" }
  | { code: string };

export type HelpArticle = {
  slug: string;
  category: string; // category slug
  title: string;
  description: string;
  updated: string; // ISO date of the last Intercom update
  intercomId: string;
  body: Block[];
};

export type HelpCategory = {
  slug: string;
  title: string;
  description: string;
  icon: IconName;
  color: string;
};

export const helpCategories: HelpCategory[] = [
  {
    slug: "getting-started",
    title: "Getting started",
    description: "Find your way around the App Dashboard and build your first app.",
    icon: "wand",
    color: "var(--sky)",
  },
  {
    slug: "publishing",
    title: "Publishing basics",
    description: "Everything you need to get your app on the App Store and Google Play.",
    icon: "rocket",
    color: "var(--magenta)",
  },
  {
    slug: "apple",
    title: "Apple App Store",
    description: "Developer accounts, two-factor authentication and Apple’s review.",
    icon: "phone",
    color: "var(--fg)",
  },
  {
    slug: "google",
    title: "Google Play",
    description: "Set up your Google Play developer account and link it to us.",
    icon: "android",
    color: "var(--lime)",
  },
  {
    slug: "engagement",
    title: "Push notifications",
    description: "Reach your users instantly and keep them coming back.",
    icon: "bell",
    color: "var(--orange)",
  },
  {
    slug: "ecommerce",
    title: "eCommerce",
    description: "Payment gateways and checkout for your shopping app.",
    icon: "cart",
    color: "var(--magenta)",
  },
  {
    slug: "pro-tips",
    title: "Pro tips",
    description: "Get more out of screens, articles, sign-in and monetization.",
    icon: "bolt",
    color: "var(--sky)",
  },
  {
    slug: "developers",
    title: "Developers",
    description: "Use the MobAppCreator API to manage content, users and notifications.",
    icon: "code",
    color: "var(--orange)",
  },
];

export const helpArticles: HelpArticle[] = [
  // ───────────────────────── Getting started ─────────────────────────
  {
    slug: "first-steps",
    category: "getting-started",
    title: "First steps with MobAppCreator",
    description: "Get to know the App Dashboard and how MobAppCreator works.",
    updated: "2022-04-06",
    intercomId: "4191132",
    body: [
      { h: "Welcome to MobAppCreator" },
      {
        p: "MobAppCreator powers thousands of mobile apps for small businesses and large companies. This series of articles takes you through the fundamentals: how to build your app, how to publish it, and how to keep your audience engaged once it’s live.",
      },
      { h: "What is MobAppCreator?" },
      {
        p: "MobAppCreator is an app building platform that lets you put together a polished app in minutes, while still giving you the power to build complex apps. Features most apps need from day one, such as [push notifications](/help/engagement/push-notifications/), user login, media and support for both iOS and Android, are already built in.",
      },
      { h: "The App Dashboard" },
      { p: "The App Dashboard is where you manage all of your app’s content and features. It has three main parts:" },
      {
        ul: [
          "**Side menu**, on the left. This is how you reach the platform’s core features.",
          "**Main navigation**, next to the side menu. This holds your app’s screens and functions, and gives you access to the screen library.",
          "**Emulator**, on the right. It shows a live preview of your app as you change its content and design.",
        ],
      },
      {
        p: "When you created your account you started with a blank app, a template, or an app designed by our Pro Services team. Templates are a starting point: swap in your own content and your app is ready to launch. To start another app, open **My Applications** at the top of the dashboard and click **Create New App**.",
      },
      {
        note: "Want our Pro Services team to design your app or build custom features? Write to [info@mobappcreator.com](mailto:info@mobappcreator.com).",
      },
      { h: "Screen features and platform features" },
      { p: "You’ll see two kinds of features mentioned in these guides." },
      { p: "**Screen features** are added to your app and reached from its main navigation menu, for example:" },
      { ul: ["Content screens", "Social media screens", "Form builder screens", "Media streaming screens"] },
      { p: "**Platform features** are built into the system as a whole, for example:" },
      { ul: ["Design components", "Order management", "Push notifications", "User management", "Statistics"] },
      { note: "Some advanced features are only available on specific plans." },
      {
        p: "To add a screen or edit an existing one, click the **(+)** button in your app’s Main navigation. This opens the full list of screens available for your app.",
      },
      { h: "Preview your app on your phone" },
      {
        p: "The emulator updates in real time, but nothing beats trying your app on a real device. Install the MobAppCreator preview app from the App Store or Google Play, then sign in with your email address and your app code. You’ll find the app code in **My Applications**.",
      },
      {
        p: "Next, learn about the [core components of the App Dashboard](/help/getting-started/designing-your-app/).",
      },
    ],
  },
  {
    slug: "designing-your-app",
    category: "getting-started",
    title: "Designing your app",
    description: "The App Dashboard’s core components for building and styling your app.",
    updated: "2022-04-06",
    intercomId: "4192245",
    body: [
      {
        p: "In the [first lesson](/help/getting-started/first-steps/) you learned what MobAppCreator is, how the App Dashboard is laid out and how to preview your app. Now let’s look at the components you’ll use to build and manage it.",
      },
      { h: "Style" },
      { p: "The Style section is where you control the design of your app." },
      { p: "**Basic and Typography** sets the overall branding of your app. Here you can:" },
      {
        ul: [
          "Change your app’s background color",
          "Change the typography of each element",
          "Change the overall design of list cells",
          "Change your app’s margins",
          "Change the colors and fonts used across your app",
        ],
      },
      { p: "**Main navigation menu** controls your app’s menu. Here you can:" },
      {
        ul: [
          "Choose the menu style",
          "Adjust how the menu is displayed",
          "Add your logo, a background and more to the menu",
          "Choose icons from our library or upload your own",
        ],
      },
      { h: "Messaging" },
      { p: "This is where you interact with your customers:" },
      {
        ul: [
          "**Outbox** is where you send push notifications.",
          "**Orders** holds your customers’ orders if you use eCommerce.",
          "**Users** lists your registered users.",
        ],
      },
      { h: "Analytics" },
      {
        p: "Analytics shows your app’s key performance indicators, the information you need to plan your marketing and promotion.",
      },
    ],
  },
  {
    slug: "introduction-to-screens",
    category: "getting-started",
    title: "Introduction to screens",
    description: "A guide to choosing the right screens for your app.",
    updated: "2022-04-06",
    intercomId: "4201325",
    body: [
      { h: "What are screens?" },
      {
        p: "Screens are the parts of your app your users see and interact with. Choosing the right screens, and using them well, is key to a successful app and to approval by the app stores. Your app must provide a real service to your audience, and screens are a big part of that.",
      },
      {
        p: "To add a screen, click the **(+)** next to **Main navigation**. This opens the **Screen Library**, where screens are organized into groups.",
      },
      { h: "1. Content" },
      {
        p: "Content screens are usually the most important part of your app, because they hold the information your users came for: news articles, photos, videos, company information, maps of your locations, events and more. Content screens include:",
      },
      { ul: ["Events", "Maps", "News and RSS", "People"] },
      { h: "2. Forms" },
      {
        p: "Forms collect information from your audience and save the responses to your database. Use them for suggestions, reservations, subscriptions and much more.",
      },
      { h: "3. eCommerce" },
      {
        p: "If you sell products or services, the eCommerce screen lets you showcase and sell them. Customers add items to their cart and check out, which creates a new order in your dashboard. See [Payment gateways](/help/ecommerce/payment-gateways/) to learn more.",
      },
      { h: "4. Social" },
      {
        p: "Social screens connect your app to your existing social networks. The **Chat** screen lets your users talk to each other directly inside your app.",
      },
      { h: "5. Media" },
      {
        p: "Media is part of almost every app, from a welcome video to podcasts or a live stream. Media screens include:",
      },
      {
        ul: ["Multi radio", "Photo gallery", "Playlists", "Podcasts", "Radio streaming", "Video streaming", "YouTube integration"],
      },
      { h: "6. Actions" },
      {
        p: "Action screens connect your app to other systems or to features of the device. Add click-to-call anywhere in your app, or let users send you a text message, email or WhatsApp message. External connections can open web pages or your company’s own systems.",
      },
      {
        note: "Keep a good balance between content inside your app and links to external websites. As a rule, use no more than two or three external sites. Apps that mostly show websites are likely to be rejected by Apple, because they don’t offer an experience different from a browser.",
        tone: "warning",
      },
      { h: "7. Others" },
      { p: "Additional screens add customization and functions to your app:" },
      { ul: ["Screen Builder", "Setmore Appointments", "Submenu", "Tabs", "Settings"] },
    ],
  },
  {
    slug: "app-launch-icon",
    category: "getting-started",
    title: "Adding your app launch icon",
    description: "Icon requirements for each store and how to upload yours.",
    updated: "2022-04-06",
    intercomId: "4342238",
    body: [
      {
        p: "Your app icon sits next to every other app on your customers’ phones, so it matters. Each platform has slightly different requirements.",
      },
      { h: "Google Play" },
      {
        ul: [
          "Size: **512 × 512 pixels**",
          "Square canvas with **no transparency**",
          "Don’t round the corners yourself. The device does it automatically, so leave enough space around your image so it isn’t cut off.",
        ],
      },
      {
        p: "See Google’s [icon design specifications](https://developer.android.com/google-play/resources/icon-design-specifications) for more detail.",
      },
      { h: "Apple App Store" },
      {
        ul: [
          "Size: **1024 × 1024 pixels**",
          "Square canvas with **no transparency**",
          "Don’t round the corners yourself, and leave enough space around your image.",
        ],
      },
      { h: "Upload your icon" },
      { p: "When your icon is ready, go to **Settings → Basic Data → Launch Icons** in the App Dashboard." },
      {
        note: "Changing your launch icon after your app is live requires a new version to be submitted to the stores.",
      },
    ],
  },
  {
    slug: "naming-your-app",
    category: "getting-started",
    title: "How to name your app",
    description: "What to know when choosing a name for your app.",
    updated: "2022-04-06",
    intercomId: "91224",
    body: [
      {
        p: "Your app’s name is the first impression you make in the stores, and you have very little time to catch people’s attention. A good name is memorable and helps you get more downloads.",
      },
      { h: "Respect the store limits" },
      {
        ul: [
          "The App Store allows up to **30 characters** for an app name.",
          "Google Play allows up to **30 characters**.",
          "On the home screen, only around **12 characters** fit under the icon.",
        ],
      },
      { h: "Short name and store name" },
      {
        p: "MobAppCreator lets you set two names. The **short name** appears under the icon on the phone’s home screen, so keep it to about 12 characters, like “My Great App”.",
      },
      {
        p: "When you set your app up for publishing, you can add a **longer name** for the store listing. This is the name people see when they search for your app.",
      },
    ],
  },
  {
    slug: "updating-your-app",
    category: "getting-started",
    title: "How to update your app",
    description: "Changes go live in real time, without a new store submission.",
    updated: "2022-04-06",
    intercomId: "4343397",
    body: [
      {
        p: "Updating an app is usually slow and expensive. MobAppCreator solves this with **always-up-to-date** technology: changes you make to your app sync to every installed copy in real time, with no need to upload a new version to the stores.",
      },
      { h: "What can I change in real time?" },
      {
        p: "Once the store approves your app, you can add articles, edit content, add features, and change colors, menu style, fonts and images. Everything is applied the moment you click save.",
      },
      { h: "What needs a new version?" },
      { p: "Only two things require a new version to be submitted to the stores:" },
      { ul: ["Your [app launch icon](/help/getting-started/app-launch-icon/)", "Your app name"] },
    ],
  },
  {
    slug: "facebook-page",
    category: "getting-started",
    title: "Connecting your Facebook page",
    description: "Show the content of a Facebook page inside your app.",
    updated: "2022-04-06",
    intercomId: "91524",
    body: [
      {
        p: "The Facebook screen displays the content of a Facebook page inside your app.",
      },
      {
        note: "This works with a Facebook **page**, not a personal profile. People like a page, but become friends with a profile.",
      },
      {
        p: "Your page can’t have any restrictions (such as age or country) and must be visible to everyone, so the platform can read its content.",
      },
      { h: "Connect your page" },
      {
        p: "Enter the page’s username. You’ll find it in the page’s address: for facebook.com/**mobappcreator**, the username is `mobappcreator`.",
      },
      {
        p: "If your page has no username, or the username has special characters, use the page’s numeric ID instead. It’s also in the address, at the end: facebook.com/pages/Example/**130322493652366**.",
      },
    ],
  },

  // ───────────────────────── Publishing ─────────────────────────
  {
    slug: "publishing-guide",
    category: "publishing",
    title: "Guide to publishing your app on the App Store and Google Play",
    description: "An overview of everything you need to do to get your app published.",
    updated: "2022-11-03",
    intercomId: "4176914",
    body: [
      {
        p: "You’ve built your app and you’re ready to publish. Use this article as a checklist, so our team has everything it needs to submit your app to Apple and Google.",
      },
      { h: "1. Enroll in the Apple Developer Program" },
      {
        p: "Apple requires every app to live in its own developer account. Enrollment costs **USD 99 per year**. Follow our [step-by-step guide](/help/apple/create-apple-developer-account/) to enroll.",
      },
      { p: "Choose the right account type:" },
      {
        ul: [
          "**Individual**: one login, and your first and last name appear as the developer on the App Store. Choose this only if the app is branded to you as a person.",
          "**Company / Organization**: multiple logins with different permissions, and your company’s name appears on the App Store. Choose this if the app is for your business or organization.",
        ],
      },
      {
        p: "Picking the right type is vital for approval. If a well-known person builds an app about themselves, they can enroll as an individual. If they build it for their company or charity, they must enroll as that company or organization.",
      },
      {
        p: "Non-profits, government and accredited educational institutions may be able to [waive the enrollment fee](https://developer.apple.com/support/membership-fee-waiver/). You’ll need to enroll as a Company / Organization.",
      },
      {
        note: "Building an app for internal use only? You need an [Apple Enterprise developer account](/help/apple/enterprise-developer-account/) instead.",
        tone: "warning",
      },
      {
        p: "Apple also requires [two-factor authentication](/help/apple/two-factor-authentication/) on every developer account. When you send your app to our publishing team, we’ll arrange a call with you to get the verification code, unless you’ve [added us as an admin](/help/apple/give-mobappcreator-access/).",
      },
      { h: "2. Enroll in the Google Play developer program" },
      {
        p: "To be on Google Play you also need a Google developer account. It’s a **one-time fee of USD 25**, and there’s a single account type for both public and internal apps. See [How to create a Google Play developer account](/help/google/create-google-play-developer-account/).",
      },
      { h: "3. Add us to your Google Play account" },
      {
        p: "So our publishing team can submit your app, invite us to your Google Play Console. Follow [How to link MobAppCreator to your Google Play account](/help/google/link-google-play-account/).",
      },
      { h: "4. Fill in your publishing information" },
      {
        p: "In the App Dashboard, go to **Settings → Publishing Info** and complete the information for each store. Then click **Publish** to send your app to our publishing team.",
      },
      { h: "5. Allow time for review" },
      {
        p: "Our team usually needs one or two business days to prepare your app for submission. After that, it goes through each store’s review. Google typically takes a few days; Apple can take anywhere from a couple of days to a couple of weeks, depending on their workload. Plan ahead if you need your app live by a certain date.",
      },
      { h: "6. Watch for emails from Apple and Google" },
      {
        p: "Apple and Google send updates to the email address you used for your developer accounts: when your app is in review, approved or rejected. If your app is rejected, forward the full message to [info@mobappcreator.com](mailto:info@mobappcreator.com) and we’ll help you resolve it.",
      },
    ],
  },
  {
    slug: "store-guidelines",
    category: "publishing",
    title: "Store guidelines you should know before publishing",
    description: "Tips and best practices to get approved by Apple and Google.",
    updated: "2022-04-06",
    intercomId: "4174054",
    body: [
      {
        p: "Apple and Google review every app against strict guidelines. These tips improve your chances of approval. They don’t replace the official rules, which we strongly recommend reading in full:",
      },
      {
        ul: [
          "[Apple App Store Review Guidelines](https://developer.apple.com/app-store/review/guidelines/)",
          "[Google Play Developer Policy](https://play.google.com/about/developer-content-policy/)",
        ],
      },
      { h: "1. Safety" },
      {
        p: "People need to feel safe installing your app: no offensive content, nothing that could harm their device or them. Make sure your support URL gives an easy way to contact you. Missing or outdated contact details frustrate users and can break the law in some countries.",
      },
      { h: "2. Performance" },
      {
        p: "Submit a finished app. Remove placeholder text, empty pages and temporary content, and test the app on a real device. If your app requires login, create a demo account so the reviewers can test it.",
      },
      { h: "3. Business" },
      {
        p: "If your app is for your business, enroll in Apple’s program as a **Company / Organization**. Business apps submitted from individual accounts are very likely to be rejected.",
      },
      { h: "4. Design" },
      {
        p: "Users value apps that are simple, refined and easy to navigate. Keep your app well organized, and keep it fresh after launch: apps that offer a degraded experience can be removed from the stores.",
      },
      { h: "5. Legal" },
      {
        p: "Only use content you created or have a license to use. Apps that use copyrighted content without permission can be rejected or removed.",
      },
      { h: "Feature tips" },
      {
        p: "**Home page.** Apple doesn’t allow apps that force people to log in before seeing any content. Require login only for account-specific features, such as checkout or chat.",
      },
      {
        p: "**Web views.** Use no more than two or three web view screens. More than that and Apple may decide your app isn’t meaningfully different from using Safari. If you link to a donations page, set the web view to open in the **device’s default external browser**.",
      },
      {
        p: "**Chat.** Add at least one post before you submit, so reviewers can see what the feature is for.",
      },
      { h: "Publishing information tips" },
      { p: "**Store description.** Focus on three questions:" },
      {
        ol: ["Who is the app for?", "What is its main purpose?", "Which features help it achieve that purpose?"],
      },
      {
        p: "Avoid “about us” text. Apple and Google don’t allow apps whose main purpose is to advertise a company, so a description that only talks about your business may be rejected.",
      },
      {
        p: "**Support URL.** This must be a working website address, not an email address. It’s shown on the store and should include your contact details.",
      },
    ],
  },
  {
    slug: "after-launch",
    category: "publishing",
    title: "My app is published. What’s next?",
    description: "Post-launch practices for initial and ongoing success.",
    updated: "2022-04-06",
    intercomId: "4174099",
    body: [
      {
        p: "Many business owners don’t realize that the work continues after an app is launched. These four practices help your app succeed, at launch and over time.",
      },
      { h: "1. Revisit your launch checklist" },
      {
        p: "Both [Apple](https://developer.apple.com/app-store/review/guidelines/) and [Google](https://developer.android.com/distribute/best-practices/launch/launch-checklist) publish detailed requirements. Beyond a fully working app, check:",
      },
      {
        ul: [
          "**Countries.** Is your app useful worldwide or only in certain countries? Consider publishing only where your market is.",
          "**Content rating.** If any content is for mature audiences, set the right rating in your **Publishing Information**.",
          "**Local laws.** You’re responsible for making sure your app complies with the laws of every country where it’s available.",
        ],
      },
      { h: "2. Promote your app" },
      {
        p: "**Make your landing page clear.** Once the app is live, update your website to say so, with App Store and Google Play badges linking to it.",
      },
      {
        p: "**Use traditional marketing.** Mention your app in print ads, catalogs, brochures and even your email signature.",
      },
      {
        p: "**Use social media, but don’t rely on it.** Organic posts reach only a small share of your followers and disappear from feeds quickly, so combine social with other channels.",
      },
      {
        p: "**Keep promoting after launch.** Write about your app on your blog, keep the store badges visible on your website and mention it regularly on social media. Adding new content and features gives you a steady reason to promote it.",
      },
      { h: "3. Plan for maintenance" },
      {
        p: "We maintain the platform behind the scenes, but sometimes your app needs to be resubmitted to stay up to date. Plan for:",
      },
      { ul: ["Major operating system updates (Apple and Google release one each year)", "Feature requests from your users", "Bug fixes"] },
      {
        p: "Your users use the app more than you do, so make it easy for them to report bugs and suggest features.",
      },
      { h: "4. Analyze" },
      {
        p: "App statistics show more than popularity. They tell you about your audience, which guides how you improve your app.",
      },
      {
        p: "**Promote, maintain, analyze, repeat.** None of these are one-off tasks. Neglect one, and you may have to start your mobile strategy over.",
      },
    ],
  },
  {
    slug: "selling-your-app",
    category: "publishing",
    title: "How to sell your app",
    description: "When to charge for your app, and how to set a price on each store.",
    updated: "2022-04-06",
    intercomId: "91120",
    body: [
      {
        p: "There are a few ways to earn money directly with apps: [building apps for clients](/pricing/?plan=agency), [advertising](/help/pro-tips/admob-monetization/), and selling the app itself in the stores. This article covers the last one.",
      },
      { h: "When can I charge for my app?" },
      {
        p: "Apps can be profitable for a business even when they’re free. Consider charging when your app offers something people want and can’t easily get for free elsewhere. Paid apps tend to work when:",
      },
      {
        ul: [
          "You have a loyal, existing audience, such as a specialized magazine, trade journal or popular blog.",
          "Your content meets a specific need that isn’t covered yet and can’t easily be replaced, such as exam preparation.",
        ],
      },
      { h: "Consider other pricing models" },
      {
        p: "Many apps are **freemium**: free to download, with a paid version that adds content or features, or removes ads. Charging for your app will significantly reduce downloads, so look at what similar apps charge before you decide.",
      },
      { h: "Selling on Google Play" },
      {
        p: "A developer account lets you publish free apps. To sell apps, you also need to set up a **payments profile** (merchant account) in your Google Play Console. You can then set a price in your local currency and let Google convert it, or set prices individually for some countries.",
      },
      {
        note: "Once an app is published for free on Google Play, you can never charge for that same app.",
        tone: "warning",
      },
      { h: "Selling on the App Store" },
      {
        p: "In App Store Connect, go to **Agreements, Tax, and Banking**, accept the **Paid Apps** agreement and add your bank and tax details so Apple can pay you. Then select your app and set its price under **Pricing and Availability**. Apple uses preset price points, which it converts automatically for each country’s currency.",
      },
      { h: "The bottom line" },
      {
        p: "The app stores make it easy to sell a product worldwide with very low upfront costs. Before charging, think carefully about who your app is for and what it does for them.",
      },
    ],
  },
  {
    slug: "why-publish-on-the-stores",
    category: "publishing",
    title: "Publishing on Apple, Google Play, or both?",
    description: "How to choose a store if you can’t publish on both.",
    updated: "2022-04-06",
    intercomId: "91130",
    body: [
      {
        p: "Your MobAppCreator subscription includes both iOS and Android versions of your app. Still, budget, timing, goals or your audience may mean you need to choose one store first. Here are the main differences.",
      },
      { h: "Budget" },
      {
        p: "Both stores require a developer account. Apple charges **USD 99 per year**; Google charges a **one-time USD 25**. If your budget is tight, Google Play is the cheaper place to start.",
      },
      { h: "Monetization" },
      {
        p: "iPhone users have historically been more likely to pay for apps and to click on ads, so an iOS app can more easily recover its higher cost if you plan to monetize.",
      },
      {
        p: "Pricing flexibility also differs. On the App Store you can switch an app between free and paid later. On Google Play, a free app can never become paid; you’d have to publish a new app and rebuild your user base.",
      },
      { h: "Time" },
      {
        p: "Publishing on Google Play is usually faster and simpler. Apple reviews every app by hand, which can take longer and may end in a rejection you need to fix. Some updates also need a new review. If you need to be live quickly, start with Android, but the App Store is well worth the extra effort.",
      },
      { h: "Audience" },
      {
        p: "Apple is strongest in the US and Western Europe, where users tend to spend more. Android reaches more people overall and dominates in much of Latin America, Asia and Africa. Research where your customers are and which devices they use, and match your efforts to them.",
      },
    ],
  },

  // ───────────────────────── Apple ─────────────────────────
  {
    slug: "create-apple-developer-account",
    category: "apple",
    title: "How to create an Apple Developer account",
    description: "Step-by-step enrollment in the Apple Developer Program.",
    updated: "2022-04-06",
    intercomId: "4174070",
    body: [
      {
        p: "The Apple Developer Program lets you publish your app on the App Store. Apple requires every app to be published from its own developer account. The upside: the app lives in your account, so you keep control of it and your business’s name appears on the listing.",
      },
      {
        note: "If your app is for internal use only, you need an [Apple Enterprise developer account](/help/apple/enterprise-developer-account/). If you have several apps with us, each one needs its own developer account.",
      },
      {
        steps: [
          {
            title: "Create or sign in with your Apple ID",
            body: "Go to [developer.apple.com](https://developer.apple.com/) and click **Account**. If you don’t have an Apple ID, choose **Create yours now**. Then turn on [two-factor authentication](/help/apple/two-factor-authentication/), which Apple requires. Doing this now makes the rest of enrollment smoother.",
          },
          {
            title: "Join the Apple Developer Program",
            body: "Once signed in, click **Join the Apple Developer Program**, then **Enroll**. Read about the two account types and click **Start your enrollment**.",
          },
          {
            title: "Confirm your details and choose an account type",
            body: "Check your email, name and country, then choose **Individual** or **Company / Organization**. If the app is branded to your business, enroll as a company. You’ll need a D-U-N-S number: [check if your company has one](https://developer.apple.com/enroll/duns-lookup/). Getting one is free and can take a couple of weeks.",
          },
          {
            title: "Enter your contact information",
            body: "Fill in your contact details, read the Apple Developer Program License Agreement, tick the box and click **Continue**.",
          },
          { title: "Verify your information", body: "Review your account details and click **Continue**." },
          {
            title: "Choose automatic renewal",
            body: "Apple shows the fee and membership length. Turn on automatic renewal if you don’t want to renew manually each year (you can turn it off later), then click **Purchase**.",
          },
          { title: "Sign in with your Apple ID", body: "Sign in again on the payment page." },
          { title: "Pay the enrollment fee", body: "Enter your billing information and complete the payment." },
          {
            title: "Complete the remaining screens",
            body: "Apple usually emails you within 24 hours to confirm your developer account is active.",
          },
          {
            title: "Add your Apple details in the App Dashboard",
            body: "Go to **Settings → Apple App Store Data** and fill in the Apple-specific information for your app.",
          },
        ],
      },
      { h: "Give us access" },
      {
        p: "To publish on your behalf, we need access to your developer account. Follow [How to give MobAppCreator access to your Apple Developer account](/help/apple/give-mobappcreator-access/).",
      },
      { h: "Tips" },
      {
        p: "**You may not have to pay.** Non-profits, accredited educational institutions and government entities that only distribute free apps can [request a fee waiver](https://developer.apple.com/support/membership-fee-waiver/). You’ll need a D-U-N-S number.",
      },
      {
        p: "**You can have several apps in one account**, as long as they relate directly to your business, aren’t the same in nature or purpose, and follow [Apple’s guidelines](https://developer.apple.com/app-store/review/guidelines/).",
      },
    ],
  },
  {
    slug: "two-factor-authentication",
    category: "apple",
    title: "Setting up two-factor authentication for your Apple account",
    description: "Apple requires two-factor authentication on every developer account.",
    updated: "2022-04-06",
    intercomId: "4174073",
    body: [
      { h: "What is two-factor authentication?" },
      {
        p: "Two-factor authentication adds a layer of security to your Apple ID. Signing in needs your password **and** a code sent to a trusted device or phone number, so only you can access your account even if someone knows your password.",
      },
      {
        p: "A **trusted device** is an iPhone, iPad or Mac where you’re signed in with your Apple ID; it displays a code when you sign in elsewhere. A **trusted phone number** receives codes by text message or phone call. You need at least one trusted number.",
      },
      {
        note: "Most Apple IDs created in recent years already have two-factor authentication turned on. If yours does, you’re all set.",
      },
      { h: "On iPhone or iPad" },
      {
        steps: [
          {
            title: "Open your Apple ID settings",
            body: "Go to **Settings → [your name] → Sign-In & Security** (called **Password & Security** on older versions of iOS).",
          },
          { title: "Turn it on", body: "Tap **Turn On Two-Factor Authentication**, then **Continue**." },
          {
            title: "Verify a trusted phone number",
            body: "Enter the number where you want to receive codes, choose text message or phone call, and enter the code Apple sends you.",
          },
        ],
      },
      { h: "On a Mac" },
      {
        steps: [
          {
            title: "Open your Apple ID settings",
            body: "Go to **Apple menu → System Settings → [your name] → Sign-In & Security** (on older macOS: **System Preferences → Apple ID → Password & Security**).",
          },
          { title: "Turn it on", body: "Click **Turn On Two-Factor Authentication** and follow the steps." },
        ],
      },
      {
        p: "Don’t have an Apple device? Contact Apple Support and they’ll help you set it up.",
      },
    ],
  },
  {
    slug: "give-mobappcreator-access",
    category: "apple",
    title: "How to give MobAppCreator access to your Apple Developer account",
    description: "Add our publishing team so we can submit your app.",
    updated: "2022-04-06",
    intercomId: "4209307",
    body: [
      {
        p: "Every Apple developer account requires [two-factor authentication](/help/apple/two-factor-authentication/), which can slow down submissions. Giving our publishing team access avoids delays. If you don’t have a developer account yet, first [create one](/help/apple/create-apple-developer-account/).",
      },
      { p: "How you give us access depends on your account type." },
      { h: "Individual account" },
      {
        p: "Individual accounts can’t add other users, so we need to sign in with your account. Contact our support team to schedule a time: we’ll need your sign-in details and the verification code that arrives on your phone at that moment.",
      },
      { h: "Company / Organization account" },
      {
        steps: [
          {
            title: "Open Users and Access",
            body: "Sign in to [App Store Connect](https://appstoreconnect.apple.com/login) and click **Users and Access**.",
          },
          { title: "Add a user", body: "Click the blue **+** button." },
          {
            title: "Enter our details",
            body: "First name: **Publishing**. Last name: **MobAppCreator**. Email: **mobapplabsllc@gmail.com**.",
          },
          { title: "Choose the Admin role", body: "Under **Roles**, select **Admin**." },
          {
            title: "Allow access to certificates",
            body: "If shown, tick **Access to Certificates, Identifiers & Profiles** under **Developer Resources**.",
          },
          {
            title: "Send the invitation",
            body: "Click **Invite**. Once we accept, we can submit your app without needing a verification code from you.",
          },
        ],
      },
    ],
  },
  {
    slug: "enterprise-developer-account",
    category: "apple",
    title: "Creating an Apple Enterprise developer account",
    description: "What you need to distribute internal apps privately to your employees.",
    updated: "2022-04-06",
    intercomId: "4174093",
    body: [
      { p: "Before you enroll in Apple’s Enterprise program, make sure you meet these requirements:" },
      {
        ol: [
          "The program is **only** for apps used by your own employees. These apps can never be distributed to the public or your customers.",
          "Your company must be a legal entity. Apple doesn’t accept DBAs, fictitious businesses, trade names or branches.",
          "Your company needs a D-U-N-S number so Apple can verify it. [Check if you already have one](https://developer.apple.com/enroll/duns-lookup/).",
          "You must be the owner or founder, an executive, a senior project lead, or have legal authority granted by a senior employee.",
          "If you already use an Apple ID for the standard developer program, use a different Apple ID for Enterprise.",
          "After your account is activated, there is a **14-day waiting period** before we can create the files we need in your account.",
        ],
      },
      {
        steps: [
          {
            title: "Open Apple’s enrollment page",
            body: "Go to [developer.apple.com/programs/enterprise/enroll](https://developer.apple.com/programs/enterprise/enroll/).",
          },
          { title: "Start your enrollment", body: "Read **What You Need To Know** and click **Start Your Enrollment**." },
          { title: "Confirm your Apple ID", body: "Check your details, select your entity type and click **Continue**." },
          { title: "Confirm your authority", body: "Select the type of authority you have to enroll your organization." },
          { title: "Enter your organization’s details", body: "Fill in your organization’s information." },
          { title: "Submit", body: "Complete the verification and click **Continue**." },
        ],
      },
      {
        p: "Apple will contact you to verify your information and send a link to pay and finish enrolling. The Enterprise program costs **USD 299 per year**.",
      },
    ],
  },
  {
    slug: "apple-rejection-reasons",
    category: "apple",
    title: "10 reasons Apple could reject your app",
    description: "The most common causes of App Store rejection, and how to avoid them.",
    updated: "2022-04-06",
    intercomId: "4363060",
    body: [
      {
        p: "Apple reviews every app before it goes live, and many rejections come from a handful of [common issues](https://developer.apple.com/app-store/review/#common-app-rejections). Avoid these and your chances of approval go up.",
      },
      { h: "1. Poor performance" },
      { p: "However good your app looks, it must run smoothly. Confusing entry screens, choppy navigation or slow pages get apps rejected." },
      { h: "2. A website, not an app" },
      {
        p: "Apple rejects apps that feel like a website in an app wrapper (guideline 4.2, Minimum Functionality). Adding push notifications or sharing isn’t enough on its own; your app needs real native content and features.",
      },
      { h: "3. Not enough valuable content" },
      { p: "A collection of web pages with little substance doesn’t give users a reason to install your app." },
      { h: "4. Mentioning other platforms" },
      { p: "Don’t mention Android or other platforms in your iOS app or listing, and use screenshots taken on Apple devices." },
      { h: "5. Privacy" },
      {
        p: "Every app needs a privacy policy linked in App Store Connect and easy to find inside the app (guideline 5.1.1). Explain how long you keep data and let users withdraw consent.",
      },
      { h: "6. Broken links" },
      {
        p: "Submit a finished app with working links and no placeholder content (guideline 2.1). Tap through every screen and link before you submit.",
      },
      { h: "7. Payments" },
      {
        p: "Digital content and features unlocked inside the app must use Apple’s in-app purchase (guideline 3.1.1). Keep this in mind if your website already takes payments.",
      },
      { h: "8. Missing standard functionality" },
      {
        p: "Apps that look like demos, trials or just a contact form are rejected (guideline 2.2). All content must be real and final, and the app must be useful.",
      },
      { h: "9. Inaccurate description" },
      { p: "Keep your description accurate and to the point. Don’t describe the app as something it isn’t." },
      { h: "10. Incomplete information" },
      { p: "Make sure the store and review information is complete and current, including:" },
      {
        ul: [
          "Your contact details",
          "Title, description and other app details",
          "Category",
          "Any special configuration notes",
          "A demo account if part of your app requires sign-in",
        ],
      },
      {
        p: "Apple’s rules exist to keep buggy, spammy or misleading apps out of the store. Investing a little more time before you submit saves you the delay of a rejection.",
      },
    ],
  },
  {
    slug: "apple-review-time",
    category: "apple",
    title: "How long does Apple take to approve my app?",
    description: "App Store review times.",
    updated: "2022-04-06",
    intercomId: "92690",
    body: [
      {
        p: "After we submit your app, it waits for Apple’s review team. When the review is done, Apple emails you the result. This usually takes **a few days**, and occasionally longer when Apple is busy.",
      },
      {
        p: "Once approved, your app appears on the App Store, and Apple’s email includes the link to download it.",
      },
      {
        note: "If your app is rejected, send us Apple’s message at [info@mobappcreator.com](mailto:info@mobappcreator.com) and our team will work with you to resolve it.",
      },
    ],
  },

  // ───────────────────────── Google ─────────────────────────
  {
    slug: "create-google-play-developer-account",
    category: "google",
    title: "How to create a Google Play developer account",
    description: "Step-by-step guide to opening your Google Play developer account.",
    updated: "2022-04-06",
    intercomId: "4174041",
    body: [
      {
        p: "A Google Play developer account lets you publish your app on Google Play. Google requires it to be your own account, which means you keep control of the app and your business’s name appears on the listing.",
      },
      {
        steps: [
          {
            title: "Open the sign-up page",
            body: "Go to [play.google.com/apps/publish/signup](https://play.google.com/apps/publish/signup/).",
          },
          {
            title: "Check the Google account you’re using",
            body: "The email shown is linked to your developer account and receives all updates about your app. For a business app, use a business email rather than a personal one.",
          },
          {
            title: "Accept the agreement",
            body: "Read Google’s Developer Distribution Agreement, tick the box and click **Continue to payment**.",
          },
          { title: "Pay the registration fee", body: "Enter your card details to pay the **one-time USD 25** fee." },
          {
            title: "Complete your account details",
            body: "Fill in your developer name and contact details.",
          },
        ],
      },
      {
        note: "Don’t use our publishing email as your email address, or any version of our company name as your developer name.",
        tone: "warning",
      },
      {
        p: "Google can take up to 48 hours to process your payment. We can’t publish your app until it’s processed.",
      },
      {
        p: "Next, [add our publishing team to your account](/help/google/link-google-play-account/).",
      },
      {
        p: "**Tip:** the USD 25 fee is a one-time charge, and you can publish as many apps for your business as you like from the same account, as long as they follow Google’s terms. Google may change the price at any time.",
      },
    ],
  },
  {
    slug: "link-google-play-account",
    category: "google",
    title: "How to link MobAppCreator to your Google Play account",
    description: "Invite our publishing team so we can publish your app for you.",
    updated: "2022-04-06",
    intercomId: "4174025",
    body: [
      {
        p: "Once you have a [Google Play developer account](/help/google/create-google-play-developer-account/), invite us so we can publish your Android app on your behalf.",
      },
      {
        steps: [
          {
            title: "Open user management",
            body: "Sign in to your Google Play Console and click **Invite co-workers to the Developer Console**. If you already have apps, go to **Users and permissions** in the left menu instead.",
          },
          { title: "Invite a new user", body: "Click **Invite new users**." },
          {
            title: "Enter our details",
            body: "Email: **googleplay@mobappcreator.com**. Set access expiry to **Never**, so we can publish updates later. Choose the **Admin** role, then click **Send invitation**.",
          },
          {
            title: "Add your developer name in the App Dashboard",
            body: "When you’re ready to publish, enter your Google developer name in the **Android Specific** section of your Publishing Info page. We use it to find your invitation.",
          },
        ],
      },
    ],
  },
  {
    slug: "find-google-play-account-name",
    category: "google",
    title: "Finding your Google Play account name and developer URL",
    description: "Where to find your Google Play account details.",
    updated: "2022-04-06",
    intercomId: "4174049",
    body: [
      {
        p: "Your **developer account name** is the name you gave Google to show on the Play Store. Your **developer URL** takes you straight to your Google Play Console.",
      },
      {
        steps: [
          { title: "Sign in", body: "Open [play.google.com/console](https://play.google.com/console/) and sign in." },
          {
            title: "Find your account name",
            body: "Your developer account name appears in the account menu at the top of the Console.",
          },
          {
            title: "Copy your developer URL",
            body: "On the **All apps** page, copy the address from your browser’s address bar.",
          },
          {
            title: "Add it to the App Dashboard",
            body: "Paste the URL into the Publishing Information page in your MobAppCreator dashboard.",
          },
        ],
      },
      { h: "Tips" },
      {
        p: "**Changing your developer name.** You can change it at any time in your Play Console settings. Your URL stays the same.",
      },
      {
        p: "**Charging for apps.** To sell apps, set up a payments profile in your Play Console.",
      },
      {
        note: "An app published for free can never become paid. You’d need to publish a new app with the price set before release.",
        tone: "warning",
      },
    ],
  },
  {
    slug: "google-review-time",
    category: "google",
    title: "How long does Google take to approve my app?",
    description: "The Google Play review process.",
    updated: "2022-04-06",
    intercomId: "92807",
    body: [
      {
        p: "Google Play reviews apps with a mix of automated checks and human reviewers. A review usually takes **a few days**, and new apps from new developer accounts can take up to **7 days** or longer.",
      },
      {
        p: "Your app appears on Google Play a few hours after it’s approved. Check the email linked to your developer account for updates on your app’s status.",
      },
    ],
  },

  // ───────────────────────── Push notifications ─────────────────────────
  {
    slug: "push-notifications",
    category: "engagement",
    title: "Push notifications: what they are and how to send them",
    description: "Send notifications to all users, groups or custom segments.",
    updated: "2022-04-06",
    intercomId: "4191148",
    body: [
      { h: "What are push notifications?" },
      {
        p: "A push notification is an alert that appears on your users’ phones, much like a text message. It’s a direct line to your audience and one of the best ways to drive engagement. Send to all users, to groups people subscribe to, or to a custom segment, with rich content and action buttons.",
      },
      { note: "Push notifications need your app to be on a paid plan and live in the app stores." },
      { h: "Ideas" },
      {
        ul: [
          "An eCommerce app can announce new products.",
          "A school app can send updates to the parents of each grade.",
          "A church app can share this week’s sermon or a daily reading.",
        ],
      },
      { h: "Send a notification" },
      { p: "Go to **Notifications → New Notification** and choose **Push Notification**." },
      { h: "Audience" },
      {
        ul: [
          "**All users** sends the notification to everyone who has your app.",
          "**Groups** sends it to one of your notification groups.",
        ],
      },
      {
        p: "Create groups in **Settings → Push Notifications** to segment users by interest, user type, community and more. Click **(+)**, name the group and choose whether new users join it by default.",
      },
      { h: "Message content" },
      {
        ul: [
          "**Title.** Keep it under 75 characters so it displays fully on every device.",
          "**Message.** The text shown on the lock screen, expanding to full view when tapped. Emojis are welcome 😁.",
          "**Action button.** Optionally link to web content, a phone call, an article or any section of your app.",
        ],
      },
      { h: "Schedule" },
      {
        p: "Notifications are sent **Now** by default. Choose **Schedule** to pick a date and time. Click **Send Notification** to send it or add it to your scheduled list.",
      },
      { h: "Tips" },
      { p: "**Create groups** so people get the notifications that matter to them." },
      { p: "**Don’t overdo it.** Quality beats quantity; too many messages lead people to switch notifications off." },
      { p: "**Make every message worth opening.** Before you send, ask yourself:" },
      {
        ol: [
          "What does my audience want?",
          "When do they want to hear from me?",
          "Where are they located (and what time is it there)?",
          "Is the message personal?",
          "What do my statistics say?",
        ],
      },
    ],
  },

  // ───────────────────────── eCommerce ─────────────────────────
  {
    slug: "payment-gateways",
    category: "ecommerce",
    title: "Payment gateways for your shopping app",
    description: "What payment gateways are and which ones MobAppCreator supports.",
    updated: "2022-04-06",
    intercomId: "4651289",
    body: [
      {
        p: "Checkout and the choice of payment gateways are key parts of any shopping app. Common questions are which option to choose, whether to offer more than one, and what to do if one isn’t available in your country.",
      },
      { h: "What is a payment gateway?" },
      { p: "A payment gateway processes payments for websites and apps. It does two things for you:" },
      {
        ol: [
          "**Makes checkout fast and easy.** Many shopping carts are abandoned because checkout is long or complicated. A good gateway removes that friction.",
          "**Keeps customers’ information safe.** Gateways specialize in payment data and have the encryption and security to protect it.",
        ],
      },
      { h: "Why offer more than one?" },
      {
        p: "Customers expect choice. Many prefer a service like PayPal so they don’t have to type their card details for every purchase. Shoppers also abandon carts when they don’t trust a site with their card or can’t find a payment method they like. Offering the methods your audience prefers can lift your conversions.",
      },
      {
        p: "MobAppCreator shopping apps also keep customers signed in, so they identify themselves once and are recognized every time they open the app.",
      },
      { h: "Supported payment options" },
      {
        ul: [
          "**Stripe.** Accepts all major cards from customers around the world, with a quick checkout and fast payouts. Requires a [Stripe account](https://dashboard.stripe.com/register).",
          "**PayPal.** A familiar way to pay for millions of shoppers worldwide. Requires a [PayPal Business account](https://www.paypal.com/business).",
          "**Mercado Pago.** The leading digital payment platform in Latin America, available in Argentina, Brazil, Chile, Colombia, Mexico, Peru and Uruguay. Requires a [Mercado Pago account](https://www.mercadopago.com.ar/).",
          "**Offline payment.** Prefer not to use an online gateway, or none is available in your country? Accept cash on delivery, bank transfers or any method that suits you.",
        ],
      },
      { p: "Ready to set them up? See [How to configure your payment gateway](/help/ecommerce/configure-payment-gateway/)." },
    ],
  },
  {
    slug: "configure-payment-gateway",
    category: "ecommerce",
    title: "How to configure your payment gateway",
    description: "Connect Stripe, PayPal, Mercado Pago or offline payments to your shop.",
    updated: "2022-04-06",
    intercomId: "4651325",
    body: [
      {
        p: "Once you’ve added some products with the **eCommerce** screen, open **eCommerce Settings** and configure the gateways you want to offer. New to payment gateways? Read [Payment gateways for your shopping app](/help/ecommerce/payment-gateways/) first.",
      },
      { h: "Stripe" },
      {
        p: "Create and activate a [Stripe account](https://dashboard.stripe.com/register), then copy your **Publishable key** and **Secret key** from the Stripe dashboard into MobAppCreator. See [Stripe’s documentation on API keys](https://stripe.com/docs/keys).",
      },
      {
        note: "Use your **live** keys. With test keys, payments are only simulated and customers’ cards won’t be charged.",
        tone: "warning",
      },
      { h: "PayPal" },
      { p: "You need a PayPal Business account to accept live payments." },
      {
        steps: [
          { title: "Sign in", body: "Log in to the PayPal Developer Dashboard with your PayPal account." },
          {
            title: "Create an app",
            body: "In **Apps & Credentials**, switch to **Live** and click **Create App**. Give it a name and save.",
          },
          { title: "Copy your credentials", body: "Copy the **Client ID** and **Secret** for your app." },
          {
            title: "Add them to MobAppCreator",
            body: "In your PayPal integration, add a descriptive name and paste your Client ID and Secret.",
          },
        ],
      },
      { h: "Mercado Pago" },
      {
        p: "Create a [Mercado Pago account](https://www.mercadopago.com.ar/). In its **Credentials** section, create your **Public key** and **Access token**, and paste them into the Mercado Pago section of your eCommerce settings. See the [Mercado Pago documentation](https://www.mercadopago.com.ar/developers/) for details.",
      },
      { h: "Offline payment and bank transfer" },
      {
        p: "Use offline payment if you’d rather not set up an online gateway, none is available in your country, or you want to avoid transaction fees. You can also offer it alongside online options.",
      },
      {
        p: "In the buyer instructions, enter your bank account details for transfers, or explain how customers can pay at your location.",
      },
    ],
  },

  // ───────────────────────── Pro tips ─────────────────────────
  {
    slug: "allow-registration",
    category: "pro-tips",
    title: "Let users register in your app",
    description: "Add sign-in and choose which screens require it.",
    updated: "2022-04-06",
    intercomId: "91672",
    body: [
      {
        p: "Letting users register creates a more engaging experience, and you decide exactly who can see what: your whole app or just some sections.",
      },
      {
        steps: [
          { title: "Add the Settings screen", body: "Add the **Settings** screen from the screen library." },
          { title: "Turn on login", body: "In the Settings screen, switch on **Show login option**." },
          {
            title: "Choose protected screens",
            body: "Go to **Settings → Security → Protected Screens** and select the screens that require sign-in.",
          },
        ],
      },
      {
        p: "You can also select **Requires sign in at startup** to make everyone sign in before seeing any content.",
      },
      {
        note: "We don’t recommend requiring sign-in for everything. People can’t try your app before registering, which can hurt your reviews, and the stores discourage it.",
        tone: "warning",
      },
      {
        p: "Next, choose [which sign-in methods to offer](/help/pro-tips/sign-in-methods/).",
      },
    ],
  },
  {
    slug: "sign-in-methods",
    category: "pro-tips",
    title: "Choose your app’s sign-in methods",
    description: "Offer several ways for users to register and sign in.",
    updated: "2022-04-06",
    intercomId: "4245936",
    body: [
      {
        p: "Once [registration is on](/help/pro-tips/allow-registration/), you can choose how users sign up and sign in. Five methods are available:",
      },
      {
        ul: ["Email and password", "Facebook", "Google", "LinkedIn", "Sign in with Apple"],
      },
      {
        p: "Go to **Settings → Security → Sign Up Options** and turn on the methods you want.",
      },
      {
        note: "Sign in with Apple requires your app to be republished, because Apple needs a certificate before the feature can be turned on.",
      },
    ],
  },
  {
    slug: "display-news-articles",
    category: "pro-tips",
    title: "Change how news articles are displayed",
    description: "Pick the list style that best suits your app.",
    updated: "2022-04-06",
    intercomId: "4231361",
    body: [
      {
        p: "News articles are a flexible way to show content, and there are many ways to display them.",
      },
      {
        p: "Open the screen’s **Settings** and use **Cell Style** and **Columns** to change how the list looks: from a simple list with thumbnails, to large image cards, to a grid of two or more columns.",
      },
      { p: "Try a few combinations to find the one that fits your app’s style." },
    ],
  },
  {
    slug: "admob-monetization",
    category: "pro-tips",
    title: "Monetize your app with AdMob",
    description: "Earn money by showing Google AdMob banner ads in your app.",
    updated: "2022-04-06",
    intercomId: "4267581",
    body: [
      {
        p: "Show banner ads from Google AdMob in your app and earn money from your audience. Monetization is available on the Professional plan and above.",
      },
      {
        steps: [
          {
            title: "Sign up for AdMob",
            body: "Go to [apps.admob.com](https://apps.admob.com/) and sign up with your Google account. Fill in the required details and click **Get started**.",
          },
          {
            title: "Set your preferences",
            body: "AdMob sends a confirmation email and asks which tips and notifications you want to receive.",
          },
          { title: "Add your app", body: "Go to **Apps** and click **Add your first app** (or **Add app**)." },
          {
            title: "Answer “Is your app published?”",
            body: "Choose **No**, then enter your app name and select the platform. Repeat steps 3 to 7 for each platform if you publish on both iOS and Android.",
          },
          { title: "Create an ad unit", body: "Click **Add ad unit** and choose **Banner**, the only format we support." },
          {
            title: "Configure the banner",
            body: "Name the ad unit. Under ad type, select all options to maximize earnings. Leave **automatic refresh** off; we’ve already tuned the refresh interval. Click **Create ad unit**.",
          },
          { title: "Save your IDs", body: "Copy the **App ID** and **Ad unit ID**, then click **Done**." },
          {
            title: "Add them to MobAppCreator",
            body: "In the App Dashboard, go to **Settings → Integrations / API Keys → AdMob** and paste your IDs for each platform.",
          },
        ],
      },
    ],
  },
  {
    slug: "custom-article-elements",
    category: "pro-tips",
    title: "Add custom elements to your articles",
    description: "Extend articles with events, galleries, maps, video and more.",
    updated: "2022-04-06",
    intercomId: "4291950",
    body: [
      {
        p: "Articles are a quick, flexible way to show news, services, products and more. Besides the title, subtitle, description, images and tags, you can add many other elements. Scroll to the bottom of an article and click **Add element**:",
      },
      {
        ul: [
          "**Label**: a heading to separate sections of your article.",
          "**Rich text**: additional blocks of text.",
          "**Events**: an event with a start date that users can add to their calendar in one tap.",
          "**Pictures and gallery**: one or several images.",
          "**Features**: a list of properties or highlights.",
          "**Tags**: labels to categorize your articles.",
          "**Click to screen**: a link to another screen of your app.",
          "**YouTube video**: paste a video URL or ID and the details are imported automatically.",
          "**Map location**: a place, with directions in the app.",
          "**MP3 audio**: supplemental audio or samples. There’s also a dedicated audio and podcast screen.",
        ],
      },
      { p: "You can also add actions:" },
      { ul: ["Click to email", "Click to call", "Click to SMS", "Click to WhatsApp", "Click to web", "Click to app"] },
    ],
  },
  {
    slug: "article-categories",
    category: "pro-tips",
    title: "Organize articles with categories",
    description: "Let users filter your content by category.",
    updated: "2022-04-06",
    intercomId: "4303346",
    body: [
      {
        p: "Categories help you organize your content. They appear as filters in your app’s top bar, so users can see articles or items by category.",
      },
      {
        steps: [
          {
            title: "Add categories to an article",
            body: "Open an article and find **Categories** in the right-hand panel. Type each category and press Enter.",
          },
          { title: "Assign them", body: "Click a category to turn it on or off for that article." },
          {
            title: "Turn on categories for the screen",
            body: "Open the article screen’s settings and activate **Categories**.",
          },
        ],
      },
      { p: "Your categories now appear in your app, and users can tap each one to filter the list." },
    ],
  },
  {
    slug: "arrange-screens",
    category: "pro-tips",
    title: "Rearrange your app’s screens",
    description: "Change the order of screens in your app.",
    updated: "2022-04-06",
    intercomId: "4303368",
    body: [
      {
        p: "Your app’s screens are shown as a tree under **Main navigation**. Each item is a screen or a submenu.",
      },
      {
        p: "To change the order, drag a screen up or down the tree. Your app updates to match.",
      },
    ],
  },
  {
    slug: "create-submenu",
    category: "pro-tips",
    title: "Create a submenu",
    description: "Group screens together under a submenu.",
    updated: "2022-04-06",
    intercomId: "4303409",
    body: [
      {
        p: "Submenus group related screens together, giving you more ways to organize your app’s sections.",
      },
      {
        steps: [
          {
            title: "Add the Submenu component",
            body: "In Main navigation, click **(+)**, scroll down and select **Submenu**.",
          },
          { title: "Name it", body: "Click the submenu in Main navigation and give it a name, for example “Order now”." },
          {
            title: "Move screens into it",
            body: "Drag each screen you want into the submenu.",
          },
          {
            title: "Customize its look",
            body: "Click the submenu to choose how it’s displayed and add images for its items.",
          },
        ],
      },
      {
        p: "For example, a restaurant app could have an “Order now” submenu containing “Soups”, “Sushi” and “Pasta”.",
      },
    ],
  },

  // ───────────────────────── Developers ─────────────────────────
  {
    slug: "api",
    category: "developers",
    title: "MobAppCreator API",
    description: "Use the API to manage your app’s items, users and notifications.",
    updated: "2022-11-03",
    intercomId: "5577757",
    body: [
      { p: "The MobAppCreator API lets you access and manage your app’s resources from your own systems. API access is included on the Advanced and Clone plans." },
      { h: "Authentication" },
      {
        p: "The API uses bearer authentication. Send your API token in the `Authorization` header of every request, and always use HTTPS:",
      },
      { code: "Authorization: Bearer MOBAPP_API_TOKEN" },
      { p: "Generate or delete your API token in the App Dashboard." },
      { h: "List app items" },
      { code: "curl --request GET \\\n  --header 'Authorization: Bearer MOBAPP_API_TOKEN' \\\n  https://app.mobappcreator.com/api/items" },
      { h: "List a screen’s items" },
      {
        code: "curl --request GET \\\n  --header 'Authorization: Bearer MOBAPP_API_TOKEN' \\\n  'https://app.mobappcreator.com/api/items/?screenId=SCREEN_ID'",
      },
      { p: "You’ll find the `SCREEN_ID` in the screen’s settings in the App Dashboard." },
      { h: "Get an item" },
      {
        code: "curl --request GET \\\n  --header 'Authorization: Bearer MOBAPP_API_TOKEN' \\\n  https://app.mobappcreator.com/api/items/ITEM_ID",
      },
      { p: "Get the `ITEM_ID` from the list items call." },
      { h: "Create an item" },
      {
        code: "curl --request POST \\\n  -H 'Content-Type: application/json' \\\n  -H 'Authorization: Bearer MOBAPP_API_TOKEN' \\\n  --data @item.json \\\n  https://app.mobappcreator.com/api/items",
      },
      { p: "Example `item.json` for a news item:" },
      {
        code: '{\n  "screenId": "SCREEN_ID",\n  "title": "My title",\n  "subtitle": "My subtitle",\n  "extraData": {\n    "image": "IMAGE_URL"\n  }\n}',
      },
      { p: "A map item:" },
      {
        code: '{\n  "screenId": "SCREEN_ID",\n  "title": "My title",\n  "subtitle": "My subtitle",\n  "extraData": {\n    "address": "MyStreet 333, Miami, FL",\n    "image": "IMAGE_URL",\n    "lng": "-80.2994996",\n    "lat": "25.7823907"\n  }\n}',
      },
      { p: "A product item:" },
      {
        code: '{\n  "screenId": "SCREEN_ID",\n  "title": "My title",\n  "subtitle": "My subtitle",\n  "extraData": {\n    "price": "100",\n    "stock": 1,\n    "sku": "SKU_NUMBER",\n    "image": "IMAGE_URL"\n  }\n}',
      },
      { h: "Update an item" },
      {
        code: "curl --request PUT \\\n  -H 'Content-Type: application/json' \\\n  -H 'Authorization: Bearer MOBAPP_API_TOKEN' \\\n  --data @item.json \\\n  https://app.mobappcreator.com/api/items/ITEM_ID",
      },
      { p: "Include only the fields you want to change, for example:" },
      {
        code: '{\n  "title": "My updated title",\n  "extraData": {\n    "price": "120",\n    "stock": 5\n  }\n}',
      },
      { h: "List users" },
      {
        code: "curl --request GET \\\n  --header 'Authorization: Bearer MOBAPP_API_TOKEN' \\\n  https://app.mobappcreator.com/api/users",
      },
      { h: "Create a user" },
      {
        code: "curl --request POST \\\n  -H 'Content-Type: application/json' \\\n  -H 'Authorization: Bearer MOBAPP_API_TOKEN' \\\n  --data @user.json \\\n  https://app.mobappcreator.com/api/users",
      },
      {
        code: '{\n  "email": "test@mail.com",\n  "password": "a-strong-password",\n  "name": "Test user",\n  "tester": false,\n  "disabled": false\n}',
      },
      { h: "Update a user" },
      {
        code: "curl --request PUT \\\n  -H 'Content-Type: application/json' \\\n  -H 'Authorization: Bearer MOBAPP_API_TOKEN' \\\n  --data @user.json \\\n  https://app.mobappcreator.com/api/users/USER_ID",
      },
      { p: "`USER_ID` is the `uid` from the user object returned by the list users call. Include only the fields you want to change." },
      { h: "Send a notification to all users" },
      {
        code: "curl --request POST \\\n  -H 'Content-Type: application/json' \\\n  -H 'Authorization: Bearer MOBAPP_API_TOKEN' \\\n  --data @notification.json \\\n  https://app.mobappcreator.com/api/notifications",
      },
      {
        code: '{\n  "title": "Test push",\n  "body": "This is a test push",\n  "actionType": "none",\n  "android": true,\n  "iOS": true,\n  "deliverOn": UNIX_TIMESTAMP\n}',
      },
      { h: "Send a notification to one user" },
      {
        code: "curl --request POST \\\n  -H 'Content-Type: application/json' \\\n  -H 'Authorization: Bearer MOBAPP_API_TOKEN' \\\n  --data @notification.json \\\n  https://app.mobappcreator.com/api/notifications/USER_ID",
      },
      {
        code: '{\n  "title": "Test push",\n  "body": "This is a test push",\n  "actionType": "none",\n  "deliverOn": UNIX_TIMESTAMP\n}',
      },
    ],
  },
];

// ── Helpers ──────────────────────────────────────────────────────────

export const getCategory = (slug: string) => helpCategories.find((c) => c.slug === slug);

export const articlesIn = (category: string) => helpArticles.filter((a) => a.category === category);

export const getArticle = (category: string, slug: string) =>
  helpArticles.find((a) => a.category === category && a.slug === slug);

export const articleHref = (a: Pick<HelpArticle, "category" | "slug">) => `/help/${a.category}/${a.slug}/`;

const stripInline = (s: string) => s.replace(/\*\*|`/g, "").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");

/** Plain text of an article, for search. */
export function articleText(a: HelpArticle) {
  return a.body
    .map((b) => {
      if ("p" in b) return b.p;
      if ("h" in b) return b.h;
      if ("ul" in b) return b.ul.join(" ");
      if ("ol" in b) return b.ol.join(" ");
      if ("steps" in b) return b.steps.map((s) => `${s.title} ${s.body ?? ""}`).join(" ");
      if ("note" in b) return b.note;
      return "";
    })
    .map(stripInline)
    .join(" ");
}

export const searchEntries = () =>
  helpArticles.map((a) => ({
    href: articleHref(a),
    title: a.title,
    description: a.description,
    category: getCategory(a.category)?.title ?? "",
    text: articleText(a),
  }));

export const popularArticles = [
  "publishing-guide",
  "create-apple-developer-account",
  "create-google-play-developer-account",
  "push-notifications",
  "apple-rejection-reasons",
  "first-steps",
];
