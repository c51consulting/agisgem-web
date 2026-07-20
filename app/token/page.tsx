import { PageHeader } from "@/components/ui/PageHeader";

export const metadata = { title: "Token & Virtuals" };

export default function TokenPage() {
  return (
    <>
      <PageHeader
        eyebrow="Token & Virtuals"
        title="$AGISGEM — the token supporting the AGIsGEM agent ecosystem."
        description="AGIsGEM is listed through Virtuals Protocol on Base. Commercial verification is the product; token utility will be introduced only where technically operational and legally reviewed."
      />
      <section className="container-x py-16 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 prose-light">
          <h2>Why Virtuals</h2>
          <p>
            Virtuals Protocol presents AI agents as tokenized businesses with identity, capital
            formation, and on-chain economic participation. That model fits AGIsGEM: a verification
            agent intended to provide paid verification services to people, platforms and other agents.
          </p>
          <h2>Token utility</h2>
          <ul>
            <li>Potential service discounts or priority access, subject to published terms.</li>
            <li>Potential payment for agent services where technically and legally supported.</li>
            <li>Potential participation in non-financial product and dataset priorities.</li>
            <li>Every utility feature will be labelled planned, pilot or live.</li>
          </ul>
          <h2>No promised return</h2>
          <p>
            The token does not represent livestock, land, shares in AGIsGEM or REALM, guaranteed
            platform revenue, a buyback entitlement or a promised return. Token markets are volatile.
            No person should acquire the token based on an expectation that pilot fees will increase its price.
          </p>
          <h2>Roadmap</h2>
          <ul>
            <li><strong>Phase 1:</strong> Paid founding pilot, methodology v0.1 and redacted sample report.</li>
            <li><strong>Phase 2:</strong> Approved data integration, second and third paid pilots.</li>
            <li><strong>Phase 3:</strong> Institutional API, carbon module, first ag-lender integration.</li>
            <li><strong>Phase 4:</strong> ACF graduation path inside Virtuals; full agent launch.</li>
          </ul>
          <h2>Transparency commitment</h2>
          <p>
            Material allocation, vesting, treasury and utility information will be published only after
            it is verified against authoritative contract and platform records. Public communications
            will distinguish working capability from roadmap intentions.
          </p>
        </div>
        <aside className="space-y-4">
          <div className="card p-5">
            <div className="text-xs uppercase tracking-wider text-[color:var(--muted)] mb-2">Chain</div>
            <div className="font-medium">Base · ERC-20</div>
          </div>
          <div className="card p-5">
            <div className="text-xs uppercase tracking-wider text-[color:var(--muted)] mb-2">Listing</div>
            <a
              href="https://app.virtuals.io/virtuals/42445"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-[color:var(--accent)]"
            >
              View on Virtuals →
            </a>
          </div>
          <div className="card p-5">
            <div className="text-xs uppercase tracking-wider text-[color:var(--muted)] mb-2">Community</div>
            <a href="https://x.com/AGIsGEM" target="_blank" rel="noreferrer" className="font-medium text-[color:var(--accent)]">
              X / @AGIsGEM →
            </a>
          </div>
        </aside>
      </section>
    </>
  );
}
