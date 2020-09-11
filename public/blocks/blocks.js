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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _posts_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./posts/index */ \"./resources/blocks/posts/index.js\");\n/* harmony import */ var _test_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./test/index */ \"./resources/blocks/test/index.js\");\n/* harmony import */ var _section_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./section/index */ \"./resources/blocks/section/index.js\");\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n/**\n * WordPress dependencies\n */\nvar registerBlockType = wp.blocks.registerBlockType;\n/**\n * Import blocks\n */\n\n // import * as paragraphBlock from './paragraph/index';\n\n\n\n/**\n * Register Blocks\n */\n\nregisterBlockType(_posts_index__WEBPACK_IMPORTED_MODULE_0__[\"name\"], _posts_index__WEBPACK_IMPORTED_MODULE_0__[\"settings\"]); // registerBlockType( paragraphBlock.name, paragraphBlock.settings );\n\nregisterBlockType(_test_index__WEBPACK_IMPORTED_MODULE_1__[\"name\"], _test_index__WEBPACK_IMPORTED_MODULE_1__[\"settings\"]);\nregisterBlockType(_section_index__WEBPACK_IMPORTED_MODULE_2__[\"name\"], _section_index__WEBPACK_IMPORTED_MODULE_2__[\"settings\"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYmxvY2tzL2Jsb2Nrcy5qcz8yZTFhIl0sIm5hbWVzIjpbInJlZ2lzdGVyQmxvY2tUeXBlIiwid3AiLCJibG9ja3MiLCJwb3N0c0Jsb2NrIiwidGVzdEJsb2NrIiwic2VjdGlvbkJsb2NrIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7OztBQVdBOzs7SUFHUUEsaUIsR0FBc0JDLEVBQUUsQ0FBQ0MsTSxDQUF6QkYsaUI7QUFFUjs7OztDQUlBOztBQUNBO0FBQ0E7QUFFQTs7OztBQUdBQSxpQkFBaUIsQ0FBRUcsaURBQUYsRUFBbUJBLHFEQUFuQixDQUFqQixDLENBQ0E7O0FBQ0FILGlCQUFpQixDQUFFSSxnREFBRixFQUFrQkEsb0RBQWxCLENBQWpCO0FBQ0FKLGlCQUFpQixDQUFFSyxtREFBRixFQUFxQkEsdURBQXJCLENBQWpCIiwiZmlsZSI6Ii4vcmVzb3VyY2VzL2Jsb2Nrcy9ibG9ja3MuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbi8qKlxuICogV29yZFByZXNzIGRlcGVuZGVuY2llc1xuICovXG5jb25zdCB7IHJlZ2lzdGVyQmxvY2tUeXBlIH0gPSB3cC5ibG9ja3M7XG5cbi8qKlxuICogSW1wb3J0IGJsb2Nrc1xuICovXG5pbXBvcnQgKiBhcyBwb3N0c0Jsb2NrIGZyb20gJy4vcG9zdHMvaW5kZXgnO1xuLy8gaW1wb3J0ICogYXMgcGFyYWdyYXBoQmxvY2sgZnJvbSAnLi9wYXJhZ3JhcGgvaW5kZXgnO1xuaW1wb3J0ICogYXMgdGVzdEJsb2NrIGZyb20gJy4vdGVzdC9pbmRleCc7XG5pbXBvcnQgKiBhcyBzZWN0aW9uQmxvY2sgZnJvbSAnLi9zZWN0aW9uL2luZGV4JztcblxuLyoqXG4gKiBSZWdpc3RlciBCbG9ja3NcbiAqL1xucmVnaXN0ZXJCbG9ja1R5cGUoIHBvc3RzQmxvY2submFtZSwgcG9zdHNCbG9jay5zZXR0aW5ncyApO1xuLy8gcmVnaXN0ZXJCbG9ja1R5cGUoIHBhcmFncmFwaEJsb2NrLm5hbWUsIHBhcmFncmFwaEJsb2NrLnNldHRpbmdzICk7XG5yZWdpc3RlckJsb2NrVHlwZSggdGVzdEJsb2NrLm5hbWUsIHRlc3RCbG9jay5zZXR0aW5ncyApO1xucmVnaXN0ZXJCbG9ja1R5cGUoIHNlY3Rpb25CbG9jay5uYW1lLCBzZWN0aW9uQmxvY2suc2V0dGluZ3MgKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/blocks/blocks.js\n");

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

