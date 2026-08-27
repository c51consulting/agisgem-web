import Link from "next/link";
import { Coins, ShieldCheck, Network } from "lucide-react";

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
            Commercial verification is the product. The AGISGEM token supports participation and
            potential future access within the Virtuals agent ecosystem; it does not represent
            livestock, land, equity ownership, guaranteed revenue or a promised return.
          </p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-4">
          {[
            { icon: Coins, title: "Paid services first", body: "Founding pilots, readiness scans and integrations are separately scoped commercial engagements." },
            { icon: ShieldCheck, title: "Utility under review", body: "Access, service discounts and agent-to-agent payments require technical delivery and legal review." },
            { icon: Network, title: "Virtuals-native", body: "AGIsGEM is listed as an agent on Virtuals Protocol on Base." }
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
            href="https://app.virtuals.io/virtuals/42445"
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
