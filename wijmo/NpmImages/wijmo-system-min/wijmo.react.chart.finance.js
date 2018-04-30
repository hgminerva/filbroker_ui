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
System.register(["wijmo/wijmo.react.base","wijmo/wijmo.chart.finance","wijmo/wijmo.react.chart.finance"],function(t,o){"use strict";var n,i,e,r,c,a=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var n in o)o.hasOwnProperty(n)&&(t[n]=o[n])};return function(o,n){function i(){this.constructor=o}t(o,n),o.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}();o&&o.id;return{setters:[function(t){n=t},function(t){i=t},function(t){e=t}],execute:function(){window.wijmo=window.wijmo||{},window.wijmo.react=window.wijmo.react||{},window.wijmo.react.chart=window.wijmo.react.chart||{},window.wijmo.react.chart.finance=e,r=function(t){function o(o){return t.call(this,o,i.FinancialChart,{objectProps:["palette","plotMargin","footerStyle","headerStyle","itemsSource","options","selection"]})||this}return a(o,t),o}(n.ComponentBase),t("FinancialChart",r),c=n}}});