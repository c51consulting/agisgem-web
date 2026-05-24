import { createClient, SupabaseClient } from "@supabase/supabase-js";

/**
 * Server-side Supabase client.
 *
 * We deliberately use the anon (public) key here rather than the service-role key:
 * - `leads` accepts INSERTs from the anon role under a constrained RLS policy
 *   (see supabase/migrations/0002_allow_anon_lead_inserts.sql).
 * - `proof_logs` has a public SELECT policy on rows where status = 'published'.
 *
 * This avoids storing the service-role secret in Vercel and keeps the attack
 * surface tight: only validated inserts and published reads.
 */
export function getSupabaseServerClient(): SupabaseClient | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !anon) return null;
  return createClient(url, anon, {
    auth: { persistSession: false, autoRefreshToken: false }
  });
}
