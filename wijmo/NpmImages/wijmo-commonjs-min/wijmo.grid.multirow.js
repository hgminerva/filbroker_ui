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

"use strict";var __extends=this&&this.__extends||function(){var e=function(t,o){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(t,o)};return function(t,o){function r(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}}();Object.defineProperty(exports,"__esModule",{value:!0});var wijmo_grid_1=require("wijmo/wijmo.grid"),wijmo_1=require("wijmo/wijmo"),selfModule=require("wijmo/wijmo.grid.multirow"),_Cell=function(e){function t(t){var o=e.call(this)||this;return o._row=o._col=0,o._rowspan=o._colspan=1,t&&wijmo_1.copy(o,t),o}return __extends(t,e),Object.defineProperty(t.prototype,"colspan",{get:function(){return this._colspan},set:function(e){this._colspan=wijmo_1.asInt(e,!1,!0),wijmo_1.assert(this._colspan>0,"colspan must be >= 1")},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"rowspan",{get:function(){return this._rowspan},set:function(e){this._rowspan=wijmo_1.asInt(e,!1,!0),wijmo_1.assert(this._rowspan>0,"colspan must be >= 1")},enumerable:!0,configurable:!0}),t}(wijmo_grid_1.Column);exports._Cell=_Cell;var _MultiRow=function(e){function t(t,o,r){var n=e.call(this,t)||this;return n._idxData=o,n._idxRecord=r,n}return __extends(t,e),Object.defineProperty(t.prototype,"recordIndex",{get:function(){return this._idxRecord},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"dataIndex",{get:function(){return this._idxData},enumerable:!0,configurable:!0}),t}(wijmo_grid_1.Row);exports._MultiRow=_MultiRow;var _CellGroup=function(e){function t(t,o){var r=e.call(this)||this;if(r._colstart=0,r._g=t,o&&wijmo_1.copy(r,o),!r._cells)throw"Cell group with no cells?";var n=0,i=0,l=0,s=1,a=0;r._cells.forEach(function(e,t){if(i>0&&i+e.colspan>r._colspan){for(var o=l;o<t;o++)r._cells[o].rowspan=s;n+=s,i=0,l=t,s=e.rowspan}e._row=n,e._col=i,i+=e.colspan,s=Math.max(s,e.rowspan),a+=e.colspan}),r._rowspan=n+1,r._colspan>a&&(r._colspan=a);for(var c=0;c<r._cells.length;c++){var _=r._cells[c];(c==r._cells.length-1||r._cells[c+1]._row>_._row)&&(i=_._col,_._colspan=r._colspan-i)}return r}return __extends(t,e),t.prototype._copy=function(e,t){var o=this;return"cells"==e&&(this._cells=[],wijmo_1.isArray(t)&&t.forEach(function(e){var t=new _Cell(e);!e.header&&t.binding&&(t.header=wijmo_1.toHeaderCase(t.binding)),o._cells.push(t),o._colspan=Math.max(o._colspan,t.colspan)}),!0)},Object.defineProperty(t.prototype,"cells",{get:function(){return this._cells},enumerable:!0,configurable:!0}),t.prototype.closeGroup=function(e){if(e>this._rowspan){for(var t=0;t<this._cells.length;t++){(o=this._cells[t])._row==this._rowspan-1&&(o._rowspan=e-o._row)}this._rowspan=e}this._cols=new wijmo_grid_1.ColumnCollection(this._g,this._g.columns.defaultSize),this._rng=new Array(e*this._colspan);for(t=0;t<this._cells.length;t++)for(var o=this._cells[t],r=0;r<o._rowspan;r++)for(var n=0;n<o._colspan;n++){var i=(o._row+r)*this._colspan+o._col+n;this._cols.setAt(i,o);var l=new wijmo_grid_1.CellRange(0-r,0-n,0-r+o._rowspan-1,0-n+o._colspan-1);l.isSingleCell||(this._rng[i]=l)}this._rng[-1]=new wijmo_grid_1.CellRange(0,this._colstart,0,this._colstart+this._colspan-1)},t.prototype.getColumnWidth=function(e){for(var t=0;t<this._cells.length;t++){var o=this._cells[t];if(o._col==e&&1==o.colspan)return o.width}return null},t.prototype.getMergedRange=function(e,t,o){if(t<0)return this._rng[-1];var r=e.rows[t],n=null!=r.recordIndex?r.recordIndex:t%this._rowspan,i=o-this._colstart,l=this._rng[n*this._colspan+i];return e.cellType==wijmo_grid_1.CellType.ColumnHeader&&t++,l?new wijmo_grid_1.CellRange(t+l.row,o+l.col,t+l.row2,o+l.col2):null},t.prototype.getBindingColumn=function(e,t,o){if(t<0)return this;var r=e.rows[t],n=r&&null!=r.recordIndex?r.recordIndex:t%this._rowspan,i=o-this._colstart;return this._cols[n*this._colspan+i]},t.prototype.getColumn=function(e){return this._cols.getColumn(e)},t}(_Cell);exports._CellGroup=_CellGroup;var _MergeManager=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.getMergedRange=function(t,o,r,n){void 0===n&&(n=!0);var i=t.grid;switch(t.cellType){case wijmo_grid_1.CellType.Cell:case wijmo_grid_1.CellType.RowHeader:if(t.rows[o]instanceof wijmo_grid_1.GroupRow)return e.prototype.getMergedRange.call(this,t,o,r,n)}switch(t.cellType){case wijmo_grid_1.CellType.Cell:case wijmo_grid_1.CellType.ColumnHeader:var l=i._cellGroupsByColumn[r];wijmo_1.assert(l instanceof _CellGroup,"Failed to get the group!");var s=t.cellType==wijmo_grid_1.CellType.ColumnHeader?l.getMergedRange(t,o-1,r):l.getMergedRange(t,o,r),a=t.columns.frozen;a&&s&&s.columnSpan>1&&s.col<a&&s.col2>=a&&(s=s.clone(),r<a?s.col2=a-1:s.col=a);var c=t.rows.frozen;return c&&s&&s.rowSpan>1&&t.cellType==wijmo_grid_1.CellType.Cell&&s.row<c&&s.row2>=c&&(s=s.clone(),o<c?s.row2=c-1:s.row=c),s;case wijmo_grid_1.CellType.RowHeader:var _=i._rowsPerItem,d=o-t.rows[o].recordIndex,u=Math.min(d+_-1,t.rows.length-1);return new wijmo_grid_1.CellRange(d,0,u,t.columns.length-1);case wijmo_grid_1.CellType.TopLeft:return new wijmo_grid_1.CellRange(0,0,t.rows.length-1,t.columns.length-1)}return null},t}(wijmo_grid_1.MergeManager);exports._MergeManager=_MergeManager;var MultiRow=function(e){function t(t,o){var r=e.call(this,t)||this;r._rowsPerItem=1,r._cellBindingGroups=[],r._centerVert=!0,r._collapsedHeaders=!1,r.collapsedHeadersChanging=new wijmo_1.Event,r.collapsedHeadersChanged=new wijmo_1.Event,wijmo_1.addClass(r.hostElement,"wj-multirow");var n=r.columnHeaders.hostElement.parentElement,i=wijmo_1.createElement('<div class="wj-hdr-collapse"><span></span></div>');i.style.display="none",n.appendChild(i),r._btnCollapse=i,r._updateButtonGlyph(),r.addEventListener(i,"mousedown",function(e){switch(r.collapsedHeaders){case null:case!1:r._collapsedHeadersWasNull=null==r.collapsedHeaders,r.collapsedHeaders=!0;break;case!0:r.collapsedHeaders=!!r._collapsedHeadersWasNull&&null}e.preventDefault(),r.focus()},!0),r.autoGenerateColumns=!1,r.mergeManager=new _MergeManager(r);var l=r.hostElement;return r.removeEventListener(l,"dragover"),r.removeEventListener(l,"dragleave"),r.removeEventListener(l,"dragdrop"),r._addHdl=new _MultiRowAddNewHandler(r),r.formatItem.addHandler(r._formatItem,r),r.addEventListener(r.rowHeaders.hostElement,"click",function(e){if(!e.defaultPrevented&&r.selectionMode!=wijmo_grid_1.SelectionMode.None){var t=r.hitTest(e);if(t.panel==r.rowHeaders&&t.row>-1){var o=r.selection,n=r.rows[o.topRow],i=r.selectionMode!=wijmo_grid_1.SelectionMode.Row?r.rows[o.bottomRow]:n;if(n&&null!=n.recordIndex){var l=n.index-n.recordIndex,s=i.index-i.recordIndex+r.rowsPerItem-1,a=r.columns.length-1,c=o.row!=o.topRow?new wijmo_grid_1.CellRange(s,0,l,a):new wijmo_grid_1.CellRange(l,0,s,a);r.select(c),e.preventDefault()}}}},!0),r.initialize(o),r}return __extends(t,e),t.prototype._getProductInfo=function(){return"H87K,MultiRow"},Object.defineProperty(t.prototype,"layoutDefinition",{get:function(){return this._layoutDef},set:function(e){var t=this;this._layoutDef=wijmo_1.asArray(e),this._rowsPerItem=1,this._cellBindingGroups=this._parseCellGroups(this._layoutDef),this._cellBindingGroups.forEach(function(e){t._rowsPerItem=Math.max(t._rowsPerItem,e._rowspan)}),this._bindGrid(!0)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"rowsPerItem",{get:function(){return this._rowsPerItem},enumerable:!0,configurable:!0}),t.prototype.getBindingColumn=function(e,t,o){return this._getBindingColumn(e,t,e.columns[o])},t.prototype.getColumn=function(t){if(wijmo_1.isString(t)){for(var o=this._cellBindingGroups,r=null,n=0;n<o.length&&!r;n++)r=o[n].getColumn(t);return r}return e.prototype.getColumn.call(this,t)},Object.defineProperty(t.prototype,"centerHeadersVertically",{get:function(){return this._centerVert},set:function(e){e!=this._centerVert&&(this._centerVert=wijmo_1.asBoolean(e),this.invalidate())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"collapsedHeaders",{get:function(){return this._collapsedHeaders},set:function(e){if(e!=this._collapsedHeaders){var t=new wijmo_1.CancelEventArgs;this.onCollapsedHeadersChanging(t)&&(this._collapsedHeaders=wijmo_1.asBoolean(e,!0),this._updateCollapsedHeaders(),this._updateButtonGlyph(),this.onCollapsedHeadersChanged(t))}},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"showHeaderCollapseButton",{get:function(){return""==this._btnCollapse.style.display},set:function(e){e!=this.showHeaderCollapseButton&&(this._btnCollapse.style.display=wijmo_1.asBoolean(e)?"":"none")},enumerable:!0,configurable:!0}),t.prototype.onCollapsedHeadersChanging=function(e){return this.collapsedHeadersChanging.raise(this,e),!e.cancel},t.prototype.onCollapsedHeadersChanged=function(e){this.collapsedHeadersChanged.raise(this,e)},t.prototype._getQuickAutoSize=function(){return wijmo_1.isBoolean(this.quickAutoSize)?this.quickAutoSize:this.formatItem.handlerCount<=1&&null==this.itemFormatter},t.prototype._addBoundRow=function(e,t){for(var o=e[t],r=0;r<this._rowsPerItem;r++)this.rows.push(new _MultiRow(o,t,r))},t.prototype._addNode=function(e,t,o){this._addBoundRow(e,t)},t.prototype._bindColumns=function(){for(var e=this.columnHeaders.rows,t=this._rowsPerItem+1;e.length>t;)e.removeAt(e.length-1);for(;e.length<t;)e.push(new wijmo_grid_1.Row);this._updateCollapsedHeaders(),this.columns.clear(),this._cellGroupsByColumn={};var o=this.collectionView;if(o&&o.sourceCollection&&o.sourceCollection.length&&o.sourceCollection[0],this._cellBindingGroups)for(var r=0;r<this._cellBindingGroups.length;r++)for(var n=this._cellBindingGroups[r],i=function(e){l._cellGroupsByColumn[l.columns.length]=n;for(var t=new wijmo_grid_1.Column,o=function(o){var r=n.cells[o],i="width,minWidth,maxWidth,binding,header,format,dataMap,name,aggregate".split(",");if(r._col==e)return i.forEach(function(e){null!=r[e]&&(t[e]=r[e])}),"break"},r=0;r<n.cells.length;r++){if("break"===o(r))break}l.columns.push(t)},l=this,s=0;s<n._colspan;s++)i(s)},t.prototype._updateCollapsedHeaders=function(){var e=this.columnHeaders.rows,t=this.collapsedHeaders;e[0].visible=0!=t;for(var o=1;o<e.length;o++)e[o].visible=1!=t},t.prototype._updateColumnTypes=function(){e.prototype._updateColumnTypes.call(this);var t=this.collectionView;if(wijmo_1.hasItems(t))for(var o=t.items[0],r=0;r<this._cellBindingGroups.length;r++)for(var n=this._cellBindingGroups[r],i=0;i<n._cols.length;i++){var l=n._cols[i];null==l.dataType&&l._binding&&(l.dataType=wijmo_1.getType(l._binding.getValue(o)))}},t.prototype._getBindingColumn=function(e,t,o){if(e==this.cells||e==this.columnHeaders){var r=this._cellGroupsByColumn[o.index];e==this.columnHeaders&&t--,o=r.getBindingColumn(e,t,o.index)}return o},t.prototype._cvCollectionChanged=function(e,t){if(this.autoGenerateColumns&&0==this.columns.length)this._bindGrid(!0);else{var o=wijmo_1.NotifyCollectionChangedAction;switch(t.action){case o.Change:this.invalidate();break;case o.Add:if(t.index==this.collectionView.items.length-1){for(var r=this.rows.length;r>0&&this.rows[r-1]instanceof wijmo_grid_1._NewRowTemplate;)r--;for(var n=0;n<this._rowsPerItem;n++)this.rows.insert(r+n,new _MultiRow(t.item,t.index,n));return}wijmo_1.assert(!1,"added item should be the last one.");break;default:this._bindGrid(!1)}}},t.prototype._parseCellGroups=function(e){var t=[],o=1;if(e){for(var r=0,n=0;r<e.length;r++){var i=new _CellGroup(this,e[r]);i._colstart=n,n+=i._colspan,o=Math.max(o,i._rowspan),t.push(i)}for(r=0;r<t.length;r++)t[r].closeGroup(o)}return t},t.prototype._formatItem=function(e,t){var o=this._rowsPerItem,r=t.panel.cellType,n=t.panel.rows[t.range.row],i=t.panel.rows[t.range.row2],l=t.cell;if(r==wijmo_grid_1.CellType.ColumnHeader&&wijmo_1.toggleClass(l,"wj-group-header",0==t.range.row),r==wijmo_grid_1.CellType.Cell||r==wijmo_grid_1.CellType.ColumnHeader){var s=this._cellGroupsByColumn[t.col];wijmo_1.assert(s instanceof _CellGroup,"Failed to get the group!"),wijmo_1.toggleClass(l,"wj-group-start",s._colstart==t.range.col),wijmo_1.toggleClass(l,"wj-group-end",s._colstart+s._colspan-1==t.range.col2)}o>1&&(r!=wijmo_grid_1.CellType.Cell&&r!=wijmo_grid_1.CellType.RowHeader||(wijmo_1.toggleClass(l,"wj-record-start",n instanceof _MultiRow&&0==n.recordIndex),wijmo_1.toggleClass(l,"wj-record-end",i instanceof _MultiRow&&i.recordIndex==o-1)));var a=this.alternatingRowStep;if(a){var c=!1;n instanceof _MultiRow&&(c=n.dataIndex%(a+1)==0,1==a&&(c=!c)),wijmo_1.toggleClass(l,"wj-alt",c)}if(this._centerVert&&!l.getAttribute("wj-state-measuring")){var _=!1;if(l.innerHTML&&t.range.rowSpan>1)if(_=!0,0==l.childElementCount)l.innerHTML="<div>"+l.innerHTML+"</div>";else{var d=document.createElement("div"),u=document.createRange();u.selectNodeContents(l),u.surroundContents(d)}wijmo_1.toggleClass(l,"wj-center-vert",_)}},t.prototype._updateButtonGlyph=function(){var e=this._btnCollapse.querySelector("span");e instanceof HTMLElement&&(e.className=this.collapsedHeaders?"wj-glyph-left":"wj-glyph-down-left")},t.prototype._getError=function(t,o,r){if(wijmo_1.isFunction(this.itemValidator)&&t==this.rowHeaders)for(var n=0;n<this._rowsPerItem;n++)for(r=0;r<this.columns.length;r++){var i=this.itemValidator(o+n,r);if(i)return i}return e.prototype._getError.call(this,t,o,r)},t}(wijmo_grid_1.FlexGrid);exports.MultiRow=MultiRow;var _MultiRowAddNewHandler=function(e){function t(t){return t._addHdl._detach(),e.call(this,t)||this}return __extends(t,e),t.prototype.updateNewRowTemplate=function(){for(var e=this._g.editableCollectionView,t=this._g,o=t.rows,r=e&&e.canAddNew&&t.allowAddNew&&!t.isReadOnly,n=-1,i=0;i<o.length;i+=t.rowsPerItem)if(o[i]instanceof _MultiRowNewRowTemplate){n=i;break}if(r&&n>-1&&(this._top&&n>0||!this._top&&0==n)&&(n=-1,this._removeNewRowTemplate()),r&&n<0)for(i=0;i<t.rowsPerItem;i++){var l=new _MultiRowNewRowTemplate(i);this._top?o.insert(i,l):o.push(l)}!r&&n>-1&&this._removeNewRowTemplate()},t.prototype._keydown=function(t){e.prototype._keydown.call(this,t),t.defaultPrevented||t.keyCode!=wijmo_1.Key.Escape||this._copyNewDataItem()},t.prototype._rowEditEnded=function(t,o){e.prototype._rowEditEnded.call(this,t,o),this._copyNewDataItem()},t.prototype._beginningEdit=function(t,o){e.prototype._beginningEdit.call(this,t,o),this._top&&!t.rows[0].dataItem&&this._copyNewDataItem()},t.prototype._copyNewDataItem=function(){if(this._top)for(var e=this._g,t=e.rows,o=0;o<e.rowsPerItem;o++)t[o]instanceof wijmo_grid_1._NewRowTemplate&&(t[o].dataItem=this._nrt.dataItem)},t.prototype._removeNewRowTemplate=function(){for(var e=0,t=this._g.rows;e<t.length;e++)t[e]instanceof wijmo_grid_1._NewRowTemplate&&(t.removeAt(e),e--)},t}(wijmo_grid_1._AddNewHandler);exports._MultiRowAddNewHandler=_MultiRowAddNewHandler;var _MultiRowNewRowTemplate=function(e){function t(t){var o=e.call(this)||this;return o._idxRecord=t,o}return __extends(t,e),Object.defineProperty(t.prototype,"recordIndex",{get:function(){return this._idxRecord},enumerable:!0,configurable:!0}),t}(wijmo_grid_1._NewRowTemplate);wijmo_1._registerModule("wijmo.grid.multirow",selfModule);