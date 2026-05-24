import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Problem } from "@/components/sections/Problem";
import { Platform } from "@/components/sections/Platform";
import { UseCases } from "@/components/sections/UseCases";
import { ProofPreview } from "@/components/sections/Proof";
import { TokenEconomy } from "@/components/sections/TokenEconomy";
import { CTA } from "@/components/sections/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Problem />
      <Platform />
      <UseCases />
      <ProofPreview />
      <TokenEconomy />
      <CTA />
    </>
  );
}
