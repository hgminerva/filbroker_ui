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

"use strict";var __extends=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();Object.defineProperty(exports,"__esModule",{value:!0});var wijmo_vue2_base_1=require("wijmo/wijmo.vue2.base"),VueModule=require("vue"),wjcNav=require("wijmo/wijmo.nav"),vue_1=require("vue");exports.Vue=vue_1.default||VueModule;var WjTreeViewBehavior=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.tag="wj-tree-view",t.props=["control","isDisabled","childItemsPath","displayMemberPath","imageMemberPath","checkedMemberPath","isContentHtml","showCheckboxes","autoCollapse","isAnimated","isReadOnly","allowDragging","checkOnClick","expandOnClick","expandOnLoad","lazyLoadFunction","itemsSource","selectedItem","selectedNode","checkedItems"],t.events=["initialized","gotFocus","lostFocus","refreshing","refreshed","itemsSourceChanged","loadingItems","loadedItems","itemClicked","isCollapsedChanging","isCollapsedChanged","isCheckedChanging","isCheckedChanged","formatItem","dragStart","dragOver","drop","dragEnd","nodeEditStarting","nodeEditStarted","nodeEditEnding","nodeEditEnded"],t.changeEvents={selectedItemChanged:["selectedItem","selectedNode"],checkedItemsChanged:["checkedItems"]},t.classCtor=function(){return wjcNav.TreeView},t}(wijmo_vue2_base_1.WjComponentBehavior);exports.WjTreeView=WjTreeViewBehavior.register();