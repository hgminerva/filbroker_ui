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
System.register(["wijmo/wijmo.vue2.base","wijmo/wijmo.gauge","wijmo/wijmo.vue2.gauge","vue"],function(e,i){"use strict";function t(e,i){e.$children.forEach(function(t){switch(t.$options.name){case"wj-range":var a=n._initialize(t,new o.Range);t.wjProperty?i[t.wjProperty]=a:i.ranges.push(a)}e.$el.removeChild(t.$el)})}var n,o,a,u,r,w,g,l,s,m;i&&i.id;return{setters:[function(e){n=e},function(e){o=e},function(e){a=e},function(e){u=e,r=e}],execute:function(){window.wijmo=window.wijmo||{},window.wijmo.vue2=window.wijmo.vue2||{},window.wijmo.vue2.gauge=a,e("Vue",w=u.default||r),e("WjLinearGauge",g=w.component("wj-linear-gauge",{template:"<div><slot/></div>",props:n._getProps("wijmo.gauge.LinearGauge"),mounted:function(){var e=new o.LinearGauge(this.$el);t(this,e),n._initialize(this,e)}})),e("WjBulletGraph",l=w.component("wj-bullet-graph",{template:"<div><slot/></div>",props:n._getProps("wijmo.gauge.BulletGraph"),mounted:function(){var e=new o.BulletGraph(this.$el);t(this,e),n._initialize(this,e)}})),e("WjRadialGauge",s=w.component("wj-radial-gauge",{template:"<div><slot/></div>",props:n._getProps("wijmo.gauge.RadialGauge"),mounted:function(){var e=new o.RadialGauge(this.$el);t(this,e),n._initialize(this,e)}})),e("WjRange",m=w.component("wj-range",{template:"<div/>",props:n._getProps("wijmo.gauge.Range",["wjProperty"])}))}}});