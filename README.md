# MobAppCreator website

Marketing site for mobappcreator.com, built with **Next.js 16 (App Router) + React 19 + TypeScript + Tailwind CSS 4**, following Apple’s marketing-site style: system (SF) typography, generous whitespace, light and dark mode, subtle motion and accessible markup.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site in /out
```

The site is fully static (`output: "export"`), so `/out` can be deployed to Vercel, Netlify, Cloudflare Pages, S3 or any web server.

## Where things live

| What | File |
| --- | --- |
| URLs, trial length, offices, nav | `src/lib/site.ts` |
| Plans, prices, feature tables | `src/lib/pricing.ts` |
| Features, FAQ, industries, testimonials, showcase, blog posts | `src/lib/content.ts` |
| Colors, type scale, dark mode | `src/app/globals.css` |
| Pages | `src/app/**/page.tsx` |
| Shared UI (header, footer, buttons, phone mockup, pricing table) | `src/components/` |

## Before launch

- Replace everything marked **SAMPLE** (stats, testimonials, showcase apps, blog posts, About story). The UI shows a small “Sample” tag next to these.
- Confirm the yearly prices (currently monthly − 17%, rounded down).
- Replace the placeholder legal text in `src/app/legal/`.
- Set the real contact email in `site.ts`. The contact form opens the visitor’s email app; hook it to a form service if you want submissions collected.
- Add real app screenshots if you prefer them to the HTML phone mockups.
