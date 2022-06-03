/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  devtool: "source-map",

  output: {
    clean: true,
  },

  plugins: [
    new (require("html-webpack-plugin"))({
      template: "./public/index.html",
    }),
  ],

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
