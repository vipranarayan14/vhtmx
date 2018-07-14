const glob = require('glob');
const { processFiles } = require('./process-files');
const { makeConfig } = require('./make-config');

const { defaultConfig } = require('./default-config');

class Vhtml {

  constructor(userConfig = {}) {

    this.config = makeConfig(defaultConfig, userConfig);

  }

  use(processors) {

    if (!processors) {

      throw new Error('An array of processors is required.');

    }

    this.processors = processors;

  }

  process() {

    glob(`${defaultConfig.srcRoot}/**/*${defaultConfig.srcExt}`, (err, filePaths) => processFiles(filePaths));

  }

};

module.exports = { Vhtml };
