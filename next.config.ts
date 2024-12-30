import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // loader: "cloudinary",
    remotePatterns: [
      {
        hostname: "**.cloudinary.com",
      },
    ],
  },
  reactStrictMode: true,
};

export default nextConfig;
