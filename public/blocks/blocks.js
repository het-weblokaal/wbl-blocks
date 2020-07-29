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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _posts_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./posts/index */ \"./resources/blocks/posts/index.js\");\n/* harmony import */ var _paragraph_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./paragraph/index */ \"./resources/blocks/paragraph/index.js\");\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n/**\n * External dependancies\n */\nvar _lodash = lodash,\n    merge = _lodash.merge;\n/**\n * WordPress dependencies\n */\n\nvar registerBlockType = wp.blocks.registerBlockType;\n/**\n * Import blocks\n */\n\n\n // console.log(paragraphBlock);\n\n/**\n * Register Blocks\n */\n\nregisterBlockType(_posts_index__WEBPACK_IMPORTED_MODULE_0__[\"name\"], _posts_index__WEBPACK_IMPORTED_MODULE_0__[\"settings\"]);\nregisterBlockType(_paragraph_index__WEBPACK_IMPORTED_MODULE_1__[\"name\"], _paragraph_index__WEBPACK_IMPORTED_MODULE_1__[\"settings\"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYmxvY2tzL2Jsb2Nrcy5qcz8yZTFhIl0sIm5hbWVzIjpbImxvZGFzaCIsIm1lcmdlIiwicmVnaXN0ZXJCbG9ja1R5cGUiLCJ3cCIsImJsb2NrcyIsInBvc3RzQmxvY2siLCJwYXJhZ3JhcGhCbG9jayJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7O0FBV0E7OztjQUdrQkEsTTtJQUFWQyxLLFdBQUFBLEs7QUFFUjs7OztJQUdRQyxpQixHQUFzQkMsRUFBRSxDQUFDQyxNLENBQXpCRixpQjtBQUVSOzs7O0FBR0E7Q0FHQTs7QUFFQTs7OztBQUdBQSxpQkFBaUIsQ0FBRUcsaURBQUYsRUFBbUJBLHFEQUFuQixDQUFqQjtBQUNBSCxpQkFBaUIsQ0FBRUkscURBQUYsRUFBdUJBLHlEQUF2QixDQUFqQiIsImZpbGUiOiIuL3Jlc291cmNlcy9ibG9ja3MvYmxvY2tzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBHdXRlbmJlcmcgQmxvY2tzXG4gKlxuICogQWxsIGJsb2NrcyByZWxhdGVkIEphdmFTY3JpcHQgZmlsZXMgc2hvdWxkIGJlIGltcG9ydGVkIGhlcmUuXG4gKiBZb3UgY2FuIGNyZWF0ZSBhIG5ldyBibG9jayBmb2xkZXIgaW4gdGhpcyBkaXIgYW5kIGluY2x1ZGUgY29kZVxuICogZm9yIHRoYXQgYmxvY2sgaGVyZSBhcyB3ZWxsLlxuICpcbiAqIEFsbCBibG9ja3Mgc2hvdWxkIGJlIGluY2x1ZGVkIGhlcmUgc2luY2UgdGhpcyBpcyB0aGUgZmlsZSB0aGF0XG4gKiBXZWJwYWNrIGlzIGNvbXBpbGluZyBhcyB0aGUgaW5wdXQgZmlsZS5cbiAqL1xuXG4vKipcbiAqIEV4dGVybmFsIGRlcGVuZGFuY2llc1xuICovXG5jb25zdCB7IG1lcmdlIH0gPSBsb2Rhc2g7XG5cbi8qKlxuICogV29yZFByZXNzIGRlcGVuZGVuY2llc1xuICovXG5jb25zdCB7IHJlZ2lzdGVyQmxvY2tUeXBlIH0gPSB3cC5ibG9ja3M7XG5cbi8qKlxuICogSW1wb3J0IGJsb2Nrc1xuICovXG5pbXBvcnQgKiBhcyBwb3N0c0Jsb2NrIGZyb20gJy4vcG9zdHMvaW5kZXgnO1xuaW1wb3J0ICogYXMgcGFyYWdyYXBoQmxvY2sgZnJvbSAnLi9wYXJhZ3JhcGgvaW5kZXgnO1xuXG4vLyBjb25zb2xlLmxvZyhwYXJhZ3JhcGhCbG9jayk7XG5cbi8qKlxuICogUmVnaXN0ZXIgQmxvY2tzXG4gKi9cbnJlZ2lzdGVyQmxvY2tUeXBlKCBwb3N0c0Jsb2NrLm5hbWUsIHBvc3RzQmxvY2suc2V0dGluZ3MgKTtcbnJlZ2lzdGVyQmxvY2tUeXBlKCBwYXJhZ3JhcGhCbG9jay5uYW1lLCBwYXJhZ3JhcGhCbG9jay5zZXR0aW5ncyApO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/blocks/blocks.js\n");

