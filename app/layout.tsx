import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://agisgem.io"),
  title: {
    default: "AGIsGEM — The Intelligence Layer for Real-World Assets",
    template: "%s — AGIsGEM"
  },
  description:
    "AGIsGEM is an RWA intelligence oracle that verifies off-chain asset data, generates decision-ready Logic Scores, and connects real-world proof to on-chain finance systems. Built with REALM360 on Virtuals Protocol.",
  openGraph: {
    title: "AGIsGEM — The Intelligence Layer for Real-World Assets",
    description:
      "Verification infrastructure for RWAs. From fragmented asset data to finance-ready intelligence.",
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
