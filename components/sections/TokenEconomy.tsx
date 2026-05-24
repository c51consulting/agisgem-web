import Link from "next/link";
import { Coins, Flame, Network } from "lucide-react";

export function TokenEconomy() {
  return (
    <section className="py-24 border-t border-[color:var(--border)]">
      <div className="container-x">
        <div className="max-w-2xl">
          <div className="pill mb-4">Token Economy</div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
            Verification activity → token utility. Not the other way around.
          </h2>
          <p className="mt-5 text-[color:var(--muted)] leading-relaxed">
            AGIsGEM turns real-world verification work into on-chain economic participation. Audit
            demand drives protocol usage; protocol usage drives token utility through the Virtuals
            ecosystem. The token is alignment infrastructure — not a slogan.
          </p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-4">
          {[
            { icon: Coins, title: "Audit fees", body: "Pilots and integrations pay protocol fees for Logic Score generation." },
            { icon: Flame, title: "Buyback & burn", body: "A defined share of fees executes structured buyback events tied to published audits." },
            { icon: Network, title: "Virtuals-native", body: "Built as a tokenized AI business under Virtuals Protocol's capital formation model." }
          ].map((c) => (
            <div key={c.title} className="card p-6">
              <c.icon size={18} className="text-[color:var(--accent)] mb-3" />
              <h3 className="font-semibold mb-2">{c.title}</h3>
              <p className="text-sm text-[color:var(--muted)] leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/token" className="btn-secondary text-sm">Token & Virtuals details</Link>
          <a
            href="https://app.virtuals.io/prototypes/0xf5ae0Ac5Ee87f3aA80984AD2de18de5CBc0b7395"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary text-sm"
          >
            View on Virtuals Protocol
          </a>
        </div>
      </div>
    </section>
  );
}
