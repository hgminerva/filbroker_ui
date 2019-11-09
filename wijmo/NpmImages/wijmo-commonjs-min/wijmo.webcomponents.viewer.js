﻿/*!
    *
    * Wijmo Library 5.20192.631
    * http://wijmo.com/
    *
    * Copyright(c) GrapeCity, Inc.  All rights reserved.
    *
    * Licensed under the GrapeCity Commercial License.
    * sales@wijmo.com
    * wijmo.com/products/wijmo-5/license/
    *
    */

"use strict";var __extends=this&&this.__extends||function(){var e=function(o,t){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,o){e.__proto__=o}||function(e,o){for(var t in o)o.hasOwnProperty(t)&&(e[t]=o[t])})(o,t)};return function(o,t){function r(){this.constructor=o}e(o,t),o.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}();Object.defineProperty(exports,"__esModule",{value:!0});var wijmo_webcomponents_base_1=require("wijmo/wijmo.webcomponents.base");require("wijmo/wijmo.webcomponents.input");var wjcViewer=require("wijmo/wijmo.viewer"),_wj_ns_exists_17=!0,WjcReportViewer=function(e){function o(){var o=e.call(this,document.createElement("div"))||this;return o._wjBehaviour=wijmo_webcomponents_base_1.WjComponentBehavior._attach(o),o}return __extends(o,e),Object.defineProperty(o,"observedAttributes",{get:function(){return wijmo_webcomponents_base_1.WjComponentBehavior.getProps(this)},enumerable:!0,configurable:!0}),o.prototype.connectedCallback=function(){this._wjBehaviour.lhConnected()},o.prototype.attributeChangedCallback=function(e,o,t){this._wjBehaviour.lhAttributeChanged(e,o,t)},o.prototype.disconnectedCallback=function(){this._wjBehaviour.lhDisconnected()},o.prototype.addEventListener=function(){for(var o=[],t=0;t<arguments.length;t++)o[t]=arguments[t];"string"==typeof o[0]?HTMLElement.prototype.addEventListener.apply(this,o):e.prototype.addEventListener.apply(this,o)},o}(wjcViewer.ReportViewer);exports.WjcReportViewer=WjcReportViewer,_wj_ns_exists_17&&(wijmo_webcomponents_base_1.WjComponentBehavior.register("",wjcViewer._MouseTool),wijmo_webcomponents_base_1.WjComponentBehavior.register("",wjcViewer._Magnifier),wijmo_webcomponents_base_1.WjComponentBehavior.register("",wjcViewer._PageSetupDialog),wijmo_webcomponents_base_1.WjComponentBehavior.register("",wjcViewer._Rubberband),wijmo_webcomponents_base_1.WjComponentBehavior.register("",wjcViewer._ParametersEditor),wijmo_webcomponents_base_1.WjComponentBehavior.register("",wjcViewer._ReportHamburgerMenu),wijmo_webcomponents_base_1.WjComponentBehavior.register("",wjcViewer._ViewerMenuBase),wijmo_webcomponents_base_1.WjComponentBehavior.register("",wjcViewer._HamburgerMenu),wijmo_webcomponents_base_1.WjComponentBehavior.register("",wjcViewer._SearchOptionsMenu),wijmo_webcomponents_base_1.WjComponentBehavior.register("",wjcViewer._ViewMenu),wijmo_webcomponents_base_1.WjComponentBehavior.register("",wjcViewer._SearchBar),wijmo_webcomponents_base_1.WjComponentBehavior.register("",wjcViewer._Toolbar),wijmo_webcomponents_base_1.WjComponentBehavior.register("",wjcViewer._ViewerMiniToolbar),wijmo_webcomponents_base_1.WjComponentBehavior.register("",wjcViewer._ViewerMobileToolbar),wijmo_webcomponents_base_1.WjComponentBehavior.register("",wjcViewer._ViewerMobileToolbarBase),wijmo_webcomponents_base_1.WjComponentBehavior.register("",wjcViewer._ViewerToolbar),wijmo_webcomponents_base_1.WjComponentBehavior.register("",wjcViewer._ViewerToolbarBase),wijmo_webcomponents_base_1.WjComponentBehavior.register("",wjcViewer._ViewerZoomBar),wijmo_webcomponents_base_1.WjComponentBehavior.register("",wjcViewer._SideTabs),wijmo_webcomponents_base_1.WjComponentBehavior.register("",wjcViewer._CompositePageView),wijmo_webcomponents_base_1.WjComponentBehavior.register("",wjcViewer._ContinuousPageView),wijmo_webcomponents_base_1.WjComponentBehavior.register("",wjcViewer._PageViewBase),wijmo_webcomponents_base_1.WjComponentBehavior.register("",wjcViewer._Scroller),wijmo_webcomponents_base_1.WjComponentBehavior.register("",wjcViewer._SinglePageView),wijmo_webcomponents_base_1.WjComponentBehavior.register("",wjcViewer._VScroller),wijmo_webcomponents_base_1.WjComponentBehavior.register("",wjcViewer._PageSetupEditor),wijmo_webcomponents_base_1.WjComponentBehavior.register("",wjcViewer._ExportOptionEditor),wijmo_webcomponents_base_1.WjComponentBehavior.register("wjc-report-viewer",WjcReportViewer));var WjcPdfViewer=function(e){function o(){var o=e.call(this,document.createElement("div"))||this;return o._wjBehaviour=wijmo_webcomponents_base_1.WjComponentBehavior._attach(o),o}return __extends(o,e),Object.defineProperty(o,"observedAttributes",{get:function(){return wijmo_webcomponents_base_1.WjComponentBehavior.getProps(this)},enumerable:!0,configurable:!0}),o.prototype.connectedCallback=function(){this._wjBehaviour.lhConnected()},o.prototype.attributeChangedCallback=function(e,o,t){this._wjBehaviour.lhAttributeChanged(e,o,t)},o.prototype.disconnectedCallback=function(){this._wjBehaviour.lhDisconnected()},o.prototype.addEventListener=function(){for(var o=[],t=0;t<arguments.length;t++)o[t]=arguments[t];"string"==typeof o[0]?HTMLElement.prototype.addEventListener.apply(this,o):e.prototype.addEventListener.apply(this,o)},o}(wjcViewer.PdfViewer);exports.WjcPdfViewer=WjcPdfViewer,_wj_ns_exists_17&&wijmo_webcomponents_base_1.WjComponentBehavior.register("wjc-pdf-viewer",WjcPdfViewer);