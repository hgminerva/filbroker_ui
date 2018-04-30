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
define(["require","exports","wijmo/wijmo.vue2.base","wijmo/wijmo.nav","wijmo/wijmo.vue2.nav","vue","vue"],function(e,i,w,o,n,t,u){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),window.wijmo=window.wijmo||{},window.wijmo.vue2=window.wijmo.vue2||{},window.wijmo.vue2.nav=n,i.Vue=t.default||u,i.WjTreeView=i.Vue.component("wj-tree-view",{template:"<div/>",props:w._getProps("wijmo.nav.TreeView"),mounted:function(){w._initialize(this,new o.TreeView(this.$el))}})});