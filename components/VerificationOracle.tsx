"use client";

import { useMemo, useState } from "react";
import { AlertTriangle, Check, ChevronRight, Database, FileJson, FileText, ShieldCheck, Upload } from "lucide-react";

type Status = "matched" | "in_range" | "pending" | "inconsistent" | "insufficient" | "missing";
type Purpose = "finance" | "sale" | "carbon";

type Evidence = {
  id: string;
  name: string;
  why: string;
  source: "external" | "upload" | "hybrid";
  sourceLabel: string;
  status: Status;
  weight: number;
  blocker?: boolean;
  purposes?: Purpose[];
  next: string;
};

const statusValue: Record<Status, number> = {
  matched: 1,
  in_range: 0.85,
  pending: 0.45,
  inconsistent: 0.15,
  insufficient: 0.2,
  missing: 0,
};

const statusLabel: Record<Status, string> = {
  matched: "Matched",
  in_range: "In range",
  pending: "Pending",
  inconsistent: "Inconsistent",
  insufficient: "Insufficient",
  missing: "Missing",
};

const baseEvidence: Evidence[] = [
  { id: "nlis", name: "NLIS / PIC authorisation", why: "Permits retrieval of declared PIC and livestock traceability evidence when an approved connection is available.", source: "external", sourceLabel: "Permissioned external source", status: "matched", weight: 12, blocker: true, next: "Confirm the producer authority remains current and covers the declared PIC." },
  { id: "entity", name: "Entity records", why: "Connects the applicant, operator and contracting entity to the verification case.", source: "hybrid", sourceLabel: "Upload + registry cross-check", status: "matched", weight: 10, blocker: true, next: "Review the matched entity record and authorised representative." },
  { id: "ownership", name: "Ownership / beneficial interest", why: "Establishes the claimed economic interest and chain of acquisition; NLIS does not prove ownership.", source: "upload", sourceLabel: "Customer/operator upload", status: "insufficient", weight: 13, blocker: true, next: "Upload the missing transfer, settlement or counterparty confirmation completing the ownership chain." },
  { id: "purchase", name: "Purchase contract / invoice", why: "Tests acquisition date, counterparty, livestock identifiers and purchase price against other evidence.", source: "upload", sourceLabel: "Customer/operator upload", status: "matched", weight: 10, next: "Review the extracted purchase price and identifier matches." },
  { id: "security", name: "Finance / security documents", why: "Identifies lender rights, covenants and claims against the financed livestock pool.", source: "upload", sourceLabel: "Customer/operator upload", status: "inconsistent", weight: 12, blocker: true, next: "Resolve the headcount mismatch between the facility schedule and livestock schedule." },
  { id: "schedule", name: "Livestock schedule", why: "Defines the financed population and reconciles headcount and identifiers across records.", source: "hybrid", sourceLabel: "Upload + traceability reconcile", status: "in_range", weight: 10, blocker: true, next: "Review the six identifiers excluded from the declared pool." },
  { id: "weight", name: "Weight evidence", why: "Tests quantity, recency and valuation inputs against the livestock schedule.", source: "upload", sourceLabel: "Operator / verified scale data", status: "pending", weight: 8, next: "Complete the weight-source check and confirm the weighing date." },
  { id: "valuation", name: "Valuation basis", why: "Makes the value date, market references, assumptions and methodology reviewable.", source: "hybrid", sourceLabel: "Upload + market reference", status: "pending", weight: 10, next: "Provide the dated valuation methodology and source market reference." },
  { id: "offtake", name: "Sale / offtake evidence", why: "Supports the repayment or exit pathway and tests buyer, volume, timing and sale price.", source: "upload", sourceLabel: "Required where applicable", status: "missing", weight: 8, purposes: ["finance", "sale"], next: "Confirm it is not applicable or upload the current sale/offtake contract and price evidence." },
  { id: "carbon", name: "Carbon / project evidence", why: "Tests relevance, attribution, methodology and the risk of duplicated environmental claims.", source: "upload", sourceLabel: "Required where applicable", status: "missing", weight: 2, purposes: ["carbon"], next: "Upload the applicable methodology, project boundary and attribution evidence." },
  { id: "ppsr", name: "Other security / PPSR evidence", why: "Surfaces registered or competing security interests relevant to the transaction.", source: "hybrid", sourceLabel: "Registry + customer evidence", status: "pending", weight: 5, purposes: ["finance"], next: "Provide the current PPSR search or authorise the relevant registry check." },
];

const statusClass: Record<Status, string> = {
  matched: "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
  in_range: "border-sky-400/30 bg-sky-400/10 text-sky-300",
  pending: "border-amber-400/30 bg-amber-400/10 text-amber-200",
  inconsistent: "border-red-400/30 bg-red-400/10 text-red-300",
  insufficient: "border-orange-400/30 bg-orange-400/10 text-orange-200",
  missing: "border-slate-500/30 bg-slate-500/10 text-slate-300",
};

