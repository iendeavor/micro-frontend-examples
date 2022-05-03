const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./client/index.js",

  output: {
    path: path.resolve(__dirname, "dist", "client"),
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [new CleanWebpackPlugin()],
};
