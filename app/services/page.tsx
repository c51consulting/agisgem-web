import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata = { title: "Services & Pricing" };

const services = [
  { name: "RWA Readiness Scan", price: "A$1,500–A$3,000", outcome: "Evidence register, preliminary Logic Score, key risk flags and next-action summary." },
  { name: "Livestock Contract Risk Review", price: "A$3,000–A$7,500", outcome: "Structured review of supplied contracts, counterparties, performance evidence and concentration risks." },
  { name: "Property & Water Evidence Review", price: "A$5,000–A$10,000", outcome: "Document register and evidence-gap analysis for property, lease and water materials. Not a valuation or title opinion." },
  { name: "Investor / Lender DD Pack", price: "A$7,500–A$15,000", outcome: "Review-ready evidence pack, scoring explanation, limitations and decision summary." },
  { name: "Platform / API Integration", price: "A$15,000–A$40,000 setup", outcome: "Scoped workflow configuration, data mapping, testing and implementation support." },
  { name: "Continuous Monitoring", price: "A$1,000–A$5,000 monthly", outcome: "Scheduled rechecks, evidence exceptions and portfolio reporting." }
];

export default function ServicesPage() {
  return <>
    <PageHeader eyebrow="Commercial services" title="Buy a verification outcome—not a token promise." description="AGIsGEM founding pilots turn supplied agricultural evidence into a structured, explainable and versioned assessment. Every engagement has written scope, dependencies and limitations." />
    <section className="container-x py-16">
      <div className="card p-7 md:p-9 border-[color:var(--accent)]/40">
        <div className="pill mb-4">Recommended first engagement</div>
        <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-end">
          <div><h2 className="text-2xl md:text-3xl font-semibold">Founding Verification Pilot</h2><p className="mt-3 text-[color:var(--muted)] max-w-3xl leading-relaxed">A fixed-scope assessment for one asset cohort or contract set, delivered through an evidence register, risk flags, a Logic Score explanation and versioned PDF and JSON outputs. Human review is included during the controlled pilot phase.</p></div>
          <Link href="/contact?type=pilot" className="btn-primary whitespace-nowrap">Scope a paid pilot <ArrowRight size={16} /></Link>
        </div>
      </div>
      <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service) => <article key={service.name} className="card p-6 flex flex-col"><div className="text-xs uppercase tracking-wider text-[color:var(--accent)]">From {service.price} ex GST</div><h2 className="mt-3 text-xl font-semibold">{service.name}</h2><p className="mt-3 text-sm text-[color:var(--muted)] leading-relaxed flex-1">{service.outcome}</p><Link href="/contact?type=pilot" className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-[color:var(--accent)]">Request scope <ArrowRight size={14} /></Link></article>)}
      </div>
      <div className="mt-14 grid lg:grid-cols-2 gap-8">
        <div><h2 className="text-2xl font-semibold">Typical pilot outputs</h2><ul className="mt-5 space-y-3 text-sm text-[color:var(--muted)]">{["Scope and evidence-source statement","Evidence register and missing-evidence list","Explainable risk flags and preliminary Logic Score","Named human quality review","Versioned PDF and machine-readable JSON","Unique report identifier and approved timestamp/hash"].map((item) => <li key={item} className="flex gap-2"><CheckCircle2 size={17} className="text-[color:var(--accent)] shrink-0" />{item}</li>)}</ul></div>
        <div className="card p-6"><h2 className="text-xl font-semibold">Important limitations</h2><p className="mt-3 text-sm text-[color:var(--muted)] leading-relaxed">AGIsGEM outputs are decision-support materials. Unless expressly commissioned from an appropriately qualified provider, they are not legal opinions, valuations, audits, financial-product advice, title guarantees, funding approvals or confirmations from government registries. Third-party searches, specialist review, travel and data-provider charges are additional.</p></div>
      </div>
    </section>
  </>;
}
