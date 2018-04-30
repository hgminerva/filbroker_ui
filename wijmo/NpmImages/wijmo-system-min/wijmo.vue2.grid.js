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
System.register(["wijmo/wijmo.vue2.base","wijmo/wijmo.grid","wijmo/wijmo.grid.filter","wijmo/wijmo.vue2.grid","vue"],function(i,e){"use strict";var o,n,t,r,w,l,m,u,d;e&&e.id;return{setters:[function(i){o=i},function(i){n=i},function(i){t=i},function(i){r=i},function(i){w=i,l=i}],execute:function(){window.wijmo=window.wijmo||{},window.wijmo.vue2=window.wijmo.vue2||{},window.wijmo.vue2.grid=r,i("Vue",m=w.default||l),i("WjFlexGrid",u=m.component("wj-flex-grid",{template:"<div><slot/></div>",props:o._getProps("wijmo.grid.FlexGrid"),mounted:function(){var i=this,e=!0;this.$children.forEach(function(i){switch(i.$options.name){case"wj-flex-grid-column":e=!1}});var r=new n.FlexGrid(this.$el,{autoGenerateColumns:e});this.$children.forEach(function(e){switch(e.$options.name){case"wj-flex-grid-column":var w=o._initialize(e,new n.Column);r.columns.push(w);break;case"wj-flex-grid-filter":o._initialize(e,new t.FlexGridFilter(r))}i.$el.removeChild(e.$el)}),o._initialize(this,r)}})),i("WjFlexGridColumn",d=m.component("wj-flex-grid-column",{template:"<div/>",props:o._getProps("wijmo.grid.Column")}))}}});