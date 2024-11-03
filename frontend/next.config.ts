import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/shop",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;