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
define(["require","exports","wijmo/wijmo.vue2.base","wijmo/wijmo.viewer","wijmo/wijmo.vue2.viewer","vue","vue"],function(e,i,w,o,t,r,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),window.wijmo=window.wijmo||{},window.wijmo.vue2=window.wijmo.vue2||{},window.wijmo.vue2.viewer=t,i.Vue=r.default||n,i.WjReportViewer=i.Vue.component("wj-report-viewer",{template:"<div/>",props:w._getProps("wijmo.viewer.ReportViewer"),mounted:function(){w._initialize(this,new o.ReportViewer(this.$el))}}),i.WjPdfViewer=i.Vue.component("wj-pdf-viewer",{template:"<div/>",props:w._getProps("wijmo.viewer.PdfViewer"),mounted:function(){w._initialize(this,new o.PdfViewer(this.$el))}})});