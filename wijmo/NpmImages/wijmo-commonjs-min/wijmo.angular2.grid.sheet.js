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
"use strict";var __extends=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])};return function(t,o){function r(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}}();Object.defineProperty(exports,"__esModule",{value:!0});var wjcGridSheet=require("wijmo/wijmo.grid.sheet"),core_1=require("@angular/core"),core_2=require("@angular/core"),core_3=require("@angular/core"),common_1=require("@angular/common"),forms_1=require("@angular/forms"),wijmo_angular2_directiveBase_1=require("wijmo/wijmo.angular2.directiveBase");exports.wjFlexSheetMeta={selector:"wj-flex-sheet",template:"<div><ng-content></ng-content></div>",inputs:["asyncBindings","wjModelProperty","isDisabled","newRowAtTop","allowAddNew","allowDelete","allowDragging","allowMerging","allowResizing","allowSorting","autoSizeMode","autoGenerateColumns","childItemsPath","groupHeaderFormat","headersVisibility","showSelectedHeaders","showMarquee","itemFormatter","isReadOnly","imeEnabled","mergeManager","selectionMode","showGroups","showSort","showDropDown","showAlternatingRows","showErrors","validateEdits","treeIndent","itemsSource","autoClipboard","frozenRows","frozenColumns","deferResizing","sortRowIndex","stickyHeaders","preserveSelectedState","preserveOutlineState","keyActionTab","keyActionEnter","rowHeaderPath","virtualizationThreshold","isTabHolderVisible","selectedSheetIndex"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","beginningEditNg: beginningEdit","cellEditEndedNg: cellEditEnded","cellEditEndingNg: cellEditEnding","prepareCellForEditNg: prepareCellForEdit","formatItemNg: formatItem","resizingColumnNg: resizingColumn","resizedColumnNg: resizedColumn","autoSizingColumnNg: autoSizingColumn","autoSizedColumnNg: autoSizedColumn","draggingColumnNg: draggingColumn","draggingColumnOverNg: draggingColumnOver","draggedColumnNg: draggedColumn","sortingColumnNg: sortingColumn","sortedColumnNg: sortedColumn","resizingRowNg: resizingRow","resizedRowNg: resizedRow","autoSizingRowNg: autoSizingRow","autoSizedRowNg: autoSizedRow","draggingRowNg: draggingRow","draggingRowOverNg: draggingRowOver","draggedRowNg: draggedRow","deletingRowNg: deletingRow","deletedRowNg: deletedRow","loadingRowsNg: loadingRows","loadedRowsNg: loadedRows","rowEditStartingNg: rowEditStarting","rowEditStartedNg: rowEditStarted","rowEditEndingNg: rowEditEnding","rowEditEndedNg: rowEditEnded","rowAddedNg: rowAdded","groupCollapsedChangedNg: groupCollapsedChanged","groupCollapsedChangingNg: groupCollapsedChanging","itemsSourceChangedNg: itemsSourceChanged","selectionChangingNg: selectionChanging","selectionChangedNg: selectionChanged","scrollPositionChangedNg: scrollPositionChanged","updatingViewNg: updatingView","updatedViewNg: updatedView","updatingLayoutNg: updatingLayout","updatedLayoutNg: updatedLayout","pastingNg: pasting","pastedNg: pasted","pastingCellNg: pastingCell","pastedCellNg: pastedCell","copyingNg: copying","copiedNg: copied","selectedSheetChangedNg: selectedSheetChanged","selectedSheetIndexChangePC: selectedSheetIndexChange","draggingRowColumnNg: draggingRowColumn","droppingRowColumnNg: droppingRowColumn","loadedNg: loaded","unknownFunctionNg: unknownFunction","sheetClearedNg: sheetCleared"],providers:[{provide:forms_1.NG_VALUE_ACCESSOR,useFactory:wijmo_angular2_directiveBase_1.WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};var WjFlexSheet=function(e){function t(t,o,r){var n=e.call(this,wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(t,o))||this;n.isInitialized=!1;n._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(n,t,o,r);return n.created(),n}return __extends(t,e),t.prototype.created=function(){},t.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},t.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},t.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},t.prototype.addEventListener=function(t,o,r,n){var i=this;void 0===n&&(n=!1);var a=wijmo_angular2_directiveBase_1.WjDirectiveBehavior,s=a.ngZone;s&&a.outsideZoneEvents[o]?s.runOutsideAngular(function(){e.prototype.addEventListener.call(i,t,o,r,n)}):e.prototype.addEventListener.call(this,t,o,r,n)},t.meta={outputs:exports.wjFlexSheetMeta.outputs,changeEvents:{selectedSheetChanged:["selectedSheetIndex"]}},t.decorators=[{type:core_1.Component,args:[{selector:exports.wjFlexSheetMeta.selector,template:exports.wjFlexSheetMeta.template,inputs:exports.wjFlexSheetMeta.inputs,outputs:exports.wjFlexSheetMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_2.forwardRef(function(){return t})}].concat(exports.wjFlexSheetMeta.providers)}]}],t.ctorParameters=function(){return[{type:core_2.ElementRef,decorators:[{type:core_3.Inject,args:[core_2.ElementRef]}]},{type:core_2.Injector,decorators:[{type:core_3.Inject,args:[core_2.Injector]}]},{type:void 0,decorators:[{type:core_3.Inject,args:["WjComponent"]},{type:core_3.SkipSelf},{type:core_2.Optional}]}]},t}(wjcGridSheet.FlexSheet);exports.WjFlexSheet=WjFlexSheet,exports.wjSheetMeta={selector:"wj-sheet",template:"",inputs:["wjProperty","name","itemsSource","visible","rowCount","columnCount"],outputs:["initialized","nameChangedNg: nameChanged"],providers:[]};var WjSheet=function(e){function t(t,o,r){var n=e.call(this,r)||this;n.isInitialized=!1;n._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(n,t,o,r);return n._flexSheet=r,n.created(),n}return __extends(t,e),t.prototype.created=function(){},t.prototype.ngOnInit=function(){return this._wjBehaviour.ngOnInit(),this.itemsSource?this._flexSheet.addBoundSheet(this.name,this.itemsSource):this._flexSheet.addUnboundSheet(this.name,null!=this.boundRowCount?+this.boundRowCount:null,null!=this.boundColumnCount?+this.boundColumnCount:null)},t.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},t.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},t.prototype.ngOnChanges=function(e){var t;(t=e.rowCount)&&t.isFirstChange&&(this.boundRowCount=t.currentValue),(t=e.columnCount)&&t.isFirstChange&&(this.boundColumnCount=t.currentValue)},t.meta={outputs:exports.wjSheetMeta.outputs},t.decorators=[{type:core_1.Component,args:[{selector:exports.wjSheetMeta.selector,template:exports.wjSheetMeta.template,inputs:exports.wjSheetMeta.inputs,outputs:exports.wjSheetMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_2.forwardRef(function(){return t})}].concat(exports.wjSheetMeta.providers)}]}],t.ctorParameters=function(){return[{type:core_2.ElementRef,decorators:[{type:core_3.Inject,args:[core_2.ElementRef]}]},{type:core_2.Injector,decorators:[{type:core_3.Inject,args:[core_2.Injector]}]},{type:void 0,decorators:[{type:core_3.Inject,args:["WjComponent"]},{type:core_3.SkipSelf},{type:core_2.Optional}]}]},t}(wjcGridSheet.Sheet);exports.WjSheet=WjSheet;var moduleExports=[WjFlexSheet,WjSheet],WjGridSheetModule=function(){function e(){}return e.decorators=[{type:core_1.NgModule,args:[{imports:[wijmo_angular2_directiveBase_1.WjDirectiveBaseModule,common_1.CommonModule],declarations:moduleExports.slice(),exports:moduleExports.slice()}]}],e.ctorParameters=function(){return[]},e}();exports.WjGridSheetModule=WjGridSheetModule;