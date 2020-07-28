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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/blocks/blocks.css":
/*!*************************************!*\
  !*** ./resources/blocks/blocks.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYmxvY2tzL2Jsb2Nrcy5jc3M/MTM1NSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIuL3Jlc291cmNlcy9ibG9ja3MvYmxvY2tzLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/blocks/blocks.css\n");

/***/ }),

/***/ "./resources/blocks/blocks.editor.css":
/*!********************************************!*\
  !*** ./resources/blocks/blocks.editor.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYmxvY2tzL2Jsb2Nrcy5lZGl0b3IuY3NzPzQxNDUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiLi9yZXNvdXJjZXMvYmxvY2tzL2Jsb2Nrcy5lZGl0b3IuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/blocks/blocks.editor.css\n");

/***/ }),

/***/ "./resources/blocks/blocks.js":
/*!************************************!*\
  !*** ./resources/blocks/blocks.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _posts_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./posts/index */ \"./resources/blocks/posts/index.js\");\n/* harmony import */ var _paragraph_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./paragraph/index */ \"./resources/blocks/paragraph/index.js\");\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n/**\n * External dependancies\n */\nvar _lodash = lodash,\n    merge = _lodash.merge;\n/**\n * WordPress dependencies\n */\n\nvar registerBlockType = wp.blocks.registerBlockType;\n/**\n * Import blocks\n */\n\n\n // console.log(paragraphBlock);\n\n/**\n * Register Blocks\n */\n\nregisterBlockType(_posts_index__WEBPACK_IMPORTED_MODULE_0__[\"name\"], _posts_index__WEBPACK_IMPORTED_MODULE_0__[\"settings\"]);\nregisterBlockType(_paragraph_index__WEBPACK_IMPORTED_MODULE_1__[\"name\"], merge(_paragraph_index__WEBPACK_IMPORTED_MODULE_1__[\"settings\"], _paragraph_index__WEBPACK_IMPORTED_MODULE_1__[\"metadata\"]));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYmxvY2tzL2Jsb2Nrcy5qcz8yZTFhIl0sIm5hbWVzIjpbImxvZGFzaCIsIm1lcmdlIiwicmVnaXN0ZXJCbG9ja1R5cGUiLCJ3cCIsImJsb2NrcyIsInBvc3RzQmxvY2siLCJwYXJhZ3JhcGhCbG9jayJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7O0FBV0E7OztjQUdrQkEsTTtJQUFWQyxLLFdBQUFBLEs7QUFFUjs7OztJQUdRQyxpQixHQUFzQkMsRUFBRSxDQUFDQyxNLENBQXpCRixpQjtBQUVSOzs7O0FBR0E7Q0FHQTs7QUFFQTs7OztBQUdBQSxpQkFBaUIsQ0FBRUcsaURBQUYsRUFBbUJBLHFEQUFuQixDQUFqQjtBQUNBSCxpQkFBaUIsQ0FBRUkscURBQUYsRUFBdUJMLEtBQUssQ0FBQ0sseURBQUQsRUFBMEJBLHlEQUExQixDQUE1QixDQUFqQiIsImZpbGUiOiIuL3Jlc291cmNlcy9ibG9ja3MvYmxvY2tzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBHdXRlbmJlcmcgQmxvY2tzXG4gKlxuICogQWxsIGJsb2NrcyByZWxhdGVkIEphdmFTY3JpcHQgZmlsZXMgc2hvdWxkIGJlIGltcG9ydGVkIGhlcmUuXG4gKiBZb3UgY2FuIGNyZWF0ZSBhIG5ldyBibG9jayBmb2xkZXIgaW4gdGhpcyBkaXIgYW5kIGluY2x1ZGUgY29kZVxuICogZm9yIHRoYXQgYmxvY2sgaGVyZSBhcyB3ZWxsLlxuICpcbiAqIEFsbCBibG9ja3Mgc2hvdWxkIGJlIGluY2x1ZGVkIGhlcmUgc2luY2UgdGhpcyBpcyB0aGUgZmlsZSB0aGF0XG4gKiBXZWJwYWNrIGlzIGNvbXBpbGluZyBhcyB0aGUgaW5wdXQgZmlsZS5cbiAqL1xuXG4vKipcbiAqIEV4dGVybmFsIGRlcGVuZGFuY2llc1xuICovXG5jb25zdCB7IG1lcmdlIH0gPSBsb2Rhc2g7XG5cbi8qKlxuICogV29yZFByZXNzIGRlcGVuZGVuY2llc1xuICovXG5jb25zdCB7IHJlZ2lzdGVyQmxvY2tUeXBlIH0gPSB3cC5ibG9ja3M7XG5cbi8qKlxuICogSW1wb3J0IGJsb2Nrc1xuICovXG5pbXBvcnQgKiBhcyBwb3N0c0Jsb2NrIGZyb20gJy4vcG9zdHMvaW5kZXgnO1xuaW1wb3J0ICogYXMgcGFyYWdyYXBoQmxvY2sgZnJvbSAnLi9wYXJhZ3JhcGgvaW5kZXgnO1xuXG4vLyBjb25zb2xlLmxvZyhwYXJhZ3JhcGhCbG9jayk7XG5cbi8qKlxuICogUmVnaXN0ZXIgQmxvY2tzXG4gKi9cbnJlZ2lzdGVyQmxvY2tUeXBlKCBwb3N0c0Jsb2NrLm5hbWUsIHBvc3RzQmxvY2suc2V0dGluZ3MgKTtcbnJlZ2lzdGVyQmxvY2tUeXBlKCBwYXJhZ3JhcGhCbG9jay5uYW1lLCBtZXJnZShwYXJhZ3JhcGhCbG9jay5zZXR0aW5ncywgcGFyYWdyYXBoQmxvY2subWV0YWRhdGEpICk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/blocks/blocks.js\n");

