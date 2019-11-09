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

import{WjComponentBehavior}from"wijmo/wijmo.vue2.base";import*as VueModule from"vue";import*as wjcViewer from"wijmo/wijmo.viewer";import VueModuleDefault from"vue";export var Vue=VueModuleDefault||VueModule;class WjReportViewerBehavior extends WjComponentBehavior{}WjReportViewerBehavior.tag="wj-report-viewer",WjReportViewerBehavior.props=["control","serviceUrl","filePath","fullScreen","zoomFactor","mouseMode","selectMouseMode","viewMode","requestHeaders","parameters","paginated","reportName"],WjReportViewerBehavior.events=["initialized","pageIndexChanged","queryLoadingData","beforeSendRequest"],WjReportViewerBehavior.changeEvents={fullScreenChanged:["fullScreen"],zoomFactorChanged:["zoomFactor"],mouseModeChanged:["mouseMode"],selectMouseModeChanged:["selectMouseMode"],viewModeChanged:["viewMode"]},WjReportViewerBehavior.classCtor=function(){return wjcViewer.ReportViewer};export var WjReportViewer=WjReportViewerBehavior.register();class WjPdfViewerBehavior extends WjComponentBehavior{}WjPdfViewerBehavior.tag="wj-pdf-viewer",WjPdfViewerBehavior.props=["control","serviceUrl","filePath","fullScreen","zoomFactor","mouseMode","selectMouseMode","viewMode","requestHeaders"],WjPdfViewerBehavior.events=["initialized","pageIndexChanged","queryLoadingData","beforeSendRequest"],WjPdfViewerBehavior.changeEvents={fullScreenChanged:["fullScreen"],zoomFactorChanged:["zoomFactor"],mouseModeChanged:["mouseMode"],selectMouseModeChanged:["selectMouseMode"],viewModeChanged:["viewMode"]},WjPdfViewerBehavior.classCtor=function(){return wjcViewer.PdfViewer};export var WjPdfViewer=WjPdfViewerBehavior.register();