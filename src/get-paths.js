import glob from 'glob';

export const getPaths = config => new Promise((resolve, reject) =>

  glob(`${config.srcRoot}/**/*${config.srcExt}`, (err, filePaths) => {

    if (err) {

      reject(err);

    }

    resolve(filePaths);

  })

);
