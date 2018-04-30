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
var __extends=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])};return function(e,o){function r(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}}();define(["require","exports","wijmo/wijmo.react.base","wijmo/wijmo.chart","wijmo/wijmo.react.chart"],function(t,e,o,r,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),window.wijmo=window.wijmo||{},window.wijmo.react=window.wijmo.react||{},window.wijmo.react.chart=n;var i=function(t){function e(e){return t.call(this,e,r.FlexChart,{objectProps:["palette","plotMargin","footerStyle","headerStyle","itemsSource","options","selection"]})||this}return __extends(e,t),e}(o.ComponentBase);e.FlexChart=i;var c=function(t){function e(e){return t.call(this,e,r.FlexPie,{objectProps:["palette","plotMargin","footerStyle","headerStyle","itemsSource"]})||this}return __extends(e,t),e}(o.ComponentBase);e.FlexPie=c});