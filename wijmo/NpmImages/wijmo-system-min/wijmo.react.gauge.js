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
System.register(["wijmo/wijmo.react.base","wijmo/wijmo.gauge","wijmo/wijmo.react.gauge"],function(t,n){"use strict";var o,e,i,r,u,a,c,s=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var o in n)n.hasOwnProperty(o)&&(t[o]=n[o])};return function(n,o){function e(){this.constructor=n}t(n,o),n.prototype=null===o?Object.create(o):(e.prototype=o.prototype,new e)}}();n&&n.id;return{setters:[function(t){o=t},function(t){e=t},function(t){i=t}],execute:function(){window.wijmo=window.wijmo||{},window.wijmo.react=window.wijmo.react||{},window.wijmo.react.gauge=i,r=function(t){function n(n){return t.call(this,n,e.LinearGauge)||this}return s(n,t),n}(o.ComponentBase),t("LinearGauge",r),u=function(t){function n(n){return t.call(this,n,e.BulletGraph)||this}return s(n,t),n}(o.ComponentBase),t("BulletGraph",u),a=function(t){function n(n){return t.call(this,n,e.RadialGauge)||this}return s(n,t),n}(o.ComponentBase),t("RadialGauge",a),c=o}}});