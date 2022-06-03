const webpack = require("webpack");

/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  devtool: "source-map",

  entry: "./src/lifecycle-hooks.js",

  externals: {
    react: "react",
    "react-dom": "react-dom",
  },

  output: {
    libraryTarget: "umd",
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
        },
      },
    ],
  },

  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1,
    }),
  ],
};
