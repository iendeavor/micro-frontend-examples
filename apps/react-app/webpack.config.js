module.exports = {
  entry: "./src/lifecycles.js",

  output: {
    library: "react-app",
    libraryTarget: "umd",
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
};
