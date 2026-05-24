-- AGIsGEM — Supabase schema (v0.1)
-- Run this in the Supabase SQL editor for project: agisgem
-- Org: jvrgaouievsbcwolgter

-- =========================================================
-- leads: contact form submissions (pilot, investor, partner, community)
-- =========================================================
create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  type text not null check (type in ('pilot','investor','partner','community')),
  name text not null,
  email text not null,
  organisation text,
  message text,
  source text default 'website',
  created_at timestamptz not null default now()
);

create index if not exists leads_created_at_idx on public.leads (created_at desc);
create index if not exists leads_type_idx on public.leads (type);

-- =========================================================
-- proof_logs: public Verification Log entries
-- =========================================================
create table if not exists public.proof_logs (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  summary text,
  status text default 'draft' check (status in ('draft','in_review','published','retired')),
  asset_class text,
  hash_ref text,
  transaction_ref text,
  public_url text,
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists proof_logs_published_at_idx on public.proof_logs (published_at desc);
create index if not exists proof_logs_status_idx on public.proof_logs (status);

-- =========================================================
-- pilots: cohort of pilot partners and their status
-- =========================================================
create table if not exists public.pilots (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  sector text,
  country text,
  status text default 'prospect' check (status in ('prospect','active','published','paused','closed')),
  score_summary jsonb,
  report_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- =========================================================
-- use_case_pages: optional CMS-style content for /use-cases/[slug]
-- =========================================================
create table if not exists public.use_case_pages (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  summary text,
  body_md text,
  published boolean default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- =========================================================
-- Row Level Security
-- =========================================================
alter table public.leads enable row level security;
alter table public.proof_logs enable row level security;
alter table public.pilots enable row level security;
alter table public.use_case_pages enable row level security;

-- Public reads on published content
drop policy if exists "public read published proof_logs" on public.proof_logs;
create policy "public read published proof_logs"
on public.proof_logs for select
using (status = 'published');

drop policy if exists "public read published use_case_pages" on public.use_case_pages;
create policy "public read published use_case_pages"
on public.use_case_pages for select
using (published = true);

-- leads & pilots: no public access. Writes use service-role key from the API.
-- (No public policies — service role bypasses RLS by design.)

-- =========================================================
-- Updated-at triggers
-- =========================================================
create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists trg_proof_logs_updated_at on public.proof_logs;
create trigger trg_proof_logs_updated_at
before update on public.proof_logs
for each row execute function public.set_updated_at();

drop trigger if exists trg_pilots_updated_at on public.pilots;
create trigger trg_pilots_updated_at
before update on public.pilots
for each row execute function public.set_updated_at();

drop trigger if exists trg_use_case_pages_updated_at on public.use_case_pages;
create trigger trg_use_case_pages_updated_at
before update on public.use_case_pages
for each row execute function public.set_updated_at();
