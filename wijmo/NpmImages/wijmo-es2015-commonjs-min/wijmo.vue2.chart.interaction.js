/*!
    *
    * Wijmo Library 5.20192.631
    * http://wijmo.com/
    *
    * Copyright(c) GrapeCity, Inc.  All rights reserved.
    *
    * Licensed under the GrapeCity Commercial License.
    * sales@wijmo.com
    * wijmo.com/products/wijmo-5/license/
    *
    */

"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const wijmo_vue2_base_1=require("wijmo/wijmo.vue2.base"),VueModule=require("vue"),wjcChartInteraction=require("wijmo/wijmo.chart.interaction"),vue_1=require("vue");exports.Vue=vue_1.default||VueModule;class WjFlexChartRangeSelectorBehavior extends wijmo_vue2_base_1.WjComponentBehavior{}WjFlexChartRangeSelectorBehavior.tag="wj-flex-chart-range-selector",WjFlexChartRangeSelectorBehavior.parentInCtor=!0,WjFlexChartRangeSelectorBehavior.props=["control","isVisible","min","max","orientation","seamless","minScale","maxScale"],WjFlexChartRangeSelectorBehavior.events=["initialized","rangeChanged"],WjFlexChartRangeSelectorBehavior.classCtor=function(){return wjcChartInteraction.RangeSelector},exports.WjFlexChartRangeSelector=WjFlexChartRangeSelectorBehavior.register();class WjFlexChartGesturesBehavior extends wijmo_vue2_base_1.WjComponentBehavior{}WjFlexChartGesturesBehavior.tag="wj-flex-chart-gestures",WjFlexChartGesturesBehavior.parentInCtor=!0,WjFlexChartGesturesBehavior.props=["control","mouseAction","interactiveAxes","enable","scaleX","scaleY","posX","posY"],WjFlexChartGesturesBehavior.events=["initialized"],WjFlexChartGesturesBehavior.classCtor=function(){return wjcChartInteraction.ChartGestures},exports.WjFlexChartGestures=WjFlexChartGesturesBehavior.register();