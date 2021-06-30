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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/blocks/posts/block.json":
/*!*************************************!*\
  !*** ./app/blocks/posts/block.json ***!
  \*************************************/
/*! exports provided: apiVersion, name, title, category, icon, description, keywords, textdomain, attributes, supports, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"apiVersion\\\":2,\\\"name\\\":\\\"wbl-blocks/posts\\\",\\\"title\\\":\\\"Posts\\\",\\\"category\\\":\\\"layout\\\",\\\"icon\\\":\\\"admin-post\\\",\\\"description\\\":\\\"Shows latest posts\\\",\\\"keywords\\\":[\\\"blog\\\",\\\"posts\\\",\\\"berichten\\\"],\\\"textdomain\\\":\\\"wbl-blocks\\\",\\\"attributes\\\":{\\\"postsToShow\\\":{\\\"type\\\":\\\"number\\\",\\\"default\\\":3}},\\\"supports\\\":{\\\"align\\\":[],\\\"anchor\\\":true,\\\"className\\\":false,\\\"customClassName\\\":true,\\\"defaultStylePicker\\\":false,\\\"html\\\":false}}\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL2FwcC9ibG9ja3MvcG9zdHMvYmxvY2suanNvbi5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app/blocks/posts/block.json\n");

/***/ }),