/***/ }),

/***/ "./resources/blocks/functions-helpers.js":
/*!***********************************************!*\
  !*** ./resources/blocks/functions-helpers.js ***!
  \***********************************************/
/*! exports provided: getImageSrc, classNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getImageSrc\", function() { return getImageSrc; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"classNames\", function() { return classNames; });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n/**\n * WordPress dependencies\n */\nvar _lodash = lodash,\n    has = _lodash.has;\n/**\n * Get the source url of an image\n *\n * @return string\n */\n\nfunction getImageSrc(media, size) {\n  var imageSrc = '';\n  size = size || 'thumbnail';\n\n  if (media) {\n    // The media object can be different I guess...\n    // - Media with media_details and source_url\n    // - Media with direct properties and url\n    if (has(media, ['media_details'])) {\n      if (has(media, ['media_details', 'sizes', size])) {\n        imageSrc = media.media_details.sizes[size].source_url;\n      } else {\n        imageSrc = media.source_url;\n      }\n    } else {\n      if (has(media, ['sizes', size])) {\n        imageSrc = media.sizes[size].url;\n      } else {\n        imageSrc = media.url;\n      }\n    }\n  }\n\n  return imageSrc;\n}\n/*!\n  Copyright (c) 2018 Jed Watson.\n  Licensed under the MIT License (MIT), see\n  http://jedwatson.github.io/classnames\n*/\n\nvar hasOwn = {}.hasOwnProperty;\nfunction classNames() {\n  var classes = [];\n\n  for (var i = 0; i < arguments.length; i++) {\n    var arg = arguments[i];\n    if (!arg) continue;\n\n    var argType = _typeof(arg);\n\n    if (argType === 'string' || argType === 'number') {\n      classes.push(arg);\n    } else if (Array.isArray(arg)) {\n      if (arg.length) {\n        var inner = classNames.apply(null, arg);\n\n        if (inner) {\n          classes.push(inner);\n        }\n      }\n    } else if (argType === 'object') {\n      if (arg.toString !== Object.prototype.toString) {\n        classes.push(arg.toString());\n      } else {\n        for (var key in arg) {\n          if (hasOwn.call(arg, key) && arg[key]) {\n            classes.push(key);\n          }\n        }\n      }\n    }\n  }\n\n  return classes.join(' ');\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYmxvY2tzL2Z1bmN0aW9ucy1oZWxwZXJzLmpzP2E3MGQiXSwibmFtZXMiOlsibG9kYXNoIiwiaGFzIiwiZ2V0SW1hZ2VTcmMiLCJtZWRpYSIsInNpemUiLCJpbWFnZVNyYyIsIm1lZGlhX2RldGFpbHMiLCJzaXplcyIsInNvdXJjZV91cmwiLCJ1cmwiLCJoYXNPd24iLCJoYXNPd25Qcm9wZXJ0eSIsImNsYXNzTmFtZXMiLCJjbGFzc2VzIiwiaSIsImFyZ3VtZW50cyIsImxlbmd0aCIsImFyZyIsImFyZ1R5cGUiLCJwdXNoIiwiQXJyYXkiLCJpc0FycmF5IiwiaW5uZXIiLCJhcHBseSIsInRvU3RyaW5nIiwiT2JqZWN0IiwicHJvdG90eXBlIiwia2V5IiwiY2FsbCIsImpvaW4iXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7OztjQUdnQkEsTTtJQUFSQyxHLFdBQUFBLEc7QUFFUjs7Ozs7O0FBS08sU0FBU0MsV0FBVCxDQUFzQkMsS0FBdEIsRUFBNkJDLElBQTdCLEVBQW9DO0FBQzFDLE1BQUlDLFFBQVEsR0FBRyxFQUFmO0FBRUFELE1BQUksR0FBR0EsSUFBSSxJQUFJLFdBQWY7O0FBRUEsTUFBS0QsS0FBTCxFQUFhO0FBRVo7QUFDQTtBQUNBO0FBQ0EsUUFBS0YsR0FBRyxDQUFFRSxLQUFGLEVBQVMsQ0FBRSxlQUFGLENBQVQsQ0FBUixFQUF5QztBQUN4QyxVQUFLRixHQUFHLENBQUVFLEtBQUYsRUFBUyxDQUFFLGVBQUYsRUFBbUIsT0FBbkIsRUFBNEJDLElBQTVCLENBQVQsQ0FBUixFQUF3RDtBQUN2REMsZ0JBQVEsR0FBR0YsS0FBSyxDQUFDRyxhQUFOLENBQW9CQyxLQUFwQixDQUEyQkgsSUFBM0IsRUFBa0NJLFVBQTdDO0FBQ0EsT0FGRCxNQUVPO0FBQ05ILGdCQUFRLEdBQUdGLEtBQUssQ0FBQ0ssVUFBakI7QUFDQTtBQUNELEtBTkQsTUFPSztBQUNKLFVBQUtQLEdBQUcsQ0FBRUUsS0FBRixFQUFTLENBQUUsT0FBRixFQUFXQyxJQUFYLENBQVQsQ0FBUixFQUF1QztBQUN0Q0MsZ0JBQVEsR0FBR0YsS0FBSyxDQUFDSSxLQUFOLENBQWFILElBQWIsRUFBb0JLLEdBQS9CO0FBQ0EsT0FGRCxNQUVPO0FBQ05KLGdCQUFRLEdBQUdGLEtBQUssQ0FBQ00sR0FBakI7QUFDQTtBQUNEO0FBQ0Q7O0FBRUQsU0FBT0osUUFBUDtBQUNBO0FBRUQ7Ozs7OztBQU1BLElBQUlLLE1BQU0sR0FBRyxHQUFHQyxjQUFoQjtBQUVPLFNBQVNDLFVBQVQsR0FBc0I7QUFDNUIsTUFBSUMsT0FBTyxHQUFHLEVBQWQ7O0FBRUEsT0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHQyxTQUFTLENBQUNDLE1BQTlCLEVBQXNDRixDQUFDLEVBQXZDLEVBQTJDO0FBQzFDLFFBQUlHLEdBQUcsR0FBR0YsU0FBUyxDQUFDRCxDQUFELENBQW5CO0FBQ0EsUUFBSSxDQUFDRyxHQUFMLEVBQVU7O0FBRVYsUUFBSUMsT0FBTyxXQUFVRCxHQUFWLENBQVg7O0FBRUEsUUFBSUMsT0FBTyxLQUFLLFFBQVosSUFBd0JBLE9BQU8sS0FBSyxRQUF4QyxFQUFrRDtBQUNqREwsYUFBTyxDQUFDTSxJQUFSLENBQWFGLEdBQWI7QUFDQSxLQUZELE1BRU8sSUFBSUcsS0FBSyxDQUFDQyxPQUFOLENBQWNKLEdBQWQsQ0FBSixFQUF3QjtBQUM5QixVQUFHQSxHQUFHLENBQUNELE1BQVAsRUFBZTtBQUNkLFlBQUlNLEtBQUssR0FBR1YsVUFBVSxDQUFDVyxLQUFYLENBQWlCLElBQWpCLEVBQXVCTixHQUF2QixDQUFaOztBQUNBLFlBQUlLLEtBQUosRUFBVztBQUNWVCxpQkFBTyxDQUFDTSxJQUFSLENBQWFHLEtBQWI7QUFDQTtBQUNEO0FBQ0QsS0FQTSxNQU9BLElBQUlKLE9BQU8sS0FBSyxRQUFoQixFQUEwQjtBQUNoQyxVQUFJRCxHQUFHLENBQUNPLFFBQUosS0FBaUJDLE1BQU0sQ0FBQ0MsU0FBUCxDQUFpQkYsUUFBdEMsRUFBZ0Q7QUFDL0NYLGVBQU8sQ0FBQ00sSUFBUixDQUFhRixHQUFHLENBQUNPLFFBQUosRUFBYjtBQUNBLE9BRkQsTUFFTztBQUNOLGFBQUssSUFBSUcsR0FBVCxJQUFnQlYsR0FBaEIsRUFBcUI7QUFDcEIsY0FBSVAsTUFBTSxDQUFDa0IsSUFBUCxDQUFZWCxHQUFaLEVBQWlCVSxHQUFqQixLQUF5QlYsR0FBRyxDQUFDVSxHQUFELENBQWhDLEVBQXVDO0FBQ3RDZCxtQkFBTyxDQUFDTSxJQUFSLENBQWFRLEdBQWI7QUFDQTtBQUNEO0FBQ0Q7QUFDRDtBQUNEOztBQUVELFNBQU9kLE9BQU8sQ0FBQ2dCLElBQVIsQ0FBYSxHQUFiLENBQVA7QUFDQSIsImZpbGUiOiIuL3Jlc291cmNlcy9ibG9ja3MvZnVuY3Rpb25zLWhlbHBlcnMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFdvcmRQcmVzcyBkZXBlbmRlbmNpZXNcbiAqL1xuY29uc3QgeyBoYXMgfSA9IGxvZGFzaDtcblxuLyoqXG4gKiBHZXQgdGhlIHNvdXJjZSB1cmwgb2YgYW4gaW1hZ2VcbiAqXG4gKiBAcmV0dXJuIHN0cmluZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW1hZ2VTcmMoIG1lZGlhLCBzaXplICkge1xuXHRsZXQgaW1hZ2VTcmMgPSAnJztcblxuXHRzaXplID0gc2l6ZSB8fCAndGh1bWJuYWlsJztcblxuXHRpZiAoIG1lZGlhICkge1xuXG5cdFx0Ly8gVGhlIG1lZGlhIG9iamVjdCBjYW4gYmUgZGlmZmVyZW50IEkgZ3Vlc3MuLi5cblx0XHQvLyAtIE1lZGlhIHdpdGggbWVkaWFfZGV0YWlscyBhbmQgc291cmNlX3VybFxuXHRcdC8vIC0gTWVkaWEgd2l0aCBkaXJlY3QgcHJvcGVydGllcyBhbmQgdXJsXG5cdFx0aWYgKCBoYXMoIG1lZGlhLCBbICdtZWRpYV9kZXRhaWxzJyBdICkgKSB7XG5cdFx0XHRpZiAoIGhhcyggbWVkaWEsIFsgJ21lZGlhX2RldGFpbHMnLCAnc2l6ZXMnLCBzaXplIF0gKSApIHtcblx0XHRcdFx0aW1hZ2VTcmMgPSBtZWRpYS5tZWRpYV9kZXRhaWxzLnNpemVzWyBzaXplIF0uc291cmNlX3VybDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGltYWdlU3JjID0gbWVkaWEuc291cmNlX3VybDtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRpZiAoIGhhcyggbWVkaWEsIFsgJ3NpemVzJywgc2l6ZSBdICkgKSB7XG5cdFx0XHRcdGltYWdlU3JjID0gbWVkaWEuc2l6ZXNbIHNpemUgXS51cmw7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpbWFnZVNyYyA9IG1lZGlhLnVybDtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gaW1hZ2VTcmM7XG59XG5cbi8qIVxuICBDb3B5cmlnaHQgKGMpIDIwMTggSmVkIFdhdHNvbi5cbiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCBzZWVcbiAgaHR0cDovL2plZHdhdHNvbi5naXRodWIuaW8vY2xhc3NuYW1lc1xuKi9cblxudmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5leHBvcnQgZnVuY3Rpb24gY2xhc3NOYW1lcygpIHtcblx0dmFyIGNsYXNzZXMgPSBbXTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBhcmcgPSBhcmd1bWVudHNbaV07XG5cdFx0aWYgKCFhcmcpIGNvbnRpbnVlO1xuXG5cdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0aWYgKGFyZ1R5cGUgPT09ICdzdHJpbmcnIHx8IGFyZ1R5cGUgPT09ICdudW1iZXInKSB7XG5cdFx0XHRjbGFzc2VzLnB1c2goYXJnKTtcblx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuXHRcdFx0aWYoYXJnLmxlbmd0aCkge1xuXHRcdFx0XHR2YXIgaW5uZXIgPSBjbGFzc05hbWVzLmFwcGx5KG51bGwsIGFyZyk7XG5cdFx0XHRcdGlmIChpbm5lcikge1xuXHRcdFx0XHRcdGNsYXNzZXMucHVzaChpbm5lcik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKGFyZ1R5cGUgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRpZiAoYXJnLnRvU3RyaW5nICE9PSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChhcmcudG9TdHJpbmcoKSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gYXJnKSB7XG5cdFx0XHRcdFx0aWYgKGhhc093bi5jYWxsKGFyZywga2V5KSAmJiBhcmdba2V5XSkge1xuXHRcdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGtleSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/blocks/functions-helpers.js\n");

/***/ }),

