﻿/*!
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

import{WjComponentBehavior}from"wijmo/wijmo.vue2.base";import*as VueModule from"vue";import*as wjcChartAnimation from"wijmo/wijmo.chart.animation";import VueModuleDefault from"vue";export var Vue=VueModuleDefault||VueModule;class WjFlexChartAnimationBehavior extends WjComponentBehavior{}WjFlexChartAnimationBehavior.tag="wj-flex-chart-animation",WjFlexChartAnimationBehavior.parentInCtor=!0,WjFlexChartAnimationBehavior.props=["control","animationMode","easing","duration","axisAnimation"],WjFlexChartAnimationBehavior.events=["initialized"],WjFlexChartAnimationBehavior.classCtor=function(){return wjcChartAnimation.ChartAnimation};export var WjFlexChartAnimation=WjFlexChartAnimationBehavior.register();