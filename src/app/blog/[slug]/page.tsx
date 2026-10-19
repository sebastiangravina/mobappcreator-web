import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Icon } from "@/components/Icon";
import { CtaSection } from "@/components/sections";
import { Container } from "@/components/ui";
import { posts } from "@/lib/content";
import { formatDate } from "@/lib/format";

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  return post ? { title: post.title, description: post.excerpt } : {};
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      <article className="pt-32 sm:pt-40">
        <Container className="max-w-[760px]">
          <Link href="/blog/" className="inline-flex items-center gap-1 text-[15px] text-link hover:underline">
            <Icon name="chevron" size={14} strokeWidth={2.4} className="rotate-180" /> All articles
          </Link>
          <p className="eyebrow mt-10">{post.category}</p>
          <h1 className="headline mt-3">{post.title}</h1>
          <p className="lede mt-5">{post.excerpt}</p>
          <p className="mt-6 text-[14px] text-fg-3">
            {formatDate(post.date)} · {post.readMinutes} min read
          </p>
        </Container>
        <Container className="mt-12 max-w-[960px]">
          <div
            className="aspect-[2/1] rounded-[28px]"
            style={{ background: `linear-gradient(135deg, ${post.color}, color-mix(in srgb, ${post.color} 40%, #000))` }}
          />
        </Container>
        <Container className="prose-apple mt-12 max-w-[680px]">
          {post.body.map((b, i) => (
            <div key={i}>
              {b.h && <h2>{b.h}</h2>}
              <p>{b.p}</p>
            </div>
          ))}
        </Container>
      </article>
      <CtaSection />
    </>
  );
}
