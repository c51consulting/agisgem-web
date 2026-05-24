import { PageHeader } from "@/components/ui/PageHeader";
import { getSupabaseServerClient } from "@/lib/supabase/server";

export const metadata = { title: "Proof — Verification Log" };
export const revalidate = 60;

type ProofLog = {
  id: string;
  slug: string;
  title: string;
  summary: string | null;
  status: string | null;
  asset_class: string | null;
  hash_ref: string | null;
  transaction_ref: string | null;
  public_url: string | null;
  published_at: string | null;
};

async function fetchProofLogs(): Promise<ProofLog[]> {
  const supabase = getSupabaseServerClient();
  if (!supabase) return [];
  const { data, error } = await supabase
    .from("proof_logs")
    .select("*")
    .order("published_at", { ascending: false })
    .limit(50);
  if (error) return [];
  return (data as ProofLog[]) || [];
}

export default async function ProofPage() {
  const logs = await fetchProofLogs();

  return (
    <>
      <PageHeader
        eyebrow="Proof"
        title="The Verification Log."
        description="A public, append-only record of every AGIsGEM pilot, audit, and Logic Score. Each entry references its methodology version, source-data window, IPFS proof hash, and on-chain memo."
      />
      <section className="container-x py-16">
        {logs.length === 0 ? (
          <div className="card p-10 text-center max-w-2xl mx-auto">
            <div className="pill mb-4 mx-auto w-fit">No published entries yet</div>
            <h2 className="text-2xl font-semibold mb-3">Pilot #001 is in design.</h2>
            <p className="text-[color:var(--muted)] leading-relaxed">
              We don't publish placeholder proof. The first Verification Log entry will be a real,
              NLIS-anchored livestock contract — methodology, data window, IPFS hash, and on-chain memo
              all referenced here. If you want to be the named pilot partner, get in touch.
            </p>
            <a href="/contact?type=pilot" className="btn-primary mt-6 inline-flex">
              Become Pilot #001
            </a>
          </div>
        ) : (
          <div className="grid gap-4">
            {logs.map((l) => (
              <article key={l.id} className="card p-6">
                <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-wider text-[color:var(--muted)] mb-3">
                  <span>{l.published_at ? new Date(l.published_at).toLocaleDateString() : "Draft"}</span>
                  {l.asset_class && <span>· {l.asset_class}</span>}
                  {l.status && <span className="pill">{l.status}</span>}
                </div>
                <h3 className="text-xl font-semibold mb-2">{l.title}</h3>
                {l.summary && (
                  <p className="text-sm text-[color:var(--muted)] leading-relaxed mb-4">{l.summary}</p>
                )}
                <div className="flex flex-wrap gap-3 text-xs">
                  {l.hash_ref && (
                    <span className="font-mono text-[color:var(--muted)]">IPFS: {l.hash_ref.slice(0, 14)}…</span>
                  )}
                  {l.transaction_ref && (
                    <span className="font-mono text-[color:var(--muted)]">tx: {l.transaction_ref.slice(0, 14)}…</span>
                  )}
                  {l.public_url && (
                    <a href={l.public_url} target="_blank" rel="noreferrer" className="text-[color:var(--accent)]">
                      Open report →
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
