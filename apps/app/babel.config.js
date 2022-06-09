/* eslint-env node */
module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "usage",
        corejs: 3,
        modules: "umd",
      },
    ],
  ],

  exclude: [/node_modules/],
};
