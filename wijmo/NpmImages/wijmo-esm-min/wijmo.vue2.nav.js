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

var __extends=this&&this.__extends||function(){var e=function(t,o){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(t,o)};return function(t,o){function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();import{WjComponentBehavior}from"wijmo/wijmo.vue2.base";import*as VueModule from"vue";import*as wjcNav from"wijmo/wijmo.nav";import VueModuleDefault from"vue";export var Vue=VueModuleDefault||VueModule;var WjTreeViewBehavior=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.tag="wj-tree-view",t.props=["control","isDisabled","childItemsPath","displayMemberPath","imageMemberPath","checkedMemberPath","isContentHtml","showCheckboxes","autoCollapse","isAnimated","isReadOnly","allowDragging","checkOnClick","expandOnClick","expandOnLoad","lazyLoadFunction","itemsSource","selectedItem","selectedNode","checkedItems"],t.events=["initialized","gotFocus","lostFocus","refreshing","refreshed","itemsSourceChanged","loadingItems","loadedItems","itemClicked","isCollapsedChanging","isCollapsedChanged","isCheckedChanging","isCheckedChanged","formatItem","dragStart","dragOver","drop","dragEnd","nodeEditStarting","nodeEditStarted","nodeEditEnding","nodeEditEnded"],t.changeEvents={selectedItemChanged:["selectedItem","selectedNode"],checkedItemsChanged:["checkedItems"]},t.classCtor=function(){return wjcNav.TreeView},t}(WjComponentBehavior);export var WjTreeView=WjTreeViewBehavior.register();