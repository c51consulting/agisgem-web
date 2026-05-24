"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";

type LeadType = "pilot" | "investor" | "partner" | "community";

const labels: Record<LeadType, string> = {
  pilot: "Request a pilot",
  investor: "Investor interest",
  partner: "Integration partner",
  community: "Community signup"
};

export function LeadForm({ defaultType = "pilot" }: { defaultType?: LeadType }) {
  const [type, setType] = useState<LeadType>(defaultType);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [organisation, setOrganisation] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [error, setError] = useState<string>("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setError("");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type, name, email, organisation, message })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Submission failed");
      setStatus("ok");
      setName("");
      setEmail("");
      setOrganisation("");
      setMessage("");
    } catch (err: unknown) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Submission failed");
    }
  }

  if (status === "ok") {
    return (
      <div className="card p-8 text-center">
        <CheckCircle2 className="mx-auto text-[color:var(--accent)] mb-3" size={28} />
        <h3 className="text-xl font-semibold mb-2">Got it — we'll be in touch.</h3>
        <p className="text-sm text-[color:var(--muted)]">
          Your submission has been logged. Expect a response within 2 business days.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="btn-secondary mt-6 text-sm"
        >
          Submit another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="card p-6 md:p-8 space-y-4">
      <div>
        <label className="text-xs uppercase tracking-wider text-[color:var(--muted)] mb-2 block">
          I'm interested as a…
        </label>
        <div className="flex flex-wrap gap-2">
          {(Object.keys(labels) as LeadType[]).map((k) => (
            <button
              key={k}
              type="button"
              onClick={() => setType(k)}
              className={
                "pill cursor-pointer " +
                (type === k
                  ? "!border-[color:var(--accent)] !text-[color:var(--accent)] !bg-[rgba(125,211,95,0.08)]"
                  : "")
              }
            >
              {labels[k]}
            </button>
          ))}
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="text-xs uppercase tracking-wider text-[color:var(--muted)] mb-2 block">
            Name
          </label>
          <input value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label className="text-xs uppercase tracking-wider text-[color:var(--muted)] mb-2 block">
            Email
          </label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
      </div>
      <div>
        <label className="text-xs uppercase tracking-wider text-[color:var(--muted)] mb-2 block">
          Organisation
        </label>
        <input value={organisation} onChange={(e) => setOrganisation(e.target.value)} />
      </div>
      <div>
        <label className="text-xs uppercase tracking-wider text-[color:var(--muted)] mb-2 block">
          What are you trying to verify?
        </label>
        <textarea
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="A few sentences on your asset class, pilot interest, or partnership idea."
        />
      </div>
      {status === "error" && (
        <div className="flex items-start gap-2 text-sm text-red-300">
          <AlertCircle size={16} className="mt-0.5" />
          <span>{error}</span>
        </div>
      )}
      <button type="submit" disabled={status === "loading"} className="btn-primary">
        {status === "loading" ? "Sending…" : "Submit"} <ArrowRight size={16} />
      </button>
      <p className="text-xs text-[color:var(--muted)]">
        We log submissions to a private Supabase instance. No marketing lists. No third-party trackers.
      </p>
    </form>
  );
}