/***/ "./resources/blocks/paragraph/block.json":
/*!***********************************************!*\
  !*** ./resources/blocks/paragraph/block.json ***!
  \***********************************************/
/*! exports provided: name, category, attributes, supports, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"name\\\":\\\"hwl-blokkendoos/hwl-paragraph\\\",\\\"category\\\":\\\"text\\\",\\\"attributes\\\":{\\\"align\\\":{\\\"type\\\":\\\"string\\\"},\\\"content\\\":{\\\"type\\\":\\\"string\\\",\\\"source\\\":\\\"html\\\",\\\"selector\\\":\\\"p\\\",\\\"default\\\":\\\"\\\"},\\\"placeholder\\\":{\\\"type\\\":\\\"string\\\"}},\\\"supports\\\":{\\\"anchor\\\":true,\\\"lightBlockWrapper\\\":true}}\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3Jlc291cmNlcy9ibG9ja3MvcGFyYWdyYXBoL2Jsb2NrLmpzb24uanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/blocks/paragraph/block.json\n");

/***/ }),

/***/ "./resources/blocks/paragraph/edit.js":
/*!********************************************!*\
  !*** ./resources/blocks/paragraph/edit.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * Internal dependencies\n */\n// import { classNames } from '../functions-helpers.js';\n// const classnames = classnames;\n\n/**\n * WordPress dependencies\n */\nvar __ = wp.i18n.__;\nvar _wp$blockEditor = wp.blockEditor,\n    AlignmentToolbar = _wp$blockEditor.AlignmentToolbar,\n    BlockControls = _wp$blockEditor.BlockControls,\n    RichText = _wp$blockEditor.RichText;\n\nfunction ParagraphBlock(_ref) {\n  var attributes = _ref.attributes,\n      className = _ref.className,\n      setAttributes = _ref.setAttributes;\n  var align = attributes.align,\n      content = attributes.content,\n      placeholder = attributes.placeholder;\n  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BlockControls, null, /*#__PURE__*/React.createElement(AlignmentToolbar, {\n    value: align,\n    onChange: function onChange(newAlign) {\n      return setAttributes({\n        align: newAlign\n      });\n    }\n  })), /*#__PURE__*/React.createElement(RichText, {\n    identifier: \"content\",\n    className: className,\n    tagName: \"p\",\n    value: content,\n    onChange: function onChange(newContent) {\n      return setAttributes({\n        content: newContent\n      });\n    }\n  }));\n}\n\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ParagraphBlock);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYmxvY2tzL3BhcmFncmFwaC9lZGl0LmpzPzAxYWEiXSwibmFtZXMiOlsiX18iLCJ3cCIsImkxOG4iLCJibG9ja0VkaXRvciIsIkFsaWdubWVudFRvb2xiYXIiLCJCbG9ja0NvbnRyb2xzIiwiUmljaFRleHQiLCJQYXJhZ3JhcGhCbG9jayIsImF0dHJpYnV0ZXMiLCJjbGFzc05hbWUiLCJzZXRBdHRyaWJ1dGVzIiwiYWxpZ24iLCJjb250ZW50IiwicGxhY2Vob2xkZXIiLCJuZXdBbGlnbiIsIm5ld0NvbnRlbnQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7OztBQUdBO0FBQ0E7O0FBRUE7OztJQUdRQSxFLEdBQU9DLEVBQUUsQ0FBQ0MsSSxDQUFWRixFO3NCQUtKQyxFQUFFLENBQUNFLFc7SUFITkMsZ0IsbUJBQUFBLGdCO0lBQ0FDLGEsbUJBQUFBLGE7SUFDQUMsUSxtQkFBQUEsUTs7QUFHRCxTQUFTQyxjQUFULE9BSUk7QUFBQSxNQUhIQyxVQUdHLFFBSEhBLFVBR0c7QUFBQSxNQUZIQyxTQUVHLFFBRkhBLFNBRUc7QUFBQSxNQURIQyxhQUNHLFFBREhBLGFBQ0c7QUFBQSxNQUVLQyxLQUZMLEdBRXFDSCxVQUZyQyxDQUVLRyxLQUZMO0FBQUEsTUFFWUMsT0FGWixHQUVxQ0osVUFGckMsQ0FFWUksT0FGWjtBQUFBLE1BRXFCQyxXQUZyQixHQUVxQ0wsVUFGckMsQ0FFcUJLLFdBRnJCO0FBSUEsc0JBQ0YsdURBQ0Msb0JBQUMsYUFBRCxxQkFDQyxvQkFBQyxnQkFBRDtBQUNDLFNBQUssRUFBR0YsS0FEVDtBQUVDLFlBQVEsRUFBRyxrQkFBRUcsUUFBRjtBQUFBLGFBQ1ZKLGFBQWEsQ0FBRTtBQUFFQyxhQUFLLEVBQUVHO0FBQVQsT0FBRixDQURIO0FBQUE7QUFGWixJQURELENBREQsZUFTQyxvQkFBQyxRQUFEO0FBQ0MsY0FBVSxFQUFDLFNBRFo7QUFFQyxhQUFTLEVBQUdMLFNBRmI7QUFHQyxXQUFPLEVBQUcsR0FIWDtBQUlDLFNBQUssRUFBR0csT0FKVDtBQUtDLFlBQVEsRUFBRyxrQkFBRUcsVUFBRjtBQUFBLGFBQ1ZMLGFBQWEsQ0FBRTtBQUFFRSxlQUFPLEVBQUVHO0FBQVgsT0FBRixDQURIO0FBQUE7QUFMWixJQVRELENBREU7QUFxQkg7O0FBQUE7QUFFY1IsNkVBQWYiLCJmaWxlIjoiLi9yZXNvdXJjZXMvYmxvY2tzL3BhcmFncmFwaC9lZGl0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBJbnRlcm5hbCBkZXBlbmRlbmNpZXNcbiAqL1xuLy8gaW1wb3J0IHsgY2xhc3NOYW1lcyB9IGZyb20gJy4uL2Z1bmN0aW9ucy1oZWxwZXJzLmpzJztcbi8vIGNvbnN0IGNsYXNzbmFtZXMgPSBjbGFzc25hbWVzO1xuXG4vKipcbiAqIFdvcmRQcmVzcyBkZXBlbmRlbmNpZXNcbiAqL1xuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcbmNvbnN0IHtcblx0QWxpZ25tZW50VG9vbGJhcixcblx0QmxvY2tDb250cm9scyxcblx0UmljaFRleHQsXG59ID0gd3AuYmxvY2tFZGl0b3I7XG5cbmZ1bmN0aW9uIFBhcmFncmFwaEJsb2NrKCB7XG5cdGF0dHJpYnV0ZXMsXG5cdGNsYXNzTmFtZSxcblx0c2V0QXR0cmlidXRlc1xufSApIHtcblxuXHRjb25zdCB7XHRhbGlnbiwgY29udGVudCxcdHBsYWNlaG9sZGVyIH0gPSBhdHRyaWJ1dGVzO1xuXG4gICAgcmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PEJsb2NrQ29udHJvbHM+XG5cdFx0XHRcdDxBbGlnbm1lbnRUb29sYmFyXG5cdFx0XHRcdFx0dmFsdWU9eyBhbGlnbiB9XG5cdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5ld0FsaWduICkgPT5cblx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgYWxpZ246IG5ld0FsaWduIH0gKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0Lz5cblx0XHRcdDwvQmxvY2tDb250cm9scz5cblx0XHRcdDxSaWNoVGV4dFxuXHRcdFx0XHRpZGVudGlmaWVyPVwiY29udGVudFwiXG5cdFx0XHRcdGNsYXNzTmFtZT17IGNsYXNzTmFtZSB9XG5cdFx0XHRcdHRhZ05hbWU9eyBcInBcIiB9XG5cdFx0XHRcdHZhbHVlPXsgY29udGVudCB9XG5cdFx0XHRcdG9uQ2hhbmdlPXsgKCBuZXdDb250ZW50ICkgPT5cblx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IGNvbnRlbnQ6IG5ld0NvbnRlbnQgfSApXG5cdFx0XHRcdH1cblx0XHRcdC8+XG5cdFx0PC8+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYXJhZ3JhcGhCbG9jaztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/blocks/paragraph/edit.js\n");

