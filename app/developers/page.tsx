import Link from "next/link";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata = { title: "Integration Enquiries" };

export default function DevelopersPage() {
  return <>
    <PageHeader eyebrow="Platforms and developers" title="Discuss an integration or validation workflow." description="AGIsGEM is exploring ways to make structured evidence checks useful inside platforms and commercial workflows. A public API or production integration is not currently represented as available." />
    <section className="container-x py-16 grid lg:grid-cols-3 gap-10">
      <div className="lg:col-span-2 prose-light">
        <h2>Potential integration questions</h2>
        <ul>
          <li>What claims, assets or decisions need to be checked?</li>
          <li>Which sources and permissions would support the review?</li>
          <li>What evidence should a user or reviewer see?</li>
          <li>How should updates, exceptions and revised records be handled?</li>
        </ul>
        <h2>What happens next</h2>
        <p>We first assess feasibility, evidence access, security requirements and reviewer needs. If the use case is suitable, we agree separate technical scope, responsibilities, testing and delivery terms before implementation.</p>
        <p>No integration, automated verification or data connection is implied until it has been built and tested for the specific use case.</p>
      </div>
      <aside className="space-y-4">
        <div className="card p-5"><div className="text-xs uppercase tracking-wider text-[color:var(--muted)] mb-2">Status</div><div className="font-medium">Discuss a use case</div></div>
        <Link href="/contact?type=integration" className="btn-primary w-full justify-center">Discuss an integration</Link>
      </aside>
    </section>
  </>;
}
