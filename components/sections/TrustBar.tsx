export function TrustBar() {
  const items = [
    { name: "REALM", tag: "Founding use case" },
    { name: "Virtuals Protocol", tag: "Agent ecosystem" },
    { name: "Base", tag: "Token network" },
    { name: "NLIS", tag: "Planned evidence source" },
    { name: "IPFS", tag: "Planned proof layer" },
    { name: "Human review", tag: "Pilot quality control" }
  ];
  return (
    <section className="border-y border-[color:var(--border)] bg-[color:var(--panel)]/40">
      <div className="container-x py-8">
        <div className="text-[11px] uppercase tracking-widest text-[color:var(--muted)] mb-4">
          Pilot architecture · relationships and integrations are labelled by current status
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
