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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _posts_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./posts/index */ \"./resources/blocks/posts/index.js\");\n/* harmony import */ var _test_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./test/index */ \"./resources/blocks/test/index.js\");\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n/**\n * External dependancies\n */\nvar _lodash = lodash,\n    merge = _lodash.merge;\n/**\n * WordPress dependencies\n */\n\nvar registerBlockType = wp.blocks.registerBlockType;\n/**\n * Import blocks\n */\n\n // import * as paragraphBlock from './paragraph/index';\n\n\n/**\n * Register Blocks\n */\n\nregisterBlockType(_posts_index__WEBPACK_IMPORTED_MODULE_0__[\"name\"], _posts_index__WEBPACK_IMPORTED_MODULE_0__[\"settings\"]); // registerBlockType( paragraphBlock.name, paragraphBlock.settings );\n\nregisterBlockType(_test_index__WEBPACK_IMPORTED_MODULE_1__[\"name\"], _test_index__WEBPACK_IMPORTED_MODULE_1__[\"settings\"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYmxvY2tzL2Jsb2Nrcy5qcz8yZTFhIl0sIm5hbWVzIjpbImxvZGFzaCIsIm1lcmdlIiwicmVnaXN0ZXJCbG9ja1R5cGUiLCJ3cCIsImJsb2NrcyIsInBvc3RzQmxvY2siLCJ0ZXN0QmxvY2siXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7OztBQVdBOzs7Y0FHa0JBLE07SUFBVkMsSyxXQUFBQSxLO0FBRVI7Ozs7SUFHUUMsaUIsR0FBc0JDLEVBQUUsQ0FBQ0MsTSxDQUF6QkYsaUI7QUFFUjs7OztDQUlBOztBQUNBO0FBRUE7Ozs7QUFHQUEsaUJBQWlCLENBQUVHLGlEQUFGLEVBQW1CQSxxREFBbkIsQ0FBakIsQyxDQUNBOztBQUNBSCxpQkFBaUIsQ0FBRUksZ0RBQUYsRUFBa0JBLG9EQUFsQixDQUFqQiIsImZpbGUiOiIuL3Jlc291cmNlcy9ibG9ja3MvYmxvY2tzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBHdXRlbmJlcmcgQmxvY2tzXG4gKlxuICogQWxsIGJsb2NrcyByZWxhdGVkIEphdmFTY3JpcHQgZmlsZXMgc2hvdWxkIGJlIGltcG9ydGVkIGhlcmUuXG4gKiBZb3UgY2FuIGNyZWF0ZSBhIG5ldyBibG9jayBmb2xkZXIgaW4gdGhpcyBkaXIgYW5kIGluY2x1ZGUgY29kZVxuICogZm9yIHRoYXQgYmxvY2sgaGVyZSBhcyB3ZWxsLlxuICpcbiAqIEFsbCBibG9ja3Mgc2hvdWxkIGJlIGluY2x1ZGVkIGhlcmUgc2luY2UgdGhpcyBpcyB0aGUgZmlsZSB0aGF0XG4gKiBXZWJwYWNrIGlzIGNvbXBpbGluZyBhcyB0aGUgaW5wdXQgZmlsZS5cbiAqL1xuXG4vKipcbiAqIEV4dGVybmFsIGRlcGVuZGFuY2llc1xuICovXG5jb25zdCB7IG1lcmdlIH0gPSBsb2Rhc2g7XG5cbi8qKlxuICogV29yZFByZXNzIGRlcGVuZGVuY2llc1xuICovXG5jb25zdCB7IHJlZ2lzdGVyQmxvY2tUeXBlIH0gPSB3cC5ibG9ja3M7XG5cbi8qKlxuICogSW1wb3J0IGJsb2Nrc1xuICovXG5pbXBvcnQgKiBhcyBwb3N0c0Jsb2NrIGZyb20gJy4vcG9zdHMvaW5kZXgnO1xuLy8gaW1wb3J0ICogYXMgcGFyYWdyYXBoQmxvY2sgZnJvbSAnLi9wYXJhZ3JhcGgvaW5kZXgnO1xuaW1wb3J0ICogYXMgdGVzdEJsb2NrIGZyb20gJy4vdGVzdC9pbmRleCc7XG5cbi8qKlxuICogUmVnaXN0ZXIgQmxvY2tzXG4gKi9cbnJlZ2lzdGVyQmxvY2tUeXBlKCBwb3N0c0Jsb2NrLm5hbWUsIHBvc3RzQmxvY2suc2V0dGluZ3MgKTtcbi8vIHJlZ2lzdGVyQmxvY2tUeXBlKCBwYXJhZ3JhcGhCbG9jay5uYW1lLCBwYXJhZ3JhcGhCbG9jay5zZXR0aW5ncyApO1xucmVnaXN0ZXJCbG9ja1R5cGUoIHRlc3RCbG9jay5uYW1lLCB0ZXN0QmxvY2suc2V0dGluZ3MgKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/blocks/blocks.js\n");

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

