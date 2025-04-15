import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      'cdn.jsdelivr.net', 
      'images.unsplash.com', 
      'plus.unsplash.com',
      new URL(process.env.NEXT_PUBLIC_API_BASE_URL || 'http://127.0.0.1:5000').hostname
    ]
  }
};

export default nextConfig;