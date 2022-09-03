/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['www.google.co.uk', 'images.unsplash.com']
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
