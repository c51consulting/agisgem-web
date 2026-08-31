import Link from "next/link";
import { ArrowRight, ShieldCheck, Activity } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[color:var(--bg)] pointer-events-none" />
      <div className="container-x relative pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="pill mb-6">
          <ShieldCheck size={14} className="text-[color:var(--accent)]" />
          Founding commercial pilot · Virtuals Protocol agent
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.05] max-w-4xl">
          <span className="gradient-text">Evidence before capital.</span>
          <br />
          Verification for agricultural RWAs.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-[color:var(--muted)] leading-relaxed">
          AGIsGEM is building an AI-assisted workflow that turns fragmented livestock contracts and
          agricultural asset evidence into an evidence register, explainable risk flags, a preliminary
          Logic Score, and versioned reports for operators, lenders and investors.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/contact" className="btn-primary">
            Book a founding pilot <ArrowRight size={16} />
          </Link>
          <Link href="/platform" className="btn-secondary">
            View verification model
          </Link>
          <Link href="/developers" className="btn-secondary">
            Developers
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl">
          {[
            { value: "001", label: "Founding pilot", sub: "Livestock verification use case" },
            { value: "v0.1", label: "Methodology", sub: "Controlled pilot model" },
            { value: "5 days", label: "Target delivery", sub: "After complete evidence" },
            { value: "Base", label: "Agent network", sub: "via Virtuals Protocol" }
          ].map((s) => (
            <div key={s.label} className="card p-4 relative overflow-hidden">
              <div className="absolute top-3 right-3 flex items-center gap-1 text-[10px] uppercase tracking-wider text-[color:var(--accent)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[color:var(--accent)] opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[color:var(--accent)]" />
                </span>
                pilot
              </div>
              <div className="text-2xl font-semibold text-[color:var(--ink)] leading-none">
                {s.value}
              </div>
              <div className="mt-2 text-[11px] uppercase tracking-wider text-[color:var(--muted)]">
                {s.label}
              </div>
              <div className="mt-1 text-xs text-[color:var(--ink)]/80 leading-snug">
                {s.sub}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-2 text-xs text-[color:var(--muted)]">
          <Activity size={14} className="text-[color:var(--accent)]" />
          Pilot status is reported below. No live registry integration is claimed until tested and operational.
        </div>
      </div>
    </section>
  );
}
