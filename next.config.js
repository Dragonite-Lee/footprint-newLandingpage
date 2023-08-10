/** @type {import('next').NextConfig} */
//  webpack.config.js

const withImages = require('next-images');
// const withPlugins = require('next-compose-plugins')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  compress: true,
  webpack(config, {webpack}){
      const prod = process.env.NODE_ENV === 'production';
      const plugins = [...config.plugins];
      return{
          ...config,
          mode: prod ? 'producton' : 'development',
          devtool: prod ? 'hidden-source-map' : 'eval',
          plugins,
      };
  },
});
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
}


module.exports = withImages();
module.exports = nextConfig


