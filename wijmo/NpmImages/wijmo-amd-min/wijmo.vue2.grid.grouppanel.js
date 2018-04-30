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
define(["require","exports","wijmo/wijmo.vue2.base","wijmo/wijmo.grid.grouppanel","wijmo/wijmo.vue2.grid.grouppanel","vue","vue"],function(e,i,o,w,u,n,r){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),window.wijmo=window.wijmo||{},window.wijmo.vue2=window.wijmo.vue2||{},window.wijmo.vue2.grid=window.wijmo.vue2.grid||{},window.wijmo.vue2.grid.grouppanel=u,i.Vue=n.default||r,i.WjGroupPanel=i.Vue.component("wj-group-panel",{template:"<div/>",props:o._getProps("wijmo.grid.grouppanel.GroupPanel"),mounted:function(){o._initialize(this,new w.GroupPanel(this.$el))}})});