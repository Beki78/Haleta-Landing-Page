import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["tailwindui.com", "www.auraui.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.auraui.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
