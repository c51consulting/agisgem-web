import { PageHeader } from "@/components/ui/PageHeader";
import { LeadForm } from "@/components/ui/LeadForm";

export const metadata = { title: "Contact" };

type LeadType = "pilot" | "investor" | "partner" | "community";

export default function ContactPage({
  searchParams
}: {
  searchParams?: { type?: string };
}) {
  const allowed: LeadType[] = ["pilot", "investor", "partner", "community"];
  const raw = (searchParams?.type as LeadType) || "pilot";
  const defaultType: LeadType = allowed.includes(raw) ? raw : "pilot";

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's verify something real."
        description="Tell us what you're trying to verify. We respond personally — no marketing automation, no chatbots."
      />
      <section className="container-x py-16 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          <LeadForm defaultType={defaultType} />
        </div>
        <aside className="space-y-4">
          <div className="card p-5">
            <div className="text-xs uppercase tracking-wider text-[color:var(--muted)] mb-2">Email</div>
            <a href="mailto:rwa@realmgroup.global" className="font-medium text-[color:var(--accent)] break-all">
              rwa@realmgroup.global
            </a>
          </div>
          <div className="card p-5">
            <div className="text-xs uppercase tracking-wider text-[color:var(--muted)] mb-2">Phone</div>
            <a href="tel:+61478834818" className="font-medium text-[color:var(--accent)]">
              +61 478 834 818
            </a>
          </div>
          <div className="card p-5">
            <div className="text-xs uppercase tracking-wider text-[color:var(--muted)] mb-2">X / Twitter</div>
            <a href="https://x.com/AGIsGEM" target="_blank" rel="noreferrer" className="font-medium text-[color:var(--accent)]">
              @AGIsGEM
            </a>
          </div>
          <div className="card p-5">
            <div className="text-xs uppercase tracking-wider text-[color:var(--muted)] mb-2">Virtuals</div>
            <a
              href="https://app.virtuals.io/prototypes/0xf5ae0Ac5Ee87f3aA80984AD2de18de5CBc0b7395"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-[color:var(--accent)]"
            >
              View on Virtuals →
            </a>
          </div>
        </aside>
      </section>
    </>
  );
}
