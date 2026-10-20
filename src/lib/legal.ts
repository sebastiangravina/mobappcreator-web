// Terms and Privacy Policy text, from the MobApp Labs legal drafts (October 19, 2026).
// Generated from mobappcreator-legal/*.txt. Edit the wording here; fill the open fields in `legalStatus`.

export type LegalBlock =
  | { t: "p"; text: string }
  | { t: "ul"; items: string[] }
  | { t: "todo"; text: string }
  | { t: "contact" };

export type LegalSection = { h: string; blocks: LegalBlock[] };

/**
 * Dates and address shown on the legal pages. Leave effectiveDate empty to show "Last updated".
 * Remaining `todo` blocks are review notes that only show in `npm run dev`.
 */
export const legalStatus = {
  lastUpdated: "October 19, 2026",
  effectiveDate: "", // e.g. "November 1, 2026"
  mailingAddress: "", // optional postal address; contact is by email (info@mobappcreator.com)
};

export const legalEntity = {
  name: "MobApp Labs LLC",
  region: "Florida, United States",
  email: "info@mobappcreator.com",
  website: "https://mobappcreator.com",
};

export const termsSections: LegalSection[] = [
  {
    "h": "1. About these terms",
    "blocks": [
      {
        "t": "p",
        "text": "These Terms and Conditions govern access to MobAppCreator’s website, app-building platform, hosting, publishing tools, support and related services (the “Services”). “MobAppCreator,” “we,” “us” and “our” refer to MobApp Labs LLC. “You” means the individual or organization purchasing or using the Services. An “Order” means a checkout, subscription selection or written order identifying the Services you purchase."
      },
      {
        "t": "p",
        "text": "By accepting these Terms during registration or checkout, or otherwise using the Services after these Terms have been made available to you, you agree to them. If you act for an organization or a client, you represent that you have authority to bind that organization or client. If you do not agree, do not use the Services."
      },
      {
        "t": "p",
        "text": "Our Privacy Policy explains our handling of personal information. It is a privacy notice, not blanket consent to optional tracking or marketing. A signed agreement or Order controls over these Terms only for the specific matters it expressly addresses. A signed data processing agreement controls for the processing it covers."
      }
    ]
  },
  {
    "h": "2. Eligibility and accounts",
    "blocks": [
      {
        "t": "p",
        "text": "The account holder must be at least 18 and legally able to enter a contract. This account requirement is separate from the audience of a customer-created app."
      },
      {
        "t": "p",
        "text": "Provide accurate account, contact and billing information and keep it current. Protect login credentials, limit access to authorized people and notify [info@mobappcreator.com](mailto:info@mobappcreator.com) promptly if you suspect unauthorized access. You are responsible for instructions and activity you authorize through your account. You are not responsible under this clause for activity caused by our failure to meet obligations that applicable law places on us."
      },
      {
        "t": "p",
        "text": "Inviting collaborators does not transfer ownership of your subscription. If account ownership is disputed, we may request reasonable evidence and temporarily restrict sensitive changes while the dispute is investigated. We will handle restrictions proportionately and in accordance with applicable law."
      }
    ]
  },
  {
    "h": "3. Services and plan limits",
    "blocks": [
      {
        "t": "p",
        "text": "MobAppCreator provides tools to create, manage and publish applications and related content. Available features, supported platforms, usage limits, support and publishing assistance depend on your plan and Order. Custom development, migrations, source-code delivery and professional services are included only when expressly agreed in writing."
      },
      {
        "t": "p",
        "text": "You are responsible for reviewing and testing your app, checking the accuracy of its content and deciding whether the Services meet your requirements. Unless expressly agreed, the Services are not intended for emergency response, life-critical systems or processing regulated information that requires special contractual or technical safeguards."
      },
      {
        "t": "p",
        "text": "We may maintain, update and improve the Services. If we discontinue a material paid feature during a prepaid term, we will provide reasonable notice and discuss an appropriate replacement or other remedy. Any service-level commitment must be stated in a separate written agreement."
      }
    ]
  },
  {
    "h": "4. Subscriptions, fees and taxes",
    "blocks": [
      {
        "t": "p",
        "text": "The price, currency, billing frequency, included features and applicable additional charges are those presented in your Order. Taxes are additional unless expressly included. You are responsible for applicable taxes other than taxes on our net income."
      },
      {
        "t": "p",
        "text": "Subscription payments are processed through Stripe. By purchasing a recurring subscription, you authorize recurring charges for the amount and billing interval disclosed at checkout until cancellation. Recurring billing authorization must be obtained through the applicable checkout process; these Terms alone do not authorize an undisclosed charge."
      },
      {
        "t": "p",
        "text": "A free trial lasts for the period shown when you enroll. No credit card or other payment details are required to start a free trial. Any automatic conversion to a paid subscription, and the amount and timing of the charge, must be disclosed when you enroll. Do not assume that a trial includes app-store publication or third-party fees."
      },
      {
        "t": "p",
        "text": "We may change subscription prices for a future renewal by giving at least 30 days’ notice, or longer if required by law. A change will not increase the price of a billing period you have already paid for. You may cancel before the renewal if you do not accept the new price."
      },
      {
        "t": "p",
        "text": "If a payment fails, we may notify you, request updated payment details and suspend paid features after a reasonable opportunity to resolve the issue. We may act sooner where reasonably necessary to address fraud or an immediate security risk."
      }
    ]
  },
  {
    "h": "5. Cancellation and refunds",
    "blocks": [
      {
        "t": "p",
        "text": "You may cancel a subscription using the cancellation control in your account, where available, or by emailing [info@mobappcreator.com](mailto:info@mobappcreator.com) from the account’s registered email address. Submit the request before your next renewal date. We will confirm receipt and the effective cancellation date. A cancellation request received before renewal will stop that renewal; we will not require an undisclosed advance-notice period."
      },
      {
        "t": "p",
        "text": "Unless you request an earlier account closure, cancellation normally takes effect at the end of your current paid billing period. Uninstalling an app, abandoning a project or deleting an app-store listing does not by itself cancel a subscription."
      },
      {
        "t": "p",
        "text": "Except where required by law, expressly promised in your Order or approved by us in writing, subscription fees are non-refundable and we do not provide partial-period refunds for unused time. This does not limit remedies for an incorrect charge, our failure to provide a legally required service or rights that cannot lawfully be excluded. Contact us promptly about billing errors so we can investigate."
      },
      {
        "t": "p",
        "text": "Apple, Google and other third parties control refunds of fees paid directly to them under their own terms."
      }
    ]
  },
  {
    "h": "6. App stores and third-party services",
    "blocks": [
      {
        "t": "p",
        "text": "App-store review, approval, continued availability, ranking and review timelines are controlled by the relevant store. We do not guarantee approval, a particular review date, downloads, revenue or continued compatibility with every future device or operating-system version. A store rejection does not automatically entitle you to a refund, without limiting applicable legal rights or an express commitment in your Order."
      },
      {
        "t": "p",
        "text": "Unless your Order says otherwise, you are responsible for developer accounts, app-store fees, certificates, permissions, legal disclosures and the accuracy of submissions. If you authorize us to assist with submission, provide the necessary access through the store’s authorized collaboration tools where possible."
      },
      {
        "t": "p",
        "text": "Third-party integrations, embedded content, APIs and payment services have their own terms and privacy practices. Connecting an integration authorizes the data exchanges necessary for the functionality you select. A third party may change or discontinue its service. We remain responsible for our own legal obligations and for service providers acting on our behalf to the extent required by law."
      }
    ]
  },
  {
    "h": "7. Your content and our technology",
    "blocks": [
      {
        "t": "p",
        "text": "You retain ownership of the content, branding and other materials you supply (“Customer Content”). You represent that you have the rights, licenses and permissions needed to use and publish that content and to instruct us to process it."
      },
      {
        "t": "p",
        "text": "You grant us a limited, non-exclusive license to host, copy, format, transmit and display Customer Content as needed to provide the Services, carry out your instructions, maintain security and satisfy legal obligations. This license does not authorize unrelated advertising use of your private content. It ends when the relevant processing ends, subject to lawful retention and restricted backup copies described in the Privacy Policy."
      },
      {
        "t": "p",
        "text": "We and our licensors retain ownership of the platform, reusable code, templates, tools, documentation and other pre-existing technology. Subject to your plan and payment obligations, you receive permission to use that technology through the Services. Buying a subscription does not transfer platform source code or ownership of our technology. Any separate source-code or deliverable rights must be stated in writing."
      },
      {
        "t": "p",
        "text": "We will obtain your permission before using your business name, logo, app screenshots or statements as a customer endorsement or marketing case study. You must obtain equivalent permission for endorsements you publish in your own app."
      }
    ]
  },
  {
    "h": "8. Acceptable use",
    "blocks": [
      {
        "t": "p",
        "text": "Do not use the Services to:"
      },
      {
        "t": "ul",
        "items": [
          "Commit fraud, impersonate others, distribute unlawful content or violate intellectual-property, privacy or other legal rights.",
          "Distribute malware, steal credentials, bypass access controls or disrupt our systems or other users.",
          "Send unlawful spam, deceptive messages or communications without legally required permissions.",
          "Create prohibited app-store clones, manipulate reviews or evade store enforcement.",
          "Access other accounts or data without authorization, or conduct security testing without permission.",
          "Resell the underlying platform, remove proprietary notices or reverse engineer protected technology, except to the extent applicable law permits despite this restriction or we authorize it in writing.",
          "Exceed disclosed plan limits or use the Services in a manner that materially compromises availability, security or lawful operation."
        ]
      },
      {
        "t": "p",
        "text": "You may report suspected misuse or infringement to [info@mobappcreator.com](mailto:info@mobappcreator.com). Include the affected material, its location, your contact information and the reason for your report. We may request additional information and act as required by law."
      }
    ]
  },
  {
    "h": "9. Your app, end users and commerce",
    "blocks": [
      {
        "t": "p",
        "text": "You operate the apps you create (“Customer Apps”) and are responsible for their content, customer-facing promises and relationship with the people who use them (“End Users”). You must publish appropriate terms and privacy notices, obtain required permissions and accurately complete store privacy disclosures."
      },
      {
        "t": "p",
        "text": "If you sell products, accept donations, take bookings or collect payments, you are responsible for the transaction, lawful product descriptions, pricing, taxes, fulfillment, customer support, refunds and required consumer notices. Unless a separate written agreement states otherwise, MobAppCreator is not the seller or merchant of record for your transactions with End Users."
      },
      {
        "t": "p",
        "text": "You must not collect sensitive or specially regulated information through the Services unless the relevant features and written agreements support that use. If your app is intended for children or may collect children’s information, you must identify the applicable age rules and arrange the required notices, permissions and safeguards before collection begins. A general privacy-policy template does not satisfy every app’s requirements."
      }
    ]
  },
  {
    "h": "10. Data processing and security responsibilities",
    "blocks": [
      {
        "t": "p",
        "text": "For personal information you collect through a Customer App, you generally determine its purpose and use, while we process that information to provide the selected functionality on your instructions. Each party remains responsible for the obligations the law places on it."
      },
      {
        "t": "p",
        "text": "Where applicable law requires a data processing agreement, appropriate written processing terms must be in place before the relevant processing begins. These Terms and the Privacy Policy do not replace that agreement or required international-transfer terms."
      },
      {
        "t": "p",
        "text": "You must provide lawful instructions, use access controls appropriately and maintain copies of content you need to retain. We will handle personal information as described in our Privacy Policy and applicable written processing terms. You should not put passwords, payment-card data or other sensitive information into support messages unless we direct you to an appropriate secure process."
      }
    ]
  },
  {
    "h": "11. Suspension and termination",
    "blocks": [
      {
        "t": "p",
        "text": "We may restrict content, features or an account where reasonably necessary to address a material breach, non-payment, legal requirement, infringement complaint or security risk. Where practical and lawful, we will explain the issue and allow a reasonable opportunity to resolve it. Immediate action may be necessary for serious abuse, unlawful activity or imminent harm."
      },
      {
        "t": "p",
        "text": "You may end your use at any time, subject to the cancellation provisions above. We may discontinue an account without cause on at least 30 days’ notice. If we do so during a prepaid term, we will refund the unused portion of the prepaid fees for the discontinued Services, except where continued performance or payment is prohibited by law."
      },
      {
        "t": "p",
        "text": "When Services end, access and service-dependent app functionality may stop. Export content you need using available tools before your access ends, and contact us beforehand if you need assistance. Any post-termination access or migration service must be expressly agreed; do not assume indefinite hosting or access. Data retention and deletion are governed by the Privacy Policy and applicable processing agreement. Termination does not erase amounts properly owed or rights and obligations intended to continue."
      }
    ]
  },
  {
    "h": "12. Warranties and disclaimers",
    "blocks": [
      {
        "t": "p",
        "text": "We will provide the Services with reasonable care and skill. Except for express commitments in these Terms, an Order or applicable law, the Services are provided “as is” and “as available.” To the extent permitted by law, we exclude implied warranties of merchantability, fitness for a particular purpose and non-infringement."
      },
      {
        "t": "p",
        "text": "We do not promise uninterrupted or error-free operation, that every defect will be corrected, or that an app will achieve a business outcome. Internet services and third-party systems carry risks. Nothing in this section excludes a warranty, guarantee or remedy that cannot lawfully be excluded."
      }
    ]
  },
  {
    "h": "13. Limitation of liability",
    "blocks": [
      {
        "t": "p",
        "text": "To the extent permitted by law, neither party is liable to the other for indirect or consequential loss, lost profits, lost business opportunities or loss of goodwill arising from these Terms, whether the claim is contractual or otherwise."
      },
      {
        "t": "p",
        "text": "Subject to the exceptions below, each party’s total liability arising from the Services and these Terms is limited to the greater of US$100 or the fees paid or payable by you for the Services giving rise to the claim during the 12 months before the event giving rise to liability."
      },
      {
        "t": "p",
        "text": "These exclusions and limits do not apply to fraud, intentional misconduct, gross negligence, death or personal injury where liability cannot lawfully be limited, or any other liability that applicable law does not allow a party to exclude or limit. They do not excuse payment of properly owed fees. Mandatory consumer protections remain in effect."
      }
    ]
  },
  {
    "h": "14. Third-party claims",
    "blocks": [
      {
        "t": "p",
        "text": "If you use the Services for business purposes, you will defend and indemnify MobApp Labs LLC against a third-party claim to the extent it results from your unlawful Customer Content, your infringement of that party’s rights or your material breach of the acceptable-use or End User obligations above. This obligation does not apply to a claim caused by our own breach, negligence or misconduct."
      },
      {
        "t": "p",
        "text": "We must notify you reasonably promptly, provide reasonable cooperation at your expense and let you control the defense using suitable counsel. You may not settle a claim in a way that admits fault by us or imposes a non-monetary obligation on us without our written consent, which will not be unreasonably withheld. This section does not apply where prohibited by consumer law."
      }
    ]
  },
  {
    "h": "15. Disputes and governing law",
    "blocks": [
      {
        "t": "p",
        "text": "Please first send a description of a dispute to [info@mobappcreator.com](mailto:info@mobappcreator.com) so we can try to resolve it. This does not delay your right to seek urgent relief, meet a filing deadline, contact a regulator or exercise a non-waivable right."
      },
      {
        "t": "p",
        "text": "Florida law governs these Terms, without applying its conflict-of-laws rules. For business customers, disputes are subject to the state or federal courts with jurisdiction over MobApp Labs LLC’s principal place of business in Florida. If you are a consumer, this choice does not deprive you of mandatory protections or the right to bring proceedings in a court available under applicable consumer law."
      },
      {
        "t": "p",
        "text": "These Terms do not impose mandatory arbitration or a class-action waiver."
      }
    ]
  },
  {
    "h": "16. Changes and general terms",
    "blocks": [
      {
        "t": "p",
        "text": "We may revise these Terms. For a material change affecting an existing paid subscription, we will provide at least 30 days’ advance notice by email or a prominent account notice, unless an earlier change is required by law or necessary to address an immediate security risk. Changes apply prospectively and do not retroactively remove accrued rights. If you do not accept a material change, you may cancel before it takes effect; any required remedy remains available under applicable law."
      },
      {
        "t": "p",
        "text": "Neither party is responsible for a delay caused by an event outside its reasonable control, provided it takes reasonable steps to reduce the impact. This does not excuse payment already due or eliminate mandatory legal obligations."
      },
      {
        "t": "p",
        "text": "If a provision is unenforceable, the remaining provisions continue to apply to the extent permitted by law. Failure to enforce a provision is not a waiver. Neither party may assign these Terms without the other’s consent, except in a business transfer that preserves the other party’s rights and applicable data protections."
      },
      {
        "t": "p",
        "text": "These Terms, your Order and applicable signed agreements form the agreement for the Services. They do not limit rights that cannot lawfully be waived."
      }
    ]
  },
  {
    "h": "17. Contact",
    "blocks": [
      {
        "t": "contact"
      }
    ]
  }
];

