import { readFile } from './utils';

export const getData = filePath => new Promise((resolve, reject) => {

  readFile(filePath)
    .then(data => resolve(data))
    .catch(err => reject(err));

});
