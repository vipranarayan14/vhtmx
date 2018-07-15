import { makeDirs, writeFile } from './utils';
import { getOutputPath } from './get-output-path';

export const writeOutput = (path, config) => data =>

  new Promise((resolve, reject) => {

    const {
      outputDirPath,
      outputFilePath
    } = getOutputPath(path, config);

    makeDirs(outputDirPath)
      .then(writeFile(outputFilePath, data))
      .catch(err => {

        reject(err);

      });

    resolve();

  });
