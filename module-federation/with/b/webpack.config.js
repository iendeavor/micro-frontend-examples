module.exports = {
  optimization: {
    minimize: false,
  },

  output: {
    libraryTarget: "umd",
  },

  plugins: [
    new (require("webpack").container.ModuleFederationPlugin)({
      name: "container_name_b",
      filename: "output_filename.js",
      remotes: {
        remote_name_common:
          "container_name_common@http://127.0.0.1:5500/module-federation/with/common/dist/output_filename.js",
      },
      exposes: {
        "./module_name": "./src/index.js",
      },
    }),
  ],
};