export const privacySections: LegalSection[] = [
  {
    "h": "1. Who we are and what this policy covers",
    "blocks": [
      {
        "t": "p",
        "text": "MobApp Labs LLC operates MobAppCreator. This Policy explains how we handle personal information in connection with our website, app-building platform, customer accounts, billing and support (the “Services”). “We,” “us” and “our” mean MobApp Labs LLC."
      },
      {
        "t": "p",
        "text": "It also explains our role when we process personal information for applications built by our customers (“Customer Apps”). A Customer App’s owner generally decides what information its app collects and why. Its own privacy notice should identify that owner and explain the app’s practices. This Policy does not replace the privacy notice for every app created with MobAppCreator."
      },
      {
        "t": "p",
        "text": "For information we use to manage our own business, accounts and Services, we act as the controller or business responsible for that processing. When we handle information solely on a customer’s instructions, we generally act as its processor or service provider, subject to the applicable agreement. These roles depend on the actual activity and applicable law."
      },
      {
        "t": "p",
        "text": "Reading or accepting this Policy does not by itself provide consent for optional cookies, marketing or other processing that legally requires a separate choice."
      }
    ]
  },
  {
    "h": "2. Information we handle",
    "blocks": [
      {
        "t": "p",
        "text": "**Account and business information.** Information you provide when registering, subscribing, requesting a demo or contacting us, such as your name, email address, organization, account credentials and business contact details. We also keep account settings and the subscription information needed to administer your account."
      },
      {
        "t": "p",
        "text": "**Billing information.** Billing contact details, invoice information, subscription status, payment history and information needed to address billing issues. Stripe processes payments and handles payment details under its own terms and privacy notice. We receive transaction and payment-status information needed to manage your subscription."
      },
      {
        "t": "p",
        "text": "**Content and support communications.** App configuration, text, images, files and other materials you upload or make available to us, together with support requests and related correspondence. Content you choose to publish may become visible to your app’s audience or the public."
      },
      {
        "t": "p",
        "text": "**Technical and usage information.** Information associated with access to and use of the Services, such as IP address, browser and device characteristics, operating system, timestamps, page visits, interactions, referring pages, errors and security logs. Google Analytics helps us understand use of our website and Services; the information collected depends on the relevant settings and choices."
      },
      {
        "t": "p",
        "text": "**Customer App Data.** Information customers submit or instruct us to process for their apps, which may include End User accounts, contact details, form submissions, uploaded content, device identifiers, notification-related information and usage records, depending on the features enabled. This is a description of possible feature-dependent processing, not a statement that every app collects all these categories."
      },
      {
        "t": "p",
        "text": "**Permissions and integrations.** An app may request access to device functions or connect to another service where the app owner enables that functionality. The app’s notice and permission prompts should explain the specific data and purpose. Permissions can generally be managed in the device settings, although some functionality may then be unavailable."
      },
      {
        "t": "p",
        "text": "Information comes from you, your authorized collaborators, the operation of the Services and providers or integrations involved in your selected functionality. You should not provide information about another person unless you are authorized to do so."
      }
    ]
  },
  {
    "h": "3. Why we use information",
    "blocks": [
      {
        "t": "p",
        "text": "We use information relevant to the following purposes:"
      },
      {
        "t": "ul",
        "items": [
          "Set up and administer accounts, authenticate access and deliver the selected Services.",
          "Host Customer Content and process Customer App Data on the relevant customer’s instructions.",
          "Manage subscriptions, collect payments through Stripe, issue invoices and respond to payment questions.",
          "Provide support, troubleshoot problems and communicate about account activity, security, billing or material service changes.",
          "Understand website and service usage through Google Analytics and improve functionality and usability, subject to applicable choices and consent requirements.",
          "Detect misuse, prevent fraud, protect accounts and systems, and investigate incidents.",
          "Send promotional communications where permitted by law and subject to applicable consent or opt-out requirements.",
          "Meet legal obligations, maintain required business records and establish, exercise or defend legal claims."
        ]
      },
      {
        "t": "p",
        "text": "Providing certain account and billing information is necessary to supply a subscription. If you do not provide required information, we may be unable to create an account, accept payment or supply the requested feature. Optional information and optional tracking choices should not be treated as required merely because you use the Services."
      }
    ]
  },
  {
    "h": "4. Legal bases where required",
    "blocks": [
      {
        "t": "p",
        "text": "Where European, UK or another applicable law requires a legal basis, the relevant basis depends on the purpose and relationship:"
      },
      {
        "t": "ul",
        "items": [
          "Contract: processing necessary to provide Services you personally request or purchase.",
          "Legitimate interests: administering business-customer relationships, providing support, protecting systems, preventing fraud and improving Services where those interests are not overridden by your rights. Where you act for a company, managing that business relationship may rely on legitimate interests rather than a contract with you personally.",
          "Legal obligation: required accounting, tax, legal-response and other statutory processing.",
          "Consent: optional tracking, certain marketing or other activities where the law requires consent. You may withdraw consent without affecting processing that was lawful before withdrawal."
        ]
      },
      {
        "t": "p",
        "text": "When we process Customer App Data only on a customer’s instructions, the customer is responsible for establishing its own legal basis. This Policy is not a substitute for that assessment or the applicable processing agreement."
      }
    ]
  },
  {
    "h": "5. Service providers and other disclosures",
    "blocks": [
      {
        "t": "p",
        "text": "We disclose information as needed for the purposes in this Policy, subject to applicable legal and contractual restrictions."
      },
      {
        "t": "p",
        "text": "**Google — hosting and infrastructure.** We use Google hosting services to operate the platform and store or process information involved in providing it. The specific product and hosting location depend on our infrastructure configuration."
      },
      {
        "t": "p",
        "text": "**Stripe — payments.** Stripe processes subscription payments and associated payment, billing and fraud-prevention information. It may act under its own legal responsibilities for parts of that processing."
      },
      {
        "t": "p",
        "text": "**Google Analytics — usage measurement.** We use Google Analytics to understand visits and interactions. Google receives the information associated with the analytics implementation, subject to its service terms, our configuration and applicable user choices. This does not mean that customer app content is intentionally sent to analytics."
      },
      {
        "t": "p",
        "text": "Provider information is available at:"
      },
      {
        "t": "ul",
        "items": [
          "[Google Privacy Policy](https://policies.google.com/privacy)",
          "[Google Cloud Privacy Notice](https://cloud.google.com/terms/cloud-privacy-notice)",
          "[Google Analytics information](https://support.google.com/analytics/answer/6004245)",
          "[Stripe Privacy Policy](https://stripe.com/privacy)"
        ]
      },
      {
        "t": "p",
        "text": "We may also disclose relevant information to authorized people in your organization, recipients or integrations you select, professional advisers, or public authorities when legally required. We may disclose information where reasonably necessary to investigate unlawful activity, protect rights or address a security threat, as permitted by law."
      },
      {
        "t": "p",
        "text": "If the business is acquired, reorganized or transferred, relevant information may be disclosed in connection with that transaction, subject to applicable confidentiality, notice and data-protection requirements. A business transfer does not remove existing legal protections or authorize incompatible uses of information."
      }
    ]
  },
  {
    "h": "6. Cookies, analytics and advertising choices",
    "blocks": [
      {
        "t": "p",
        "text": "Cookies and similar technologies can support account sessions, security, saved preferences and analytics. Google Analytics may use browser storage, cookies or similar identifiers to measure interactions. The precise technologies, duration and data collected depend on the configuration."
      },
      {
        "t": "p",
        "text": "Where the law requires consent for non-essential technologies, those technologies must remain disabled until valid consent is obtained, and the consent mechanism must let you change your choice. Browser settings can restrict or delete cookies, although essential functionality may be affected. An opt-out from email marketing does not itself change analytics or cookie settings."
      },
      {
        "t": "p",
        "text": "We do not sell personal information, and we do not share it for cross-context behavioral advertising or targeted advertising."
      }
    ]
  },
  {
    "h": "7. Customer app data and end user requests",
    "blocks": [
      {
        "t": "p",
        "text": "Customer App owners choose the content, settings, audience, integrations and data collection for their apps. They must provide their own notices and obtain any required permissions. We process information on their instructions to provide the selected functionality, subject to applicable written processing terms and legal requirements."
      },
      {
        "t": "p",
        "text": "If you use a Customer App and want to access, correct or delete information, contact its owner using the details in that app’s privacy notice. If you contact us, identify the app and the nature of the request. Where we act as a processor, we will direct the request to the customer or assist it in accordance with our agreement and applicable law, rather than independently changing information without authority."
      },
      {
        "t": "p",
        "text": "We may separately process limited technical, account or security information for our own responsibilities. A request relating to that processing can be addressed directly to [info@mobappcreator.com](mailto:info@mobappcreator.com)."
      },
      {
        "t": "p",
        "text": "Customer-enabled integrations are distinct from the platform providers listed above. The app owner must explain disclosures to services it independently connects, including any AI service it chooses to embed or link."
      }
    ]
  },
  {
    "h": "8. AI services",
    "blocks": [
      {
        "t": "p",
        "text": "MobAppCreator does not send personal information or Customer App Data to external AI services. This statement concerns MobAppCreator’s handling of data; it does not describe a third-party service that a customer independently connects to its app. Review that customer’s notice for the connected service’s practices."
      },
      {
        "t": "p",
        "text": "If we introduce a feature that would change this practice, we will provide the relevant disclosure and obtain any consent or authorization required before that processing begins."
      }
    ]
  },
  {
    "h": "9. How long information is kept",
    "blocks": [
      {
        "t": "p",
        "text": "Retention depends on the information and its purpose. We consider whether an account or subscription remains active, what information is needed to deliver the selected functionality, support requirements, legal recordkeeping periods, unresolved disputes, security risks and applicable processing instructions."
      },
      {
        "t": "p",
        "text": "Account and service information is kept while needed to administer the relationship, and afterward only where a continuing purpose or legal requirement justifies retention. Billing and transaction records may be kept for legally required accounting and tax periods. Support correspondence and security logs are kept for the period reasonably needed to handle the issue, protect systems and address related claims."
      },
      {
        "t": "p",
        "text": "Customer App Data is handled under the relevant customer instructions and applicable processing agreement, including its return or deletion provisions. Ending a subscription does not by itself erase records we must legally retain or information controlled independently by third parties. Where deletion is required, restricted backup copies may remain until they expire through the applicable backup rotation, unless a legal requirement requires longer retention."
      },
      {
        "t": "p",
        "text": "Contact us for information about retention relevant to your account or request. Specific retention and backup settings must be consistent with these criteria and the applicable customer agreement."
      }
    ]
  },
  {
    "h": "10. Security",
    "blocks": [
      {
        "t": "p",
        "text": "We use safeguards appropriate to the nature of the information and the risks of processing, including controls intended to limit access to authorized people and protect operation of the Services. No internet service or storage system can be guaranteed completely secure."
      },
      {
        "t": "p",
        "text": "You can help by protecting credentials, reviewing collaborator access and promptly reporting suspected misuse. Please report a suspected security issue to [info@mobappcreator.com](mailto:info@mobappcreator.com) without including unnecessary sensitive information. We will provide notices of a personal-data breach when applicable law or our processing agreement requires them."
      }
    ]
  },
  {
    "h": "11. International processing",
    "blocks": [
      {
        "t": "p",
        "text": "MobApp Labs LLC is based in Florida, United States. Information may be processed in the United States and other locations used by our service providers. These countries may have different privacy laws from your own."
      },
      {
        "t": "p",
        "text": "Where applicable law restricts an international transfer, the transfer must use a valid legal mechanism, such as an applicable adequacy decision or appropriate contractual safeguards, together with supplementary measures where required. Contact [info@mobappcreator.com](mailto:info@mobappcreator.com) to ask about the arrangements relevant to your information or to request a copy or description of applicable safeguards, subject to permitted redactions."
      },
      {
        "t": "p",
        "text": "We do not rely on your reading this Policy as blanket consent to international transfers. We do not claim participation in a data-transfer certification framework unless that participation has been verified."
      }
    ]
  },
  {
    "h": "12. Your privacy rights and choices",
    "blocks": [
      {
        "t": "p",
        "text": "Depending on the law that applies to you and subject to its exceptions, you may have rights to:"
      },
      {
        "t": "ul",
        "items": [
          "Obtain information about processing and access your personal information.",
          "Correct inaccurate information or request deletion.",
          "Obtain a portable copy where applicable.",
          "Restrict processing or withdraw consent for future processing based on consent.",
          "Object to processing based on legitimate interests, taking account of your circumstances.",
          "Object at any time to use of your personal information for direct marketing.",
          "Opt out of a sale, targeted advertising, legally defined sharing or certain profiling where applicable.",
          "Appeal a rights-request decision where the applicable law provides an appeal right.",
          "Complain to a competent data-protection authority, including in your place of residence or work where applicable."
        ]
      },
      {
        "t": "p",
        "text": "To submit a request, email [info@mobappcreator.com](mailto:info@mobappcreator.com). Explain the request and the account or app involved. We may request proportionate information to verify identity or an authorized agent’s authority. Do not send government identification or sensitive documents unless we specifically request an appropriate verification method."
      },
      {
        "t": "p",
        "text": "We will respond within the period required by the applicable law, explain a refusal or permitted extension when required and provide an available appeal process. We will not discriminate against you for exercising a protected privacy right. Some information may need to be retained for legal obligations or another applicable exception."
      },
      {
        "t": "p",
        "text": "You may unsubscribe from promotional emails using the message’s unsubscribe option or by contacting us. Essential service, billing and security messages may continue while relevant to your account."
      }
    ]
  },
  {
    "h": "13. Children",
    "blocks": [
      {
        "t": "p",
        "text": "Our app-building platform is intended for adult account holders and is not directed to children under 18. If you believe a child has provided account information without appropriate authorization, contact us so we can investigate and take appropriate action."
      },
      {
        "t": "p",
        "text": "Customer Apps may serve different audiences. Their owners must evaluate children’s privacy requirements, provide appropriate notices and obtain legally required parental authorization before using the platform to collect children’s information. Do not assume an app is suitable for children merely because it was created with MobAppCreator."
      }
    ]
  },
  {
    "h": "14. Changes and contact",
    "blocks": [
      {
        "t": "p",
        "text": "We may update this Policy as our practices or legal requirements change. We will update the effective date and provide an appropriate notice of material changes. Where required, we will obtain new consent or authorization before using information in a materially different way. An update does not retroactively remove protections that apply to information already collected."
      },
      {
        "t": "p",
        "text": "Contact for privacy requests and questions:"
      },
      {
        "t": "contact"
      }
    ]
  }
];
