const webpack = require("webpack");

/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  devtool: "source-map",

  entry: "./src/lifecycle-hooks.js",

  externals: {
    vue: "vue",
  },

  output: {
    libraryTarget: "umd",
    clean: true,
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
