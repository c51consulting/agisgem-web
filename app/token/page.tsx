import { PageHeader } from "@/components/ui/PageHeader";

export const metadata = { title: "Token & Virtuals" };

export default function TokenPage() {
  return (
    <>
      <PageHeader
        eyebrow="Token & Virtuals"
        title="$AGISGEM — alignment infrastructure for a verification network."
        description="Built within the Virtuals Protocol ecosystem on Base, AGIsGEM is designed as a tokenized AI business where verification demand, product usage, and token utility reinforce each other."
      />
      <section className="container-x py-16 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 prose-light">
          <h2>Why Virtuals</h2>
          <p>
            Virtuals Protocol presents AI agents as tokenized businesses with identity, capital
            formation, and on-chain economic participation. That model fits AGIsGEM: a verification
            oracle whose value is directly proportional to the volume and quality of audits it produces.
          </p>
          <h2>Token utility</h2>
          <ul>
            <li>Pilots and integrations pay protocol fees for Logic Score generation.</li>
            <li>A defined share of fees executes structured buyback events tied to published audits.</li>
            <li>Holders gain access to community signal, governance proposals, and priority pilot waitlist slots.</li>
            <li>Long-term: revenue-share mechanics for ecosystem contributors via the Virtuals capital-formation model.</li>
          </ul>
          <h2>Fee → buyback → burn</h2>
          <p>
            Verification fees flow through a transparent loop: a portion executes scheduled buyback
            events on Virtuals, with buybacks tied to <em>published audits</em>, not arbitrary
            timing. Each buyback event is referenced in the corresponding Verification Log entry.
          </p>
          <h2>Roadmap</h2>
          <ul>
            <li><strong>Phase 1:</strong> Pilot #001 published. Methodology v0.1 public. X reactivation.</li>
            <li><strong>Phase 2:</strong> NLIS integration deepening, second and third pilots, first MOU.</li>
            <li><strong>Phase 3:</strong> Institutional API, carbon module, first ag-lender integration.</li>
            <li><strong>Phase 4:</strong> ACF graduation path inside Virtuals; full agent launch.</li>
          </ul>
          <h2>Tokenomics transparency</h2>
          <p>
            The 25% team allocation vests through June 2027. We will publish wallet activity and unlock
            schedules alongside the Verification Log so the community can audit token-holder dynamics
            directly.
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
              href="https://app.virtuals.io/prototypes/0xf5ae0Ac5Ee87f3aA80984AD2de18de5CBc0b7395"
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
