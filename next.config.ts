import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath: "/template-for-partners",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
