# MobAppCreator website

Marketing site for mobappcreator.com, built with **Next.js 16 (App Router) + React 19 + TypeScript + Tailwind CSS 4**, following Apple’s marketing-site style: system (SF) typography, generous whitespace, light and dark mode, subtle motion and accessible markup.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # run the production build locally
```

Every page is prerendered as static HTML. The only server code is the contact form endpoint, `src/app/api/contact/route.ts`, which runs as a Vercel Function and sends messages through Resend.

## Environment variables

Copy `.env.example` to `.env.local` and fill it in (never commit `.env.local`). On Vercel, add the same variables in **Project → Settings → Environment Variables**.

| Variable | What |
| --- | --- |
| `RESEND_API_KEY` | Resend API key. Server-only, never sent to the browser. |
| `CONTACT_FROM_EMAIL` | Sender on a domain verified in Resend, e.g. `MobAppCreator Website <website@mobappcreator.com>` |
| `CONTACT_TO_EMAIL` | Where messages go (comma-separated). Defaults to `info@mobappcreator.com`. |

## Where things live

| What | File |
| --- | --- |
| URLs, trial length, offices, nav | `src/lib/site.ts` |
| Plans, prices, feature tables | `src/lib/pricing.ts` |
| Features, FAQ, industries, platform stats | `src/lib/content.ts` |
| Showcase apps (real apps, from the app-cards catalog) | `src/lib/showcase.ts`, images in `public/showcase/` |
| Colors, type scale, dark mode | `src/app/globals.css` |
| Pages | `src/app/**/page.tsx` |
| Contact form email (Resend) | `src/app/api/contact/route.ts`, `src/components/ContactForm.tsx` |
| Shared UI (header, footer, buttons, phone mockup, pricing table) | `src/components/` |

## Before launch

- Update the platform stats in `src/lib/content.ts` when the counters on the current site change.
- Confirm the yearly prices (currently monthly − 17%, rounded down).
- Replace the placeholder legal text in `src/app/legal/`.
- Add real app screenshots if you prefer them to the HTML phone mockups.
