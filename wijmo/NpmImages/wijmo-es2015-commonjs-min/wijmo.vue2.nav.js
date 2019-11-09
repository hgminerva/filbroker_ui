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

"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const wijmo_vue2_base_1=require("wijmo/wijmo.vue2.base"),VueModule=require("vue"),wjcNav=require("wijmo/wijmo.nav"),vue_1=require("vue");exports.Vue=vue_1.default||VueModule;class WjTreeViewBehavior extends wijmo_vue2_base_1.WjComponentBehavior{}WjTreeViewBehavior.tag="wj-tree-view",WjTreeViewBehavior.props=["control","isDisabled","childItemsPath","displayMemberPath","imageMemberPath","checkedMemberPath","isContentHtml","showCheckboxes","autoCollapse","isAnimated","isReadOnly","allowDragging","checkOnClick","expandOnClick","expandOnLoad","lazyLoadFunction","itemsSource","selectedItem","selectedNode","checkedItems"],WjTreeViewBehavior.events=["initialized","gotFocus","lostFocus","refreshing","refreshed","itemsSourceChanged","loadingItems","loadedItems","itemClicked","isCollapsedChanging","isCollapsedChanged","isCheckedChanging","isCheckedChanged","formatItem","dragStart","dragOver","drop","dragEnd","nodeEditStarting","nodeEditStarted","nodeEditEnding","nodeEditEnded"],WjTreeViewBehavior.changeEvents={selectedItemChanged:["selectedItem","selectedNode"],checkedItemsChanged:["checkedItems"]},WjTreeViewBehavior.classCtor=function(){return wjcNav.TreeView},exports.WjTreeView=WjTreeViewBehavior.register();