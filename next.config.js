// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   // reactStrictMode: true,
//   // output: 'export',
//   // images: {
//   //   unoptimized: true,
//   // },
// };

// module.exports = nextConfig;

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
module.exports = withBundleAnalyzer({});
