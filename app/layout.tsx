import type { Metadata } from "next";
import "./globals.css";
import { AnalyticsEvents } from "@/components/analytics-events";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { BackToTopButton, FloatingOperationsCTA, StickyConversionBar } from "@/components/ui";
import { gaMeasurementId, gtmId } from "@/lib/analytics";
import { localBusinessSchema, organizationSchema, placeSchema, serviceSchemas, websiteSchema } from "@/lib/schema";

export const metadata: Metadata = {
  metadataBase: new URL("https://portador.in"),
  title: {
    default: "PORTADOR SOS | Same-Day Air Cargo & Next Flight Out Logistics India",
    template: "%s | PORTADOR SOS"
  },
  description:
    "PORTADOR SOS is India's SOS air cargo operations platform for same-day air cargo, next flight out movement, airport-to-airport cargo, dangerous goods, battery cargo, and 24x7 urgent business shipments.",
  applicationName: "PORTADOR SOS",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" }
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.ico"]
  },
  appleWebApp: {
    capable: true,
    title: "PORTADOR SOS",
    statusBarStyle: "black-translucent"
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true
  },
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
      <head>
        <script
          id="portador-gtm-head"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');`
          }}
        />
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`} />
        <script
          id="portador-ga4-head"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaMeasurementId}',{'send_page_view':false});window.dataLayer.push({'event':'portador_analytics_ready','gtm_id':'${gtmId}','ga4_measurement_id':'${gaMeasurementId}'});`
          }}
        />
      </head>
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([organizationSchema, localBusinessSchema, websiteSchema, placeSchema, ...serviceSchemas]) }}
        />
        <AnalyticsEvents />
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
