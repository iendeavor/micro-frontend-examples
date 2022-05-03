module.exports = () => {
  return {
    optimization: {
      minimize: false,
    },

    output: {
      libraryTarget: "umd",
    },
  };
};