/***/ "./resources/blocks/test/edit.js":
/*!***************************************!*\
  !*** ./resources/blocks/test/edit.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return edit; });\n/**\n * Internal dependencies\n */\n\n/**\n * WordPress dependencies\n */\nvar RichText = wp.blockEditor.RichText;\nvar __ = wp.i18n.__;\n/**\n * Edit function\n */\n\nfunction edit(_ref) {\n  var attributes = _ref.attributes,\n      setAttributes = _ref.setAttributes,\n      className = _ref.className;\n  var content = attributes.content;\n  return /*#__PURE__*/React.createElement(\"div\", {\n    className: className\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"{$className}__inner\"\n  }, /*#__PURE__*/React.createElement(RichText, {\n    className: \"{$className}__content\",\n    tagName: \"div\",\n    multiline: \"p\",\n    value: content,\n    onChange: function onChange(content) {\n      setAttributes({\n        content: content\n      });\n    },\n    placeholder: __('Test', 'hwl-blokkendoos'),\n    keepPlaceholderOnFocus: true\n  })));\n}\n;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYmxvY2tzL3Rlc3QvZWRpdC5qcz9jMjkwIl0sIm5hbWVzIjpbIlJpY2hUZXh0Iiwid3AiLCJibG9ja0VkaXRvciIsIl9fIiwiaTE4biIsImVkaXQiLCJhdHRyaWJ1dGVzIiwic2V0QXR0cmlidXRlcyIsImNsYXNzTmFtZSIsImNvbnRlbnQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTs7OztBQUlBOzs7SUFHUUEsUSxHQUFhQyxFQUFFLENBQUNDLFcsQ0FBaEJGLFE7SUFDQUcsRSxHQUFPRixFQUFFLENBQUNHLEksQ0FBVkQsRTtBQUVSOzs7O0FBR2UsU0FBU0UsSUFBVCxPQUEwRDtBQUFBLE1BQXpDQyxVQUF5QyxRQUF6Q0EsVUFBeUM7QUFBQSxNQUE3QkMsYUFBNkIsUUFBN0JBLGFBQTZCO0FBQUEsTUFBZEMsU0FBYyxRQUFkQSxTQUFjO0FBQUEsTUFFaEVDLE9BRmdFLEdBRXBESCxVQUZvRCxDQUVoRUcsT0FGZ0U7QUFJckUsc0JBQ0k7QUFBSyxhQUFTLEVBQUdEO0FBQWpCLGtCQUNDO0FBQUssYUFBUztBQUFkLGtCQUNJLG9CQUFDLFFBQUQ7QUFDUixhQUFTLHlCQUREO0FBRVIsV0FBTyxFQUFDLEtBRkE7QUFHSSxhQUFTLEVBQUMsR0FIZDtBQUlSLFNBQUssRUFBR0MsT0FKQTtBQUtSLFlBQVEsRUFBRyxrQkFBRUEsT0FBRixFQUFlO0FBQUVGLG1CQUFhLENBQUU7QUFBRUUsZUFBTyxFQUFQQTtBQUFGLE9BQUYsQ0FBYjtBQUE4QixLQUxsRDtBQU1SLGVBQVcsRUFBR04sRUFBRSxDQUFFLE1BQUYsRUFBVSxpQkFBVixDQU5SO0FBT1IsMEJBQXNCLEVBQUU7QUFQaEIsSUFESixDQURELENBREo7QUFlSDtBQUFBIiwiZmlsZSI6Ii4vcmVzb3VyY2VzL2Jsb2Nrcy90ZXN0L2VkaXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEludGVybmFsIGRlcGVuZGVuY2llc1xuICovXG5cbi8qKlxuICogV29yZFByZXNzIGRlcGVuZGVuY2llc1xuICovXG5jb25zdCB7IFJpY2hUZXh0IH0gPSB3cC5ibG9ja0VkaXRvcjtcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbi8qKlxuICogRWRpdCBmdW5jdGlvblxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlZGl0KCB7IGF0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXMsIGNsYXNzTmFtZSB9ICkge1xuXG5cdGNvbnN0IHsgY29udGVudCB9ID0gYXR0cmlidXRlcztcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgY2xhc3NOYW1lIH0+XG4gICAgICAgIFx0PGRpdiBjbGFzc05hbWU9eyBgeyRjbGFzc05hbWV9X19pbm5lcmAgfT5cbiAgICAgICAgICAgIFx0PFJpY2hUZXh0XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXsgYHskY2xhc3NOYW1lfV9fY29udGVudGAgfVxuXHRcdFx0XHRcdHRhZ05hbWU9XCJkaXZcIlxuICAgICAgICAgICAgICAgIFx0bXVsdGlsaW5lPVwicFwiXG5cdFx0XHRcdFx0dmFsdWU9eyBjb250ZW50IH1cblx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHsgc2V0QXR0cmlidXRlcyggeyBjb250ZW50IH0gKSB9IH1cblx0XHRcdFx0XHRwbGFjZWhvbGRlcj17IF9fKCAnVGVzdCcsICdod2wtYmxva2tlbmRvb3MnICkgfVxuXHRcdFx0XHRcdGtlZXBQbGFjZWhvbGRlck9uRm9jdXM9e3RydWV9XG5cdFx0XHRcdC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/blocks/test/edit.js\n");

/***/ }),

