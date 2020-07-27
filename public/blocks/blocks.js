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

/***/ "./resources/blocks/blocks-editor.css":
/*!********************************************!*\
  !*** ./resources/blocks/blocks-editor.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/css-loader/dist/cjs.js):\\nTypeError: text.forEach is not a function\\n    at /home/erik/Webdev/www/b2/public_html/wp-content/plugins/hwl-blokkendoos/node_modules/extract-text-webpack-plugin/dist/loader.js:145:16\\n    at /home/erik/Webdev/www/b2/public_html/wp-content/plugins/hwl-blokkendoos/node_modules/webpack/lib/Compiler.js:343:11\\n    at /home/erik/Webdev/www/b2/public_html/wp-content/plugins/hwl-blokkendoos/node_modules/webpack/lib/Compiler.js:681:15\\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (/home/erik/Webdev/www/b2/public_html/wp-content/plugins/hwl-blokkendoos/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:22:1)\\n    at AsyncSeriesHook.lazyCompileHook (/home/erik/Webdev/www/b2/public_html/wp-content/plugins/hwl-blokkendoos/node_modules/tapable/lib/Hook.js:154:20)\\n    at /home/erik/Webdev/www/b2/public_html/wp-content/plugins/hwl-blokkendoos/node_modules/webpack/lib/Compiler.js:678:31\\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (/home/erik/Webdev/www/b2/public_html/wp-content/plugins/hwl-blokkendoos/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:4:1)\\n    at AsyncSeriesHook.lazyCompileHook (/home/erik/Webdev/www/b2/public_html/wp-content/plugins/hwl-blokkendoos/node_modules/tapable/lib/Hook.js:154:20)\\n    at /home/erik/Webdev/www/b2/public_html/wp-content/plugins/hwl-blokkendoos/node_modules/webpack/lib/Compilation.js:1423:35\\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (/home/erik/Webdev/www/b2/public_html/wp-content/plugins/hwl-blokkendoos/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:4:1)\\n    at AsyncSeriesHook.lazyCompileHook (/home/erik/Webdev/www/b2/public_html/wp-content/plugins/hwl-blokkendoos/node_modules/tapable/lib/Hook.js:154:20)\\n    at /home/erik/Webdev/www/b2/public_html/wp-content/plugins/hwl-blokkendoos/node_modules/webpack/lib/Compilation.js:1414:32\\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (/home/erik/Webdev/www/b2/public_html/wp-content/plugins/hwl-blokkendoos/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:4:1)\\n    at AsyncSeriesHook.lazyCompileHook (/home/erik/Webdev/www/b2/public_html/wp-content/plugins/hwl-blokkendoos/node_modules/tapable/lib/Hook.js:154:20)\\n    at /home/erik/Webdev/www/b2/public_html/wp-content/plugins/hwl-blokkendoos/node_modules/webpack/lib/Compilation.js:1409:36\\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (/home/erik/Webdev/www/b2/public_html/wp-content/plugins/hwl-blokkendoos/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:4:1)\\n    at AsyncSeriesHook.lazyCompileHook (/home/erik/Webdev/www/b2/public_html/wp-content/plugins/hwl-blokkendoos/node_modules/tapable/lib/Hook.js:154:20)\\n    at /home/erik/Webdev/www/b2/public_html/wp-content/plugins/hwl-blokkendoos/node_modules/webpack/lib/Compilation.js:1405:32\\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (/home/erik/Webdev/www/b2/public_html/wp-content/plugins/hwl-blokkendoos/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:4:1)\\n    at AsyncSeriesHook.lazyCompileHook (/home/erik/Webdev/www/b2/public_html/wp-content/plugins/hwl-blokkendoos/node_modules/tapable/lib/Hook.js:154:20)\\n    at Compilation.seal (/home/erik/Webdev/www/b2/public_html/wp-content/plugins/hwl-blokkendoos/node_modules/webpack/lib/Compilation.js:1342:27)\\n    at /home/erik/Webdev/www/b2/public_html/wp-content/plugins/hwl-blokkendoos/node_modules/webpack/lib/Compiler.js:675:18\\n    at /home/erik/Webdev/www/b2/public_html/wp-content/plugins/hwl-blokkendoos/node_modules/webpack/lib/Compilation.js:1261:4\\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (/home/erik/Webdev/www/b2/public_html/wp-content/plugins/hwl-blokkendoos/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:13:1)\\n    at AsyncSeriesHook.lazyCompileHook (/home/erik/Webdev/www/b2/public_html/wp-content/plugins/hwl-blokkendoos/node_modules/tapable/lib/Hook.js:154:20)\\n    at Compilation.finish (/home/erik/Webdev/www/b2/public_html/wp-content/plugins/hwl-blokkendoos/node_modules/webpack/lib/Compilation.js:1253:28)\\n    at /home/erik/Webdev/www/b2/public_html/wp-content/plugins/hwl-blokkendoos/node_modules/webpack/lib/Compiler.js:672:17\\n    at eval (eval at create (/home/erik/Webdev/www/b2/public_html/wp-content/plugins/hwl-blokkendoos/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:9:1)\\n    at /home/erik/Webdev/www/b2/public_html/wp-content/plugins/hwl-blokkendoos/node_modules/webpack/lib/Compilation.js:1185:12\\n    at /home/erik/Webdev/www/b2/public_html/wp-content/plugins/hwl-blokkendoos/node_modules/webpack/lib/Compilation.js:1097:9\\n    at processTicksAndRejections (internal/process/task_queues.js:79:11)\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3Jlc291cmNlcy9ibG9ja3MvYmxvY2tzLWVkaXRvci5jc3MuanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/blocks/blocks-editor.css\n");

/***/ }),

