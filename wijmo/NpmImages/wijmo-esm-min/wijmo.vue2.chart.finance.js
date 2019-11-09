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

var __extends=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function i(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}();import{WjComponentBehavior}from"wijmo/wijmo.vue2.base";import*as VueModule from"vue";import*as wjcChartFinance from"wijmo/wijmo.chart.finance";import VueModuleDefault from"vue";export var Vue=VueModuleDefault||VueModule;var WjFinancialChartBehavior=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype._updateControl=function(t,n){switch(t){case"tooltipContent":this.control.tooltip.content=n;break;case"labelContent":this.control.dataLabel.content=n;break;default:e.prototype._updateControl.call(this,t,n)}},t.tag="wj-financial-chart",t.props=["control","isDisabled","binding","footer","header","selectionMode","palette","plotMargin","footerStyle","headerStyle","tooltipContent","itemsSource","bindingX","interpolateNulls","legendToggle","symbolSize","options","selection","itemFormatter","labelContent","chartType"],t.events=["initialized","gotFocus","lostFocus","refreshing","refreshed","rendering","rendered","itemsSourceChanging","itemsSourceChanged","seriesVisibilityChanged"],t.changeEvents={selectionChanged:["selection"]},t.classCtor=function(){return wjcChartFinance.FinancialChart},t}(WjComponentBehavior);export var WjFinancialChart=WjFinancialChartBehavior.register();var WjFinancialChartSeriesBehavior=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.tag="wj-financial-chart-series",t.parentProp="series",t.siblingId="series",t.props=["wjProperty","control","axisX","axisY","binding","bindingX","cssClass","name","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","chartType"],t.events=["initialized","rendering","rendered"],t.changeEvents={"chart.seriesVisibilityChanged":["visibility"]},t.classCtor=function(){return wjcChartFinance.FinancialSeries},t}(WjComponentBehavior);export var WjFinancialChartSeries=WjFinancialChartSeriesBehavior.register();