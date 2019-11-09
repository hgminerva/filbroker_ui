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

"use strict";var __extends=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(exports,"__esModule",{value:!0});var wijmo_knockout_base_1=require("wijmo/wijmo.knockout.base"),wijmo_knockout_chart_1=require("wijmo/wijmo.knockout.chart"),mKo=require("knockout"),wjcChartAnal=require("wijmo/wijmo.chart.analytics"),wjKo=mKo,WjTrendLineBase=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype._getControlConstructor=function(){return wjcChartAnal.TrendLineBase},t}(wijmo_knockout_chart_1.WjSeriesBase);exports.WjTrendLineBase=WjTrendLineBase;var wjFlexChartTrendLine=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype._getControlConstructor=function(){return wjcChartAnal.TrendLine},t}(WjTrendLineBase);exports.wjFlexChartTrendLine=wjFlexChartTrendLine;var wjFlexChartMovingAverage=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype._getControlConstructor=function(){return wjcChartAnal.MovingAverage},t}(WjTrendLineBase);exports.wjFlexChartMovingAverage=wjFlexChartMovingAverage;var wjFlexChartYFunctionSeries=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype._getControlConstructor=function(){return wjcChartAnal.YFunctionSeries},t}(WjTrendLineBase);exports.wjFlexChartYFunctionSeries=wjFlexChartYFunctionSeries;var wjFlexChartParametricFunctionSeries=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype._getControlConstructor=function(){return wjcChartAnal.ParametricFunctionSeries},t.prototype._initialize=function(){e.prototype._initialize.call(this),wijmo_knockout_base_1.MetaFactory.findProp("func",this._metaData.props).updateControl=function(e,t,n,r,o){return null!=o&&(n.xFunc=o),!0}},t}(WjTrendLineBase);exports.wjFlexChartParametricFunctionSeries=wjFlexChartParametricFunctionSeries;var wjFlexChartWaterfall=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype._getControlConstructor=function(){return wjcChartAnal.Waterfall},t}(wijmo_knockout_chart_1.WjSeriesBase);exports.wjFlexChartWaterfall=wjFlexChartWaterfall,wjKo.bindingHandlers.wjFlexChartTrendLine=new wjFlexChartTrendLine,wjKo.bindingHandlers.wjFlexChartMovingAverage=new wjFlexChartMovingAverage,wjKo.bindingHandlers.wjFlexChartYFunctionSeries=new wjFlexChartYFunctionSeries,wjKo.bindingHandlers.wjFlexChartParametricFunctionSeries=new wjFlexChartParametricFunctionSeries,wjKo.bindingHandlers.wjFlexChartWaterfall=new wjFlexChartWaterfall;