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

import{WjComponentBehavior}from"wijmo/wijmo.vue2.base";import*as VueModule from"vue";import*as wjcNav from"wijmo/wijmo.nav";import VueModuleDefault from"vue";export var Vue=VueModuleDefault||VueModule;class WjTreeViewBehavior extends WjComponentBehavior{}WjTreeViewBehavior.tag="wj-tree-view",WjTreeViewBehavior.props=["control","isDisabled","childItemsPath","displayMemberPath","imageMemberPath","checkedMemberPath","isContentHtml","showCheckboxes","autoCollapse","isAnimated","isReadOnly","allowDragging","checkOnClick","expandOnClick","expandOnLoad","lazyLoadFunction","itemsSource","selectedItem","selectedNode","checkedItems"],WjTreeViewBehavior.events=["initialized","gotFocus","lostFocus","refreshing","refreshed","itemsSourceChanged","loadingItems","loadedItems","itemClicked","isCollapsedChanging","isCollapsedChanged","isCheckedChanging","isCheckedChanged","formatItem","dragStart","dragOver","drop","dragEnd","nodeEditStarting","nodeEditStarted","nodeEditEnding","nodeEditEnded"],WjTreeViewBehavior.changeEvents={selectedItemChanged:["selectedItem","selectedNode"],checkedItemsChanged:["checkedItems"]},WjTreeViewBehavior.classCtor=function(){return wjcNav.TreeView};export var WjTreeView=WjTreeViewBehavior.register();