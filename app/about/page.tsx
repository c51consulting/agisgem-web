import { PageHeader } from "@/components/ui/PageHeader";

export const metadata = { title: "About" };

export default function AboutPage() {
  return <>
    <PageHeader eyebrow="About" title="Evidence before assertion." description="AGIsGEM is an evolving evidence-validation capability developed within the C51 and AGI360 ecosystem." />
    <section className="container-x py-16 grid lg:grid-cols-3 gap-10">
      <div className="lg:col-span-2 prose-light">
        <h2>Purpose</h2>
        <p>Help organisations examine the evidence behind assets, technologies and commercial claims before they rely on them for a purchase, investment, deployment or market decision.</p>
        <h2>How we work</h2>
        <p>Each engagement starts with agreed claims, evidence, criteria and intended use. Findings identify what was reviewed, what the material supports, what remains uncertain and what should happen next.</p>
        <h2>Capability and maturity</h2>
        <p>AGIsGEM’s evidence method and product are evolving. Available capabilities depend on the specific sources, data access, test conditions and qualified review that can be arranged for the engagement. Website examples are clearly labelled; they are not customer results.</p>
        <h2>Conflicts and independence</h2>
        <p>AGI360, C51 or associated businesses may also advise, develop, license or commercialise technology under review. We disclose relevant relationships and describe the work as an evidence-based assessment unless independence can genuinely be established.</p>
        <h2>Limits</h2>
        <p>A document fingerprint can help show that a file matches a recorded version. It cannot prove the document is truthful. A result applies only to the defined evidence, criteria and test conditions. AGIsGEM does not provide implied certification, legal ownership guarantees, financial advice, cybersecurity audits or regulatory approval.</p>
      </div>
      <aside className="space-y-4">
        <div className="card p-5"><div className="text-xs uppercase tracking-wider text-[color:var(--muted)] mb-2">Ecosystem</div><div className="font-medium">AGI360 · C51 Consulting</div></div>
        <div className="card p-5"><div className="text-xs uppercase tracking-wider text-[color:var(--muted)] mb-2">Original development area</div><div className="font-medium">Agriculture and livestock evidence</div></div>
      </aside>
    </section>
  </>;
}
