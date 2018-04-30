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
System.register(["wijmo/wijmo.chart.animation","@angular/core","@angular/common","wijmo/wijmo.angular2.directiveBase"],function(t,e){"use strict";var n,o,r,i,a,c,u,s,p,f,l=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();e&&e.id;return{setters:[function(t){n=t},function(t){o=t,r=t,i=t},function(t){a=t},function(t){c=t}],execute:function(){t("wjFlexChartAnimationMeta",u={selector:"wj-flex-chart-animation",template:"",inputs:["wjProperty","animationMode","easing","duration","axisAnimation"],outputs:["initialized"],providers:[]}),s=function(t){function e(e,n,o){var r=t.call(this,o)||this;r.isInitialized=!1;r._wjBehaviour=c.WjDirectiveBehavior.attach(r,e,n,o);return r.created(),r}return l(e,t),e.prototype.created=function(){},e.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},e.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},e.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},e.meta={outputs:u.outputs},e.decorators=[{type:o.Component,args:[{selector:u.selector,template:u.template,inputs:u.inputs,outputs:u.outputs,providers:[{provide:"WjComponent",useExisting:r.forwardRef(function(){return e})}].concat(u.providers)}]}],e.ctorParameters=function(){return[{type:r.ElementRef,decorators:[{type:i.Inject,args:[r.ElementRef]}]},{type:r.Injector,decorators:[{type:i.Inject,args:[r.Injector]}]},{type:void 0,decorators:[{type:i.Inject,args:["WjComponent"]},{type:i.SkipSelf},{type:r.Optional}]}]},e}(n.ChartAnimation),t("WjFlexChartAnimation",s),p=[s],f=function(){function t(){}return t.decorators=[{type:o.NgModule,args:[{imports:[c.WjDirectiveBaseModule,a.CommonModule],declarations:p.slice(),exports:p.slice()}]}],t.ctorParameters=function(){return[]},t}(),t("WjChartAnimationModule",f)}}});