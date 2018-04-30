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
define(["require","exports","wijmo/wijmo.vue2.base","wijmo/wijmo.grid","wijmo/wijmo.grid.filter","wijmo/wijmo.vue2.grid","vue","vue"],function(i,e,o,n,r,t,l,w){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),window.wijmo=window.wijmo||{},window.wijmo.vue2=window.wijmo.vue2||{},window.wijmo.vue2.grid=t,e.Vue=l.default||w,e.WjFlexGrid=e.Vue.component("wj-flex-grid",{template:"<div><slot/></div>",props:o._getProps("wijmo.grid.FlexGrid"),mounted:function(){var i=this,e=!0;this.$children.forEach(function(i){switch(i.$options.name){case"wj-flex-grid-column":e=!1}});var t=new n.FlexGrid(this.$el,{autoGenerateColumns:e});this.$children.forEach(function(e){switch(e.$options.name){case"wj-flex-grid-column":var l=o._initialize(e,new n.Column);t.columns.push(l);break;case"wj-flex-grid-filter":o._initialize(e,new r.FlexGridFilter(t))}i.$el.removeChild(e.$el)}),o._initialize(this,t)}}),e.WjFlexGridColumn=e.Vue.component("wj-flex-grid-column",{template:"<div/>",props:o._getProps("wijmo.grid.Column")})});