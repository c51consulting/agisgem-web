import Link from "next/link";
import { Beef, Leaf, Wheat, Warehouse, Banknote } from "lucide-react";

const cases = [
  {
    icon: Beef,
    title: "Livestock provenance & finance",
    body: "NLIS-anchored verification for Australian cattle contracts, from sale yard to lender."
  },
  {
    icon: Leaf,
    title: "Carbon credit verification",
    body: "Score additionality, permanence, and methodology compliance for ag and nature-based credits."
  },
  {
    icon: Wheat,
    title: "Commodities & supply chain",
    body: "Grain, fibre, and produce — risk-flag inventory before warehouse receipts hit capital markets."
  },
  {
    icon: Warehouse,
    title: "Warehouse-receipt RWAs",
    body: "Independent proof layer for collateralised inventory in tokenization workflows."
  },
  {
    icon: Banknote,
    title: "Trade & asset finance",
    body: "Counterparty and contract due diligence for ag-lenders, insurers, and DeFi underwriters."
  }
];

export function UseCases() {
  return (
    <section className="py-24 border-t border-[color:var(--border)]">
      <div className="container-x">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
          <div className="max-w-2xl">
            <div className="pill mb-4">Use Cases</div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
              Agriculture is the wedge. RWAs are the platform.
            </h2>
          </div>
          <Link href="/use-cases" className="btn-secondary text-sm">All use cases</Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cases.map((c) => (
            <div key={c.title} className="card p-6 hover:border-[color:var(--accent)] transition-colors">
              <div className="w-10 h-10 rounded-lg bg-[rgba(125,211,95,0.08)] border border-[color:var(--border)] flex items-center justify-center mb-4">
                <c.icon size={18} className="text-[color:var(--accent)]" />
              </div>
              <h3 className="font-semibold mb-2">{c.title}</h3>
              <p className="text-sm text-[color:var(--muted)] leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
