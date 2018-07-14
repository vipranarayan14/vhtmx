const { JSDOM } = require('jsdom');
const glob = require('glob');
const fs = require('fs');
const mkdirp = require('mkdirp');
const processors = require('./processors');

const parseDOM = data => new JSDOM(data);

const processDocument = dom => {

  processors.forEach(processor => {

    dom.window.document
      .querySelectorAll(processor.query)
      .forEach(element => processor.process(element));

  });

  return dom;

};

const defaultConfig = {

  distExt: '.html',
  distRoot: './dist',
  srcExt: '.htmx',
  srcRoot: './src'

};

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

        reject(fsWriteErr)

      }

      resolve(outputFilePath);

    });

  });

});

const processData = ({ data, filePath }) => {

  const dom = parseDOM(data);

  const doc = processDocument(dom).window.document.body.innerHTML;

  return writeOutput(filePath, doc);

};

const getData = filePath => new Promise((resolve, reject) => {

  fs.readFile(filePath, 'utf8', (err, data) => {

    if (err) {

      reject(err);

    }

    resolve({
      data,
      filePath
    });

  });

});

const processFiles = filePaths =>

  filePaths.forEach(filePath => getData(filePath).then(processData));

glob(`${defaultConfig.srcRoot}/**/*${defaultConfig.srcExt}`, (err, filePaths) => processFiles(filePaths));
