import { faqs, testimonials } from "@/lib/content";
import { site } from "@/lib/site";
import { Icon } from "./Icon";
import { BrandBar, Button, Container, SampleTag, Section } from "./ui";

export function CtaSection({
  title = "Your app could be live this week.",
  lede = `Try every feature free for ${site.trialDays} days. No credit card required.`,
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
          <a className="text-link hover:underline" href={site.helpUrl}>
            help center
          </a>
          .
        </p>
      </Container>
    </Section>
  );
}

export function Testimonials() {
  return (
    <Section alt>
      <Container>
        <h2 className="headline reveal text-center">
          Loved by businesses
          <br className="hidden sm:block" /> of every size.
          <SampleTag />
        </h2>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="reveal flex flex-col rounded-[24px] bg-card p-7 shadow-[var(--shadow)]"
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <blockquote className="flex-1 text-[19px] leading-snug tracking-tight">“{t.quote}”</blockquote>
              <figcaption className="mt-6 text-[14px]">
                <span className="font-semibold">{t.name}</span>
                <span className="block text-fg-2">{t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </Section>
  );
}
