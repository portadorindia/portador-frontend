import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingRoot: process.cwd(),
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"]
  },
  async redirects() {
    return [
      {
        source: "/cargo-medical-equipment",
        destination: "/cargo/medical-equipment",
        permanent: true
      },
      {
        source: "/airports/delhi-airport-cargo",
        destination: "/airports/delhi-igi-airport",
        permanent: true
      },
      {
        source: "/airports/mumbai-air-cargo",
        destination: "/airports/mumbai-csmia",
        permanent: true
      },
      {
        source: "/airports/bangalore-airport-logistics",
        destination: "/airports/bangalore-kempegowda",
        permanent: true
      },
      {
        source: "/airports/chennai-airport-cargo",
        destination: "/airports/chennai-airport",
        permanent: true
      },
      {
        source: "/airports/hyderabad-air-cargo",
        destination: "/airports/hyderabad-rgia",
        permanent: true
      },
      {
        source: "/airports/pune-airport-logistics",
        destination: "/airports/pune-airport",
        permanent: true
      },
      {
        source: "/airports/ahmedabad-air-cargo",
        destination: "/airports/ahmedabad-airport",
        permanent: true
      },
      {
        source: "/airports/kolkata-airport-cargo",
        destination: "/airports/kolkata-airport",
        permanent: true
      },
      {
        source: "/restricted-goods/",
        destination: "/restricted-goods",
        permanent: true
      },
      {
        source: "/privacy-policy/",
        destination: "/privacy-policy",
        permanent: true
      },
      {
        source: "/booking-refund-policy/",
        destination: "/booking-refund-policy",
        permanent: true
      },
      {
        source: "/booking_refund_policy",
        destination: "/booking-refund-policy",
        permanent: true
      },
      {
        source: "/booking_refund_policy/",
        destination: "/booking-refund-policy",
        permanent: true
      },
      {
        source: "/terms-conditions/",
        destination: "/terms-conditions",
        permanent: true
      },
      {
        source: "/services/same-day-delivery",
        destination: "/services/portador-sos",
        permanent: true
      },
      {
        source: "/services/next-flight-out-logistics",
        destination: "/services/portador-sos",
        permanent: true
      },
      {
        source: "/services/airport-to-airport-cargo",
        destination: "/services/portador-sos",
        permanent: true
      },
      {
        source: "/services/mission-critical-logistics",
        destination: "/services/portador-sos",
        permanent: true
      },
      {
        source: "/services/excess-baggage",
        destination: "/cargo/excess-baggage",
        permanent: true
      },
      {
        source: "/services/battery-cargo",
        destination: "/cargo/battery-cargo",
        permanent: true
      },
      {
        source: "/services/dangerous-goods-cargo",
        destination: "/cargo/dangerous-goods",
        permanent: true
      },
      {
        source: "/services/hand-carry-obc",
        destination: "/services/portador-black",
        permanent: true
      },
      {
        source: "/services/air-cargo-charter",
        destination: "/cargo/air-cargo-charter",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
