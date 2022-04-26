module.exports = {
  optimization: {
    minimize: false,
  },

  plugins: [
    new (require("webpack").container.ModuleFederationPlugin)({
      name: "container_name_common",
      filename: "output_filename.js",
      exposes: {
        "./module_name": "./src/index.js",
      },
    }),
  ],
};
