(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./resources/js/modules/web/pages/home/Page.js":
/*!*****************************************************!*\
  !*** ./resources/js/modules/web/pages/home/Page.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Header */ \"./resources/js/modules/web/pages/home/components/Header.js\");\n/* harmony import */ var _common_articles_listing_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common/articles/listing/index */ \"./resources/js/common/articles/listing/index.js\");\n/* harmony import */ var _article_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../article/service */ \"./resources/js/modules/article/service.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n // import components\n\n\n // import services\n\n\n\nvar Page =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Page, _Component);\n\n  function Page() {\n    _classCallCheck(this, Page);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Page).apply(this, arguments));\n  }\n\n  _createClass(Page, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      this.props.dispatch(Object(_article_service__WEBPACK_IMPORTED_MODULE_4__[\"articleListRequest\"])({\n        url: '/articles/published'\n      }));\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_articles_listing_index__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null));\n    }\n  }]);\n\n  return Page;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n_defineProperty(Page, \"displayName\", \"HomePage\");\n\n_defineProperty(Page, \"propTypes\", {\n  dispatch: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvbW9kdWxlcy93ZWIvcGFnZXMvaG9tZS9QYWdlLmpzPzMwMGIiXSwibmFtZXMiOlsiUGFnZSIsInByb3BzIiwiZGlzcGF0Y2giLCJhcnRpY2xlTGlzdFJlcXVlc3QiLCJ1cmwiLCJDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJmdW5jIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBR0E7O0FBQ0E7Q0FHQTs7QUFDQTs7SUFFTUEsSTs7Ozs7Ozs7Ozs7Ozt3Q0FNZ0I7QUFDbEIsV0FBS0MsS0FBTCxDQUFXQyxRQUFYLENBQW9CQywyRUFBa0IsQ0FBQztBQUFFQyxXQUFHLEVBQUU7QUFBUCxPQUFELENBQXRDO0FBQ0Q7Ozs2QkFFUTtBQUNQLGFBQU8sd0VBQ0wsMkRBQUMsMERBQUQsT0FESyxFQUVMLDJEQUFDLHNFQUFELE9BRkssQ0FBUDtBQUlEOzs7O0VBZmdCQywrQzs7Z0JBQWJMLEksaUJBQ2lCLFU7O2dCQURqQkEsSSxlQUVlO0FBQ2pCRSxVQUFRLEVBQUVJLGlEQUFTLENBQUNDLElBQVYsQ0FBZUM7QUFEUixDOztBQWdCTlIsbUVBQWYiLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvbW9kdWxlcy93ZWIvcGFnZXMvaG9tZS9QYWdlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIlxyXG5cclxuLy8gaW1wb3J0IGNvbXBvbmVudHNcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9jb21wb25lbnRzL0hlYWRlclwiXHJcbmltcG9ydCBBcnRpY2xlcyBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL2FydGljbGVzL2xpc3RpbmcvaW5kZXhcIlxyXG5cclxuLy8gaW1wb3J0IHNlcnZpY2VzXHJcbmltcG9ydCB7IGFydGljbGVMaXN0UmVxdWVzdCB9IGZyb20gXCIuLi8uLi8uLi9hcnRpY2xlL3NlcnZpY2VcIlxyXG5cclxuY2xhc3MgUGFnZSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGljIGRpc3BsYXlOYW1lID0gXCJIb21lUGFnZVwiXHJcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgIGRpc3BhdGNoOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGFydGljbGVMaXN0UmVxdWVzdCh7IHVybDogJy9hcnRpY2xlcy9wdWJsaXNoZWQnIH0pKVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIDxkaXY+XHJcbiAgICAgIDxIZWFkZXIvPlxyXG4gICAgICA8QXJ0aWNsZXMvPlxyXG4gICAgPC9kaXY+XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/modules/web/pages/home/Page.js\n");

/***/ }),

/***/ "./resources/js/modules/web/pages/home/components/Header.js":
/*!******************************************************************!*\
  !*** ./resources/js/modules/web/pages/home/components/Header.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nvar displayName = \"HomePageHeader\";\n\nfunction Header() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"header\", {\n    className: \"bg-primary text-white\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"container text-center\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"CWA\")));\n}\n\nHeader.displayName = displayName;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvbW9kdWxlcy93ZWIvcGFnZXMvaG9tZS9jb21wb25lbnRzL0hlYWRlci5qcz81ZGNkIl0sIm5hbWVzIjpbImRpc3BsYXlOYW1lIiwiSGVhZGVyIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBLElBQU1BLFdBQVcsR0FBRyxnQkFBcEI7O0FBRUEsU0FBU0MsTUFBVCxHQUFrQjtBQUNoQixTQUFPO0FBQVEsYUFBUyxFQUFDO0FBQWxCLEtBQ0w7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNHLDZFQURILENBREssQ0FBUDtBQUtEOztBQUNEQSxNQUFNLENBQUNELFdBQVAsR0FBcUJBLFdBQXJCO0FBRWVDLHFFQUFmIiwiZmlsZSI6Ii4vcmVzb3VyY2VzL2pzL21vZHVsZXMvd2ViL3BhZ2VzL2hvbWUvY29tcG9uZW50cy9IZWFkZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuXHJcbmNvbnN0IGRpc3BsYXlOYW1lID0gXCJIb21lUGFnZUhlYWRlclwiXHJcblxyXG5mdW5jdGlvbiBIZWFkZXIoKSB7XHJcbiAgcmV0dXJuIDxoZWFkZXIgY2xhc3NOYW1lPVwiYmctcHJpbWFyeSB0ZXh0LXdoaXRlXCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgPGgxPkNXQTwvaDE+IFxyXG4gICAgIDwvZGl2PlxyXG4gIDwvaGVhZGVyPlxyXG59XHJcbkhlYWRlci5kaXNwbGF5TmFtZSA9IGRpc3BsYXlOYW1lXHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/modules/web/pages/home/components/Header.js\n");

/***/ }),

/***/ "./resources/js/modules/web/pages/home/index.js":
/*!******************************************************!*\
  !*** ./resources/js/modules/web/pages/home/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Page */ \"./resources/js/modules/web/pages/home/Page.js\");\n// import libs\n // import components\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__[\"connect\"])()(_Page__WEBPACK_IMPORTED_MODULE_1__[\"default\"]));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvbW9kdWxlcy93ZWIvcGFnZXMvaG9tZS9pbmRleC5qcz8xMGRmIl0sIm5hbWVzIjpbImNvbm5lY3QiLCJQYWdlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtDQUdBOztBQUNBO0FBRWVBLDBIQUFPLEdBQUdDLDZDQUFILENBQXRCIiwiZmlsZSI6Ii4vcmVzb3VyY2VzL2pzL21vZHVsZXMvd2ViL3BhZ2VzL2hvbWUvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgbGlic1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcclxuXHJcbi8vIGltcG9ydCBjb21wb25lbnRzXHJcbmltcG9ydCBQYWdlIGZyb20gXCIuL1BhZ2VcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdCgpKFBhZ2UpXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/modules/web/pages/home/index.js\n");

/***/ })

}]);