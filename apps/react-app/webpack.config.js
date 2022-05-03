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
        test: /\.jsx?$/,
        include: path.resolve(__dirname, "src"),
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    targets: "defaults",
                  },
                ],
                "@babel/preset-react",
              ],
            },
          },
        ],
      },
    ],
  },

  plugins: [new (require("clean-webpack-plugin").CleanWebpackPlugin)()],

  optimization: {
    minimize: false,
  },
};
