import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "PORTADOR SOS",
    short_name: "PORTADOR",
    description: "Premium time-critical air cargo operations for urgent shipments across India.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#050506",
    theme_color: "#E30613",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable"
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable"
      }
    ],
    categories: ["business", "productivity", "travel"]
  };
}
