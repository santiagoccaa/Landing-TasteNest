import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'localhost',
        port: '1337'
      }
    ]
  }
};

export default nextConfig;
