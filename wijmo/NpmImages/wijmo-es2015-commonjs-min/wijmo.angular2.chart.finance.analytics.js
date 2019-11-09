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

"use strict";var WjFlexChartFibonacci_1,WjFlexChartFibonacciArcs_1,WjFlexChartFibonacciFans_1,WjFlexChartFibonacciTimeZones_1,WjFlexChartAtr_1,WjFlexChartCci_1,WjFlexChartRsi_1,WjFlexChartWilliamsR_1,WjFlexChartMacd_1,WjFlexChartMacdHistogram_1,WjFlexChartStochastic_1,WjFlexChartBollingerBands_1,WjFlexChartEnvelopes_1,__decorate=this&&this.__decorate||function(e,t,i,r){var a,s=arguments.length,o=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var n=e.length-1;n>=0;n--)(a=e[n])&&(o=(s<3?a(o):s>3?a(t,i,o):a(t,i))||o);return s>3&&o&&Object.defineProperty(t,i,o),o},__param=this&&this.__param||function(e,t){return function(i,r){t(i,r,e)}};Object.defineProperty(exports,"__esModule",{value:!0});const core_1=require("@angular/core"),common_1=require("@angular/common"),wijmo_angular2_directiveBase_1=require("wijmo/wijmo.angular2.directiveBase"),wjcChartFinanceAnalytics=require("wijmo/wijmo.chart.finance.analytics");exports.wjFlexChartFibonacciMeta={selector:"wj-flex-chart-fibonacci",template:"",inputs:["asyncBindings","wjProperty","axisX","axisY","binding","bindingX","cssClass","name","style","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","high","low","labelPosition","levels","minX","maxX","uptrend"],outputs:["initialized","renderingNg: rendering","renderedNg: rendered","visibilityChangePC: visibilityChange"],providers:[]};let WjFlexChartFibonacci=WjFlexChartFibonacci_1=class extends wjcChartFinanceAnalytics.Fibonacci{constructor(e,t,i){super(),this.isInitialized=!1,this.wjProperty="series";this._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this,e,t,i);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}};WjFlexChartFibonacci.meta={outputs:exports.wjFlexChartFibonacciMeta.outputs,changeEvents:{"chart.seriesVisibilityChanged":["visibility"]},siblingId:"series"},WjFlexChartFibonacci=WjFlexChartFibonacci_1=__decorate([core_1.Component({selector:exports.wjFlexChartFibonacciMeta.selector,template:exports.wjFlexChartFibonacciMeta.template,inputs:exports.wjFlexChartFibonacciMeta.inputs,outputs:exports.wjFlexChartFibonacciMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef(()=>WjFlexChartFibonacci_1)},...exports.wjFlexChartFibonacciMeta.providers]}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],WjFlexChartFibonacci),exports.WjFlexChartFibonacci=WjFlexChartFibonacci,exports.wjFlexChartFibonacciArcsMeta={selector:"wj-flex-chart-fibonacci-arcs",template:"",inputs:["asyncBindings","wjProperty","axisX","axisY","binding","bindingX","cssClass","name","style","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","start","end","labelPosition","levels"],outputs:["initialized","renderingNg: rendering","renderedNg: rendered","visibilityChangePC: visibilityChange"],providers:[]};let WjFlexChartFibonacciArcs=WjFlexChartFibonacciArcs_1=class extends wjcChartFinanceAnalytics.FibonacciArcs{constructor(e,t,i){super(),this.isInitialized=!1,this.wjProperty="series";this._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this,e,t,i);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}};WjFlexChartFibonacciArcs.meta={outputs:exports.wjFlexChartFibonacciArcsMeta.outputs,changeEvents:{"chart.seriesVisibilityChanged":["visibility"]},siblingId:"series"},WjFlexChartFibonacciArcs=WjFlexChartFibonacciArcs_1=__decorate([core_1.Component({selector:exports.wjFlexChartFibonacciArcsMeta.selector,template:exports.wjFlexChartFibonacciArcsMeta.template,inputs:exports.wjFlexChartFibonacciArcsMeta.inputs,outputs:exports.wjFlexChartFibonacciArcsMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef(()=>WjFlexChartFibonacciArcs_1)},...exports.wjFlexChartFibonacciArcsMeta.providers]}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],WjFlexChartFibonacciArcs),exports.WjFlexChartFibonacciArcs=WjFlexChartFibonacciArcs,exports.wjFlexChartFibonacciFansMeta={selector:"wj-flex-chart-fibonacci-fans",template:"",inputs:["asyncBindings","wjProperty","axisX","axisY","binding","bindingX","cssClass","name","style","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","start","end","labelPosition","levels"],outputs:["initialized","renderingNg: rendering","renderedNg: rendered","visibilityChangePC: visibilityChange"],providers:[]};let WjFlexChartFibonacciFans=WjFlexChartFibonacciFans_1=class extends wjcChartFinanceAnalytics.FibonacciFans{constructor(e,t,i){super(),this.isInitialized=!1,this.wjProperty="series";this._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this,e,t,i);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}};WjFlexChartFibonacciFans.meta={outputs:exports.wjFlexChartFibonacciFansMeta.outputs,changeEvents:{"chart.seriesVisibilityChanged":["visibility"]},siblingId:"series"},WjFlexChartFibonacciFans=WjFlexChartFibonacciFans_1=__decorate([core_1.Component({selector:exports.wjFlexChartFibonacciFansMeta.selector,template:exports.wjFlexChartFibonacciFansMeta.template,inputs:exports.wjFlexChartFibonacciFansMeta.inputs,outputs:exports.wjFlexChartFibonacciFansMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef(()=>WjFlexChartFibonacciFans_1)},...exports.wjFlexChartFibonacciFansMeta.providers]}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],WjFlexChartFibonacciFans),exports.WjFlexChartFibonacciFans=WjFlexChartFibonacciFans,exports.wjFlexChartFibonacciTimeZonesMeta={selector:"wj-flex-chart-fibonacci-time-zones",template:"",inputs:["asyncBindings","wjProperty","axisX","axisY","binding","bindingX","cssClass","name","style","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","startX","endX","labelPosition","levels"],outputs:["initialized","renderingNg: rendering","renderedNg: rendered","visibilityChangePC: visibilityChange"],providers:[]};let WjFlexChartFibonacciTimeZones=WjFlexChartFibonacciTimeZones_1=class extends wjcChartFinanceAnalytics.FibonacciTimeZones{constructor(e,t,i){super(),this.isInitialized=!1,this.wjProperty="series";this._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this,e,t,i);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}};WjFlexChartFibonacciTimeZones.meta={outputs:exports.wjFlexChartFibonacciTimeZonesMeta.outputs,changeEvents:{"chart.seriesVisibilityChanged":["visibility"]},siblingId:"series"},WjFlexChartFibonacciTimeZones=WjFlexChartFibonacciTimeZones_1=__decorate([core_1.Component({selector:exports.wjFlexChartFibonacciTimeZonesMeta.selector,template:exports.wjFlexChartFibonacciTimeZonesMeta.template,inputs:exports.wjFlexChartFibonacciTimeZonesMeta.inputs,outputs:exports.wjFlexChartFibonacciTimeZonesMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef(()=>WjFlexChartFibonacciTimeZones_1)},...exports.wjFlexChartFibonacciTimeZonesMeta.providers]}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],WjFlexChartFibonacciTimeZones),exports.WjFlexChartFibonacciTimeZones=WjFlexChartFibonacciTimeZones,exports.wjFlexChartAtrMeta={selector:"wj-flex-chart-atr",template:"",inputs:["asyncBindings","wjProperty","axisX","axisY","binding","bindingX","cssClass","name","style","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","period"],outputs:["initialized","renderingNg: rendering","renderedNg: rendered","visibilityChangePC: visibilityChange"],providers:[]};let WjFlexChartAtr=WjFlexChartAtr_1=class extends wjcChartFinanceAnalytics.ATR{constructor(e,t,i){super(),this.isInitialized=!1,this.wjProperty="series";this._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this,e,t,i);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}};WjFlexChartAtr.meta={outputs:exports.wjFlexChartAtrMeta.outputs,changeEvents:{"chart.seriesVisibilityChanged":["visibility"]},siblingId:"series"},WjFlexChartAtr=WjFlexChartAtr_1=__decorate([core_1.Component({selector:exports.wjFlexChartAtrMeta.selector,template:exports.wjFlexChartAtrMeta.template,inputs:exports.wjFlexChartAtrMeta.inputs,outputs:exports.wjFlexChartAtrMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef(()=>WjFlexChartAtr_1)},...exports.wjFlexChartAtrMeta.providers]}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],WjFlexChartAtr),exports.WjFlexChartAtr=WjFlexChartAtr,exports.wjFlexChartCciMeta={selector:"wj-flex-chart-cci",template:"",inputs:["asyncBindings","wjProperty","axisX","axisY","binding","bindingX","cssClass","name","style","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","period","constant"],outputs:["initialized","renderingNg: rendering","renderedNg: rendered","visibilityChangePC: visibilityChange"],providers:[]};let WjFlexChartCci=WjFlexChartCci_1=class extends wjcChartFinanceAnalytics.CCI{constructor(e,t,i){super(),this.isInitialized=!1,this.wjProperty="series";this._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this,e,t,i);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}};WjFlexChartCci.meta={outputs:exports.wjFlexChartCciMeta.outputs,changeEvents:{"chart.seriesVisibilityChanged":["visibility"]},siblingId:"series"},WjFlexChartCci=WjFlexChartCci_1=__decorate([core_1.Component({selector:exports.wjFlexChartCciMeta.selector,template:exports.wjFlexChartCciMeta.template,inputs:exports.wjFlexChartCciMeta.inputs,outputs:exports.wjFlexChartCciMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef(()=>WjFlexChartCci_1)},...exports.wjFlexChartCciMeta.providers]}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],WjFlexChartCci),exports.WjFlexChartCci=WjFlexChartCci,exports.wjFlexChartRsiMeta={selector:"wj-flex-chart-rsi",template:"",inputs:["asyncBindings","wjProperty","axisX","axisY","binding","bindingX","cssClass","name","style","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","period"],outputs:["initialized","renderingNg: rendering","renderedNg: rendered","visibilityChangePC: visibilityChange"],providers:[]};let WjFlexChartRsi=WjFlexChartRsi_1=class extends wjcChartFinanceAnalytics.RSI{constructor(e,t,i){super(),this.isInitialized=!1,this.wjProperty="series";this._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this,e,t,i);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}};WjFlexChartRsi.meta={outputs:exports.wjFlexChartRsiMeta.outputs,changeEvents:{"chart.seriesVisibilityChanged":["visibility"]},siblingId:"series"},WjFlexChartRsi=WjFlexChartRsi_1=__decorate([core_1.Component({selector:exports.wjFlexChartRsiMeta.selector,template:exports.wjFlexChartRsiMeta.template,inputs:exports.wjFlexChartRsiMeta.inputs,outputs:exports.wjFlexChartRsiMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef(()=>WjFlexChartRsi_1)},...exports.wjFlexChartRsiMeta.providers]}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],WjFlexChartRsi),exports.WjFlexChartRsi=WjFlexChartRsi,exports.wjFlexChartWilliamsRMeta={selector:"wj-flex-chart-williams-r",template:"",inputs:["asyncBindings","wjProperty","axisX","axisY","binding","bindingX","cssClass","name","style","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","period"],outputs:["initialized","renderingNg: rendering","renderedNg: rendered","visibilityChangePC: visibilityChange"],providers:[]};let WjFlexChartWilliamsR=WjFlexChartWilliamsR_1=class extends wjcChartFinanceAnalytics.WilliamsR{constructor(e,t,i){super(),this.isInitialized=!1,this.wjProperty="series";this._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this,e,t,i);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}};WjFlexChartWilliamsR.meta={outputs:exports.wjFlexChartWilliamsRMeta.outputs,changeEvents:{"chart.seriesVisibilityChanged":["visibility"]},siblingId:"series"},WjFlexChartWilliamsR=WjFlexChartWilliamsR_1=__decorate([core_1.Component({selector:exports.wjFlexChartWilliamsRMeta.selector,template:exports.wjFlexChartWilliamsRMeta.template,inputs:exports.wjFlexChartWilliamsRMeta.inputs,outputs:exports.wjFlexChartWilliamsRMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef(()=>WjFlexChartWilliamsR_1)},...exports.wjFlexChartWilliamsRMeta.providers]}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],WjFlexChartWilliamsR),exports.WjFlexChartWilliamsR=WjFlexChartWilliamsR,exports.wjFlexChartMacdMeta={selector:"wj-flex-chart-macd",template:"",inputs:["asyncBindings","wjProperty","axisX","axisY","binding","bindingX","cssClass","name","style","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","fastPeriod","slowPeriod","smoothingPeriod","styles"],outputs:["initialized","renderingNg: rendering","renderedNg: rendered","visibilityChangePC: visibilityChange"],providers:[]};let WjFlexChartMacd=WjFlexChartMacd_1=class extends wjcChartFinanceAnalytics.Macd{constructor(e,t,i){super(),this.isInitialized=!1,this.wjProperty="series";this._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this,e,t,i);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}};WjFlexChartMacd.meta={outputs:exports.wjFlexChartMacdMeta.outputs,changeEvents:{"chart.seriesVisibilityChanged":["visibility"]},siblingId:"series"},WjFlexChartMacd=WjFlexChartMacd_1=__decorate([core_1.Component({selector:exports.wjFlexChartMacdMeta.selector,template:exports.wjFlexChartMacdMeta.template,inputs:exports.wjFlexChartMacdMeta.inputs,outputs:exports.wjFlexChartMacdMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef(()=>WjFlexChartMacd_1)},...exports.wjFlexChartMacdMeta.providers]}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],WjFlexChartMacd),exports.WjFlexChartMacd=WjFlexChartMacd,exports.wjFlexChartMacdHistogramMeta={selector:"wj-flex-chart-macd-histogram",template:"",inputs:["asyncBindings","wjProperty","axisX","axisY","binding","bindingX","cssClass","name","style","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","fastPeriod","slowPeriod","smoothingPeriod"],outputs:["initialized","renderingNg: rendering","renderedNg: rendered","visibilityChangePC: visibilityChange"],providers:[]};let WjFlexChartMacdHistogram=WjFlexChartMacdHistogram_1=class extends wjcChartFinanceAnalytics.MacdHistogram{constructor(e,t,i){super(),this.isInitialized=!1,this.wjProperty="series";this._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this,e,t,i);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}};WjFlexChartMacdHistogram.meta={outputs:exports.wjFlexChartMacdHistogramMeta.outputs,changeEvents:{"chart.seriesVisibilityChanged":["visibility"]},siblingId:"series"},WjFlexChartMacdHistogram=WjFlexChartMacdHistogram_1=__decorate([core_1.Component({selector:exports.wjFlexChartMacdHistogramMeta.selector,template:exports.wjFlexChartMacdHistogramMeta.template,inputs:exports.wjFlexChartMacdHistogramMeta.inputs,outputs:exports.wjFlexChartMacdHistogramMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef(()=>WjFlexChartMacdHistogram_1)},...exports.wjFlexChartMacdHistogramMeta.providers]}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],WjFlexChartMacdHistogram),exports.WjFlexChartMacdHistogram=WjFlexChartMacdHistogram,exports.wjFlexChartStochasticMeta={selector:"wj-flex-chart-stochastic",template:"",inputs:["asyncBindings","wjProperty","axisX","axisY","binding","bindingX","cssClass","name","style","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","dPeriod","kPeriod","smoothingPeriod","styles"],outputs:["initialized","renderingNg: rendering","renderedNg: rendered","visibilityChangePC: visibilityChange"],providers:[]};let WjFlexChartStochastic=WjFlexChartStochastic_1=class extends wjcChartFinanceAnalytics.Stochastic{constructor(e,t,i){super(),this.isInitialized=!1,this.wjProperty="series";this._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this,e,t,i);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}};WjFlexChartStochastic.meta={outputs:exports.wjFlexChartStochasticMeta.outputs,changeEvents:{"chart.seriesVisibilityChanged":["visibility"]},siblingId:"series"},WjFlexChartStochastic=WjFlexChartStochastic_1=__decorate([core_1.Component({selector:exports.wjFlexChartStochasticMeta.selector,template:exports.wjFlexChartStochasticMeta.template,inputs:exports.wjFlexChartStochasticMeta.inputs,outputs:exports.wjFlexChartStochasticMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef(()=>WjFlexChartStochastic_1)},...exports.wjFlexChartStochasticMeta.providers]}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],WjFlexChartStochastic),exports.WjFlexChartStochastic=WjFlexChartStochastic,exports.wjFlexChartBollingerBandsMeta={selector:"wj-flex-chart-bollinger-bands",template:"",inputs:["asyncBindings","wjProperty","axisX","axisY","binding","bindingX","cssClass","name","style","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","period","multiplier"],outputs:["initialized","renderingNg: rendering","renderedNg: rendered","visibilityChangePC: visibilityChange"],providers:[]};let WjFlexChartBollingerBands=WjFlexChartBollingerBands_1=class extends wjcChartFinanceAnalytics.BollingerBands{constructor(e,t,i){super(),this.isInitialized=!1,this.wjProperty="series";this._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this,e,t,i);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}};WjFlexChartBollingerBands.meta={outputs:exports.wjFlexChartBollingerBandsMeta.outputs,changeEvents:{"chart.seriesVisibilityChanged":["visibility"]},siblingId:"series"},WjFlexChartBollingerBands=WjFlexChartBollingerBands_1=__decorate([core_1.Component({selector:exports.wjFlexChartBollingerBandsMeta.selector,template:exports.wjFlexChartBollingerBandsMeta.template,inputs:exports.wjFlexChartBollingerBandsMeta.inputs,outputs:exports.wjFlexChartBollingerBandsMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef(()=>WjFlexChartBollingerBands_1)},...exports.wjFlexChartBollingerBandsMeta.providers]}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],WjFlexChartBollingerBands),exports.WjFlexChartBollingerBands=WjFlexChartBollingerBands,exports.wjFlexChartEnvelopesMeta={selector:"wj-flex-chart-envelopes",template:"",inputs:["asyncBindings","wjProperty","axisX","axisY","binding","bindingX","cssClass","name","style","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","period","size","type"],outputs:["initialized","renderingNg: rendering","renderedNg: rendered","visibilityChangePC: visibilityChange"],providers:[]};let WjFlexChartEnvelopes=WjFlexChartEnvelopes_1=class extends wjcChartFinanceAnalytics.Envelopes{constructor(e,t,i){super(),this.isInitialized=!1,this.wjProperty="series";this._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this,e,t,i);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}};WjFlexChartEnvelopes.meta={outputs:exports.wjFlexChartEnvelopesMeta.outputs,changeEvents:{"chart.seriesVisibilityChanged":["visibility"]},siblingId:"series"},WjFlexChartEnvelopes=WjFlexChartEnvelopes_1=__decorate([core_1.Component({selector:exports.wjFlexChartEnvelopesMeta.selector,template:exports.wjFlexChartEnvelopesMeta.template,inputs:exports.wjFlexChartEnvelopesMeta.inputs,outputs:exports.wjFlexChartEnvelopesMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef(()=>WjFlexChartEnvelopes_1)},...exports.wjFlexChartEnvelopesMeta.providers]}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],WjFlexChartEnvelopes),exports.WjFlexChartEnvelopes=WjFlexChartEnvelopes;let moduleExports=[WjFlexChartFibonacci,WjFlexChartFibonacciArcs,WjFlexChartFibonacciFans,WjFlexChartFibonacciTimeZones,WjFlexChartAtr,WjFlexChartCci,WjFlexChartRsi,WjFlexChartWilliamsR,WjFlexChartMacd,WjFlexChartMacdHistogram,WjFlexChartStochastic,WjFlexChartBollingerBands,WjFlexChartEnvelopes],WjChartFinanceAnalyticsModule=class{};WjChartFinanceAnalyticsModule=__decorate([core_1.NgModule({imports:[wijmo_angular2_directiveBase_1.WjDirectiveBaseModule,common_1.CommonModule],declarations:[...moduleExports],exports:[...moduleExports]})],WjChartFinanceAnalyticsModule),exports.WjChartFinanceAnalyticsModule=WjChartFinanceAnalyticsModule;