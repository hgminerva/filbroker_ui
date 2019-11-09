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

var __extends=this&&this.__extends||function(){var e=function(t,o){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(t,o)};return function(t,o){function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();import{Row,MergeManager,GroupRow,CellRange,CellType,FlexGrid,_AddNewHandler,_NewRowTemplate,Column,SelectionMode,ColumnCollection}from"wijmo/wijmo.grid";import{assert,Key,copy,asInt,Event,CancelEventArgs,addClass,createElement,asArray,asBoolean,getType,toggleClass,isFunction,NotifyCollectionChangedAction,hasItems,isString,isBoolean,isArray,toHeaderCase,_registerModule}from"wijmo/wijmo";import*as selfModule from"wijmo/wijmo.grid.multirow";var _Cell=function(e){function t(t){var o=e.call(this)||this;return o._row=o._col=0,o._rowspan=o._colspan=1,t&&copy(o,t),o}return __extends(t,e),Object.defineProperty(t.prototype,"colspan",{get:function(){return this._colspan},set:function(e){this._colspan=asInt(e,!1,!0),assert(this._colspan>0,"colspan must be >= 1")},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"rowspan",{get:function(){return this._rowspan},set:function(e){this._rowspan=asInt(e,!1,!0),assert(this._rowspan>0,"colspan must be >= 1")},enumerable:!0,configurable:!0}),t}(Column);export{_Cell};var _MultiRow=function(e){function t(t,o,n){var r=e.call(this,t)||this;return r._idxData=o,r._idxRecord=n,r}return __extends(t,e),Object.defineProperty(t.prototype,"recordIndex",{get:function(){return this._idxRecord},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"dataIndex",{get:function(){return this._idxData},enumerable:!0,configurable:!0}),t}(Row);export{_MultiRow};var _CellGroup=function(e){function t(t,o){var n=e.call(this)||this;if(n._colstart=0,n._g=t,o&&copy(n,o),!n._cells)throw"Cell group with no cells?";var r=0,l=0,s=0,a=1,i=0;n._cells.forEach(function(e,t){if(l>0&&l+e.colspan>n._colspan){for(var o=s;o<t;o++)n._cells[o].rowspan=a;r+=a,l=0,s=t,a=e.rowspan}e._row=r,e._col=l,l+=e.colspan,a=Math.max(a,e.rowspan),i+=e.colspan}),n._rowspan=r+1,n._colspan>i&&(n._colspan=i);for(var c=0;c<n._cells.length;c++){var p=n._cells[c];(c==n._cells.length-1||n._cells[c+1]._row>p._row)&&(l=p._col,p._colspan=n._colspan-l)}return n}return __extends(t,e),t.prototype._copy=function(e,t){var o=this;return"cells"==e&&(this._cells=[],isArray(t)&&t.forEach(function(e){var t=new _Cell(e);!e.header&&t.binding&&(t.header=toHeaderCase(t.binding)),o._cells.push(t),o._colspan=Math.max(o._colspan,t.colspan)}),!0)},Object.defineProperty(t.prototype,"cells",{get:function(){return this._cells},enumerable:!0,configurable:!0}),t.prototype.closeGroup=function(e){if(e>this._rowspan){for(var t=0;t<this._cells.length;t++){(o=this._cells[t])._row==this._rowspan-1&&(o._rowspan=e-o._row)}this._rowspan=e}this._cols=new ColumnCollection(this._g,this._g.columns.defaultSize),this._rng=new Array(e*this._colspan);for(t=0;t<this._cells.length;t++)for(var o=this._cells[t],n=0;n<o._rowspan;n++)for(var r=0;r<o._colspan;r++){var l=(o._row+n)*this._colspan+o._col+r;this._cols.setAt(l,o);var s=new CellRange(0-n,0-r,0-n+o._rowspan-1,0-r+o._colspan-1);s.isSingleCell||(this._rng[l]=s)}this._rng[-1]=new CellRange(0,this._colstart,0,this._colstart+this._colspan-1)},t.prototype.getColumnWidth=function(e){for(var t=0;t<this._cells.length;t++){var o=this._cells[t];if(o._col==e&&1==o.colspan)return o.width}return null},t.prototype.getMergedRange=function(e,t,o){if(t<0)return this._rng[-1];var n=e.rows[t],r=null!=n.recordIndex?n.recordIndex:t%this._rowspan,l=o-this._colstart,s=this._rng[r*this._colspan+l];return e.cellType==CellType.ColumnHeader&&t++,s?new CellRange(t+s.row,o+s.col,t+s.row2,o+s.col2):null},t.prototype.getBindingColumn=function(e,t,o){if(t<0)return this;var n=e.rows[t],r=n&&null!=n.recordIndex?n.recordIndex:t%this._rowspan,l=o-this._colstart;return this._cols[r*this._colspan+l]},t.prototype.getColumn=function(e){return this._cols.getColumn(e)},t}(_Cell);export{_CellGroup};var _MergeManager=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.getMergedRange=function(t,o,n,r){void 0===r&&(r=!0);var l=t.grid;switch(t.cellType){case CellType.Cell:case CellType.RowHeader:if(t.rows[o]instanceof GroupRow)return e.prototype.getMergedRange.call(this,t,o,n,r)}switch(t.cellType){case CellType.Cell:case CellType.ColumnHeader:var s=l._cellGroupsByColumn[n];assert(s instanceof _CellGroup,"Failed to get the group!");var a=t.cellType==CellType.ColumnHeader?s.getMergedRange(t,o-1,n):s.getMergedRange(t,o,n),i=t.columns.frozen;i&&a&&a.columnSpan>1&&a.col<i&&a.col2>=i&&(a=a.clone(),n<i?a.col2=i-1:a.col=i);var c=t.rows.frozen;return c&&a&&a.rowSpan>1&&t.cellType==CellType.Cell&&a.row<c&&a.row2>=c&&(a=a.clone(),o<c?a.row2=c-1:a.row=c),a;case CellType.RowHeader:var p=l._rowsPerItem,u=o-t.rows[o].recordIndex,d=Math.min(u+p-1,t.rows.length-1);return new CellRange(u,0,d,t.columns.length-1);case CellType.TopLeft:return new CellRange(0,0,t.rows.length-1,t.columns.length-1)}return null},t}(MergeManager);export{_MergeManager};var MultiRow=function(e){function t(t,o){var n=e.call(this,t)||this;n._rowsPerItem=1,n._cellBindingGroups=[],n._centerVert=!0,n._collapsedHeaders=!1,n.collapsedHeadersChanging=new Event,n.collapsedHeadersChanged=new Event,addClass(n.hostElement,"wj-multirow");var r=n.columnHeaders.hostElement.parentElement,l=createElement('<div class="wj-hdr-collapse"><span></span></div>');l.style.display="none",r.appendChild(l),n._btnCollapse=l,n._updateButtonGlyph(),n.addEventListener(l,"mousedown",function(e){switch(n.collapsedHeaders){case null:case!1:n._collapsedHeadersWasNull=null==n.collapsedHeaders,n.collapsedHeaders=!0;break;case!0:n.collapsedHeaders=!!n._collapsedHeadersWasNull&&null}e.preventDefault(),n.focus()},!0),n.autoGenerateColumns=!1,n.mergeManager=new _MergeManager(n);var s=n.hostElement;return n.removeEventListener(s,"dragover"),n.removeEventListener(s,"dragleave"),n.removeEventListener(s,"dragdrop"),n._addHdl=new _MultiRowAddNewHandler(n),n.formatItem.addHandler(n._formatItem,n),n.addEventListener(n.rowHeaders.hostElement,"click",function(e){if(!e.defaultPrevented&&n.selectionMode!=SelectionMode.None){var t=n.hitTest(e);if(t.panel==n.rowHeaders&&t.row>-1){var o=n.selection,r=n.rows[o.topRow],l=n.selectionMode!=SelectionMode.Row?n.rows[o.bottomRow]:r;if(r&&null!=r.recordIndex){var s=r.index-r.recordIndex,a=l.index-l.recordIndex+n.rowsPerItem-1,i=n.columns.length-1,c=o.row!=o.topRow?new CellRange(a,0,s,i):new CellRange(s,0,a,i);n.select(c),e.preventDefault()}}}},!0),n.initialize(o),n}return __extends(t,e),t.prototype._getProductInfo=function(){return"H87K,MultiRow"},Object.defineProperty(t.prototype,"layoutDefinition",{get:function(){return this._layoutDef},set:function(e){var t=this;this._layoutDef=asArray(e),this._rowsPerItem=1,this._cellBindingGroups=this._parseCellGroups(this._layoutDef),this._cellBindingGroups.forEach(function(e){t._rowsPerItem=Math.max(t._rowsPerItem,e._rowspan)}),this._bindGrid(!0)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"rowsPerItem",{get:function(){return this._rowsPerItem},enumerable:!0,configurable:!0}),t.prototype.getBindingColumn=function(e,t,o){return this._getBindingColumn(e,t,e.columns[o])},t.prototype.getColumn=function(t){if(isString(t)){for(var o=this._cellBindingGroups,n=null,r=0;r<o.length&&!n;r++)n=o[r].getColumn(t);return n}return e.prototype.getColumn.call(this,t)},Object.defineProperty(t.prototype,"centerHeadersVertically",{get:function(){return this._centerVert},set:function(e){e!=this._centerVert&&(this._centerVert=asBoolean(e),this.invalidate())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"collapsedHeaders",{get:function(){return this._collapsedHeaders},set:function(e){if(e!=this._collapsedHeaders){var t=new CancelEventArgs;this.onCollapsedHeadersChanging(t)&&(this._collapsedHeaders=asBoolean(e,!0),this._updateCollapsedHeaders(),this._updateButtonGlyph(),this.onCollapsedHeadersChanged(t))}},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"showHeaderCollapseButton",{get:function(){return""==this._btnCollapse.style.display},set:function(e){e!=this.showHeaderCollapseButton&&(this._btnCollapse.style.display=asBoolean(e)?"":"none")},enumerable:!0,configurable:!0}),t.prototype.onCollapsedHeadersChanging=function(e){return this.collapsedHeadersChanging.raise(this,e),!e.cancel},t.prototype.onCollapsedHeadersChanged=function(e){this.collapsedHeadersChanged.raise(this,e)},t.prototype._getQuickAutoSize=function(){return isBoolean(this.quickAutoSize)?this.quickAutoSize:this.formatItem.handlerCount<=1&&null==this.itemFormatter},t.prototype._addBoundRow=function(e,t){for(var o=e[t],n=0;n<this._rowsPerItem;n++)this.rows.push(new _MultiRow(o,t,n))},t.prototype._addNode=function(e,t,o){this._addBoundRow(e,t)},t.prototype._bindColumns=function(){for(var e=this.columnHeaders.rows,t=this._rowsPerItem+1;e.length>t;)e.removeAt(e.length-1);for(;e.length<t;)e.push(new Row);this._updateCollapsedHeaders(),this.columns.clear(),this._cellGroupsByColumn={};var o=this.collectionView;if(o&&o.sourceCollection&&o.sourceCollection.length&&o.sourceCollection[0],this._cellBindingGroups)for(var n=0;n<this._cellBindingGroups.length;n++)for(var r=this._cellBindingGroups[n],l=function(e){s._cellGroupsByColumn[s.columns.length]=r;for(var t=new Column,o=function(o){var n=r.cells[o],l="width,minWidth,maxWidth,binding,header,format,dataMap,name,aggregate".split(",");if(n._col==e)return l.forEach(function(e){null!=n[e]&&(t[e]=n[e])}),"break"},n=0;n<r.cells.length;n++){if("break"===o(n))break}s.columns.push(t)},s=this,a=0;a<r._colspan;a++)l(a)},t.prototype._updateCollapsedHeaders=function(){var e=this.columnHeaders.rows,t=this.collapsedHeaders;e[0].visible=0!=t;for(var o=1;o<e.length;o++)e[o].visible=1!=t},t.prototype._updateColumnTypes=function(){e.prototype._updateColumnTypes.call(this);var t=this.collectionView;if(hasItems(t))for(var o=t.items[0],n=0;n<this._cellBindingGroups.length;n++)for(var r=this._cellBindingGroups[n],l=0;l<r._cols.length;l++){var s=r._cols[l];null==s.dataType&&s._binding&&(s.dataType=getType(s._binding.getValue(o)))}},t.prototype._getBindingColumn=function(e,t,o){if(e==this.cells||e==this.columnHeaders){var n=this._cellGroupsByColumn[o.index];e==this.columnHeaders&&t--,o=n.getBindingColumn(e,t,o.index)}return o},t.prototype._cvCollectionChanged=function(e,t){if(this.autoGenerateColumns&&0==this.columns.length)this._bindGrid(!0);else{var o=NotifyCollectionChangedAction;switch(t.action){case o.Change:this.invalidate();break;case o.Add:if(t.index==this.collectionView.items.length-1){for(var n=this.rows.length;n>0&&this.rows[n-1]instanceof _NewRowTemplate;)n--;for(var r=0;r<this._rowsPerItem;r++)this.rows.insert(n+r,new _MultiRow(t.item,t.index,r));return}assert(!1,"added item should be the last one.");break;default:this._bindGrid(!1)}}},t.prototype._parseCellGroups=function(e){var t=[],o=1;if(e){for(var n=0,r=0;n<e.length;n++){var l=new _CellGroup(this,e[n]);l._colstart=r,r+=l._colspan,o=Math.max(o,l._rowspan),t.push(l)}for(n=0;n<t.length;n++)t[n].closeGroup(o)}return t},t.prototype._formatItem=function(e,t){var o=this._rowsPerItem,n=t.panel.cellType,r=t.panel.rows[t.range.row],l=t.panel.rows[t.range.row2],s=t.cell;if(n==CellType.ColumnHeader&&toggleClass(s,"wj-group-header",0==t.range.row),n==CellType.Cell||n==CellType.ColumnHeader){var a=this._cellGroupsByColumn[t.col];assert(a instanceof _CellGroup,"Failed to get the group!"),toggleClass(s,"wj-group-start",a._colstart==t.range.col),toggleClass(s,"wj-group-end",a._colstart+a._colspan-1==t.range.col2)}o>1&&(n!=CellType.Cell&&n!=CellType.RowHeader||(toggleClass(s,"wj-record-start",r instanceof _MultiRow&&0==r.recordIndex),toggleClass(s,"wj-record-end",l instanceof _MultiRow&&l.recordIndex==o-1)));var i=this.alternatingRowStep;if(i){var c=!1;r instanceof _MultiRow&&(c=r.dataIndex%(i+1)==0,1==i&&(c=!c)),toggleClass(s,"wj-alt",c)}if(this._centerVert&&!s.getAttribute("wj-state-measuring")){var p=!1;if(s.innerHTML&&t.range.rowSpan>1)if(p=!0,0==s.childElementCount)s.innerHTML="<div>"+s.innerHTML+"</div>";else{var u=document.createElement("div"),d=document.createRange();d.selectNodeContents(s),d.surroundContents(u)}toggleClass(s,"wj-center-vert",p)}},t.prototype._updateButtonGlyph=function(){var e=this._btnCollapse.querySelector("span");e instanceof HTMLElement&&(e.className=this.collapsedHeaders?"wj-glyph-left":"wj-glyph-down-left")},t.prototype._getError=function(t,o,n){if(isFunction(this.itemValidator)&&t==this.rowHeaders)for(var r=0;r<this._rowsPerItem;r++)for(n=0;n<this.columns.length;n++){var l=this.itemValidator(o+r,n);if(l)return l}return e.prototype._getError.call(this,t,o,n)},t}(FlexGrid);export{MultiRow};var _MultiRowAddNewHandler=function(e){function t(t){return t._addHdl._detach(),e.call(this,t)||this}return __extends(t,e),t.prototype.updateNewRowTemplate=function(){for(var e=this._g.editableCollectionView,t=this._g,o=t.rows,n=e&&e.canAddNew&&t.allowAddNew&&!t.isReadOnly,r=-1,l=0;l<o.length;l+=t.rowsPerItem)if(o[l]instanceof _MultiRowNewRowTemplate){r=l;break}if(n&&r>-1&&(this._top&&r>0||!this._top&&0==r)&&(r=-1,this._removeNewRowTemplate()),n&&r<0)for(l=0;l<t.rowsPerItem;l++){var s=new _MultiRowNewRowTemplate(l);this._top?o.insert(l,s):o.push(s)}!n&&r>-1&&this._removeNewRowTemplate()},t.prototype._keydown=function(t){e.prototype._keydown.call(this,t),t.defaultPrevented||t.keyCode!=Key.Escape||this._copyNewDataItem()},t.prototype._rowEditEnded=function(t,o){e.prototype._rowEditEnded.call(this,t,o),this._copyNewDataItem()},t.prototype._beginningEdit=function(t,o){e.prototype._beginningEdit.call(this,t,o),this._top&&!t.rows[0].dataItem&&this._copyNewDataItem()},t.prototype._copyNewDataItem=function(){if(this._top)for(var e=this._g,t=e.rows,o=0;o<e.rowsPerItem;o++)t[o]instanceof _NewRowTemplate&&(t[o].dataItem=this._nrt.dataItem)},t.prototype._removeNewRowTemplate=function(){for(var e=0,t=this._g.rows;e<t.length;e++)t[e]instanceof _NewRowTemplate&&(t.removeAt(e),e--)},t}(_AddNewHandler);export{_MultiRowAddNewHandler};var _MultiRowNewRowTemplate=function(e){function t(t){var o=e.call(this)||this;return o._idxRecord=t,o}return __extends(t,e),Object.defineProperty(t.prototype,"recordIndex",{get:function(){return this._idxRecord},enumerable:!0,configurable:!0}),t}(_NewRowTemplate);_registerModule("wijmo.grid.multirow",selfModule);