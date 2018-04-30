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
var __extends=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var e in o)o.hasOwnProperty(e)&&(t[e]=o[e])};return function(o,e){function n(){this.constructor=o}t(o,e),o.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}}();define(["require","exports","wijmo/wijmo.react.base","wijmo/wijmo.olap","wijmo/wijmo.react.olap"],function(t,o,e,n,r){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),window.wijmo=window.wijmo||{},window.wijmo.react=window.wijmo.react||{},window.wijmo.react.olap=r;var i=function(t){function o(o){return t.call(this,o,n.PivotGrid,{objectProps:["childItemsPath","mergeManager","itemsSource"]})||this}return __extends(o,t),o}(e.ComponentBase);o.PivotGrid=i;var c=function(t){function o(o){return t.call(this,o,n.PivotChart,{objectProps:["itemsSource"]})||this}return __extends(o,t),o}(e.ComponentBase);o.PivotChart=c;var a=function(t){function o(o){return t.call(this,o,n.PivotPanel,{objectProps:["engine","itemsSource"]})||this}return __extends(o,t),o}(e.ComponentBase);o.PivotPanel=a});