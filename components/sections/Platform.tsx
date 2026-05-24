import { Database, ScanSearch, GitBranch } from "lucide-react";

const steps = [
  {
    icon: Database,
    title: "Ingest",
    body:
      "Pull structured signals from NLIS records, weight & health data, sale yards, carbon registries, and commodity rails. Schema-normalised, audit-ready."
  },
  {
    icon: ScanSearch,
    title: "Verify",
    body:
      "Run the AGIsGEM G.A.M.E. framework: Perception → Cognitive Auditor → Action Layer. Output: a Logic Score with risk flags and confidence intervals."
  },
  {
    icon: GitBranch,
    title: "Operationalize",
    body:
      "Anchor proofs to IPFS, reference them on-chain, and pipe outputs to lenders, insurers, marketplaces, and tokenization platforms via API."
  }
];

export function Platform() {
  return (
    <section className="py-24 border-t border-[color:var(--border)]">
      <div className="container-x">
        <div className="max-w-2xl">
          <div className="pill mb-4">The Platform</div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
            From off-chain reality to on-chain proof — in three stages.
          </h2>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-4">
          {steps.map((s, idx) => (
            <div key={s.title} className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-[rgba(125,211,95,0.1)] border border-[color:var(--border)] flex items-center justify-center">
                  <s.icon size={18} className="text-[color:var(--accent)]" />
                </div>
                <div className="text-xs uppercase tracking-wider text-[color:var(--muted)]">
                  Stage 0{idx + 1}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-[color:var(--muted)] leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