/***/ }),

/***/ "./resources/blocks/paragraph/index.js":
/*!*********************************************!*\
  !*** ./resources/blocks/paragraph/index.js ***!
  \*********************************************/
/*! exports provided: metadata, name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"name\", function() { return name; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"settings\", function() { return settings; });\n/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ \"./resources/blocks/paragraph/edit.js\");\n/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./save */ \"./resources/blocks/paragraph/save.js\");\n/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ \"./resources/blocks/paragraph/block.json\");\nvar _block_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./block.json */ \"./resources/blocks/paragraph/block.json\", 1);\n/* harmony reexport (default from named exports) */ __webpack_require__.d(__webpack_exports__, \"metadata\", function() { return _block_json__WEBPACK_IMPORTED_MODULE_2__; });\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n/**\n * WordPress dependencies\n */\nvar __ = wp.i18n.__; // Imports\n\n\n\n // Get name from metadata\n\nvar name = _block_json__WEBPACK_IMPORTED_MODULE_2__.name; // Export metadata and name\n\n // Export settings\n\nvar settings = _defineProperty({\n  title: __('HWL Paragraaf', 'hwl-blokkendoos'),\n  icon: 'editor-paragraph',\n  keywords: [__('Text', 'hwl-blokkendoos')],\n  example: {\n    attributes: {\n      content: __('In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen that keep a lance in the lance-rack, an old buckler, a lean hack, and a greyhound for coursing.')\n    }\n  },\n  edit: _edit__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n}, \"edit\", _save__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYmxvY2tzL3BhcmFncmFwaC9pbmRleC5qcz9iM2RlIl0sIm5hbWVzIjpbIl9fIiwid3AiLCJpMThuIiwibmFtZSIsIm1ldGFkYXRhIiwic2V0dGluZ3MiLCJ0aXRsZSIsImljb24iLCJrZXl3b3JkcyIsImV4YW1wbGUiLCJhdHRyaWJ1dGVzIiwiY29udGVudCIsImVkaXQiLCJzYXZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7OztJQUdRQSxFLEdBQU9DLEVBQUUsQ0FBQ0MsSSxDQUFWRixFLEVBRVI7O0FBQ0E7QUFDQTtDQUdBOztJQUNRRyxJLEdBQVNDLHdDLENBQVRELEksRUFFUjs7Q0FHQTs7QUFDTyxJQUFNRSxRQUFRO0FBQ3BCQyxPQUFLLEVBQUVOLEVBQUUsQ0FBRSxlQUFGLEVBQW1CLGlCQUFuQixDQURXO0FBRXBCTyxNQUFJLEVBQUUsa0JBRmM7QUFHcEJDLFVBQVEsRUFBRSxDQUNUUixFQUFFLENBQUUsTUFBRixFQUFVLGlCQUFWLENBRE8sQ0FIVTtBQU1wQlMsU0FBTyxFQUFFO0FBQ1JDLGNBQVUsRUFBRTtBQUNYQyxhQUFPLEVBQUVYLEVBQUUsQ0FDVixrT0FEVTtBQURBO0FBREosR0FOVztBQWFwQlksTUFBSSxFQUFFQSw2Q0FBSUE7QUFiVSxXQWNkQyw2Q0FkYyxDQUFkIiwiZmlsZSI6Ii4vcmVzb3VyY2VzL2Jsb2Nrcy9wYXJhZ3JhcGgvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFdvcmRQcmVzcyBkZXBlbmRlbmNpZXNcbiAqL1xuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuLy8gSW1wb3J0c1xuaW1wb3J0IGVkaXQgZnJvbSAnLi9lZGl0JztcbmltcG9ydCBzYXZlIGZyb20gJy4vc2F2ZSc7XG5pbXBvcnQgbWV0YWRhdGEgZnJvbSAnLi9ibG9jay5qc29uJztcblxuLy8gR2V0IG5hbWUgZnJvbSBtZXRhZGF0YVxuY29uc3QgeyBuYW1lIH0gPSBtZXRhZGF0YTtcblxuLy8gRXhwb3J0IG1ldGFkYXRhIGFuZCBuYW1lXG5leHBvcnQgeyBtZXRhZGF0YSwgbmFtZSB9O1xuXG4vLyBFeHBvcnQgc2V0dGluZ3NcbmV4cG9ydCBjb25zdCBzZXR0aW5ncyA9IHtcblx0dGl0bGU6IF9fKCAnSFdMIFBhcmFncmFhZicsICdod2wtYmxva2tlbmRvb3MnICksXG5cdGljb246ICdlZGl0b3ItcGFyYWdyYXBoJyxcblx0a2V5d29yZHM6IFtcblx0XHRfXyggJ1RleHQnLCAnaHdsLWJsb2trZW5kb29zJyApLFxuXHRdLFxuXHRleGFtcGxlOiB7XG5cdFx0YXR0cmlidXRlczoge1xuXHRcdFx0Y29udGVudDogX18oXG5cdFx0XHRcdCdJbiBhIHZpbGxhZ2Ugb2YgTGEgTWFuY2hhLCB0aGUgbmFtZSBvZiB3aGljaCBJIGhhdmUgbm8gZGVzaXJlIHRvIGNhbGwgdG8gbWluZCwgdGhlcmUgbGl2ZWQgbm90IGxvbmcgc2luY2Ugb25lIG9mIHRob3NlIGdlbnRsZW1lbiB0aGF0IGtlZXAgYSBsYW5jZSBpbiB0aGUgbGFuY2UtcmFjaywgYW4gb2xkIGJ1Y2tsZXIsIGEgbGVhbiBoYWNrLCBhbmQgYSBncmV5aG91bmQgZm9yIGNvdXJzaW5nLidcblx0XHRcdClcblx0XHR9LFxuXHR9LFxuXHRlZGl0OiBlZGl0LFxuXHRlZGl0OiBzYXZlLFxufTtcblxuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/blocks/paragraph/index.js\n");

