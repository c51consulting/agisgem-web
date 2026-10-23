import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://agisgem-web.vercel.app"),
  verification: {
    other: {
      "virtual-protocol-site-verification": "f78ea217a8c3c190f1244f00e4d8c79c"
    }
  },
  title: {
    default: "AGIsGEM | Evidence Intelligence & Validation",
    template: "%s — AGIsGEM"
  },
  description:
    "An evidence-based framework for examining claims about technology, AI systems, real-world assets and commercial propositions.",
  openGraph: {
    title: "AGIsGEM | Evidence Intelligence & Validation",
    description:
      "Examine the evidence behind technologies, assets and commercial claims before relying on them.",
    url: "/",
    siteName: "AGIsGEM",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    site: "@AGIsGEM",
    title: "AGIsGEM | Evidence Intelligence & Validation"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
