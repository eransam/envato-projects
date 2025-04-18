'use strict';

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(5);


/***/ }),

/***/ 5:
/***/ (function(module, exports) {

/* @codingStandardsIgnoreFile */

/* eslint-disable */

/*!-----------------------------------------------------------------
    Name: AmDesk - Help Center HTML template for your digital products
    Version: 1.0.1
    Author: dexad, nK
    Website: https://nkdev.info/
    Purchase: https://themeforest.net/user/_nk/portfolio
    Support: https://nk.ticksy.com/
    License: You must have a valid license purchased only from ThemeForest (the above link) in order to legally use the theme for your project.
    Copyright 2019.
-------------------------------------------------------------------*/

/** *** */
(function (modules) {
  // webpackBootstrap

  /** *** */
  // The module cache

  /** *** */
  var installedModules = {};
  /** *** */

  /** *** */
  // The require function

  /** *** */

  function __webpack_require__(moduleId) {
    /** *** */

    /** *** */
    // Check if module is in cache

    /** *** */
    if (installedModules[moduleId]) {
      /** *** */
      return installedModules[moduleId].exports;
      /** *** */
    }
    /** *** */
    // Create a new module (and put it into the cache)

    /** *** */


    var module = installedModules[moduleId] = {
      /** *** */
      i: moduleId,

      /** *** */
      l: false,

      /** *** */
      exports: {}
      /** *** */

    };
    /** *** */

    /** *** */
    // Execute the module function

    /** *** */

    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /** *** */

    /** *** */
    // Flag the module as loaded

    /** *** */

    module.l = true;
    /** *** */

    /** *** */
    // Return the exports of the module

    /** *** */

    return module.exports;
    /** *** */
  }
  /** *** */

  /** *** */

  /** *** */
  // expose the modules object (__webpack_modules__)

  /** *** */


  __webpack_require__.m = modules;
  /** *** */

  /** *** */
  // expose the module cache

  /** *** */

  __webpack_require__.c = installedModules;
  /** *** */

  /** *** */
  // define getter function for harmony exports

  /** *** */

  __webpack_require__.d = function (exports, name, getter) {
    /** *** */
    if (!__webpack_require__.o(exports, name)) {
      /** *** */
      Object.defineProperty(exports, name, {
        /** *** */
        configurable: false,

        /** *** */
        enumerable: true,

        /** *** */
        get: getter
        /** *** */

      });
      /** *** */
    }
    /** *** */

  };
  /** *** */

  /** *** */
  // getDefaultExport function for compatibility with non-harmony modules

  /** *** */


  __webpack_require__.n = function (module) {
    /** *** */
    var getter = module && module.__esModule
    /** *** */
    ? function getDefault() {
      return module["default"];
    }
    /** *** */
    : function getModuleExports() {
      return module;
    };
    /** *** */

    __webpack_require__.d(getter, 'a', getter);
    /** *** */


    return getter;
    /** *** */
  };
  /** *** */

  /** *** */
  // Object.prototype.hasOwnProperty.call

  /** *** */


  __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /** *** */

  /** *** */
  // __webpack_public_path__

  /** *** */


  __webpack_require__.p = '';
  /** *** */

  /** *** */
  // Load entry module and return exports

  /** *** */

  return __webpack_require__(__webpack_require__.s = 2);
  /** *** */
})([,
/* 0 */

/* 1 */

/** */
function (module, exports, __webpack_require__) {
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  /*------------------------------------------------------------------
  Theme Options
  -------------------------------------------------------------------*/

  var options = {
    parallaxSpeed: 0.8,
    scrollToAnchorSpeed: 700,
    templates: {
      btnLoaded: 'All shown',
      instagram: '<div class="col-4">\n                <a href="{{link}}" target="_blank">\n                    <img src="{{image}}" alt="{{caption}}" class="dx-img-stretch">\n                </a>\n            </div>',
      instagramLoadingText: 'Loading...',
      instagramFailText: 'Failed to fetch data',
      instagramApiPath: 'php/instagram/instagram.php',
      twitter: '<div class="dx-widget-twitter">\n                <div class="dx-widget-text">\n                {{tweet}}\n                </div>\n                <div class="dx-widget-twitter-date">\n                    <span>{{date}}</span>\n                </div>\n            </div>',
      twitterLoadingText: 'Loading...',
      twitterFailText: 'Failed to fetch data',
      twitterApiPath: 'php/twitter/tweet.php'
    }
  };
  exports.options = options;
  /** */
},
/* 2 */

/** */
function (module, exports, __webpack_require__) {
  module.exports = __webpack_require__(3);
  /** */
},
/* 3 */

/** */
function (module, exports, __webpack_require__) {
  var _options = __webpack_require__(1);

  if ('undefined' !== typeof window.Amdesk) {
    window.Amdesk.setOptions(_options.options);
    window.Amdesk.init();
  }
  /** */

}
/** *** */
]); // # sourceMappingURL=amdesk-init.js.map

/***/ })

/******/ });