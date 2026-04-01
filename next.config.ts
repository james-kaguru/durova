import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dev-shrift.s3.eu-central-1.amazonaws.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'durova.s3.eu-central-1.amazonaws.com',
        port: '',
        pathname: '/**',
      },
    ]
  }

};

export default nextConfig;
