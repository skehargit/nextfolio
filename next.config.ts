import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.pixabay.com' },
      { protocol: 'https', hostname: 'res.cloudinary.com' },
      { protocol: 'https', hostname: 'eklavya.me' },
      { protocol: 'https', hostname: 'vitam.edu.in' },
      { protocol: 'https', hostname: 'www.aumsaiengineering.co.in' },
    ],
  },
};

export default nextConfig;
