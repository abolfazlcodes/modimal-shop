/** @type {import('next').NextConfig} */
import withPlaiceholder from "@plaiceholder/next";

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com"],
  },
  // webpack(config, { isServer }) {
  //   if (!isServer) {
  //     config.resolve.fallback = {
  //       ...config.resolve.fallback,
  //       fs: false,
  //     };
  //   }

  //   return config;
  // },
  // webpack: (config, { webpack }) => {
  //   config.experiments = { ...config.experiments, topLevelAwait: true };
  //   config.externals["node:fs"] = "commonjs node:fs";
  //   config.resolve.fallback = {
  //     ...config.resolve.fallback,
  //     fs: false,
  //   };
  //   config.plugins.push(
  //     new webpack.NormalModuleReplacementPlugin(/^node:/, (resource) => {
  //       resource.request = resource.request.replace(/^node:/, "");
  //     }),
  //   );

  //   return config;
  // },
};
// module.exports = nextConfig;
export default withPlaiceholder(nextConfig);
