import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ShowcaseGallery } from "@/components/ShowcaseGallery";
import { CtaSection } from "@/components/sections";
import { Container, PageHero } from "@/components/ui";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";
import { showcaseApps, showcaseCategories } from "@/lib/showcase";

export const metadata: Metadata = pageMeta({
  title: "Showcase: Apps Made with MobAppCreator",
  description: `See ${showcaseApps.length} real mobile apps built with MobAppCreator by unions, radio stations, churches, cooperatives, events and local businesses, on iPhone and Android.`,
  path: "/showcase/",
});

const itemList = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Apps made with MobAppCreator",
  numberOfItems: showcaseApps.length,
  itemListElement: showcaseApps.map((a, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "MobileApplication",
      name: a.name,
      applicationCategory: a.category,
      description: a.description,
      operatingSystem: [a.ios && "iOS", a.android && "Android"].filter(Boolean).join(", "),
    },
  })),
};

export default function ShowcasePage() {
  return (
    <>
      <JsonLd data={[itemList, breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Showcase", path: "/showcase/" }])]} />
      <PageHero
        eyebrow="Showcase"
        title="Made with MobAppCreator."
        lede={`${showcaseApps.length} apps live on the App Store and Google Play, built by unions, radio stations, churches, cooperatives, event organizers and local businesses.`}
      />
      <section className="pb-24">
        <Container className="max-w-[1200px]">
          <ShowcaseGallery apps={showcaseApps} categories={showcaseCategories} />
        </Container>
      </section>
      <CtaSection title="Your app could be next." />
    </>
  );
}
