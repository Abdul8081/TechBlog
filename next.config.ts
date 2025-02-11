import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  trailingSlash:true //this will generate all the generated files to folder, which makes it possible to reload 
};

export default nextConfig;
