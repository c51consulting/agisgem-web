export function PageHeader({
  eyebrow,
  title,
  description
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative border-b border-[color:var(--border)]">
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />
      <div className="container-x relative pt-20 pb-14">
        <div className="pill mb-4">{eyebrow}</div>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight max-w-3xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-[color:var(--muted)] leading-relaxed">{description}</p>
        )}
      </div>
    </section>
  );
}
