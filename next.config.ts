import type { NextConfig } from "next";
import { redirects } from "./redirects";

// Images in /public are not fingerprinted, so cache them for a day and refresh in the background.
const imageCache = "public, max-age=86400, stale-while-revalidate=604800";

const nextConfig: NextConfig = {
  // Pages are still prerendered as static HTML at build time. The only server code is
  // the contact form endpoint (src/app/api/contact/route.ts), which runs as a Vercel Function.
  trailingSlash: true,
  images: { unoptimized: true },
  async redirects() {
    return redirects;
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Strict-Transport-Security", value: "max-age=63072000" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), browsing-topics=()" },
        ],
      },
      { source: "/showcase/:file(.*\\.webp)", headers: [{ key: "Cache-Control", value: imageCache }] },
      { source: "/showcase/icons/:file(.*\\.webp)", headers: [{ key: "Cache-Control", value: imageCache }] },
      { source: "/help/:file(.*\\.webp)", headers: [{ key: "Cache-Control", value: imageCache }] },
      { source: "/brand/:path*", headers: [{ key: "Cache-Control", value: imageCache }] },
    ];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
