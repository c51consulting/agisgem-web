import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[color:var(--bg)] pointer-events-none" />
      <div className="container-x relative pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="pill mb-6">
          <ShieldCheck size={14} className="text-[color:var(--accent)]" />
          RWA Intelligence Oracle · Built on Virtuals Protocol
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.05] max-w-4xl">
          <span className="gradient-text">The intelligence layer</span>
          <br />
          for real-world assets.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-[color:var(--muted)] leading-relaxed">
          AGIsGEM verifies provenance, risk, and finance-readiness for RWAs across agriculture, carbon markets,
          and on-chain capital systems. We turn fragmented asset data into decision-ready Logic Scores
          underwriters, marketplaces, and tokenization platforms can actually trust.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/contact" className="btn-primary">
            Request a pilot <ArrowRight size={16} />
          </Link>
          <Link href="/platform" className="btn-secondary">
            View verification model
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl">
          {[
            { label: "Agricultural RWAs", value: "Livestock · Carbon · Commodities" },
            { label: "Chain", value: "Base · Virtuals Protocol" },
            { label: "Verification surface", value: "NLIS · Weight · Sale · Carbon" },
            { label: "Output", value: "Logic Score + IPFS Proof" }
          ].map((s) => (
            <div key={s.label} className="card p-4">
              <div className="text-[11px] uppercase tracking-wider text-[color:var(--muted)]">
                {s.label}
              </div>
              <div className="mt-1 text-sm text-[color:var(--ink)] font-medium leading-snug">
                {s.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
