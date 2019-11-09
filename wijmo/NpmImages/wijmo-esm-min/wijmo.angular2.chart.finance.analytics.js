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

var __extends=this&&this.__extends||function(){var e=function(t,i){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i])})(t,i)};return function(t,i){function r(){this.constructor=t}e(t,i),t.prototype=null===i?Object.create(i):(r.prototype=i.prototype,new r)}}(),__decorate=this&&this.__decorate||function(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o},__param=this&&this.__param||function(e,t){return function(i,r){t(i,r,e)}};import{Component,NgModule,ElementRef,Injector,Optional,forwardRef,Inject,SkipSelf}from"@angular/core";import{CommonModule}from"@angular/common";import{WjDirectiveBehavior,WjDirectiveBaseModule}from"wijmo/wijmo.angular2.directiveBase";import*as wjcChartFinanceAnalytics from"wijmo/wijmo.chart.finance.analytics";export var wjFlexChartFibonacciMeta={selector:"wj-flex-chart-fibonacci",template:"",inputs:["asyncBindings","wjProperty","axisX","axisY","binding","bindingX","cssClass","name","style","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","high","low","labelPosition","levels","minX","maxX","uptrend"],outputs:["initialized","renderingNg: rendering","renderedNg: rendered","visibilityChangePC: visibilityChange"],providers:[]};var WjFlexChartFibonacci=function(e){function t(t,i,r){var n=e.call(this)||this;n.isInitialized=!1,n.wjProperty="series";n._wjBehaviour=WjDirectiveBehavior.attach(n,t,i,r);return n.created(),n}var i;return __extends(t,e),i=t,t.prototype.created=function(){},t.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},t.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},t.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},t.meta={outputs:wjFlexChartFibonacciMeta.outputs,changeEvents:{"chart.seriesVisibilityChanged":["visibility"]},siblingId:"series"},t=i=__decorate([Component({selector:wjFlexChartFibonacciMeta.selector,template:wjFlexChartFibonacciMeta.template,inputs:wjFlexChartFibonacciMeta.inputs,outputs:wjFlexChartFibonacciMeta.outputs,providers:[{provide:"WjComponent",useExisting:forwardRef(function(){return i})}].concat(wjFlexChartFibonacciMeta.providers)}),__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],t)}(wjcChartFinanceAnalytics.Fibonacci);export{WjFlexChartFibonacci};export var wjFlexChartFibonacciArcsMeta={selector:"wj-flex-chart-fibonacci-arcs",template:"",inputs:["asyncBindings","wjProperty","axisX","axisY","binding","bindingX","cssClass","name","style","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","start","end","labelPosition","levels"],outputs:["initialized","renderingNg: rendering","renderedNg: rendered","visibilityChangePC: visibilityChange"],providers:[]};var WjFlexChartFibonacciArcs=function(e){function t(t,i,r){var n=e.call(this)||this;n.isInitialized=!1,n.wjProperty="series";n._wjBehaviour=WjDirectiveBehavior.attach(n,t,i,r);return n.created(),n}var i;return __extends(t,e),i=t,t.prototype.created=function(){},t.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},t.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},t.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},t.meta={outputs:wjFlexChartFibonacciArcsMeta.outputs,changeEvents:{"chart.seriesVisibilityChanged":["visibility"]},siblingId:"series"},t=i=__decorate([Component({selector:wjFlexChartFibonacciArcsMeta.selector,template:wjFlexChartFibonacciArcsMeta.template,inputs:wjFlexChartFibonacciArcsMeta.inputs,outputs:wjFlexChartFibonacciArcsMeta.outputs,providers:[{provide:"WjComponent",useExisting:forwardRef(function(){return i})}].concat(wjFlexChartFibonacciArcsMeta.providers)}),__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],t)}(wjcChartFinanceAnalytics.FibonacciArcs);export{WjFlexChartFibonacciArcs};export var wjFlexChartFibonacciFansMeta={selector:"wj-flex-chart-fibonacci-fans",template:"",inputs:["asyncBindings","wjProperty","axisX","axisY","binding","bindingX","cssClass","name","style","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","start","end","labelPosition","levels"],outputs:["initialized","renderingNg: rendering","renderedNg: rendered","visibilityChangePC: visibilityChange"],providers:[]};var WjFlexChartFibonacciFans=function(e){function t(t,i,r){var n=e.call(this)||this;n.isInitialized=!1,n.wjProperty="series";n._wjBehaviour=WjDirectiveBehavior.attach(n,t,i,r);return n.created(),n}var i;return __extends(t,e),i=t,t.prototype.created=function(){},t.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},t.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},t.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},t.meta={outputs:wjFlexChartFibonacciFansMeta.outputs,changeEvents:{"chart.seriesVisibilityChanged":["visibility"]},siblingId:"series"},t=i=__decorate([Component({selector:wjFlexChartFibonacciFansMeta.selector,template:wjFlexChartFibonacciFansMeta.template,inputs:wjFlexChartFibonacciFansMeta.inputs,outputs:wjFlexChartFibonacciFansMeta.outputs,providers:[{provide:"WjComponent",useExisting:forwardRef(function(){return i})}].concat(wjFlexChartFibonacciFansMeta.providers)}),__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],t)}(wjcChartFinanceAnalytics.FibonacciFans);export{WjFlexChartFibonacciFans};export var wjFlexChartFibonacciTimeZonesMeta={selector:"wj-flex-chart-fibonacci-time-zones",template:"",inputs:["asyncBindings","wjProperty","axisX","axisY","binding","bindingX","cssClass","name","style","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","startX","endX","labelPosition","levels"],outputs:["initialized","renderingNg: rendering","renderedNg: rendered","visibilityChangePC: visibilityChange"],providers:[]};var WjFlexChartFibonacciTimeZones=function(e){function t(t,i,r){var n=e.call(this)||this;n.isInitialized=!1,n.wjProperty="series";n._wjBehaviour=WjDirectiveBehavior.attach(n,t,i,r);return n.created(),n}var i;return __extends(t,e),i=t,t.prototype.created=function(){},t.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},t.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},t.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},t.meta={outputs:wjFlexChartFibonacciTimeZonesMeta.outputs,changeEvents:{"chart.seriesVisibilityChanged":["visibility"]},siblingId:"series"},t=i=__decorate([Component({selector:wjFlexChartFibonacciTimeZonesMeta.selector,template:wjFlexChartFibonacciTimeZonesMeta.template,inputs:wjFlexChartFibonacciTimeZonesMeta.inputs,outputs:wjFlexChartFibonacciTimeZonesMeta.outputs,providers:[{provide:"WjComponent",useExisting:forwardRef(function(){return i})}].concat(wjFlexChartFibonacciTimeZonesMeta.providers)}),__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],t)}(wjcChartFinanceAnalytics.FibonacciTimeZones);export{WjFlexChartFibonacciTimeZones};export var wjFlexChartAtrMeta={selector:"wj-flex-chart-atr",template:"",inputs:["asyncBindings","wjProperty","axisX","axisY","binding","bindingX","cssClass","name","style","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","period"],outputs:["initialized","renderingNg: rendering","renderedNg: rendered","visibilityChangePC: visibilityChange"],providers:[]};var WjFlexChartAtr=function(e){function t(t,i,r){var n=e.call(this)||this;n.isInitialized=!1,n.wjProperty="series";n._wjBehaviour=WjDirectiveBehavior.attach(n,t,i,r);return n.created(),n}var i;return __extends(t,e),i=t,t.prototype.created=function(){},t.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},t.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},t.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},t.meta={outputs:wjFlexChartAtrMeta.outputs,changeEvents:{"chart.seriesVisibilityChanged":["visibility"]},siblingId:"series"},t=i=__decorate([Component({selector:wjFlexChartAtrMeta.selector,template:wjFlexChartAtrMeta.template,inputs:wjFlexChartAtrMeta.inputs,outputs:wjFlexChartAtrMeta.outputs,providers:[{provide:"WjComponent",useExisting:forwardRef(function(){return i})}].concat(wjFlexChartAtrMeta.providers)}),__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],t)}(wjcChartFinanceAnalytics.ATR);export{WjFlexChartAtr};export var wjFlexChartCciMeta={selector:"wj-flex-chart-cci",template:"",inputs:["asyncBindings","wjProperty","axisX","axisY","binding","bindingX","cssClass","name","style","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","period","constant"],outputs:["initialized","renderingNg: rendering","renderedNg: rendered","visibilityChangePC: visibilityChange"],providers:[]};var WjFlexChartCci=function(e){function t(t,i,r){var n=e.call(this)||this;n.isInitialized=!1,n.wjProperty="series";n._wjBehaviour=WjDirectiveBehavior.attach(n,t,i,r);return n.created(),n}var i;return __extends(t,e),i=t,t.prototype.created=function(){},t.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},t.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},t.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},t.meta={outputs:wjFlexChartCciMeta.outputs,changeEvents:{"chart.seriesVisibilityChanged":["visibility"]},siblingId:"series"},t=i=__decorate([Component({selector:wjFlexChartCciMeta.selector,template:wjFlexChartCciMeta.template,inputs:wjFlexChartCciMeta.inputs,outputs:wjFlexChartCciMeta.outputs,providers:[{provide:"WjComponent",useExisting:forwardRef(function(){return i})}].concat(wjFlexChartCciMeta.providers)}),__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],t)}(wjcChartFinanceAnalytics.CCI);export{WjFlexChartCci};export var wjFlexChartRsiMeta={selector:"wj-flex-chart-rsi",template:"",inputs:["asyncBindings","wjProperty","axisX","axisY","binding","bindingX","cssClass","name","style","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","period"],outputs:["initialized","renderingNg: rendering","renderedNg: rendered","visibilityChangePC: visibilityChange"],providers:[]};var WjFlexChartRsi=function(e){function t(t,i,r){var n=e.call(this)||this;n.isInitialized=!1,n.wjProperty="series";n._wjBehaviour=WjDirectiveBehavior.attach(n,t,i,r);return n.created(),n}var i;return __extends(t,e),i=t,t.prototype.created=function(){},t.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},t.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},t.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},t.meta={outputs:wjFlexChartRsiMeta.outputs,changeEvents:{"chart.seriesVisibilityChanged":["visibility"]},siblingId:"series"},t=i=__decorate([Component({selector:wjFlexChartRsiMeta.selector,template:wjFlexChartRsiMeta.template,inputs:wjFlexChartRsiMeta.inputs,outputs:wjFlexChartRsiMeta.outputs,providers:[{provide:"WjComponent",useExisting:forwardRef(function(){return i})}].concat(wjFlexChartRsiMeta.providers)}),__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],t)}(wjcChartFinanceAnalytics.RSI);export{WjFlexChartRsi};export var wjFlexChartWilliamsRMeta={selector:"wj-flex-chart-williams-r",template:"",inputs:["asyncBindings","wjProperty","axisX","axisY","binding","bindingX","cssClass","name","style","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","period"],outputs:["initialized","renderingNg: rendering","renderedNg: rendered","visibilityChangePC: visibilityChange"],providers:[]};var WjFlexChartWilliamsR=function(e){function t(t,i,r){var n=e.call(this)||this;n.isInitialized=!1,n.wjProperty="series";n._wjBehaviour=WjDirectiveBehavior.attach(n,t,i,r);return n.created(),n}var i;return __extends(t,e),i=t,t.prototype.created=function(){},t.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},t.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},t.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},t.meta={outputs:wjFlexChartWilliamsRMeta.outputs,changeEvents:{"chart.seriesVisibilityChanged":["visibility"]},siblingId:"series"},t=i=__decorate([Component({selector:wjFlexChartWilliamsRMeta.selector,template:wjFlexChartWilliamsRMeta.template,inputs:wjFlexChartWilliamsRMeta.inputs,outputs:wjFlexChartWilliamsRMeta.outputs,providers:[{provide:"WjComponent",useExisting:forwardRef(function(){return i})}].concat(wjFlexChartWilliamsRMeta.providers)}),__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],t)}(wjcChartFinanceAnalytics.WilliamsR);export{WjFlexChartWilliamsR};export var wjFlexChartMacdMeta={selector:"wj-flex-chart-macd",template:"",inputs:["asyncBindings","wjProperty","axisX","axisY","binding","bindingX","cssClass","name","style","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","fastPeriod","slowPeriod","smoothingPeriod","styles"],outputs:["initialized","renderingNg: rendering","renderedNg: rendered","visibilityChangePC: visibilityChange"],providers:[]};var WjFlexChartMacd=function(e){function t(t,i,r){var n=e.call(this)||this;n.isInitialized=!1,n.wjProperty="series";n._wjBehaviour=WjDirectiveBehavior.attach(n,t,i,r);return n.created(),n}var i;return __extends(t,e),i=t,t.prototype.created=function(){},t.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},t.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},t.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},t.meta={outputs:wjFlexChartMacdMeta.outputs,changeEvents:{"chart.seriesVisibilityChanged":["visibility"]},siblingId:"series"},t=i=__decorate([Component({selector:wjFlexChartMacdMeta.selector,template:wjFlexChartMacdMeta.template,inputs:wjFlexChartMacdMeta.inputs,outputs:wjFlexChartMacdMeta.outputs,providers:[{provide:"WjComponent",useExisting:forwardRef(function(){return i})}].concat(wjFlexChartMacdMeta.providers)}),__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],t)}(wjcChartFinanceAnalytics.Macd);export{WjFlexChartMacd};export var wjFlexChartMacdHistogramMeta={selector:"wj-flex-chart-macd-histogram",template:"",inputs:["asyncBindings","wjProperty","axisX","axisY","binding","bindingX","cssClass","name","style","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","fastPeriod","slowPeriod","smoothingPeriod"],outputs:["initialized","renderingNg: rendering","renderedNg: rendered","visibilityChangePC: visibilityChange"],providers:[]};var WjFlexChartMacdHistogram=function(e){function t(t,i,r){var n=e.call(this)||this;n.isInitialized=!1,n.wjProperty="series";n._wjBehaviour=WjDirectiveBehavior.attach(n,t,i,r);return n.created(),n}var i;return __extends(t,e),i=t,t.prototype.created=function(){},t.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},t.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},t.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},t.meta={outputs:wjFlexChartMacdHistogramMeta.outputs,changeEvents:{"chart.seriesVisibilityChanged":["visibility"]},siblingId:"series"},t=i=__decorate([Component({selector:wjFlexChartMacdHistogramMeta.selector,template:wjFlexChartMacdHistogramMeta.template,inputs:wjFlexChartMacdHistogramMeta.inputs,outputs:wjFlexChartMacdHistogramMeta.outputs,providers:[{provide:"WjComponent",useExisting:forwardRef(function(){return i})}].concat(wjFlexChartMacdHistogramMeta.providers)}),__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],t)}(wjcChartFinanceAnalytics.MacdHistogram);export{WjFlexChartMacdHistogram};export var wjFlexChartStochasticMeta={selector:"wj-flex-chart-stochastic",template:"",inputs:["asyncBindings","wjProperty","axisX","axisY","binding","bindingX","cssClass","name","style","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","dPeriod","kPeriod","smoothingPeriod","styles"],outputs:["initialized","renderingNg: rendering","renderedNg: rendered","visibilityChangePC: visibilityChange"],providers:[]};var WjFlexChartStochastic=function(e){function t(t,i,r){var n=e.call(this)||this;n.isInitialized=!1,n.wjProperty="series";n._wjBehaviour=WjDirectiveBehavior.attach(n,t,i,r);return n.created(),n}var i;return __extends(t,e),i=t,t.prototype.created=function(){},t.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},t.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},t.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},t.meta={outputs:wjFlexChartStochasticMeta.outputs,changeEvents:{"chart.seriesVisibilityChanged":["visibility"]},siblingId:"series"},t=i=__decorate([Component({selector:wjFlexChartStochasticMeta.selector,template:wjFlexChartStochasticMeta.template,inputs:wjFlexChartStochasticMeta.inputs,outputs:wjFlexChartStochasticMeta.outputs,providers:[{provide:"WjComponent",useExisting:forwardRef(function(){return i})}].concat(wjFlexChartStochasticMeta.providers)}),__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],t)}(wjcChartFinanceAnalytics.Stochastic);export{WjFlexChartStochastic};export var wjFlexChartBollingerBandsMeta={selector:"wj-flex-chart-bollinger-bands",template:"",inputs:["asyncBindings","wjProperty","axisX","axisY","binding","bindingX","cssClass","name","style","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","period","multiplier"],outputs:["initialized","renderingNg: rendering","renderedNg: rendered","visibilityChangePC: visibilityChange"],providers:[]};var WjFlexChartBollingerBands=function(e){function t(t,i,r){var n=e.call(this)||this;n.isInitialized=!1,n.wjProperty="series";n._wjBehaviour=WjDirectiveBehavior.attach(n,t,i,r);return n.created(),n}var i;return __extends(t,e),i=t,t.prototype.created=function(){},t.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},t.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},t.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},t.meta={outputs:wjFlexChartBollingerBandsMeta.outputs,changeEvents:{"chart.seriesVisibilityChanged":["visibility"]},siblingId:"series"},t=i=__decorate([Component({selector:wjFlexChartBollingerBandsMeta.selector,template:wjFlexChartBollingerBandsMeta.template,inputs:wjFlexChartBollingerBandsMeta.inputs,outputs:wjFlexChartBollingerBandsMeta.outputs,providers:[{provide:"WjComponent",useExisting:forwardRef(function(){return i})}].concat(wjFlexChartBollingerBandsMeta.providers)}),__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],t)}(wjcChartFinanceAnalytics.BollingerBands);export{WjFlexChartBollingerBands};export var wjFlexChartEnvelopesMeta={selector:"wj-flex-chart-envelopes",template:"",inputs:["asyncBindings","wjProperty","axisX","axisY","binding","bindingX","cssClass","name","style","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","period","size","type"],outputs:["initialized","renderingNg: rendering","renderedNg: rendered","visibilityChangePC: visibilityChange"],providers:[]};var WjFlexChartEnvelopes=function(e){function t(t,i,r){var n=e.call(this)||this;n.isInitialized=!1,n.wjProperty="series";n._wjBehaviour=WjDirectiveBehavior.attach(n,t,i,r);return n.created(),n}var i;return __extends(t,e),i=t,t.prototype.created=function(){},t.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},t.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},t.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},t.meta={outputs:wjFlexChartEnvelopesMeta.outputs,changeEvents:{"chart.seriesVisibilityChanged":["visibility"]},siblingId:"series"},t=i=__decorate([Component({selector:wjFlexChartEnvelopesMeta.selector,template:wjFlexChartEnvelopesMeta.template,inputs:wjFlexChartEnvelopesMeta.inputs,outputs:wjFlexChartEnvelopesMeta.outputs,providers:[{provide:"WjComponent",useExisting:forwardRef(function(){return i})}].concat(wjFlexChartEnvelopesMeta.providers)}),__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],t)}(wjcChartFinanceAnalytics.Envelopes);export{WjFlexChartEnvelopes};var moduleExports=[WjFlexChartFibonacci,WjFlexChartFibonacciArcs,WjFlexChartFibonacciFans,WjFlexChartFibonacciTimeZones,WjFlexChartAtr,WjFlexChartCci,WjFlexChartRsi,WjFlexChartWilliamsR,WjFlexChartMacd,WjFlexChartMacdHistogram,WjFlexChartStochastic,WjFlexChartBollingerBands,WjFlexChartEnvelopes],WjChartFinanceAnalyticsModule=function(){function e(){}return e=__decorate([NgModule({imports:[WjDirectiveBaseModule,CommonModule],declarations:moduleExports.slice(),exports:moduleExports.slice()})],e)}();export{WjChartFinanceAnalyticsModule};