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

"use strict";var __extends=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();Object.defineProperty(exports,"__esModule",{value:!0});var wijmo_webcomponents_base_1=require("wijmo/wijmo.webcomponents.base"),wjcChartHierarchical=require("wijmo/wijmo.chart.hierarchical"),_wj_ns_exists_5=!0,WjcSunburst=function(e){function t(){var t=e.call(this,document.createElement("div"))||this;return t._wjBehaviour=wijmo_webcomponents_base_1.WjComponentBehavior._attach(t),t}return __extends(t,e),Object.defineProperty(t,"observedAttributes",{get:function(){return wijmo_webcomponents_base_1.WjComponentBehavior.getProps(this)},enumerable:!0,configurable:!0}),t.prototype.connectedCallback=function(){this._wjBehaviour.lhConnected()},t.prototype.attributeChangedCallback=function(e,t,n){this._wjBehaviour.lhAttributeChanged(e,t,n)},t.prototype.disconnectedCallback=function(){this._wjBehaviour.lhDisconnected()},t.prototype.addEventListener=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];"string"==typeof t[0]?HTMLElement.prototype.addEventListener.apply(this,t):e.prototype.addEventListener.apply(this,t)},t}(wjcChartHierarchical.Sunburst);exports.WjcSunburst=WjcSunburst,_wj_ns_exists_5&&wijmo_webcomponents_base_1.WjComponentBehavior.register("wjc-sunburst",WjcSunburst);var WjcTreeMap=function(e){function t(){var t=e.call(this,document.createElement("div"))||this;return t._wjBehaviour=wijmo_webcomponents_base_1.WjComponentBehavior._attach(t),t}return __extends(t,e),Object.defineProperty(t,"observedAttributes",{get:function(){return wijmo_webcomponents_base_1.WjComponentBehavior.getProps(this)},enumerable:!0,configurable:!0}),t.prototype.connectedCallback=function(){this._wjBehaviour.lhConnected()},t.prototype.attributeChangedCallback=function(e,t,n){this._wjBehaviour.lhAttributeChanged(e,t,n)},t.prototype.disconnectedCallback=function(){this._wjBehaviour.lhDisconnected()},t.prototype.addEventListener=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];"string"==typeof t[0]?HTMLElement.prototype.addEventListener.apply(this,t):e.prototype.addEventListener.apply(this,t)},t}(wjcChartHierarchical.TreeMap);exports.WjcTreeMap=WjcTreeMap,_wj_ns_exists_5&&wijmo_webcomponents_base_1.WjComponentBehavior.register("wjc-tree-map",WjcTreeMap);