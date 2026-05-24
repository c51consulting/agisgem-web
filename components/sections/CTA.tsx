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
              Ready to verify your first RWA?
            </h2>
            <p className="mt-4 text-[color:var(--muted)] leading-relaxed">
              We're onboarding a small cohort of pilot partners — livestock operators, ag-lenders,
              carbon program managers, and tokenization platforms — for Pilot #001 and beyond.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">
                Request a pilot <ArrowRight size={16} />
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
