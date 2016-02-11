/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	// namespace/module (not changed)
	var Old = Coveo.JsAdmin.Old;
	// namespace/module (converted)
	var NamespaceNew = __webpack_require__(1);
	// ES6 Module
	var b_1 = __webpack_require__(2);
	var New = NamespaceNew.Coveo.JsAdmin.New;
	var a = new New();
	var b = new b_1.default();
	var c = new Old();
	//# sourceMappingURL=c.js.map

/***/ },
/* 1 */
/***/ function(module, exports) {

	var Coveo;
	(function (Coveo) {
	    var JsAdmin;
	    (function (JsAdmin) {
	        var New = (function () {
	            function New() {
	                console.log('namespacenew.ts');
	            }
	            return New;
	        })();
	        JsAdmin.New = New;
	    })(JsAdmin = Coveo.JsAdmin || (Coveo.JsAdmin = {}));
	})(Coveo = exports.Coveo || (exports.Coveo = {}));
	//# sourceMappingURL=namespacenew.js.map

/***/ },
/* 2 */
/***/ function(module, exports) {

	var B = (function () {
	    function B() {
	        console.log('b.ts');
	    }
	    return B;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = B;
	//# sourceMappingURL=b.js.map

/***/ }
/******/ ]);