/***/ "./app/blocks/posts/edit-settings.js":
/*!*******************************************!*\
  !*** ./app/blocks/posts/edit-settings.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * WordPress dependencies\n */\nvar InspectorControls = wp.blockEditor.InspectorControls;\nvar _wp$components = wp.components,\n    PanelBody = _wp$components.PanelBody,\n    RangeControl = _wp$components.RangeControl;\nvar __ = wp.i18n.__;\n/**\n * Internal dependencies\n */\n\n/**\n * Edit Settings function\n */\n\nvar EditSettings = function EditSettings(_ref) {\n  var setAttributes = _ref.setAttributes,\n      postsToShow = _ref.postsToShow;\n  return /*#__PURE__*/React.createElement(InspectorControls, null, /*#__PURE__*/React.createElement(PanelBody, null, /*#__PURE__*/React.createElement(RangeControl, {\n    label: __('Number of projects', 'wbl-projects'),\n    value: postsToShow,\n    onChange: function onChange(newValue) {\n      return setAttributes({\n        postsToShow: newValue\n      });\n    },\n    min: 1,\n    max: 12,\n    required: true\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (EditSettings);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvYmxvY2tzL3Bvc3RzL2VkaXQtc2V0dGluZ3MuanM/YjJiOSJdLCJuYW1lcyI6WyJJbnNwZWN0b3JDb250cm9scyIsIndwIiwiYmxvY2tFZGl0b3IiLCJjb21wb25lbnRzIiwiUGFuZWxCb2R5IiwiUmFuZ2VDb250cm9sIiwiX18iLCJpMThuIiwiRWRpdFNldHRpbmdzIiwic2V0QXR0cmlidXRlcyIsInBvc3RzVG9TaG93IiwibmV3VmFsdWUiXSwibWFwcGluZ3MiOiJBQUNBO0FBQUE7OztJQUdRQSxpQixHQUFzQkMsRUFBRSxDQUFDQyxXLENBQXpCRixpQjtxQkFDNEJDLEVBQUUsQ0FBQ0UsVTtJQUEvQkMsUyxrQkFBQUEsUztJQUFXQyxZLGtCQUFBQSxZO0lBQ1hDLEUsR0FBT0wsRUFBRSxDQUFDTSxJLENBQVZELEU7QUFFUjs7OztBQUlBOzs7O0FBR0EsSUFBTUUsWUFBWSxHQUFHLFNBQWZBLFlBQWU7QUFBQSxNQUFJQyxhQUFKLFFBQUlBLGFBQUo7QUFBQSxNQUFtQkMsV0FBbkIsUUFBbUJBLFdBQW5CO0FBQUEsc0JBQ3BCLG9CQUFDLGlCQUFELHFCQUNDLG9CQUFDLFNBQUQscUJBQ0ksb0JBQUMsWUFBRDtBQUNGLFNBQUssRUFBR0osRUFBRSxDQUFFLG9CQUFGLEVBQXdCLGNBQXhCLENBRFI7QUFFRixTQUFLLEVBQUdJLFdBRk47QUFHRixZQUFRLEVBQUcsa0JBQUVDLFFBQUY7QUFBQSxhQUFnQkYsYUFBYSxDQUFFO0FBQUVDLG1CQUFXLEVBQUVDO0FBQWYsT0FBRixDQUE3QjtBQUFBLEtBSFQ7QUFJRixPQUFHLEVBQUcsQ0FKSjtBQUtGLE9BQUcsRUFBRyxFQUxKO0FBTUYsWUFBUTtBQU5OLElBREosQ0FERCxDQURvQjtBQUFBLENBQXJCOztBQWVlSCwyRUFBZiIsImZpbGUiOiIuL2FwcC9ibG9ja3MvcG9zdHMvZWRpdC1zZXR0aW5ncy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyoqXG4gKiBXb3JkUHJlc3MgZGVwZW5kZW5jaWVzXG4gKi9cbmNvbnN0IHtcdEluc3BlY3RvckNvbnRyb2xzIH0gPSB3cC5ibG9ja0VkaXRvcjtcbmNvbnN0IHtcdFBhbmVsQm9keSwgUmFuZ2VDb250cm9sIH0gPSB3cC5jb21wb25lbnRzO1xuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuLyoqXG4gKiBJbnRlcm5hbCBkZXBlbmRlbmNpZXNcbiAqL1xuXG4vKipcbiAqIEVkaXQgU2V0dGluZ3MgZnVuY3Rpb25cbiAqL1xuY29uc3QgRWRpdFNldHRpbmdzID0gKCB7IHNldEF0dHJpYnV0ZXMsIHBvc3RzVG9TaG93IH0gKSA9PiAoXG5cdDxJbnNwZWN0b3JDb250cm9scz5cblx0XHQ8UGFuZWxCb2R5PlxuICAgIFx0XHQ8UmFuZ2VDb250cm9sXG5cdFx0XHRcdGxhYmVsPXsgX18oICdOdW1iZXIgb2YgcHJvamVjdHMnLCAnd2JsLXByb2plY3RzJyApIH1cblx0XHRcdFx0dmFsdWU9eyBwb3N0c1RvU2hvdyB9XG5cdFx0XHRcdG9uQ2hhbmdlPXsgKCBuZXdWYWx1ZSApID0+XHRzZXRBdHRyaWJ1dGVzKCB7IHBvc3RzVG9TaG93OiBuZXdWYWx1ZSB9IClcdH1cblx0XHRcdFx0bWluPXsgMSB9XG5cdFx0XHRcdG1heD17IDEyIH1cblx0XHRcdFx0cmVxdWlyZWRcblx0XHRcdC8+XG5cdFx0PC9QYW5lbEJvZHk+XG5cdDwvSW5zcGVjdG9yQ29udHJvbHM+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBFZGl0U2V0dGluZ3M7XG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app/blocks/posts/edit-settings.js\n");

/***/ }),

/***/ "./app/blocks/posts/edit.js":
/*!**********************************!*\
  !*** ./app/blocks/posts/edit.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _edit_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-settings */ \"./app/blocks/posts/edit-settings.js\");\n/**\n * WordPress dependencies\n */\nvar useBlockProps = wp.blockEditor.useBlockProps;\nvar __ = wp.i18n.__;\n/**\n * Internal dependencies\n */\n\n\n/**\n * Edit function\n */\n\nfunction edit(_ref) {\n  var attributes = _ref.attributes,\n      setAttributes = _ref.setAttributes,\n      isSelected = _ref.isSelected;\n  // Get and setup attributes\n  var postsToShow = attributes.postsToShow; // Setup new variables\n\n  var blockClassName = 'wbl-block-posts'; // Setup blockProps\n\n  var blockProps = useBlockProps({\n    className: blockClassName\n  });\n  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(\"div\", blockProps, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"\".concat(blockClassName, \"__inner\")\n  }, /*#__PURE__*/React.createElement(\"h2\", {\n    className: \"\".concat(blockClassName, \"__title\")\n  }, __('Posts', 'wbl-blocks')), /*#__PURE__*/React.createElement(\"p\", {\n    className: \"\".concat(blockClassName, \"__text\")\n  }, __('This block will dynamically generate a number of posts. Check the frontend of your website.', 'wbl-blocks')))), /*#__PURE__*/React.createElement(_edit_settings__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n    setAttributes: setAttributes,\n    postsToShow: postsToShow\n  }));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (edit);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvYmxvY2tzL3Bvc3RzL2VkaXQuanM/YWI5OCJdLCJuYW1lcyI6WyJ1c2VCbG9ja1Byb3BzIiwid3AiLCJibG9ja0VkaXRvciIsIl9fIiwiaTE4biIsImVkaXQiLCJhdHRyaWJ1dGVzIiwic2V0QXR0cmlidXRlcyIsImlzU2VsZWN0ZWQiLCJwb3N0c1RvU2hvdyIsImJsb2NrQ2xhc3NOYW1lIiwiYmxvY2tQcm9wcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBOzs7SUFHUUEsYSxHQUFrQkMsRUFBRSxDQUFDQyxXLENBQXJCRixhO0lBQ0FHLEUsR0FBT0YsRUFBRSxDQUFDRyxJLENBQVZELEU7QUFFUjs7OztBQUdBO0FBR0E7Ozs7QUFHQSxTQUFTRSxJQUFULE9BQTJEO0FBQUEsTUFBMUNDLFVBQTBDLFFBQTFDQSxVQUEwQztBQUFBLE1BQTlCQyxhQUE4QixRQUE5QkEsYUFBOEI7QUFBQSxNQUFmQyxVQUFlLFFBQWZBLFVBQWU7QUFFMUQ7QUFDQSxNQUFNQyxXQUFXLEdBQU1ILFVBQVUsQ0FBQ0csV0FBbEMsQ0FIMEQsQ0FLMUQ7O0FBQ0EsTUFBTUMsY0FBYyxHQUFJLGlCQUF4QixDQU4wRCxDQVExRDs7QUFDQSxNQUFNQyxVQUFVLEdBQUdYLGFBQWEsQ0FBRTtBQUNqQ1ksYUFBUyxFQUFFRjtBQURzQixHQUFGLENBQWhDO0FBSUEsc0JBQ0MsdURBQ0MsMkJBQVNDLFVBQVQsZUFDTztBQUFLLGFBQVMsWUFBTUQsY0FBTjtBQUFkLGtCQUNJO0FBQUksYUFBUyxZQUFNQSxjQUFOO0FBQWIsS0FBK0NQLEVBQUUsQ0FBQyxPQUFELEVBQVUsWUFBVixDQUFqRCxDQURKLGVBRUk7QUFBRyxhQUFTLFlBQU1PLGNBQU47QUFBWixLQUE2Q1AsRUFBRSxDQUFDLDZGQUFELEVBQWdHLFlBQWhHLENBQS9DLENBRkosQ0FEUCxDQURELGVBT0Msb0JBQUMsc0RBQUQ7QUFDQyxpQkFBYSxFQUFHSSxhQURqQjtBQUVDLGVBQVcsRUFBR0U7QUFGZixJQVBELENBREQ7QUFjQTs7QUFFY0osbUVBQWYiLCJmaWxlIjoiLi9hcHAvYmxvY2tzL3Bvc3RzL2VkaXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFdvcmRQcmVzcyBkZXBlbmRlbmNpZXNcbiAqL1xuY29uc3Qge1x0dXNlQmxvY2tQcm9wcyB9ID0gd3AuYmxvY2tFZGl0b3I7XG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG4vKipcbiAqIEludGVybmFsIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQgRWRpdFNldHRpbmdzIGZyb20gJy4vZWRpdC1zZXR0aW5ncyc7XG5cblxuLyoqXG4gKiBFZGl0IGZ1bmN0aW9uXG4gKi9cbmZ1bmN0aW9uIGVkaXQoIHsgYXR0cmlidXRlcywgc2V0QXR0cmlidXRlcywgaXNTZWxlY3RlZCB9ICkge1xuXG5cdC8vIEdldCBhbmQgc2V0dXAgYXR0cmlidXRlc1xuXHRjb25zdCBwb3N0c1RvU2hvdyAgICA9IGF0dHJpYnV0ZXMucG9zdHNUb1Nob3c7XG5cblx0Ly8gU2V0dXAgbmV3IHZhcmlhYmxlc1xuXHRjb25zdCBibG9ja0NsYXNzTmFtZSAgPSAnd2JsLWJsb2NrLXBvc3RzJztcblxuXHQvLyBTZXR1cCBibG9ja1Byb3BzXG5cdGNvbnN0IGJsb2NrUHJvcHMgPSB1c2VCbG9ja1Byb3BzKCB7XG5cdFx0Y2xhc3NOYW1lOiBibG9ja0NsYXNzTmFtZVxuXHR9ICk7XG5cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PGRpdiB7Li4uYmxvY2tQcm9wcyB9PlxuXHQgICAgICAgIFx0PGRpdiBjbGFzc05hbWU9eyBgJHtibG9ja0NsYXNzTmFtZX1fX2lubmVyYCB9PlxuXHRcdCAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9eyBgJHtibG9ja0NsYXNzTmFtZX1fX3RpdGxlYCB9PnsgX18oJ1Bvc3RzJywgJ3dibC1ibG9ja3MnICkgfTwvaDI+XG5cdFx0ICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXsgYCR7YmxvY2tDbGFzc05hbWV9X190ZXh0YCB9PnsgX18oJ1RoaXMgYmxvY2sgd2lsbCBkeW5hbWljYWxseSBnZW5lcmF0ZSBhIG51bWJlciBvZiBwb3N0cy4gQ2hlY2sgdGhlIGZyb250ZW5kIG9mIHlvdXIgd2Vic2l0ZS4nLCAnd2JsLWJsb2NrcycgKSB9PC9wPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PEVkaXRTZXR0aW5nc1xuXHRcdFx0XHRzZXRBdHRyaWJ1dGVzPXsgc2V0QXR0cmlidXRlcyB9XG5cdFx0XHRcdHBvc3RzVG9TaG93PXsgcG9zdHNUb1Nob3cgfVxuXHRcdFx0Lz5cblx0XHQ8Lz5cblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZWRpdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app/blocks/posts/edit.js\n");

/***/ }),

