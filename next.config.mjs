/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    }
    return config
  },
  transpilePackages: ["@refinedev/antd", "@refinedev/core"],
  output: "standalone",
};

export default nextConfig;
