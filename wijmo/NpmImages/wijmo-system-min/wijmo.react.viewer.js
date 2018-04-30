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
System.register(["wijmo/wijmo.react.base","wijmo/wijmo.viewer","wijmo/wijmo.react.viewer"],function(t,e){"use strict";var o,n,i,r,w,c,u=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();e&&e.id;return{setters:[function(t){o=t},function(t){n=t},function(t){i=t}],execute:function(){window.wijmo=window.wijmo||{},window.wijmo.react=window.wijmo.react||{},window.wijmo.react.viewer=i,r=function(t){function e(e){return t.call(this,e,n.ReportViewer)||this}return u(e,t),e}(o.ComponentBase),t("ReportViewer",r),w=function(t){function e(e){return t.call(this,e,n.PdfViewer)||this}return u(e,t),e}(o.ComponentBase),t("PdfViewer",w),c=o}}});