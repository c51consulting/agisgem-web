import Link from "next/link";

const nav = [
  { href: "/services", label: "Services" },
  { href: "/platform", label: "Platform" },
  { href: "/use-cases", label: "Use Cases" },
  { href: "/proof", label: "Proof" },
  { href: "/token", label: "Token & Virtuals" },
  { href: "/developers", label: "Developers" },
  { href: "/about", label: "About" }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-[rgba(10,14,10,0.78)] border-b border-[color:var(--border)]">
      <div className="container-x flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="inline-block w-2.5 h-2.5 rounded-sm bg-[color:var(--accent)]" />
          <span>AGIsGEM</span>
          <span className="hidden sm:inline text-xs font-normal text-[color:var(--muted)] ml-1">
            / RWA Intelligence Oracle
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-[color:var(--muted)]">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="hover:text-[color:var(--ink)] transition-colors">
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link href="/contact" className="btn-primary text-sm">
            Book a pilot
          </Link>
        </div>
      </div>
    </header>
  );
}
