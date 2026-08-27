import { PageHeader } from "@/components/ui/PageHeader";
import { LeadForm } from "@/components/ui/LeadForm";

export const metadata = { title: "Contact" };

type LeadType = "pilot" | "investor" | "partner" | "community";

export default function ContactPage({
  searchParams
}: {
  searchParams?: { type?: string; audience?: string };
}) {
  const allowed: LeadType[] = ["pilot", "investor", "partner", "community"];

  // Map audience hint from the homepage Audiences section to a lead type.
  const audienceMap: Record<string, LeadType> = {
    lender: "partner",
    platform: "partner",
    operator: "pilot",
    investor: "investor"
  };
  const audienceParam = searchParams?.audience?.toLowerCase();
  const audienceDefault = audienceParam ? audienceMap[audienceParam] : undefined;

  const raw = (searchParams?.type as LeadType) || audienceDefault || "pilot";
  const defaultType: LeadType = allowed.includes(raw) ? raw : "pilot";

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's verify something real."
        description="Tell us the asset, contract or decision you need assessed. Paid pilots begin with written scope, authorised evidence access and cleared payment."
      />
      <section className="container-x py-16 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          <LeadForm defaultType={defaultType} />
        </div>
        <aside className="space-y-4">
          <div className="card p-5">
            <div className="text-xs uppercase tracking-wider text-[color:var(--muted)] mb-2">Email</div>
            <a href="mailto:agi@c51consulting.com" className="font-medium text-[color:var(--accent)] break-all">
              agi@c51consulting.com
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
              href="https://app.virtuals.io/virtuals/42445"
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
