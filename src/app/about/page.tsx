import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { CtaSection } from "@/components/sections";
import { BrandBar, Container, PageHero, Section } from "@/components/ui";
import { stats } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "About Us",
  description:
    "MobAppCreator, by MobApp Labs, makes native mobile apps affordable for every small business. Learn our story and visit our offices in Miami and Buenos Aires.",
  path: "/about/",
});

const values = [
  { title: "Simple first", body: "If it needs a manual, we haven’t finished designing it.", color: "var(--sky)" },
  { title: "Your brand, not ours", body: "Your app carries your name on the stores. Agencies resell under their own.", color: "var(--magenta)" },
  { title: "Real support", body: "People who know the product answer your questions, in English and Spanish.", color: "var(--orange)" },
  { title: "Built to grow", body: "Start with one screen. Scale to an ecommerce app with thousands of users.", color: "var(--lime)" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Apps for everyone. Not just big brands."
        lede="We believe every business deserves its own place on its customers’ home screen."
      />

      <Section alt>
        <Container className="max-w-[820px]">
          <div className="reveal prose-apple">
            <h2 className="!mt-0">Our story</h2>
            <p>
              MobAppCreator is built by MobApp Labs, with offices in Miami and Buenos Aires. For more than a decade our teams
              have worked on one idea: any business should be able to have its own native app for iPhone, iPad and Android,
              without hiring developers.
            </p>
            <p>
              Customers build their app by combining ready-made screens, from news, forms and eCommerce to radio and video
              streaming, and see every change live. Our publishing team then submits the app to the App Store and Google Play
              under the customer’s own brand, and our Pro Services team can design an app or build custom features.
            </p>
            <p>
              So far, {stats[0].value} apps have been created on the platform. Some of them are featured
              in our <a href="/showcase/">showcase</a>, built by unions, radio stations, churches, cooperatives, event organizers
              and local businesses. Agencies use our white label plans to sell apps to their own clients under their brand.
            </p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="headline reveal text-center">What we care about.</h2>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="reveal rounded-[24px] bg-bg-alt p-7">
                <span className="block h-1.5 w-10 rounded-full" style={{ background: v.color }} />
                <h3 className="mt-6 text-[19px] font-semibold">{v.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-fg-2">{v.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section alt>
        <Container>
          <h2 className="headline reveal text-center">Where to find us.</h2>
          <div className="mx-auto mt-14 grid max-w-3xl gap-5 sm:grid-cols-2">
            {site.offices.map((o) => (
              <div key={o.country} className="reveal rounded-[24px] bg-card p-7 shadow-[var(--shadow)]">
                <p className="eyebrow">{o.country}</p>
                <p className="mt-3 text-[18px] font-semibold">{o.company}</p>
                {o.lines.map((l) => (
                  <p key={l} className="text-[15px] text-fg-2">
                    {l}
                  </p>
                ))}
              </div>
            ))}
          </div>
          <BrandBar className="mx-auto mt-16 max-w-[160px]" />
        </Container>
      </Section>

      <CtaSection />
    </>
  );
}
