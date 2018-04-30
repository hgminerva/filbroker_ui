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
define(["require","exports","wijmo/wijmo.vue2.base","wijmo/wijmo.gauge","wijmo/wijmo.vue2.gauge","vue","vue"],function(e,i,o,t,a,n,u){"use strict";function r(e,i){e.$children.forEach(function(a){switch(a.$options.name){case"wj-range":var n=o._initialize(a,new t.Range);a.wjProperty?i[a.wjProperty]=n:i.ranges.push(n)}e.$el.removeChild(a.$el)})}Object.defineProperty(i,"__esModule",{value:!0}),window.wijmo=window.wijmo||{},window.wijmo.vue2=window.wijmo.vue2||{},window.wijmo.vue2.gauge=a,i.Vue=n.default||u,i.WjLinearGauge=i.Vue.component("wj-linear-gauge",{template:"<div><slot/></div>",props:o._getProps("wijmo.gauge.LinearGauge"),mounted:function(){var e=new t.LinearGauge(this.$el);r(this,e),o._initialize(this,e)}}),i.WjBulletGraph=i.Vue.component("wj-bullet-graph",{template:"<div><slot/></div>",props:o._getProps("wijmo.gauge.BulletGraph"),mounted:function(){var e=new t.BulletGraph(this.$el);r(this,e),o._initialize(this,e)}}),i.WjRadialGauge=i.Vue.component("wj-radial-gauge",{template:"<div><slot/></div>",props:o._getProps("wijmo.gauge.RadialGauge"),mounted:function(){var e=new t.RadialGauge(this.$el);r(this,e),o._initialize(this,e)}}),i.WjRange=i.Vue.component("wj-range",{template:"<div/>",props:o._getProps("wijmo.gauge.Range",["wjProperty"])})});