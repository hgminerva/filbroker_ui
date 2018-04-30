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
System.register(["wijmo/wijmo.vue2.base","wijmo/wijmo.olap","wijmo/wijmo.vue2.olap","vue"],function(i,o){"use strict";var t,e,n,w,p,m,a,u,v;o&&o.id;return{setters:[function(i){t=i},function(i){e=i},function(i){n=i},function(i){w=i,p=i}],execute:function(){window.wijmo=window.wijmo||{},window.wijmo.vue2=window.wijmo.vue2||{},window.wijmo.vue2.olap=n,i("Vue",m=w.default||p),i("WjPivotGrid",a=m.component("wj-pivot-grid",{template:"<div/>",props:t._getProps("wijmo.olap.PivotGrid"),mounted:function(){t._initialize(this,new e.PivotGrid(this.$el))}})),i("WjPivotChart",u=m.component("wj-pivot-chart",{template:"<div/>",props:t._getProps("wijmo.olap.PivotChart"),mounted:function(){t._initialize(this,new e.PivotChart(this.$el))}})),i("WjPivotPanel",v=m.component("wj-pivot-panel",{template:"<div/>",props:t._getProps("wijmo.olap.PivotPanel"),mounted:function(){t._initialize(this,new e.PivotPanel(this.$el))}}))}}});