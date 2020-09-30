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

/***/ "./resources/blocks/posts/block.json":
/*!*******************************************!*\
  !*** ./resources/blocks/posts/block.json ***!
  \*******************************************/
/*! exports provided: name, title, description, category, icon, keywords, textdomain, supports, attributes, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"name\\\":\\\"wbl-blocks/posts\\\",\\\"title\\\":\\\"Berichten\\\",\\\"description\\\":\\\"Displays latest posts\\\",\\\"category\\\":\\\"common\\\",\\\"icon\\\":\\\"excerpt-view\\\",\\\"keywords\\\":[\\\"Berichten\\\",\\\"Posts\\\",\\\"Blog\\\"],\\\"textdomain\\\":\\\"wbl-blocks\\\",\\\"supports\\\":{\\\"multiple\\\":false},\\\"attributes\\\":{\\\"postsToShow\\\":{\\\"type\\\":\\\"number\\\",\\\"default\\\":2}}}\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3Jlc291cmNlcy9ibG9ja3MvcG9zdHMvYmxvY2suanNvbi5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/blocks/posts/block.json\n");

/***/ }),

/***/ "./resources/blocks/posts/edit.js":
/*!****************************************!*\
  !*** ./resources/blocks/posts/edit.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * Internal dependencies\n */\n\n/**\n * WordPress dependencies\n */\nvar InspectorControls = wp.blockEditor.InspectorControls;\nvar _wp$components = wp.components,\n    PanelBody = _wp$components.PanelBody,\n    SelectControl = _wp$components.SelectControl,\n    RangeControl = _wp$components.RangeControl;\nvar __ = wp.i18n.__;\n/**\n * Edit function\n */\n\nfunction edit(_ref) {\n  var attributes = _ref.attributes,\n      setAttributes = _ref.setAttributes;\n  // Setup variables\n  var postsToShow = attributes.postsToShow;\n  var blockClassName = \"wbl-block-posts\";\n  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(InspectorControls, null, /*#__PURE__*/React.createElement(PanelBody, {\n    title: __('Settings', 'wbl-blocks')\n  }, /*#__PURE__*/React.createElement(RangeControl, {\n    label: __('Aantal posts'),\n    value: postsToShow,\n    onChange: function onChange(value) {\n      return setAttributes({\n        postsToShow: value\n      });\n    },\n    min: 1,\n    max: 10,\n    required: true\n  }))), /*#__PURE__*/React.createElement(\"div\", {\n    className: blockClassName\n  }, /*#__PURE__*/React.createElement(\"h2\", {\n    className: \"\".concat(blockClassName, \"__title\")\n  }, __('Berichten', 'wbl-blocks')), /*#__PURE__*/React.createElement(\"p\", {\n    className: \"\".concat(blockClassName, \"__text\")\n  }, __('This block will dynamically generate a number of posts. Check the frontend of your website.', 'wbl-blocks'))));\n}\n\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (edit);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYmxvY2tzL3Bvc3RzL2VkaXQuanM/ZDM3YiJdLCJuYW1lcyI6WyJJbnNwZWN0b3JDb250cm9scyIsIndwIiwiYmxvY2tFZGl0b3IiLCJjb21wb25lbnRzIiwiUGFuZWxCb2R5IiwiU2VsZWN0Q29udHJvbCIsIlJhbmdlQ29udHJvbCIsIl9fIiwiaTE4biIsImVkaXQiLCJhdHRyaWJ1dGVzIiwic2V0QXR0cmlidXRlcyIsInBvc3RzVG9TaG93IiwiYmxvY2tDbGFzc05hbWUiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTs7OztBQUlBOzs7SUFHUUEsaUIsR0FBc0JDLEVBQUUsQ0FBQ0MsVyxDQUF6QkYsaUI7cUJBQzJDQyxFQUFFLENBQUNFLFU7SUFBOUNDLFMsa0JBQUFBLFM7SUFBV0MsYSxrQkFBQUEsYTtJQUFlQyxZLGtCQUFBQSxZO0lBQzFCQyxFLEdBQU9OLEVBQUUsQ0FBQ08sSSxDQUFWRCxFO0FBRVI7Ozs7QUFHQSxTQUFTRSxJQUFULE9BQStDO0FBQUEsTUFBOUJDLFVBQThCLFFBQTlCQSxVQUE4QjtBQUFBLE1BQWxCQyxhQUFrQixRQUFsQkEsYUFBa0I7QUFFOUM7QUFDQSxNQUFNQyxXQUFXLEdBQU1GLFVBQVUsQ0FBQ0UsV0FBbEM7QUFDQSxNQUFNQyxjQUFjLEdBQUcsaUJBQXZCO0FBRUcsc0JBQ0MsdURBQ0Msb0JBQUMsaUJBQUQscUJBQ0Ysb0JBQUMsU0FBRDtBQUFXLFNBQUssRUFBR04sRUFBRSxDQUFFLFVBQUYsRUFBYyxZQUFkO0FBQXJCLGtCQUNJLG9CQUFDLFlBQUQ7QUFDRixTQUFLLEVBQUdBLEVBQUUsQ0FBRSxjQUFGLENBRFI7QUFFRixTQUFLLEVBQUdLLFdBRk47QUFHRixZQUFRLEVBQUcsa0JBQUVFLEtBQUY7QUFBQSxhQUFhSCxhQUFhLENBQUU7QUFBRUMsbUJBQVcsRUFBRUU7QUFBZixPQUFGLENBQTFCO0FBQUEsS0FIVDtBQUlGLE9BQUcsRUFBRyxDQUpKO0FBS0YsT0FBRyxFQUFHLEVBTEo7QUFNRixZQUFRO0FBTk4sSUFESixDQURFLENBREQsZUFhSTtBQUFLLGFBQVMsRUFBR0Q7QUFBakIsa0JBQ0k7QUFBSSxhQUFTLFlBQU1BLGNBQU47QUFBYixLQUErQ04sRUFBRSxDQUFDLFdBQUQsRUFBYyxZQUFkLENBQWpELENBREosZUFFSTtBQUFHLGFBQVMsWUFBTU0sY0FBTjtBQUFaLEtBQTZDTixFQUFFLENBQUMsNkZBQUQsRUFBZ0csWUFBaEcsQ0FBL0MsQ0FGSixDQWJKLENBREQ7QUFvQkg7O0FBQUE7QUFFY0UsbUVBQWYiLCJmaWxlIjoiLi9yZXNvdXJjZXMvYmxvY2tzL3Bvc3RzL2VkaXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEludGVybmFsIGRlcGVuZGVuY2llc1xuICovXG5cbi8qKlxuICogV29yZFByZXNzIGRlcGVuZGVuY2llc1xuICovXG5jb25zdCB7IEluc3BlY3RvckNvbnRyb2xzIH0gPSB3cC5ibG9ja0VkaXRvcjtcbmNvbnN0IHtcdFBhbmVsQm9keSwgU2VsZWN0Q29udHJvbCwgUmFuZ2VDb250cm9sIH0gPSB3cC5jb21wb25lbnRzO1xuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuLyoqXG4gKiBFZGl0IGZ1bmN0aW9uXG4gKi9cbmZ1bmN0aW9uIGVkaXQoIHsgYXR0cmlidXRlcywgc2V0QXR0cmlidXRlcyB9ICkge1xuXG5cdC8vIFNldHVwIHZhcmlhYmxlc1xuXHRjb25zdCBwb3N0c1RvU2hvdyAgICA9IGF0dHJpYnV0ZXMucG9zdHNUb1Nob3c7XG5cdGNvbnN0IGJsb2NrQ2xhc3NOYW1lID0gXCJ3YmwtYmxvY2stcG9zdHNcIjtcblxuICAgIHJldHVybiAoXG4gICAgXHQ8PlxuICAgIFx0XHQ8SW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHRcdDxQYW5lbEJvZHkgdGl0bGU9eyBfXyggJ1NldHRpbmdzJywgJ3dibC1ibG9ja3MnICkgfT5cblx0XHQgICAgXHRcdDxSYW5nZUNvbnRyb2xcblx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdBYW50YWwgcG9zdHMnICkgfVxuXHRcdFx0XHRcdFx0dmFsdWU9eyBwb3N0c1RvU2hvdyB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggdmFsdWUgKSA9Plx0c2V0QXR0cmlidXRlcyggeyBwb3N0c1RvU2hvdzogdmFsdWUgfSApXHR9XG5cdFx0XHRcdFx0XHRtaW49eyAxIH1cblx0XHRcdFx0XHRcdG1heD17IDEwIH1cblx0XHRcdFx0XHRcdHJlcXVpcmVkXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPlxuXHQgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgYmxvY2tDbGFzc05hbWUgfT5cblx0ICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17IGAke2Jsb2NrQ2xhc3NOYW1lfV9fdGl0bGVgIH0+eyBfXygnQmVyaWNodGVuJywgJ3dibC1ibG9ja3MnICkgfTwvaDI+XG5cdCAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17IGAke2Jsb2NrQ2xhc3NOYW1lfV9fdGV4dGAgfT57IF9fKCdUaGlzIGJsb2NrIHdpbGwgZHluYW1pY2FsbHkgZ2VuZXJhdGUgYSBudW1iZXIgb2YgcG9zdHMuIENoZWNrIHRoZSBmcm9udGVuZCBvZiB5b3VyIHdlYnNpdGUuJywgJ3dibC1ibG9ja3MnICkgfTwvcD5cblx0ICAgICAgICA8L2Rpdj5cblx0ICAgIDwvPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBlZGl0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/blocks/posts/edit.js\n");

/***/ }),

