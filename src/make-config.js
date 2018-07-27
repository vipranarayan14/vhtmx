export const makeConfig = (defaultConfig, userConfig) =>

  Object.assign({},

    defaultConfig,

    userConfig

  );
