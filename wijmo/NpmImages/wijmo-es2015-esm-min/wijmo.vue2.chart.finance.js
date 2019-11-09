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

import{WjComponentBehavior}from"wijmo/wijmo.vue2.base";import*as VueModule from"vue";import*as wjcChartFinance from"wijmo/wijmo.chart.finance";import VueModuleDefault from"vue";export var Vue=VueModuleDefault||VueModule;class WjFinancialChartBehavior extends WjComponentBehavior{_updateControl(e,i){switch(e){case"tooltipContent":this.control.tooltip.content=i;break;case"labelContent":this.control.dataLabel.content=i;break;default:super._updateControl(e,i)}}}WjFinancialChartBehavior.tag="wj-financial-chart",WjFinancialChartBehavior.props=["control","isDisabled","binding","footer","header","selectionMode","palette","plotMargin","footerStyle","headerStyle","tooltipContent","itemsSource","bindingX","interpolateNulls","legendToggle","symbolSize","options","selection","itemFormatter","labelContent","chartType"],WjFinancialChartBehavior.events=["initialized","gotFocus","lostFocus","refreshing","refreshed","rendering","rendered","itemsSourceChanging","itemsSourceChanged","seriesVisibilityChanged"],WjFinancialChartBehavior.changeEvents={selectionChanged:["selection"]},WjFinancialChartBehavior.classCtor=function(){return wjcChartFinance.FinancialChart};export var WjFinancialChart=WjFinancialChartBehavior.register();class WjFinancialChartSeriesBehavior extends WjComponentBehavior{}WjFinancialChartSeriesBehavior.tag="wj-financial-chart-series",WjFinancialChartSeriesBehavior.parentProp="series",WjFinancialChartSeriesBehavior.siblingId="series",WjFinancialChartSeriesBehavior.props=["wjProperty","control","axisX","axisY","binding","bindingX","cssClass","name","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","chartType"],WjFinancialChartSeriesBehavior.events=["initialized","rendering","rendered"],WjFinancialChartSeriesBehavior.changeEvents={"chart.seriesVisibilityChanged":["visibility"]},WjFinancialChartSeriesBehavior.classCtor=function(){return wjcChartFinance.FinancialSeries};export var WjFinancialChartSeries=WjFinancialChartSeriesBehavior.register();