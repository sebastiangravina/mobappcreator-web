import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { Icon } from "@/components/Icon";
import { PhoneMockup } from "@/components/PhoneMockup";
import { CtaSection } from "@/components/sections";
import { Button, Container, PageHero, Section } from "@/components/ui";
import { features } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Features: Push, eCommerce, Streaming and More",
  description:
    "Push notifications, an eCommerce shop, forms, radio and video streaming, AdMob ads, analytics and more. Every module your app needs, ready to switch on.",
  path: "/features/",
});

const spotlights = [
  {
    eyebrow: "Engage",
    title: "Talk to every customer. Instantly.",
    body: "Unlimited push notifications with images and links, scheduled campaigns and an in-app inbox so no message is lost.",
    points: ["Rich push notifications", "Notification inbox", "Scheduling and segments"],
    phone: { variant: "push" as const, appName: "Pulse Fitness", accent: "var(--magenta)" },
  },
  {
    eyebrow: "Sell",
    title: "A store in every pocket.",
    body: "Show your catalog, take orders and bookings, and get paid. Customers reorder in two taps.",
    points: ["Ecommerce shop", "Booking and order forms", "Offers and loyalty"],
    phone: { variant: "home" as const, appName: "La Parrilla", accent: "var(--orange)" },
  },
  {
    eyebrow: "Stream",
    title: "Your station, always on.",
    body: "Live radio that keeps playing with the screen locked, plus video from your channel or live events.",
    points: ["Radio streaming", "Video streaming", "Podcasts and playlists"],
    phone: { variant: "radio" as const, appName: "Radio Sur 98.5", accent: "var(--sky)", subtitle: "Live from Buenos Aires" },
  },
];

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        eyebrow="Features"
        title={
          <>
            Powerful modules.
            <br />
            <span className="brand-gradient-text">Zero code.</span>
          </>
        }
        lede="Everything you need to build an app people use, ready to switch on from your dashboard."
      >
        <Button href={site.signupUrl} size="lg">
          Start free trial
        </Button>
      </PageHero>

      {spotlights.map((s, i) => (
        <Section key={s.title} alt={i % 2 === 0}>
          <Container className={`grid items-center gap-14 lg:grid-cols-2 ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
            <div className="reveal">
              <p className="eyebrow">{s.eyebrow}</p>
              <h2 className="headline mt-3">{s.title}</h2>
              <p className="lede mt-5">{s.body}</p>
              <ul className="mt-8 space-y-3 text-[17px]">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-3">
                    <span className="text-lime">
                      <Icon name="check" size={20} strokeWidth={2.4} />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="reveal flex justify-center">
              <PhoneMockup {...s.phone} className="animate-float" />
            </div>
          </Container>
        </Section>
      ))}

      <Section>
        <Container>
          <h2 className="headline reveal text-center">And everything else.</h2>
          <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="reveal flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[14px] text-white" style={{ background: f.color }}>
                  <Icon name={f.icon} size={22} strokeWidth={1.9} />
                </span>
                <div>
                  <h3 className="text-[18px] font-semibold">{f.title}</h3>
                  <p className="mt-1 text-[15px] leading-relaxed text-fg-2">{f.body}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <CtaSection />
    </>
  );
}
