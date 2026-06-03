import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '', // leave empty for username.github.io
  assetPrefix: '', // leave empty for username.github.io
  images: { unoptimized: true },
};

export default nextConfig;
