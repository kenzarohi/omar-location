import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Chrome OS / Crostini : autoriser l'accès au serveur de dev
  allowedDevOrigins: [
    "localhost",
    "127.0.0.1",
    "100.115.92.26",
  ],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
