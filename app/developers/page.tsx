import { PageHeader } from "@/components/ui/PageHeader";

export const metadata = { title: "Developers" };

export default function DevelopersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Developers"
        title="Build on the AGIsGEM verification layer."
        description="The AGIsGEM API surfaces Logic Scores, proof artefacts, and verification events for lenders, marketplaces, and tokenization platforms. Public docs are in active development."
      />
      <section className="container-x py-16 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 prose-light">
          <h2>API vision</h2>
          <p>
            A REST + webhook surface for:
          </p>
          <ul>
            <li>Submitting an asset or contract for verification</li>
            <li>Retrieving a Logic Score, rubric version, and risk flags</li>
            <li>Fetching the canonical IPFS proof hash and on-chain memo</li>
            <li>Subscribing to verification events (status change, downgrade, re-issuance)</li>
          </ul>
          <h2>Example response schema</h2>
          <pre className="card p-4 text-xs overflow-x-auto font-mono text-[color:var(--ink)]">
{`{
  "asset_id": "agisgem-livestock-001",
  "asset_class": "livestock.cattle",
  "logic_score": 91,
  "rubric_version": "GAME-v0.1",
  "components": {
    "provenance": 95,
    "health_weight_consistency": 88,
    "sale_validation": 92,
    "counterparty_risk": 89
  },
  "flags": ["minor_weight_variance"],
  "proof": {
    "ipfs": "bafy...",
    "tx": "0x...",
    "issued_at": "2026-06-15T01:14:00Z"
  }
}`}
          </pre>
          <h2>Integration pathways</h2>
          <ul>
            <li>Direct REST consumers (lenders, insurers, processors)</li>
            <li>Tokenization platforms surfacing AGIsGEM Logic Scores on listings</li>
            <li>Virtuals Protocol agent-to-agent interop on Base</li>
          </ul>
        </div>
        <aside className="space-y-4">
          <div className="card p-5">
            <div className="text-xs uppercase tracking-wider text-[color:var(--muted)] mb-2">Status</div>
            <div className="font-medium">Private beta · Pilot partners only</div>
          </div>
          <div className="card p-5">
            <div className="text-xs uppercase tracking-wider text-[color:var(--muted)] mb-2">Stack</div>
            <div className="font-medium">Next.js · Supabase · IPFS · Base</div>
          </div>
          <a href="/contact?type=partner" className="btn-primary w-full justify-center">
            Apply for API access
          </a>
        </aside>
      </section>
    </>
  );
}
