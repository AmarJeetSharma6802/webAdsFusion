import type { NextConfig } from "next";

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["lh3.googleusercontent.com","cdn.prod.website-files.com","www.syncfusion.com","res.cloudinary.com","anand-sharma.vercel.app"],
  },
};


export default nextConfig;
