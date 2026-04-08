import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'framerusercontent.com',
      },
    ],
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/book',
          destination: 'https://ro.am/loflow-solutions-llc/lobby-3/',
        },
        {
          source: '/book/:path*',
          destination: 'https://ro.am/loflow-solutions-llc/lobby-3/:path*',
        },
      ],
    };
  },
};

export default nextConfig;