export function VerificationOracle() {
  const [purpose, setPurpose] = useState<Purpose>("finance");
  const [evidence, setEvidence] = useState(baseEvidence);

  const active = useMemo(
    () => evidence.filter((item) => !item.purposes || item.purposes.includes(purpose)),
    [evidence, purpose]
  );

  const totalWeight = active.reduce((sum, item) => sum + item.weight, 0);
  const logicScore = active.reduce((sum, item) => sum + item.weight * statusValue[item.status], 0) / totalWeight;
  const blockers = active.filter((item) => item.blocker && !["matched", "in_range"].includes(item.status));
  const hasMaterialConflict = active.some((item) => item.status === "inconsistent");
  const outcome = logicScore >= 0.75 && blockers.length === 0 && !hasMaterialConflict
    ? "Pass"
    : logicScore >= 0.5
      ? "Conditional pass"
      : "Fail";
  const riskBand = logicScore >= 0.75 ? "Low-moderate evidence risk" : logicScore >= 0.5 ? "Elevated evidence risk" : "High evidence risk";
  const nextActions = active
    .filter((item) => !["matched", "in_range"].includes(item.status))
    .sort((a, b) => Number(Boolean(b.blocker)) - Number(Boolean(a.blocker)) || b.weight - a.weight)
    .slice(0, 4);

  const resolve = (id: string) => setEvidence((items) => items.map((item) => item.id === id ? { ...item, status: "matched" } : item));

  return (
    <section className="container-x pb-20">
      <div className="card p-4 md:p-5 mb-5 grid md:grid-cols-[1fr_1fr_auto] gap-4 items-end">
        <label className="text-xs uppercase tracking-[0.16em] text-[color:var(--muted)]">
          Asset type
          <select className="mt-2 normal-case tracking-normal" defaultValue="livestock">
            <option value="livestock">Livestock</option>
            <option disabled>Crop inventory - coming next</option>
            <option disabled>Equipment - coming next</option>
          </select>
        </label>
        <label className="text-xs uppercase tracking-[0.16em] text-[color:var(--muted)]">
          Transaction purpose
          <select className="mt-2 normal-case tracking-normal" value={purpose} onChange={(event) => setPurpose(event.target.value as Purpose)}>
            <option value="finance">Finance / secured lending</option>
            <option value="sale">Sale / offtake</option>
            <option value="carbon">Carbon-linked transaction</option>
          </select>
        </label>
        <button className="btn-secondary justify-center" onClick={() => setEvidence(baseEvidence)}>Reset assessment</button>
      </div>

      <div className="overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--panel)] mb-5">
        <div className="p-6 md:p-8 bg-[linear-gradient(120deg,#132414,#0d1a10)] grid md:grid-cols-[1fr_auto] gap-6 items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-[color:var(--accent)] font-semibold mb-2">Live preliminary gate</div>
            <h2 className="text-2xl md:text-3xl font-semibold">AGIsGEM Verification Oracle</h2>
            <p className="text-[color:var(--muted)] mt-2 max-w-2xl">External authoritative evidence + assessed uploads + cross-source reconciliation = an explainable decision-support outcome.</p>
          </div>
          <div className="flex items-center gap-5">
            <div className="w-24 h-24 rounded-full grid place-items-center border-[9px] border-[color:var(--accent)] bg-[#0a0e0a] shadow-[0_0_32px_rgba(125,211,95,.16)]">
              <strong className="text-2xl">{logicScore.toFixed(2)}</strong>
            </div>
            <div>
              <div className={`inline-flex rounded-full px-3 py-1 text-xs uppercase tracking-wider font-semibold ${outcome === "Pass" ? "bg-emerald-400 text-black" : outcome === "Fail" ? "bg-red-400 text-black" : "bg-amber-300 text-black"}`}>{outcome}</div>
              <div className="text-sm text-[color:var(--muted)] mt-2">{riskBand}</div>
              <div className="text-xs text-[color:var(--muted)] mt-1">Logic Score · 0-1</div>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-[color:var(--border)]">
          <Gate title="How to pass" icon={<ShieldCheck size={18} />}>
            Reach 0.75 or higher, satisfy every mandatory gate, retain current authorisations and resolve every material inconsistency.
          </Gate>
          <Gate title="Current gate position" icon={<AlertTriangle size={18} />}>
            <strong className="text-[color:var(--ink)]">{blockers.length} blocker{blockers.length === 1 ? "" : "s"} remain.</strong> {hasMaterialConflict ? "A material inconsistency also prevents Pass." : "No material inconsistency is open."}
          </Gate>
          <Gate title="Assessment principle" icon={<Database size={18} />}>
            Uploaded evidence is assessed, not accepted at face value. Agreement across identity, timing, quantity, value and competing claims earns confidence.
          </Gate>
        </div>
      </div>

      <div className="grid xl:grid-cols-[minmax(0,1fr)_340px] gap-5">
        <div className="card overflow-hidden">
          <div className="p-5 border-b border-[color:var(--border)] flex flex-wrap gap-3 items-center justify-between">
            <div>
              <div className="text-xs uppercase tracking-[0.16em] text-[color:var(--accent)]">Dynamic checklist</div>
              <h2 className="text-xl font-semibold mt-1">Livestock + {purpose === "finance" ? "Finance" : purpose === "sale" ? "Sale / Offtake" : "Carbon"} evidence requirements</h2>
            </div>
            <span className="text-xs text-[color:var(--muted)]">{active.length} evidence surfaces · {totalWeight}% normalized</span>
          </div>
          <div>
            {active.map((item, index) => (
              <article key={item.id} className="p-5 border-b last:border-b-0 border-[color:var(--border)] grid lg:grid-cols-[32px_minmax(240px,1fr)_170px_90px_112px] gap-4 items-center">
                <div className="w-8 h-8 rounded-lg bg-[rgba(125,211,95,.08)] text-[color:var(--accent)] grid place-items-center text-xs font-bold">{index + 1}</div>
                <div>
                  <div className="flex gap-2 items-center"><h3 className="font-semibold">{item.name}</h3>{item.blocker && <span className="text-[10px] uppercase tracking-wider text-red-300">Mandatory gate</span>}</div>
                  <p className="text-sm text-[color:var(--muted)] mt-1 leading-relaxed">{item.why}</p>
                </div>
                <div className="text-xs text-[color:var(--muted)]">
                  <div className="flex items-center gap-2 text-[color:var(--ink)] font-medium mb-1">{item.source === "external" ? <Database size={14} /> : item.source === "upload" ? <Upload size={14} /> : <ShieldCheck size={14} />}{item.source === "external" ? "Auto-sourced" : item.source === "upload" ? "Must upload" : "Hybrid check"}</div>
                  {item.sourceLabel}
                </div>
                <div>
                  <span className={`inline-flex border rounded-full px-2 py-1 text-[10px] uppercase tracking-wider ${statusClass[item.status]}`}>{statusLabel[item.status]}</span>
                  <div className="text-xs text-[color:var(--muted)] mt-2">Weight <strong className="text-[color:var(--ink)]">{item.weight}%</strong></div>
                </div>
                <button onClick={() => resolve(item.id)} disabled={item.status === "matched"} className="inline-flex items-center justify-center gap-1 rounded-lg border border-[color:var(--border)] px-3 py-2 text-xs font-semibold disabled:opacity-40 hover:border-[color:var(--accent)]">
                  {item.status === "matched" ? <><Check size={14} /> Review</> : <>Resolve <ChevronRight size={14} /></>}
                </button>
              </article>
            ))}
          </div>
        </div>

        <aside className="space-y-5">
          <div className="card p-5">
            <h2 className="font-semibold text-lg">Next best actions</h2>
            <p className="text-xs text-[color:var(--muted)] mt-1">Highest-impact work required to move toward Pass.</p>
            <div className="mt-4 space-y-4">
              {nextActions.map((item) => (
                <div key={item.id} className={`pl-3 border-l-2 ${item.blocker ? "border-red-400" : "border-amber-300"}`}>
                  <div className="text-xs uppercase tracking-wider text-[color:var(--muted)]">{item.blocker ? "Blocker" : `${item.weight}% contribution`}</div>
                  <div className="font-semibold text-sm mt-1">{item.name}</div>
                  <p className="text-xs text-[color:var(--muted)] mt-1 leading-relaxed">{item.next}</p>
                  <button onClick={() => resolve(item.id)} className="text-xs text-[color:var(--accent)] font-semibold mt-2">Open requirement →</button>
                </div>
              ))}
            </div>
          </div>

          <div className="card p-5">
            <div className="text-xs uppercase tracking-[0.16em] text-[color:var(--muted)]">Decision object</div>
            <div className="font-semibold mt-2">AGD-LF-2408-017</div>
            <div className="text-xs text-[color:var(--muted)] mt-1">Schema v1.2 · Draft 04 · G.A.M.E. v0.1</div>
            <button className="btn-secondary w-full justify-between mt-4 text-sm"><span className="flex items-center gap-2"><FileText size={16} /> Verification report</span><span>PDF</span></button>
            <button className="btn-secondary w-full justify-between mt-2 text-sm"><span className="flex items-center gap-2"><FileJson size={16} /> Decision object</span><span>JSON</span></button>
            <p className="text-[11px] text-[color:var(--muted)] mt-3">Output controls are placeholders until the case is locked, versioned and issued.</p>
          </div>
        </aside>
      </div>

      <div className="mt-5 rounded-xl border border-[color:var(--border)] bg-white/[.02] p-4 text-xs leading-relaxed text-[color:var(--muted)]">
        <strong className="text-[color:var(--ink)]">Decision-support boundary:</strong> AGIsGEM does not prove legal ownership and is not an audit, valuation or credit rating. It assesses the consistency, sufficiency, relevance and provenance of available evidence. No live NLIS integration is claimed; NLIS data is used only where access and producer authorisation are approved.
      </div>
    </section>
  );
}

function Gate({ title, icon, children }: { title: string; icon: React.ReactNode; children: React.ReactNode }) {
  return <div className="p-5"><div className="flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-[color:var(--accent)] mb-2">{icon}{title}</div><p className="text-sm text-[color:var(--muted)] leading-relaxed">{children}</p></div>;
}
