import { Database, ScanSearch, GitBranch } from "lucide-react";

const steps = [
  {
    icon: Database,
    title: "Ingest",
    body:
      "Start with customer-supplied contracts, entity records and asset evidence. Approved registry and marketplace connections are added only after access, testing and legal review."
  },
  {
    icon: ScanSearch,
    title: "Verify",
    body:
      "Apply the AGIsGEM G.A.M.E. framework to organise evidence, identify gaps and produce explainable risk flags and a preliminary Logic Score."
  },
  {
    icon: GitBranch,
    title: "Operationalize",
    body:
      "Issue a versioned PDF and JSON report with a unique report ID. Hashing, IPFS and API delivery are introduced as each pilot capability is tested."
  }
];

export function Platform() {
  return (
    <section className="py-24 border-t border-[color:var(--border)]">
      <div className="container-x">
        <div className="max-w-2xl">
          <div className="pill mb-4">The Platform</div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
            From supplied evidence to a reviewable report — in three stages.
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
