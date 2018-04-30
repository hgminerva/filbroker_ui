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
System.register(["wijmo/wijmo.vue2.base","wijmo/wijmo.grid.grouppanel","wijmo/wijmo.vue2.grid.grouppanel","vue"],function(i,o){"use strict";var e,n,w,u,t,r,m;o&&o.id;return{setters:[function(i){e=i},function(i){n=i},function(i){w=i},function(i){u=i,t=i}],execute:function(){window.wijmo=window.wijmo||{},window.wijmo.vue2=window.wijmo.vue2||{},window.wijmo.vue2.grid=window.wijmo.vue2.grid||{},window.wijmo.vue2.grid.grouppanel=w,i("Vue",r=u.default||t),i("WjGroupPanel",m=r.component("wj-group-panel",{template:"<div/>",props:e._getProps("wijmo.grid.grouppanel.GroupPanel"),mounted:function(){e._initialize(this,new n.GroupPanel(this.$el))}}))}}});