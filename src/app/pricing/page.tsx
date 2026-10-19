import type { Metadata } from "next";
import { Pricing } from "@/components/Pricing";
import { CtaSection, Faq } from "@/components/sections";
import { Container, PageHero } from "@/components/ui";
import { pricingNotes } from "@/lib/pricing";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Simple plans for businesses and agencies. Start with a 14-day free trial, cancel anytime.",
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Simple plans. Serious apps."
        lede={`Start free for ${site.trialDays} days. No commitments. Cancel online at any time.`}
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