/***/ "./resources/blocks/posts/index.js":
/*!*****************************************!*\
  !*** ./resources/blocks/posts/index.js ***!
  \*****************************************/
/*! exports provided: name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"name\", function() { return name; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"settings\", function() { return settings; });\n/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block.json */ \"./resources/blocks/posts/block.json\");\nvar _block_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./block.json */ \"./resources/blocks/posts/block.json\", 1);\n/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ \"./resources/blocks/posts/edit.js\");\n/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ \"./resources/blocks/posts/save.js\");\n/**\n * External dependancies\n */\nvar _lodash = lodash,\n    merge = _lodash.merge; // Imports\n\n\n\n // Get name from metadata\n\nvar name = _block_json__WEBPACK_IMPORTED_MODULE_0__.name; // Merge the metadata with the edit and save functions\n\nvar settings = merge(_block_json__WEBPACK_IMPORTED_MODULE_0__, {\n  edit: _edit__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  save: _save__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n}); // Export\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYmxvY2tzL3Bvc3RzL2luZGV4LmpzPzc5ZGIiXSwibmFtZXMiOlsibG9kYXNoIiwibWVyZ2UiLCJuYW1lIiwibWV0YWRhdGEiLCJzZXR0aW5ncyIsImVkaXQiLCJzYXZlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Y0FHa0JBLE07SUFBVkMsSyxXQUFBQSxLLEVBRVI7O0FBQ0E7QUFDQTtDQUdBOztJQUNRQyxJLEdBQVNDLHdDLENBQVRELEksRUFFUjs7QUFDQSxJQUFNRSxRQUFRLEdBQUdILEtBQUssQ0FBQ0Usd0NBQUQsRUFBVztBQUNoQ0UsTUFBSSxFQUFFQSw2Q0FEMEI7QUFFaENDLE1BQUksRUFBRUEsNkNBQUlBO0FBRnNCLENBQVgsQ0FBdEIsQyxDQUtBIiwiZmlsZSI6Ii4vcmVzb3VyY2VzL2Jsb2Nrcy9wb3N0cy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogRXh0ZXJuYWwgZGVwZW5kYW5jaWVzXG4gKi9cbmNvbnN0IHsgbWVyZ2UgfSA9IGxvZGFzaDtcblxuLy8gSW1wb3J0c1xuaW1wb3J0IG1ldGFkYXRhIGZyb20gJy4vYmxvY2suanNvbic7XG5pbXBvcnQgZWRpdCBmcm9tICcuL2VkaXQnO1xuaW1wb3J0IHNhdmUgZnJvbSAnLi9zYXZlJztcblxuLy8gR2V0IG5hbWUgZnJvbSBtZXRhZGF0YVxuY29uc3QgeyBuYW1lIH0gPSBtZXRhZGF0YTtcblxuLy8gTWVyZ2UgdGhlIG1ldGFkYXRhIHdpdGggdGhlIGVkaXQgYW5kIHNhdmUgZnVuY3Rpb25zXG5jb25zdCBzZXR0aW5ncyA9IG1lcmdlKG1ldGFkYXRhLCB7XG5cdGVkaXQ6IGVkaXQsXG5cdHNhdmU6IHNhdmVcbn0pO1xuXG4vLyBFeHBvcnRcbmV4cG9ydCB7IG5hbWUsIHNldHRpbmdzIH07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/blocks/posts/index.js\n");

