import Link from "next/link";
import { ArrowUpRight, Building2, Layers, Sprout } from "lucide-react";

const audiences = [
  {
    icon: Building2,
    title: "For ag-lenders & underwriters",
    body:
      "Replace opaque PDFs and broker decks with a verifiable Logic Score per asset, anchored to NLIS, weight, sale, and carbon evidence.",
    bullets: ["Decision-ready risk score", "Audit trail on IPFS", "API + dashboard delivery"],
    cta: "Request lender pilot",
    href: "/contact?audience=lender"
  },
  {
    icon: Layers,
    title: "For tokenization platforms",
    body:
      "Plug AGIsGEM in as the verification oracle behind your RWA issuances. We deliver provenance, risk, and finance-readiness as a single signed object.",
    bullets: ["Oracle-style integration", "Per-asset Logic Score JSON", "Built on Virtuals Protocol"],
    cta: "See the integration",
    href: "/developers"
  },
  {
    icon: Sprout,
    title: "For pilot operators",
    body:
      "Bring a herd, a carbon project, or a commodity lot. We co-design the verification surface, the Logic Score, and the on-chain proof flow with you.",
    bullets: ["Co-designed methodology", "Field-data ingestion", "Shared upside on outcomes"],
    cta: "Propose a pilot",
    href: "/contact?audience=operator"
  }
];

export function Audiences() {
  return (
    <section className="container-x py-20 md:py-24">
      <div className="max-w-2xl">
        <div className="text-[11px] uppercase tracking-widest text-[color:var(--accent)]">
          Who AGIsGEM is for
        </div>
        <h2 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight">
          One verification layer. Three different ways in.
        </h2>
        <p className="mt-4 text-[color:var(--muted)] leading-relaxed">
          AGIsGEM is built for the three sides of a real-world asset deal — the capital that funds it,
          the platform that tokenizes it, and the operator on the ground. Pick the path that matches you.
        </p>
      </div>

      <div className="mt-10 grid md:grid-cols-3 gap-4">
        {audiences.map((a) => {
          const Icon = a.icon;
          return (
            <div
              key={a.title}
              className="card p-6 flex flex-col hover:border-[color:var(--accent)]/40 transition-colors"
            >
              <div className="w-9 h-9 rounded-lg bg-[color:var(--accent)]/10 border border-[color:var(--accent)]/30 flex items-center justify-center mb-4">
                <Icon size={18} className="text-[color:var(--accent)]" />
              </div>
              <div className="text-lg font-semibold text-[color:var(--ink)]">{a.title}</div>
              <p className="mt-2 text-sm text-[color:var(--muted)] leading-relaxed">{a.body}</p>
              <ul className="mt-4 space-y-1.5 text-sm text-[color:var(--ink)]/85">
                {a.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="mt-1.5 inline-block h-1 w-1 rounded-full bg-[color:var(--accent)]" />
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-4 border-t border-[color:var(--border)]">
                <Link
                  href={a.href}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-[color:var(--accent)] hover:gap-2.5 transition-all"
                >
                  {a.cta} <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
