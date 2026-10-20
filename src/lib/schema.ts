// schema.org structured data. Only facts that are on the site; no ratings or reviews.
import { faqs } from "./content";
import { agencyPlans, businessPlans } from "./pricing";
import { absoluteUrl } from "./seo";
import { site } from "./site";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": absoluteUrl("/#organization"),
  name: site.name,
  legalName: "MobApp Labs LLC",
  url: site.url,
  logo: absoluteUrl("/brand/logo-full.png"),
  sameAs: [site.social.twitter, site.social.youtube],
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "1900 N Bayshore Dr",
      addressLocality: "Miami",
      addressRegion: "FL",
      postalCode: "33132",
      addressCountry: "US",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "Tucumán 810",
      addressLocality: "Ciudad Autónoma de Buenos Aires",
      postalCode: "C1049AAR",
      addressCountry: "AR",
    },
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": absoluteUrl("/#website"),
  name: site.name,
  url: site.url,
  inLanguage: "en",
  publisher: { "@id": absoluteUrl("/#organization") },
};

export const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: site.name,
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Web, iOS, Android",
  description: site.description,
  url: site.url,
  publisher: { "@id": absoluteUrl("/#organization") },
  offers: [...businessPlans.plans, ...agencyPlans.plans].map((p) => ({
    "@type": "Offer",
    name: p.name,
    price: p.monthly,
    priceCurrency: "USD",
    url: absoluteUrl("/pricing/"),
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: p.monthly,
      priceCurrency: "USD",
      billingDuration: "P1M",
      unitText: "MONTH",
    },
  })),
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export const breadcrumbSchema = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.name,
    item: absoluteUrl(it.path),
  })),
});

export const articleSchema = (a: { title: string; description: string; path: string; updated: string; image?: string }) => ({
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: a.title,
  description: a.description,
  url: absoluteUrl(a.path),
  mainEntityOfPage: absoluteUrl(a.path),
  dateModified: a.updated,
  inLanguage: "en",
  image: absoluteUrl(a.image ?? "/opengraph-image.png"),
  author: { "@id": absoluteUrl("/#organization") },
  publisher: { "@id": absoluteUrl("/#organization") },
});
