import { PageHeader } from "@/components/ui/PageHeader";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Built by operators who understand real-world assets."
        description="AGIsGEM is an independent verification platform, shipped on Virtuals Protocol."
      />
      <section className="container-x py-16 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 prose-light">
          <h2>Mission</h2>
          <p>
            Make real-world assets investable. By combining verification workflows, risk logic, and
            on-chain proof anchoring, AGIsGEM enables lenders, marketplaces, and tokenization platforms
            to assess provenance, integrity, and finance-readiness <em>before</em> capital is deployed.
          </p>
          <h2>Why agriculture first</h2>
          <p>
            Agricultural RWAs are uniquely difficult to verify: provenance is fragmented, regulatory
            anchors (like Australia's NLIS) are robust but under-leveraged, and underwriting depends on
            data that has historically lived in spreadsheets and paper trails. Solving verification for
            agriculture solves the hardest version of the RWA problem — and unlocks adjacent verticals.
          </p>
          <h2>Partnership and pilot model</h2>
          <p>
            We work with a small cohort of named partners — livestock operators, ag-lenders, carbon
            program managers, and tokenization platforms — and publish every audit as a Verification
            Log entry. No fictional TVL. No placeholder testimonials. Real pilots, public proof.
          </p>
        </div>
        <aside className="space-y-4">
          <div className="card p-5">
            <div className="text-xs uppercase tracking-wider text-[color:var(--muted)] mb-2">Shipped on</div>
            <div className="font-medium">Virtuals Protocol · Base</div>
          </div>
        </aside>
      </section>
    </>
  );
}
