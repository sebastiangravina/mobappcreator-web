import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleBody, headingsOf } from "@/components/help/ArticleBody";
import { Breadcrumb } from "@/components/help/Breadcrumb";
import { Icon } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import { Container } from "@/components/ui";
import { articleMeta, articleTitleMeta } from "@/lib/help-seo";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";
import { formatDate } from "@/lib/format";
import { articleHref, articlesIn, getArticle, getCategory, helpArticles } from "@/lib/help";
import { helpImages } from "@/lib/help-images";

export const dynamicParams = false;

export function generateStaticParams() {
  return helpArticles.map((a) => ({ category: a.category, slug: a.slug }));
}

type Params = { params: Promise<{ category: string; slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { category, slug } = await params;
  const a = getArticle(category, slug);
  if (!a) return {};
  return pageMeta({ title: articleTitleMeta[a.slug] ?? a.title, description: articleMeta[a.slug] ?? a.description, path: articleHref(a), type: "article" });
}

export default async function HelpArticlePage({ params }: Params) {
  const { category, slug } = await params;
  const article = getArticle(category, slug);
  const cat = getCategory(category);
  if (!article || !cat) notFound();

  const siblings = articlesIn(cat.slug);
  const idx = siblings.findIndex((a) => a.slug === article.slug);
  const prev = siblings[idx - 1];
  const next = siblings[idx + 1];
  const toc = headingsOf(article.body);
  const path = articleHref(article);
  const img = helpImages[article.slug]?.[0]?.src;

  return (
    <div className="pt-28 pb-28 sm:pt-32">
      <JsonLd
        data={[
          articleSchema({
            title: article.title,
            description: articleMeta[article.slug] ?? article.description,
            path,
            updated: article.updated,
            image: img,
          }),
          breadcrumbSchema([
            { name: "Help Center", path: "/help/" },
            { name: cat.title, path: `/help/${cat.slug}/` },
            { name: article.title, path },
          ]),
        ]}
      />
      <Container>
        <Breadcrumb
          items={[
            { label: "Help Center", href: "/help/" },
            { label: cat.title, href: `/help/${cat.slug}/` },
            { label: article.title },
          ]}
        />

        <div className="mt-12 grid gap-14 lg:grid-cols-[minmax(0,1fr)_260px]">
          <article className="min-w-0 max-w-[720px]">
            <header>
              <h1 className="headline">{article.title}</h1>
              <p className="lede mt-4">{article.description}</p>
              <p className="mt-4 text-[14px] text-fg-3">Updated {formatDate(article.updated)}</p>
            </header>
            <div className="mt-10">
              <ArticleBody blocks={article.body} images={helpImages[article.slug]} />
            </div>

            {(prev || next) && (
              <nav aria-label="More articles" className="mt-16 grid gap-4 border-t border-line pt-8 sm:grid-cols-2">
                {prev ? (
                  <Link href={articleHref(prev)} className="group rounded-[18px] p-5 ring-1 ring-line transition hover:bg-bg-alt">
                    <span className="flex items-center gap-1 text-[13px] text-fg-3">
                      <Icon name="chevron" size={12} strokeWidth={2.4} className="rotate-180" /> Previous
                    </span>
                    <span className="mt-1 block font-semibold text-fg">{prev.title}</span>
                  </Link>
                ) : (
                  <span />
                )}
                {next && (
                  <Link
                    href={articleHref(next)}
                    className="group rounded-[18px] p-5 text-right ring-1 ring-line transition hover:bg-bg-alt"
                  >
                    <span className="flex items-center justify-end gap-1 text-[13px] text-fg-3">
                      Next <Icon name="chevron" size={12} strokeWidth={2.4} />
                    </span>
                    <span className="mt-1 block font-semibold text-fg">{next.title}</span>
                  </Link>
                )}
              </nav>
            )}

            <div className="mt-10 flex flex-col items-start gap-4 rounded-[24px] bg-bg-alt p-7 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-[17px] font-semibold">Still need help?</p>
                <p className="mt-1 text-[15px] text-fg-2">Our team is happy to walk you through it.</p>
              </div>
              <Link
                href="/contact/"
                className="inline-flex h-10 items-center rounded-full bg-ink px-5 text-[14px] font-medium text-on-ink transition hover:opacity-85"
              >
                Contact support
              </Link>
            </div>
          </article>

          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-10">
              {toc.length >= 3 && (
                <div>
                  <h2 className="eyebrow mb-3">On this page</h2>
                  <ul className="space-y-2 border-l border-line text-[14px]">
                    {toc.map((h) => (
                      <li key={h.id}>
                        <a href={`#${h.id}`} className="-ml-px block border-l border-transparent pl-4 text-fg-2 hover:border-fg hover:text-fg">
                          {h.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div>
                <h2 className="eyebrow mb-3">{cat.title}</h2>
                <ul className="space-y-0.5 text-[14px]">
                  {siblings.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={articleHref(s)}
                        aria-current={s.slug === article.slug ? "page" : undefined}
                        className={`block rounded-[10px] px-3 py-2 leading-snug transition ${
                          s.slug === article.slug ? "bg-bg-alt font-semibold text-fg" : "text-fg-2 hover:bg-bg-alt hover:text-fg"
                        }`}
                      >
                        {s.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </div>
  );
}
