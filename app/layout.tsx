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
    default: "AGIsGEM — The Intelligence Layer for Real-World Assets",
    template: "%s — AGIsGEM"
  },
  description:
    "AGIsGEM is building an AI-assisted evidence, risk-scoring and verification layer for livestock and agricultural real-world assets.",
  openGraph: {
    title: "AGIsGEM — The Intelligence Layer for Real-World Assets",
    description:
      "A controlled verification workflow for agricultural RWAs: evidence registers, risk flags, Logic Scores and versioned reports.",
    url: "/",
    siteName: "AGIsGEM",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    site: "@AGIsGEM",
    title: "AGIsGEM — The Intelligence Layer for Real-World Assets"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
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
