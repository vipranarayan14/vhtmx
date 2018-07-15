export const getOutputPath = (inputFilePath, config) => {

  const outputFilePath = inputFilePath
    .replace(config.srcRoot, config.distRoot)
    .replace(config.srcExt, config.distExt);

  const outputDirPath = outputFilePath.match(/(.+)\/(?:.(?!\/))+/)[1];

  return {
    outputDirPath,
    outputFilePath
  };

};
