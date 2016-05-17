(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("ElRadio", [], factory);
	else if(typeof exports === 'object')
		exports["ElRadio"] = factory();
	else
		root["ElRadio"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var ElRadio = __webpack_require__(2);

	module.exports = {
	  ElRadio: ElRadio,
	  install: function install(Vue) {
	    Vue.component('el-radio', ElRadio);
	  }
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = "<label :class=\"{ 'is-checked': model === value }\" class=element-radio> <span class=element-radio__input> <span :class=\"{\n        'is-disabled': disabled,\n        'is-checked': model === value\n      }\" class=element-radio__inner></span> <input :value=value type=radio v-model=model :disabled=disabled class=element-radio__original> </span> <span v-text=\"label || value\" class=element-radio__label></span> </label>";

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(3)
	__vue_template__ = __webpack_require__(1)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: 'ElRadio',

	  props: {
	    model: {
	      default: '',
	      twoWay: true,
	      required: true
	    },
	    value: {
	      type: String,
	      required: true
	    },
	    label: String,
	    disabled: Boolean
	  }
	};

/***/ }
/******/ ])
});
;