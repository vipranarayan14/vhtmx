const fs = require('fs');
const mkdirp = require('mkdirp');

const getOutputPath = (inputFilePath, config) => {

  const outputFilePath = inputFilePath
    .replace(config.srcRoot, config.distRoot)
    .replace(config.srcExt, config.distExt);

  const outputDirPath = outputFilePath.match(/(.+)\/(?:.(?!\/))+/)[1];

  return {
    outputDirPath,
    outputFilePath
  };

};

const makeDirs = outputDirPath => new Promise((resolve, reject) =>

  mkdirp(outputDirPath, mkdirpErr => {

    if (mkdirpErr) {

      reject(mkdirpErr);

    }

    resolve();

  })

);

const writeFile = (outputFilePath, data) => () =>

  new Promise((resolve, reject) => {

    fs.writeFile(outputFilePath, data, 'utf8', fsWriteErr => {

      if (fsWriteErr) {

        reject(fsWriteErr);

      }

      resolve(outputFilePath);

    });

  });

const writeOutput = (path, config) => data => new Promise((resolve, reject) => {

  const { outputDirPath, outputFilePath } = getOutputPath(path, config);

  makeDirs(outputDirPath)
    .then(writeFile(outputFilePath, data))
    .catch(err => {

      reject(err);

    });

  resolve();

});

module.exports = { writeOutput };
