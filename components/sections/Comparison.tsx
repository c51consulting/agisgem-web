import { Check, Minus, X } from "lucide-react";

type Cell = "yes" | "partial" | "no";

type Row = {
  capability: string;
  agisgem: Cell;
  general: Cell;
  custodial: Cell;
  note?: string;
};

const rows: Row[] = [
  { capability: "Native to physical, ag-anchored RWAs", agisgem: "yes", general: "no", custodial: "partial" },
  { capability: "Multi-surface verification (NLIS · weight · sale · carbon)", agisgem: "yes", general: "no", custodial: "no" },
  { capability: "Single Logic Score as a decision object", agisgem: "yes", general: "no", custodial: "no" },
  { capability: "Evidence anchored to IPFS for re-verification", agisgem: "yes", general: "partial", custodial: "no" },
  { capability: "Oracle-style API + agent surface", agisgem: "yes", general: "yes", custodial: "no" },
  { capability: "Co-design with the asset operator", agisgem: "yes", general: "no", custodial: "partial" },
  { capability: "On-chain settlement (Base · Virtuals)", agisgem: "yes", general: "yes", custodial: "no" }
];

const cell = (c: Cell) => {
  if (c === "yes")
    return (
      <span className="inline-flex items-center gap-1 text-[color:var(--accent)]">
        <Check size={16} /> <span className="text-xs">Yes</span>
      </span>
    );
  if (c === "partial")
    return (
      <span className="inline-flex items-center gap-1 text-[#c9a96e]">
        <Minus size={16} /> <span className="text-xs">Partial</span>
      </span>
    );
  return (
    <span className="inline-flex items-center gap-1 text-[color:var(--muted)]">
      <X size={16} /> <span className="text-xs">No</span>
    </span>
  );
};

export function Comparison() {
  return (
    <section className="container-x py-20 md:py-24">
      <div className="max-w-2xl">
        <div className="text-[11px] uppercase tracking-widest text-[color:var(--accent)]">
          Why AGIsGEM
        </div>
        <h2 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight">
          A purpose-built verification oracle, not a generic price feed.
        </h2>
        <p className="mt-4 text-[color:var(--muted)] leading-relaxed">
          General-purpose oracles tell you the price of a token. Custodial RWA platforms tell you a custodian
          attests something. AGIsGEM tells you whether the underlying asset is real, current, and finance-ready —
          with the evidence to back it.
        </p>
      </div>

      <div className="mt-10 card overflow-hidden">
        <div className="grid grid-cols-12 px-5 py-4 border-b border-[color:var(--border)] text-[10px] uppercase tracking-wider text-[color:var(--muted)]">
          <div className="col-span-6 sm:col-span-5">Capability</div>
          <div className="col-span-2 sm:col-span-2 text-[color:var(--accent)]">AGIsGEM</div>
          <div className="col-span-2 sm:col-span-2">General oracles</div>
          <div className="col-span-2 sm:col-span-3">Custodial RWA platforms</div>
        </div>
        {rows.map((r) => (
          <div
            key={r.capability}
            className="grid grid-cols-12 px-5 py-4 border-b border-[color:var(--border)] last:border-0 text-sm items-center"
          >
            <div className="col-span-6 sm:col-span-5 text-[color:var(--ink)]/90 leading-snug pr-2">
              {r.capability}
            </div>
            <div className="col-span-2 sm:col-span-2">{cell(r.agisgem)}</div>
            <div className="col-span-2 sm:col-span-2">{cell(r.general)}</div>
            <div className="col-span-2 sm:col-span-3">{cell(r.custodial)}</div>
          </div>
        ))}
      </div>

      <div className="mt-6 text-[11px] text-[color:var(--muted)] max-w-2xl">
        Comparison is positioning, not a public scorecard of any specific vendor. We benchmark openly against
        general-purpose oracle platforms (Pyth, Chainlink) and custodial RWA tokenization platforms.
      </div>
    </section>
  );
}
