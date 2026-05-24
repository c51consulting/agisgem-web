import { PageHeader } from "@/components/ui/PageHeader";

export const metadata = { title: "Platform" };

export default function PlatformPage() {
  return (
    <>
      <PageHeader
        eyebrow="Platform"
        title="The AGIsGEM verification engine."
        description="AGIsGEM combines real-world data ingestion, verification logic, and audit-friendly proof outputs so tokenization platforms, lenders, and marketplaces can make better decisions faster."
      />
      <section className="container-x py-16 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 prose-light">
          <h2>Data ingestion layer</h2>
          <p>
            AGIsGEM ingests structured signals from the systems already governing real-world assets — NLIS
            cattle records, sale yard data, weight & health histories, commodity reference rails, carbon
            registries, and counterparty disclosures. Sources are schema-normalised, timestamped, and
            stored alongside their provenance so every downstream score is traceable to its inputs.
          </p>
          <h2>Verification engine — the G.A.M.E. framework</h2>
          <p>
            Each contract or asset is processed through a three-layer model:
          </p>
          <ul>
            <li><strong>Perception</strong> — extract and normalise the underlying records.</li>
            <li><strong>Cognitive Auditor</strong> — apply rule-based and statistical checks: provenance integrity, weight & health consistency, sale cross-validation, counterparty risk flags.</li>
            <li><strong>Action Layer</strong> — emit a Logic Score, risk flags, and a structured proof artefact.</li>
          </ul>
          <h2>Logic Score</h2>
          <p>
            The Logic Score is a 0–100 composite reflecting verification confidence across provenance,
            integrity, and risk dimensions. Each score is published with its rubric version, the data
            window it was computed against, and the specific flags driving its result. A score is not a
            recommendation — it is a transparent, reproducible signal.
          </p>
          <h2>Proof anchoring</h2>
          <p>
            Final reports are hashed and pinned to IPFS. The hash is referenced in an on-chain memo on
            Base so any counterparty can independently verify the report has not been altered since
            publication.
          </p>
          <h2>Outputs</h2>
          <ul>
            <li>Logic Score PDF + machine-readable JSON</li>
            <li>IPFS hash and on-chain transaction reference</li>
            <li>API endpoints for lenders, insurers, and marketplaces</li>
            <li>Verification Log entry on agisgem.io/proof</li>
          </ul>
        </div>
        <aside className="space-y-4">
          <div className="card p-5">
            <div className="text-xs uppercase tracking-wider text-[color:var(--muted)] mb-2">
              Methodology
            </div>
            <div className="font-medium">G.A.M.E. v0.1 — public spec on launch.</div>
          </div>
          <div className="card p-5">
            <div className="text-xs uppercase tracking-wider text-[color:var(--muted)] mb-2">
              First asset class
            </div>
            <div className="font-medium">Australian livestock contracts (NLIS-anchored).</div>
          </div>
          <div className="card p-5">
            <div className="text-xs uppercase tracking-wider text-[color:var(--muted)] mb-2">
              Anchoring
            </div>
            <div className="font-medium">IPFS + Base on-chain memo.</div>
          </div>
        </aside>
      </section>
    </>
  );
}
