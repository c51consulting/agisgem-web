import { PageHeader } from "@/components/ui/PageHeader";
import { VerificationOracle } from "@/components/VerificationOracle";

export const metadata = { title: "Methodology" };

const steps = [
  ["Gather", "Collect approved claims, records, sources and assessment requirements."],
  ["Analyse", "Identify missing information, conflicts, source limitations and material risks."],
  ["Match", "Compare evidence against the criteria agreed for the intended decision."],
  ["Evaluate", "Document findings, reasoning, exceptions, limitations and next steps."]
];

export default function PlatformPage() {
  return <>
    <PageHeader eyebrow="Methodology" title="G.A.M.E.: Gather, Analyse, Match, Evaluate." description="A structured approach for examining evidence against defined claims and criteria. The assessment output is decision support. It does not replace qualified legal, financial, cybersecurity or regulatory review." />
    <section className="container-x py-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {steps.map(([title, text], index) => <article key={title} className="card p-5">
        <div className="text-xs font-mono text-[color:var(--accent)]">0{index + 1}</div>
        <h2 className="mt-3 text-lg font-semibold">{title}</h2>
        <p className="mt-2 text-sm text-[color:var(--muted)] leading-relaxed">{text}</p>
      </article>)}
    </section>
    <section className="container-x pt-10 pb-4">
      <div className="pill mb-4">Prototype workflow demonstration</div>
      <h2 className="text-2xl font-semibold">Livestock evidence example</h2>
      <p className="mt-3 max-w-3xl text-sm text-[color:var(--muted)] leading-relaxed">This interactive demonstration uses fictional, pre-populated statuses. It does not retrieve live registry data, verify a real asset or issue a customer assessment. It preserves the original agricultural development use case.</p>
    </section>
    <VerificationOracle />
  </>;
}
