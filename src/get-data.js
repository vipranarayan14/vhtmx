const fs = require('fs');

const getData = filePath => new Promise((resolve, reject) => {

  fs.readFile(filePath, 'utf8', (err, data) => {

    if (err) {

      reject(err);

    }

    resolve(data);

  });

});

module.exports = { getData };
