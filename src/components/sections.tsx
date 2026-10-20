import { faqs } from "@/lib/content";
import { trustedApps } from "@/lib/showcase";
import { site } from "@/lib/site";
import { Icon } from "./Icon";
import { BrandBar, Button, Container, Section } from "./ui";

export function CtaSection({
  title = "Your app could be live this week.",
  lede = `Try MobAppCreator free for ${site.trialDays} days. No credit card required.`,
}: {
  title?: string;
  lede?: string;
}) {
  return (
    <Section>
      <Container>
        <div className="reveal relative overflow-hidden rounded-[32px] bg-bg-alt px-6 py-16 text-center sm:px-12 sm:py-24">
          <BrandBar className="absolute inset-x-0 top-0 !h-1.5 !gap-0 [&>span]:rounded-none" />
          <h2 className="headline mx-auto max-w-3xl">{title}</h2>
          <p className="lede mx-auto mt-5 max-w-xl">{lede}</p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Button href={site.signupUrl} size="lg">
              Start free trial
            </Button>
            <Button href="/pricing/" variant="link">
              Compare plans
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export function Faq({ items = faqs, title = "Questions? Answers." }: { items?: typeof faqs; title?: string }) {
  return (
    <Section>
      <Container className="max-w-[820px]">
        <h2 className="headline reveal text-center">{title}</h2>
        <div className="reveal mt-12 divide-y divide-line border-y border-line">
          {items.map((f) => (
            <details key={f.q} className="group py-1">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-[19px] font-semibold tracking-tight [&::-webkit-details-marker]:hidden">
                {f.q}
                <span className="shrink-0 text-fg-3 transition-transform duration-300 group-open:rotate-45">
                  <Icon name="plus" size={22} />
                </span>
              </summary>
              <p className="pb-6 pr-10 text-[17px] leading-relaxed text-fg-2">{f.a}</p>
            </details>
          ))}
        </div>
        <p className="mt-8 text-center text-[15px] text-fg-2">
          More questions? Visit the{" "}
          <a className="text-link underline underline-offset-[3px]" href={site.helpUrl}>
            help center
          </a>
          .
        </p>
      </Container>
    </Section>
  );
}

export function TrustedBy() {
  return (
    <Section alt>
      <Container>
        <div className="reveal mx-auto max-w-3xl text-center">
          <p className="eyebrow">Trusted by</p>
          <h2 className="headline mt-3">Organizations that run their app on MobAppCreator.</h2>
          <p className="lede mt-5">Unions, radio stations, churches, cooperatives, events and local businesses.</p>
        </div>
        <ul className="reveal mx-auto mt-14 grid max-w-5xl grid-cols-3 gap-x-4 gap-y-8 sm:grid-cols-4 md:grid-cols-6">
          {trustedApps.map((a) => (
            <li key={a.slug} className="flex flex-col items-center text-center">
                            <img
                src={`/showcase/icons/${a.slug}.webp`}
                alt=""
                width={64}
                height={64}
                loading="lazy"
                decoding="async"
                className="h-16 w-16 rounded-[16px] bg-white shadow-[var(--shadow)] ring-1 ring-line"
              />
              <span className="mt-2.5 line-clamp-2 text-[13px] leading-snug text-fg-2">{a.name}</span>
            </li>
          ))}
        </ul>
        <div className="reveal mt-12 text-center">
          <Button href="/showcase/" variant="link">
            See all apps
          </Button>
        </div>
      </Container>
    </Section>
  );
}