/***/ }),

/***/ "./resources/blocks/paragraph/edit.js":
/*!********************************************!*\
  !*** ./resources/blocks/paragraph/edit.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return edit; });\n/**\n * Internal dependencies\n */\n// import { classNames } from '../functions-helpers.js';\n// const classnames = classnames;\n\n/**\n * WordPress dependencies\n */\nvar __ = wp.i18n.__;\nvar _wp$blockEditor = wp.blockEditor,\n    AlignmentToolbar = _wp$blockEditor.AlignmentToolbar,\n    BlockControls = _wp$blockEditor.BlockControls,\n    RichText = _wp$blockEditor.RichText;\nfunction edit(_ref) {\n  var attributes = _ref.attributes,\n      className = _ref.className,\n      setAttributes = _ref.setAttributes;\n  var align = attributes.align,\n      content = attributes.content,\n      placeholder = attributes.placeholder;\n  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BlockControls, null, /*#__PURE__*/React.createElement(AlignmentToolbar, {\n    value: align,\n    onChange: function onChange(newAlign) {\n      return setAttributes({\n        align: newAlign\n      });\n    }\n  })), /*#__PURE__*/React.createElement(RichText, {\n    identifier: \"content\",\n    tagName: 'p',\n    value: content,\n    onChange: function onChange(newContent) {\n      return setAttributes({\n        content: newContent\n      });\n    },\n    className: className,\n    placeholder: placeholder || __('Start writing or type / to choose a block', 'hwl-blokkendoos')\n  }));\n}\n;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYmxvY2tzL3BhcmFncmFwaC9lZGl0LmpzPzAxYWEiXSwibmFtZXMiOlsiX18iLCJ3cCIsImkxOG4iLCJibG9ja0VkaXRvciIsIkFsaWdubWVudFRvb2xiYXIiLCJCbG9ja0NvbnRyb2xzIiwiUmljaFRleHQiLCJlZGl0IiwiYXR0cmlidXRlcyIsImNsYXNzTmFtZSIsInNldEF0dHJpYnV0ZXMiLCJhbGlnbiIsImNvbnRlbnQiLCJwbGFjZWhvbGRlciIsIm5ld0FsaWduIiwibmV3Q29udGVudCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBOzs7QUFHQTtBQUNBOztBQUVBOzs7SUFHUUEsRSxHQUFPQyxFQUFFLENBQUNDLEksQ0FBVkYsRTtzQkFLSkMsRUFBRSxDQUFDRSxXO0lBSE5DLGdCLG1CQUFBQSxnQjtJQUNBQyxhLG1CQUFBQSxhO0lBQ0FDLFEsbUJBQUFBLFE7QUFHYyxTQUFTQyxJQUFULE9BSVg7QUFBQSxNQUhIQyxVQUdHLFFBSEhBLFVBR0c7QUFBQSxNQUZIQyxTQUVHLFFBRkhBLFNBRUc7QUFBQSxNQURIQyxhQUNHLFFBREhBLGFBQ0c7QUFBQSxNQUVLQyxLQUZMLEdBRXFDSCxVQUZyQyxDQUVLRyxLQUZMO0FBQUEsTUFFWUMsT0FGWixHQUVxQ0osVUFGckMsQ0FFWUksT0FGWjtBQUFBLE1BRXFCQyxXQUZyQixHQUVxQ0wsVUFGckMsQ0FFcUJLLFdBRnJCO0FBSUEsc0JBQ0YsdURBQ0Msb0JBQUMsYUFBRCxxQkFDQyxvQkFBQyxnQkFBRDtBQUNDLFNBQUssRUFBR0YsS0FEVDtBQUVDLFlBQVEsRUFBRyxrQkFBRUcsUUFBRjtBQUFBLGFBQ1ZKLGFBQWEsQ0FBRTtBQUFFQyxhQUFLLEVBQUVHO0FBQVQsT0FBRixDQURIO0FBQUE7QUFGWixJQURELENBREQsZUFTQyxvQkFBQyxRQUFEO0FBQ0MsY0FBVSxFQUFDLFNBRFo7QUFFQyxXQUFPLEVBQUcsR0FGWDtBQUdDLFNBQUssRUFBR0YsT0FIVDtBQUlDLFlBQVEsRUFBRyxrQkFBRUcsVUFBRjtBQUFBLGFBQ1ZMLGFBQWEsQ0FBRTtBQUFFRSxlQUFPLEVBQUVHO0FBQVgsT0FBRixDQURIO0FBQUEsS0FKWjtBQU9DLGFBQVMsRUFBR04sU0FQYjtBQVFDLGVBQVcsRUFDVkksV0FBVyxJQUNYYixFQUFFLENBQUUsMkNBQUYsRUFBK0MsaUJBQS9DO0FBVkosSUFURCxDQURFO0FBeUJIO0FBQUEiLCJmaWxlIjoiLi9yZXNvdXJjZXMvYmxvY2tzL3BhcmFncmFwaC9lZGl0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBJbnRlcm5hbCBkZXBlbmRlbmNpZXNcbiAqL1xuLy8gaW1wb3J0IHsgY2xhc3NOYW1lcyB9IGZyb20gJy4uL2Z1bmN0aW9ucy1oZWxwZXJzLmpzJztcbi8vIGNvbnN0IGNsYXNzbmFtZXMgPSBjbGFzc25hbWVzO1xuXG4vKipcbiAqIFdvcmRQcmVzcyBkZXBlbmRlbmNpZXNcbiAqL1xuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcbmNvbnN0IHtcblx0QWxpZ25tZW50VG9vbGJhcixcblx0QmxvY2tDb250cm9scyxcblx0UmljaFRleHQsXG59ID0gd3AuYmxvY2tFZGl0b3I7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVkaXQoIHtcblx0YXR0cmlidXRlcyxcblx0Y2xhc3NOYW1lLFxuXHRzZXRBdHRyaWJ1dGVzXG59ICkge1xuXG5cdGNvbnN0IHtcdGFsaWduLCBjb250ZW50LFx0cGxhY2Vob2xkZXIgfSA9IGF0dHJpYnV0ZXM7XG5cbiAgICByZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8QmxvY2tDb250cm9scz5cblx0XHRcdFx0PEFsaWdubWVudFRvb2xiYXJcblx0XHRcdFx0XHR2YWx1ZT17IGFsaWduIH1cblx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV3QWxpZ24gKSA9PlxuXHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyggeyBhbGlnbjogbmV3QWxpZ24gfSApXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9CbG9ja0NvbnRyb2xzPlxuXHRcdFx0PFJpY2hUZXh0XG5cdFx0XHRcdGlkZW50aWZpZXI9XCJjb250ZW50XCJcblx0XHRcdFx0dGFnTmFtZT17ICdwJyB9XG5cdFx0XHRcdHZhbHVlPXsgY29udGVudCB9XG5cdFx0XHRcdG9uQ2hhbmdlPXsgKCBuZXdDb250ZW50ICkgPT5cblx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IGNvbnRlbnQ6IG5ld0NvbnRlbnQgfSApXG5cdFx0XHRcdH1cblx0XHRcdFx0Y2xhc3NOYW1lPXsgY2xhc3NOYW1lIH1cblx0XHRcdFx0cGxhY2Vob2xkZXI9e1xuXHRcdFx0XHRcdHBsYWNlaG9sZGVyIHx8XG5cdFx0XHRcdFx0X18oICdTdGFydCB3cml0aW5nIG9yIHR5cGUgLyB0byBjaG9vc2UgYSBibG9jaycsICdod2wtYmxva2tlbmRvb3MnIClcblx0XHRcdFx0fVxuXHRcdFx0Lz5cblx0XHQ8Lz5cblx0KTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/blocks/paragraph/edit.js\n");

