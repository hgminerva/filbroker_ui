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

"use strict";var __extends=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),__decorate=this&&this.__decorate||function(t,e,n,o){var r,a=arguments.length,i=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var p=t.length-1;p>=0;p--)(r=t[p])&&(i=(a<3?r(i):a>3?r(e,n,i):r(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i},__param=this&&this.__param||function(t,e){return function(n,o){e(n,o,t)}};Object.defineProperty(exports,"__esModule",{value:!0});var core_1=require("@angular/core"),common_1=require("@angular/common"),wijmo_angular2_directiveBase_1=require("wijmo/wijmo.angular2.directiveBase"),wjcChartAnnotation=require("wijmo/wijmo.chart.annotation");exports.wjFlexChartAnnotationLayerMeta={selector:"wj-flex-chart-annotation-layer",template:"<div><ng-content></ng-content></div>",inputs:["wjProperty"],outputs:["initialized"],providers:[]};var WjFlexChartAnnotationLayer=function(t){function e(e,n,o){var r=t.call(this,o)||this;r.isInitialized=!1;r._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(r,e,n,o);return r.created(),r}var n;return __extends(e,t),n=e,e.prototype.created=function(){},e.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},e.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},e.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},e.meta={outputs:exports.wjFlexChartAnnotationLayerMeta.outputs},e=n=__decorate([core_1.Component({selector:exports.wjFlexChartAnnotationLayerMeta.selector,template:exports.wjFlexChartAnnotationLayerMeta.template,inputs:exports.wjFlexChartAnnotationLayerMeta.inputs,outputs:exports.wjFlexChartAnnotationLayerMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef(function(){return n})}].concat(exports.wjFlexChartAnnotationLayerMeta.providers)}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],e)}(wjcChartAnnotation.AnnotationLayer);exports.WjFlexChartAnnotationLayer=WjFlexChartAnnotationLayer,exports.wjFlexChartAnnotationTextMeta={selector:"wj-flex-chart-annotation-text",template:"<div><ng-content></ng-content></div>",inputs:["wjProperty","type","attachment","position","point","seriesIndex","pointIndex","offset","style","isVisible","tooltip","text","content","name","width","height","start","end","radius","length","href"],outputs:["initialized"],providers:[]};var WjFlexChartAnnotationText=function(t){function e(e,n,o){var r=t.call(this)||this;r.isInitialized=!1,r.wjProperty="items";r._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(r,e,n,o);return r.created(),r}var n;return __extends(e,t),n=e,e.prototype.created=function(){},e.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},e.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},e.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},e.meta={outputs:exports.wjFlexChartAnnotationTextMeta.outputs,siblingId:"annotation"},e=n=__decorate([core_1.Component({selector:exports.wjFlexChartAnnotationTextMeta.selector,template:exports.wjFlexChartAnnotationTextMeta.template,inputs:exports.wjFlexChartAnnotationTextMeta.inputs,outputs:exports.wjFlexChartAnnotationTextMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef(function(){return n})}].concat(exports.wjFlexChartAnnotationTextMeta.providers)}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],e)}(wjcChartAnnotation.Text);exports.WjFlexChartAnnotationText=WjFlexChartAnnotationText,exports.wjFlexChartAnnotationEllipseMeta={selector:"wj-flex-chart-annotation-ellipse",template:"<div><ng-content></ng-content></div>",inputs:["wjProperty","type","attachment","position","point","seriesIndex","pointIndex","offset","style","isVisible","tooltip","text","content","name","width","height","start","end","radius","length","href"],outputs:["initialized"],providers:[]};var WjFlexChartAnnotationEllipse=function(t){function e(e,n,o){var r=t.call(this)||this;r.isInitialized=!1,r.wjProperty="items";r._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(r,e,n,o);return r.created(),r}var n;return __extends(e,t),n=e,e.prototype.created=function(){},e.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},e.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},e.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},e.meta={outputs:exports.wjFlexChartAnnotationEllipseMeta.outputs,siblingId:"annotation"},e=n=__decorate([core_1.Component({selector:exports.wjFlexChartAnnotationEllipseMeta.selector,template:exports.wjFlexChartAnnotationEllipseMeta.template,inputs:exports.wjFlexChartAnnotationEllipseMeta.inputs,outputs:exports.wjFlexChartAnnotationEllipseMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef(function(){return n})}].concat(exports.wjFlexChartAnnotationEllipseMeta.providers)}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],e)}(wjcChartAnnotation.Ellipse);exports.WjFlexChartAnnotationEllipse=WjFlexChartAnnotationEllipse,exports.wjFlexChartAnnotationRectangleMeta={selector:"wj-flex-chart-annotation-rectangle",template:"<div><ng-content></ng-content></div>",inputs:["wjProperty","type","attachment","position","point","seriesIndex","pointIndex","offset","style","isVisible","tooltip","text","content","name","width","height","start","end","radius","length","href"],outputs:["initialized"],providers:[]};var WjFlexChartAnnotationRectangle=function(t){function e(e,n,o){var r=t.call(this)||this;r.isInitialized=!1,r.wjProperty="items";r._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(r,e,n,o);return r.created(),r}var n;return __extends(e,t),n=e,e.prototype.created=function(){},e.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},e.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},e.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},e.meta={outputs:exports.wjFlexChartAnnotationRectangleMeta.outputs,siblingId:"annotation"},e=n=__decorate([core_1.Component({selector:exports.wjFlexChartAnnotationRectangleMeta.selector,template:exports.wjFlexChartAnnotationRectangleMeta.template,inputs:exports.wjFlexChartAnnotationRectangleMeta.inputs,outputs:exports.wjFlexChartAnnotationRectangleMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef(function(){return n})}].concat(exports.wjFlexChartAnnotationRectangleMeta.providers)}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],e)}(wjcChartAnnotation.Rectangle);exports.WjFlexChartAnnotationRectangle=WjFlexChartAnnotationRectangle,exports.wjFlexChartAnnotationLineMeta={selector:"wj-flex-chart-annotation-line",template:"<div><ng-content></ng-content></div>",inputs:["wjProperty","type","attachment","position","point","seriesIndex","pointIndex","offset","style","isVisible","tooltip","text","content","name","width","height","start","end","radius","length","href"],outputs:["initialized"],providers:[]};var WjFlexChartAnnotationLine=function(t){function e(e,n,o){var r=t.call(this)||this;r.isInitialized=!1,r.wjProperty="items";r._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(r,e,n,o);return r.created(),r}var n;return __extends(e,t),n=e,e.prototype.created=function(){},e.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},e.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},e.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},e.meta={outputs:exports.wjFlexChartAnnotationLineMeta.outputs,siblingId:"annotation"},e=n=__decorate([core_1.Component({selector:exports.wjFlexChartAnnotationLineMeta.selector,template:exports.wjFlexChartAnnotationLineMeta.template,inputs:exports.wjFlexChartAnnotationLineMeta.inputs,outputs:exports.wjFlexChartAnnotationLineMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef(function(){return n})}].concat(exports.wjFlexChartAnnotationLineMeta.providers)}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],e)}(wjcChartAnnotation.Line);exports.WjFlexChartAnnotationLine=WjFlexChartAnnotationLine,exports.wjFlexChartAnnotationPolygonMeta={selector:"wj-flex-chart-annotation-polygon",template:"<div><ng-content></ng-content></div>",inputs:["wjProperty","type","attachment","position","point","seriesIndex","pointIndex","offset","style","isVisible","tooltip","text","content","name","width","height","start","end","radius","length","href"],outputs:["initialized"],providers:[]};var WjFlexChartAnnotationPolygon=function(t){function e(e,n,o){var r=t.call(this)||this;r.isInitialized=!1,r.wjProperty="items";r._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(r,e,n,o);return r.created(),r}var n;return __extends(e,t),n=e,e.prototype.created=function(){},e.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},e.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},e.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},e.meta={outputs:exports.wjFlexChartAnnotationPolygonMeta.outputs,siblingId:"annotation"},e=n=__decorate([core_1.Component({selector:exports.wjFlexChartAnnotationPolygonMeta.selector,template:exports.wjFlexChartAnnotationPolygonMeta.template,inputs:exports.wjFlexChartAnnotationPolygonMeta.inputs,outputs:exports.wjFlexChartAnnotationPolygonMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef(function(){return n})}].concat(exports.wjFlexChartAnnotationPolygonMeta.providers)}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],e)}(wjcChartAnnotation.Polygon);exports.WjFlexChartAnnotationPolygon=WjFlexChartAnnotationPolygon,exports.wjFlexChartAnnotationCircleMeta={selector:"wj-flex-chart-annotation-circle",template:"<div><ng-content></ng-content></div>",inputs:["wjProperty","type","attachment","position","point","seriesIndex","pointIndex","offset","style","isVisible","tooltip","text","content","name","width","height","start","end","radius","length","href"],outputs:["initialized"],providers:[]};var WjFlexChartAnnotationCircle=function(t){function e(e,n,o){var r=t.call(this)||this;r.isInitialized=!1,r.wjProperty="items";r._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(r,e,n,o);return r.created(),r}var n;return __extends(e,t),n=e,e.prototype.created=function(){},e.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},e.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},e.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},e.meta={outputs:exports.wjFlexChartAnnotationCircleMeta.outputs,siblingId:"annotation"},e=n=__decorate([core_1.Component({selector:exports.wjFlexChartAnnotationCircleMeta.selector,template:exports.wjFlexChartAnnotationCircleMeta.template,inputs:exports.wjFlexChartAnnotationCircleMeta.inputs,outputs:exports.wjFlexChartAnnotationCircleMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef(function(){return n})}].concat(exports.wjFlexChartAnnotationCircleMeta.providers)}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],e)}(wjcChartAnnotation.Circle);exports.WjFlexChartAnnotationCircle=WjFlexChartAnnotationCircle,exports.wjFlexChartAnnotationSquareMeta={selector:"wj-flex-chart-annotation-square",template:"<div><ng-content></ng-content></div>",inputs:["wjProperty","type","attachment","position","point","seriesIndex","pointIndex","offset","style","isVisible","tooltip","text","content","name","width","height","start","end","radius","length","href"],outputs:["initialized"],providers:[]};var WjFlexChartAnnotationSquare=function(t){function e(e,n,o){var r=t.call(this)||this;r.isInitialized=!1,r.wjProperty="items";r._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(r,e,n,o);return r.created(),r}var n;return __extends(e,t),n=e,e.prototype.created=function(){},e.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},e.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},e.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},e.meta={outputs:exports.wjFlexChartAnnotationSquareMeta.outputs,siblingId:"annotation"},e=n=__decorate([core_1.Component({selector:exports.wjFlexChartAnnotationSquareMeta.selector,template:exports.wjFlexChartAnnotationSquareMeta.template,inputs:exports.wjFlexChartAnnotationSquareMeta.inputs,outputs:exports.wjFlexChartAnnotationSquareMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef(function(){return n})}].concat(exports.wjFlexChartAnnotationSquareMeta.providers)}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],e)}(wjcChartAnnotation.Square);exports.WjFlexChartAnnotationSquare=WjFlexChartAnnotationSquare,exports.wjFlexChartAnnotationImageMeta={selector:"wj-flex-chart-annotation-image",template:"<div><ng-content></ng-content></div>",inputs:["wjProperty","type","attachment","position","point","seriesIndex","pointIndex","offset","style","isVisible","tooltip","text","content","name","width","height","start","end","radius","length","href"],outputs:["initialized"],providers:[]};var WjFlexChartAnnotationImage=function(t){function e(e,n,o){var r=t.call(this)||this;r.isInitialized=!1,r.wjProperty="items";r._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(r,e,n,o);return r.created(),r}var n;return __extends(e,t),n=e,e.prototype.created=function(){},e.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},e.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},e.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},e.meta={outputs:exports.wjFlexChartAnnotationImageMeta.outputs,siblingId:"annotation"},e=n=__decorate([core_1.Component({selector:exports.wjFlexChartAnnotationImageMeta.selector,template:exports.wjFlexChartAnnotationImageMeta.template,inputs:exports.wjFlexChartAnnotationImageMeta.inputs,outputs:exports.wjFlexChartAnnotationImageMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef(function(){return n})}].concat(exports.wjFlexChartAnnotationImageMeta.providers)}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],e)}(wjcChartAnnotation.Image);exports.WjFlexChartAnnotationImage=WjFlexChartAnnotationImage;var moduleExports=[WjFlexChartAnnotationLayer,WjFlexChartAnnotationText,WjFlexChartAnnotationEllipse,WjFlexChartAnnotationRectangle,WjFlexChartAnnotationLine,WjFlexChartAnnotationPolygon,WjFlexChartAnnotationCircle,WjFlexChartAnnotationSquare,WjFlexChartAnnotationImage],WjChartAnnotationModule=function(){function t(){}return t=__decorate([core_1.NgModule({imports:[wijmo_angular2_directiveBase_1.WjDirectiveBaseModule,common_1.CommonModule],declarations:moduleExports.slice(),exports:moduleExports.slice()})],t)}();exports.WjChartAnnotationModule=WjChartAnnotationModule;