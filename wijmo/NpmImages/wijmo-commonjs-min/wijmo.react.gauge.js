/*!
    *
    * Wijmo Library 5.20192.631
    * http://wijmo.com/
    *
    * Copyright(c) GrapeCity, Inc.  All rights reserved.
    *
    * Licensed under the GrapeCity Commercial License.
    * sales@wijmo.com
    * wijmo.com/products/wijmo-5/license/
    *
    */

"use strict";var __extends=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(exports,"__esModule",{value:!0});var wijmo_react_base_1=require("wijmo/wijmo.react.base"),wjcGauge=require("wijmo/wijmo.gauge"),LinearGauge=function(e){function t(t){return e.call(this,t,wjcGauge.LinearGauge)||this}return __extends(t,e),t}(wijmo_react_base_1.ComponentBase);exports.LinearGauge=LinearGauge;var BulletGraph=function(e){function t(t){return e.call(this,t,wjcGauge.BulletGraph)||this}return __extends(t,e),t}(wijmo_react_base_1.ComponentBase);exports.BulletGraph=BulletGraph;var RadialGauge=function(e){function t(t){return e.call(this,t,wjcGauge.RadialGauge,{objectProps:["needleElement"]})||this}return __extends(t,e),t}(wijmo_react_base_1.ComponentBase);exports.RadialGauge=RadialGauge;var Range=function(e){function t(t){var n=e.call(this,t,wjcGauge.Range)||this;return n._parentProp="ranges",n}return __extends(t,e),t}(wijmo_react_base_1.ComponentBase);exports.Range=Range;