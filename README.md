# AGIsGEM

The intelligence layer for real-world assets. Built with REALM360 on Virtuals Protocol.

## Stack
- Next.js 14 (App Router) on Vercel
- Supabase (Postgres + Auth)
- Tailwind CSS
- Base / Virtuals Protocol

## Quick start
```bash
npm install
cp .env.local.example .env.local
npm run dev
```

## Deploy
1. Import this repo into Vercel.
2. Add env vars: NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY, SUPABASE_SERVICE_ROLE_KEY, NEXT_PUBLIC_SITE_URL.
3. Run supabase/schema.sql in your Supabase project.
4. Connect domain agisgem.io.

## Links
- Virtuals: https://app.virtuals.io/prototypes/0xf5ae0Ac5Ee87f3aA80984AD2de18de5CBc0b7395
- X: https://x.com/AGIsGEM
- REALM360: https://realm360.10web.cloud/agisgem-transforming-livestock-verification-finance/
