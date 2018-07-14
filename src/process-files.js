const { getPaths } = require('./get-paths');
const { getData } = require('./get-data');
const { processData } = require('./process-data');
const { writeOutput } = require('./write-output');

const processFiles = (config, processors) =>

  getPaths(config).then(filePaths =>

    filePaths.forEach(filePath => {

      getData(filePath)
        .then(processData(processors))
        .then(writeOutput(filePath, config))
        .catch(err => {

          throw new Error(err);

        });

    })

  );

module.exports = { processFiles };
