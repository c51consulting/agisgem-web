export function TrustBar() {
  const items = [
    { name: "REALM360 Intelligence", tag: "Operator" },
    { name: "Virtuals Protocol", tag: "Agent Layer" },
    { name: "Base", tag: "Settlement" },
    { name: "NLIS", tag: "Provenance" },
    { name: "IPFS", tag: "Proof Anchor" },
    { name: "REALM Group Aus", tag: "Ag Network" }
  ];
  return (
    <section className="border-y border-[color:var(--border)] bg-[color:var(--panel)]/40">
      <div className="container-x py-8">
        <div className="text-[11px] uppercase tracking-widest text-[color:var(--muted)] mb-4">
          Ecosystem · Anchored on institutional + ag-native infrastructure
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {items.map((i) => (
            <div
              key={i.name}
              className="card px-3 py-3 flex flex-col justify-between min-h-[68px] hover:border-[color:var(--accent)]/40 transition-colors"
            >
              <div className="text-sm font-medium text-[color:var(--ink)] leading-tight">
                {i.name}
              </div>
              <div className="mt-1 text-[10px] uppercase tracking-wider text-[color:var(--muted)]">
                {i.tag}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
