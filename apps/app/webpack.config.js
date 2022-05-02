const path = require("path");
const slugify = require("slugify");
const {
  convertDependenciesToShared,
} = require("../shared/convert-dependencies-to-shared");
const deps = require("./package.json").dependencies;

/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  plugins: [
    new (require("webpack").container.ModuleFederationPlugin)({
      remotes: {
        layout_app: "layout_app@http://localhost:3001/remoteEntry.js",
      },

      shared: convertDependenciesToShared(deps),
    }),

    new (require("html-webpack-plugin"))({
      template: "./public/index.html",
    }),

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

  devServer: {
    port: process.env.PORT,
    historyApiFallback: {
      rewrites: [
        {
          // simply redirect requests which is NOT a direct file request, i.e. the requested path does NOT contain a . (DOT) character
          // e.g. /react
          from: /\/[^/.]+$/,
          to: () => {
            return `/index.html`;
          },
        },
        {
          // simply redirect request which is a direct file request, i.e. the requested path contains a . (DOT) character
          // e.g. /react/main.js
          from: /^\/.+\/([^/]+)$/,
          to: ({ match }) => {
            return `/${match[1]}`;
          },
        },
      ],
    },
  },
};
