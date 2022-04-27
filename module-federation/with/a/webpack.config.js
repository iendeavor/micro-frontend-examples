module.exports = {
  optimization: {
    minimize: false,
  },

  output: {
    libraryTarget: "umd",
  },

  plugins: [
    new (require("webpack").container.ModuleFederationPlugin)({
      remotes: {
        remote_name_b:
          "container_name_b@http://127.0.0.1:5500/module-federation/with/b/dist/output_filename.js",
        remote_name_common:
          "container_name_common@http://127.0.0.1:5500/module-federation/with/common/dist/output_filename.js",
      },
    }),
  ],
};