/***/ "./resources/blocks/section/block.json":
/*!*********************************************!*\
  !*** ./resources/blocks/section/block.json ***!
  \*********************************************/
/*! exports provided: name, title, category, icon, description, keywords, textdomain, attributes, supports, example, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"name\\\":\\\"wbl/section\\\",\\\"title\\\":\\\"Section\\\",\\\"category\\\":\\\"layout\\\",\\\"icon\\\":\\\"table-row-after\\\",\\\"description\\\":\\\"Section block\\\",\\\"keywords\\\":[\\\"Section\\\",\\\"Sectie\\\",\\\"Semantic\\\",\\\"Group\\\",\\\"Groep\\\"],\\\"textdomain\\\":\\\"hwl-blokkendoos\\\",\\\"attributes\\\":{\\\"tagName\\\":{\\\"type\\\":\\\"string\\\",\\\"default\\\":\\\"div\\\"}},\\\"supports\\\":{\\\"align\\\":false,\\\"alignWide\\\":false,\\\"anchor\\\":true,\\\"customClassName\\\":true,\\\"defaultStylePicker\\\":false,\\\"html\\\":false,\\\"lightBlockWrapper\\\":true},\\\"example\\\":{\\\"attributes\\\":{\\\"content\\\":\\\"<Section/>\\\"}}}\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3Jlc291cmNlcy9ibG9ja3Mvc2VjdGlvbi9ibG9jay5qc29uLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/blocks/section/block.json\n");

/***/ }),

/***/ "./resources/blocks/section/edit.js":
/*!******************************************!*\
  !*** ./resources/blocks/section/edit.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * Internal dependencies\n */\n\n/**\n * WordPress dependencies\n */\nvar InnerBlocks = wp.blockEditor.InnerBlocks;\nvar __ = wp.i18n.__;\n/**\n * Edit function\n */\n\nfunction SectionEdit(_ref) {\n  var attributes = _ref.attributes,\n      setAttributes = _ref.setAttributes,\n      className = _ref.className,\n      clientId = _ref.clientId;\n  console.log(className);\n  return /*#__PURE__*/React.createElement(\"div\", {\n    className: \"\".concat(className)\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"\".concat(className, \"__inner\")\n  }, /*#__PURE__*/React.createElement(InnerBlocks, null)));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SectionEdit);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYmxvY2tzL3NlY3Rpb24vZWRpdC5qcz9jZDI2Il0sIm5hbWVzIjpbIklubmVyQmxvY2tzIiwid3AiLCJibG9ja0VkaXRvciIsIl9fIiwiaTE4biIsIlNlY3Rpb25FZGl0IiwiYXR0cmlidXRlcyIsInNldEF0dHJpYnV0ZXMiLCJjbGFzc05hbWUiLCJjbGllbnRJZCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7Ozs7QUFJQTs7O0lBR1FBLFcsR0FBZ0JDLEVBQUUsQ0FBQ0MsVyxDQUFuQkYsVztJQUNBRyxFLEdBQU9GLEVBQUUsQ0FBQ0csSSxDQUFWRCxFO0FBRVI7Ozs7QUFHQSxTQUFTRSxXQUFULE9BQTJFO0FBQUEsTUFBbkRDLFVBQW1ELFFBQW5EQSxVQUFtRDtBQUFBLE1BQXZDQyxhQUF1QyxRQUF2Q0EsYUFBdUM7QUFBQSxNQUF4QkMsU0FBd0IsUUFBeEJBLFNBQXdCO0FBQUEsTUFBYkMsUUFBYSxRQUFiQSxRQUFhO0FBRTFFQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUgsU0FBWjtBQUVBLHNCQUNDO0FBQUssYUFBUyxZQUFNQSxTQUFOO0FBQWQsa0JBQ087QUFBSyxhQUFTLFlBQU1BLFNBQU47QUFBZCxrQkFDTCxvQkFBQyxXQUFELE9BREssQ0FEUCxDQUREO0FBT0E7O0FBRWNILDBFQUFmIiwiZmlsZSI6Ii4vcmVzb3VyY2VzL2Jsb2Nrcy9zZWN0aW9uL2VkaXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEludGVybmFsIGRlcGVuZGVuY2llc1xuICovXG5cbi8qKlxuICogV29yZFByZXNzIGRlcGVuZGVuY2llc1xuICovXG5jb25zdCB7IElubmVyQmxvY2tzIH0gPSB3cC5ibG9ja0VkaXRvcjtcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbi8qKlxuICogRWRpdCBmdW5jdGlvblxuICovXG5mdW5jdGlvbiBTZWN0aW9uRWRpdCggeyBhdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzLCBjbGFzc05hbWUsIGNsaWVudElkIH0gKSB7XG5cblx0Y29uc29sZS5sb2coY2xhc3NOYW1lKTtcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPXsgYCR7Y2xhc3NOYW1lfWAgfT5cbiAgICAgICAgXHQ8ZGl2IGNsYXNzTmFtZT17IGAke2NsYXNzTmFtZX1fX2lubmVyYCB9PlxuXHRcdFx0XHQ8SW5uZXJCbG9ja3MgLz5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uRWRpdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/blocks/section/edit.js\n");

/***/ }),