/***/ "./resources/blocks/test/index.js":
/*!****************************************!*\
  !*** ./resources/blocks/test/index.js ***!
  \****************************************/
/*! exports provided: name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"name\", function() { return name; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"settings\", function() { return settings; });\n/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ \"./resources/blocks/test/edit.js\");\n/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./save */ \"./resources/blocks/test/save.js\");\n/**\n * WordPress dependencies\n */\nvar __ = wp.i18n.__; // Imports\n\n\n // Exports\n\nvar name = 'hwl-blokkendoos/test';\nvar settings = {\n  title: __('Test', 'hwl-blokkendoos'),\n  icon: 'megaphone',\n  category: 'common',\n  keywords: [__('Test', 'hwl-blokkendoos')],\n  supports: {\n    multiple: false\n  },\n  attributes: {\n    content: {\n      source: 'children',\n      selector: \".wp-block-hwl-blokkendoos-test__content\",\n      \"default\": false\n    }\n  },\n  edit: _edit__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  save: _save__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYmxvY2tzL3Rlc3QvaW5kZXguanM/NmUwMyJdLCJuYW1lcyI6WyJfXyIsIndwIiwiaTE4biIsIm5hbWUiLCJzZXR0aW5ncyIsInRpdGxlIiwiaWNvbiIsImNhdGVnb3J5Iiwia2V5d29yZHMiLCJzdXBwb3J0cyIsIm11bHRpcGxlIiwiYXR0cmlidXRlcyIsImNvbnRlbnQiLCJzb3VyY2UiLCJzZWxlY3RvciIsImVkaXQiLCJzYXZlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztJQUdRQSxFLEdBQU9DLEVBQUUsQ0FBQ0MsSSxDQUFWRixFLEVBRVI7O0FBQ0E7Q0FHQTs7QUFDTyxJQUFNRyxJQUFJLEdBQUcsc0JBQWI7QUFDQSxJQUFNQyxRQUFRLEdBQUc7QUFDdkJDLE9BQUssRUFBRUwsRUFBRSxDQUFFLE1BQUYsRUFBVSxpQkFBVixDQURjO0FBRXZCTSxNQUFJLEVBQUUsV0FGaUI7QUFHdkJDLFVBQVEsRUFBRSxRQUhhO0FBSXZCQyxVQUFRLEVBQUUsQ0FDVFIsRUFBRSxDQUFFLE1BQUYsRUFBVSxpQkFBVixDQURPLENBSmE7QUFPdkJTLFVBQVEsRUFBRTtBQUNUQyxZQUFRLEVBQUU7QUFERCxHQVBhO0FBVXZCQyxZQUFVLEVBQUU7QUFDWEMsV0FBTyxFQUFFO0FBQ1JDLFlBQU0sRUFBRSxVQURBO0FBRVJDLGNBQVEsMkNBRkE7QUFHUixpQkFBUztBQUhEO0FBREUsR0FWVztBQWlCdkJDLE1BQUksRUFBRUEsNkNBakJpQjtBQWtCdkJDLE1BQUksRUFBRUEsNkNBQUlBO0FBbEJhLENBQWpCIiwiZmlsZSI6Ii4vcmVzb3VyY2VzL2Jsb2Nrcy90ZXN0L2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBXb3JkUHJlc3MgZGVwZW5kZW5jaWVzXG4gKi9cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbi8vIEltcG9ydHNcbmltcG9ydCBlZGl0IGZyb20gJy4vZWRpdCc7XG5pbXBvcnQgc2F2ZSBmcm9tICcuL3NhdmUnO1xuXG4vLyBFeHBvcnRzXG5leHBvcnQgY29uc3QgbmFtZSA9ICdod2wtYmxva2tlbmRvb3MvdGVzdCc7XG5leHBvcnQgY29uc3Qgc2V0dGluZ3MgPSB7XG5cdHRpdGxlOiBfXyggJ1Rlc3QnLCAnaHdsLWJsb2trZW5kb29zJyApLFxuXHRpY29uOiAnbWVnYXBob25lJyxcblx0Y2F0ZWdvcnk6ICdjb21tb24nLFxuXHRrZXl3b3JkczogW1xuXHRcdF9fKCAnVGVzdCcsICdod2wtYmxva2tlbmRvb3MnICksXG5cdF0sXG5cdHN1cHBvcnRzOiB7XG5cdFx0bXVsdGlwbGU6IGZhbHNlLFxuXHR9LFxuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0Y29udGVudDoge1xuXHRcdFx0c291cmNlOiAnY2hpbGRyZW4nLFxuXHRcdFx0c2VsZWN0b3I6IGAud3AtYmxvY2staHdsLWJsb2trZW5kb29zLXRlc3RfX2NvbnRlbnRgLFxuXHRcdFx0ZGVmYXVsdDogZmFsc2Vcblx0XHR9LFxuXHR9LFxuXHRlZGl0OiBlZGl0LFxuXHRzYXZlOiBzYXZlXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/blocks/test/index.js\n");

