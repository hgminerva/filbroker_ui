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

"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const wijmo_webcomponents_base_1=require("wijmo/wijmo.webcomponents.base");require("wijmo/wijmo.webcomponents.chart");const wjcOlap=require("wijmo/wijmo.olap");let _wj_ns_exists_16=!0;class WjcPivotGrid extends wjcOlap.PivotGrid{constructor(){super(document.createElement("div")),this._wjBehaviour=wijmo_webcomponents_base_1.WjComponentBehavior._attach(this)}static get observedAttributes(){return wijmo_webcomponents_base_1.WjComponentBehavior.getProps(this)}connectedCallback(){this._wjBehaviour.lhConnected()}attributeChangedCallback(e,t,o){this._wjBehaviour.lhAttributeChanged(e,t,o)}disconnectedCallback(){this._wjBehaviour.lhDisconnected()}addEventListener(...e){"string"==typeof e[0]?HTMLElement.prototype.addEventListener.apply(this,e):super.addEventListener.apply(this,e)}}exports.WjcPivotGrid=WjcPivotGrid,_wj_ns_exists_16&&(wijmo_webcomponents_base_1.WjComponentBehavior.register("",wjcOlap._GridContextMenu),wijmo_webcomponents_base_1.WjComponentBehavior.register("",wjcOlap.DetailDialog),wijmo_webcomponents_base_1.WjComponentBehavior.register("",wjcOlap.PivotFieldEditor),wijmo_webcomponents_base_1.WjComponentBehavior.register("",wjcOlap.PivotFilterEditor),wijmo_webcomponents_base_1.WjComponentBehavior.register("wjc-pivot-grid",WjcPivotGrid));class WjcPivotChart extends wjcOlap.PivotChart{constructor(){super(document.createElement("div")),this._wjBehaviour=wijmo_webcomponents_base_1.WjComponentBehavior._attach(this)}static get observedAttributes(){return wijmo_webcomponents_base_1.WjComponentBehavior.getProps(this)}connectedCallback(){this._wjBehaviour.lhConnected()}attributeChangedCallback(e,t,o){this._wjBehaviour.lhAttributeChanged(e,t,o)}disconnectedCallback(){this._wjBehaviour.lhDisconnected()}addEventListener(...e){"string"==typeof e[0]?HTMLElement.prototype.addEventListener.apply(this,e):super.addEventListener.apply(this,e)}}exports.WjcPivotChart=WjcPivotChart,_wj_ns_exists_16&&wijmo_webcomponents_base_1.WjComponentBehavior.register("wjc-pivot-chart",WjcPivotChart);class WjcPivotPanel extends wjcOlap.PivotPanel{constructor(){super(document.createElement("div")),this._wjBehaviour=wijmo_webcomponents_base_1.WjComponentBehavior._attach(this)}static get observedAttributes(){return wijmo_webcomponents_base_1.WjComponentBehavior.getProps(this)}connectedCallback(){this._wjBehaviour.lhConnected()}attributeChangedCallback(e,t,o){this._wjBehaviour.lhAttributeChanged(e,t,o)}disconnectedCallback(){this._wjBehaviour.lhDisconnected()}addEventListener(...e){"string"==typeof e[0]?HTMLElement.prototype.addEventListener.apply(this,e):super.addEventListener.apply(this,e)}}exports.WjcPivotPanel=WjcPivotPanel,_wj_ns_exists_16&&(wijmo_webcomponents_base_1.WjComponentBehavior.register("",wjcOlap._ListContextMenu),wijmo_webcomponents_base_1.WjComponentBehavior.register("wjc-pivot-panel",WjcPivotPanel));class WjcSlicer extends wjcOlap.Slicer{constructor(){super(document.createElement("div")),this._wjBehaviour=wijmo_webcomponents_base_1.WjComponentBehavior._attach(this)}static get observedAttributes(){return wijmo_webcomponents_base_1.WjComponentBehavior.getProps(this)}connectedCallback(){this._wjBehaviour.lhConnected()}attributeChangedCallback(e,t,o){this._wjBehaviour.lhAttributeChanged(e,t,o)}disconnectedCallback(){this._wjBehaviour.lhDisconnected()}addEventListener(...e){"string"==typeof e[0]?HTMLElement.prototype.addEventListener.apply(this,e):super.addEventListener.apply(this,e)}}exports.WjcSlicer=WjcSlicer,_wj_ns_exists_16&&wijmo_webcomponents_base_1.WjComponentBehavior.register("wjc-slicer",WjcSlicer);