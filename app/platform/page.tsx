import { PageHeader } from "@/components/ui/PageHeader";
import { VerificationOracle } from "@/components/VerificationOracle";

export const metadata = { title: "Platform" };

export default function PlatformPage() {
  return (
    <>
      <PageHeader
        eyebrow="Platform"
        title="Know what is required. Know what blocks the deal. Know how to pass."
        description="The AGIsGEM Verification Oracle turns authoritative external data and assessed customer evidence into an explainable finance-readiness workflow. Start with Livestock + Finance below."
      />
      <VerificationOracle />
    </>
  );
}
