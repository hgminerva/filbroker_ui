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

var __extends=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();import{ComponentBase}from"wijmo/wijmo.react.base";import*as wjcGauge from"wijmo/wijmo.gauge";var LinearGauge=function(e){function t(t){return e.call(this,t,wjcGauge.LinearGauge)||this}return __extends(t,e),t}(ComponentBase);export{LinearGauge};var BulletGraph=function(e){function t(t){return e.call(this,t,wjcGauge.BulletGraph)||this}return __extends(t,e),t}(ComponentBase);export{BulletGraph};var RadialGauge=function(e){function t(t){return e.call(this,t,wjcGauge.RadialGauge,{objectProps:["needleElement"]})||this}return __extends(t,e),t}(ComponentBase);export{RadialGauge};var Range=function(e){function t(t){var n=e.call(this,t,wjcGauge.Range)||this;return n._parentProp="ranges",n}return __extends(t,e),t}(ComponentBase);export{Range};