"use strict";
self["webpackHotUpdatesyrius_extension"]("popup",{

/***/ "./src/layouts/tabsLayout/tabsLayout.js":
/*!**********************************************!*\
  !*** ./src/layouts/tabsLayout/tabsLayout.js ***!
  \**********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _pages_dashboard_dashboard_dashboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pages/dashboard/dashboard/dashboard */ "./src/pages/dashboard/dashboard/dashboard.js");
/* harmony import */ var _pages_menu_menu_tabs_menu_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pages/menu/menu-tabs/menu-tabs */ "./src/pages/menu/menu-tabs/menu-tabs.js");
/* harmony import */ var _pages_delegate_delegate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pages/delegate/delegate */ "./src/pages/delegate/delegate.js");
/* harmony import */ var _pages_plasma_plasma__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pages/plasma/plasma */ "./src/pages/plasma/plasma.js");
/* harmony import */ var _pages_staking_stake_stake__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pages/staking/stake/stake */ "./src/pages/staking/stake/stake.js");
/* harmony import */ var _pages_send_receive_send_send__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pages/send-receive/send/send */ "./src/pages/send-receive/send/send.js");
/* harmony import */ var _pages_send_receive_receive_receive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pages/send-receive/receive/receive */ "./src/pages/send-receive/receive/receive.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/components/AnimatePresence/index.js");
/* harmony import */ var _pages_menu_menu_header_menu_header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pages/menu/menu-header/menu-header */ "./src/pages/menu/menu-header/menu-header.js");
/* harmony import */ var _pages_settings_settings_settings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../pages/settings/settings/settings */ "./src/pages/settings/settings/settings.js");
/* harmony import */ var _pages_settings_change_node_change_node__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../pages/settings/change-node/change-node */ "./src/pages/settings/change-node/change-node.js");
/* harmony import */ var _pages_settings_change_chainId_change_chainId__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../pages/settings/change-chainId/change-chainId */ "./src/pages/settings/change-chainId/change-chainId.js");
/* harmony import */ var _pages_settings_export_mnemonic_export_mnemonic__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../pages/settings/export-mnemonic/export-mnemonic */ "./src/pages/settings/export-mnemonic/export-mnemonic.js");
/* harmony import */ var _pages_settings_change_address_change_address__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../pages/settings/change-address/change-address */ "./src/pages/settings/change-address/change-address.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../pages/rewards-overview/rewards-overview'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* module decorator */ module = __webpack_require__.hmd(module);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

















var TabsLayout = function TabsLayout() {
  var location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_15__.useLocation)();
  var pagesWithBackButton = ["send", "receive", "settings"];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_menu_menu_header_menu_header__WEBPACK_IMPORTED_MODULE_8__["default"], {
    backButton: pagesWithBackButton.some(function (page) {
      return location.pathname.includes(page);
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "menu-layout"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_16__.AnimatePresence, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.Routes, {
    location: location,
    key: location.pathname
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.Route, {
    path: "",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.Navigate, {
      to: "dashboard",
      replace: true
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.Route, {
    path: "dashboard",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_dashboard_dashboard_dashboard__WEBPACK_IMPORTED_MODULE_1__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.Route, {
    path: "dashboard/send",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_send_receive_send_send__WEBPACK_IMPORTED_MODULE_6__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.Route, {
    path: "dashboard/receive",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_send_receive_receive_receive__WEBPACK_IMPORTED_MODULE_7__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.Route, {
    path: "delegate",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_delegate_delegate__WEBPACK_IMPORTED_MODULE_3__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.Route, {
    path: "plasma",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_plasma_plasma__WEBPACK_IMPORTED_MODULE_4__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.Route, {
    path: "stake",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_staking_stake_stake__WEBPACK_IMPORTED_MODULE_5__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.Route, {
    path: "change-address",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_settings_change_address_change_address__WEBPACK_IMPORTED_MODULE_13__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.Route, {
    path: "settings",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_settings_settings_settings__WEBPACK_IMPORTED_MODULE_9__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.Route, {
    path: "settings/export-mnemonic",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_settings_export_mnemonic_export_mnemonic__WEBPACK_IMPORTED_MODULE_12__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.Route, {
    path: "settings/change-node",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_settings_change_node_change_node__WEBPACK_IMPORTED_MODULE_10__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.Route, {
    path: "settings/change-chainId",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_settings_change_chainId_change_chainId__WEBPACK_IMPORTED_MODULE_11__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.Route, {
    path: "rewards",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../pages/rewards-overview/rewards-overview'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), null)
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_menu_menu_tabs_menu_tabs__WEBPACK_IMPORTED_MODULE_2__["default"], null)));
};
__signature__(TabsLayout, "useLocation{location}", function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_15__.useLocation];
});
var _default = TabsLayout;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);
;
(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;
  if (!reactHotLoader) {
    return;
  }
  reactHotLoader.register(TabsLayout, "TabsLayout", "D:\\Projects\\zenon\\DexterLabZ\\syrius-extension-tg-mini-app\\src\\layouts\\tabsLayout\\tabsLayout.js");
  reactHotLoader.register(_default, "default", "D:\\Projects\\zenon\\DexterLabZ\\syrius-extension-tg-mini-app\\src\\layouts\\tabsLayout\\tabsLayout.js");
})();
;
(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d8b9877a87b8876f0963")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=popup.71104d2e8b8b1a37d91b.hot-update.js.map