const { processFiles } = require('./process-files');
const { makeConfig } = require('./make-config');

const { defaultConfig } = require('./default-config');

class Vhtmx {

  constructor(userConfig = {}) {

    this.config = makeConfig(defaultConfig, userConfig);

  }

  use(processors) {

    this.processors = processors;

  }

  process() {

    if (!this.processors) {

      throw new Error('An array of processors is required.');

    }

    processFiles(this.config, this.processors);

  }

};

module.exports = { Vhtmx };
