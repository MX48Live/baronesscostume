/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/home',
      },
    ];
  },
  images: {
      domains: ['assets.baronesscostume.com'],
  },
}
module.exports = nextConfig
