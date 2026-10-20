import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { faqSchema, softwareSchema } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";
import { Icon } from "@/components/Icon";
import { PhoneMockup } from "@/components/PhoneMockup";
import { CtaSection, Faq, TrustedBy } from "@/components/sections";
import { Button, Container, Section } from "@/components/ui";
import { features, industries, stats, statsSource, steps } from "@/lib/content";
import { businessPlans } from "@/lib/pricing";
import { featuredShowcase } from "@/lib/showcase";
import { ShowcaseCard } from "@/components/ShowcaseCard";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  ...pageMeta({
    title: "MobAppCreator: No-Code App Builder for iPhone & Android",
    description:
      "Build, publish and grow native iPhone, iPad and Android apps without code. For small businesses, entrepreneurs and agencies. 14-day free trial, no credit card.",
    path: "/",
  }),
};

export default function Home() {
  return (
    <>
      <JsonLd data={[softwareSchema, faqSchema]} />
      {/* ---------- Hero ---------- */}
      <section className="relative overflow-hidden pt-32 sm:pt-40">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-[-12%] h-[620px] w-[1100px] -translate-x-1/2 opacity-[0.16] blur-[90px]"
          style={{
            background:
              "radial-gradient(closest-side at 25% 50%, var(--sky), transparent), radial-gradient(closest-side at 50% 40%, var(--magenta), transparent), radial-gradient(closest-side at 75% 55%, var(--orange), transparent), radial-gradient(closest-side at 55% 80%, var(--lime), transparent)",
          }}
        />
        <Container className="relative text-center">
          <p className="eyebrow">No-code app builder</p>
          <h1 className="display mx-auto mt-4 max-w-4xl">
            Build your app.
            <br />
            <span className="brand-gradient-text">No code required.</span>
          </h1>
          <p className="lede mx-auto mt-6 max-w-2xl">
            Create, publish and grow native apps for iPhone, iPad and Android. Made for small businesses,
            entrepreneurs and agencies.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
            <Button href={site.signupUrl} size="lg">
              Start your free trial
            </Button>
            <Button href="#how-it-works" variant="link">
              See how it works
            </Button>
          </div>
          <p className="mt-4 text-[13px] text-fg-3">{site.trialDays} days free · No credit card required · Cancel anytime</p>

          <div className="relative mx-auto mt-16 flex h-[430px] max-w-[760px] items-end justify-center sm:h-[560px]">
            <div className="absolute bottom-0 left-[4%] hidden origin-bottom -rotate-6 scale-[0.86] opacity-95 sm:block md:left-[10%]">
              <PhoneMockup variant="push" appName="Pulse Fitness" accent="var(--magenta)" />
            </div>
            <div className="absolute bottom-0 right-[4%] hidden origin-bottom rotate-6 scale-[0.86] opacity-95 sm:block md:right-[10%]">
              <PhoneMockup variant="radio" appName="Radio Sur 98.5" subtitle="Live from Buenos Aires" accent="var(--sky)" />
            </div>
            <PhoneMockup className="relative z-10 scale-[0.82] origin-bottom sm:scale-100" />
          </div>
        </Container>
      </section>

      {/* ---------- Platforms ---------- */}
      <div className="border-y border-line">
        <Container className="flex flex-col items-center justify-center gap-4 py-7 text-[15px] text-fg-2 sm:flex-row sm:gap-10">
          <span>Native apps for</span>
          <span className="flex items-center gap-8 font-medium text-fg">
            <span className="flex items-center gap-2"><Icon name="phone" size={20} /> iPhone</span>
            <span className="flex items-center gap-2"><Icon name="tablet" size={20} /> iPad</span>
            <span className="flex items-center gap-2"><Icon name="android" size={20} /> Android</span>
          </span>
        </Container>
      </div>

      {/* ---------- How it works ---------- */}
      <Section id="how-it-works">
        <Container>
          <div className="reveal mx-auto max-w-3xl text-center">
            <p className="eyebrow">How it works</p>
            <h2 className="headline mt-3">From idea to the App Store in three steps.</h2>
          </div>
          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {steps.map((s, i) => (
              <div
                key={s.title}
                className="reveal rounded-[28px] bg-bg-alt p-8"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl text-white" style={{ background: s.color }}>
                    <Icon name={s.icon} size={24} strokeWidth={1.9} />
                  </span>
                  <span className="text-[44px] font-bold leading-none text-line">{i + 1}</span>
                </div>
                <h3 className="title mt-8">{s.title}</h3>
                <p className="mt-1 text-[17px] font-medium">{s.lead}</p>
                <p className="mt-3 text-[16px] leading-relaxed text-fg-2">{s.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---------- Feature bento ---------- */}
      <Section alt>
        <Container>
          <div className="reveal mx-auto max-w-3xl text-center">
            <p className="eyebrow">Features</p>
            <h2 className="headline mt-3">Everything your app needs. Already built.</h2>
            <p className="lede mt-5">Pick the modules you want. Add more any time.</p>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            <div className="reveal flex flex-col overflow-hidden rounded-[28px] bg-card shadow-[var(--shadow)]">
              <div className="p-8 sm:p-10">
                <h3 className="title">Push notifications that bring people back.</h3>
                <p className="mt-3 max-w-md text-[17px] leading-relaxed text-fg-2">
                  Reach every customer instantly, for free. Schedule campaigns, add images and keep messages in an
                  in-app inbox.
                </p>
              </div>
              <div className="mt-auto flex h-[320px] items-start justify-center">
                <PhoneMockup variant="push" appName="Pulse Fitness" accent="var(--magenta)" className="mt-2 shrink-0" />
              </div>
            </div>
            <div className="reveal flex flex-col overflow-hidden rounded-[28px] bg-card shadow-[var(--shadow)]" style={{ transitionDelay: "100ms" }}>
              <div className="p-8 sm:p-10">
                <h3 className="title">Sell, book and stream. Right in the app.</h3>
                <p className="mt-3 max-w-md text-[17px] leading-relaxed text-fg-2">
                  Ecommerce, forms and bookings, radio and video streaming, all ready to switch on.
                </p>
              </div>
              <div className="mt-auto flex h-[320px] items-start justify-center">
                <PhoneMockup className="mt-2 shrink-0" />
              </div>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.slice(2, 10).map((f, i) => (
              <div
                key={f.title}
                className="reveal rounded-[24px] bg-card p-6 shadow-[var(--shadow)]"
                style={{ transitionDelay: `${(i % 4) * 70}ms` }}
              >
                <span style={{ color: f.color }}>
                  <Icon name={f.icon} size={28} />
                </span>
                <h3 className="mt-4 text-[17px] font-semibold">{f.title}</h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-fg-2">{f.body}</p>
              </div>
            ))}
          </div>
          <div className="reveal mt-10 text-center">
            <Button href="/features/" variant="link">
              Explore all features
            </Button>
          </div>
        </Container>
      </Section>

      {/* ---------- Industries ---------- */}
      <Section>
        <Container>
          <div className="reveal mx-auto max-w-3xl text-center">
            <p className="eyebrow">Made for every business</p>
            <h2 className="headline mt-3">Whatever you do, there’s an app for that. Yours.</h2>
          </div>
          <ul className="reveal mx-auto mt-12 flex max-w-4xl flex-wrap justify-center gap-2.5">
            {industries.map((name, i) => (
              <li
                key={name}
                className="rounded-full border border-line px-4 py-2 text-[15px] text-fg-2"
                style={i === industries.length - 1 ? { borderColor: "var(--fg)", color: "var(--fg)", fontWeight: 600 } : undefined}
              >
                {name}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* ---------- Showcase ---------- */}
      <Section alt>
        <Container className="max-w-[1200px]">
          <div className="reveal mx-auto max-w-3xl text-center">
            <p className="eyebrow">Showcase</p>
            <h2 className="headline mt-3">Real apps. Live on the stores.</h2>
            <p className="lede mt-5">
              Apps built with MobAppCreator, from radio stations and churches to events and local
              services.
            </p>
          </div>
          <div className="reveal mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredShowcase.map((a) => (
              <ShowcaseCard key={a.slug} app={a} />
            ))}
          </div>
          <div className="reveal mt-10 text-center">
            <Button href="/showcase/" variant="link">
              See all apps
            </Button>
          </div>
        </Container>
      </Section>

      {/* ---------- Stats ---------- */}
      <section className="border-y border-line">
        <Container className="grid grid-cols-2 gap-y-10 py-16 md:grid-cols-4">
          {stats.map((s, i) => (
            <div key={s.label} className="reveal text-center" style={{ transitionDelay: `${i * 80}ms` }}>
              <p className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-tight">{s.value}</p>
              <p className="mt-1 text-[15px] text-fg-2">{s.label}</p>
            </div>
          ))}
          <p className="col-span-2 text-center text-[13px] text-fg-3 md:col-span-4">{statsSource}</p>
        </Container>
      </section>

      {/* ---------- Agencies ---------- */}
      <Section>
        <Container>
          <div className="reveal grid overflow-hidden rounded-[32px] bg-[#0f1615] text-white lg:grid-cols-[1.15fr_1fr]">
            <div className="p-8 sm:p-14">
              <p className="text-[13px] font-semibold uppercase tracking-[0.08em] text-white/55">For agencies</p>
              <h2 className="headline mt-3">Sell apps to your clients. Under your brand.</h2>
              <p className="mt-5 text-[18px] leading-relaxed text-white/70">
                Add mobile apps to your services without hiring developers. Your logo, your domain, your prices.
              </p>
              <ul className="mt-8 space-y-3 text-[16px]">
                {[
                  "White label dashboard and frontend",
                  "Custom domain and SSL",
                  "Bill clients with your own Stripe account",
                  "Onboarding and technical training included",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-3">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-white/10 text-lime">
                      <Icon name="check" size={14} strokeWidth={2.6} />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex flex-wrap items-center gap-5">
                <Link
                  href="/pricing/?plan=agency"
                  className="inline-flex h-12 items-center rounded-full bg-white px-7 text-[17px] font-medium text-black transition hover:opacity-85"
                >
                  See agency plans
                </Link>
                <span className="text-[15px] text-white/60">From USD 199/mo</span>
              </div>
            </div>
            <div className="relative hidden min-h-[420px] items-center justify-center lg:flex">
              <div aria-hidden className="absolute inset-0 grid grid-cols-2 gap-px opacity-[0.12]">
                <span className="bg-sky" />
                <span className="bg-magenta" />
                <span className="bg-lime" />
                <span className="bg-orange" />
              </div>
              <div className="relative grid grid-cols-2 gap-4 p-10">
                {[
                  ["Client: La Parrilla", "var(--orange)", "Live"],
                  ["Client: Pulse Fitness", "var(--magenta)", "Live"],
                  ["Client: Costa Azul", "var(--sky)", "In review"],
                  ["Client: Green Valley", "var(--lime)", "Draft"],
                ].map(([name, color, status]) => (
                  <div key={name} className="w-[170px] rounded-2xl bg-white/[0.07] p-4 ring-1 ring-white/10 backdrop-blur">
                    <span className="block h-10 w-10 rounded-xl" style={{ background: color }} />
                    <p className="mt-4 text-[13px] font-semibold">{name.replace("Client: ", "")}</p>
                    <p className="mt-0.5 text-[12px] text-white/55">{status}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <TrustedBy />

      {/* ---------- Pricing teaser ---------- */}
      <Section>
        <Container>
          <div className="reveal mx-auto max-w-3xl text-center">
            <p className="eyebrow">Pricing</p>
            <h2 className="headline mt-3">Plans for every project.</h2>
            <p className="lede mt-5">No credit card required. Cancel online at any time.</p>
          </div>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {businessPlans.plans.map((p, i) => (
              <Link
                key={p.id}
                href="/pricing/"
                className={`reveal group relative rounded-[24px] p-7 transition hover:-translate-y-1 ${
                  p.recommended ? "bg-ink text-on-ink" : "bg-bg-alt"
                }`}
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                {p.recommended && (
                  <span className="absolute right-5 top-5 rounded-full bg-on-ink/15 px-2.5 py-1 text-[11px] font-semibold">
                    Popular
                  </span>
                )}
                <h3 className="text-[19px] font-semibold">{p.name}</h3>
                <p className={`mt-1 text-[14px] ${p.recommended ? "opacity-70" : "text-fg-2"}`}>{p.blurb}</p>
                <p className="mt-6">
                  <span className="text-[40px] font-bold tracking-tight">${p.monthly}</span>
                  <span className={`text-[15px] ${p.recommended ? "opacity-70" : "text-fg-2"}`}>/mo</span>
                </p>
                <span className={`mt-5 inline-flex items-center gap-1 text-[15px] font-medium ${p.recommended ? "" : "text-link"}`}>
                  Compare plans <Icon name="chevron" size={14} strokeWidth={2.4} />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Faq />
      <CtaSection />
    </>
  );
}