/***/ }),

/***/ "./resources/blocks/paragraph/save.js":
/*!********************************************!*\
  !*** ./resources/blocks/paragraph/save.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return save; });\n/* harmony import */ var _functions_helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions-helpers.js */ \"./resources/blocks/functions-helpers.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n/**\n * Internal dependencies\n */\n\n/**\n * WordPress dependencies\n */\n\nvar RichText = wp.blockEditor.RichText;\nfunction save(_ref) {\n  var attributes = _ref.attributes;\n  var align = attributes.align,\n      content = attributes.content;\n  var className = Object(_functions_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"classNames\"])(_defineProperty({}, \"has-text-align-\".concat(align), align));\n  return /*#__PURE__*/React.createElement(RichText.Content, {\n    tagName: \"p\",\n    className: className ? className : undefined,\n    value: content\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYmxvY2tzL3BhcmFncmFwaC9zYXZlLmpzP2Q1NTciXSwibmFtZXMiOlsiUmljaFRleHQiLCJ3cCIsImJsb2NrRWRpdG9yIiwic2F2ZSIsImF0dHJpYnV0ZXMiLCJhbGlnbiIsImNvbnRlbnQiLCJjbGFzc05hbWUiLCJjbGFzc05hbWVzIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7QUFHQTtBQUVBOzs7O0lBR1FBLFEsR0FBYUMsRUFBRSxDQUFDQyxXLENBQWhCRixRO0FBRU8sU0FBU0csSUFBVCxPQUFnQztBQUFBLE1BQWZDLFVBQWUsUUFBZkEsVUFBZTtBQUFBLE1BQ3RDQyxLQURzQyxHQUNuQkQsVUFEbUIsQ0FDdENDLEtBRHNDO0FBQUEsTUFDL0JDLE9BRCtCLEdBQ25CRixVQURtQixDQUMvQkUsT0FEK0I7QUFHOUMsTUFBTUMsU0FBUyxHQUFHQyx3RUFBVSw4Q0FDTkgsS0FETSxHQUNNQSxLQUROLEVBQTVCO0FBSUEsc0JBQ0Msb0JBQUMsUUFBRCxDQUFVLE9BQVY7QUFDQyxXQUFPLEVBQUMsR0FEVDtBQUVDLGFBQVMsRUFBR0UsU0FBUyxHQUFHQSxTQUFILEdBQWVFLFNBRnJDO0FBR0MsU0FBSyxFQUFHSDtBQUhULElBREQ7QUFPQSIsImZpbGUiOiIuL3Jlc291cmNlcy9ibG9ja3MvcGFyYWdyYXBoL3NhdmUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEludGVybmFsIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQgeyBjbGFzc05hbWVzIH0gZnJvbSAnLi4vZnVuY3Rpb25zLWhlbHBlcnMuanMnO1xuXG4vKipcbiAqIFdvcmRQcmVzcyBkZXBlbmRlbmNpZXNcbiAqL1xuY29uc3QgeyBSaWNoVGV4dCB9ID0gd3AuYmxvY2tFZGl0b3I7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNhdmUoIHsgYXR0cmlidXRlcyB9ICkge1xuXHRjb25zdCB7IGFsaWduLCBjb250ZW50IH0gPSBhdHRyaWJ1dGVzO1xuXG5cdGNvbnN0IGNsYXNzTmFtZSA9IGNsYXNzTmFtZXMoIHtcblx0XHRbIGBoYXMtdGV4dC1hbGlnbi0keyBhbGlnbiB9YCBdOiBhbGlnbixcblx0fSApO1xuXG5cdHJldHVybiAoXG5cdFx0PFJpY2hUZXh0LkNvbnRlbnRcblx0XHRcdHRhZ05hbWU9XCJwXCJcblx0XHRcdGNsYXNzTmFtZT17IGNsYXNzTmFtZSA/IGNsYXNzTmFtZSA6IHVuZGVmaW5lZCB9XG5cdFx0XHR2YWx1ZT17IGNvbnRlbnQgfVxuXHRcdC8+XG5cdCk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/blocks/paragraph/save.js\n");

