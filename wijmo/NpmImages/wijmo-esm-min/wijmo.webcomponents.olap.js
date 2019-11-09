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

var __extends=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();import{WjComponentBehavior}from"wijmo/wijmo.webcomponents.base";import"wijmo/wijmo.webcomponents.chart";import*as wjcOlap from"wijmo/wijmo.olap";var _wj_ns_exists_16=!0,WjcPivotGrid=function(t){function e(){var e=t.call(this,document.createElement("div"))||this;return e._wjBehaviour=WjComponentBehavior._attach(e),e}return __extends(e,t),Object.defineProperty(e,"observedAttributes",{get:function(){return WjComponentBehavior.getProps(this)},enumerable:!0,configurable:!0}),e.prototype.connectedCallback=function(){this._wjBehaviour.lhConnected()},e.prototype.attributeChangedCallback=function(t,e,o){this._wjBehaviour.lhAttributeChanged(t,e,o)},e.prototype.disconnectedCallback=function(){this._wjBehaviour.lhDisconnected()},e.prototype.addEventListener=function(){for(var e=[],o=0;o<arguments.length;o++)e[o]=arguments[o];"string"==typeof e[0]?HTMLElement.prototype.addEventListener.apply(this,e):t.prototype.addEventListener.apply(this,e)},e}(wjcOlap.PivotGrid);export{WjcPivotGrid};_wj_ns_exists_16&&(WjComponentBehavior.register("",wjcOlap._GridContextMenu),WjComponentBehavior.register("",wjcOlap.DetailDialog),WjComponentBehavior.register("",wjcOlap.PivotFieldEditor),WjComponentBehavior.register("",wjcOlap.PivotFilterEditor),WjComponentBehavior.register("wjc-pivot-grid",WjcPivotGrid));var WjcPivotChart=function(t){function e(){var e=t.call(this,document.createElement("div"))||this;return e._wjBehaviour=WjComponentBehavior._attach(e),e}return __extends(e,t),Object.defineProperty(e,"observedAttributes",{get:function(){return WjComponentBehavior.getProps(this)},enumerable:!0,configurable:!0}),e.prototype.connectedCallback=function(){this._wjBehaviour.lhConnected()},e.prototype.attributeChangedCallback=function(t,e,o){this._wjBehaviour.lhAttributeChanged(t,e,o)},e.prototype.disconnectedCallback=function(){this._wjBehaviour.lhDisconnected()},e.prototype.addEventListener=function(){for(var e=[],o=0;o<arguments.length;o++)e[o]=arguments[o];"string"==typeof e[0]?HTMLElement.prototype.addEventListener.apply(this,e):t.prototype.addEventListener.apply(this,e)},e}(wjcOlap.PivotChart);export{WjcPivotChart};_wj_ns_exists_16&&WjComponentBehavior.register("wjc-pivot-chart",WjcPivotChart);var WjcPivotPanel=function(t){function e(){var e=t.call(this,document.createElement("div"))||this;return e._wjBehaviour=WjComponentBehavior._attach(e),e}return __extends(e,t),Object.defineProperty(e,"observedAttributes",{get:function(){return WjComponentBehavior.getProps(this)},enumerable:!0,configurable:!0}),e.prototype.connectedCallback=function(){this._wjBehaviour.lhConnected()},e.prototype.attributeChangedCallback=function(t,e,o){this._wjBehaviour.lhAttributeChanged(t,e,o)},e.prototype.disconnectedCallback=function(){this._wjBehaviour.lhDisconnected()},e.prototype.addEventListener=function(){for(var e=[],o=0;o<arguments.length;o++)e[o]=arguments[o];"string"==typeof e[0]?HTMLElement.prototype.addEventListener.apply(this,e):t.prototype.addEventListener.apply(this,e)},e}(wjcOlap.PivotPanel);export{WjcPivotPanel};_wj_ns_exists_16&&(WjComponentBehavior.register("",wjcOlap._ListContextMenu),WjComponentBehavior.register("wjc-pivot-panel",WjcPivotPanel));var WjcSlicer=function(t){function e(){var e=t.call(this,document.createElement("div"))||this;return e._wjBehaviour=WjComponentBehavior._attach(e),e}return __extends(e,t),Object.defineProperty(e,"observedAttributes",{get:function(){return WjComponentBehavior.getProps(this)},enumerable:!0,configurable:!0}),e.prototype.connectedCallback=function(){this._wjBehaviour.lhConnected()},e.prototype.attributeChangedCallback=function(t,e,o){this._wjBehaviour.lhAttributeChanged(t,e,o)},e.prototype.disconnectedCallback=function(){this._wjBehaviour.lhDisconnected()},e.prototype.addEventListener=function(){for(var e=[],o=0;o<arguments.length;o++)e[o]=arguments[o];"string"==typeof e[0]?HTMLElement.prototype.addEventListener.apply(this,e):t.prototype.addEventListener.apply(this,e)},e}(wjcOlap.Slicer);export{WjcSlicer};_wj_ns_exists_16&&WjComponentBehavior.register("wjc-slicer",WjcSlicer);