/***/ "./resources/blocks/section/index.js":
/*!*******************************************!*\
  !*** ./resources/blocks/section/index.js ***!
  \*******************************************/
/*! exports provided: name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"name\", function() { return name; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"settings\", function() { return settings; });\n/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block.json */ \"./resources/blocks/section/block.json\");\nvar _block_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./block.json */ \"./resources/blocks/section/block.json\", 1);\n/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ \"./resources/blocks/section/edit.js\");\n/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ \"./resources/blocks/section/save.js\");\n/**\n * External dependancies\n */\nvar _lodash = lodash,\n    merge = _lodash.merge; // Imports\n\n\n\n // Get name from metadata\n\nvar name = _block_json__WEBPACK_IMPORTED_MODULE_0__.name; // Merge the metadata with the edit and save functions\n\nvar settings = merge(_block_json__WEBPACK_IMPORTED_MODULE_0__, {\n  edit: _edit__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  save: _save__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n}); // Export\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYmxvY2tzL3NlY3Rpb24vaW5kZXguanM/OGI3ZSJdLCJuYW1lcyI6WyJsb2Rhc2giLCJtZXJnZSIsIm5hbWUiLCJtZXRhZGF0YSIsInNldHRpbmdzIiwiZWRpdCIsInNhdmUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztjQUdrQkEsTTtJQUFWQyxLLFdBQUFBLEssRUFFUjs7QUFDQTtBQUNBO0NBR0E7O0lBQ1FDLEksR0FBU0Msd0MsQ0FBVEQsSSxFQUVSOztBQUNBLElBQU1FLFFBQVEsR0FBR0gsS0FBSyxDQUFDRSx3Q0FBRCxFQUFXO0FBQ2hDRSxNQUFJLEVBQUVBLDZDQUQwQjtBQUVoQ0MsTUFBSSxFQUFFQSw2Q0FBSUE7QUFGc0IsQ0FBWCxDQUF0QixDLENBS0EiLCJmaWxlIjoiLi9yZXNvdXJjZXMvYmxvY2tzL3NlY3Rpb24vaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEV4dGVybmFsIGRlcGVuZGFuY2llc1xuICovXG5jb25zdCB7IG1lcmdlIH0gPSBsb2Rhc2g7XG5cbi8vIEltcG9ydHNcbmltcG9ydCBtZXRhZGF0YSBmcm9tICcuL2Jsb2NrLmpzb24nO1xuaW1wb3J0IGVkaXQgZnJvbSAnLi9lZGl0JztcbmltcG9ydCBzYXZlIGZyb20gJy4vc2F2ZSc7XG5cbi8vIEdldCBuYW1lIGZyb20gbWV0YWRhdGFcbmNvbnN0IHsgbmFtZSB9ID0gbWV0YWRhdGE7XG5cbi8vIE1lcmdlIHRoZSBtZXRhZGF0YSB3aXRoIHRoZSBlZGl0IGFuZCBzYXZlIGZ1bmN0aW9uc1xuY29uc3Qgc2V0dGluZ3MgPSBtZXJnZShtZXRhZGF0YSwge1xuXHRlZGl0OiBlZGl0LFxuXHRzYXZlOiBzYXZlXG59KTtcblxuLy8gRXhwb3J0XG5leHBvcnQgeyBuYW1lLCBzZXR0aW5ncyB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/blocks/section/index.js\n");

/***/ }),

