/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   App: () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_CoinPriceCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/CoinPriceCard */ \"./src/components/CoinPriceCard.tsx\");\n\n\n\nvar App = function App() {\n  var data = {\n    coinName: \"Bitcoin\",\n    coinSymbol: \"BTC\",\n    price: 59384.52,\n    tvl: 584729103,\n    priceDelta24h: 2.5,\n    volume24h: 28947362891\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_CoinPriceCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], { data: data });\n};\n\n\n\n//# sourceURL=webpack://@paciolan/remote-component-starter/./src/App.tsx?");

/***/ }),

/***/ "./src/components/CoinPriceCard.tsx":
/*!******************************************!*\
  !*** ./src/components/CoinPriceCard.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar CoinPriceCard = function CoinPriceCard(_ref) {var data = _ref.data;\n  var coinName = data.coinName,coinSymbol = data.coinSymbol,price = data.price,tvl = data.tvl,priceDelta24h = data.priceDelta24h,volume24h = data.volume24h;\n\n  var cardStyle = {\n    backgroundColor: \"#1E1E1E\",\n    color: \"white\",\n    borderRadius: \"8px\",\n    padding: \"24px\",\n    boxShadow: \"0 4px 6px rgba(0, 0, 0, 0.1)\",\n    width: \"300px\"\n  };\n\n  var headerStyle = {\n    display: \"flex\",\n    justifyContent: \"space-between\",\n    alignItems: \"center\",\n    marginBottom: \"16px\"\n  };\n\n  var coinInfoStyle = {\n    display: \"flex\",\n    alignItems: \"center\"\n  };\n\n  var iconStyle = {\n    color: \"#FFD700\",\n    marginRight: \"8px\"\n  };\n\n  var coinNameStyle = {\n    fontSize: \"20px\",\n    fontWeight: \"bold\",\n    fontFamily: \"Roboto, sans-serif\"\n  };\n\n  var symbolStyle = {\n    fontSize: \"14px\",\n    fontWeight: \"500\",\n    fontFamily: \"Roboto, sans-serif\",\n    color: \"#A0A0A0\"\n  };\n\n  var priceStyle = {\n    fontSize: \"24px\",\n    fontWeight: \"bold\",\n    fontFamily: \"Roboto, sans-serif\",\n    marginBottom: \"4px\"\n  };\n\n  var deltaStyle = {\n    fontSize: \"14px\",\n    color: priceDelta24h >= 0 ? \"#4CAF50\" : \"#F44336\"\n  };\n\n  var gridStyle = {\n    display: \"grid\",\n    gridTemplateColumns: \"1fr 1fr\",\n    gap: \"16px\",\n    marginTop: \"16px\"\n  };\n\n  var labelStyle = {\n    fontSize: \"14px\",\n    color: \"#A0A0A0\",\n    fontFamily: \"Roboto, sans-serif\"\n  };\n\n  var valueStyle = {\n    fontWeight: \"500\",\n    fontFamily: \"Roboto, sans-serif\"\n  };\n\n  return /*#__PURE__*/(\n    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", { style: cardStyle }, /*#__PURE__*/\n    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", { style: headerStyle }, /*#__PURE__*/\n    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", { style: coinInfoStyle }, /*#__PURE__*/\n    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"svg\", {\n      xmlns: \"http://www.w3.org/2000/svg\",\n      width: \"1.5em\",\n      height: \"1.5em\",\n      viewBox: \"0 0 24 24\",\n      style: iconStyle }, /*#__PURE__*/\n\n    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", {\n      fill: \"currentColor\",\n      fillRule: \"evenodd\",\n      d: \"M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m10-6a1 1 0 1 0-2 0v1H8a1 1 0 0 0 0 2h1v6H8a1 1 0 1 0 0 2h1v1a1 1 0 1 0 2 0v-1h1v1a1 1 0 1 0 2 0v-1c.493 0 1.211-.14 1.834-.588C16.51 15.925 17 15.126 17 14c0-.851-.281-1.516-.71-2c.429-.484.71-1.149.71-2c0-1.126-.491-1.926-1.166-2.412A3.23 3.23 0 0 0 14 7V6a1 1 0 1 0-2 0v1h-1zm0 5V9h3c.173 0 .456.06.666.212c.159.114.334.314.334.788s-.175.674-.334.789A1.25 1.25 0 0 1 14 11zm0 2h3c.173 0 .456.06.666.211c.159.115.334.315.334.789s-.175.674-.334.789A1.25 1.25 0 0 1 14 15h-3z\",\n      clipRule: \"evenodd\" }\n    )\n    ), /*#__PURE__*/\n    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", { style: coinNameStyle }, coinName)\n    ), /*#__PURE__*/\n    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", { style: symbolStyle }, coinSymbol)\n    ), /*#__PURE__*/\n    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/\n    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", { style: priceStyle }, \"$\", price.toLocaleString()), /*#__PURE__*/\n    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", { style: deltaStyle },\n    priceDelta24h >= 0 ? /*#__PURE__*/\n    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"svg\", {\n      xmlns: \"http://www.w3.org/2000/svg\",\n      width: \"1em\",\n      height: \"1em\",\n      viewBox: \"0 0 24 24\" }, /*#__PURE__*/\n\n    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", {\n      fill: \"currentColor\",\n      d: \"M11.293 7.293a1 1 0 0 1 1.32-.083l.094.083l6 6l.083.094l.054.077l.054.096l.017.036l.027.067l.032.108l.01.053l.01.06l.004.057L19 14l-.002.059l-.005.058l-.009.06l-.01.052l-.032.108l-.027.067l-.07.132l-.065.09l-.073.081l-.094.083l-.077.054l-.096.054l-.036.017l-.067.027l-.108.032l-.053.01l-.06.01l-.057.004L18 15H6c-.852 0-1.297-.986-.783-1.623l.076-.084z\" }\n    )\n    ) : /*#__PURE__*/\n\n    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"svg\", {\n      xmlns: \"http://www.w3.org/2000/svg\",\n      width: \"1em\",\n      height: \"1em\",\n      viewBox: \"0 0 24 24\" }, /*#__PURE__*/\n\n    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", {\n      fill: \"currentColor\",\n      d: \"M18 9c.852 0 1.297.986.783 1.623l-.076.084l-6 6a1 1 0 0 1-1.32.083l-.094-.083l-6-6l-.083-.094l-.054-.077l-.054-.096l-.017-.036l-.027-.067l-.032-.108l-.01-.053l-.01-.06l-.004-.057v-.118l.005-.058l.009-.06l.01-.052l.032-.108l.027-.067l.07-.132l.065-.09l.073-.081l.094-.083l.077-.054l.096-.054l.036-.017l.067-.027l.108-.032l.053-.01l.06-.01l.057-.004z\" }\n    )\n    ),\n\n    Math.abs(priceDelta24h).toFixed(2), \"%\"\n    )\n    ), /*#__PURE__*/\n    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", { style: gridStyle }, /*#__PURE__*/\n    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/\n    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", { style: labelStyle }, \"TVL\"), /*#__PURE__*/\n    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", { style: valueStyle }, \"$\", tvl.toLocaleString())\n    ), /*#__PURE__*/\n    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/\n    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", { style: labelStyle }, \"24h Volume\"), /*#__PURE__*/\n    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", { style: valueStyle }, \"$\", volume24h.toLocaleString())\n    )\n    )\n    ));\n\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CoinPriceCard);\n\n//# sourceURL=webpack://@paciolan/remote-component-starter/./src/components/CoinPriceCard.tsx?");

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App */ \"./src/App.tsx\");\n/**\r\n * Entrypoint of the Remote Component.\r\n */\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_App__WEBPACK_IMPORTED_MODULE_0__.App);\n\n//# sourceURL=webpack://@paciolan/remote-component-starter/./src/index.tsx?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.tsx");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;