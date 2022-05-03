const name = require("./package.json").name;
const path = require("path");

module.exports = {
  output: {
    library: `${name}-[name]`,
    libraryTarget: "umd",
    uniqueName: name,
    publicPath: "",
    path: path.resolve(__dirname, "dist"),
  },

  devServer: {
    port: process.env.PORT,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
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

    new (require("clean-webpack-plugin").CleanWebpackPlugin)(),
  ],

  optimization: {
    minimize: false,
  },
};
