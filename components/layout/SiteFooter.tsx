import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-[color:var(--border)] mt-24">
      <div className="container-x py-12 grid gap-8 md:grid-cols-4 text-sm">
        <div>
          <div className="flex items-center gap-2 font-semibold mb-3">
            <span className="inline-block w-2.5 h-2.5 rounded-sm bg-[color:var(--accent)]" />
            AGIsGEM
          </div>
          <p className="text-[color:var(--muted)] leading-relaxed">
            AI-assisted evidence and risk scoring for agricultural real-world assets. Founding commercial pilot.
          </p>
        </div>
        <div>
          <div className="text-[color:var(--ink)] font-medium mb-3">Product</div>
          <ul className="space-y-2 text-[color:var(--muted)]">
            <li><Link href="/platform">Platform</Link></li>
            <li><Link href="/services">Services & Pricing</Link></li>
            <li><Link href="/use-cases">Use Cases</Link></li>
            <li><Link href="/proof">Proof Logs</Link></li>
            <li><Link href="/developers">Developers</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-[color:var(--ink)] font-medium mb-3">Ecosystem</div>
          <ul className="space-y-2 text-[color:var(--muted)]">
            <li><Link href="/token">Token & Virtuals</Link></li>
            <li>
              <a href="https://app.virtuals.io/virtuals/42445" target="_blank" rel="noreferrer">
                Virtuals Listing
              </a>
            </li>
            <li>
              <a href="https://x.com/AGIsGEM" target="_blank" rel="noreferrer">X / @AGIsGEM</a>
            </li>
            <li>
              <a href="https://realm360.10web.cloud/agisgem-transforming-livestock-verification-finance/" target="_blank" rel="noreferrer">
                REALM360 Editorial
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div className="text-[color:var(--ink)] font-medium mb-3">Contact</div>
          <ul className="space-y-2 text-[color:var(--muted)]">
            <li>
              <a href="mailto:realm360@realmgroup.global" className="break-all hover:text-[color:var(--accent)]">
                realm360@realmgroup.global
              </a>
            </li>
            <li>
              <a href="tel:+61478834818" className="hover:text-[color:var(--accent)]">
                +61 478 834 818
              </a>
            </li>
            <li><Link href="/contact">Request a pilot</Link></li>
            <li><Link href="/contact?type=investor">Investor interest</Link></li>
            <li><Link href="/about">About</Link></li>
          </ul>
        </div>
      </div>
      <div className="container-x py-6 border-t border-[color:var(--border)] flex flex-col md:flex-row gap-3 md:items-center md:justify-between text-xs text-[color:var(--muted)]">
        <div>© {new Date().getFullYear()} AGIsGEM · A REALM Group Global initiative.</div>
        <div>$AGISGEM on Base · Verification, not speculation.</div>
      </div>
    </footer>
  );
}
