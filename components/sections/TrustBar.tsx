export function TrustBar() {
  const items = ["REALM360 Intelligence", "Virtuals Protocol", "Base Network", "NLIS-anchored", "RWA-native"];
  return (
    <section className="border-y border-[color:var(--border)] bg-[color:var(--panel)]/40">
      <div className="container-x py-6 flex flex-wrap items-center justify-between gap-4 text-xs uppercase tracking-widest text-[color:var(--muted)]">
        {items.map((i) => (
          <span key={i}>{i}</span>
        ))}
      </div>
    </section>
  );
}
