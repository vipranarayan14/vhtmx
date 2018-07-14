const makeConfig = (defaultConfig, userConfig) => Object.assign({},
  defaultConfig,
  userConfig
);

module.exports = { makeConfig };
