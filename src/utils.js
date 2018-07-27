import { readFile as _readFile } from 'fs';
import { writeFile as _writeFile } from 'fs';
import mkdirp from 'mkdirp';

export const logError = errMsg => console.error(errMsg); //eslint-disable-line no-console

export const makeDirs = outputDirPath =>

  new Promise((resolve, reject) =>

    mkdirp(outputDirPath, mkdirpErr => {

      if (mkdirpErr) {

        reject(mkdirpErr);

      }

      resolve();

    })

  );

export const readFile = filePath =>

  new Promise((resolve, reject) =>

    _readFile(filePath, 'utf8', (err, data) => {

      if (err) {

        return reject(err);

      }

      return resolve(data);

    })

  );

export const writeFile = (filePath, data) => () =>

  new Promise((resolve, reject) =>

    _writeFile(filePath, data, 'utf8', err => {

      if (err) {

        reject(err);

      }

      resolve();

    })

  );
