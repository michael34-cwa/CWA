(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ "./resources/js/modules/technologies/pages/list/index.js":
/*!***************************************************************!*\
  !*** ./resources/js/modules/technologies/pages/list/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _Article__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Article */ \"./resources/js/modules/technologies/Article.js\");\n/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Page */ \"./resources/js/modules/technologies/pages/list/Page.js\");\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n// import libs\n\n // import components\n\n\n\nvar mapStateToProps = function mapStateToProps(state) {\n  var _state$articles = state.articles,\n      data = _state$articles.data,\n      meta = _objectWithoutProperties(_state$articles, [\"data\"]);\n\n  return {\n    articles: data.map(function (article) {\n      return new _Article__WEBPACK_IMPORTED_MODULE_1__[\"default\"](article);\n    }),\n    meta: Object.assign({}, meta)\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__[\"connect\"])(mapStateToProps)(_Page__WEBPACK_IMPORTED_MODULE_2__[\"default\"]));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvbW9kdWxlcy90ZWNobm9sb2dpZXMvcGFnZXMvbGlzdC9pbmRleC5qcz9hZjZkIl0sIm5hbWVzIjpbIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwiYXJ0aWNsZXMiLCJkYXRhIiwibWV0YSIsIm1hcCIsImFydGljbGUiLCJBcnRpY2xlIiwiT2JqZWN0IiwiYXNzaWduIiwiY29ubmVjdCIsIlBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtDQUdBOztBQUNBOztBQUVBLElBQU1BLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQUMsS0FBSyxFQUFJO0FBQUEsd0JBQ1BBLEtBQUssQ0FBQ0MsUUFEQztBQUFBLE1BQ3hCQyxJQUR3QixtQkFDeEJBLElBRHdCO0FBQUEsTUFDZkMsSUFEZTs7QUFHL0IsU0FBTztBQUNMRixZQUFRLEVBQUVDLElBQUksQ0FBQ0UsR0FBTCxDQUFTLFVBQUNDLE9BQUQ7QUFBQSxhQUFhLElBQUlDLGdEQUFKLENBQVlELE9BQVosQ0FBYjtBQUFBLEtBQVQsQ0FETDtBQUVMRixRQUFJLEVBQUVJLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JMLElBQWxCO0FBRkQsR0FBUDtBQUlELENBUEQ7O0FBU2VNLDBIQUFPLENBQUNWLGVBQUQsQ0FBUCxDQUF5QlcsNkNBQXpCLENBQWYiLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvbW9kdWxlcy90ZWNobm9sb2dpZXMvcGFnZXMvbGlzdC9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBsaWJzXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgQXJ0aWNsZSBmcm9tICcuLi8uLi9BcnRpY2xlJ1xuXG4vLyBpbXBvcnQgY29tcG9uZW50c1xuaW1wb3J0IFBhZ2UgZnJvbSAnLi9QYWdlJ1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiB7XG4gIGNvbnN0IHtkYXRhLCAuLi5tZXRhfSA9IHN0YXRlLmFydGljbGVzXG4gIFxuICByZXR1cm4ge1xuICAgIGFydGljbGVzOiBkYXRhLm1hcCgoYXJ0aWNsZSkgPT4gbmV3IEFydGljbGUoYXJ0aWNsZSkpLFxuICAgIG1ldGE6IE9iamVjdC5hc3NpZ24oe30sIG1ldGEpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKFBhZ2UpXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/js/modules/technologies/pages/list/index.js\n");

/***/ })

}]);