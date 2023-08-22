/** @type {import('next').NextConfig} */
//  webpack.config.js

const withImages = require('next-images');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental : {
    appDir: false
  },
}

module.exports = withImages();
module.exports = nextConfig


 