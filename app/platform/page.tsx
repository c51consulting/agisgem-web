import { PageHeader } from "@/components/ui/PageHeader";

export const metadata = { title: "Platform" };

export default function PlatformPage() {
  return (
    <>
      <PageHeader
        eyebrow="Platform"
        title="The AGIsGEM verification engine."
        description="AGIsGEM is building a controlled workflow for organising supplied agricultural evidence, identifying gaps and producing explainable, versioned decision-support reports."
      />
      <section className="container-x py-16 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 prose-light">
          <h2>Data ingestion layer</h2>
          <p>
            The founding pilot begins with customer-supplied contracts, entity records, asset schedules and
            operational evidence. Approved registry, saleyard, carbon and marketplace connections will be
            introduced only after access, testing and legal review. Each report states which sources were
            supplied, independently checked or not available.
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
            The target workflow hashes final reports and may pin approved artefacts to IPFS and reference
            them on Base. Until this capability is tested on an issued pilot report, it remains a planned
            proof layer rather than a live verification claim.
          </p>
          <h2>Outputs</h2>
          <ul>
            <li>Logic Score PDF + machine-readable JSON</li>
            <li>Unique report ID and version history</li>
            <li>Optional hash, IPFS and API outputs as each capability is commissioned and tested</li>
            <li>Public status entry for badges approved for publication</li>
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
            <div className="font-medium">Australian livestock contracts; NLIS evidence subject to authorised access.</div>
          </div>
          <div className="card p-5">
            <div className="text-xs uppercase tracking-wider text-[color:var(--muted)] mb-2">
              Anchoring
            </div>
            <div className="font-medium">Planned: report hash, IPFS + Base reference.</div>
          </div>
        </aside>
      </section>
    </>
  );
}
