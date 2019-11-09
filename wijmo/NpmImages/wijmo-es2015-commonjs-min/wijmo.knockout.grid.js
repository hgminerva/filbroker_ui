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

"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const wijmo_knockout_base_1=require("wijmo/wijmo.knockout.base"),mKo=require("knockout"),wjcGrid=require("wijmo/wijmo.grid");var wjKo=mKo;class wjFlexGrid extends wijmo_knockout_base_1.WjBinding{_getControlConstructor(){return wjcGrid.FlexGrid}_createWijmoContext(){return new WjFlexGridContext(this)}_initialize(){super._initialize(),wijmo_knockout_base_1.MetaFactory.findProp("itemFormatter",this._metaData.props).updateControl=this._formatterPropHandler}_formatterPropHandler(e,t,r,o,l){return o!==e._userFormatter&&(e._userFormatter=o,r.invalidate()),!0}}wjFlexGrid._columnTemplateProp="_wjkoColumnTemplate",wjFlexGrid._cellClonedTemplateProp="__wjkoClonedTempl",wjFlexGrid._cellVMProp="__wjkoCellVM",wjFlexGrid._templColIdx="_wjkoTemplColIdx",wjFlexGrid._columnStyleBinding="wjStyle",wjFlexGrid._columnStyleProp="__wjkoStyle",exports.wjFlexGrid=wjFlexGrid;class WjFlexGridContext extends wijmo_knockout_base_1.WjContext{constructor(){super(...arguments),this._wrapperFormatter=this._itemFormatter.bind(this)}_initControl(){super._initControl(),this.control.itemFormatter=this._wrapperFormatter}_itemFormatter(e,t,r,o){var l=e.columns[r],i=l[wjFlexGrid._columnTemplateProp],n=l[wjFlexGrid._columnStyleProp];if((i||n)&&e.cellType==wjcGrid.CellType.Cell){var d=e.grid.editRange;if(d&&d.row===t&&d.col===r)return;if(e.rows[t]instanceof wjcGrid.GroupRow)return;var s=o[wjFlexGrid._cellVMProp],a=o[wjFlexGrid._cellClonedTemplateProp],w=e.rows[t].dataItem;if(s&&o[wjFlexGrid._templColIdx]!=r&&(o[wjFlexGrid._cellVMProp]=o[wjFlexGrid._cellClonedTemplateProp]=o[wjFlexGrid._templColIdx]=s=a=null,wjKo.cleanNode(o)),s)a&&(o.innerHTML="",o.appendChild(a)),s.$row(t),s.$col(r),s.$item()!=w?s.$item(w):s.$item.valueHasMutated();else{s={$row:wjKo.observable(t),$col:wjKo.observable(r),$item:wjKo.observable(w)};var j=this.bindingContext.extend(s);if(i){o.innerHTML="<div>"+i+"</div>";var m=o.childNodes[0];o[wjFlexGrid._cellClonedTemplateProp]=m}else o.setAttribute("data-bind","style:"+n);o[wjFlexGrid._cellVMProp]=s,o[wjFlexGrid._templColIdx]=r,wjKo.applyBindings(j,o)}var u=o.scrollHeight;e.rows[t].renderHeight<u&&(e.rows.defaultSize=u)}else this._userFormatter&&this._userFormatter(e,t,r,o)}}exports.WjFlexGridContext=WjFlexGridContext;class wjFlexGridColumn extends wijmo_knockout_base_1.WjBinding{_getControlConstructor(){return wjcGrid.Column}_createControl(e){return new wjcGrid.Column}_createWijmoContext(){return new WjFlexGridColumnContext(this)}}exports.wjFlexGridColumn=wjFlexGridColumn;class WjFlexGridColumnContext extends wijmo_knockout_base_1.WjContext{_initControl(){var e=this.parentWjContext;if(e){var t=e.control;t.autoGenerateColumns&&(t.autoGenerateColumns=!1,t.columns.clear())}super._initControl();var r=this.element.innerHTML.trim();this.control[wjFlexGrid._columnTemplateProp]=r;var o=this.allBindings.get(wjFlexGrid._columnStyleBinding);o&&(this.control[wjFlexGrid._columnStyleProp]=o.trim()),(r||o)&&this.control._setFlag(wjcGrid.RowColFlags.HasTemplate,!0),this.element.innerHTML=""}}exports.WjFlexGridColumnContext=WjFlexGridColumnContext;class wjStyle{constructor(){this.preprocess=function(e,t,r){return wjStyle.quoteString(e)},this.init=function(){}}static quoteString(e){return null==e?e:"'"+e.replace(/'/g,"\\'")+"'"}static unquoteString(e){return!e||e.length<2?e:("'"===e.charAt(0)&&(e=e.substr(1,e.length-1)),e.replace(/\\\'/g,"'"))}}exports.wjStyle=wjStyle,wjKo.bindingHandlers[wjFlexGrid._columnStyleBinding]=new wjStyle,wjKo.bindingHandlers.wjFlexGrid=new wjFlexGrid,wjKo.bindingHandlers.wjFlexGridColumn=new wjFlexGridColumn;