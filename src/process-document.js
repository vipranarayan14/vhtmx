const { processors } = require('./processors');

const processDocument = dom => {

  processors.forEach(processor => {

    dom.window.document
      .querySelectorAll(processor.query)
      .forEach(element => processor.process(element));

  });

  return dom;

};

module.exports = { processDocument };
