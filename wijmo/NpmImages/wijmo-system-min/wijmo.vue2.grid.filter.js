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
System.register(["wijmo/wijmo.vue2.base","wijmo/wijmo.vue2.grid.filter","vue"],function(i,e){"use strict";var o,w,t,r,n,d;e&&e.id;return{setters:[function(i){o=i},function(i){w=i},function(i){t=i,r=i}],execute:function(){window.wijmo=window.wijmo||{},window.wijmo.vue2=window.wijmo.vue2||{},window.wijmo.vue2.grid=window.wijmo.vue2.grid||{},window.wijmo.vue2.grid.filter=w,i("Vue",n=t.default||r),i("WjFlexGridFilter",d=n.component("wj-flex-grid-filter",{template:"<div/>",props:o._getProps("wijmo.grid.filter.FlexGridFilter")}))}}});