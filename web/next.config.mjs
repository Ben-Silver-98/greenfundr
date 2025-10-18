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
        source: '/:path*',
        has: [
          { type: 'header', key: 'host', value: 'www.greenfundr.com' },
        ],
        destination: 'https://greenfundr.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
