/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["assets.baronesscostume.com"],
  },
  experimental: {
    serverActions: true,
  },
};
module.exports = nextConfig;
