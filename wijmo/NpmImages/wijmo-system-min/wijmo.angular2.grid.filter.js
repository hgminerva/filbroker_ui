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
System.register(["wijmo/wijmo.grid.filter","@angular/core","@angular/common","wijmo/wijmo.angular2.directiveBase"],function(t,e){"use strict";var r,o,n,i,s,u,c,a,p,l,f=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])};return function(e,r){function o(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)}}();e&&e.id;return{setters:[function(t){r=t},function(t){o=t,n=t,i=t},function(t){s=t},function(t){u=t}],execute:function(){t("wjFlexGridFilterMeta",c={selector:"wj-flex-grid-filter",template:"",inputs:["wjProperty","showFilterIcons","showSortButtons","defaultFilterType","filterColumns"],outputs:["initialized","filterChangingNg: filterChanging","filterChangedNg: filterChanged","filterAppliedNg: filterApplied"],providers:[]}),a=function(t){function e(e,r,o){var n=t.call(this,o)||this;n.isInitialized=!1;n._wjBehaviour=u.WjDirectiveBehavior.attach(n,e,r,o);return n.created(),n}return f(e,t),e.prototype.created=function(){},e.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},e.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},e.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},e.meta={outputs:c.outputs},e.decorators=[{type:o.Component,args:[{selector:c.selector,template:c.template,inputs:c.inputs,outputs:c.outputs,providers:[{provide:"WjComponent",useExisting:n.forwardRef(function(){return e})}].concat(c.providers)}]}],e.ctorParameters=function(){return[{type:n.ElementRef,decorators:[{type:i.Inject,args:[n.ElementRef]}]},{type:n.Injector,decorators:[{type:i.Inject,args:[n.Injector]}]},{type:void 0,decorators:[{type:i.Inject,args:["WjComponent"]},{type:i.SkipSelf},{type:n.Optional}]}]},e}(r.FlexGridFilter),t("WjFlexGridFilter",a),p=[a],l=function(){function t(){}return t.decorators=[{type:o.NgModule,args:[{imports:[u.WjDirectiveBaseModule,s.CommonModule],declarations:p.slice(),exports:p.slice()}]}],t.ctorParameters=function(){return[]},t}(),t("WjGridFilterModule",l)}}});