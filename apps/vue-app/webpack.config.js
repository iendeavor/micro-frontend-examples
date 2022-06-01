const path = require("path");
const slugify = require("slugify");

/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  entry: "./src/lifecycle-hooks.js",

  plugins: [
    new (require("vue-loader").VueLoaderPlugin)(),

    new (require("clean-webpack-plugin").CleanWebpackPlugin)(),
  ],

  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
  },

  optimization:
    process.env.NODE_ENV === "production"
      ? {
          minimize: true,
          splitChunks: {
            chunks: "all",
            maxInitialRequests: Infinity,
            minSize: 0,
            cacheGroups: {
              vendor: {
                test: /[\\/]node_modules[\\/]\.pnpm[\\/]/,
                name(module) {
                  const packageName = module.context.match(
                    /[\\/]node_modules[\\/]\.pnpm[\\/](.*?)([\\/]|$)/
                  )[1];
                  return packageName && slugify(packageName);
                },
              },
            },
          },
        }
      : {},

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
  },
};
