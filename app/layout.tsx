import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { BackToTopButton, FloatingOperationsCTA, StickyConversionBar } from "@/components/ui";
import { localBusinessSchema, organizationSchema, placeSchema, serviceSchemas, websiteSchema } from "@/lib/schema";

const gtmId = "GTM-T39648NN";
const ga4MeasurementId = "G-9EJGWV5DXM";

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
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        <Script
          id="portador-gtm-datalayer"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];window.dataLayer.push({'ga4MeasurementId':'${ga4MeasurementId}','event':'portador_analytics_ready'});`
          }}
        />
        <Script
          id="portador-gtm"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');`
          }}
        />
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