/***/ }),

/***/ "./resources/blocks/posts/edit.js":
/*!****************************************!*\
  !*** ./resources/blocks/posts/edit.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return edit; });\n/**\n * Internal dependencies\n */\n\n/**\n * WordPress dependencies\n */\nvar __ = wp.i18n.__;\n/**\n * Edit function\n */\n\nfunction edit(_ref) {\n  var attributes = _ref.attributes,\n      setAttributes = _ref.setAttributes,\n      className = _ref.className;\n  return /*#__PURE__*/React.createElement(\"div\", {\n    className: className\n  }, /*#__PURE__*/React.createElement(\"h2\", {\n    className: \"\".concat(className, \"__block-title\")\n  }, __('Berichten', 'hwl-blokkendoos')));\n}\n;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYmxvY2tzL3Bvc3RzL2VkaXQuanM/ZDM3YiJdLCJuYW1lcyI6WyJfXyIsIndwIiwiaTE4biIsImVkaXQiLCJhdHRyaWJ1dGVzIiwic2V0QXR0cmlidXRlcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBOzs7O0FBSUE7OztJQUdRQSxFLEdBQU9DLEVBQUUsQ0FBQ0MsSSxDQUFWRixFO0FBRVI7Ozs7QUFHZSxTQUFTRyxJQUFULE9BQTBEO0FBQUEsTUFBekNDLFVBQXlDLFFBQXpDQSxVQUF5QztBQUFBLE1BQTdCQyxhQUE2QixRQUE3QkEsYUFBNkI7QUFBQSxNQUFkQyxTQUFjLFFBQWRBLFNBQWM7QUFFckUsc0JBQ0k7QUFBSyxhQUFTLEVBQUdBO0FBQWpCLGtCQUNJO0FBQUksYUFBUyxZQUFNQSxTQUFOO0FBQWIsS0FBZ0ROLEVBQUUsQ0FBQyxXQUFELEVBQWMsaUJBQWQsQ0FBbEQsQ0FESixDQURKO0FBS0g7QUFBQSIsImZpbGUiOiIuL3Jlc291cmNlcy9ibG9ja3MvcG9zdHMvZWRpdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogSW50ZXJuYWwgZGVwZW5kZW5jaWVzXG4gKi9cblxuLyoqXG4gKiBXb3JkUHJlc3MgZGVwZW5kZW5jaWVzXG4gKi9cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbi8qKlxuICogRWRpdCBmdW5jdGlvblxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlZGl0KCB7IGF0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXMsIGNsYXNzTmFtZSB9ICkge1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBjbGFzc05hbWUgfT5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9eyBgJHtjbGFzc05hbWV9X19ibG9jay10aXRsZWAgfT57IF9fKCdCZXJpY2h0ZW4nLCAnaHdsLWJsb2trZW5kb29zJyApIH08L2gyPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/blocks/posts/edit.js\n");

/***/ }),