/***/ }),

/***/ "./resources/blocks/test/save.js":
/*!***************************************!*\
  !*** ./resources/blocks/test/save.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return save; });\n/**\n * Internal dependencies\n */\n\n/**\n * WordPress dependencies\n */\nvar RichText = wp.blockEditor.RichText;\nvar getBlockDefaultClassName = wp.blocks.getBlockDefaultClassName;\n/**\n * Save function\n */\n\nfunction save(_ref) {\n  var attributes = _ref.attributes;\n  // Extract variables\n  var content = attributes.content; // Get className (https://github.com/WordPress/gutenberg/issues/7308#issuecomment-439946166)\n\n  var className = getBlockDefaultClassName('hwl-blokkendoos/test');\n  return /*#__PURE__*/React.createElement(\"div\", {\n    className: className\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"\".concat(className, \"__inner\")\n  }, /*#__PURE__*/React.createElement(RichText.Content, {\n    className: \"\".concat(className, \"__content\"),\n    tagName: \"div\",\n    value: content\n  })));\n}\n;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYmxvY2tzL3Rlc3Qvc2F2ZS5qcz84N2E0Il0sIm5hbWVzIjpbIlJpY2hUZXh0Iiwid3AiLCJibG9ja0VkaXRvciIsImdldEJsb2NrRGVmYXVsdENsYXNzTmFtZSIsImJsb2NrcyIsInNhdmUiLCJhdHRyaWJ1dGVzIiwiY29udGVudCIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBOzs7O0FBSUE7OztJQUdRQSxRLEdBQWFDLEVBQUUsQ0FBQ0MsVyxDQUFoQkYsUTtJQUNBRyx3QixHQUE2QkYsRUFBRSxDQUFDRyxNLENBQWhDRCx3QjtBQUVSOzs7O0FBR2UsU0FBU0UsSUFBVCxPQUFnQztBQUFBLE1BQWZDLFVBQWUsUUFBZkEsVUFBZTtBQUU5QztBQUY4QyxNQUd0Q0MsT0FIc0MsR0FHMUJELFVBSDBCLENBR3RDQyxPQUhzQyxFQUs5Qzs7QUFDQSxNQUFNQyxTQUFTLEdBQUdMLHdCQUF3QixDQUFFLHNCQUFGLENBQTFDO0FBRUEsc0JBQ0M7QUFBSyxhQUFTLEVBQUdLO0FBQWpCLGtCQUNDO0FBQUssYUFBUyxZQUFNQSxTQUFOO0FBQWQsa0JBQ0Msb0JBQUMsUUFBRCxDQUFVLE9BQVY7QUFBa0IsYUFBUyxZQUFNQSxTQUFOLGNBQTNCO0FBQXdELFdBQU8sRUFBQyxLQUFoRTtBQUFzRSxTQUFLLEVBQUdEO0FBQTlFLElBREQsQ0FERCxDQUREO0FBT0E7QUFBQSIsImZpbGUiOiIuL3Jlc291cmNlcy9ibG9ja3MvdGVzdC9zYXZlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBJbnRlcm5hbCBkZXBlbmRlbmNpZXNcbiAqL1xuXG4vKipcbiAqIFdvcmRQcmVzcyBkZXBlbmRlbmNpZXNcbiAqL1xuY29uc3QgeyBSaWNoVGV4dCB9ID0gd3AuYmxvY2tFZGl0b3I7XG5jb25zdCB7IGdldEJsb2NrRGVmYXVsdENsYXNzTmFtZSB9ID0gd3AuYmxvY2tzO1xuXG4vKipcbiAqIFNhdmUgZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2F2ZSggeyBhdHRyaWJ1dGVzIH0gKSB7XG5cblx0Ly8gRXh0cmFjdCB2YXJpYWJsZXNcblx0Y29uc3QgeyBjb250ZW50IH0gPSBhdHRyaWJ1dGVzO1xuXG5cdC8vIEdldCBjbGFzc05hbWUgKGh0dHBzOi8vZ2l0aHViLmNvbS9Xb3JkUHJlc3MvZ3V0ZW5iZXJnL2lzc3Vlcy83MzA4I2lzc3VlY29tbWVudC00Mzk5NDYxNjYpXG5cdGNvbnN0IGNsYXNzTmFtZSA9IGdldEJsb2NrRGVmYXVsdENsYXNzTmFtZSggJ2h3bC1ibG9ra2VuZG9vcy90ZXN0JyApO1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9eyBjbGFzc05hbWUgfT5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPXsgYCR7Y2xhc3NOYW1lfV9faW5uZXJgIH0+XG5cdFx0XHRcdDxSaWNoVGV4dC5Db250ZW50IGNsYXNzTmFtZT17IGAke2NsYXNzTmFtZX1fX2NvbnRlbnRgIH0gdGFnTmFtZT1cImRpdlwiIHZhbHVlPXsgY29udGVudCB9IC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/blocks/test/save.js\n");

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