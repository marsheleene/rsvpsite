/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Outputs a Single-Page Application (SPA).
    assetPrefix: "./",
    images: {
      unoptimized: true,
    },
    reactStrictMode: true,
  }
   
  export default nextConfig