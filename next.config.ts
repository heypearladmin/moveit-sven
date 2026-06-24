import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      // Enforce bare canonical — redirect www to bare domain
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.movewithsven.com" }],
        destination: "https://movewithsven.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
