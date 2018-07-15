import { getData } from './get-data';
import { getPaths } from './get-paths';
import { logError } from './utils';
import { processData } from './process-data';
import { writeOutput } from './write-output';

export const processFiles = (config, processors) =>

  getPaths(config).then(filePaths =>

    filePaths.forEach(filePath => {

      getData(filePath)
        .then(processData(processors))
        .then(writeOutput(filePath, config))
        .catch(err => {

          logError(err);

        });

    })

  );
