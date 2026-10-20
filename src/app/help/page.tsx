import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import { HelpSearch } from "@/components/help/HelpSearch";
import { Icon } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import { Container, Section } from "@/components/ui";
import { breadcrumbSchema } from "@/lib/schema";
import { articleHref, articlesIn, helpArticles, helpCategories, popularArticles, searchEntries } from "@/lib/help";

export const metadata: Metadata = pageMeta({
  title: "Help Center",
  description:
    "Step-by-step guides for building, publishing and growing your app with MobAppCreator: App Store and Google Play publishing, push notifications, eCommerce and more.",
  path: "/help/",
});

export default function HelpHome() {
  const popular = popularArticles
    .map((slug) => helpArticles.find((a) => a.slug === slug))
    .filter((a) => a !== undefined);

  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Help Center", path: "/help/" }])} />
      <section className="relative pt-32 pb-16 text-center sm:pt-40 sm:pb-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-[420px] opacity-[0.10] blur-[80px]"
          style={{
            background:
              "radial-gradient(closest-side at 30% 50%, var(--sky), transparent), radial-gradient(closest-side at 70% 50%, var(--magenta), transparent)",
          }}
        />
        <Container className="relative">
          <p className="eyebrow">Help Center</p>
          <h1 className="display mx-auto mt-4 max-w-3xl">How can we help?</h1>
          <p className="lede mx-auto mt-5 max-w-xl">
            Guides for building, publishing and growing your app. {helpArticles.length} articles in{" "}
            {helpCategories.length} topics.
          </p>
          <div className="mt-10">
            <HelpSearch entries={searchEntries()} />
          </div>
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <h2 className="sr-only">Topics</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {helpCategories.map((c) => {
              const count = articlesIn(c.slug).length;
              return (
                <Link
                  key={c.slug}
                  href={`/help/${c.slug}/`}
                  className="group flex flex-col rounded-[24px] bg-bg-alt p-6 transition hover:-translate-y-0.5 hover:shadow-[var(--shadow)]"
                >
                  <span
                    className="grid h-11 w-11 place-items-center rounded-[13px]"
                    style={{ background: `color-mix(in srgb, ${c.color} 16%, transparent)`, color: c.color }}
                  >
                    <Icon name={c.icon} size={22} strokeWidth={1.9} />
                  </span>
                  <h3 className="mt-5 text-[18px] font-semibold tracking-tight">{c.title}</h3>
                  <p className="mt-1.5 flex-1 text-[14.5px] leading-relaxed text-fg-2">{c.description}</p>
                  <p className="mt-4 flex items-center gap-1 text-[14px] font-medium text-link">
                    {count} {count === 1 ? "article" : "articles"}
                    <Icon name="chevron" size={13} strokeWidth={2.4} className="transition group-hover:translate-x-0.5" />
                  </p>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      <Section alt>
        <Container className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="title">Popular articles</h2>
            <ul className="mt-6 divide-y divide-line border-y border-line">
              {popular.map((a) => (
                <li key={a.slug}>
                  <Link href={articleHref(a)} className="group flex items-center justify-between gap-4 py-4">
                    <span className="flex items-center gap-3 text-[17px] text-fg">
                      <span className="text-fg-3">
                        <Icon name="book" size={19} />
                      </span>
                      <span className="group-hover:underline">{a.title}</span>
                    </span>
                    <Icon name="chevron" size={16} className="shrink-0 text-fg-3" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="self-start rounded-[28px] bg-card p-8 shadow-[var(--shadow)]">
            <h2 className="title">Still need help?</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-fg-2">
              Our team helps you build and publish your app, in English and Spanish.
            </p>
            <Link
              href="/contact/"
              className="mt-6 inline-flex h-11 items-center rounded-full bg-ink px-6 text-[15px] font-medium text-on-ink transition hover:opacity-85"
            >
              Contact support
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
