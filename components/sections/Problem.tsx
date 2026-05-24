export function Problem() {
  return (
    <section className="py-24">
      <div className="container-x grid md:grid-cols-2 gap-12 items-start">
        <div>
          <div className="pill mb-4">The Problem</div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
            RWAs fail when verification is weak.
          </h2>
        </div>
        <div className="space-y-5 text-[color:var(--muted)] leading-relaxed">
          <p>
            Most real-world assets are not finance-ready because the underlying data is fragmented,
            inconsistent, and difficult to trust at underwriting speed.
          </p>
          <p>
            Tokenization platforms promise on-chain liquidity, but the off-chain proof is brittle —
            paper certificates, manual attestations, opaque provenance chains. Capital cannot move
            with confidence on data that no one has independently verified.
          </p>
          <p>
            AGIsGEM is the verification layer that sits between the asset and the capital — turning
            raw supply chain, regulatory, and operational data into a decision-grade signal.
          </p>
        </div>
      </div>
    </section>
  );
}
