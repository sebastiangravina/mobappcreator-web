import type { Metadata } from "next";
import { site } from "./site";

const SUFFIX = ` · ${site.name}`;

const shareImage = {
  url: "/opengraph-image.png",
  width: 1200,
  height: 630,
  alt: "MobAppCreator: Build your app. No code required.",
};

/**
 * Page metadata with a canonical URL and matching Open Graph / Twitter fields.
 * Titles that would pass ~60 characters with the brand suffix are used as-is,
 * so Google doesn't cut them off.
 */
export function pageMeta({
  title,
  description,
  path,
  type = "website",
}: {
  title: string;
  description: string;
  path: string; // e.g. "/pricing/"
  type?: "website" | "article";
}): Metadata {
  const full = title.length + SUFFIX.length <= 60 ? `${title}${SUFFIX}` : title;
  return {
    title: { absolute: full },
    description,
    alternates: { canonical: path },
    openGraph: { type, siteName: site.name, url: path, title: full, description, locale: "en_US", images: [shareImage] },
    twitter: { card: "summary_large_image", site: "@mobappcreator", title: full, description, images: [shareImage.url] },
  };
}

export const absoluteUrl = (path: string) => new URL(path, site.url).toString();
