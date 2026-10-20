import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/help/Breadcrumb";
import { HelpSearch } from "@/components/help/HelpSearch";
import { Icon } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import { Container } from "@/components/ui";
import { categoryMeta } from "@/lib/help-seo";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";
import { articleHref, articlesIn, getCategory, helpCategories, searchEntries } from "@/lib/help";

export const dynamicParams = false;

export function generateStaticParams() {
  return helpCategories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params;
  const c = getCategory(category);
  if (!c) return {};
  const m = categoryMeta[c.slug];
  return pageMeta({ title: m?.title ?? c.title, description: m?.description ?? c.description, path: `/help/${c.slug}/` });
}

export default async function HelpCategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const c = getCategory(category);
  if (!c) notFound();
  const articles = articlesIn(c.slug);

  return (
    <div className="pt-28 pb-28 sm:pt-32">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Help Center", path: "/help/" },
          { name: c.title, path: `/help/${c.slug}/` },
        ])}
      />
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <Breadcrumb items={[{ label: "Help Center", href: "/help/" }, { label: c.title }]} />
          <div className="sm:w-[360px]">
            <HelpSearch entries={searchEntries()} />
          </div>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-[240px_1fr]">
          <aside className="order-2 lg:order-1">
            <h2 className="eyebrow mb-3">Topics</h2>
            <ul className="space-y-0.5">
              {helpCategories.map((t) => (
                <li key={t.slug}>
                  <Link
                    href={`/help/${t.slug}/`}
                    aria-current={t.slug === c.slug ? "page" : undefined}
                    className={`flex items-center gap-2.5 rounded-[10px] px-3 py-2 text-[15px] transition ${
                      t.slug === c.slug ? "bg-bg-alt font-semibold text-fg" : "text-fg-2 hover:bg-bg-alt hover:text-fg"
                    }`}
                  >
                    <span style={{ color: t.color }}>
                      <Icon name={t.icon} size={17} strokeWidth={1.9} />
                    </span>
                    {t.title}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>

          <div className="order-1 min-w-0 lg:order-2">
            <span
              className="grid h-14 w-14 place-items-center rounded-[16px]"
              style={{ background: `color-mix(in srgb, ${c.color} 16%, transparent)`, color: c.color }}
            >
              <Icon name={c.icon} size={28} strokeWidth={1.8} />
            </span>
            <h1 className="headline mt-6">{c.title}</h1>
            <p className="lede mt-3">{c.description}</p>
            <p className="mt-2 text-[14px] text-fg-3">
              {articles.length} {articles.length === 1 ? "article" : "articles"}
            </p>

            <ul className="mt-10 divide-y divide-line overflow-hidden rounded-[24px] ring-1 ring-line">
              {articles.map((a) => (
                <li key={a.slug}>
                  <Link href={articleHref(a)} className="group flex items-center gap-5 px-6 py-5 transition hover:bg-bg-alt">
                    <div className="min-w-0 flex-1">
                      <h2 className="text-[18px] font-semibold tracking-tight text-fg">{a.title}</h2>
                      <p className="mt-1 text-[15px] text-fg-2">{a.description}</p>
                    </div>
                    <Icon
                      name="chevron"
                      size={18}
                      className="shrink-0 text-fg-3 transition group-hover:translate-x-0.5 group-hover:text-fg"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
}
