/*!
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

var __extends=this&&this.__extends||function(){var e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(t,r)};return function(t,r){function o(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)}}();import{WjComponentBehavior}from"wijmo/wijmo.vue2.base";import*as VueModule from"vue";import*as wjcChartInteraction from"wijmo/wijmo.chart.interaction";import VueModuleDefault from"vue";export var Vue=VueModuleDefault||VueModule;var WjFlexChartRangeSelectorBehavior=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.tag="wj-flex-chart-range-selector",t.parentInCtor=!0,t.props=["control","isVisible","min","max","orientation","seamless","minScale","maxScale"],t.events=["initialized","rangeChanged"],t.classCtor=function(){return wjcChartInteraction.RangeSelector},t}(WjComponentBehavior);export var WjFlexChartRangeSelector=WjFlexChartRangeSelectorBehavior.register();var WjFlexChartGesturesBehavior=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.tag="wj-flex-chart-gestures",t.parentInCtor=!0,t.props=["control","mouseAction","interactiveAxes","enable","scaleX","scaleY","posX","posY"],t.events=["initialized"],t.classCtor=function(){return wjcChartInteraction.ChartGestures},t}(WjComponentBehavior);export var WjFlexChartGestures=WjFlexChartGesturesBehavior.register();