/***/ "./resources/blocks/section/save.js":
/*!******************************************!*\
  !*** ./resources/blocks/section/save.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return save; });\n/**\n * Internal dependencies\n */\n\n/**\n * WordPress dependencies\n */\nvar InnerBlocks = wp.blockEditor.InnerBlocks;\n/**\n * Save function\n */\n\nfunction save(_ref) {\n  var attributes = _ref.attributes;\n  var Tag = attributes.tagName;\n  return /*#__PURE__*/React.createElement(Tag, null, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"wp-block-wbl-section__inner\"\n  }, /*#__PURE__*/React.createElement(InnerBlocks.Content, null)));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYmxvY2tzL3NlY3Rpb24vc2F2ZS5qcz80MDRmIl0sIm5hbWVzIjpbIklubmVyQmxvY2tzIiwid3AiLCJibG9ja0VkaXRvciIsInNhdmUiLCJhdHRyaWJ1dGVzIiwiVGFnIiwidGFnTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBOzs7O0FBSUE7OztJQUdRQSxXLEdBQWdCQyxFQUFFLENBQUNDLFcsQ0FBbkJGLFc7QUFFUjs7OztBQUdlLFNBQVNHLElBQVQsT0FBZ0M7QUFBQSxNQUFmQyxVQUFlLFFBQWZBLFVBQWU7QUFBQSxNQUM3QkMsR0FENkIsR0FDckJELFVBRHFCLENBQ3RDRSxPQURzQztBQUc5QyxzQkFDQyxvQkFBQyxHQUFELHFCQUNDO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0Msb0JBQUMsV0FBRCxDQUFhLE9BQWIsT0FERCxDQURELENBREQ7QUFPQSIsImZpbGUiOiIuL3Jlc291cmNlcy9ibG9ja3Mvc2VjdGlvbi9zYXZlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBJbnRlcm5hbCBkZXBlbmRlbmNpZXNcbiAqL1xuXG4vKipcbiAqIFdvcmRQcmVzcyBkZXBlbmRlbmNpZXNcbiAqL1xuY29uc3QgeyBJbm5lckJsb2NrcyB9ID0gd3AuYmxvY2tFZGl0b3I7XG5cbi8qKlxuICogU2F2ZSBmdW5jdGlvblxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzYXZlKCB7IGF0dHJpYnV0ZXMgfSApIHtcblx0Y29uc3QgeyB0YWdOYW1lOiBUYWcgfSA9IGF0dHJpYnV0ZXM7XG5cblx0cmV0dXJuIChcblx0XHQ8VGFnPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3cC1ibG9jay13Ymwtc2VjdGlvbl9faW5uZXJcIj5cblx0XHRcdFx0PElubmVyQmxvY2tzLkNvbnRlbnQgLz5cblx0XHRcdDwvZGl2PlxuXHRcdDwvVGFnPlxuXHQpO1xufVxuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/blocks/section/save.js\n");

/***/ }),

/***/ "./resources/blocks/test/block.json":
/*!******************************************!*\
  !*** ./resources/blocks/test/block.json ***!
  \******************************************/
/*! exports provided: name, title, category, icon, description, keywords, textdomain, attributes, supports, example, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"name\\\":\\\"hwl-blokkendoos/test\\\",\\\"title\\\":\\\"Test\\\",\\\"category\\\":\\\"text\\\",\\\"icon\\\":\\\"star-filled\\\",\\\"description\\\":\\\"Testblok…\\\",\\\"keywords\\\":[\\\"Test\\\"],\\\"textdomain\\\":\\\"hwl-blokkendoos\\\",\\\"attributes\\\":{\\\"content\\\":{\\\"type\\\":\\\"string\\\",\\\"source\\\":\\\"html\\\",\\\"selector\\\":\\\".wp-block-hwl-blokkendoos-test__content\\\"}},\\\"supports\\\":{\\\"align\\\":false,\\\"alignWide\\\":false,\\\"defaultStylePicker\\\":false,\\\"customClassName\\\":false,\\\"html\\\":false},\\\"example\\\":{\\\"attributes\\\":{\\\"content\\\":\\\"This is a test!\\\"}}}\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3Jlc291cmNlcy9ibG9ja3MvdGVzdC9ibG9jay5qc29uLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/blocks/test/block.json\n");

/***/ }),