/***/ "./app/blocks/posts/index.js":
/*!***********************************!*\
  !*** ./app/blocks/posts/index.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block.json */ \"./app/blocks/posts/block.json\");\nvar _block_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./block.json */ \"./app/blocks/posts/block.json\", 1);\n/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ \"./app/blocks/posts/edit.js\");\n/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ \"./app/blocks/posts/save.js\");\n/**\n * External dependancies\n */\nvar _lodash = lodash,\n    merge = _lodash.merge; // Imports\n\n\n\n // Get name from metadata\n\nvar name = _block_json__WEBPACK_IMPORTED_MODULE_0__.name; // Merge the metadata with the edit and save functions\n\nvar settings = merge(_block_json__WEBPACK_IMPORTED_MODULE_0__, {\n  edit: _edit__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  save: _save__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n}); // Register the block\n\nwp.blocks.registerBlockType(name, settings);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvYmxvY2tzL3Bvc3RzL2luZGV4LmpzPzlkMzIiXSwibmFtZXMiOlsibG9kYXNoIiwibWVyZ2UiLCJuYW1lIiwibWV0YWRhdGEiLCJzZXR0aW5ncyIsImVkaXQiLCJzYXZlIiwid3AiLCJibG9ja3MiLCJyZWdpc3RlckJsb2NrVHlwZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Y0FHa0JBLE07SUFBVkMsSyxXQUFBQSxLLEVBRVI7O0FBQ0E7QUFDQTtDQUdBOztJQUNRQyxJLEdBQVNDLHdDLENBQVRELEksRUFFUjs7QUFDQSxJQUFNRSxRQUFRLEdBQUdILEtBQUssQ0FBQ0Usd0NBQUQsRUFBVztBQUNoQ0UsTUFBSSxFQUFFQSw2Q0FEMEI7QUFFaENDLE1BQUksRUFBRUEsNkNBQUlBO0FBRnNCLENBQVgsQ0FBdEIsQyxDQUtBOztBQUNBQyxFQUFFLENBQUNDLE1BQUgsQ0FBVUMsaUJBQVYsQ0FBNkJQLElBQTdCLEVBQW1DRSxRQUFuQyIsImZpbGUiOiIuL2FwcC9ibG9ja3MvcG9zdHMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEV4dGVybmFsIGRlcGVuZGFuY2llc1xuICovXG5jb25zdCB7IG1lcmdlIH0gPSBsb2Rhc2g7XG5cbi8vIEltcG9ydHNcbmltcG9ydCBtZXRhZGF0YSBmcm9tICcuL2Jsb2NrLmpzb24nO1xuaW1wb3J0IGVkaXQgZnJvbSAnLi9lZGl0JztcbmltcG9ydCBzYXZlIGZyb20gJy4vc2F2ZSc7XG5cbi8vIEdldCBuYW1lIGZyb20gbWV0YWRhdGFcbmNvbnN0IHsgbmFtZSB9ID0gbWV0YWRhdGE7XG5cbi8vIE1lcmdlIHRoZSBtZXRhZGF0YSB3aXRoIHRoZSBlZGl0IGFuZCBzYXZlIGZ1bmN0aW9uc1xuY29uc3Qgc2V0dGluZ3MgPSBtZXJnZShtZXRhZGF0YSwge1xuXHRlZGl0OiBlZGl0LFxuXHRzYXZlOiBzYXZlXG59KTtcblxuLy8gUmVnaXN0ZXIgdGhlIGJsb2NrXG53cC5ibG9ja3MucmVnaXN0ZXJCbG9ja1R5cGUoIG5hbWUsIHNldHRpbmdzICk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./app/blocks/posts/index.js\n");

