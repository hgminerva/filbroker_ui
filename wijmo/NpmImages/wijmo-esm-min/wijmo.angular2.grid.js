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

var __extends=this&&this.__extends||function(){var e=function(t,o){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(t,o)};return function(t,o){function i(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(i.prototype=o.prototype,new i)}}(),__decorate=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,l=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,o,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(l=(r<3?n(l):r>3?n(t,o,l):n(t,o))||l);return r>3&&l&&Object.defineProperty(t,o,l),l},__param=this&&this.__param||function(e,t){return function(o,i){t(o,i,e)}};import{Component,NgModule,ElementRef,Injector,Directive,ViewContainerRef,TemplateRef,Optional,forwardRef,Renderer,Inject,ChangeDetectorRef,SkipSelf}from"@angular/core";import{CommonModule}from"@angular/common";import{NG_VALUE_ACCESSOR}from"@angular/forms";import{WjDirectiveBehavior,WjDirectiveBaseModule,WjValueAccessorFactory}from"wijmo/wijmo.angular2.directiveBase";import*as wjcCore from"wijmo/wijmo";import*as wjcGrid from"wijmo/wijmo.grid";function softInput(){return wjcCore._getModule("wijmo.input")}function softGridDetail(){return wjcCore._getModule("wijmo.grid.detail")}export var wjFlexGridMeta={selector:"wj-flex-grid",template:"<div><ng-content></ng-content></div>",inputs:["wjModelProperty","isDisabled","newRowAtTop","allowAddNew","allowDelete","allowDragging","allowMerging","allowResizing","allowSorting","quickAutoSize","autoScroll","autoSearch","autoRowHeights","autoSizeMode","autoGenerateColumns","childItemsPath","groupHeaderFormat","headersVisibility","showSelectedHeaders","showMarquee","itemFormatter","isReadOnly","imeEnabled","mergeManager","selectionMode","showGroups","showSort","showDropDown","showAlternatingRows","showErrors","alternatingRowStep","validateEdits","treeIndent","itemsSource","autoClipboard","frozenRows","frozenColumns","cloneFrozenCells","deferResizing","sortRowIndex","editColumnIndex","stickyHeaders","preserveSelectedState","preserveOutlineState","keyActionTab","keyActionEnter","rowHeaderPath","virtualizationThreshold","anchorCursor","lazyRender","refreshOnEdit"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","beginningEditNg: beginningEdit","cellEditEndedNg: cellEditEnded","cellEditEndingNg: cellEditEnding","prepareCellForEditNg: prepareCellForEdit","formatItemNg: formatItem","resizingColumnNg: resizingColumn","resizedColumnNg: resizedColumn","autoSizingColumnNg: autoSizingColumn","autoSizedColumnNg: autoSizedColumn","draggingColumnNg: draggingColumn","draggingColumnOverNg: draggingColumnOver","draggedColumnNg: draggedColumn","sortingColumnNg: sortingColumn","sortedColumnNg: sortedColumn","resizingRowNg: resizingRow","resizedRowNg: resizedRow","autoSizingRowNg: autoSizingRow","autoSizedRowNg: autoSizedRow","draggingRowNg: draggingRow","draggingRowOverNg: draggingRowOver","draggedRowNg: draggedRow","deletingRowNg: deletingRow","deletedRowNg: deletedRow","loadingRowsNg: loadingRows","loadedRowsNg: loadedRows","rowEditStartingNg: rowEditStarting","rowEditStartedNg: rowEditStarted","rowEditEndingNg: rowEditEnding","rowEditEndedNg: rowEditEnded","rowAddedNg: rowAdded","groupCollapsedChangedNg: groupCollapsedChanged","groupCollapsedChangingNg: groupCollapsedChanging","itemsSourceChangingNg: itemsSourceChanging","itemsSourceChangedNg: itemsSourceChanged","selectionChangingNg: selectionChanging","selectionChangedNg: selectionChanged","scrollPositionChangedNg: scrollPositionChanged","updatingViewNg: updatingView","updatedViewNg: updatedView","updatingLayoutNg: updatingLayout","updatedLayoutNg: updatedLayout","pastingNg: pasting","pastedNg: pasted","pastingCellNg: pastingCell","pastedCellNg: pastedCell","copyingNg: copying","copiedNg: copied"],providers:[{provide:NG_VALUE_ACCESSOR,useFactory:WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};var WjFlexGrid=function(e){function t(t,o,i,n){var r=e.call(this,WjDirectiveBehavior.getHostElement(t,o))||this;r.isInitialized=!1;r._wjBehaviour=WjDirectiveBehavior.attach(r,t,o,i);return new DirectiveCellFactory(r,n),r.deferUpdate(function(){if(r.rows.defaultSize<10){var e=r.hostElement,t=getComputedStyle(e),o=getComputedStyle(document.body),i=2*parseInt(t.fontSize&&wjcCore.contains(document.body,e)?t.fontSize:o.fontSize);r.rows.defaultSize=i,r.columns.defaultSize=4*i,r.columnHeaders.rows.defaultSize=i,r.rowHeaders.columns.defaultSize=Math.round(1.25*i)}}),r.created(),r}var o;return __extends(t,e),o=t,t.prototype.created=function(){},t.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},t.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},t.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},t.prototype.addEventListener=function(t,o,i,n){var r=this;void 0===n&&(n=!1);var l=WjDirectiveBehavior,a=l.ngZone;a&&l.outsideZoneEvents[o]?a.runOutsideAngular(function(){e.prototype.addEventListener.call(r,t,o,i,n)}):e.prototype.addEventListener.call(this,t,o,i,n)},t.prototype.startEditing=function(t,o,i,n){void 0===t&&(t=!0),this._edtFocus=null;var r=e.prototype.startEditing.call(this,t,o,i,n);return r&&(this._edtFocus=n||null==n),r},t.prototype.onCellEditEnding=function(t){return this._edtFocus=null,e.prototype.onCellEditEnding.call(this,t)},t.meta={outputs:wjFlexGridMeta.outputs},t=o=__decorate([Component({selector:wjFlexGridMeta.selector,template:wjFlexGridMeta.template,inputs:wjFlexGridMeta.inputs,outputs:wjFlexGridMeta.outputs,providers:[{provide:"WjComponent",useExisting:forwardRef(function(){return o})}].concat(wjFlexGridMeta.providers)}),__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional()),__param(3,Inject(ChangeDetectorRef))],t)}(wjcGrid.FlexGrid);export{WjFlexGrid};export var wjFlexGridColumnMeta={selector:"wj-flex-grid-column",template:"<div><ng-content></ng-content></div>",inputs:["asyncBindings","wjProperty","name","dataMap","dataType","binding","sortMemberPath","format","header","width","maxLength","minWidth","maxWidth","align","allowDragging","allowSorting","allowResizing","allowMerging","aggregate","isReadOnly","cssClass","isContentHtml","isSelected","visible","wordWrap","multiLine","mask","inputType","isRequired","showDropDown","dropDownCssClass","quickAutoSize"],outputs:["initialized","isSelectedChangePC: isSelectedChange"],providers:[]};var WjFlexGridColumn=function(e){function t(t,o,i){var n=e.call(this)||this;n.isInitialized=!1,n.wjProperty="columns";var r=(n._wjBehaviour=WjDirectiveBehavior.attach(n,t,o,i)).parentBehavior.directive;return r.autoGenerateColumns&&(r.autoGenerateColumns=!1,r.columns.clear()),n.created(),n}var o;return __extends(t,e),o=t,t.prototype.created=function(){},t.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},t.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},t.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},t.meta={outputs:wjFlexGridColumnMeta.outputs,changeEvents:{"grid.selectionChanged":["isSelected"]}},t=o=__decorate([Component({selector:wjFlexGridColumnMeta.selector,template:wjFlexGridColumnMeta.template,inputs:wjFlexGridColumnMeta.inputs,outputs:wjFlexGridColumnMeta.outputs,providers:[{provide:"WjComponent",useExisting:forwardRef(function(){return o})}].concat(wjFlexGridColumnMeta.providers)}),__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],t)}(wjcGrid.Column);export{WjFlexGridColumn};var WjFlexGridCellTemplate=function(){function e(e,t,o,i,n,r,l){this.viewContainerRef=e,this.templateRef=t,this.elRef=o,this.domRenderer=n,this.cdRef=l,this.autoSizeRows=!0,this.forceFullEdit=!0,i instanceof WjFlexGrid?this.grid=i:i instanceof WjFlexGridColumn&&(this.column=i,this.grid=WjDirectiveBehavior.getBehavior(i).parentBehavior.directive)}var t;return t=e,e._getTemplContextProp=function(e){return"$__cellTempl"+CellTemplateType[e]},e.prototype.ngOnInit=function(){this.ownerControl=this.column&&this.column.grid===this.grid?this.column:this.grid,this._attachToControl()},e.prototype.ngOnDestroy=function(){this.cellTypeStr&&(this.viewContainerRef.clear(),this.ownerControl[t._getTemplContextProp(this.cellType)]=null,this.grid.invalidate())},e.prototype._instantiateTemplate=function(e,t){return WjDirectiveBehavior.instantiateTemplate(e,this.viewContainerRef,this.templateRef,this.domRenderer,!1,t)},e.prototype._attachToControl=function(){if(this.cellTypeStr){var e=this.cellType=wjcCore.asEnum(this.cellTypeStr,CellTemplateType),o=this.ownerControl;o[t._getTemplContextProp(e)]=this,o instanceof wjcGrid.Column&&(e===CellTemplateType.Cell||e===CellTemplateType.ColumnHeader||e===CellTemplateType.ColumnFooter)&&o._setFlag(wjcGrid.RowColFlags.HasTemplate,!0),this.grid.invalidate()}},e=t=__decorate([Directive({selector:"[wjFlexGridCellTemplate]",inputs:["wjFlexGridCellTemplate","cellTypeStr: cellType","cellOverflow","valuePaths","autoSizeRows","forceFullEdit"],exportAs:"wjFlexGridCellTemplate",providers:[{provide:"WjComponent",useExisting:forwardRef(function(){return t})}]}),__param(0,Inject(ViewContainerRef)),__param(1,Inject(TemplateRef)),__param(1,Optional()),__param(2,Inject(ElementRef)),__param(3,Inject("WjComponent")),__param(3,SkipSelf()),__param(3,Optional()),__param(4,Inject(Renderer)),__param(5,Inject(Injector)),__param(6,Inject(ChangeDetectorRef))],e)}();export{WjFlexGridCellTemplate};export var CellTemplateType;!function(e){e[e.Cell=0]="Cell",e[e.CellEdit=1]="CellEdit",e[e.ColumnHeader=2]="ColumnHeader",e[e.RowHeader=3]="RowHeader",e[e.RowHeaderEdit=4]="RowHeaderEdit",e[e.TopLeft=5]="TopLeft",e[e.GroupHeader=6]="GroupHeader",e[e.Group=7]="Group",e[e.NewCellTemplate=8]="NewCellTemplate",e[e.ColumnFooter=9]="ColumnFooter",e[e.BottomLeft=10]="BottomLeft"}(CellTemplateType||(CellTemplateType={}));var DirectiveCellFactory=function(e){function t(o,i){var n=e.call(this)||this;if(n._needsCdCheck=!1,n._lastApplyTimeStamp=0,n._noApplyLag=!1,n._startingEditing=!1,n._cellStampCounter=0,n._composing=!1,n.grid=o,n._gridCdRef=i,!t._templateTypes)for(var r in t._templateTypes=[],CellTemplateType)isNaN(r)&&t._templateTypes.push(r);var l=n;return n._baseCf=o.cellFactory,o.cellFactory=n,n._evtInput=document.createEvent("HTMLEvents"),n._evtInput.initEvent("input",!0,!1),n._evtBlur=document.createEvent("HTMLEvents"),n._evtBlur.initEvent("blur",!1,!1),o.prepareCellForEdit.addHandler(function(e,t){l._noApplyLag=!0}),o.cellEditEnded.addHandler(function(e,t){(t.range.col<0||t.range.col<o.columns.length&&!o.columns[t.range.col][WjFlexGridCellTemplate._getTemplContextProp(CellTemplateType.CellEdit)])&&(l._editChar=null),setTimeout(function(){l._noApplyLag=!1},300)}),o.beginningEdit.addHandler(function(e,t){l._startingEditing=!0}),o.hostElement.addEventListener("keydown",function(e){l._startingEditing=!1},!0),o.hostElement.addEventListener("keypress",function(e){var t=e.charCode>32?String.fromCharCode(e.charCode):null;t&&wjcCore.closest(e.target,".wj-flexgrid")===o.hostElement&&(!o.activeEditor||l._startingEditing?(l._editChar=t,setTimeout(function(){o.activeEditor||(l._editChar=null)},0)):l._editChar&&(l._editChar+=t))},!0),o.hostElement.addEventListener("compositionstart",function(e){l._composing=!0},!0),o.hostElement.addEventListener("compositionend",function(e){l._composing=!1},!0),o.updatedView.addHandler(function(){n._needsCdCheck&&(n._needsCdCheck=!1,n._gridCdRef.markForCheck())},n),n}return __extends(t,e),t.prototype.updateCell=function(e,o,i,n,r){var l=this;this._cellStampCounter=(this._cellStampCounter+1)%1e7;var a=n[t._cellStampProp]=this._cellStampCounter;n.style.overflow&&(n.style.overflow="");var d=o,s=i;r&&!r.isSingleCell&&(o=r.row,i=r.col);var p,c=this,u=e.grid,g=u.editRange,m=e.rows[o],C=m.dataItem,f=!1,w=!1,h=!1,v=!1;switch(e.cellType){case wjcGrid.CellType.Cell:if(g&&g.row===o&&g.col===i)p=CellTemplateType.CellEdit,w=h=!0;else if(m instanceof wjcGrid.GroupRow){var _=!((v=C instanceof wjcCore.CollectionViewGroup)||m.hasChildren);i==e.columns.firstVisibleIndex?p=_?CellTemplateType.Cell:CellTemplateType.GroupHeader:(p=_?CellTemplateType.Cell:CellTemplateType.Group,w=!0)}else m instanceof wjcGrid._NewRowTemplate?p=CellTemplateType.NewCellTemplate:softGridDetail()&&softGridDetail().DetailRow&&m instanceof softGridDetail().DetailRow||(p=CellTemplateType.Cell);break;case wjcGrid.CellType.ColumnHeader:p=CellTemplateType.ColumnHeader;break;case wjcGrid.CellType.RowHeader:p=u.collectionView&&u.collectionView.currentEditItem===C?CellTemplateType.RowHeaderEdit:CellTemplateType.RowHeader,f=!0;break;case wjcGrid.CellType.TopLeft:p=CellTemplateType.TopLeft,f=!0;break;case wjcGrid.CellType.ColumnFooter:p=CellTemplateType.ColumnFooter,w=!0;break;case wjcGrid.CellType.BottomLeft:p=CellTemplateType.BottomLeft,f=!0}var E=!1;if(null!=p){var y=v&&p==CellTemplateType.GroupHeader?u.columns.getColumn(C.groupDescription.propertyName):i>=0&&i<e.columns.length?e.columns[i]:null;if(y){var j=WjFlexGridCellTemplate._getTemplContextProp(p),T=(f?u:y)[j];if(T||(p===CellTemplateType.RowHeaderEdit?(p=CellTemplateType.RowHeader,j=WjFlexGridCellTemplate._getTemplContextProp(p),T=u[j]):p!==CellTemplateType.Group&&p!==CellTemplateType.GroupHeader||v||(p=CellTemplateType.Cell,j=WjFlexGridCellTemplate._getTemplContextProp(p),T=y[j])),T){var R;w&&(R=e.getCellData(o,i,!1)),E=!0;var S=n.getAttribute(wjcGrid.FlexGrid._WJS_MEASURE),x=S&&"true"===S.toLowerCase();h&&this._baseCf.updateCell(e,d,s,n,r,!0);var F,G=n[j]||{},N=G.column!==y||!G.viewRef||G.templateContextProperty!==j||n.firstChild!=G.rootElement,I=h&&this._composing&&u.imeEnabled;if(N){if(h){var D=n.firstElementChild;D&&(I||n.focus(),D.style.display="none")}else n.textContent="";this._doDisposeCell(n);var H={};F=this._setViewRefContext(H,m,y,C,R,T.valuePaths);var z=T._instantiateTemplate(n,H);G.column=y,G.viewRef=z.viewRef,G.rootElement=z.rootElement,G.templateContextProperty=j,n[j]=G}else F=this._setViewRefContext(G.viewRef.context,m,y,C,R,T.valuePaths);if(T.cellOverflow&&(n.style.overflow=T.cellOverflow),x?T.cdRef.detectChanges():T.autoSizeRows&&!I?WjDirectiveBehavior.ngZone.runOutsideAngular(function(){setTimeout(function(){if(a===n[t._cellStampProp]){var i=n.scrollHeight,d=e.rows,s=r&&r.rowSpan||1;if(null!=d.maxSize&&(i=Math.min(i,d.maxSize)),o<d.length&&d[o].renderHeight*s<i-1){if(d.defaultSize=i/s,h){var p=c._isFullEdit();return u.refresh(),void u.startEditing(p)}}else h&&l._initEditInput(G,T,null)}},0)}):h&&setTimeout(function(){I?l._initImeEditInput(G,T):l._initEditInput(G,T,null)},0),h){c._cellEditorVars=F.localVars;var O=function(e,t){if(u.cellEditEnding.removeHandler(O),!t.stayInEditMode){var o=wjcCore.getActiveElement();o&&o.dispatchEvent(c._evtBlur),wjcCore.contains(n,wjcCore.getActiveElement())&&n.focus()}if(c._triggerEditorEvents(n),!t.cancel&&!t.stayInEditMode)for(var i=F.localVars,r=0,l=Object.getOwnPropertyNames(F.bindings);r<l.length;r++){var a=l[r];F.bindings[a].setValue(i,F.localVars.values[a])}var d=n.querySelectorAll(".wj-dropdown");[].forEach.call(d,function(e){var t=wjcCore.Control.getControl(e);t&&softInput()&&t instanceof softInput().DropDown&&(t.isDroppedDown=!1)})},b=function(e,t){u.cellEditEnded.removeHandler(b),c._cellEditorVars=null};u.cellEditEnding.addHandler(O),u.cellEditEnded.addHandler(b)}else this._baseCf.updateCell(e,d,s,n,r,!1)}}}E||(this._doDisposeCell(n),this._baseCf.updateCell(e,d,s,n,r))},t.prototype.getEditorValue=function(t){if(this._cellEditorVars){var o=t.editRange;return o&&o.isValid&&this._triggerEditorEvents(t.cells.getCellElement(o.row,o.col)),this._cellEditorVars.value}return e.prototype.getEditorValue.call(this,t)},t.prototype.disposeCell=function(e){this._doDisposeCell(e)},t.prototype._doDisposeCell=function(e){for(var o=t._templateTypes,i=0;i<o.length;i++){var n=WjFlexGridCellTemplate._getTemplContextProp(CellTemplateType[o[i]]),r=e[n];if(r&&r.viewRef){var l=(r.column||this.grid)[n];if(l){var a=l.viewContainerRef.indexOf(r.viewRef);a>-1&&l.viewContainerRef.remove(a)}r.viewRef=null,r.rootElement=null,r.column=null,r.templateContextProperty=null,e[n]=null}}},t.prototype._setViewRefContext=function(e,t,o,i,n,r){this._needsCdCheck=!0,e.row=t,e.col=o,e.item=i;var l={},a=e.cell||{},d={},s={localVars:a,bindings:d};if(a.row=t,a.col=o,a.item=i,a.value=n,a.values=l,r)for(var p=0,c=Object.getOwnPropertyNames(r);p<c.length;p++){var u=c[p],g=new wjcCore.Binding(r[u]);d[u]=g,l[u]=g.getValue(a)}return e.cell!==a&&(e.cell=a),s},t.prototype._initEditInput=function(e,o,i){var n=this,r=!1!==this.grid._edtFocus;if(this.grid._edtFocus=null,this._setFullEdit(o),r){var l=this._findInitialInput(e);if(l){var a=function(){l.removeEventListener("focus",a),setTimeout(function(){var e=null!=i?i:n._editChar;e&&(l.value=e,n._editChar=null,t._setSelectionRange(l,e.length,e.length),l.dispatchEvent(n._evtInput))},t._FOCUS_INTERVAL)};l.addEventListener("focus",a),l.focus()}}},t.prototype._initImeEditInput=function(e,t){var o=this,i=wjcCore.getActiveElement();if(i&&i instanceof HTMLInputElement&&wjcCore.hasClass(i,"wj-grid-ime")){var n=function(r){i.removeEventListener("compositionend",n),wjcCore.setCss(i,wjcGrid._ImeHandler._cssHidden),o._initEditInput(e,t,i.value)};i.addEventListener("compositionend",n);var r=this._findInitialInput(e);if(r){var l=r.getBoundingClientRect(),a=i.getBoundingClientRect(),d=window.getComputedStyle(i),s=parseFloat(d.left),p=parseFloat(d.top);wjcCore.setCss(i,{left:s+l.left-a.left+"px",top:p+l.top-a.top+"px",width:l.width+"px",height:l.height+"px"})}}},t.prototype._findInitialInput=function(e){var t=e&&e.rootElement&&e.rootElement.querySelectorAll("input,textarea");if(t)for(var o=0;o<t.length;o++){var i=t[o],n=window.getComputedStyle(i);if("none"!==n.display&&"visible"===n.visibility)return i}return null},t._setSelectionRange=function(e,t,o){if(void 0===o&&(o=t),wjcCore.contains(document.body,e)&&!e.disabled&&"none"!=e.style.display)try{e.setSelectionRange(wjcCore.asNumber(t),wjcCore.asNumber(o),wjcCore.isIE()?null:"backward"),e.focus()}catch(e){}},t.prototype._triggerEditorEvents=function(e){if(e)for(var t=e.querySelectorAll(".wj-control"),o=0;o<t.length;o++){var i=t[o],n=wjcCore.Control.getControl(i);if(n){var r=WjDirectiveBehavior.getBehavior(n);r&&r.flushPendingEvents()}}},t.prototype._isFullEdit=function(){var e=this.grid;return!e.activeEditor||e._edtHdl._fullEdit},t.prototype._setFullEdit=function(e){var t=this.grid;e.forceFullEdit&&t.activeEditor&&(t._edtHdl._fullEdit=!0)},t._cellStampProp="__wjCellStamp",t._FOCUS_INTERVAL=wjcCore.Control._FOCUS_INTERVAL+20,t}(wjcGrid.CellFactory),moduleExports=[WjFlexGrid,WjFlexGridColumn,WjFlexGridCellTemplate],WjGridModule=function(){function e(){}return e=__decorate([NgModule({imports:[WjDirectiveBaseModule,CommonModule],declarations:moduleExports.slice(),exports:moduleExports.slice()})],e)}();export{WjGridModule};