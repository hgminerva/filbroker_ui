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

var __extends=this&&this.__extends||function(){var e=function(t,o){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(t,o)};return function(t,o){function r(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}}();import{WjComponentBehavior}from"wijmo/wijmo.vue2.base";import*as VueModule from"vue";import*as wjcGridDetail from"wijmo/wijmo.grid.detail";import VueModuleDefault from"vue";export var Vue=VueModuleDefault||VueModule;var WjFlexGridDetailBehavior=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._openedComponents=[],t}return __extends(t,e),t.render=function(e){return e("div")},t.prototype._createControl=function(){var t=this,o=e.prototype._createControl.call(this);return o.createDetailCell=function(e){var o=new(Vue.extend({data:function(){return{childVN:null}},render:function(e){return e("div",[this.childVN])}}));return o.childVN=t.component.$scopedSlots.default({row:e,item:e.dataItem}),o.$mount(),t._openedComponents.push(o),o.$el},o.disposeDetailCell=function(e){var o=e.detail,r=t._openedComponents;if(o)for(var n=0;n<r.length;n++)if(o===r[n].$el){r[n].$destroy(),r.splice(n,1);break}},o},t.tag="wj-flex-grid-detail",t.parentInCtor=!0,t.props=["control","maxHeight","keyActionEnter","detailVisibilityMode","rowHasDetail","isAnimated"],t.events=["initialized"],t.classCtor=function(){return wjcGridDetail.FlexGridDetailProvider},t}(WjComponentBehavior);export var WjFlexGridDetail=WjFlexGridDetailBehavior.register();