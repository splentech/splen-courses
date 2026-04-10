/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/explore/page",{

/***/ "(app-pages-browser)/./app/lib/courses/computerGraphics&Visualization.js":
/*!***********************************************************!*\
  !*** ./app/lib/courses/computerGraphics&Visualization.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "(app-pages-browser)/./app/lib/courses/index.js":
/*!**********************************!*\
  !*** ./app/lib/courses/index.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   courseMap: function() { return /* binding */ courseMap; },\n/* harmony export */   courses: function() { return /* binding */ courses; }\n/* harmony export */ });\n/* harmony import */ var _ai_ml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ai-ml */ \"(app-pages-browser)/./app/lib/courses/ai-ml.js\");\n/* harmony import */ var _data_science__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data-science */ \"(app-pages-browser)/./app/lib/courses/data-science.js\");\n/* harmony import */ var _programmingDSA__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./programmingDSA */ \"(app-pages-browser)/./app/lib/courses/programmingDSA.js\");\n/* harmony import */ var _programmingDSA__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_programmingDSA__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mobileApplicationWeb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mobileApplicationWeb */ \"(app-pages-browser)/./app/lib/courses/mobileApplicationWeb.js\");\n/* harmony import */ var _mobileApplicationWeb__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mobileApplicationWeb__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _softwareEngineering__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./softwareEngineering */ \"(app-pages-browser)/./app/lib/courses/softwareEngineering.js\");\n/* harmony import */ var _softwareEngineering__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_softwareEngineering__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _computerNetwork__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./computerNetwork */ \"(app-pages-browser)/./app/lib/courses/computerNetwork.js\");\n/* harmony import */ var _computerNetwork__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_computerNetwork__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _databaseSystems__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./databaseSystems */ \"(app-pages-browser)/./app/lib/courses/databaseSystems.js\");\n/* harmony import */ var _databaseSystems__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_databaseSystems__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _distributedSystemCloudComputing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./distributedSystemCloudComputing */ \"(app-pages-browser)/./app/lib/courses/distributedSystemCloudComputing.js\");\n/* harmony import */ var _distributedSystemCloudComputing__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_distributedSystemCloudComputing__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _gameDevelopment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./gameDevelopment */ \"(app-pages-browser)/./app/lib/courses/gameDevelopment.js\");\n/* harmony import */ var _gameDevelopment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_gameDevelopment__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _naturalLanguageProcessing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./naturalLanguageProcessing */ \"(app-pages-browser)/./app/lib/courses/naturalLanguageProcessing.js\");\n/* harmony import */ var _naturalLanguageProcessing__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_naturalLanguageProcessing__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _robotics__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./robotics */ \"(app-pages-browser)/./app/lib/courses/robotics.js\");\n/* harmony import */ var _robotics__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_robotics__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _computerArchitecture__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./computerArchitecture */ \"(app-pages-browser)/./app/lib/courses/computerArchitecture.js\");\n/* harmony import */ var _computerArchitecture__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_computerArchitecture__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _operatingSystem__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./operatingSystem */ \"(app-pages-browser)/./app/lib/courses/operatingSystem.js\");\n/* harmony import */ var _operatingSystem__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_operatingSystem__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _computerGraphics_Visualization__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./computerGraphics&Visualization */ \"(app-pages-browser)/./app/lib/courses/computerGraphics&Visualization.js\");\n/* harmony import */ var _computerGraphics_Visualization__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_computerGraphics_Visualization__WEBPACK_IMPORTED_MODULE_13__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* 🔥 CLEAN + SAFE ARRAY */ const allCourses = [\n    _ai_ml__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    _data_science__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    (_programmingDSA__WEBPACK_IMPORTED_MODULE_2___default())\n].filter(Boolean) // ✅ remove undefined imports\n.map((course)=>({\n        slug: course.slug || \"\",\n        title: course.title || \"Untitled Course\",\n        jobs: course.jobs || [],\n        ...course\n    }));\n/* ✅ EXPLORE PAGE */ const courses = allCourses;\n/* ✅ DETAIL PAGE */ const courseMap = Object.fromEntries(allCourses.map((course)=>[\n        course.slug,\n        course\n    ]));\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9saWIvY291cnNlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTJCO0FBQ2M7QUFDSztBQUNXO0FBQ0Y7QUFDUDtBQUNEO0FBQ2lDO0FBQ2hDO0FBQ29CO0FBQ2xDO0FBQ3dCO0FBQ1Y7QUFDNkI7QUFDbEM7QUFFM0MseUJBQXlCLEdBQ3pCLE1BQU1lLGFBQWE7SUFBQ2YsOENBQUlBO0lBQUVDLHFEQUFXQTtJQUFFQyx3REFBY0E7Q0FBQyxDQUNuRGMsTUFBTSxDQUFDQyxTQUFTLDZCQUE2QjtDQUM3Q0MsR0FBRyxDQUFDLENBQUNDLFNBQVk7UUFDaEJDLE1BQU1ELE9BQU9DLElBQUksSUFBSTtRQUNyQkMsT0FBT0YsT0FBT0UsS0FBSyxJQUFJO1FBQ3ZCQyxNQUFNSCxPQUFPRyxJQUFJLElBQUksRUFBRTtRQUN2QixHQUFHSCxNQUFNO0lBQ1g7QUFFRixrQkFBa0IsR0FDWCxNQUFNSSxVQUFVUixXQUFXO0FBRWxDLGlCQUFpQixHQUNWLE1BQU1TLFlBQVlDLE9BQU9DLFdBQVcsQ0FDekNYLFdBQVdHLEdBQUcsQ0FBQyxDQUFDQyxTQUFXO1FBQUNBLE9BQU9DLElBQUk7UUFBRUQ7S0FBTyxHQUNoRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvbGliL2NvdXJzZXMvaW5kZXguanM/NDVlYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYWlNTCBmcm9tIFwiLi9haS1tbFwiO1xyXG5pbXBvcnQgZGF0YVNjaWVuY2UgZnJvbSBcIi4vZGF0YS1zY2llbmNlXCI7XHJcbmltcG9ydCBwcm9ncmFtbWluZ0RTQSBmcm9tIFwiLi9wcm9ncmFtbWluZ0RTQVwiO1xyXG5pbXBvcnQgbW9iaWxlQXBwbGljYXRpb25XZWIgZnJvbSBcIi4vbW9iaWxlQXBwbGljYXRpb25XZWJcIlxyXG5pbXBvcnQgc29mdHdhcmVFbmdpbmVlcmluZyBmcm9tIFwiLi9zb2Z0d2FyZUVuZ2luZWVyaW5nXCJcclxuaW1wb3J0IGNvbXB1dGVyTmV0d29yayBmcm9tIFwiLi9jb21wdXRlck5ldHdvcmtcIjtcclxuaW1wb3J0IGRhdGFiYXNlU3lzdGVtIGZyb20gXCIuL2RhdGFiYXNlU3lzdGVtc1wiO1xyXG5pbXBvcnQgZGlzdHJpYnV0ZWRTeXN0ZW1DbG91ZENvbXB1dGluZyBmcm9tIFwiLi9kaXN0cmlidXRlZFN5c3RlbUNsb3VkQ29tcHV0aW5nXCI7XHJcbmltcG9ydCBnYW1lRGV2ZWxvcG1lbnQgZnJvbSBcIi4vZ2FtZURldmVsb3BtZW50XCI7XHJcbmltcG9ydCBuYXR1cmFsTGFuZ3VhZ2VQcm9jZXNzaW5nIGZyb20gXCIuL25hdHVyYWxMYW5ndWFnZVByb2Nlc3NpbmdcIjtcclxuaW1wb3J0IHJvYm90aWNzIGZyb20gXCIuL3JvYm90aWNzXCI7XHJcbmltcG9ydCBjb21wdXRlckFyY2hpdGVjdHVyZSBmcm9tIFwiLi9jb21wdXRlckFyY2hpdGVjdHVyZVwiO1xyXG5pbXBvcnQgb3BlcmF0aW5nU3lzdGVtIGZyb20gXCIuL29wZXJhdGluZ1N5c3RlbVwiO1xyXG5pbXBvcnQgY29tcHV0ZXJHcmFwaGljc1Zpc3VhbGl6YXRpb24gZnJvbSBcIi4vY29tcHV0ZXJHcmFwaGljcyZWaXN1YWxpemF0aW9uXCI7XHJcbmltcG9ydCBodW1hbiBmcm9tIFwiLi9jb21wdXRlckFyY2hpdGVjdHVyZVwiO1xyXG5cclxuLyog8J+UpSBDTEVBTiArIFNBRkUgQVJSQVkgKi9cclxuY29uc3QgYWxsQ291cnNlcyA9IFthaU1MLCBkYXRhU2NpZW5jZSwgcHJvZ3JhbW1pbmdEU0FdXHJcbiAgLmZpbHRlcihCb29sZWFuKSAvLyDinIUgcmVtb3ZlIHVuZGVmaW5lZCBpbXBvcnRzXHJcbiAgLm1hcCgoY291cnNlKSA9PiAoe1xyXG4gICAgc2x1ZzogY291cnNlLnNsdWcgfHwgXCJcIixcclxuICAgIHRpdGxlOiBjb3Vyc2UudGl0bGUgfHwgXCJVbnRpdGxlZCBDb3Vyc2VcIixcclxuICAgIGpvYnM6IGNvdXJzZS5qb2JzIHx8IFtdLFxyXG4gICAgLi4uY291cnNlLCAvLyDinIUga2VlcCBmdWxsIGZyZWVkb21cclxuICB9KSk7XHJcblxyXG4vKiDinIUgRVhQTE9SRSBQQUdFICovXHJcbmV4cG9ydCBjb25zdCBjb3Vyc2VzID0gYWxsQ291cnNlcztcclxuXHJcbi8qIOKchSBERVRBSUwgUEFHRSAqL1xyXG5leHBvcnQgY29uc3QgY291cnNlTWFwID0gT2JqZWN0LmZyb21FbnRyaWVzKFxyXG4gIGFsbENvdXJzZXMubWFwKChjb3Vyc2UpID0+IFtjb3Vyc2Uuc2x1ZywgY291cnNlXSlcclxuKTsiXSwibmFtZXMiOlsiYWlNTCIsImRhdGFTY2llbmNlIiwicHJvZ3JhbW1pbmdEU0EiLCJtb2JpbGVBcHBsaWNhdGlvbldlYiIsInNvZnR3YXJlRW5naW5lZXJpbmciLCJjb21wdXRlck5ldHdvcmsiLCJkYXRhYmFzZVN5c3RlbSIsImRpc3RyaWJ1dGVkU3lzdGVtQ2xvdWRDb21wdXRpbmciLCJnYW1lRGV2ZWxvcG1lbnQiLCJuYXR1cmFsTGFuZ3VhZ2VQcm9jZXNzaW5nIiwicm9ib3RpY3MiLCJjb21wdXRlckFyY2hpdGVjdHVyZSIsIm9wZXJhdGluZ1N5c3RlbSIsImNvbXB1dGVyR3JhcGhpY3NWaXN1YWxpemF0aW9uIiwiaHVtYW4iLCJhbGxDb3Vyc2VzIiwiZmlsdGVyIiwiQm9vbGVhbiIsIm1hcCIsImNvdXJzZSIsInNsdWciLCJ0aXRsZSIsImpvYnMiLCJjb3Vyc2VzIiwiY291cnNlTWFwIiwiT2JqZWN0IiwiZnJvbUVudHJpZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/lib/courses/index.js\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/lib/courses/operatingSystem.js":
/*!********************************************!*\
  !*** ./app/lib/courses/operatingSystem.js ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ })

});