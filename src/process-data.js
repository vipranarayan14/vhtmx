const { parseDOM } = require('./parse-dom');
const { processDocument } = require('./process-document');
const { writeOutput } = require('./write-output');

const processData = ({ data, filePath }) => {

  const dom = parseDOM(data);

  const doc = processDocument(dom).window.document.body.innerHTML;

  return writeOutput(filePath, doc);

};

module.exports = { processData };
