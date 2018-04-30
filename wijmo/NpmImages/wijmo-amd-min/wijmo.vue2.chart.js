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
define(["require","exports","wijmo/wijmo.vue2.base","wijmo/wijmo.chart","wijmo/wijmo.vue2.chart","vue","vue"],function(e,t,i,o,r,n,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),window.wijmo=window.wijmo||{},window.wijmo.vue2=window.wijmo.vue2||{},window.wijmo.vue2.chart=r,t.Vue=n.default||s,t.WjFlexChart=t.Vue.component("wj-flex-chart",{template:"<div><slot/></div>",props:i._getProps("wijmo.chart.FlexChart",["tooltipContent"]),mounted:function(){var e=this,t=new o.FlexChart(this.$el);this.$children.forEach(function(r){switch(r.$options.name){case"wj-flex-chart-series":var n=i._initialize(r,new o.Series);if(r.$el.style.cssText.length){var s={};r.$el.style.cssText.split(";").forEach(function(e){var t=e.split(":");2==t.length&&(s[t[0].trim()]=t[1].trim())}),n.style=s}t.series.push(n);break;case"wj-flex-chart-legend":var a=i._initialize(r,new o.Legend(null));t.legend=a;break;case"wj-flex-chart-axis":var l=i._initialize(r,new o.Axis);r.wjProperty?t[r.wjProperty]=l:t.axes.push(l)}e.$el.removeChild(r.$el)}),this.tooltipContent&&(t.tooltip.content=this.tooltipContent),i._initialize(this,t)}}),t.WjFlexChartAxis=t.Vue.component("wj-flex-chart-axis",{template:"<div/>",props:i._getProps("wijmo.chart.Axis",["wjProperty"])}),t.WjFlexChartLegend=t.Vue.component("wj-flex-chart-legend",{template:"<div/>",props:i._getProps("wijmo.chart.Legend")}),t.WjFlexChartSeries=t.Vue.component("wj-flex-chart-series",{template:"<div/>",props:i._getProps("wijmo.chart.Series")})});