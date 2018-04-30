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
System.register(["wijmo/wijmo.react.base","wijmo/wijmo.olap","wijmo/wijmo.react.olap"],function(t,o){"use strict";var n,e,i,r,c,s,u,a=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var n in o)o.hasOwnProperty(n)&&(t[n]=o[n])};return function(o,n){function e(){this.constructor=o}t(o,n),o.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}}();o&&o.id;return{setters:[function(t){n=t},function(t){e=t},function(t){i=t}],execute:function(){window.wijmo=window.wijmo||{},window.wijmo.react=window.wijmo.react||{},window.wijmo.react.olap=i,r=function(t){function o(o){return t.call(this,o,e.PivotGrid,{objectProps:["childItemsPath","mergeManager","itemsSource"]})||this}return a(o,t),o}(n.ComponentBase),t("PivotGrid",r),c=function(t){function o(o){return t.call(this,o,e.PivotChart,{objectProps:["itemsSource"]})||this}return a(o,t),o}(n.ComponentBase),t("PivotChart",c),s=function(t){function o(o){return t.call(this,o,e.PivotPanel,{objectProps:["engine","itemsSource"]})||this}return a(o,t),o}(n.ComponentBase),t("PivotPanel",s),u=n}}});