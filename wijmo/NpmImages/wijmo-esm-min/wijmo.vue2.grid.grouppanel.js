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

var __extends=this&&this.__extends||function(){var o=function(e,r){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(o,e){o.__proto__=e}||function(o,e){for(var r in e)e.hasOwnProperty(r)&&(o[r]=e[r])})(e,r)};return function(e,r){function t(){this.constructor=e}o(e,r),e.prototype=null===r?Object.create(r):(t.prototype=r.prototype,new t)}}();import{WjComponentBehavior}from"wijmo/wijmo.vue2.base";import*as VueModule from"vue";import*as wjcGridGrouppanel from"wijmo/wijmo.grid.grouppanel";import VueModuleDefault from"vue";export var Vue=VueModuleDefault||VueModule;var WjGroupPanelBehavior=function(o){function e(){return null!==o&&o.apply(this,arguments)||this}return __extends(e,o),e.tag="wj-group-panel",e.props=["control","isDisabled","hideGroupedColumns","showDragGlyphs","maxGroups","placeholder","filter","grid"],e.events=["initialized","gotFocus","lostFocus","refreshing","refreshed"],e.classCtor=function(){return wjcGridGrouppanel.GroupPanel},e}(WjComponentBehavior);export var WjGroupPanel=WjGroupPanelBehavior.register();