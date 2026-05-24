import { PageHeader } from "@/components/ui/PageHeader";
import { Beef, Leaf, Wheat, Warehouse, Banknote } from "lucide-react";

export const metadata = { title: "Use Cases" };

const cases = [
  {
    icon: Beef,
    title: "Livestock provenance & finance",
    body:
      "AGIsGEM verifies cattle contracts against NLIS records, weight and health histories, and sale data — giving ag-lenders, processors, and tokenization platforms a defensible underwriting signal."
  },
  {
    icon: Leaf,
    title: "Carbon credit verification",
    body:
      "Scoring methodology compliance, additionality, permanence, and counterparty risk for agricultural and nature-based carbon programs."
  },
  {
    icon: Wheat,
    title: "Commodity & supply chain risk",
    body:
      "Grain, fibre, produce, and other ag commodities — risk-flag the inventory before warehouse receipts hit capital markets."
  },
  {
    icon: Warehouse,
    title: "Warehouse-receipt RWAs",
    body:
      "Independent verification layer for collateralised inventory in tokenization workflows, with publishable proof artefacts."
  },
  {
    icon: Banknote,
    title: "Trade & asset finance due diligence",
    body:
      "Counterparty and contract due diligence outputs for ag-lenders, insurers, and DeFi underwriters serving real-world borrowers."
  }
];

export default function UseCasesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Use Cases"
        title="Agriculture-first. RWA-native. Built to scale across asset classes."
        description="AGIsGEM is designed as broader RWA intelligence infrastructure. Agriculture is the first commercially credible wedge because of provenance complexity, compliance density, and underwriting friction — but the platform extends well beyond it."
      />
      <section className="container-x py-16 grid md:grid-cols-2 gap-4">
        {cases.map((c) => (
          <div key={c.title} className="card p-6">
            <div className="w-10 h-10 rounded-lg bg-[rgba(125,211,95,0.08)] border border-[color:var(--border)] flex items-center justify-center mb-4">
              <c.icon size={18} className="text-[color:var(--accent)]" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{c.title}</h3>
            <p className="text-sm text-[color:var(--muted)] leading-relaxed">{c.body}</p>
          </div>
        ))}
      </section>
    </>
  );
}
