import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pages are still prerendered as static HTML at build time. The only server code is
  // the contact form endpoint (src/app/api/contact/route.ts), which runs as a Vercel Function.
  trailingSlash: true,
  images: { unoptimized: true },
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
