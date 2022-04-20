module.exports = {
  entry: "./src/lifecycles.js",

  output: {
    library: "vue-app",
    libraryTarget: "umd",
  },

  plugins: [new (require("vue-loader").VueLoaderPlugin)()],

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
    ],
  },
};
