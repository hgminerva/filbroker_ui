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

var __extends=this&&this.__extends||function(){var e=function(i,t){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,i){e.__proto__=i}||function(e,i){for(var t in i)i.hasOwnProperty(t)&&(e[t]=i[t])})(i,t)};return function(i,t){function r(){this.constructor=i}e(i,t),i.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}();import{WjComponentBehavior}from"wijmo/wijmo.vue2.base";import*as VueModule from"vue";import*as wjcChartFinanceAnalytics from"wijmo/wijmo.chart.finance.analytics";import VueModuleDefault from"vue";export var Vue=VueModuleDefault||VueModule;var WjFlexChartFibonacciBehavior=function(e){function i(){return null!==e&&e.apply(this,arguments)||this}return __extends(i,e),i.tag="wj-flex-chart-fibonacci",i.parentProp="series",i.siblingId="series",i.props=["wjProperty","control","axisX","axisY","binding","bindingX","cssClass","name","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","high","low","labelPosition","levels","minX","maxX","uptrend"],i.events=["initialized","rendering","rendered"],i.changeEvents={"chart.seriesVisibilityChanged":["visibility"]},i.classCtor=function(){return wjcChartFinanceAnalytics.Fibonacci},i}(WjComponentBehavior);export var WjFlexChartFibonacci=WjFlexChartFibonacciBehavior.register();var WjFlexChartFibonacciArcsBehavior=function(e){function i(){return null!==e&&e.apply(this,arguments)||this}return __extends(i,e),i.tag="wj-flex-chart-fibonacci-arcs",i.parentProp="series",i.siblingId="series",i.props=["wjProperty","control","axisX","axisY","binding","bindingX","cssClass","name","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","start","end","labelPosition","levels"],i.events=["initialized","rendering","rendered"],i.changeEvents={"chart.seriesVisibilityChanged":["visibility"]},i.classCtor=function(){return wjcChartFinanceAnalytics.FibonacciArcs},i}(WjComponentBehavior);export var WjFlexChartFibonacciArcs=WjFlexChartFibonacciArcsBehavior.register();var WjFlexChartFibonacciFansBehavior=function(e){function i(){return null!==e&&e.apply(this,arguments)||this}return __extends(i,e),i.tag="wj-flex-chart-fibonacci-fans",i.parentProp="series",i.siblingId="series",i.props=["wjProperty","control","axisX","axisY","binding","bindingX","cssClass","name","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","start","end","labelPosition","levels"],i.events=["initialized","rendering","rendered"],i.changeEvents={"chart.seriesVisibilityChanged":["visibility"]},i.classCtor=function(){return wjcChartFinanceAnalytics.FibonacciFans},i}(WjComponentBehavior);export var WjFlexChartFibonacciFans=WjFlexChartFibonacciFansBehavior.register();var WjFlexChartFibonacciTimeZonesBehavior=function(e){function i(){return null!==e&&e.apply(this,arguments)||this}return __extends(i,e),i.tag="wj-flex-chart-fibonacci-time-zones",i.parentProp="series",i.siblingId="series",i.props=["wjProperty","control","axisX","axisY","binding","bindingX","cssClass","name","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","startX","endX","labelPosition","levels"],i.events=["initialized","rendering","rendered"],i.changeEvents={"chart.seriesVisibilityChanged":["visibility"]},i.classCtor=function(){return wjcChartFinanceAnalytics.FibonacciTimeZones},i}(WjComponentBehavior);export var WjFlexChartFibonacciTimeZones=WjFlexChartFibonacciTimeZonesBehavior.register();var WjFlexChartAtrBehavior=function(e){function i(){return null!==e&&e.apply(this,arguments)||this}return __extends(i,e),i.tag="wj-flex-chart-atr",i.parentProp="series",i.siblingId="series",i.props=["wjProperty","control","axisX","axisY","binding","bindingX","cssClass","name","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","period"],i.events=["initialized","rendering","rendered"],i.changeEvents={"chart.seriesVisibilityChanged":["visibility"]},i.classCtor=function(){return wjcChartFinanceAnalytics.ATR},i}(WjComponentBehavior);export var WjFlexChartAtr=WjFlexChartAtrBehavior.register();var WjFlexChartCciBehavior=function(e){function i(){return null!==e&&e.apply(this,arguments)||this}return __extends(i,e),i.tag="wj-flex-chart-cci",i.parentProp="series",i.siblingId="series",i.props=["wjProperty","control","axisX","axisY","binding","bindingX","cssClass","name","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","period","constant"],i.events=["initialized","rendering","rendered"],i.changeEvents={"chart.seriesVisibilityChanged":["visibility"]},i.classCtor=function(){return wjcChartFinanceAnalytics.CCI},i}(WjComponentBehavior);export var WjFlexChartCci=WjFlexChartCciBehavior.register();var WjFlexChartRsiBehavior=function(e){function i(){return null!==e&&e.apply(this,arguments)||this}return __extends(i,e),i.tag="wj-flex-chart-rsi",i.parentProp="series",i.siblingId="series",i.props=["wjProperty","control","axisX","axisY","binding","bindingX","cssClass","name","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","period"],i.events=["initialized","rendering","rendered"],i.changeEvents={"chart.seriesVisibilityChanged":["visibility"]},i.classCtor=function(){return wjcChartFinanceAnalytics.RSI},i}(WjComponentBehavior);export var WjFlexChartRsi=WjFlexChartRsiBehavior.register();var WjFlexChartWilliamsRBehavior=function(e){function i(){return null!==e&&e.apply(this,arguments)||this}return __extends(i,e),i.tag="wj-flex-chart-williams-r",i.parentProp="series",i.siblingId="series",i.props=["wjProperty","control","axisX","axisY","binding","bindingX","cssClass","name","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","period"],i.events=["initialized","rendering","rendered"],i.changeEvents={"chart.seriesVisibilityChanged":["visibility"]},i.classCtor=function(){return wjcChartFinanceAnalytics.WilliamsR},i}(WjComponentBehavior);export var WjFlexChartWilliamsR=WjFlexChartWilliamsRBehavior.register();var WjFlexChartMacdBehavior=function(e){function i(){return null!==e&&e.apply(this,arguments)||this}return __extends(i,e),i.tag="wj-flex-chart-macd",i.parentProp="series",i.siblingId="series",i.props=["wjProperty","control","axisX","axisY","binding","bindingX","cssClass","name","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","fastPeriod","slowPeriod","smoothingPeriod","styles"],i.events=["initialized","rendering","rendered"],i.changeEvents={"chart.seriesVisibilityChanged":["visibility"]},i.classCtor=function(){return wjcChartFinanceAnalytics.Macd},i}(WjComponentBehavior);export var WjFlexChartMacd=WjFlexChartMacdBehavior.register();var WjFlexChartMacdHistogramBehavior=function(e){function i(){return null!==e&&e.apply(this,arguments)||this}return __extends(i,e),i.tag="wj-flex-chart-macd-histogram",i.parentProp="series",i.siblingId="series",i.props=["wjProperty","control","axisX","axisY","binding","bindingX","cssClass","name","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","fastPeriod","slowPeriod","smoothingPeriod"],i.events=["initialized","rendering","rendered"],i.changeEvents={"chart.seriesVisibilityChanged":["visibility"]},i.classCtor=function(){return wjcChartFinanceAnalytics.MacdHistogram},i}(WjComponentBehavior);export var WjFlexChartMacdHistogram=WjFlexChartMacdHistogramBehavior.register();var WjFlexChartStochasticBehavior=function(e){function i(){return null!==e&&e.apply(this,arguments)||this}return __extends(i,e),i.tag="wj-flex-chart-stochastic",i.parentProp="series",i.siblingId="series",i.props=["wjProperty","control","axisX","axisY","binding","bindingX","cssClass","name","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","dPeriod","kPeriod","smoothingPeriod","styles"],i.events=["initialized","rendering","rendered"],i.changeEvents={"chart.seriesVisibilityChanged":["visibility"]},i.classCtor=function(){return wjcChartFinanceAnalytics.Stochastic},i}(WjComponentBehavior);export var WjFlexChartStochastic=WjFlexChartStochasticBehavior.register();var WjFlexChartBollingerBandsBehavior=function(e){function i(){return null!==e&&e.apply(this,arguments)||this}return __extends(i,e),i.tag="wj-flex-chart-bollinger-bands",i.parentProp="series",i.siblingId="series",i.props=["wjProperty","control","axisX","axisY","binding","bindingX","cssClass","name","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","period","multiplier"],i.events=["initialized","rendering","rendered"],i.changeEvents={"chart.seriesVisibilityChanged":["visibility"]},i.classCtor=function(){return wjcChartFinanceAnalytics.BollingerBands},i}(WjComponentBehavior);export var WjFlexChartBollingerBands=WjFlexChartBollingerBandsBehavior.register();var WjFlexChartEnvelopesBehavior=function(e){function i(){return null!==e&&e.apply(this,arguments)||this}return __extends(i,e),i.tag="wj-flex-chart-envelopes",i.parentProp="series",i.siblingId="series",i.props=["wjProperty","control","axisX","axisY","binding","bindingX","cssClass","name","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","period","size","type"],i.events=["initialized","rendering","rendered"],i.changeEvents={"chart.seriesVisibilityChanged":["visibility"]},i.classCtor=function(){return wjcChartFinanceAnalytics.Envelopes},i}(WjComponentBehavior);export var WjFlexChartEnvelopes=WjFlexChartEnvelopesBehavior.register();