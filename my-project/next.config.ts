import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Enables static export
  basePath: '/my-project',
  assetPrefix: '/my-project',
};

export default nextConfig;
