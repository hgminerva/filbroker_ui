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
System.register(["wijmo/wijmo.vue2.base","wijmo/wijmo.viewer","wijmo/wijmo.vue2.viewer","vue"],function(e,i){"use strict";var o,w,t,n,r,u,m,j;i&&i.id;return{setters:[function(e){o=e},function(e){w=e},function(e){t=e},function(e){n=e,r=e}],execute:function(){window.wijmo=window.wijmo||{},window.wijmo.vue2=window.wijmo.vue2||{},window.wijmo.vue2.viewer=t,e("Vue",u=n.default||r),e("WjReportViewer",m=u.component("wj-report-viewer",{template:"<div/>",props:o._getProps("wijmo.viewer.ReportViewer"),mounted:function(){o._initialize(this,new w.ReportViewer(this.$el))}})),e("WjPdfViewer",j=u.component("wj-pdf-viewer",{template:"<div/>",props:o._getProps("wijmo.viewer.PdfViewer"),mounted:function(){o._initialize(this,new w.PdfViewer(this.$el))}}))}}});