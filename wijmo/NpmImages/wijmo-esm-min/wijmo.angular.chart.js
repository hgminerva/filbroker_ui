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

var __extends=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(e,r)};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();import{WjDirective,MetaFactory,_registerNgModule,softRefChart}from"wijmo/wijmo.angular.base";import*as mNg from"angular";import*as wjcChart from"wijmo/wijmo.chart";var wjNg=mNg,wijmoChartName="wj.chart";export var ngModuleName=wijmoChartName;var wijmoChart=_registerNgModule(wijmoChartName);softRefChart()&&softRefChart().FlexChart&&(wijmoChart.directive("wjFlexChart",[function(){return new WjFlexChart}]),wijmoChart.directive("wjFlexChartAxis",[function(){return new WjFlexChartAxis}]),wijmoChart.directive("wjFlexChartSeries",[function(){return new WjFlexChartSeries}]),wijmoChart.directive("wjFlexChartLegend",[function(){return new WjFlexChartLegend}]),wijmoChart.directive("wjFlexChartDataLabel",[function(){return new WjFlexChartDataLabel}]),wijmoChart.directive("wjFlexPieDataLabel",[function(){return new WjFlexPieDataLabel}]),wijmoChart.directive("wjFlexChartLineMarker",[function(){return new WjFlexChartLineMarker}]),wijmoChart.directive("wjFlexChartPlotArea",[function(){return new WjFlexChartPlotArea}]),wijmoChart.directive("wjFlexChartDataPoint",[function(){return new WjFlexChartDataPoint}]),wijmoChart.directive("wjFlexPie",[function(){return new WjFlexPie}]));var WjFlexChartBase=function(t){function e(){var e=t.call(this)||this;return e.template="<div ng-transclude />",e.transclude=!0,e}return __extends(e,t),Object.defineProperty(e.prototype,"_controlConstructor",{get:function(){return wjcChart.FlexChartBase},enumerable:!0,configurable:!0}),e.prototype._initProps=function(){t.prototype._initProps.call(this);MetaFactory.findProp("tooltipContent",this._props).customHandler=function(t,e,r,n,a){null!=r&&(e.tooltip.content=r)}},e}(WjDirective);export{WjFlexChartBase};var WjFlexChartCore=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),Object.defineProperty(e.prototype,"_controlConstructor",{get:function(){return wjcChart.FlexChartCore},enumerable:!0,configurable:!0}),e.prototype._initProps=function(){t.prototype._initProps.call(this);MetaFactory.findProp("labelContent",this._props).customHandler=function(t,e,r,n,a){null!=r&&(e.dataLabel.content=r)}},e}(WjFlexChartBase);export{WjFlexChartCore};var WjFlexChart=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),Object.defineProperty(e.prototype,"_controlConstructor",{get:function(){return wjcChart.FlexChart},enumerable:!0,configurable:!0}),e}(WjFlexChartCore);export{WjFlexChart};var WjFlexChartAxis=function(t){function e(){var e=t.call(this)||this;return e.require=["?^wjFlexChartSeries","?^wjFinancialChartSeries","?^wjFlexChart","?^wjFinancialChart","?^wjFlexRadar"],e.template='<div class="wjFlexChartAxis" />',e}return __extends(e,t),Object.defineProperty(e.prototype,"_controlConstructor",{get:function(){return wjcChart.Axis},enumerable:!0,configurable:!0}),e.prototype._initControl=function(e){return t.prototype._initControl.call(this,void 0)},e}(WjDirective);export{WjFlexChartAxis};var WjFlexChartLegend=function(t){function e(){var e=t.call(this)||this;return e.require=["?^wjFlexChart","?^wjFlexPie","?^wjSunburst","?^wjFinancialChart","?^wjFlexRadar"],e.template="<div />",e}return __extends(e,t),Object.defineProperty(e.prototype,"_controlConstructor",{get:function(){return wjcChart.Legend},enumerable:!0,configurable:!0}),e}(WjDirective);export{WjFlexChartLegend};var WjFlexChartDataLabelBase=function(t){function e(){var e=t.call(this)||this;return e.require=["?^wjFlexChart","?^wjFlexPie","?^wjSunburst","?^wjTreeMap"],e.template="<div />",e}return __extends(e,t),Object.defineProperty(e.prototype,"_controlConstructor",{get:function(){return wjcChart.DataLabelBase},enumerable:!0,configurable:!0}),e}(WjDirective);export{WjFlexChartDataLabelBase};var WjFlexChartDataLabel=function(t){function e(){var e=t.call(this)||this;return e.require=["^wjFlexChart","?^wjTreeMap"],e}return __extends(e,t),Object.defineProperty(e.prototype,"_controlConstructor",{get:function(){return wjcChart.DataLabel},enumerable:!0,configurable:!0}),e}(WjFlexChartDataLabelBase);export{WjFlexChartDataLabel};var WjFlexPieDataLabel=function(t){function e(){var e=t.call(this)||this;return e.require=["^wjFlexPie","?^wjSunburst"],e}return __extends(e,t),Object.defineProperty(e.prototype,"_controlConstructor",{get:function(){return wjcChart.PieDataLabel},enumerable:!0,configurable:!0}),e}(WjFlexChartDataLabelBase);export{WjFlexPieDataLabel};var WjSeriesBase=function(t){function e(){var e=t.call(this)||this;return e.require=["?^wjFlexChart","?^wjFinancialChart","?^wjFlexRadar"],e.template='<div class="wjSeriesBase" ng-transclude />',e.transclude=!0,e}return __extends(e,t),Object.defineProperty(e.prototype,"_controlConstructor",{get:function(){return wjcChart.SeriesBase},enumerable:!0,configurable:!0}),e.prototype._initControl=function(e){return t.prototype._initControl.call(this,void 0)},e.prototype._getId=function(){return"series"},e}(WjDirective);export{WjSeriesBase};var WjFlexChartSeries=function(t){function e(){var e=t.call(this)||this;return e.require="^wjFlexChart",e.template='<div class="wjFlexChartSeries" ng-transclude />',e}return __extends(e,t),Object.defineProperty(e.prototype,"_controlConstructor",{get:function(){return wjcChart.Series},enumerable:!0,configurable:!0}),e}(WjSeriesBase);export{WjFlexChartSeries};var WjFlexChartLineMarker=function(t){function e(){var e=t.call(this)||this;return e.require=["?^wjFlexChart","?^wjFinancialChart"],e}return __extends(e,t),Object.defineProperty(e.prototype,"_controlConstructor",{get:function(){return wjcChart.LineMarker},enumerable:!0,configurable:!0}),e}(WjDirective);export{WjFlexChartLineMarker};var WjFlexChartDataPoint=function(t){function e(){var e=t.call(this)||this;return e.require=["?^wjFlexChartAnnotation"],e}return __extends(e,t),Object.defineProperty(e.prototype,"_controlConstructor",{get:function(){return wjcChart.DataPoint},enumerable:!0,configurable:!0}),e}(WjDirective);export{WjFlexChartDataPoint};var WjFlexPie=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),Object.defineProperty(e.prototype,"_controlConstructor",{get:function(){return wjcChart.FlexPie},enumerable:!0,configurable:!0}),e.prototype._initProps=function(){t.prototype._initProps.call(this);MetaFactory.findProp("labelContent",this._props).customHandler=function(t,e,r,n,a){null!=r&&(e.dataLabel.content=r)}},e}(WjFlexChartBase);export{WjFlexPie};var WjFlexChartPlotArea=function(t){function e(){var e=t.call(this)||this;return e.require=["?^wjFlexChartPlotArea","?^wjFlexChart","?^wjFinancialChart"],e.template='<div class="wjFlexChartPlotArea" />',e}return __extends(e,t),Object.defineProperty(e.prototype,"_controlConstructor",{get:function(){return wjcChart.PlotArea},enumerable:!0,configurable:!0}),e.prototype._initControl=function(e){return t.prototype._initControl.call(this,void 0)},e}(WjDirective);export{WjFlexChartPlotArea};