/***/ }),

/***/ "./resources/blocks/paragraph/index.js":
/*!*********************************************!*\
  !*** ./resources/blocks/paragraph/index.js ***!
  \*********************************************/
/*! exports provided: name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"name\", function() { return name; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"settings\", function() { return settings; });\n/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ \"./resources/blocks/paragraph/edit.js\");\n/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./save */ \"./resources/blocks/paragraph/save.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n/**\n * WordPress dependencies\n */\nvar __ = wp.i18n.__; // Imports\n\n\n // import metadata from './block.json';\n// // Get name from metadata\n// const { name } = metadata;\n// // Export metadata and name\n// export { metadata, name };\n\nvar name = \"hwl-blokkendoos/hwl-paragraph\"; // Export settings\n\nvar settings = _defineProperty({\n  title: __('HWL Paragraaf', 'hwl-blokkendoos'),\n  icon: 'editor-paragraph',\n  keywords: [__('Text', 'hwl-blokkendoos')],\n  example: {\n    attributes: {\n      content: __('In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen that keep a lance in the lance-rack, an old buckler, a lean hack, and a greyhound for coursing.')\n    }\n  },\n  category: \"text\",\n  attributes: {\n    align: {\n      type: \"string\"\n    },\n    content: {\n      type: \"string\",\n      source: \"html\",\n      selector: \"p\",\n      \"default\": \"\"\n    },\n    placeholder: {\n      type: \"string\"\n    }\n  },\n  supports: {\n    anchor: true,\n    lightBlockWrapper: true\n  },\n  edit: _edit__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n}, \"edit\", _save__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYmxvY2tzL3BhcmFncmFwaC9pbmRleC5qcz9iM2RlIl0sIm5hbWVzIjpbIl9fIiwid3AiLCJpMThuIiwibmFtZSIsInNldHRpbmdzIiwidGl0bGUiLCJpY29uIiwia2V5d29yZHMiLCJleGFtcGxlIiwiYXR0cmlidXRlcyIsImNvbnRlbnQiLCJjYXRlZ29yeSIsImFsaWduIiwidHlwZSIsInNvdXJjZSIsInNlbGVjdG9yIiwicGxhY2Vob2xkZXIiLCJzdXBwb3J0cyIsImFuY2hvciIsImxpZ2h0QmxvY2tXcmFwcGVyIiwiZWRpdCIsInNhdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7O0lBR1FBLEUsR0FBT0MsRUFBRSxDQUFDQyxJLENBQVZGLEUsRUFFUjs7QUFDQTtDQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7O0FBRU8sSUFBTUcsSUFBSSxHQUFHLCtCQUFiLEMsQ0FDUDs7QUFDTyxJQUFNQyxRQUFRO0FBQ3BCQyxPQUFLLEVBQUVMLEVBQUUsQ0FBRSxlQUFGLEVBQW1CLGlCQUFuQixDQURXO0FBRXBCTSxNQUFJLEVBQUUsa0JBRmM7QUFHcEJDLFVBQVEsRUFBRSxDQUNUUCxFQUFFLENBQUUsTUFBRixFQUFVLGlCQUFWLENBRE8sQ0FIVTtBQU1wQlEsU0FBTyxFQUFFO0FBQ1JDLGNBQVUsRUFBRTtBQUNYQyxhQUFPLEVBQUVWLEVBQUUsQ0FDVixrT0FEVTtBQURBO0FBREosR0FOVztBQWFwQlcsVUFBUSxFQUFFLE1BYlU7QUFjcEJGLFlBQVUsRUFBRTtBQUNYRyxTQUFLLEVBQUU7QUFDTkMsVUFBSSxFQUFFO0FBREEsS0FESTtBQUlYSCxXQUFPLEVBQUU7QUFDUkcsVUFBSSxFQUFFLFFBREU7QUFFUkMsWUFBTSxFQUFFLE1BRkE7QUFHUkMsY0FBUSxFQUFFLEdBSEY7QUFJUixpQkFBUztBQUpELEtBSkU7QUFVWEMsZUFBVyxFQUFFO0FBQ1pILFVBQUksRUFBRTtBQURNO0FBVkYsR0FkUTtBQTRCcEJJLFVBQVEsRUFBRTtBQUNUQyxVQUFNLEVBQUUsSUFEQztBQUVUQyxxQkFBaUIsRUFBRTtBQUZWLEdBNUJVO0FBZ0NwQkMsTUFBSSxFQUFFQSw2Q0FBSUE7QUFoQ1UsV0FpQ2RDLDZDQWpDYyxDQUFkIiwiZmlsZSI6Ii4vcmVzb3VyY2VzL2Jsb2Nrcy9wYXJhZ3JhcGgvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFdvcmRQcmVzcyBkZXBlbmRlbmNpZXNcbiAqL1xuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuLy8gSW1wb3J0c1xuaW1wb3J0IGVkaXQgZnJvbSAnLi9lZGl0JztcbmltcG9ydCBzYXZlIGZyb20gJy4vc2F2ZSc7XG4vLyBpbXBvcnQgbWV0YWRhdGEgZnJvbSAnLi9ibG9jay5qc29uJztcblxuLy8gLy8gR2V0IG5hbWUgZnJvbSBtZXRhZGF0YVxuLy8gY29uc3QgeyBuYW1lIH0gPSBtZXRhZGF0YTtcblxuLy8gLy8gRXhwb3J0IG1ldGFkYXRhIGFuZCBuYW1lXG4vLyBleHBvcnQgeyBtZXRhZGF0YSwgbmFtZSB9O1xuXG5leHBvcnQgY29uc3QgbmFtZSA9IFwiaHdsLWJsb2trZW5kb29zL2h3bC1wYXJhZ3JhcGhcIjtcbi8vIEV4cG9ydCBzZXR0aW5nc1xuZXhwb3J0IGNvbnN0IHNldHRpbmdzID0ge1xuXHR0aXRsZTogX18oICdIV0wgUGFyYWdyYWFmJywgJ2h3bC1ibG9ra2VuZG9vcycgKSxcblx0aWNvbjogJ2VkaXRvci1wYXJhZ3JhcGgnLFxuXHRrZXl3b3JkczogW1xuXHRcdF9fKCAnVGV4dCcsICdod2wtYmxva2tlbmRvb3MnICksXG5cdF0sXG5cdGV4YW1wbGU6IHtcblx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRjb250ZW50OiBfXyhcblx0XHRcdFx0J0luIGEgdmlsbGFnZSBvZiBMYSBNYW5jaGEsIHRoZSBuYW1lIG9mIHdoaWNoIEkgaGF2ZSBubyBkZXNpcmUgdG8gY2FsbCB0byBtaW5kLCB0aGVyZSBsaXZlZCBub3QgbG9uZyBzaW5jZSBvbmUgb2YgdGhvc2UgZ2VudGxlbWVuIHRoYXQga2VlcCBhIGxhbmNlIGluIHRoZSBsYW5jZS1yYWNrLCBhbiBvbGQgYnVja2xlciwgYSBsZWFuIGhhY2ssIGFuZCBhIGdyZXlob3VuZCBmb3IgY291cnNpbmcuJ1xuXHRcdFx0KVxuXHRcdH0sXG5cdH0sXG5cdGNhdGVnb3J5OiBcInRleHRcIixcblx0YXR0cmlidXRlczoge1xuXHRcdGFsaWduOiB7XG5cdFx0XHR0eXBlOiBcInN0cmluZ1wiXG5cdFx0fSxcblx0XHRjb250ZW50OiB7XG5cdFx0XHR0eXBlOiBcInN0cmluZ1wiLFxuXHRcdFx0c291cmNlOiBcImh0bWxcIixcblx0XHRcdHNlbGVjdG9yOiBcInBcIixcblx0XHRcdGRlZmF1bHQ6IFwiXCJcblx0XHR9LFxuXHRcdHBsYWNlaG9sZGVyOiB7XG5cdFx0XHR0eXBlOiBcInN0cmluZ1wiXG5cdFx0fVxuXHR9LFxuXHRzdXBwb3J0czoge1xuXHRcdGFuY2hvcjogdHJ1ZSxcblx0XHRsaWdodEJsb2NrV3JhcHBlcjogdHJ1ZVxuXHR9LFxuXHRlZGl0OiBlZGl0LFxuXHRlZGl0OiBzYXZlLFxufTtcblxuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/blocks/paragraph/index.js\n");

