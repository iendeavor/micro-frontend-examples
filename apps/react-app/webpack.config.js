const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "single-spa-example",
    projectName: "react-app",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    plugins: [new (require("clean-webpack-plugin").CleanWebpackPlugin)()],
    devServer: {
      port: process.env.PORT,
    },
    externals: ["foo"],
  });
};
