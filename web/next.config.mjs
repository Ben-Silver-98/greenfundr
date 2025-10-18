/** @type {import('next').NextConfig} */
const nextConfig = {
  // Use the App Router (default in Next 13+)
  experimental: {
    appDir: true,
  },
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
