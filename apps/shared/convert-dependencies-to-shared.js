const convertDependenciesToShared = (dependencies) => {
  return Object.entries(dependencies).reduce((acc, [module, version]) => {
    return Object.assign(acc, {
      [module]: {
        singleton: true,
        requiredVersion: version,
      },
    });
  }, {});
};

module.exports = {
  convertDependenciesToShared,
};
