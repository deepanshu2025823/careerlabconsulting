import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { 
        protocol: 'https', 
        hostname: 'images.unsplash.com' 
      }, 
      { 
        protocol: 'https', 
        hostname: 'plus.unsplash.com' 
      }
    ],
  },
  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "framer-motion",
      "recharts",
      "three",
      "@google/generative-ai"
    ],
  },
};

export default nextConfig;