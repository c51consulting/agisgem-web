import Link from "next/link";

const nav = [
  { href: "/#applications", label: "Applications" },
  { href: "/platform", label: "Methodology" },
  { href: "/services", label: "Services" },
  { href: "/proof", label: "Proof log" },
  { href: "/developers", label: "Integrations" },
  { href: "/token", label: "Token" }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-[rgba(10,14,10,0.88)] border-b border-[color:var(--border)]">
      <div className="container-x flex items-center justify-between min-h-16 gap-4 py-2">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight shrink-0">
          <span className="inline-block w-2.5 h-2.5 rounded-sm bg-[color:var(--accent)]" />
          <span>AGIsGEM</span>
          <span className="hidden lg:inline text-xs font-normal text-[color:var(--muted)] ml-1">/ Evidence Intelligence & Validation</span>
        </Link>
        <nav className="hidden xl:flex items-center gap-5 text-sm text-[color:var(--muted)]">
          {nav.map((n) => <Link key={n.href} href={n.href} className="hover:text-[color:var(--ink)] transition-colors">{n.label}</Link>)}
        </nav>
        <Link href="/contact?type=validation" className="btn-primary text-xs sm:text-sm whitespace-nowrap">Request assessment</Link>
      </div>
    </header>
  );
}
