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

var __extends=this&&this.__extends||function(){var e=function(t,i){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i])})(t,i)};return function(t,i){function o(){this.constructor=t}e(t,i),t.prototype=null===i?Object.create(i):(o.prototype=i.prototype,new o)}}();import{_addCultureInfo,Key,copy,asEnum,asNumber,asBoolean,asFunction,Control,animate,setCss,closest,closestClass,addClass,culture,setAriaLabel,setAttribute,isFunction,isNumber,_registerModule}from"wijmo/wijmo";import{Row,FlexGrid,MergeManager,CellRange,CellType,GroupRow,_NewRowTemplate}from"wijmo/wijmo.grid";import*as selfModule from"wijmo/wijmo.grid.detail";var DetailRow=function(e){function t(t){var i=e.call(this)||this;return i.isReadOnly=!0,i}return __extends(t,e),Object.defineProperty(t.prototype,"detail",{get:function(){return this._detail},set:function(e){this._detail=e},enumerable:!0,configurable:!0}),t}(Row);export{DetailRow};var DetailMergeManager=function(e){function t(t){return e.call(this,t)||this}return __extends(t,e),t.prototype.getMergedRange=function(t,i,o,n){switch(void 0===n&&(n=!0),t.cellType){case CellType.Cell:if(t.rows[i]instanceof DetailRow){var l=t.columns;return l.frozen>0&&t.grid&&(t.grid.cloneFrozenCells=!1),new CellRange(i,0,i,l.length-1)}break;case CellType.RowHeader:if(t.rows[i]instanceof DetailRow)return new CellRange(i-1,o,i,o);if(i<t.rows.length-1&&t.rows[i+1]instanceof DetailRow)return new CellRange(i,o,i+1,o)}return e.prototype.getMergedRange.call(this,t,i,o,n)},t}(MergeManager);export{DetailMergeManager};_addCultureInfo("FlexGridDetailProvider",{ariaLabels:{toggleDetail:"Toggle Row Detail"}});export var KeyAction;!function(e){e[e.None=0]="None",e[e.ToggleDetail=1]="ToggleDetail"}(KeyAction||(KeyAction={}));export var DetailVisibilityMode;!function(e){e[e.Code=0]="Code",e[e.Selection=1]="Selection",e[e.ExpandSingle=2]="ExpandSingle",e[e.ExpandMulti=3]="ExpandMulti"}(DetailVisibilityMode||(DetailVisibilityMode={}));var FlexGridDetailProvider=function(){function e(e,t){var i=this;this._mode=DetailVisibilityMode.ExpandSingle,this._animated=!1,this._keyActionEnter=KeyAction.None,this._g=e,e.mergeManager=new DetailMergeManager(e),e.rowHeaders.hostElement.addEventListener("click",this._hdrClick.bind(this)),e.rowHeaders.hostElement.addEventListener("mousedown",function(t){var o=e.editableCollectionView;(e.activeEditor||o&&o.currentEditItem)&&(i._hdrClick(t),t.preventDefault())}),e.formatItem.addHandler(this._formatItem,this),e.selectionChanged.addHandler(this._selectionChanged,this),e.resizedRow.addHandler(this._resizedRow,this),e.loadingRows.addHandler(function(){i.hideDetail()}),e.updatedView.addHandler(function(){i._handleFixedCells()}),e.draggingRow.addHandler(function(e,t){t.row<e.rows.length-1&&e.rows[t.row+1]instanceof DetailRow&&(t.cancel=!0,i.hideDetail(t.row))}),e.hostElement.addEventListener("keydown",function(e){if(e.keyCode==Key.Enter&&i._keyActionEnter==KeyAction.ToggleDetail){var t=i._g.selection.row;i._toggleRowDetail(t)&&e.preventDefault()}},!0),e._root.addEventListener("scroll",function(){Control.refreshAll(e._root)}),t&&copy(this,t)}return Object.defineProperty(e.prototype,"grid",{get:function(){return this._g},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"detailVisibilityMode",{get:function(){return this._mode},set:function(e){(e=asEnum(e,DetailVisibilityMode))!=this._mode&&(this._mode=e,this.hideDetail(),this._g.invalidate())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"maxHeight",{get:function(){return this._maxHeight},set:function(e){this._maxHeight=asNumber(e,!0)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isAnimated",{get:function(){return this._animated},set:function(e){e!=this._animated&&(this._animated=asBoolean(e))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"keyActionEnter",{get:function(){return this._keyActionEnter},set:function(e){this._keyActionEnter=asEnum(e,KeyAction)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"createDetailCell",{get:function(){return this._createDetailCellFn},set:function(e){this._createDetailCellFn=asFunction(e,!0)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"disposeDetailCell",{get:function(){return this._disposeDetailCellFn},set:function(e){this._disposeDetailCellFn=asFunction(e,!0)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"rowHasDetail",{get:function(){return this._rowHasDetailFn},set:function(e){this._rowHasDetailFn=asFunction(e,!0)},enumerable:!0,configurable:!0}),e.prototype.getDetailRow=function(e){var t=this._g.rows;return t[e=this._toIndex(e)]instanceof DetailRow?t[e]:e<t.length-1&&t[e+1]instanceof DetailRow?t[e+1]:null},e.prototype.isDetailVisible=function(e){return null!=this.getDetailRow(e)},e.prototype.isDetailAvailable=function(e){return e=this._toIndex(e),this._hasDetail(e)},e.prototype.hideDetail=function(e){var t=this._g.rows;if(null!=e){!(t[e=this._toIndex(e)]instanceof DetailRow)&&e<t.length-1&&t[e+1]instanceof DetailRow&&e++;var i=t[e];i instanceof DetailRow&&(this.disposeDetailCell&&this.disposeDetailCell(i),Control.disposeAll(i.detail),t.removeAt(e))}else for(var o=0;o<t.length;o++)t[o]instanceof DetailRow&&this.hideDetail(o)},e.prototype.showDetail=function(e,t){void 0===t&&(t=!1);var i=this._g,o=i.rows;if((e=this._toIndex(e))>0&&o[e]instanceof DetailRow&&e--,t){for(var n=i.selection,l=!1,r=0;r<o.length-1;r++)r!=e&&o[r+1]instanceof DetailRow&&(this.hideDetail(r),r<e&&e--,r<n.row&&(n.row--,n.row2--,l=!0));l&&i.select(n,!1)}if(!this.isDetailVisible(e)&&this._hasDetail(e)){var a=new DetailRow(o[e]),s=this._createDetailCell(o[e]);if(a.detail=s,s){o.insert(e+1,a);var c=i.containsFocus();if(this._animated){var d=s.style;d.transform="translateY(-100%)",d.opacity="0",animate(function(t){t<1?(d.transform="translateY("+(100*-(1-t)).toFixed(0)+"%)",d.opacity=(t*t).toString()):(d.transform="",d.opacity="",Control.invalidateAll(s),c&&i.scrollIntoView(e+1,-1))})}else c&&i.scrollIntoView(e+1,-1,!0)}}},e.prototype._sizeDetailRow=function(e){var t=this._g,i=e.detail;Control.refreshAll(i);var o=i.scrollHeight+t._cellPadVert,n=this._maxHeight;isNumber(n)&&n>0&&o>n&&(o=n),e.height=o,i.style.height||(i.style.height="100%");var l=i.querySelector(".wj-flexgrid");l&&!l.style.height&&(l.style.height="100%")},e.prototype._handleFixedCells=function(){var e=this._g,t=e.hostElement,i=Control.getControl(t.querySelector(".wj-flexgrid"));if(i instanceof FlexGrid&&(i.frozenRows||i.frozenColumns)){setCss([e._eTL,e._eBL,e._eCHdr,e._eCFtr,e._eRHdr,e._eMarquee],{zIndex:"6"});for(var o=e.hostElement.querySelectorAll(".wj-frozen"),n=0;n<o.length;n++){var l=o[n];if(closest(l,".wj-flexgrid")==e.hostElement){var r=parseInt(l.style.zIndex);l.style.zIndex=(r%3+3).toString()}}}},e.prototype._toIndex=function(e){return e instanceof Row&&(e=e.index),asNumber(e,!1,!0)},e.prototype._hdrClick=function(t){if(!t.defaultPrevented&&0==t.button&&closestClass(t.target,e._WJC_DETAIL))switch(this._mode){case DetailVisibilityMode.ExpandMulti:case DetailVisibilityMode.ExpandSingle:var i=this._g,o=i.hitTest(t.target);o.panel||(o=i.hitTest(t)),o.panel&&this._toggleRowDetail(o.row)&&t.preventDefault()}},e.prototype._toggleRowDetail=function(e){if(e>-1){if(this.isDetailVisible(e))return this.hideDetail(e),!0;if(this._hasDetail(e)){var t=this._g;return t.select(new CellRange(e,0,e,t.columns.length-1)),this.showDetail(e,this._mode==DetailVisibilityMode.ExpandSingle),!0}}return!1},e.prototype._selectionChanged=function(e,t){var i=this;this._mode==DetailVisibilityMode.Selection&&(this._toSel&&clearTimeout(this._toSel),this._toSel=setTimeout(function(){e.selection.row>-1?i.showDetail(e.selection.row,!0):i.hideDetail()},300))},e.prototype._formatItem=function(t,i){var o=this._g,n=i.cell,l=i.panel.rows[i.row];if(i.panel==o.cells&&l instanceof DetailRow&&null!=l.detail&&i.col==o.cells.columns.firstVisibleIndex&&(addClass(n,"wj-detail"),n.textContent="",n.style.textAlign="",n.className=n.className.replace(/wj\-align\-[\S]+/g,""),n.appendChild(l.detail),null==l.height&&this._sizeDetailRow(l)),i.panel==o.rowHeaders&&0==i.col&&this._hasDetail(i.row))switch(n.style.cursor="",this._mode){case DetailVisibilityMode.ExpandMulti:case DetailVisibilityMode.ExpandSingle:var r=o.rows[i.row+1]instanceof DetailRow,a=r?"minus":"plus",s=e._WJC_DETAIL;n.innerHTML='<div class="wj-btn wj-btn-glyph '+s+'" role="button" tabindex="-1"><span class="wj-glyph-'+a+'"></span></div>';var c=n.children[0],d=culture.FlexGridDetailProvider.ariaLabels.toggleDetail;setAriaLabel(c,d),setAttribute(c,"aria-expanded",r)}},e.prototype._resizedRow=function(e,t){var i=t.panel.rows[t.row];i instanceof DetailRow&&i.detail&&Control.refreshAll(i.detail)},e.prototype._hasDetail=function(e){var t=this._g.rows[e];return isFunction(this._rowHasDetailFn)?this._rowHasDetailFn(t):this._isRegularRow(t)},e.prototype._isRegularRow=function(e){return!(e instanceof GroupRow||e instanceof _NewRowTemplate)},e.prototype._createDetailCell=function(e,t){return this.createDetailCell?this.createDetailCell(e,t):null},e._WJC_DETAIL="wj-elem-detail",e}();export{FlexGridDetailProvider};_registerModule("wijmo.grid.detail",selfModule);