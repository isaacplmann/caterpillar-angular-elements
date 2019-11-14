(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["second"], {
        /***/ "./src/app/second.component.ts": 
        /*!*************************************!*\
          !*** ./src/app/second.component.ts ***!
          \*************************************/
        /*! exports provided: SecondComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondComponent", function () { return SecondComponent; });
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
            var SecondComponent = /** @class */ (function () {
                function SecondComponent() {
                }
                SecondComponent.prototype.ngOnInit = function () { };
                return SecondComponent;
            }());
            /***/ 
        }),
        /***/ "./src/app/second.module.ts": 
        /*!**********************************!*\
          !*** ./src/app/second.module.ts ***!
          \**********************************/
        /*! exports provided: SecondModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondModule", function () { return SecondModule; });
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
            /* harmony import */ var _angular_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/elements */ "@angular/elements");
            /* harmony import */ var _angular_elements__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(_angular_elements__WEBPACK_IMPORTED_MODULE_1__);
            /* harmony import */ var _second_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./second.component */ "./src/app/second.component.ts");
            var SecondModule = /** @class */ (function () {
                function SecondModule(injector) {
                    this.injector = injector;
                }
                SecondModule.prototype.ngDoBootstrap = function () {
                    var elm = Object(_angular_elements__WEBPACK_IMPORTED_MODULE_1__["createCustomElement"])(_second_component__WEBPACK_IMPORTED_MODULE_2__["SecondComponent"], {
                        injector: this.injector
                    });
                    customElements.define('second-element', elm);
                };
                return SecondModule;
            }());
            /***/ 
        }),
        /***/ "./src/main2.ts": 
        /*!**********************!*\
          !*** ./src/main2.ts ***!
          \**********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "@angular/platform-browser-dynamic");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__);
            /* harmony import */ var _app_second_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/second.module */ "./src/app/second.module.ts");
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["destroyPlatform"])();
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
                .bootstrapModule(_app_second_module__WEBPACK_IMPORTED_MODULE_2__["SecondModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ "@angular/core": 
        /*!**************************!*\
          !*** external "ng.core" ***!
          \**************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            module.exports = ng.core;
            /***/ 
        }),
        /***/ "@angular/elements": 
        /*!******************************!*\
          !*** external "ng.elements" ***!
          \******************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            module.exports = ng.elements;
            /***/ 
        }),
        /***/ "@angular/platform-browser-dynamic": 
        /*!********************************************!*\
          !*** external "ng.platformBrowserDynamic" ***!
          \********************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            module.exports = ng.platformBrowserDynamic;
            /***/ 
        })
    }, [["./src/main2.ts", "runtime"]]]);
