import type { MetadataRoute } from "next";
import { articleHref, helpArticles, helpCategories } from "@/lib/help";
import { absoluteUrl } from "@/lib/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: { path: string; priority: number; changeFrequency: "weekly" | "monthly" | "yearly" }[] = [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/pricing/", priority: 0.9, changeFrequency: "monthly" },
    { path: "/features/", priority: 0.8, changeFrequency: "monthly" },
    { path: "/showcase/", priority: 0.6, changeFrequency: "monthly" },
    { path: "/about/", priority: 0.5, changeFrequency: "yearly" },
    { path: "/contact/", priority: 0.5, changeFrequency: "yearly" },
    { path: "/help/", priority: 0.7, changeFrequency: "weekly" },
    { path: "/legal/terms/", priority: 0.2, changeFrequency: "yearly" },
    { path: "/legal/privacy/", priority: 0.2, changeFrequency: "yearly" },
  ];

  return [
    ...pages.map((p) => ({ url: absoluteUrl(p.path), changeFrequency: p.changeFrequency, priority: p.priority })),
    ...helpCategories.map((c) => ({
      url: absoluteUrl(`/help/${c.slug}/`),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
    ...helpArticles.map((a) => ({
      url: absoluteUrl(articleHref(a)),
      lastModified: a.updated,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
