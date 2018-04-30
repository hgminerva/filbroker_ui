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
System.register(["wijmo/wijmo.vue2.base","wijmo/wijmo.nav","wijmo/wijmo.vue2.nav","vue"],function(e,i){"use strict";var n,o,w,t,u,m,j;i&&i.id;return{setters:[function(e){n=e},function(e){o=e},function(e){w=e},function(e){t=e,u=e}],execute:function(){window.wijmo=window.wijmo||{},window.wijmo.vue2=window.wijmo.vue2||{},window.wijmo.vue2.nav=w,e("Vue",m=t.default||u),e("WjTreeView",j=m.component("wj-tree-view",{template:"<div/>",props:n._getProps("wijmo.nav.TreeView"),mounted:function(){n._initialize(this,new o.TreeView(this.$el))}}))}}});