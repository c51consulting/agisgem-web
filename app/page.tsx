import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { VerificationLog } from "@/components/sections/VerificationLog";
import { Problem } from "@/components/sections/Problem";
import { Platform } from "@/components/sections/Platform";
import { Audiences } from "@/components/sections/Audiences";
import { UseCases } from "@/components/sections/UseCases";
import { CodePreview } from "@/components/sections/CodePreview";
import { Comparison } from "@/components/sections/Comparison";
import { ProofPreview } from "@/components/sections/Proof";
import { TokenEconomy } from "@/components/sections/TokenEconomy";
import { CTA } from "@/components/sections/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <VerificationLog />
      <Problem />
      <Platform />
      <Audiences />
      <UseCases />
      <CodePreview />
      <Comparison />
      <ProofPreview />
      <TokenEconomy />
      <CTA />
    </>
  );
}
