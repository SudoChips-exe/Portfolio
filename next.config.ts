import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/:path(about|skills|projects|contact)',
        destination: '/',
      },
    ];
  },
};

export default nextConfig;
