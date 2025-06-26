import type { NextConfig } from "next";

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.harbaacv.com',
          },
        ],
        destination: 'https://harbaacv.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;



export default nextConfig;