/***/ }),

/***/ "./app/blocks/posts/save.js":
/*!**********************************!*\
  !*** ./app/blocks/posts/save.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * Internal dependencies\n */\n\n/**\n * WordPress dependencies\n */\n\n/**\n * Dynamic save function\n */\nfunction save() {\n  return null;\n}\n\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (save);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvYmxvY2tzL3Bvc3RzL3NhdmUuanM/YTQ1ZiJdLCJuYW1lcyI6WyJzYXZlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBOzs7O0FBSUE7Ozs7QUFJQTs7O0FBR0EsU0FBU0EsSUFBVCxHQUFnQjtBQUVmLFNBQU8sSUFBUDtBQUNBOztBQUFBO0FBRWNBLG1FQUFmIiwiZmlsZSI6Ii4vYXBwL2Jsb2Nrcy9wb3N0cy9zYXZlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBJbnRlcm5hbCBkZXBlbmRlbmNpZXNcbiAqL1xuXG4vKipcbiAqIFdvcmRQcmVzcyBkZXBlbmRlbmNpZXNcbiAqL1xuXG4vKipcbiAqIER5bmFtaWMgc2F2ZSBmdW5jdGlvblxuICovXG5mdW5jdGlvbiBzYXZlKCkge1xuXG5cdHJldHVybiBudWxsO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc2F2ZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app/blocks/posts/save.js\n");

/***/ }),

/***/ 1:
/*!*****************************************!*\
  !*** multi ./app/blocks/posts/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/erik/Webdev/www/hetweblokaal/public_html/wp-content/plugins/wbl-blocks/app/blocks/posts/index.js */"./app/blocks/posts/index.js");


/***/ })

/******/ });