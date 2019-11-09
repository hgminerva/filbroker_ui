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

var __extends=this&&this.__extends||function(){var e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(t,r)};return function(t,r){function i(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(i.prototype=r.prototype,new i)}}(),__decorate=this&&this.__decorate||function(e,t,r,i){var o,n=arguments.length,l=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(l=(n<3?o(l):n>3?o(t,r,l):o(t,r))||l);return n>3&&l&&Object.defineProperty(t,r,l),l},__param=this&&this.__param||function(e,t){return function(r,i){t(r,i,e)}};import{Component,NgModule,ElementRef,Injector,Optional,forwardRef,Inject,SkipSelf}from"@angular/core";import{CommonModule}from"@angular/common";import{WjDirectiveBehavior,WjDirectiveBaseModule}from"wijmo/wijmo.angular2.directiveBase";import*as wjcGridFilter from"wijmo/wijmo.grid.filter";export var wjFlexGridFilterMeta={selector:"wj-flex-grid-filter",template:"",inputs:["wjProperty","showFilterIcons","showSortButtons","defaultFilterType","filterColumns"],outputs:["initialized","filterChangingNg: filterChanging","filterChangedNg: filterChanged","filterAppliedNg: filterApplied"],providers:[]};var WjFlexGridFilter=function(e){function t(t,r,i){var o=e.call(this,i)||this;o.isInitialized=!1;o._wjBehaviour=WjDirectiveBehavior.attach(o,t,r,i);return o.created(),o}var r;return __extends(t,e),r=t,t.prototype.created=function(){},t.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},t.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},t.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},t.meta={outputs:wjFlexGridFilterMeta.outputs},t=r=__decorate([Component({selector:wjFlexGridFilterMeta.selector,template:wjFlexGridFilterMeta.template,inputs:wjFlexGridFilterMeta.inputs,outputs:wjFlexGridFilterMeta.outputs,providers:[{provide:"WjComponent",useExisting:forwardRef(function(){return r})}].concat(wjFlexGridFilterMeta.providers)}),__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],t)}(wjcGridFilter.FlexGridFilter);export{WjFlexGridFilter};var moduleExports=[WjFlexGridFilter],WjGridFilterModule=function(){function e(){}return e=__decorate([NgModule({imports:[WjDirectiveBaseModule,CommonModule],declarations:moduleExports.slice(),exports:moduleExports.slice()})],e)}();export{WjGridFilterModule};