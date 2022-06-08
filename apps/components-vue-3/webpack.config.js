const webpack = require("webpack");

/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  devtool: "source-map",

  entry: "./src/about-component-lifecycle-hooks.g.js",

  externals: {
    vue: "vue",
  },

  output: {
    filename: "about-component-lifecycle-hooks.js",
    libraryTarget: "umd",
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
    ],
  },

  plugins: [
    new (require("vue-loader").VueLoaderPlugin)(),

    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1,
    }),
  ],
};
