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
      // Enforce www canonical — redirect bare domain to www
      {
        source: "/:path*",
        has: [{ type: "host", value: "movewithsven.com" }],
        destination: "https://www.movewithsven.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
