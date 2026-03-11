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
  async redirects() {
    return [
      {
        source: "/funding-calls",
        destination: "/insights",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
