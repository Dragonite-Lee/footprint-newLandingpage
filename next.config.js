/** @type {import('next').NextConfig} */
//  webpack.config.js

const withImages = require('next-images');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  images: {
    formats: ['image/webp'],
  },
}

module.exports = withImages();
module.exports = nextConfig


 