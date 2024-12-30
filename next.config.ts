import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  distDir: 'build',
  /* config options here */
};
module.exports = {
  output: 'export', // or set up your routes for static export
};

export default nextConfig;
