const path = require("path");

module.exports = {
  entry: "./src/single-spa-example-vue-app.js",

  externals: ["single-spa", "foo"],

  output: {
    filename: "single-spa-example-vue-app.js",
    libraryTarget: "system",
    uniqueName: "vue-app",
    publicPath: "",
    path: path.resolve(__dirname, "dist"),
  },

  plugins: [
    new (require("vue-loader").VueLoaderPlugin)(),

    new (require("systemjs-webpack-interop/SystemJSPublicPathWebpackPlugin"))(),

    new (require("clean-webpack-plugin").CleanWebpackPlugin)(),
  ],

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
    ],
  },

  devServer: {
    port: process.env.PORT,
    historyApiFallback: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    allowedHosts: "all",
  },
};
