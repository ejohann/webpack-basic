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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/add-image.js":
/*!**************************!*\
  !*** ./src/add-image.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _hd_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hd_logo.png */ \"./src/hd_logo.png\");\n/* harmony import */ var _hd_logo_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_hd_logo_png__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction addImage() {\n  var img = document.createElement('img');\n  img.alt = 'Hanne Digital Logo';\n  img.width = 300;\n  img.src = _hd_logo_png__WEBPACK_IMPORTED_MODULE_0___default.a;\n  var body = document.querySelector('body');\n  body.appendChild(img);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (addImage);\n\n//# sourceURL=webpack:///./src/add-image.js?");

/***/ }),

/***/ "./src/components/heading/heading.js":
/*!*******************************************!*\
  !*** ./src/components/heading/heading.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _heading_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./heading.scss */ \"./src/components/heading/heading.scss\");\n/* harmony import */ var _heading_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_heading_scss__WEBPACK_IMPORTED_MODULE_0__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Heading =\n/*#__PURE__*/\nfunction () {\n  function Heading() {\n    _classCallCheck(this, Heading);\n  }\n\n  _createClass(Heading, [{\n    key: \"render\",\n    value: function render() {\n      var h1 = document.createElement('h1');\n      var body = document.querySelector('body');\n      h1.innerHTML = 'Webpack is awesome';\n      body.appendChild(h1);\n    }\n  }]);\n\n  return Heading;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Heading);\n\n//# sourceURL=webpack:///./src/components/heading/heading.js?");

/***/ }),

/***/ "./src/components/heading/heading.scss":
/*!*********************************************!*\
  !*** ./src/components/heading/heading.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/components/heading/heading.scss?");

/***/ }),

/***/ "./src/components/hello-world-button/hello-world-button.js":
/*!*****************************************************************!*\
  !*** ./src/components/hello-world-button/hello-world-button.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _hello_world_button_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hello-world-button.scss */ \"./src/components/hello-world-button/hello-world-button.scss\");\n/* harmony import */ var _hello_world_button_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_hello_world_button_scss__WEBPACK_IMPORTED_MODULE_0__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar HelloWorldButton =\n/*#__PURE__*/\nfunction () {\n  function HelloWorldButton() {\n    _classCallCheck(this, HelloWorldButton);\n\n    this.buttonCssClass = 'hello-world-button';\n  }\n\n  _createClass(HelloWorldButton, [{\n    key: \"render\",\n    value: function render() {\n      var button = document.createElement('button');\n      button.innerHTML = 'Hello World';\n      button.classList.add(this.buttonCssClass);\n      var body = document.querySelector('body');\n\n      button.onclick = function () {\n        var p = document.createElement('p');\n        p.innerHTML = 'Hello World';\n        p.classList.add('hello-world-text');\n        body.appendChild(p);\n      };\n\n      body.appendChild(button);\n    }\n  }]);\n\n  return HelloWorldButton;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HelloWorldButton);\n\n//# sourceURL=webpack:///./src/components/hello-world-button/hello-world-button.js?");

/***/ }),

/***/ "./src/components/hello-world-button/hello-world-button.scss":
/*!*******************************************************************!*\
  !*** ./src/components/hello-world-button/hello-world-button.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/components/hello-world-button/hello-world-button.scss?");

/***/ }),

/***/ "./src/hd_logo.png":
/*!*************************!*\
  !*** ./src/hd_logo.png ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"5f8c50c6b7d8ea22e9f110b707329cc3.png\";\n\n//# sourceURL=webpack:///./src/hd_logo.png?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_hello_world_button_hello_world_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/hello-world-button/hello-world-button */ \"./src/components/hello-world-button/hello-world-button.js\");\n/* harmony import */ var _components_heading_heading_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/heading/heading.js */ \"./src/components/heading/heading.js\");\n/* harmony import */ var _add_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-image */ \"./src/add-image.js\");\n\n\n\nvar heading = new _components_heading_heading_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\nvar helloWorldButton = new _components_hello_world_button_hello_world_button__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nheading.render();\nhelloWorldButton.render();\nObject(_add_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\nif (false) {} else if (true) {\n  console.log('development mode');\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });