"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";

type LeadType = "pilot" | "investor" | "partner" | "community" | "validation" | "integration";

const labels: Record<LeadType, string> = {
  validation: "Request validation",
  integration: "Discuss an integration",
  pilot: "Agriculture / livestock",
  investor: "Investor interest",
  partner: "Other partnership",
  community: "Community enquiry"
};

export function LeadForm({ defaultType = "validation" }: { defaultType?: LeadType }) {
  const [type, setType] = useState<LeadType>(defaultType);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [organisation, setOrganisation] = useState("");
  const [sector, setSector] = useState("");
  const [useCase, setUseCase] = useState("");
  const [purpose, setPurpose] = useState("");
  const [timeframe, setTimeframe] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setError("");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type, name, email, organisation, sector, useCase, purpose, timeframe, message, consent })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Submission failed");
      setStatus("ok");
      setName(""); setEmail(""); setOrganisation(""); setSector(""); setUseCase(""); setPurpose(""); setTimeframe(""); setMessage(""); setConsent(false);
    } catch (err: unknown) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Submission failed");
    }
  }

  if (status === "ok") return <div className="card p-8 text-center">
    <CheckCircle2 className="mx-auto text-[color:var(--accent)] mb-3" size={28} />
    <h3 className="text-xl font-semibold mb-2">Thanks — we’ve received your enquiry.</h3>
    <p className="text-sm text-[color:var(--muted)]">We’ll review the request and respond within 2 business days.</p>
    <button onClick={() => setStatus("idle")} className="btn-secondary mt-6 text-sm">Submit another</button>
  </div>;

  return <form onSubmit={onSubmit} className="card p-6 md:p-8 space-y-4">
    <div>
      <label className="text-xs uppercase tracking-wider text-[color:var(--muted)] mb-2 block">What would you like to discuss?</label>
      <div className="flex flex-wrap gap-2">
        {(Object.keys(labels) as LeadType[]).map((key) => <button key={key} type="button" onClick={() => setType(key)} aria-pressed={type === key} className={"pill cursor-pointer " + (type === key ? "!border-[color:var(--accent)] !text-[color:var(--accent)] !bg-[rgba(125,211,95,0.08)]" : "")}>{labels[key]}</button>)}
      </div>
    </div>
    <div className="grid md:grid-cols-2 gap-4">
      <div><label className="text-xs uppercase tracking-wider text-[color:var(--muted)] mb-2 block">Name</label><input value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" required /></div>
      <div><label className="text-xs uppercase tracking-wider text-[color:var(--muted)] mb-2 block">Email</label><input type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" required /></div>
    </div>
    <div className="grid md:grid-cols-2 gap-4">
      <div><label className="text-xs uppercase tracking-wider text-[color:var(--muted)] mb-2 block">Organisation</label><input value={organisation} onChange={(e) => setOrganisation(e.target.value)} autoComplete="organization" /></div>
      <div><label className="text-xs uppercase tracking-wider text-[color:var(--muted)] mb-2 block">Sector</label><input value={sector} onChange={(e) => setSector(e.target.value)} placeholder="e.g. software, property, finance" /></div>
    </div>
    <div><label className="text-xs uppercase tracking-wider text-[color:var(--muted)] mb-2 block">Technology, asset or claim</label><input value={useCase} onChange={(e) => setUseCase(e.target.value)} placeholder="A short, non-confidential summary" required /></div>
    <div className="grid md:grid-cols-2 gap-4">
      <div><label className="text-xs uppercase tracking-wider text-[color:var(--muted)] mb-2 block">Purpose of the assessment</label><input value={purpose} onChange={(e) => setPurpose(e.target.value)} placeholder="e.g. purchase, deployment, investment" /></div>
      <div><label className="text-xs uppercase tracking-wider text-[color:var(--muted)] mb-2 block">Preferred timeframe</label><input value={timeframe} onChange={(e) => setTimeframe(e.target.value)} placeholder="e.g. next month" /></div>
    </div>
    <div><label className="text-xs uppercase tracking-wider text-[color:var(--muted)] mb-2 block">Anything else we should know?</label><textarea rows={4} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Do not include confidential records, passwords or access credentials." /></div>
    <label className="flex items-start gap-3 text-sm text-[color:var(--muted)] leading-relaxed"><input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} required className="mt-1 !w-4 !h-4 !p-0 accent-[color:var(--accent)]" /><span>I agree to be contacted about this enquiry.</span></label>
    {status === "error" && <div className="flex items-start gap-2 text-sm text-red-300"><AlertCircle size={16} className="mt-0.5" /><span>{error}</span></div>}
    <button type="submit" disabled={status === "loading"} className="btn-primary">{status === "loading" ? "Sending…" : "Submit enquiry"} <ArrowRight size={16} /></button>
    <p className="text-xs text-[color:var(--muted)]">Submissions are logged to a private Supabase instance. We use these details to respond to your enquiry.</p>
  </form>;
}
