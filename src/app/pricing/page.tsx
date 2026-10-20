import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Pricing } from "@/components/Pricing";
import { breadcrumbSchema, softwareSchema } from "@/lib/schema";
import { CtaSection, Faq } from "@/components/sections";
import { Container, PageHero } from "@/components/ui";
import { pricingNotes } from "@/lib/pricing";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Pricing: Plans for Businesses and Agencies",
  description:
    "Compare MobAppCreator plans for businesses from USD 29/mo and agency white label plans from USD 199/mo. 14-day free trial, no credit card required.",
  path: "/pricing/",
});

export default function PricingPage() {
  return (
    <>
      <JsonLd data={[softwareSchema, breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Pricing", path: "/pricing/" }])]} />
      <PageHero
        eyebrow="Pricing"
        title="Simple plans. Serious apps."
        lede={`Start free for ${site.trialDays} days. No credit card required. Cancel online at any time.`}
      />
      <section className="pb-24">
        <Container className="max-w-[1200px]">
          <Pricing />
          <ul className="mx-auto mt-12 max-w-3xl space-y-2 text-[13px] leading-relaxed text-fg-3">
            {pricingNotes.map((n, i) => (
              <li key={i}>
                <sup>{i + 1}</sup> {n}
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <Faq title="Pricing questions" />
      <CtaSection title="Try it before you pay." />
    </>
  );
}
