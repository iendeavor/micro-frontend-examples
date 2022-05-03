const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  target: "node",

  entry: "./server/index.js",

  output: {
    path: path.resolve(__dirname, "dist", "server"),
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: "babel-loader",
        },
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [new CleanWebpackPlugin()],
};
