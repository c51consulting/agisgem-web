import Link from "next/link";
import { ArrowRight, CheckCircle2, FileCheck2, Fingerprint, ShieldAlert } from "lucide-react";

const applications = [
  {
    number: "01",
    title: "AI & technology",
    text: "Examine stated capabilities, test conditions, performance evidence, limitations and deployment readiness."
  },
  {
    number: "02",
    title: "Real-world assets",
    text: "Review asset records, documented interests, provenance, inconsistencies and gaps in the available evidence."
  },
  {
    number: "03",
    title: "RWA & tokenisation",
    text: "Assess the evidence behind asset-linked digital representations before further legal, financial or technical review."
  },
  {
    number: "04",
    title: "Commercial claims",
    text: "Compare business, investment and operational claims with the sources and records supplied for assessment."
  }
];

const steps = [
  ["Gather", "Collect approved records, claims, source information and assessment requirements."],
  ["Analyse", "Identify missing evidence, inconsistencies, source limits and material risks."],
  ["Match", "Compare available evidence against the agreed criteria and claims."],
  ["Evaluate", "Document findings, exceptions, limits and recommended next steps."]
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-60 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[color:var(--bg)] pointer-events-none" />
        <div className="container-x relative pt-20 pb-24 md:pt-28 md:pb-32">
          <div className="pill mb-6"><CheckCircle2 size={14} className="text-[color:var(--accent)]" /> Evidence before assertion</div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.05] max-w-4xl">
            <span className="gradient-text">Can you prove what you’re claiming?</span>
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-[color:var(--muted)] leading-relaxed">
            AGIsGEM helps organisations examine the evidence behind technologies, real-world assets,
            digital asset structures and commercial claims. We identify what the evidence supports,
            where it falls short and what needs attention before you rely on it.
          </p>
          <p className="mt-4 max-w-3xl text-sm text-[color:var(--muted)] leading-relaxed">
            Assessments are scoped to the material, criteria and expertise available for each engagement.
            Specific testing, integrations and service availability are confirmed before work begins.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact?type=validation" className="btn-primary">Request a validation assessment <ArrowRight size={16} /></Link>
            <Link href="/platform" className="btn-secondary">Explore the methodology</Link>
          </div>
          <div className="mt-12 max-w-4xl grid sm:grid-cols-3 gap-3">
            {[
              ["Claims", "What is being asserted?"],
              ["Evidence", "What supports the assertion?"],
              ["Decision", "What can be responsibly concluded?"]
            ].map(([title, text]) => <div key={title} className="card p-5">
              <div className="text-xs uppercase tracking-wider text-[color:var(--accent)]">{title}</div>
              <div className="mt-2 text-sm text-[color:var(--ink)]">{text}</div>
            </div>)}
          </div>
        </div>
      </section>

      <section id="applications" className="container-x py-16 md:py-20">
        <div className="max-w-2xl">
          <div className="pill mb-4">Applications</div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">One evidence method. Different kinds of claims.</h2>
          <p className="mt-4 text-[color:var(--muted)] leading-relaxed">The scope and test method depend on the decision you need to make and the evidence available.</p>
        </div>
        <div className="mt-9 grid md:grid-cols-2 gap-4">
          {applications.map((item) => <article key={item.number} className="card p-6 md:p-7">
            <div className="text-xs font-mono text-[color:var(--accent)]">{item.number}</div>
            <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>
            <p className="mt-3 text-sm text-[color:var(--muted)] leading-relaxed">{item.text}</p>
          </article>)}
        </div>
      </section>

      <section id="method" className="border-y border-[color:var(--border)] bg-[color:var(--panel)]/50">
        <div className="container-x py-16 md:py-20">
          <div className="max-w-2xl">
            <div className="pill mb-4">G.A.M.E. methodology</div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">A clear path from claim to finding.</h2>
          </div>
          <div className="mt-9 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map(([title, text], i) => <article key={title} className="card p-5">
              <div className="text-xs font-mono text-[color:var(--accent)]">0{i + 1}</div>
              <h3 className="mt-3 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-[color:var(--muted)] leading-relaxed">{text}</p>
            </article>)}
          </div>
        </div>
      </section>

      <section className="container-x py-16 md:py-20 grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <div className="pill mb-4">Illustrative outcome only</div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">What a finding can look like.</h2>
          <p className="mt-4 text-[color:var(--muted)] leading-relaxed">
            The example below is fictional. It is not a completed AGIsGEM assessment, test result or customer case study.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm text-[color:var(--muted)]">
            <span className="pill"><FileCheck2 size={14} /> Evidence references</span>
            <span className="pill"><Fingerprint size={14} /> Version and review date</span>
            <span className="pill"><ShieldAlert size={14} /> Limitations and exceptions</span>
          </div>
        </div>
        <div className="card p-6 md:p-7">
          <div className="flex items-center justify-between gap-4 border-b border-[color:var(--border)] pb-4">
            <div><div className="text-xs uppercase tracking-wider text-[color:var(--muted)]">Example decision receipt</div><div className="mt-1 font-semibold">AI workflow claim review</div></div>
            <span className="pill !text-amber-200 !border-amber-300/30">Conditional · fictional</span>
          </div>
          <dl className="mt-5 grid sm:grid-cols-2 gap-4 text-sm">
            <div><dt className="text-[color:var(--muted)]">Claim reviewed</dt><dd className="mt-1">“Resolves 80% of standard enquiries”</dd></div>
            <div><dt className="text-[color:var(--muted)]">Sample scenario set</dt><dd className="mt-1">40 supplied test cases</dd></div>
            <div><dt className="text-[color:var(--muted)]">Observed in this example</dt><dd className="mt-1">34 completed; 6 escalated</dd></div>
            <div><dt className="text-[color:var(--muted)]">Exceptions</dt><dd className="mt-1">2 unsupported answers flagged</dd></div>
          </dl>
          <div className="mt-5 rounded-lg border border-[color:var(--border)] p-4 text-sm text-[color:var(--muted)] leading-relaxed">
            <strong className="text-[color:var(--ink)]">Illustrative finding:</strong> Consider a supervised pilot only after the two flagged responses are reviewed. Results apply to these supplied test conditions and do not establish production reliability.
          </div>
        </div>
      </section>

      <section className="container-x pb-20 grid lg:grid-cols-2 gap-5">
        <div className="card p-7">
          <div className="pill mb-4">Relationship with AGI360</div>
          <h2 className="text-2xl font-semibold">Validation can support commercial readiness.</h2>
          <p className="mt-3 text-sm text-[color:var(--muted)] leading-relaxed">AGI360 may include evidence and validation work where it fits a client’s commercialisation or Market Access goals. That work is separately scoped and quoted.</p>
          <a className="mt-5 inline-flex text-sm font-medium text-[color:var(--accent)]" href="https://agi360.online/#/market-access">Explore AGI360 Market Access <ArrowRight size={14} className="ml-1" /></a>
        </div>
        <div className="card p-7">
          <div className="pill mb-4">Token and technical information</div>
          <h2 className="text-2xl font-semibold">The token is not the service.</h2>
          <p className="mt-3 text-sm text-[color:var(--muted)] leading-relaxed">Professional validation does not require $AGISGEM. The token does not represent asset ownership, guaranteed revenue or investment returns.</p>
          <Link className="mt-5 inline-flex text-sm font-medium text-[color:var(--accent)]" href="/token">View token and Virtuals information <ArrowRight size={14} className="ml-1" /></Link>
        </div>
      </section>

      <section className="container-x pb-24">
        <div className="card p-8 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
          <div className="relative max-w-3xl">
            <div className="pill mb-4">Start with the decision</div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Tell us what you need to establish.</h2>
            <p className="mt-4 text-[color:var(--muted)] leading-relaxed">We’ll confirm whether the requested assessment fits our available evidence, criteria and expertise, then agree a written scope and fee before work begins.</p>
            <Link href="/contact?type=validation" className="btn-primary mt-6">Request a validation assessment <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
