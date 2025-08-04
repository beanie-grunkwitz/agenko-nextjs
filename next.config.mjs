/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['bootstrap', 'bootstrap-icons'],
  },
  images: {
    domains: ['fonts.gstatic.com', 'images.unsplash.com', 'i.seadn.io'],
  },
  async headers() {
    return [
      {
        source: '/favicon.ico',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
