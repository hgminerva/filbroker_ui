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
System.register(["wijmo/wijmo.react.base","wijmo/wijmo.grid","wijmo/wijmo.react.grid"],function(t,o){"use strict";var i,e,n,r,c,w=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var i in o)o.hasOwnProperty(i)&&(t[i]=o[i])};return function(o,i){function e(){this.constructor=o}t(o,i),o.prototype=null===i?Object.create(i):(e.prototype=i.prototype,new e)}}();o&&o.id;return{setters:[function(t){i=t},function(t){e=t},function(t){n=t}],execute:function(){window.wijmo=window.wijmo||{},window.wijmo.react=window.wijmo.react||{},window.wijmo.react.grid=n,r=function(t){function o(o){return t.call(this,o,e.FlexGrid,{objectProps:["childItemsPath","mergeManager","itemsSource"]})||this}return w(o,t),o}(i.ComponentBase),t("FlexGrid",r),c=i}}});