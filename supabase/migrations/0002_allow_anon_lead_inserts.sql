-- Allow anonymous (public) inserts into leads under a constrained policy.
-- This lets us drop the service-role key from the app and operate the lead
-- capture endpoint with only the anon key.

drop policy if exists "anon can insert leads" on public.leads;
create policy "anon can insert leads"
on public.leads for insert
to anon
with check (
  type in ('pilot','investor','partner','community')
  and char_length(name) between 1 and 200
  and char_length(email) between 5 and 320
  and email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
  and (organisation is null or char_length(organisation) <= 200)
  and (message is null or char_length(message) <= 4000)
);
