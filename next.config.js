/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  distDir: "out",
  output: "export",
  images: {
    loader: "custom",
    loaderFile: "./ImageLoader.js",
    domains: ["lh3.googleusercontent.com"],
  },
};

module.exports = nextConfig;
