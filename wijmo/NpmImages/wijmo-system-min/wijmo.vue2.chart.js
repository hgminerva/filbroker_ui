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
System.register(["wijmo/wijmo.vue2.base","wijmo/wijmo.chart","wijmo/wijmo.vue2.chart","vue"],function(e,t){"use strict";var i,o,n,r,s,a,l,w,c,h;t&&t.id;return{setters:[function(e){i=e},function(e){o=e},function(e){n=e},function(e){r=e,s=e}],execute:function(){window.wijmo=window.wijmo||{},window.wijmo.vue2=window.wijmo.vue2||{},window.wijmo.vue2.chart=n,e("Vue",a=r.default||s),e("WjFlexChart",l=a.component("wj-flex-chart",{template:"<div><slot/></div>",props:i._getProps("wijmo.chart.FlexChart",["tooltipContent"]),mounted:function(){var e=this,t=new o.FlexChart(this.$el);this.$children.forEach(function(n){switch(n.$options.name){case"wj-flex-chart-series":var r=i._initialize(n,new o.Series);if(n.$el.style.cssText.length){var s={};n.$el.style.cssText.split(";").forEach(function(e){var t=e.split(":");2==t.length&&(s[t[0].trim()]=t[1].trim())}),r.style=s}t.series.push(r);break;case"wj-flex-chart-legend":var a=i._initialize(n,new o.Legend(null));t.legend=a;break;case"wj-flex-chart-axis":var l=i._initialize(n,new o.Axis);n.wjProperty?t[n.wjProperty]=l:t.axes.push(l)}e.$el.removeChild(n.$el)}),this.tooltipContent&&(t.tooltip.content=this.tooltipContent),i._initialize(this,t)}})),e("WjFlexChartAxis",w=a.component("wj-flex-chart-axis",{template:"<div/>",props:i._getProps("wijmo.chart.Axis",["wjProperty"])})),e("WjFlexChartLegend",c=a.component("wj-flex-chart-legend",{template:"<div/>",props:i._getProps("wijmo.chart.Legend")})),e("WjFlexChartSeries",h=a.component("wj-flex-chart-series",{template:"<div/>",props:i._getProps("wijmo.chart.Series")}))}}});