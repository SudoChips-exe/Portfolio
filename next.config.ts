import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
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