/***/ "./resources/blocks/test/edit.js":
/*!***************************************!*\
  !*** ./resources/blocks/test/edit.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return edit; });\n/**\n * Internal dependencies\n */\n\n/**\n * WordPress dependencies\n */\nvar RichText = wp.blockEditor.RichText;\nvar __ = wp.i18n.__;\n/**\n * Edit function\n */\n\nfunction edit(_ref) {\n  var attributes = _ref.attributes,\n      setAttributes = _ref.setAttributes,\n      className = _ref.className;\n  var content = attributes.content;\n  return /*#__PURE__*/React.createElement(\"div\", {\n    className: className\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"\".concat(className, \"__inner\")\n  }, /*#__PURE__*/React.createElement(RichText, {\n    className: \"\".concat(className, \"__content\"),\n    tagName: \"div\",\n    multiline: \"p\",\n    value: content,\n    onChange: function onChange(content) {\n      setAttributes({\n        content: content\n      });\n    },\n    placeholder: __('Test', 'hwl-blokkendoos'),\n    keepPlaceholderOnFocus: true\n  })));\n}\n;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYmxvY2tzL3Rlc3QvZWRpdC5qcz9jMjkwIl0sIm5hbWVzIjpbIlJpY2hUZXh0Iiwid3AiLCJibG9ja0VkaXRvciIsIl9fIiwiaTE4biIsImVkaXQiLCJhdHRyaWJ1dGVzIiwic2V0QXR0cmlidXRlcyIsImNsYXNzTmFtZSIsImNvbnRlbnQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTs7OztBQUlBOzs7SUFHUUEsUSxHQUFhQyxFQUFFLENBQUNDLFcsQ0FBaEJGLFE7SUFDQUcsRSxHQUFPRixFQUFFLENBQUNHLEksQ0FBVkQsRTtBQUVSOzs7O0FBR2UsU0FBU0UsSUFBVCxPQUEwRDtBQUFBLE1BQXpDQyxVQUF5QyxRQUF6Q0EsVUFBeUM7QUFBQSxNQUE3QkMsYUFBNkIsUUFBN0JBLGFBQTZCO0FBQUEsTUFBZEMsU0FBYyxRQUFkQSxTQUFjO0FBQUEsTUFFaEVDLE9BRmdFLEdBRXBESCxVQUZvRCxDQUVoRUcsT0FGZ0U7QUFJckUsc0JBQ0k7QUFBSyxhQUFTLEVBQUdEO0FBQWpCLGtCQUNDO0FBQUssYUFBUyxZQUFNQSxTQUFOO0FBQWQsa0JBQ0ksb0JBQUMsUUFBRDtBQUNSLGFBQVMsWUFBTUEsU0FBTixjQUREO0FBRVIsV0FBTyxFQUFDLEtBRkE7QUFHSSxhQUFTLEVBQUMsR0FIZDtBQUlSLFNBQUssRUFBR0MsT0FKQTtBQUtSLFlBQVEsRUFBRyxrQkFBRUEsT0FBRixFQUFlO0FBQUVGLG1CQUFhLENBQUU7QUFBRUUsZUFBTyxFQUFQQTtBQUFGLE9BQUYsQ0FBYjtBQUE4QixLQUxsRDtBQU1SLGVBQVcsRUFBR04sRUFBRSxDQUFFLE1BQUYsRUFBVSxpQkFBVixDQU5SO0FBT1IsMEJBQXNCLEVBQUU7QUFQaEIsSUFESixDQURELENBREo7QUFlSDtBQUFBIiwiZmlsZSI6Ii4vcmVzb3VyY2VzL2Jsb2Nrcy90ZXN0L2VkaXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEludGVybmFsIGRlcGVuZGVuY2llc1xuICovXG5cbi8qKlxuICogV29yZFByZXNzIGRlcGVuZGVuY2llc1xuICovXG5jb25zdCB7IFJpY2hUZXh0IH0gPSB3cC5ibG9ja0VkaXRvcjtcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbi8qKlxuICogRWRpdCBmdW5jdGlvblxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlZGl0KCB7IGF0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXMsIGNsYXNzTmFtZSB9ICkge1xuXG5cdGNvbnN0IHsgY29udGVudCB9ID0gYXR0cmlidXRlcztcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgY2xhc3NOYW1lIH0+XG4gICAgICAgIFx0PGRpdiBjbGFzc05hbWU9eyBgJHtjbGFzc05hbWV9X19pbm5lcmAgfT5cbiAgICAgICAgICAgIFx0PFJpY2hUZXh0XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXsgYCR7Y2xhc3NOYW1lfV9fY29udGVudGAgfVxuXHRcdFx0XHRcdHRhZ05hbWU9XCJkaXZcIlxuICAgICAgICAgICAgICAgIFx0bXVsdGlsaW5lPVwicFwiXG5cdFx0XHRcdFx0dmFsdWU9eyBjb250ZW50IH1cblx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHsgc2V0QXR0cmlidXRlcyggeyBjb250ZW50IH0gKSB9IH1cblx0XHRcdFx0XHRwbGFjZWhvbGRlcj17IF9fKCAnVGVzdCcsICdod2wtYmxva2tlbmRvb3MnICkgfVxuXHRcdFx0XHRcdGtlZXBQbGFjZWhvbGRlck9uRm9jdXM9e3RydWV9XG5cdFx0XHRcdC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/blocks/test/edit.js\n");

/***/ }),

