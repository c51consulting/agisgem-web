import { PageHeader } from "@/components/ui/PageHeader";
import { LeadForm } from "@/components/ui/LeadForm";

export const metadata = { title: "Request Validation" };

type LeadType = "pilot" | "investor" | "partner" | "community" | "validation" | "integration";

export default function ContactPage({ searchParams }: { searchParams?: { type?: string } }) {
  const allowed: LeadType[] = ["pilot", "investor", "partner", "community", "validation", "integration"];
  const raw = (searchParams?.type || "validation") as LeadType;
  const defaultType = allowed.includes(raw) ? raw : "validation";

  return <>
    <PageHeader eyebrow="Enquiry" title="Tell us what you need to establish." description="Share a short, non-confidential summary. We will confirm whether the request fits the available evidence, criteria and expertise, then agree a written scope and fee before work begins." />
    <section className="container-x py-16 grid lg:grid-cols-3 gap-10">
      <div className="lg:col-span-2"><LeadForm defaultType={defaultType} /></div>
      <aside className="space-y-4">
        <div className="card p-5"><div className="text-xs uppercase tracking-wider text-[color:var(--muted)] mb-2">Email</div><a href="mailto:agi@c51consulting.com" className="font-medium text-[color:var(--accent)] break-all">agi@c51consulting.com</a></div>
        <div className="card p-5"><div className="text-xs uppercase tracking-wider text-[color:var(--muted)] mb-2">Before you submit</div><p className="text-sm text-[color:var(--muted)] leading-relaxed">Do not include confidential documents, passwords, API keys or other credentials in this form. If an assessment proceeds, we will agree a suitable evidence-transfer method.</p></div>
        <div className="card p-5"><div className="text-xs uppercase tracking-wider text-[color:var(--muted)] mb-2">AGI360</div><a href="https://agi360.online/#/market-access" className="font-medium text-[color:var(--accent)]">Market Access and Validation & Readiness</a></div>
      </aside>
    </section>
  </>;
}
