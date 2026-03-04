/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ensure builds succeed without local TypeScript setup
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  poweredByHeader: false,
};

export default nextConfig;
