import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ProofPreview() {
  return (
    <section className="py-24 border-t border-[color:var(--border)]">
      <div className="container-x grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <div className="pill mb-4">Proof, Not Promises</div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
            A badge is only as credible as the record behind it.
          </h2>
          <p className="mt-5 text-[color:var(--muted)] leading-relaxed max-w-xl">
            Every issued “Verified by AGIsGEM” badge must resolve to a current public report status,
            methodology version, evidence window and limitations. Pilot samples are never labelled verified.
          </p>
          <Link href="/proof" className="btn-secondary mt-6 text-sm">
            Open the Verification Log <ArrowRight size={14} />
          </Link>
        </div>
        <div className="card p-6">
          <div className="flex items-center justify-between text-xs uppercase tracking-wider text-[color:var(--muted)] mb-4">
            <span>Pilot #001 · Spotlight</span>
            <span className="pill">In design</span>
          </div>
          <h3 className="text-xl font-semibold mb-2">
            Verified Livestock Contract — Australian Cattle
          </h3>
          <p className="text-sm text-[color:var(--muted)] leading-relaxed">
            A proposed pilot workflow for a livestock contract: evidence mapping, provenance and
            performance checks, risk flags, a Logic Score explanation and versioned report output.
          </p>
          <div className="mt-5 grid grid-cols-3 gap-3 text-xs">
            <div className="rounded-lg border border-[color:var(--border)] p-3">
              <div className="text-[color:var(--muted)]">Provenance</div>
              <div className="text-[color:var(--accent)] font-semibold mt-1">Scoped</div>
            </div>
            <div className="rounded-lg border border-[color:var(--border)] p-3">
              <div className="text-[color:var(--muted)]">Health/Weight</div>
              <div className="text-[color:var(--accent)] font-semibold mt-1">Scoped</div>
            </div>
            <div className="rounded-lg border border-[color:var(--border)] p-3">
              <div className="text-[color:var(--muted)]">Risk Flags</div>
              <div className="text-[color:var(--accent)] font-semibold mt-1">Scoped</div>
            </div>
          </div>
          <p className="mt-5 text-xs text-[color:var(--muted)]">
            Methodology, source-data fields, and rubric will be published with the pilot. No fictional
            TVL. No placeholder testimonials.
          </p>
        </div>
      </div>
    </section>
  );
}
