# AGIsGEM — agisgem-web

**The intelligence layer for real-world assets.**
Built by REALM360 Intelligence on Virtuals Protocol.

This repo is the public marketing + proof site for AGIsGEM at [agisgem.io](https://agisgem.io).

---

## Stack

- **Next.js 14** (App Router) + TypeScript
- **Tailwind CSS** (custom dark institutional palette)
- **Supabase** (Postgres + RLS) for leads, proof logs, pilots, and use-case CMS
- **Vercel** for deployment
- **Base / Virtuals Protocol** for token and on-chain proof anchoring

## Local development

```bash
git clone https://github.com/c51consulting/agisgem-web.git
cd agisgem-web
npm install
cp .env.example .env.local   # fill values
npm run dev
```

Open http://localhost:3000.

## Environment variables

| Key | Where | Used by |
| --- | --- | --- |
| `NEXT_PUBLIC_SUPABASE_URL` | Vercel + `.env.local` | Browser + server |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Vercel + `.env.local` | Browser + server |
| `NEXT_PUBLIC_SITE_URL` | Vercel | Open Graph + canonical |

The service-role key is intentionally not used. `leads` accepts constrained INSERTs from the anon role; `proof_logs` exposes only rows where `status = 'published'`. See `supabase/migrations/0002_allow_anon_lead_inserts.sql`.

## Supabase setup

1. Create a project in the `jvrgaouievsbcwolgter` org.
2. Open the SQL editor and run [`supabase/schema.sql`](./supabase/schema.sql).
3. Copy the project URL, anon key, and service role key into Vercel env vars.

The schema creates four tables with RLS:

- `leads` — contact form submissions (service-role writes only)
- `proof_logs` — public Verification Log entries (public reads where `status = 'published'`)
- `pilots` — internal pilot partner tracker
- `use_case_pages` — optional CMS for `/use-cases/[slug]` (public reads where `published = true`)

## Vercel deploy

1. Import `c51consulting/agisgem-web` into the `c51consultings-projects` team.
2. Framework: **Next.js** (auto-detected).
3. Add the four env vars above.
4. Deploy. The first build will serve a working site even before Supabase is wired —
   the `/proof` page will show the "Pilot #001 in design" state and `/api/lead` will
   short-circuit with `persisted: false` until env vars are set.
5. Set the custom domain to `agisgem.io` once Supabase is connected.

## Repository layout

```
agisgem-web/
├── app/
│   ├── api/lead/route.ts       # lead capture endpoint
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── developers/page.tsx
│   ├── platform/page.tsx
│   ├── proof/page.tsx          # SSR — reads from proof_logs
│   ├── token/page.tsx
│   ├── use-cases/page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx                # Home
├── components/
│   ├── layout/                 # SiteHeader, SiteFooter
│   ├── sections/               # Hero, Problem, Platform, UseCases, Proof, TokenEconomy, CTA, TrustBar
│   └── ui/                     # PageHeader, LeadForm
├── lib/
│   ├── cn.ts
│   └── supabase/{client,server}.ts
├── public/brand/
├── supabase/
│   ├── schema.sql              # canonical schema (run this in SQL editor)
│   └── migrations/0001_init.sql
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.ts
└── tsconfig.json
```

## Positioning

AGIsGEM is positioned as an **RWA intelligence oracle** — verification infrastructure
for real-world assets, with agriculture as the first commercially credible wedge
because of provenance complexity, compliance density, and underwriting friction.

Core taglines:

- The intelligence layer for real-world assets.
- Verification infrastructure for RWAs.
- From fragmented asset data to finance-ready intelligence.
- Proving RWAs before they hit capital markets.

## License

© REALM Group Global. All rights reserved.
