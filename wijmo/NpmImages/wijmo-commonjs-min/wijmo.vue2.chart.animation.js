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

"use strict";var __extends=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(exports,"__esModule",{value:!0});var wijmo_vue2_base_1=require("wijmo/wijmo.vue2.base"),VueModule=require("vue"),wjcChartAnimation=require("wijmo/wijmo.chart.animation"),vue_1=require("vue");exports.Vue=vue_1.default||VueModule;var WjFlexChartAnimationBehavior=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),e.tag="wj-flex-chart-animation",e.parentInCtor=!0,e.props=["control","animationMode","easing","duration","axisAnimation"],e.events=["initialized"],e.classCtor=function(){return wjcChartAnimation.ChartAnimation},e}(wijmo_vue2_base_1.WjComponentBehavior);exports.WjFlexChartAnimation=WjFlexChartAnimationBehavior.register();