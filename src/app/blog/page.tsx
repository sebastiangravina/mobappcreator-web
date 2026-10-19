import type { Metadata } from "next";
import Link from "next/link";
import { Container, PageHero, SampleTag } from "@/components/ui";
import { posts } from "@/lib/content";
import { formatDate } from "@/lib/format";

export const metadata: Metadata = {
  title: "Blog",
  description: "Guides and ideas on mobile apps, push marketing and growing a small business.",
};

export default function BlogPage() {
  const [featured, ...rest] = posts;
  return (
    <>
      <PageHero eyebrow="Blog" title="Ideas to grow with mobile." lede="Guides, playbooks and news from the MobAppCreator team." />
      <section className="pb-28">
        <Container>
          <p className="mb-6 text-center">
            <SampleTag />
          </p>
          <Link href={`/blog/${featured.slug}/`} className="reveal group grid overflow-hidden rounded-[28px] bg-bg-alt md:grid-cols-2">
            <div className="min-h-[240px]" style={{ background: `linear-gradient(135deg, ${featured.color}, color-mix(in srgb, ${featured.color} 40%, #000))` }} />
            <div className="flex flex-col justify-center p-8 sm:p-12">
              <p className="eyebrow">{featured.category}</p>
              <h2 className="title mt-3 group-hover:underline">{featured.title}</h2>
              <p className="mt-3 text-[16px] leading-relaxed text-fg-2">{featured.excerpt}</p>
              <p className="mt-6 text-[13px] text-fg-3">
                {formatDate(featured.date)} · {featured.readMinutes} min read
              </p>
            </div>
          </Link>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {rest.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}/`} className="reveal group overflow-hidden rounded-[24px] bg-bg-alt">
                <div className="aspect-[16/9]" style={{ background: `linear-gradient(135deg, ${p.color}, color-mix(in srgb, ${p.color} 40%, #000))` }} />
                <div className="p-6">
                  <p className="eyebrow">{p.category}</p>
                  <h2 className="mt-2 text-[19px] font-semibold leading-snug tracking-tight group-hover:underline">{p.title}</h2>
                  <p className="mt-2 text-[15px] leading-relaxed text-fg-2">{p.excerpt}</p>
                  <p className="mt-4 text-[13px] text-fg-3">
                    {formatDate(p.date)} · {p.readMinutes} min read
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
