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

var __extends=this&&this.__extends||function(){var e=function(l,o){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,l){e.__proto__=l}||function(e,l){for(var o in l)l.hasOwnProperty(o)&&(e[o]=l[o])})(l,o)};return function(l,o){function t(){this.constructor=l}e(l,o),l.prototype=null===o?Object.create(o):(t.prototype=o.prototype,new t)}}();import{_getModule,Globalize,DataType,isString,isNumber,isInt,isDate,isFunction,isNullOrWhiteSpace,isObject,tryCast,asEnum,getType,copy,_registerModule}from"wijmo/wijmo";import{FlexGrid,Row,GroupRow,Column,CellRange,CellRangeEventArgs,RowColFlags,CellType,_NewRowTemplate}from"wijmo/wijmo.grid";import*as mXlsx from"wijmo/wijmo.xlsx";import*as selfModule from"wijmo/wijmo.grid.xlsx";export function softDetail(){return _getModule("wijmo.grid.detail")};export function softMultiRow(){return _getModule("wijmo.grid.multirow")};var FlexGridXlsxConverter=function(){function e(){}return e.save=function(e,l,o){var t=this._saveFlexGridToWorkbook(e,l);return o&&t.save(o),t},e.saveAsync=function(e,l,o,t,r){var n=this._saveFlexGridToWorkbook(e,l);return o&&n.saveAsync(o,t,r),n},e.load=function(e,l,o){var t=this;if(l instanceof Blob){var r=new FileReader;r.onload=function(){var l=mXlsx.Workbook._base64EncArr(new Uint8Array(r.result)),n=new mXlsx.Workbook;n.load(l),l=null,e.deferUpdate(function(){t._loadToFlexGrid(e,n,o),n=null})},r.readAsArrayBuffer(l)}else if(l instanceof mXlsx.Workbook)e.deferUpdate(function(){t._loadToFlexGrid(e,l,o),l=null});else{if(l instanceof ArrayBuffer)l=mXlsx.Workbook._base64EncArr(new Uint8Array(l));else if(!isString(l))throw"Invalid workbook.";var n=new mXlsx.Workbook;n.load(l),l=null,e.deferUpdate(function(){t._loadToFlexGrid(e,n,o),n=null})}},e.loadAsync=function(e,l,o,t,r){var n=this;if(l instanceof Blob){var s=new FileReader;s.onload=function(){var l=mXlsx.Workbook._base64EncArr(new Uint8Array(s.result)),a=new mXlsx.Workbook;a.loadAsync(l,function(r){l=null,a=null,e.deferUpdate(function(){n._loadToFlexGrid(e,r,o),t&&t(r),r=null})},r)},s.readAsArrayBuffer(l)}else if(l instanceof mXlsx.Workbook)e.deferUpdate(function(){n._loadToFlexGrid(e,l,o),t&&t(l),l=null});else{if(l instanceof ArrayBuffer)l=mXlsx.Workbook._base64EncArr(new Uint8Array(l));else if(!isString(l))throw"Invalid workbook.";(new mXlsx.Workbook).loadAsync(l,function(r){l=null,e.deferUpdate(function(){n._loadToFlexGrid(e,r,o),t&&t(r),r=null})},r)}},e._saveFlexGridToWorkbook=function(e,l){var o,t,r,n,s,a,i,u,d,c,f,m,h,p,g=new mXlsx.Workbook,w=new mXlsx.WorkSheet,x=(new mXlsx.WorkbookStyle,new mXlsx.WorkbookFrozenPane),y=!l||null==l.includeColumnHeaders||l.includeColumnHeaders,b=!(!l||null==l.includeRowHeaders)&&l.includeRowHeaders,_=!l||null==l.includeCellStyles||l.includeCellStyles,v=l?l.activeWorksheet:null,C=l?l.includeColumns:null,k=l?l.formatItem:null,S=0,T=0,R=0,W=[];if(null==this.hasCssText&&(this.hasCssText="cssText"in document.body.style),c=e.wj_sheetInfo,w.name=l?l.sheetName:"",w.visible=!l||!1!==l.sheetVisible,c&&c.tables&&c.tables.length>0)for(var X=0;X<c.tables.length;X++)w.tables.push(c.tables[X]);if(a=[],c||!_&&!k||((f=document.createElement("div")).style.visibility="hidden",f.setAttribute(FlexGrid._WJS_MEASURE,"true"),e.hostElement.appendChild(f)),b){for(u=0,i=0;i<e.rowHeaders.rows.length;i++)if(!(e.rowHeaders.rows[i].renderSize<=0)){for(a[u]=[],d=0;d<e.rowHeaders.columns.length;d++)r=e._getBindingColumn(e.rowHeaders,i,e.rowHeaders.columns[d]),(n=this._getColumnSetting(r,d,e.columnHeaders.columns))&&(a[u][d]=n,0===u&&((s=new mXlsx.WorkbookColumn)._deserialize(n),w._addWorkbookColumn(s,d)));u++}R=d}if(e.columnHeaders.rows.length>0){for(u=0,i=0;i<e.columnHeaders.rows.length;i++)if(!(e.columnHeaders.rows[i].renderSize<=0)){a[u]||(a[u]=[]);for(var A=0,F=0;A<e.columnHeaders.columns.length;A++)r=e._getBindingColumn(e.columnHeaders,i,e.columnHeaders.columns[A]),(n=this._getColumnSetting(r,A,e.columnHeaders.columns))&&(a[u][R+A]=n,0===u&&(C&&!C(r)||((s=new mXlsx.WorkbookColumn)._deserialize(n),w._addWorkbookColumn(s,R+F++))));y&&(R=0,o={},t=new mXlsx.WorkbookRow,b&&(R=this._parseFlexGridRowToSheetRow(e.topLeftCells,o,i,0,a,_,f,W,!1,0,C,k)),this._parseFlexGridRowToSheetRow(e.columnHeaders,o,i,R,a,_,f,W,!1,0,C,k),o.cells.length>0&&(t._deserialize(o),w._addWorkbookRow(t,u))),u++}T=y?u:0}for(i=0;i<e.cells.rows.length;i++)R=0,o={},t=new mXlsx.WorkbookRow,(m=e.rows[i])instanceof _NewRowTemplate||((h=m instanceof GroupRow)?S=tryCast(m,GroupRow).level:e.rows.maxGroupLevel>-1&&(S=e.rows.maxGroupLevel+1),b&&(R=this._parseFlexGridRowToSheetRow(e.rowHeaders,o,i,0,a,_,f,W,h,S,C,k)),this._parseFlexGridRowToSheetRow(e.cells,o,i,R,a,_,f,W,h,S,C,k),o.cells.length>0&&(t._deserialize(o),w._addWorkbookRow(t,T+i)));for(p=e.cells.rows.length,i=0;i<e.columnFooters.rows.length;i++)R=0,o={},t=new mXlsx.WorkbookRow,h=(m=e.columnFooters.rows[i])instanceof GroupRow,b&&(R=this._parseFlexGridRowToSheetRow(e.rowHeaders,o,i,0,a,_,f,W,h,0,C,k)),this._parseFlexGridRowToSheetRow(e.columnFooters,o,i,R,a,_,f,W,h,0,C,k),o.cells.length>0&&(t._deserialize(o),w._addWorkbookRow(t,T+p+i));return x.rows=y?e.frozenRows+T:e.frozenRows,x.columns=b?e.frozenColumns+R:e.frozenColumns,w.frozenPane=x,g._addWorkSheet(w),c||!_&&!k||(e.hostElement.removeChild(f),W.forEach(function(e){return e.forEach(function(e){e&&e.parentElement&&e.parentElement.removeChild(e)})})),g.activeWorksheet=v,g},e._loadToFlexGrid=function(e,l,o){o=o||{};var t,r=null!=e.wj_sheetInfo,n={},s=[],a=[],i={};e.itemsSource=null,e.columns.clear(),e.columnHeaders.rows.clear(),e.rows.clear(),e.frozenColumns=0,e.frozenRows=0;var u=null==o.sheetIndex||isNaN(o.sheetIndex)?0:o.sheetIndex;if(u<0||u>=l.sheets.length)throw"The sheet index option is out of the sheet range of current workbook.";if(null!=o.sheetName)for(var d=0;d<l.sheets.length;d++)if(o.sheetName===l.sheets[d].name){t=l.sheets[d];break}if(null!=(t=t||l.sheets[u]).rows){for(var c=this._getColumnCount(t.rows),f=this._getRowCount(t.rows,c),m=t.columns,h=0;h<c;h++)e.columns.push(new Column),m[h]&&(isNaN(+m[h].width)||(e.columns[h].width=+m[h].width),m[h].visible||null==m[h].visible||(e.columns[h].visible=!!m[h].visible),m[h].style&&m[h].style.wordWrap&&(e.columns[h].wordWrap=m[h].style.wordWrap));for(var p,g=(null==o.includeColumnHeaders||o.includeColumnHeaders)&&t.rows.length>0,w=g?this._getColumnHeadersHeight(t):0,x=!1,y=[],b=w;b<f;b++){var _=!1,v=null,C=t.rows[b];if(C)for(var k=b+1;k<t.rows.length;){var S=t.rows[k];if(S){(isNaN(C.groupLevel)&&!isNaN(S.groupLevel)||!isNaN(C.groupLevel)&&C.groupLevel<S.groupLevel)&&(_=!0);break}k++}if(_&&!t.summaryBelow)p&&(p.isCollapsed=x),(p=new GroupRow).isReadOnly=!1,x=null!=C.collapsed&&C.collapsed,p.level=isNaN(C.groupLevel)?0:C.groupLevel,i[p.level]=x,this._checkParentCollapsed(i,p.level)&&p._setFlag(RowColFlags.ParentCollapsed,!0),e.rows.push(p);else{var T=new Row;C&&this._checkParentCollapsed(i,C.groupLevel)&&T._setFlag(RowColFlags.ParentCollapsed,!0),e.rows.push(T)}C&&C.height&&!isNaN(C.height)&&(e.rows[b-w].height=C.height);for(h=0;h<c;h++)if(C){var R=C.cells[h],W=R?R.formula:null;W&&"="!==W[0]&&(W="="+W),R&&R.textRuns&&R.textRuns.length>0?(e.rows[b-w].isContentHtml=!0,e.setCellData(b-w,h,this._parseTextRunsToHTML(R.textRuns))):e.setCellData(b-w,h,W&&r?W:this._getItemValue(R)),_||this._setColumn(y,h,R);var X=b*c+h,A=R?R.style:null,F=mXlsx.Workbook._parseExcelFormat(R),H=void 0;if(A){if(v=null==v?!!A.wordWrap:v&&!!A.wordWrap,A.hAlign)H=mXlsx.Workbook._parseHAlignToString(asEnum(A.hAlign,mXlsx.HAlign));else switch(this._getItemType(R)){case DataType.Number:H="right";break;case DataType.Boolean:H="center";break;default:H=F&&0===F.search(/[n,c,p]/i)?"right":"left"}n[X]={fontWeight:A.font&&A.font.bold?"bold":"none",fontStyle:A.font&&A.font.italic?"italic":"none",textDecoration:A.font&&A.font.underline?"underline":"none",textAlign:H,fontFamily:A.font&&A.font.family?A.font.family:"",fontSize:A.font&&A.font.size?A.font.size+"px":"",color:A.font&&A.font.color?A.font.color:"",backgroundColor:A.fill&&A.fill.color?A.fill.color:"",whiteSpace:A.wordWrap?"pre-wrap":"normal",format:F},A.borders&&(A.borders.left&&(this._parseBorderStyle(A.borders.left.style,"Left",n[X]),n[X].borderLeftColor=A.borders.left.color),A.borders.right&&(this._parseBorderStyle(A.borders.right.style,"Right",n[X]),n[X].borderRightColor=A.borders.right.color),A.borders.top&&(this._parseBorderStyle(A.borders.top.style,"Top",n[X]),n[X].borderTopColor=A.borders.top.color),A.borders.bottom&&(this._parseBorderStyle(A.borders.bottom.style,"Bottom",n[X]),n[X].borderBottomColor=A.borders.bottom.color)),A.font&&-1===a.indexOf(A.font.family)&&a.push(A.font.family)}R&&isNumber(R.rowSpan)&&R.rowSpan>0&&isNumber(R.colSpan)&&R.colSpan>0&&(R.rowSpan>1||R.colSpan>1)&&s.push(new CellRange(b,h,b+R.rowSpan-1,h+R.colSpan-1))}C&&(this._checkParentCollapsed(i,C.groupLevel)||C.visible||null==C.visible||(e.rows[b-w].visible=C.visible),e.rows[b-w].wordWrap=!!C.style&&!!C.style.wordWrap||!!v)}if(p&&(p.isCollapsed=x),t.frozenPane){var D=t.frozenPane.columns;isNumber(D)&&!isNaN(D)&&(e.frozenColumns=D);var N=t.frozenPane.rows;isNumber(N)&&!isNaN(N)&&(e.frozenRows=g&&N>0?N-1:N)}for(h=0;h<e.columnHeaders.columns.length;h++){var B=y[h],E=e.columns[h];E.isRequired=!1,B&&(B.dataType===DataType.Boolean&&(E.dataType=B.dataType),E.format=B.format,E.align=B.hAlign,E.wordWrap=E.wordWrap||!!B.wordWrap)}for(d=0;d<Math.max(w,1);d++)e.columnHeaders.rows.push(new Row);var I=Object.keys(t.rows);for(d=0;d<w;d++)for(var G=0;G<t.columns.length;G++){var M=t.rows[I[d]].cells[G],z=M&&M.value||"",j=e.columnHeaders.columns[G];if(z){var O=mXlsx.Workbook._parseExcelFormat(M);z=Globalize.format(z,O)}j.header=j.header||z,e.columnHeaders.setCellData(d,G,z)}if(r){var L=null==o.sheetVisible||o.sheetVisible;e.wj_sheetInfo.name=t.name,e.wj_sheetInfo.visible=!0===L||!1!==t.visible,e.wj_sheetInfo.styledCells=n,e.wj_sheetInfo.mergedRanges=s,e.wj_sheetInfo.fonts=a,e.wj_sheetInfo.tables=t.tables}}},e._getColumnHeadersHeight=function(e){if(!e&&!e.rows.length)return 0;for(var l=1,o=0;o<e.rows.length;o++){var t=e.rows[o];if(t){t.cells.forEach(function(e){l=Math.max(l,e.rowSpan||0)});break}}return l},e._escapePlainText=function(e){return""===e?"'":e&&"'"===e[0]?"'"+e:e},e._parseFlexGridRowToSheetRow=function(e,l,o,t,r,n,s,a,i,u,d,c){var f,m,h,p,g,w,x,y,b,_,v,C,k,S,T,R,W,X,A,F,H,D,N,B,E,I,G,M,z,j,O=!1,L=!1;for((A=(f=e.grid).wj_sheetInfo)&&(F=A.evaluateFormula),null==(m=e.rows[o]).recordIndex?(B=0,e.cellType===CellType.ColumnHeader&&e.rows.length>1&&(B=o===r.length?o-1:o)):B=m.recordIndex,l.cells||(l.cells=[]),l.visible=m.isVisible,l.height=m.renderHeight||e.rows.defaultSize,l.groupLevel=u,i&&(l.collapsed=m.isCollapsed),m.wordWrap&&(l.style={wordWrap:m.wordWrap}),(m.constructor===Row||m.constructor===_NewRowTemplate||softDetail()&&m.constructor===softDetail().DetailRow||softMultiRow()&&m.constructor===softMultiRow()._MultiRow)&&(O=!0),softDetail()&&m.constructor===softDetail().DetailRow&&(L=!0),p=0;p<e.columns.length;p++)if(g=null,X=1,W=1,z=0,N=!1,T=null,G=null,I=null,y=null,D=f._getBindingColumn(e,o,e.columns[p]),R=null,A&&e===f.cells?(S=o*e.columns.length+p,A.mergedRanges&&(R=this._getMergedRange(o,p,A.mergedRanges)),A.styledCells&&(T=A.styledCells[S])):n&&(I=this._getMeasureCell(e,p,s,a),T=(R=f.getMergedRange(e,o,p,!1))?this._getCellStyle(e,I,R.bottomRow,R.rightCol)||{}:this._getCellStyle(e,I,o,p)||{}),R||(R=f.getMergedRange(e,o,p,!1)),R?o===R.topRow&&p===R.leftCol&&(W=R.bottomRow-R.topRow+1,X=this._getColSpan(e,R,d),N=!0):N=!0,!d||d(D)){if(h=r[B]?r[B][p+t]:null,O||i?(x=N?e.getCellData(o,p,!0):null,b=N?e.getCellData(o,p,!1):null,v=!1,k=null,x&&isString(x)&&x.length>1&&"="===x[0]&&(v=!0),H=isDate(b),T&&T.format&&null!=b?(g=T.format,/[hsmyt\:]/i.test(g)&&(H=!0),w=mXlsx.Workbook._parseCellFormat(T.format,H)):h&&h.style&&h.style.format?(g=D.format,w=h.style.format):w=null,v&&null!=F&&isFunction(F)&&(k=F(x)),w||(H?w="m/d/yyyy":isNumber(b)&&!D.dataMap?w=isInt(b)?"#,##0":"#,##0.00":v?(C=x.toLowerCase()).indexOf("now()")>-1?(w="m/d/yyyy h:mm",H=!0):C.indexOf("today()")>-1||C.indexOf("date(")>-1?(w="m/d/yyyy",H=!0):C.indexOf("time(")>-1&&(w="h:mm AM/PM",H=!0):w="General")):(x=N?f.columnHeaders.getCellData(0,p,!0):null,w="General"),isString(x)&&-1!==x.indexOf("<span")&&(y=this._parseToTextRuns(x),x=null),G=this._parseCellStyle(T)||{},e===f.cells&&i&&m.hasChildren&&p===f.columns.firstVisibleIndex){if(v&&null!=k?_=k:x?_=x:N&&(_=m.getGroupHeader().replace(/<\/?\w+>/g,"").replace(/&#39;/g,"'")),null==_&&!T)continue;!(H=isDate(_))&&g&&"d"===g.toLowerCase()&&isInt(_)&&(w="0"),_=isString(_)?mXlsx.Workbook._unescapeXML(_):_,p===f.columns.firstVisibleIndex&&f.treeIndent&&(z=u),E={value:_,isDate:H,formula:v?this._parseToExcelFormula(x,H):null,colSpan:X,rowSpan:W,style:this._extend(G,{format:w,font:{bold:!0},hAlign:mXlsx.HAlign.Left,indent:z}),textRuns:y}}else x=isString(x)?mXlsx.Workbook._unescapeXML(x):x,b=isString(b)?mXlsx.Workbook._unescapeXML(b):b,!H&&g&&"d"===g.toLowerCase()&&isInt(b)&&(w="0"),M=G&&G.hAlign?G.hAlign:h&&h.style&&null!=h.style.hAlign?asEnum(h.style.hAlign,mXlsx.HAlign,!0):isDate(b)?mXlsx.HAlign.Left:mXlsx.HAlign.General,p!==f.columns.firstVisibleIndex||!f.treeIndent||M!==mXlsx.HAlign.Left&&M!==mXlsx.HAlign.General||(z=u),E={value:v?k:"General"===w?this._escapePlainText(x):this._escapePlainText(b),isDate:H,formula:v?this._parseToExcelFormula(x,H):null,colSpan:p<f.columns.firstVisibleIndex?1:X,rowSpan:W,style:this._extend(G,{format:w,hAlign:M,vAlign:W>1?e===f.cells||!1===f.centerHeadersVertically?mXlsx.VAlign.Top:mXlsx.VAlign.Center:null,indent:z}),textRuns:y},L&&(j=e.getCellElement(o,p))&&j.appendChild(m.detail);c&&c(new XlsxFormatItemEventArgs(e,new CellRange(o,p),I,s,a,E)),l.cells.push(E)}return t+p},e._parseCellStyle=function(e,l){if(void 0===l&&(l=!1),null==e)return null;var o=e.fontSize;o=o?+o.substring(0,o.indexOf("px")):null,isNaN(o)&&(o=null);var t=e.fontWeight;t="bold"===t||+t>=700;var r="italic"===e.fontStyle,n=e.textDecorationStyle;null==n&&(n=e.textDecoration),n="underline"===n;var s=e.whiteSpace;return s=!!s&&s.indexOf("pre")>-1,{font:{bold:t,italic:r,underline:n,family:this._parseToExcelFontFamily(e.fontFamily),size:o,color:e.color},fill:{color:e.backgroundColor},borders:this._parseBorder(e,l),hAlign:mXlsx.Workbook._parseStringToHAlign(e.textAlign),wordWrap:s}},e._parseBorder=function(e,l){var o={};return o.left=this._parseEgdeBorder(e,"Left"),o.right=this._parseEgdeBorder(e,"Right"),o.top=this._parseEgdeBorder(e,"Top"),o.bottom=this._parseEgdeBorder(e,"Bottom"),l&&(o.vertical=this._parseEgdeBorder(e,"Vertical"),o.horizontal=this._parseEgdeBorder(e,"Horizontal")),o},e._parseEgdeBorder=function(e,l){var o,t=e["border"+l+"Style"],r=e["border"+l+"Width"];if(r&&r.length>2&&(r=+r.substring(0,r.length-2)),t&&"none"!==t&&"hidden"!==t){switch(o={},t=t.toLowerCase()){case"dotted":o.style=r>1?mXlsx.BorderStyle.MediumDashDotted:mXlsx.BorderStyle.Dotted;break;case"dashed":o.style=r>1?mXlsx.BorderStyle.MediumDashed:mXlsx.BorderStyle.Dashed;break;case"double":o.style=mXlsx.BorderStyle.Double;break;default:o.style=r>2?mXlsx.BorderStyle.Thick:r>1?mXlsx.BorderStyle.Medium:mXlsx.BorderStyle.Thin}o.color=e["border"+l+"Color"]}return o},e._parseBorderStyle=function(e,l,o){var t="border"+l+"Style",r="border"+l+"Width";switch(e){case mXlsx.BorderStyle.Dotted:case mXlsx.BorderStyle.Hair:o[t]="dotted",o[r]="1px";break;case mXlsx.BorderStyle.Dashed:case mXlsx.BorderStyle.ThinDashDotDotted:case mXlsx.BorderStyle.ThinDashDotted:o[t]="dashed",o[r]="1px";break;case mXlsx.BorderStyle.MediumDashed:case mXlsx.BorderStyle.MediumDashDotDotted:case mXlsx.BorderStyle.MediumDashDotted:case mXlsx.BorderStyle.SlantedMediumDashDotted:o[t]="dashed",o[r]="2px";break;case mXlsx.BorderStyle.Double:o[t]="double",o[r]="3px";break;case mXlsx.BorderStyle.Medium:o[t]="solid",o[r]="2px";break;default:o[t]="solid",o[r]="1px"}},e._parseToExcelFontFamily=function(e){var l;return e&&(l=e.split(","))&&l.length>0&&(e=l[0].replace(/\"|\'/g,"")),e},e._parseToExcelFormula=function(e,l){var o,t,r,n,s,a,i,u=/\"?\w+\"?\s*\,\s*\"(\w+)\"/i;if(o=e.match(/(floor|ceiling)\([+-]?\d+\.?\d*\)/gi))for(s=0;s<o.length;s++)i=(a=o[s]).substring(0,a.lastIndexOf(")"))+", 1)",e=e.replace(a,i);if(o=null,o=e.match(/text\(\"?\w+\"?\s*\,\s*\"\w+\"\)/gi))for(s=0;s<o.length;s++)(t=(a=o[s]).match(u))&&2===t.length&&(r=t[1],/^d{1,4}?$/.test(r)||(n=mXlsx.Workbook._parseCellFormat(r,l),i=a.replace(r,n),e=e.replace(a,i)));return e},e._parseToTextRuns=function(e){var l,o,t,r=e.split("<span "),n=[];for(l=0;l<r.length;l++)t=-1!==(o=r[l]).indexOf("</span>")?{text:o.substring(o.indexOf(">")+1,o.indexOf("</span>")),font:this._parseToTextRunFont(o.substring(o.indexOf('style="')+7,o.indexOf(';"')))}:{text:o},n.push(t);return n},e._parseToTextRunFont=function(e){var l,o,t,r,n,s,a,i,u,d=e.split(";");if(d.length>0){for(l=0;l<d.length;l++)if(2===(o=d[l].split(":")).length)switch(o[1]=o[1].trim(),o[0]){case"font-size":s=+o[1].substring(0,o[1].indexOf("px")),isNaN(s)&&(s=null);break;case"font-weight":t="bold"===o[1]||+o[1]>=700;break;case"font-style":r="italic"===o[1];break;case"text-decoration-style":case"text-decoration":n="underline"===o[1];break;case"font-family":a=this._parseToExcelFontFamily(o[1]);break;case"color":i=o[1]}u={bold:t,italic:r,underline:n,family:a,size:s,color:i}}return u},e._getMeasureCell=function(e,l,o,t){var r=t[e.cellType],n=r&&r[l],s=null==n;if(n){if(this.hasCssText){n.style;n.style.cssText="",n.style.visibility="hidden"}}else r||(t[e.cellType]=r=[]),r[l]=n=o.cloneNode();return!s&&n.parentElement||(e.hostElement.children.length>0?e.hostElement.children[0].appendChild(n):e.hostElement.appendChild(n)),n},e._getColumnSetting=function(e,l,o){var t=e;return null!=e.colspan&&(t=this._getRenderColumn(l,o)),t?{autoWidth:!0,width:t.renderWidth||o.defaultSize,visible:t.visible,style:{format:e.format?mXlsx.Workbook._parseCellFormat(e.format,e.dataType===DataType.Date):"",hAlign:mXlsx.Workbook._parseStringToHAlign(this._toExcelHAlign(e.getAlignment())),wordWrap:e.wordWrap}}:null},e._toExcelHAlign=function(e){return(e=e?e.trim().toLowerCase():e)?e.indexOf("center")>-1?"center":e.indexOf("right")>-1||e.indexOf("end")>-1?"right":e.indexOf("justify")>-1?"justify":"left":e},e._getColumnCount=function(e){for(var l,o=0,t=0,r=0;r<e.length;r++)(l=e[r]&&e[r].cells?e[r].cells:[])&&l.length>0&&(t=l.length,isInt(l[t-1].colSpan)&&l[t-1].colSpan>1&&(t=t+l[t-1].colSpan-1),t>o&&(o=t));return o},e._getRowCount=function(e,l){for(var o,t,r=e.length,n=r-1,s=0;s<l;s++)e:for(;n>=0;n--)if((t=((o=e[n])&&o.cells?o.cells:[])[s])&&(null!=t.value&&""!==t.value||isInt(t.rowSpan)&&t.rowSpan>1)){isInt(t.rowSpan)&&t.rowSpan>1&&n+t.rowSpan>r&&(r=n+t.rowSpan);break e}return r},e._numAlpha=function(e){var l=Math.floor(e/26)-1;return(l>-1?this._numAlpha(l):"")+String.fromCharCode(65+e%26)},e._getItemType=function(e){return null==e||null==e.value||isNaN(e.value)?null:getType(e.value)},e._setColumn=function(e,l,o){var t,r,n,s=e[l];s?(t=this._getItemType(o),s.dataType!==t&&s.dataType===DataType.Boolean&&t!==DataType.Boolean&&(s.dataType=t),!o||null==o.value||isString(o.value)&&isNullOrWhiteSpace(o.value)||(r=mXlsx.Workbook._parseExcelFormat(o))&&s.format!==r&&"General"!==r&&(s.format=r),o&&o.style&&(o.style.hAlign&&(n=mXlsx.Workbook._parseHAlignToString(asEnum(o.style.hAlign,mXlsx.HAlign))),null==s.wordWrap?s.wordWrap=!!o.style.wordWrap:s.wordWrap=s.wordWrap&&!!o.style.wordWrap),n||t!==DataType.Number||(n="right"),s.hAlign=n):e[l]={dataType:this._getItemType(o),format:mXlsx.Workbook._parseExcelFormat(o),hAlign:"",wordWrap:null}},e._getItemValue=function(e){if(null==e||null==e.value)return null;var l=e.value;return isString(l)&&"'"===l[0]&&(l=l.substr(1)),isNumber(l)&&isNaN(l)?"":l instanceof Date&&isNaN(l.getTime())?"":l},e._getCellStyle=function(e,l,o,t){try{e.grid.cellFactory.updateCell(e,o,t,l),l.className=l.className.replace("wj-state-selected",""),l.className=l.className.replace("wj-state-multi-selected","")}catch(e){return null}return window.getComputedStyle(l)},e._parseTextRunsToHTML=function(e){var l,o,t,r;for(t="",r=0;r<e.length;r++)t+=(o=(l=e[r]).font)?'<span style="'+(o.bold?"font-weight: bold;":"")+(o.italic?"font-style: italic;":"")+(o.underline?"text-decoration: underline;":"")+(o.family?"font-family: "+o.family+";":"")+(null!=o.size?"font-size: "+o.size+"px;":"")+(o.color?"color: "+o.color+";":"")+'">'+l.text+"</span>":l.text;return t},e._extend=function(e,l){for(var o in l){var t=l[o];isObject(t)&&e[o]?copy(e[o],t):e[o]=t}return e},e._checkParentCollapsed=function(e,l){var o=!1;return Object.keys(e).forEach(function(t){!0===e[t]&&!1===o&&!isNaN(l)&&+t<l&&(o=!0)}),o},e._getColSpan=function(e,l,o){for(var t=0,r=l.leftCol;r<=l.rightCol;r++)o&&!o(e.columns[r])||t++;return t},e._getRenderColumn=function(e,l){return e>=l.length?null:l[e]},e._getMergedRange=function(e,l,o){var t,r;for(t=0;t<o.length;t++)if(e>=(r=o[t]).topRow&&e<=r.bottomRow&&l>=r.leftCol&&l<=r.rightCol)return r;return null},e}();export{FlexGridXlsxConverter};var XlsxFormatItemEventArgs=function(e){function l(l,o,t,r,n,s){var a=e.call(this,l,o)||this;return a._cell=t,a._patternCell=r,a._xlsxCell=s,a._cellsCache=n,a}return __extends(l,e),Object.defineProperty(l.prototype,"cell",{get:function(){return this._cell},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"xlsxCell",{get:function(){return this._xlsxCell},set:function(e){this._xlsxCell=e},enumerable:!0,configurable:!0}),l.prototype.getFormattedCell=function(){return this._cell||(this._cell=FlexGridXlsxConverter._getMeasureCell(this.panel,this.col,this._patternCell,this._cellsCache),FlexGridXlsxConverter._getCellStyle(this.panel,this._cell,this.row,this.col)),this._cell},l}(CellRangeEventArgs);export{XlsxFormatItemEventArgs};_registerModule("wijmo.grid.xlsx",selfModule);