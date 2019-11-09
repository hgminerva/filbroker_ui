﻿/*!
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

var __extends=this&&this.__extends||function(){var e=function(t,a){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a])})(t,a)};return function(t,a){function n(){this.constructor=t}e(t,a),t.prototype=null===a?Object.create(a):(n.prototype=a.prototype,new n)}}();import{WjComponentBehavior}from"wijmo/wijmo.vue2.base";import*as VueModule from"vue";import*as wjcGauge from"wijmo/wijmo.gauge";import VueModuleDefault from"vue";export var Vue=VueModuleDefault||VueModule;var WjLinearGaugeBehavior=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.tag="wj-linear-gauge",t.props=["control","isDisabled","value","min","max","origin","isReadOnly","step","format","thickness","hasShadow","isAnimated","showText","showTicks","showTickText","showRanges","stackRanges","thumbSize","tickSpacing","getText","direction"],t.events=["initialized","gotFocus","lostFocus","refreshing","refreshed"],t.changeEvents={valueChanged:["value"]},t.classCtor=function(){return wjcGauge.LinearGauge},t}(WjComponentBehavior);export var WjLinearGauge=WjLinearGaugeBehavior.register();var WjBulletGraphBehavior=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.tag="wj-bullet-graph",t.props=["control","isDisabled","value","min","max","origin","isReadOnly","step","format","thickness","hasShadow","isAnimated","showText","showTicks","showTickText","showRanges","stackRanges","thumbSize","tickSpacing","getText","direction","target","good","bad"],t.events=["initialized","gotFocus","lostFocus","refreshing","refreshed"],t.changeEvents={valueChanged:["value"]},t.classCtor=function(){return wjcGauge.BulletGraph},t}(WjComponentBehavior);export var WjBulletGraph=WjBulletGraphBehavior.register();var WjRadialGaugeBehavior=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.tag="wj-radial-gauge",t.props=["control","isDisabled","value","min","max","origin","isReadOnly","step","format","thickness","hasShadow","isAnimated","showText","showTicks","showTickText","showRanges","stackRanges","thumbSize","tickSpacing","getText","autoScale","startAngle","sweepAngle","needleShape","needleLength","needleElement"],t.events=["initialized","gotFocus","lostFocus","refreshing","refreshed"],t.changeEvents={valueChanged:["value"]},t.classCtor=function(){return wjcGauge.RadialGauge},t}(WjComponentBehavior);export var WjRadialGauge=WjRadialGaugeBehavior.register();var WjRangeBehavior=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.tag="wj-range",t.parentProp="ranges",t.props=["wjProperty","control","color","min","max","name","thickness"],t.events=["initialized"],t.classCtor=function(){return wjcGauge.Range},t}(WjComponentBehavior);export var WjRange=WjRangeBehavior.register();