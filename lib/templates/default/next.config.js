const withSass = require('@zeit/next-sass');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')

module.exports = withSass({
  webpack: (config) => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }
    // Handle Service Workers precache
    config.plugins.push(
      new SWPrecacheWebpackPlugin({
        verbose: true,
        minify: true,
        staticFileGlobsIgnorePatterns: [/\.next\//],
        runtimeCaching: [
          {
            handler: 'networkFirst',
            urlPattern: /^https?.*/
          }
        ]
      })
    )
    return config
  }
});
