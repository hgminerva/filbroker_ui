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

var __extends=this&&this.__extends||function(){var e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(t,r)};return function(t,r){function i(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(i.prototype=r.prototype,new i)}}();import{WjComponentBehavior}from"wijmo/wijmo.vue2.base";import*as VueModule from"vue";import*as wjcChartAnalytics from"wijmo/wijmo.chart.analytics";import VueModuleDefault from"vue";export var Vue=VueModuleDefault||VueModule;var WjFlexChartTrendLineBehavior=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.tag="wj-flex-chart-trend-line",t.parentProp="series",t.siblingId="series",t.props=["wjProperty","control","axisX","axisY","binding","bindingX","cssClass","name","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","sampleCount","order","fitType"],t.events=["initialized","rendering","rendered"],t.changeEvents={"chart.seriesVisibilityChanged":["visibility"]},t.classCtor=function(){return wjcChartAnalytics.TrendLine},t}(WjComponentBehavior);export var WjFlexChartTrendLine=WjFlexChartTrendLineBehavior.register();var WjFlexChartMovingAverageBehavior=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.tag="wj-flex-chart-moving-average",t.parentProp="series",t.siblingId="series",t.props=["wjProperty","control","axisX","axisY","binding","bindingX","cssClass","name","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","sampleCount","period","type"],t.events=["initialized","rendering","rendered"],t.changeEvents={"chart.seriesVisibilityChanged":["visibility"]},t.classCtor=function(){return wjcChartAnalytics.MovingAverage},t}(WjComponentBehavior);export var WjFlexChartMovingAverage=WjFlexChartMovingAverageBehavior.register();var WjFlexChartYFunctionSeriesBehavior=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.tag="wj-flex-chart-y-function-series",t.parentProp="series",t.siblingId="series",t.props=["wjProperty","control","axisX","axisY","binding","bindingX","cssClass","name","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","sampleCount","min","max","func"],t.events=["initialized","rendering","rendered"],t.changeEvents={"chart.seriesVisibilityChanged":["visibility"]},t.classCtor=function(){return wjcChartAnalytics.YFunctionSeries},t}(WjComponentBehavior);export var WjFlexChartYFunctionSeries=WjFlexChartYFunctionSeriesBehavior.register();var WjFlexChartParametricFunctionSeriesBehavior=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.tag="wj-flex-chart-parametric-function-series",t.parentProp="series",t.siblingId="series",t.props=["wjProperty","control","axisX","axisY","binding","bindingX","cssClass","name","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","sampleCount","min","max","func","xFunc","yFunc"],t.events=["initialized","rendering","rendered"],t.changeEvents={"chart.seriesVisibilityChanged":["visibility"]},t.classCtor=function(){return wjcChartAnalytics.ParametricFunctionSeries},t}(WjComponentBehavior);export var WjFlexChartParametricFunctionSeries=WjFlexChartParametricFunctionSeriesBehavior.register();var WjFlexChartWaterfallBehavior=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.tag="wj-flex-chart-waterfall",t.parentProp="series",t.siblingId="series",t.props=["wjProperty","control","axisX","axisY","binding","bindingX","cssClass","name","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","relativeData","start","startLabel","showTotal","totalLabel","showIntermediateTotal","intermediateTotalPositions","intermediateTotalLabels","connectorLines","styles"],t.events=["initialized","rendering","rendered"],t.changeEvents={"chart.seriesVisibilityChanged":["visibility"]},t.classCtor=function(){return wjcChartAnalytics.Waterfall},t}(WjComponentBehavior);export var WjFlexChartWaterfall=WjFlexChartWaterfallBehavior.register();var WjFlexChartBoxWhiskerBehavior=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.tag="wj-flex-chart-box-whisker",t.parentProp="series",t.siblingId="series",t.props=["wjProperty","control","axisX","axisY","binding","bindingX","cssClass","name","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","quartileCalculation","groupWidth","gapWidth","showMeanLine","meanLineStyle","showMeanMarker","meanMarkerStyle","showInnerPoints","showOutliers"],t.events=["initialized","rendering","rendered"],t.changeEvents={"chart.seriesVisibilityChanged":["visibility"]},t.classCtor=function(){return wjcChartAnalytics.BoxWhisker},t}(WjComponentBehavior);export var WjFlexChartBoxWhisker=WjFlexChartBoxWhiskerBehavior.register();var WjFlexChartErrorBarBehavior=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.tag="wj-flex-chart-error-bar",t.parentProp="series",t.siblingId="series",t.props=["wjProperty","control","axisX","axisY","binding","bindingX","cssClass","name","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","chartType","errorBarStyle","value","errorAmount","endStyle","direction"],t.events=["initialized","rendering","rendered"],t.changeEvents={"chart.seriesVisibilityChanged":["visibility"]},t.classCtor=function(){return wjcChartAnalytics.ErrorBar},t}(WjComponentBehavior);export var WjFlexChartErrorBar=WjFlexChartErrorBarBehavior.register();