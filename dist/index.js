'use strict';Object.defineProperty(exports,'__esModule',{value:true});exports.Vhtmx=undefined;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if('value'in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();var _defaultConfig=require('./default-config');var _makeConfig=require('./make-config');var _processFiles=require('./process-files');function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function')}}var Vhtmx=exports.Vhtmx=function(){function Vhtmx(){var userConfig=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};_classCallCheck(this,Vhtmx);this.config=(0,_makeConfig.makeConfig)(_defaultConfig.defaultConfig,userConfig)}_createClass(Vhtmx,[{key:'use',value:function use(){var processors=arguments.length>0&&arguments[0]!==undefined?arguments[0]:[];this.processors=processors}},{key:'process',value:function process(){if(!this.processors){throw new Error('An array of processors is required.')}(0,_processFiles.processFiles)(this.config,this.processors)}}]);return Vhtmx}();;