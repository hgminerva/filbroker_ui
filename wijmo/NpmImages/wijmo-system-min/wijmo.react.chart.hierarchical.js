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
System.register(["wijmo/wijmo.react.base","wijmo/wijmo.chart.hierarchical","wijmo/wijmo.react.chart.hierarchical"],function(t,e){"use strict";var o,r,i,n,c,a,u=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])};return function(e,o){function r(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}}();e&&e.id;return{setters:[function(t){o=t},function(t){r=t},function(t){i=t}],execute:function(){window.wijmo=window.wijmo||{},window.wijmo.react=window.wijmo.react||{},window.wijmo.react.chart=window.wijmo.react.chart||{},window.wijmo.react.chart.hierarchical=i,n=function(t){function e(e){return t.call(this,e,r.Sunburst,{objectProps:["palette","plotMargin","footerStyle","headerStyle","itemsSource","bindingName","childItemsPath"]})||this}return u(e,t),e}(o.ComponentBase),t("Sunburst",n),c=function(t){function e(e){return t.call(this,e,r.TreeMap,{objectProps:["palette","plotMargin","footerStyle","headerStyle","itemsSource","bindingName","childItemsPath"]})||this}return u(e,t),e}(o.ComponentBase),t("TreeMap",c),a=o}}});