/***/ }),

/***/ "./resources/blocks/posts/save.js":
/*!****************************************!*\
  !*** ./resources/blocks/posts/save.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * Internal dependencies\n */\n\n/**\n * WordPress dependencies\n */\n\n/**\n * Dynamic save function\n */\nfunction save() {\n  return null;\n}\n\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (save);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYmxvY2tzL3Bvc3RzL3NhdmUuanM/MzZmZSJdLCJuYW1lcyI6WyJzYXZlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBOzs7O0FBSUE7Ozs7QUFJQTs7O0FBR0EsU0FBU0EsSUFBVCxHQUFnQjtBQUVmLFNBQU8sSUFBUDtBQUNBOztBQUFBO0FBRWNBLG1FQUFmIiwiZmlsZSI6Ii4vcmVzb3VyY2VzL2Jsb2Nrcy9wb3N0cy9zYXZlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBJbnRlcm5hbCBkZXBlbmRlbmNpZXNcbiAqL1xuXG4vKipcbiAqIFdvcmRQcmVzcyBkZXBlbmRlbmNpZXNcbiAqL1xuXG4vKipcbiAqIER5bmFtaWMgc2F2ZSBmdW5jdGlvblxuICovXG5mdW5jdGlvbiBzYXZlKCkge1xuXG5cdHJldHVybiBudWxsO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc2F2ZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/blocks/posts/save.js\n");

