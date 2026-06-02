import type { NextConfig } from "next";

const supportHost = [{ type: "host" as const, value: "support.portador.in" }];

const rootLegacyRedirects = [
  ["/portador-network", "/"],
  ["/portador-services", "/services"],
  ["/login", "/"],
  ["/about-us", "/about"],
  ["/contact-us", "/contact"],
  ["/urgent-air-courier-delhi", "/services/portador-sos"],
  ["/portador-services-2", "/services"],
  ["/track-form", "/tracking"],
  ["/gurgaon-urgent-courier", "/cities/gurgaon"],
  ["/same-day-intercity-delivery-india", "/services/portador-sos"],
  ["/same-day-delivey-delhi-to-mumbai", "/lanes/delhi-mumbai-same-day"],
  ["/mumbai-urgent-courier", "/cities/mumbai"],
  ["/hyderabad-urgent-courier", "/cities/hyderabad"]
] as const;

const supportLegacyRedirects = [
  ["/register", "https://portador.in/"],
  ["/track-form", "https://portador.in/tracking"],
  ["/category/blog", "https://portador.in/knowledge-hub"],
  ["/portador-services", "https://portador.in/services"],
  ["/contact-us", "https://portador.in/contact"]
] as const;

const existingRecoveryRedirects = [
  ["/cargo-medical-equipment", "/cargo/medical-equipment"],
  ["/airports/delhi-airport-cargo", "/airports/delhi-igi-airport"],
  ["/airports/mumbai-air-cargo", "/airports/mumbai-csmia"],
  ["/airports/bangalore-airport-logistics", "/airports/bangalore-kempegowda"],
  ["/airports/chennai-airport-cargo", "/airports/chennai-airport"],
  ["/airports/hyderabad-air-cargo", "/airports/hyderabad-rgia"],
  ["/airports/pune-airport-logistics", "/airports/pune-airport"],
  ["/airports/ahmedabad-air-cargo", "/airports/ahmedabad-airport"],
  ["/airports/kolkata-airport-cargo", "/airports/kolkata-airport"],
  ["/restricted-goods/", "/restricted-goods"],
  ["/privacy-policy/", "/privacy-policy"],
  ["/booking-refund-policy/", "/booking-refund-policy"],
  ["/booking_refund_policy", "/booking-refund-policy"],
  ["/booking_refund_policy/", "/booking-refund-policy"],
  ["/terms-conditions/", "/terms-conditions"],
  ["/services/same-day-delivery", "/services/portador-sos"],
  ["/services/next-flight-out-logistics", "/services/portador-sos"],
  ["/services/airport-to-airport-cargo", "/services/portador-sos"],
  ["/services/mission-critical-logistics", "/services/portador-sos"],
  ["/services/excess-baggage", "/cargo/excess-baggage"],
  ["/services/battery-cargo", "/cargo/battery-cargo"],
  ["/services/dangerous-goods-cargo", "/cargo/dangerous-goods"],
  ["/services/hand-carry-obc", "/services/portador-black"],
  ["/services/air-cargo-charter", "/cargo/air-cargo-charter"]
] as const;

const nextConfig: NextConfig = {
  outputFileTracingRoot: process.cwd(),
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"]
  },
  async redirects() {
    return [
      ...supportLegacyRedirects.map(([source, destination]) => ({
        source,
        destination,
        has: supportHost,
        statusCode: 301
      })),
      ...rootLegacyRedirects.map(([source, destination]) => ({
        source,
        destination,
        statusCode: 301
      })),
      ...existingRecoveryRedirects.map(([source, destination]) => ({
        source,
        destination,
        statusCode: 301
      }))
    ];
  }
};

export default nextConfig;
