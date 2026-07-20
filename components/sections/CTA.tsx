import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24 border-t border-[color:var(--border)]">
      <div className="container-x">
        <div className="card p-10 md:p-14 relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
          <div className="relative max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
              Start with a controlled verification pilot.
            </h2>
            <p className="mt-4 text-[color:var(--muted)] leading-relaxed">
              We are opening a limited number of paid founding engagements for livestock operators,
              agricultural lenders, brokers and RWA platforms. Defined scope. Evidence-based output.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">
                Book a pilot <ArrowRight size={16} />
              </Link>
              <Link href="/contact?type=investor" className="btn-secondary">
                Investor interest
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
