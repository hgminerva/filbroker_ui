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
define(["require","exports","wijmo/wijmo.vue2.base","wijmo/wijmo.olap","wijmo/wijmo.vue2.olap","vue","vue"],function(i,o,e,t,n,w,p){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),window.wijmo=window.wijmo||{},window.wijmo.vue2=window.wijmo.vue2||{},window.wijmo.vue2.olap=n,o.Vue=w.default||p,o.WjPivotGrid=o.Vue.component("wj-pivot-grid",{template:"<div/>",props:e._getProps("wijmo.olap.PivotGrid"),mounted:function(){e._initialize(this,new t.PivotGrid(this.$el))}}),o.WjPivotChart=o.Vue.component("wj-pivot-chart",{template:"<div/>",props:e._getProps("wijmo.olap.PivotChart"),mounted:function(){e._initialize(this,new t.PivotChart(this.$el))}}),o.WjPivotPanel=o.Vue.component("wj-pivot-panel",{template:"<div/>",props:e._getProps("wijmo.olap.PivotPanel"),mounted:function(){e._initialize(this,new t.PivotPanel(this.$el))}})});