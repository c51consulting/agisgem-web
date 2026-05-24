import Link from "next/link";
import { ArrowUpRight, Terminal } from "lucide-react";

const code = `// Fetch a Logic Score for a verified RWA
const score = await agisgem.score({
  asset_id: "AU-NLIS-PILOT-001",
  surfaces: ["nlis", "weight", "sale", "carbon"]
});

// → signed, IPFS-anchored, decision-ready
{
  "asset_id": "AU-NLIS-PILOT-001",
  "logic_score": 0.82,            // 0–1 finance-readiness
  "provenance": "verified",
  "risk_band": "B+",
  "evidence": {
    "nlis":   { "status": "matched",  "weight": 0.30 },
    "weight": { "status": "in_range", "weight": 0.25 },
    "sale":   { "status": "matched",  "weight": 0.25 },
    "carbon": { "status": "pending",  "weight": 0.20 }
  },
  "proof_uri": "ipfs://bafy.../pilot-001-v0.1.json",
  "issued_by": "AGIsGEM · REALM360",
  "chain":     "base"
}`;

export function CodePreview() {
  return (
    <section className="container-x py-20 md:py-24">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="text-[11px] uppercase tracking-widest text-[color:var(--accent)]">
            Developer preview
          </div>
          <h2 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight">
            One call. One signed Logic Score.
          </h2>
          <p className="mt-4 text-[color:var(--muted)] leading-relaxed">
            AGIsGEM is built oracle-style: deterministic outputs, IPFS-anchored evidence,
            and a single object your underwriting, marketplace, or tokenization stack can consume.
            Below is the shape of the v0.1 response — the same one Pilot #001 is being designed against.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-[color:var(--ink)]/85">
            {[
              "Logic Score from 0–1, plus a human-readable risk band",
              "Each verification surface scored and weighted separately",
              "Proof URI anchored to IPFS for independent re-verification",
              "Signed by AGIsGEM agent on Virtuals Protocol, settled on Base"
            ].map((b) => (
              <li key={b} className="flex items-start gap-2">
                <span className="mt-1.5 inline-block h-1 w-1 rounded-full bg-[color:var(--accent)]" />
                {b}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Link
              href="/developers"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[color:var(--accent)] hover:gap-2.5 transition-all"
            >
              Full integration spec <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>

        <div className="card overflow-hidden">
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-[color:var(--border)] bg-[color:var(--bg)]">
            <div className="flex items-center gap-2 text-xs text-[color:var(--muted)]">
              <Terminal size={13} className="text-[color:var(--accent)]" />
              logic-score.ts
            </div>
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-[color:var(--border)]" />
              <span className="h-2 w-2 rounded-full bg-[color:var(--border)]" />
              <span className="h-2 w-2 rounded-full bg-[color:var(--accent)]/60" />
            </div>
          </div>
          <pre className="text-[12.5px] leading-relaxed p-5 overflow-x-auto font-mono text-[color:var(--ink)]/90">
            <code>{code}</code>
          </pre>
        </div>
      </div>
    </section>
  );
}
