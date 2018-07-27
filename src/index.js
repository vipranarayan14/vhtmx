import { defaultConfig } from './default-config';

import { makeConfig } from './make-config';
import { processFiles } from './process-files';

export class Vhtmx {

  constructor(userConfig = {}) {

    this.config = makeConfig(defaultConfig, userConfig);

  }

  use(processors = []) {

    this.processors = processors;

  }

  process() {

    if (!this.processors) {

      throw new Error('An array of processors is required.');

    }

    processFiles(this.config, this.processors);

  }

};
