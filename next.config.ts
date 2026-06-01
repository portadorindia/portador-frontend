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