/***/ }),

/***/ "./resources/blocks/section/block.json":
/*!*********************************************!*\
  !*** ./resources/blocks/section/block.json ***!
  \*********************************************/
/*! exports provided: name, title, category, icon, description, keywords, textdomain, attributes, supports, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"name\\\":\\\"wbl-blocks/section\\\",\\\"title\\\":\\\"Section\\\",\\\"category\\\":\\\"layout\\\",\\\"icon\\\":\\\"table-row-after\\\",\\\"description\\\":\\\"Section block\\\",\\\"keywords\\\":[\\\"Section\\\",\\\"Sectie\\\",\\\"Semantic\\\",\\\"Group\\\",\\\"Groep\\\"],\\\"textdomain\\\":\\\"wbl-blocks\\\",\\\"attributes\\\":{\\\"tagName\\\":{\\\"type\\\":\\\"string\\\",\\\"default\\\":\\\"div\\\"}},\\\"supports\\\":{\\\"align\\\":false,\\\"alignWide\\\":false,\\\"anchor\\\":true,\\\"customClassName\\\":true,\\\"defaultStylePicker\\\":false,\\\"html\\\":false,\\\"lightBlockWrapper\\\":true}}\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3Jlc291cmNlcy9ibG9ja3Mvc2VjdGlvbi9ibG9jay5qc29uLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/blocks/section/block.json\n");

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

eval("module.exports = JSON.parse(\"{\\\"name\\\":\\\"wbl-blocks/test\\\",\\\"title\\\":\\\"Test\\\",\\\"category\\\":\\\"text\\\",\\\"icon\\\":\\\"star-filled\\\",\\\"description\\\":\\\"Testblok…\\\",\\\"keywords\\\":[\\\"Test\\\"],\\\"textdomain\\\":\\\"wbl-blocks\\\",\\\"attributes\\\":{\\\"content\\\":{\\\"type\\\":\\\"string\\\",\\\"source\\\":\\\"html\\\",\\\"selector\\\":\\\".wbl-block-test__content\\\"}},\\\"supports\\\":{\\\"align\\\":false,\\\"alignWide\\\":false,\\\"defaultStylePicker\\\":false,\\\"customClassName\\\":false,\\\"html\\\":false},\\\"example\\\":{\\\"attributes\\\":{\\\"content\\\":\\\"This is a test!\\\"}}}\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3Jlc291cmNlcy9ibG9ja3MvdGVzdC9ibG9jay5qc29uLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/blocks/test/block.json\n");

/***/ }),

