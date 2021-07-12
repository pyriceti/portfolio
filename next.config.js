// const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  images: {
    imageSizes: [],
    deviceSizes: [16, 32, 48, 64, 96, 128, 256, 384, 512, 640, 750, 828, 1080, 1200, 1920],
  },
  // target: 'serverless',
  // webpack5: true,
  // webpack: function (config, { dev, isServer }) {
  //   // Fixes npm packages that depend on `fs` module
  //   if (!isServer) config.resolve.fallback.fs = false
  //
  //   // copy files you're interested in
  //   if (!dev) {
  //     config.plugins.push(
  //       new CopyPlugin({ patterns: [{ from: 'fonts', to: 'fonts' }] })
  //     )
  //   }
  //
  //   return config
  // }
};