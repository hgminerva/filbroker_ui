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

import{WjComponentBehavior}from"wijmo/wijmo.vue2.base";import*as VueModule from"vue";import*as wjcChartInteraction from"wijmo/wijmo.chart.interaction";import VueModuleDefault from"vue";export var Vue=VueModuleDefault||VueModule;class WjFlexChartRangeSelectorBehavior extends WjComponentBehavior{}WjFlexChartRangeSelectorBehavior.tag="wj-flex-chart-range-selector",WjFlexChartRangeSelectorBehavior.parentInCtor=!0,WjFlexChartRangeSelectorBehavior.props=["control","isVisible","min","max","orientation","seamless","minScale","maxScale"],WjFlexChartRangeSelectorBehavior.events=["initialized","rangeChanged"],WjFlexChartRangeSelectorBehavior.classCtor=function(){return wjcChartInteraction.RangeSelector};export var WjFlexChartRangeSelector=WjFlexChartRangeSelectorBehavior.register();class WjFlexChartGesturesBehavior extends WjComponentBehavior{}WjFlexChartGesturesBehavior.tag="wj-flex-chart-gestures",WjFlexChartGesturesBehavior.parentInCtor=!0,WjFlexChartGesturesBehavior.props=["control","mouseAction","interactiveAxes","enable","scaleX","scaleY","posX","posY"],WjFlexChartGesturesBehavior.events=["initialized"],WjFlexChartGesturesBehavior.classCtor=function(){return wjcChartInteraction.ChartGestures};export var WjFlexChartGestures=WjFlexChartGesturesBehavior.register();