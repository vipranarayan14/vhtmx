const { getData } = require('./get-data');
const { processData } = require('./process-data');

const processFiles = filePaths =>

  filePaths.forEach(filePath => getData(filePath).then(processData));

module.exports = { processFiles };
