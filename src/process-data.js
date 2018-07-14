const { parseDOM } = require('./parse-dom');
const { processDocument } = require('./process-document');

const processData = processors => data =>

  new Promise((resolve, reject) => {

    const dom = parseDOM(data);

    const doc = processDocument(dom, processors).window.document.body.innerHTML;

    if (!doc) {

      reject('File(s) could not be processed');

    }

    resolve(doc);

  });

module.exports = { processData };
