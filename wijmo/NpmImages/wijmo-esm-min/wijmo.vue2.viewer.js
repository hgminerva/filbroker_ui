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

var __extends=this&&this.__extends||function(){var e=function(o,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,o){e.__proto__=o}||function(e,o){for(var r in o)o.hasOwnProperty(r)&&(e[r]=o[r])})(o,r)};return function(o,r){function t(){this.constructor=o}e(o,r),o.prototype=null===r?Object.create(r):(t.prototype=r.prototype,new t)}}();import{WjComponentBehavior}from"wijmo/wijmo.vue2.base";import*as VueModule from"vue";import*as wjcViewer from"wijmo/wijmo.viewer";import VueModuleDefault from"vue";export var Vue=VueModuleDefault||VueModule;var WjReportViewerBehavior=function(e){function o(){return null!==e&&e.apply(this,arguments)||this}return __extends(o,e),o.tag="wj-report-viewer",o.props=["control","serviceUrl","filePath","fullScreen","zoomFactor","mouseMode","selectMouseMode","viewMode","requestHeaders","parameters","paginated","reportName"],o.events=["initialized","pageIndexChanged","queryLoadingData","beforeSendRequest"],o.changeEvents={fullScreenChanged:["fullScreen"],zoomFactorChanged:["zoomFactor"],mouseModeChanged:["mouseMode"],selectMouseModeChanged:["selectMouseMode"],viewModeChanged:["viewMode"]},o.classCtor=function(){return wjcViewer.ReportViewer},o}(WjComponentBehavior);export var WjReportViewer=WjReportViewerBehavior.register();var WjPdfViewerBehavior=function(e){function o(){return null!==e&&e.apply(this,arguments)||this}return __extends(o,e),o.tag="wj-pdf-viewer",o.props=["control","serviceUrl","filePath","fullScreen","zoomFactor","mouseMode","selectMouseMode","viewMode","requestHeaders"],o.events=["initialized","pageIndexChanged","queryLoadingData","beforeSendRequest"],o.changeEvents={fullScreenChanged:["fullScreen"],zoomFactorChanged:["zoomFactor"],mouseModeChanged:["mouseMode"],selectMouseModeChanged:["selectMouseMode"],viewModeChanged:["viewMode"]},o.classCtor=function(){return wjcViewer.PdfViewer},o}(WjComponentBehavior);export var WjPdfViewer=WjPdfViewerBehavior.register();