/***/ "./resources/blocks/posts/index.js":
/*!*****************************************!*\
  !*** ./resources/blocks/posts/index.js ***!
  \*****************************************/
/*! exports provided: name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"name\", function() { return name; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"settings\", function() { return settings; });\n/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ \"./resources/blocks/posts/edit.js\");\n/**\n * WordPress dependencies\n */\nvar __ = wp.i18n.__; // Imports\n\n // Exports\n\nvar name = 'hwl-blokkendoos/posts';\nvar settings = {\n  title: __('Berichten', 'hwl-blokkendoos'),\n  icon: 'excerpt-view',\n  category: 'common',\n  keywords: [__('Berichten', 'hwl-blokkendoos'), __('Posts', 'hwl-blokkendoos'), __('Blog', 'hwl-blokkendoos')],\n  supports: {\n    multiple: false\n  },\n  attributes: {},\n  edit: _edit__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  save: function save() {\n    return null;\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYmxvY2tzL3Bvc3RzL2luZGV4LmpzPzc5ZGIiXSwibmFtZXMiOlsiX18iLCJ3cCIsImkxOG4iLCJuYW1lIiwic2V0dGluZ3MiLCJ0aXRsZSIsImljb24iLCJjYXRlZ29yeSIsImtleXdvcmRzIiwic3VwcG9ydHMiLCJtdWx0aXBsZSIsImF0dHJpYnV0ZXMiLCJlZGl0Iiwic2F2ZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0lBR1FBLEUsR0FBT0MsRUFBRSxDQUFDQyxJLENBQVZGLEUsRUFFUjs7Q0FHQTs7QUFDTyxJQUFNRyxJQUFJLEdBQUcsdUJBQWI7QUFDQSxJQUFNQyxRQUFRLEdBQUc7QUFDdkJDLE9BQUssRUFBRUwsRUFBRSxDQUFFLFdBQUYsRUFBZSxpQkFBZixDQURjO0FBRXZCTSxNQUFJLEVBQUUsY0FGaUI7QUFHdkJDLFVBQVEsRUFBRSxRQUhhO0FBSXZCQyxVQUFRLEVBQUUsQ0FDVFIsRUFBRSxDQUFFLFdBQUYsRUFBZSxpQkFBZixDQURPLEVBRVRBLEVBQUUsQ0FBRSxPQUFGLEVBQVcsaUJBQVgsQ0FGTyxFQUdUQSxFQUFFLENBQUUsTUFBRixFQUFVLGlCQUFWLENBSE8sQ0FKYTtBQVV2QlMsVUFBUSxFQUFFO0FBQ1RDLFlBQVEsRUFBRTtBQURELEdBVmE7QUFhdkJDLFlBQVUsRUFBRSxFQWJXO0FBY3ZCQyxNQUFJLEVBQUVBLDZDQWRpQjtBQWV2QkMsTUFBSSxFQUFFLGdCQUFNO0FBQ0wsV0FBTyxJQUFQO0FBQ0g7QUFqQm1CLENBQWpCIiwiZmlsZSI6Ii4vcmVzb3VyY2VzL2Jsb2Nrcy9wb3N0cy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogV29yZFByZXNzIGRlcGVuZGVuY2llc1xuICovXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG4vLyBJbXBvcnRzXG5pbXBvcnQgZWRpdCBmcm9tICcuL2VkaXQnO1xuXG4vLyBFeHBvcnRzXG5leHBvcnQgY29uc3QgbmFtZSA9ICdod2wtYmxva2tlbmRvb3MvcG9zdHMnO1xuZXhwb3J0IGNvbnN0IHNldHRpbmdzID0ge1xuXHR0aXRsZTogX18oICdCZXJpY2h0ZW4nLCAnaHdsLWJsb2trZW5kb29zJyApLFxuXHRpY29uOiAnZXhjZXJwdC12aWV3Jyxcblx0Y2F0ZWdvcnk6ICdjb21tb24nLFxuXHRrZXl3b3JkczogW1xuXHRcdF9fKCAnQmVyaWNodGVuJywgJ2h3bC1ibG9ra2VuZG9vcycgKSxcblx0XHRfXyggJ1Bvc3RzJywgJ2h3bC1ibG9ra2VuZG9vcycgKSxcblx0XHRfXyggJ0Jsb2cnLCAnaHdsLWJsb2trZW5kb29zJyApLFxuXHRdLFxuXG5cdHN1cHBvcnRzOiB7XG5cdFx0bXVsdGlwbGU6IGZhbHNlLFxuXHR9LFxuXHRhdHRyaWJ1dGVzOiB7fSxcblx0ZWRpdDogZWRpdCxcblx0c2F2ZTogKCkgPT4ge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9LFxufTtcblxuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/blocks/posts/index.js\n");

/***/ }),

/***/ 0:
/*!*************************************************************************************************************!*\
  !*** multi ./resources/blocks/blocks.js ./resources/blocks/blocks.editor.css ./resources/blocks/blocks.css ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/erik/Webdev/www/b2/public_html/wp-content/plugins/hwl-blokkendoos/resources/blocks/blocks.js */"./resources/blocks/blocks.js");
__webpack_require__(/*! /home/erik/Webdev/www/b2/public_html/wp-content/plugins/hwl-blokkendoos/resources/blocks/blocks.editor.css */"./resources/blocks/blocks.editor.css");
module.exports = __webpack_require__(/*! /home/erik/Webdev/www/b2/public_html/wp-content/plugins/hwl-blokkendoos/resources/blocks/blocks.css */"./resources/blocks/blocks.css");


/***/ })

/******/ });