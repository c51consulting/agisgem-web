import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata = { title: "Assessment Services" };

const services = [
  ["AI and technology claims", "Review stated capabilities, test evidence, limitations and criteria for an intended workflow."],
  ["Real-world asset evidence", "Review supplied records, documented interests, evidence sources, inconsistencies and gaps."],
  ["RWA and tokenisation readiness", "Assess supporting asset evidence and issuer claims ahead of separate legal, financial and technical diligence."],
  ["Commercial claims", "Compare selected business, investment or operational claims with agreed supporting sources."],
  ["Integration discovery", "Discuss whether a proposed platform or API use case is feasible. No live integration is implied."]
];

export default function ServicesPage() {
  return <>
    <PageHeader eyebrow="Commercial services" title="A scoped assessment, tied to a real decision." description="Start by agreeing the claim, evidence, intended use and criteria. We confirm suitability, delivery boundaries and fees in writing before work begins." />
    <section className="container-x py-16">
      <div className="card p-7 md:p-9 border-[color:var(--accent)]/40">
        <div className="pill mb-4">First engagement</div>
        <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-end">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">Validation Readiness Review</h2>
            <p className="mt-3 text-[color:var(--muted)] max-w-3xl leading-relaxed">A defined first review to clarify the claims under consideration, examine available evidence, identify important gaps and recommend whether to proceed, remediate, retest or hold. Technical testing is included only when it is separately scoped.</p>
            <p className="mt-3 text-sm text-[color:var(--muted)]">Bespoke scope and quotation. No fixed public price.</p>
          </div>
          <Link href="/contact?type=validation" className="btn-primary whitespace-nowrap">Discuss an assessment <ArrowRight size={16} /></Link>
        </div>
      </div>
      <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map(([name, outcome]) => <article key={name} className="card p-6">
          <h2 className="text-xl font-semibold">{name}</h2>
          <p className="mt-3 text-sm text-[color:var(--muted)] leading-relaxed">{outcome}</p>
        </article>)}
      </div>
      <div className="mt-10 grid lg:grid-cols-2 gap-8">
        <div className="card p-6">
          <h2 className="text-xl font-semibold">Possible outputs</h2>
          <ul className="mt-5 space-y-3 text-sm text-[color:var(--muted)]">
            {["Agreed claim and scope statement","Evidence and source register","Claim-to-evidence assessment","Gaps, conflicts and limitations","Testing results when testing is included","Recommended actions and revalidation needs"].map((item) => <li key={item} className="flex gap-2"><CheckCircle2 size={17} className="text-[color:var(--accent)] shrink-0" />{item}</li>)}
          </ul>
        </div>
        <div className="card p-6">
          <h2 className="text-xl font-semibold">What the assessment is not</h2>
          <p className="mt-3 text-sm text-[color:var(--muted)] leading-relaxed">It is not automatically a certification, legal opinion, valuation, financial advice, cybersecurity audit, regulatory approval, title guarantee or promise of future performance. Results depend on the agreed criteria, evidence, test conditions and reviewer.</p>
        </div>
      </div>
    </section>
  </>;
}
