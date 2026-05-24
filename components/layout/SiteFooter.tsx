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
            The intelligence layer for real-world assets. Built by REALM360 Intelligence on Virtuals Protocol.
          </p>
        </div>
        <div>
          <div className="text-[color:var(--ink)] font-medium mb-3">Product</div>
          <ul className="space-y-2 text-[color:var(--muted)]">
            <li><Link href="/platform">Platform</Link></li>
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
              <a href="https://app.virtuals.io/prototypes/0xf5ae0Ac5Ee87f3aA80984AD2de18de5CBc0b7395" target="_blank" rel="noreferrer">
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
          <div className="text-[color:var(--ink)] font-medium mb-3">Company</div>
          <ul className="space-y-2 text-[color:var(--muted)]">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/contact?type=investor">Investor Interest</Link></li>
            <li><Link href="/contact?type=partner">Partnerships</Link></li>
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