/***/ "./resources/blocks/test/index.js":
/*!****************************************!*\
  !*** ./resources/blocks/test/index.js ***!
  \****************************************/
/*! exports provided: name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"name\", function() { return name; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"settings\", function() { return settings; });\n/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block.json */ \"./resources/blocks/test/block.json\");\nvar _block_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./block.json */ \"./resources/blocks/test/block.json\", 1);\n/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ \"./resources/blocks/test/edit.js\");\n/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ \"./resources/blocks/test/save.js\");\n/**\n * External dependancies\n */\nvar _lodash = lodash,\n    merge = _lodash.merge; // Imports\n\n\n\n // Get name from metadata\n\nvar name = _block_json__WEBPACK_IMPORTED_MODULE_0__.name; // Merge the metadata with the edit and save functions\n\nvar settings = merge(_block_json__WEBPACK_IMPORTED_MODULE_0__, {\n  edit: _edit__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  save: _save__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n}); // Export\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYmxvY2tzL3Rlc3QvaW5kZXguanM/NmUwMyJdLCJuYW1lcyI6WyJsb2Rhc2giLCJtZXJnZSIsIm5hbWUiLCJtZXRhZGF0YSIsInNldHRpbmdzIiwiZWRpdCIsInNhdmUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztjQUdrQkEsTTtJQUFWQyxLLFdBQUFBLEssRUFFUjs7QUFDQTtBQUNBO0NBR0E7O0lBQ1FDLEksR0FBU0Msd0MsQ0FBVEQsSSxFQUVSOztBQUNBLElBQU1FLFFBQVEsR0FBR0gsS0FBSyxDQUFDRSx3Q0FBRCxFQUFXO0FBQ2hDRSxNQUFJLEVBQUVBLDZDQUQwQjtBQUVoQ0MsTUFBSSxFQUFFQSw2Q0FBSUE7QUFGc0IsQ0FBWCxDQUF0QixDLENBS0EiLCJmaWxlIjoiLi9yZXNvdXJjZXMvYmxvY2tzL3Rlc3QvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEV4dGVybmFsIGRlcGVuZGFuY2llc1xuICovXG5jb25zdCB7IG1lcmdlIH0gPSBsb2Rhc2g7XG5cbi8vIEltcG9ydHNcbmltcG9ydCBtZXRhZGF0YSBmcm9tICcuL2Jsb2NrLmpzb24nO1xuaW1wb3J0IGVkaXQgZnJvbSAnLi9lZGl0JztcbmltcG9ydCBzYXZlIGZyb20gJy4vc2F2ZSc7XG5cbi8vIEdldCBuYW1lIGZyb20gbWV0YWRhdGFcbmNvbnN0IHsgbmFtZSB9ID0gbWV0YWRhdGE7XG5cbi8vIE1lcmdlIHRoZSBtZXRhZGF0YSB3aXRoIHRoZSBlZGl0IGFuZCBzYXZlIGZ1bmN0aW9uc1xuY29uc3Qgc2V0dGluZ3MgPSBtZXJnZShtZXRhZGF0YSwge1xuXHRlZGl0OiBlZGl0LFxuXHRzYXZlOiBzYXZlXG59KTtcblxuLy8gRXhwb3J0XG5leHBvcnQgeyBuYW1lLCBzZXR0aW5ncyB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/blocks/test/index.js\n");

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

__webpack_require__(/*! /home/erik/Webdev/www/wbl/public_html/wp-content/plugins/hwl-blokkendoos/resources/blocks/blocks.js */"./resources/blocks/blocks.js");
__webpack_require__(/*! /home/erik/Webdev/www/wbl/public_html/wp-content/plugins/hwl-blokkendoos/resources/blocks/blocks.editor.css */"./resources/blocks/blocks.editor.css");
module.exports = __webpack_require__(/*! /home/erik/Webdev/www/wbl/public_html/wp-content/plugins/hwl-blokkendoos/resources/blocks/blocks.css */"./resources/blocks/blocks.css");


/***/ })

/******/ });