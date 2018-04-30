/*
    *
    * Wijmo Library 5.20173.380
    * http://wijmo.com/
    *
    * Copyright(c) GrapeCity, Inc.  All rights reserved.
    *
    * Licensed under the GrapeCity Commercial License.
    * sales@wijmo.com
    * wijmo.com/products/wijmo-5/license/
    *
    */
var __extends=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function o(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)}}();define(["require","exports","wijmo/wijmo.chart.interaction","@angular/core","@angular/core","@angular/core","@angular/common","wijmo/wijmo.angular2.directiveBase"],function(e,t,r,o,n,a,i,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.wjFlexChartRangeSelectorMeta={selector:"wj-flex-chart-range-selector",template:"",inputs:["wjProperty","isVisible","min","max","orientation","seamless","minScale","maxScale"],outputs:["initialized","rangeChangedNg: rangeChanged"],providers:[]};var c=function(e){function r(t,r,o){var n=e.call(this,o)||this;n.isInitialized=!1;n._wjBehaviour=s.WjDirectiveBehavior.attach(n,t,r,o);return n.created(),n}return __extends(r,e),r.prototype.created=function(){},r.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},r.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},r.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},r.meta={outputs:t.wjFlexChartRangeSelectorMeta.outputs},r.decorators=[{type:o.Component,args:[{selector:t.wjFlexChartRangeSelectorMeta.selector,template:t.wjFlexChartRangeSelectorMeta.template,inputs:t.wjFlexChartRangeSelectorMeta.inputs,outputs:t.wjFlexChartRangeSelectorMeta.outputs,providers:[{provide:"WjComponent",useExisting:n.forwardRef(function(){return r})}].concat(t.wjFlexChartRangeSelectorMeta.providers)}]}],r.ctorParameters=function(){return[{type:n.ElementRef,decorators:[{type:a.Inject,args:[n.ElementRef]}]},{type:n.Injector,decorators:[{type:a.Inject,args:[n.Injector]}]},{type:void 0,decorators:[{type:a.Inject,args:["WjComponent"]},{type:a.SkipSelf},{type:n.Optional}]}]},r}(r.RangeSelector);t.WjFlexChartRangeSelector=c,t.wjFlexChartGesturesMeta={selector:"wj-flex-chart-gestures",template:"",inputs:["wjProperty","mouseAction","interactiveAxes","enable","scaleX","scaleY","posX","posY"],outputs:["initialized"],providers:[]};var u=function(e){function r(t,r,o){var n=e.call(this,o)||this;n.isInitialized=!1;n._wjBehaviour=s.WjDirectiveBehavior.attach(n,t,r,o);return n.created(),n}return __extends(r,e),r.prototype.created=function(){},r.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},r.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},r.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},r.meta={outputs:t.wjFlexChartGesturesMeta.outputs},r.decorators=[{type:o.Component,args:[{selector:t.wjFlexChartGesturesMeta.selector,template:t.wjFlexChartGesturesMeta.template,inputs:t.wjFlexChartGesturesMeta.inputs,outputs:t.wjFlexChartGesturesMeta.outputs,providers:[{provide:"WjComponent",useExisting:n.forwardRef(function(){return r})}].concat(t.wjFlexChartGesturesMeta.providers)}]}],r.ctorParameters=function(){return[{type:n.ElementRef,decorators:[{type:a.Inject,args:[n.ElementRef]}]},{type:n.Injector,decorators:[{type:a.Inject,args:[n.Injector]}]},{type:void 0,decorators:[{type:a.Inject,args:["WjComponent"]},{type:a.SkipSelf},{type:n.Optional}]}]},r}(r.ChartGestures);t.WjFlexChartGestures=u;var p=[c,u],l=function(){function e(){}return e.decorators=[{type:o.NgModule,args:[{imports:[s.WjDirectiveBaseModule,i.CommonModule],declarations:p.slice(),exports:p.slice()}]}],e.ctorParameters=function(){return[]},e}();t.WjChartInteractionModule=l});