/***/ }),

/***/ "./resources/blocks/paragraph/save.js":
/*!********************************************!*\
  !*** ./resources/blocks/paragraph/save.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return save; });\n/**\n * External dependencies\n */\n\n/**\n* Internal dependencies\n*/\n// import { classNames } from '../functions-helpers.js';\n\n/**\n * WordPress dependencies\n */\nvar RichText = wp.blockEditor.RichText;\nfunction save(_ref) {\n  var attributes = _ref.attributes;\n  var align = attributes.align,\n      content = attributes.content;\n  return /*#__PURE__*/React.createElement(RichText.Content, {\n    tagName: \"p\",\n    value: content\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYmxvY2tzL3BhcmFncmFwaC9zYXZlLmpzP2Q1NTciXSwibmFtZXMiOlsiUmljaFRleHQiLCJ3cCIsImJsb2NrRWRpdG9yIiwic2F2ZSIsImF0dHJpYnV0ZXMiLCJhbGlnbiIsImNvbnRlbnQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTs7OztBQUtDOzs7QUFHRDs7QUFFQTs7O0lBR1FBLFEsR0FBYUMsRUFBRSxDQUFDQyxXLENBQWhCRixRO0FBRU8sU0FBU0csSUFBVCxPQUFnQztBQUFBLE1BQWZDLFVBQWUsUUFBZkEsVUFBZTtBQUFBLE1BQ3RDQyxLQURzQyxHQUNuQkQsVUFEbUIsQ0FDdENDLEtBRHNDO0FBQUEsTUFDL0JDLE9BRCtCLEdBQ25CRixVQURtQixDQUMvQkUsT0FEK0I7QUFHOUMsc0JBQ0Msb0JBQUMsUUFBRCxDQUFVLE9BQVY7QUFDQyxXQUFPLEVBQUMsR0FEVDtBQUVDLFNBQUssRUFBR0E7QUFGVCxJQUREO0FBTUEiLCJmaWxlIjoiLi9yZXNvdXJjZXMvYmxvY2tzL3BhcmFncmFwaC9zYXZlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBFeHRlcm5hbCBkZXBlbmRlbmNpZXNcbiAqL1xuXG5cbiAvKipcbiAqIEludGVybmFsIGRlcGVuZGVuY2llc1xuICovXG4vLyBpbXBvcnQgeyBjbGFzc05hbWVzIH0gZnJvbSAnLi4vZnVuY3Rpb25zLWhlbHBlcnMuanMnO1xuXG4vKipcbiAqIFdvcmRQcmVzcyBkZXBlbmRlbmNpZXNcbiAqL1xuY29uc3QgeyBSaWNoVGV4dCB9ID0gd3AuYmxvY2tFZGl0b3I7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNhdmUoIHsgYXR0cmlidXRlcyB9ICkge1xuXHRjb25zdCB7IGFsaWduLCBjb250ZW50IH0gPSBhdHRyaWJ1dGVzO1xuXG5cdHJldHVybiAoXG5cdFx0PFJpY2hUZXh0LkNvbnRlbnRcblx0XHRcdHRhZ05hbWU9XCJwXCJcblx0XHRcdHZhbHVlPXsgY29udGVudCB9XG5cdFx0Lz5cblx0KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/blocks/paragraph/save.js\n");

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