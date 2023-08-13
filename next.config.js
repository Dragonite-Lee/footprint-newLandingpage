/** @type {import('next').NextConfig} */
//  webpack.config.js

const withImages = require('next-images');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
}




module.exports = withImages();
module.exports = nextConfig


 