/***/ "./resources/blocks/test/edit.js":
/*!***************************************!*\
  !*** ./resources/blocks/test/edit.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return edit; });\n/**\n * Internal dependencies\n */\n\n/**\n * WordPress dependencies\n */\nvar RichText = wp.blockEditor.RichText;\nvar __ = wp.i18n.__;\n/**\n * Edit function\n */\n\nfunction edit(_ref) {\n  var attributes = _ref.attributes,\n      setAttributes = _ref.setAttributes,\n      className = _ref.className;\n  var content = attributes.content;\n  return /*#__PURE__*/React.createElement(\"div\", {\n    className: className\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"\".concat(className, \"__inner\")\n  }, /*#__PURE__*/React.createElement(RichText, {\n    className: \"\".concat(className, \"__content\"),\n    tagName: \"div\",\n    multiline: \"p\",\n    value: content,\n    onChange: function onChange(content) {\n      setAttributes({\n        content: content\n      });\n    },\n    placeholder: __('Test', 'wbl-blocks'),\n    keepPlaceholderOnFocus: true\n  })));\n}\n;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYmxvY2tzL3Rlc3QvZWRpdC5qcz9jMjkwIl0sIm5hbWVzIjpbIlJpY2hUZXh0Iiwid3AiLCJibG9ja0VkaXRvciIsIl9fIiwiaTE4biIsImVkaXQiLCJhdHRyaWJ1dGVzIiwic2V0QXR0cmlidXRlcyIsImNsYXNzTmFtZSIsImNvbnRlbnQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTs7OztBQUlBOzs7SUFHUUEsUSxHQUFhQyxFQUFFLENBQUNDLFcsQ0FBaEJGLFE7SUFDQUcsRSxHQUFPRixFQUFFLENBQUNHLEksQ0FBVkQsRTtBQUVSOzs7O0FBR2UsU0FBU0UsSUFBVCxPQUEwRDtBQUFBLE1BQXpDQyxVQUF5QyxRQUF6Q0EsVUFBeUM7QUFBQSxNQUE3QkMsYUFBNkIsUUFBN0JBLGFBQTZCO0FBQUEsTUFBZEMsU0FBYyxRQUFkQSxTQUFjO0FBQUEsTUFFaEVDLE9BRmdFLEdBRXBESCxVQUZvRCxDQUVoRUcsT0FGZ0U7QUFJckUsc0JBQ0k7QUFBSyxhQUFTLEVBQUdEO0FBQWpCLGtCQUNDO0FBQUssYUFBUyxZQUFNQSxTQUFOO0FBQWQsa0JBQ0ksb0JBQUMsUUFBRDtBQUNSLGFBQVMsWUFBTUEsU0FBTixjQUREO0FBRVIsV0FBTyxFQUFDLEtBRkE7QUFHSSxhQUFTLEVBQUMsR0FIZDtBQUlSLFNBQUssRUFBR0MsT0FKQTtBQUtSLFlBQVEsRUFBRyxrQkFBRUEsT0FBRixFQUFlO0FBQUVGLG1CQUFhLENBQUU7QUFBRUUsZUFBTyxFQUFQQTtBQUFGLE9BQUYsQ0FBYjtBQUE4QixLQUxsRDtBQU1SLGVBQVcsRUFBR04sRUFBRSxDQUFFLE1BQUYsRUFBVSxZQUFWLENBTlI7QUFPUiwwQkFBc0IsRUFBRTtBQVBoQixJQURKLENBREQsQ0FESjtBQWVIO0FBQUEiLCJmaWxlIjoiLi9yZXNvdXJjZXMvYmxvY2tzL3Rlc3QvZWRpdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogSW50ZXJuYWwgZGVwZW5kZW5jaWVzXG4gKi9cblxuLyoqXG4gKiBXb3JkUHJlc3MgZGVwZW5kZW5jaWVzXG4gKi9cbmNvbnN0IHsgUmljaFRleHQgfSA9IHdwLmJsb2NrRWRpdG9yO1xuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuLyoqXG4gKiBFZGl0IGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVkaXQoIHsgYXR0cmlidXRlcywgc2V0QXR0cmlidXRlcywgY2xhc3NOYW1lIH0gKSB7XG5cblx0Y29uc3QgeyBjb250ZW50IH0gPSBhdHRyaWJ1dGVzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBjbGFzc05hbWUgfT5cbiAgICAgICAgXHQ8ZGl2IGNsYXNzTmFtZT17IGAke2NsYXNzTmFtZX1fX2lubmVyYCB9PlxuICAgICAgICAgICAgXHQ8UmljaFRleHRcblx0XHRcdFx0XHRjbGFzc05hbWU9eyBgJHtjbGFzc05hbWV9X19jb250ZW50YCB9XG5cdFx0XHRcdFx0dGFnTmFtZT1cImRpdlwiXG4gICAgICAgICAgICAgICAgXHRtdWx0aWxpbmU9XCJwXCJcblx0XHRcdFx0XHR2YWx1ZT17IGNvbnRlbnQgfVxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4geyBzZXRBdHRyaWJ1dGVzKCB7IGNvbnRlbnQgfSApIH0gfVxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyPXsgX18oICdUZXN0JywgJ3dibC1ibG9ja3MnICkgfVxuXHRcdFx0XHRcdGtlZXBQbGFjZWhvbGRlck9uRm9jdXM9e3RydWV9XG5cdFx0XHRcdC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/blocks/test/edit.js\n");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return save; });\n/**\n * Internal dependencies\n */\n\n/**\n * WordPress dependencies\n */\nvar RichText = wp.blockEditor.RichText;\nvar getBlockDefaultClassName = wp.blocks.getBlockDefaultClassName;\n/**\n * Save function\n */\n\nfunction save(_ref) {\n  var attributes = _ref.attributes;\n  // Extract variables\n  var content = attributes.content; // Get className (https://github.com/WordPress/gutenberg/issues/7308#issuecomment-439946166)\n\n  var className = getBlockDefaultClassName('wbl-blocks/test');\n  return /*#__PURE__*/React.createElement(\"div\", {\n    className: className\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"\".concat(className, \"__inner\")\n  }, /*#__PURE__*/React.createElement(RichText.Content, {\n    className: \"\".concat(className, \"__content\"),\n    tagName: \"div\",\n    value: content\n  })));\n}\n;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYmxvY2tzL3Rlc3Qvc2F2ZS5qcz84N2E0Il0sIm5hbWVzIjpbIlJpY2hUZXh0Iiwid3AiLCJibG9ja0VkaXRvciIsImdldEJsb2NrRGVmYXVsdENsYXNzTmFtZSIsImJsb2NrcyIsInNhdmUiLCJhdHRyaWJ1dGVzIiwiY29udGVudCIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBOzs7O0FBSUE7OztJQUdRQSxRLEdBQWFDLEVBQUUsQ0FBQ0MsVyxDQUFoQkYsUTtJQUNBRyx3QixHQUE2QkYsRUFBRSxDQUFDRyxNLENBQWhDRCx3QjtBQUVSOzs7O0FBR2UsU0FBU0UsSUFBVCxPQUFnQztBQUFBLE1BQWZDLFVBQWUsUUFBZkEsVUFBZTtBQUU5QztBQUY4QyxNQUd0Q0MsT0FIc0MsR0FHMUJELFVBSDBCLENBR3RDQyxPQUhzQyxFQUs5Qzs7QUFDQSxNQUFNQyxTQUFTLEdBQUdMLHdCQUF3QixDQUFFLGlCQUFGLENBQTFDO0FBRUEsc0JBQ0M7QUFBSyxhQUFTLEVBQUdLO0FBQWpCLGtCQUNDO0FBQUssYUFBUyxZQUFNQSxTQUFOO0FBQWQsa0JBQ0Msb0JBQUMsUUFBRCxDQUFVLE9BQVY7QUFBa0IsYUFBUyxZQUFNQSxTQUFOLGNBQTNCO0FBQXdELFdBQU8sRUFBQyxLQUFoRTtBQUFzRSxTQUFLLEVBQUdEO0FBQTlFLElBREQsQ0FERCxDQUREO0FBT0E7QUFBQSIsImZpbGUiOiIuL3Jlc291cmNlcy9ibG9ja3MvdGVzdC9zYXZlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBJbnRlcm5hbCBkZXBlbmRlbmNpZXNcbiAqL1xuXG4vKipcbiAqIFdvcmRQcmVzcyBkZXBlbmRlbmNpZXNcbiAqL1xuY29uc3QgeyBSaWNoVGV4dCB9ID0gd3AuYmxvY2tFZGl0b3I7XG5jb25zdCB7IGdldEJsb2NrRGVmYXVsdENsYXNzTmFtZSB9ID0gd3AuYmxvY2tzO1xuXG4vKipcbiAqIFNhdmUgZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2F2ZSggeyBhdHRyaWJ1dGVzIH0gKSB7XG5cblx0Ly8gRXh0cmFjdCB2YXJpYWJsZXNcblx0Y29uc3QgeyBjb250ZW50IH0gPSBhdHRyaWJ1dGVzO1xuXG5cdC8vIEdldCBjbGFzc05hbWUgKGh0dHBzOi8vZ2l0aHViLmNvbS9Xb3JkUHJlc3MvZ3V0ZW5iZXJnL2lzc3Vlcy83MzA4I2lzc3VlY29tbWVudC00Mzk5NDYxNjYpXG5cdGNvbnN0IGNsYXNzTmFtZSA9IGdldEJsb2NrRGVmYXVsdENsYXNzTmFtZSggJ3dibC1ibG9ja3MvdGVzdCcgKTtcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPXsgY2xhc3NOYW1lIH0+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17IGAke2NsYXNzTmFtZX1fX2lubmVyYCB9PlxuXHRcdFx0XHQ8UmljaFRleHQuQ29udGVudCBjbGFzc05hbWU9eyBgJHtjbGFzc05hbWV9X19jb250ZW50YCB9IHRhZ05hbWU9XCJkaXZcIiB2YWx1ZT17IGNvbnRlbnQgfSAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/blocks/test/save.js\n");

/***/ }),

/***/ 0:
/*!*************************************************************************************************************!*\
  !*** multi ./resources/blocks/blocks.js ./resources/blocks/blocks.editor.css ./resources/blocks/blocks.css ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/erik/Webdev/www/wbl/public_html/wp-content/plugins/wbl-blocks/resources/blocks/blocks.js */"./resources/blocks/blocks.js");
__webpack_require__(/*! /home/erik/Webdev/www/wbl/public_html/wp-content/plugins/wbl-blocks/resources/blocks/blocks.editor.css */"./resources/blocks/blocks.editor.css");
module.exports = __webpack_require__(/*! /home/erik/Webdev/www/wbl/public_html/wp-content/plugins/wbl-blocks/resources/blocks/blocks.css */"./resources/blocks/blocks.css");


/***/ })

/******/ });