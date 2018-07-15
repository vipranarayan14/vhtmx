'use strict';Object.defineProperty(exports,'__esModule',{value:true});exports.processFiles=undefined;var _getData=require('./get-data');var _getPaths=require('./get-paths');var _utils=require('./utils');var _processData=require('./process-data');var _writeOutput=require('./write-output');var processFiles=exports.processFiles=function processFiles(config,processors){return(0,_getPaths.getPaths)(config).then(function(filePaths){return filePaths.forEach(function(filePath){(0,_getData.getData)(filePath).then((0,_processData.processData)(processors)).then((0,_writeOutput.writeOutput)(filePath,config)).catch(function(err){(0,_utils.logError)(err)})})})};