import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static marketing site: `npm run build` writes plain HTML to /out.
  // Works on Vercel, Netlify, S3/CloudFront or any static host.
  output: "export",
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
