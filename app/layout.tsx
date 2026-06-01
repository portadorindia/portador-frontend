import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { BackToTopButton, FloatingOperationsCTA, StickyConversionBar } from "@/components/ui";
import { localBusinessSchema, organizationSchema, placeSchema, serviceSchemas, websiteSchema } from "@/lib/schema";

export const metadata: Metadata = {
  metadataBase: new URL("https://portador.in"),
  title: {
    default: "PORTADOR SOS | Same-Day Air Cargo & Next Flight Out Logistics India",
    template: "%s | PORTADOR SOS"
  },
  description:
    "PORTADOR SOS is India's SOS air cargo operations platform for same-day air cargo, next flight out movement, airport-to-airport cargo, dangerous goods, battery cargo, and 24x7 urgent business shipments.",
  openGraph: {
    title: "PORTADOR SOS | When Time Cannot Wait",
    description: "Premium same-day air cargo, next flight out logistics, and emergency cargo coordination across India.",
    url: "https://portador.in",
    siteName: "PORTADOR SOS",
    locale: "en_IN",
    type: "website",
    images: [{ url: "/portador-logo.png", width: 1600, height: 1067, alt: "PORTADOR SOS logo" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "PORTADOR SOS | When Time Cannot Wait",
    description: "Same-day air cargo, NFO logistics, urgent airport cargo, and 24x7 human operations coordination.",
    images: ["/portador-logo.png"]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([organizationSchema, localBusinessSchema, websiteSchema, placeSchema, ...serviceSchemas]) }}
        />
        <Header />
        {children}
        <BackToTopButton />
        <FloatingOperationsCTA />
        <StickyConversionBar />
        <Footer />
      </body>
    </html>
  );
}
