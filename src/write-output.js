const { defaultConfig } = require('./default-config');
const fs = require('fs');
const mkdirp = require('mkdirp');

const getOutputPath = inputFilePath => {

  const outputFilePath = inputFilePath
    .replace(defaultConfig.srcRoot, defaultConfig.distRoot)
    .replace(defaultConfig.srcExt, defaultConfig.distExt);

  const outputDirPath = outputFilePath.match(/(.+)\/(?:.(?!\/))+/)[1];

  return {
    outputDirPath,
    outputFilePath
  };

};

const writeOutput = (path, data) => new Promise((resolve, reject) => {

  const { outputDirPath, outputFilePath } = getOutputPath(path);

  mkdirp(outputDirPath, mkdirpErr => {

    if (mkdirpErr) {

      reject(mkdirpErr);

    }

    fs.writeFile(outputFilePath, data, 'utf8', fsWriteErr => {

      if (fsWriteErr) {

        reject(fsWriteErr);

      }

      resolve(outputFilePath);

    });

  });

});

module.exports = { writeOutput };
