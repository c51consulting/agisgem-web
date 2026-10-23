import { PageHeader } from "@/components/ui/PageHeader";

export const metadata = { title: "Applications" };

const cases = [
  ["AI and software", "Compare product or agent claims with agreed scenarios, test records and observed results. Any technical testing is limited to the supplied setup and stated conditions."],
  ["Real-world assets", "Review records supporting asset identity, documented interests, provenance and other stated attributes. Legal title and encumbrances require authoritative sources and qualified review."],
  ["RWA and tokenisation", "Examine the evidence behind an asset-linked digital representation, including issuer claims, source records and data integrity."],
  ["Commercial and investment claims", "Separate demonstrated evidence from estimates, assumptions and claims that still need support."],
  ["Agriculture and livestock", "Retain the original development use case: reconcile livestock, contract, operator and related asset evidence where the sources and access are available."]
];

export default function UseCasesPage() {
  return <>
    <PageHeader eyebrow="Applications" title="Different industries. The same evidence discipline." description="These are assessment applications, not a promise that every workflow is already automated or commercially operational. Each engagement is checked for scope, evidence access and reviewer capability." />
    <section className="container-x py-16 grid md:grid-cols-2 gap-4">
      {cases.map(([title, body]) => <article key={title} className="card p-6">
        <div className="text-xs uppercase tracking-wider text-[color:var(--accent)]">Assessment area</div>
        <h2 className="text-xl font-semibold mt-3">{title}</h2>
        <p className="text-sm text-[color:var(--muted)] leading-relaxed mt-3">{body}</p>
      </article>)}
      <article className="card p-6 md:col-span-2 border-[color:var(--accent)]/30">
        <div className="text-xs uppercase tracking-wider text-[color:var(--accent)]">Within AGI360</div>
        <h2 className="text-xl font-semibold mt-3">Validation can feed commercial readiness.</h2>
        <p className="text-sm text-[color:var(--muted)] leading-relaxed mt-3">Where a client is preparing for market engagement, AGI360 may scope a separate Validation & Readiness review alongside Market Access.</p>
        <a href="https://agi360.online/#/market-access" className="mt-4 inline-flex items-center gap-2 text-sm text-[color:var(--accent)]">View AGI360 Market Access →</a>
      </article>
    </section>
  </>;
}