/***/ "./resources/blocks/blocks.js":
/*!************************************!*\
  !*** ./resources/blocks/blocks.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n/**\n * WordPress dependencies\n */\n// const { registerBlockType } = wp.blocks;\n\n/**\n * Import blocks\n */\n// import * as latestPostsBlock from './latest-posts/index';\n\n/**\n * Register Blocks\n */\n// registerBlockType( latestPostsBlock.name, latestPostsBlock.settings );//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYmxvY2tzL2Jsb2Nrcy5qcz8yZTFhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztBQVdBOzs7QUFHQTs7QUFFQTs7O0FBR0E7O0FBRUE7OztBQUdBIiwiZmlsZSI6Ii4vcmVzb3VyY2VzL2Jsb2Nrcy9ibG9ja3MuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbi8qKlxuICogV29yZFByZXNzIGRlcGVuZGVuY2llc1xuICovXG4vLyBjb25zdCB7IHJlZ2lzdGVyQmxvY2tUeXBlIH0gPSB3cC5ibG9ja3M7XG5cbi8qKlxuICogSW1wb3J0IGJsb2Nrc1xuICovXG4vLyBpbXBvcnQgKiBhcyBsYXRlc3RQb3N0c0Jsb2NrIGZyb20gJy4vbGF0ZXN0LXBvc3RzL2luZGV4JztcblxuLyoqXG4gKiBSZWdpc3RlciBCbG9ja3NcbiAqL1xuLy8gcmVnaXN0ZXJCbG9ja1R5cGUoIGxhdGVzdFBvc3RzQmxvY2submFtZSwgbGF0ZXN0UG9zdHNCbG9jay5zZXR0aW5ncyApO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/blocks/blocks.js\n");

/***/ }),

/***/ 0:
/*!*******************************************************************************!*\
  !*** multi ./resources/blocks/blocks.js ./resources/blocks/blocks-editor.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/erik/Webdev/www/b2/public_html/wp-content/plugins/hwl-blokkendoos/resources/blocks/blocks.js */"./resources/blocks/blocks.js");
module.exports = __webpack_require__(/*! /home/erik/Webdev/www/b2/public_html/wp-content/plugins/hwl-blokkendoos/resources/blocks/blocks-editor.css */"./resources/blocks/blocks-editor.css");


/***/ })

/******/ });