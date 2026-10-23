import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-[color:var(--border)] mt-16">
      <div className="container-x py-12 grid gap-8 md:grid-cols-4 text-sm">
        <div>
          <div className="flex items-center gap-2 font-semibold mb-3"><span className="inline-block w-2.5 h-2.5 rounded-sm bg-[color:var(--accent)]" />AGIsGEM</div>
          <p className="text-[color:var(--muted)] leading-relaxed">An evidence-based framework for examining claims about technology, assets and commercial propositions. Scope and availability are confirmed for each engagement.</p>
        </div>
        <div>
          <div className="text-[color:var(--ink)] font-medium mb-3">Explore</div>
          <ul className="space-y-2 text-[color:var(--muted)]">
            <li><Link href="/platform">G.A.M.E. methodology</Link></li>
            <li><Link href="/use-cases">Applications</Link></li>
            <li><Link href="/services">Assessment services</Link></li>
            <li><Link href="/proof">Verification log</Link></li>
            <li><Link href="/developers">Integration enquiries</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-[color:var(--ink)] font-medium mb-3">Ecosystem</div>
          <ul className="space-y-2 text-[color:var(--muted)]">
            <li><a href="https://agi360.online/#/market-access">AGI360 Market Access</a></li>
            <li><Link href="/token">Token and Virtuals information</Link></li>
            <li><a href="https://app.virtuals.io/virtuals/42445" target="_blank" rel="noreferrer">Virtuals listing</a></li>
            <li><a href="https://x.com/AGIsGEM" target="_blank" rel="noreferrer">X / @AGIsGEM</a></li>
          </ul>
        </div>
        <div>
          <div className="text-[color:var(--ink)] font-medium mb-3">Contact</div>
          <ul className="space-y-2 text-[color:var(--muted)]">
            <li><a href="mailto:agi@c51consulting.com" className="break-all hover:text-[color:var(--accent)]">agi@c51consulting.com</a></li>
            <li><Link href="/contact?type=validation">Request validation</Link></li>
            <li><Link href="/contact?type=integration">Discuss an integration</Link></li>
            <li><Link href="/about">About and limitations</Link></li>
          </ul>
        </div>
      </div>
      <div className="container-x py-6 border-t border-[color:var(--border)] flex flex-col md:flex-row gap-3 md:items-center md:justify-between text-xs text-[color:var(--muted)]">
        <div>© {new Date().getFullYear()} AGIsGEM.</div>
        <div>Evidence-based assessment · No token purchase required</div>
      </div>
    </footer>
  );
}
