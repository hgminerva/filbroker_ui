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

var __extends=this&&this.__extends||function(){var t=function(e,a){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var a in e)e.hasOwnProperty(a)&&(t[a]=e[a])})(e,a)};return function(e,a){function r(){this.constructor=e}t(e,a),e.prototype=null===a?Object.create(a):(r.prototype=a.prototype,new r)}}();import{Point,Rect,asType,asEnum,DataType,isDate,isNumber,asNumber,asBoolean,assert,Binding,asDate,_registerModule}from"wijmo/wijmo";import{_BarPlotter,_DataInfo,_DataPoint,SeriesBase,Stacking,_PieSegment,_DonutSegment,_LinePlotter,_BasePlotter,_LinesArea,ChartType,_CircleArea,FlexChartCore,Position,TickMark,Axis,AxisType,FlexChart}from"wijmo/wijmo.chart";import*as selfModule from"wijmo/wijmo.chart.radar";var FlexRadarSeries=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),Object.defineProperty(e.prototype,"chartType",{get:function(){return this._finChartType},set:function(t){(t=asEnum(t,RadarChartType,!0))!=this._finChartType&&(this._finChartType=t,this._invalidate())},enumerable:!0,configurable:!0}),e.prototype._getChartType=function(){var t;switch(this.chartType){case RadarChartType.Area:t=ChartType.Area;break;case RadarChartType.Line:t=ChartType.Line;break;case RadarChartType.Column:t=ChartType.Column;break;case RadarChartType.LineSymbols:t=ChartType.LineSymbols;break;case RadarChartType.Scatter:t=ChartType.Scatter}return t},e}(SeriesBase);export{FlexRadarSeries};var _RadarLinePlotter=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.isArea=!1,e}return __extends(e,t),e.prototype._getLabelPoint=function(t,e){var a=t._getAxisX(),r=t._getAxisY(),i=a.convert(e.dataX),n=r.convert(e.dataY);return this.chart._convertPoint(n,i)},e.prototype.plotSeries=function(t,e,a,r,i,n,s){var o=asType(r,SeriesBase),l=this.chart,h=o._getChartType()||l._getChartType(),_=l.series.indexOf(r),c=r.getValues(0),u=r.getValues(1);if(c){u||(u=this.dataInfo.getXVals());var p=_BasePlotter.cloneStyle(r.style,["fill"]),d=c.length,g=!0;u?d=Math.min(d,u.length):(g=!1,u=new Array(d));var y=this._DEFAULT_WIDTH,f=o._getSymbolFill(_),v=o._getAltSymbolFill(_)||f,x=o._getSymbolStroke(_),m=o._getAltSymbolStroke(_)||x,A=o._getSymbolSize();t.stroke=x,t.strokeWidth=y,t.fill=f;var P=new Array,T=new Array,b=a.actualMax,C=this.stacking!=Stacking.None&&!o._isCustomAxisY(),L=this.stacking==Stacking.Stacked100pc&&!o._isCustomAxisY();void 0!==o._getChartType()&&(C=L=!1);for(var M=o.interpolateNulls,S=!1,k=this.getItemFormatter(r),w=0;w<d;w++){var I=g?u[w]:w,R=null==c[w]?0:c[w];if(_DataInfo.isValid(I)&&_DataInfo.isValid(R)){if(C){if(L)R/=this.dataInfo.getStackedAbsSum(I);if(R>=0){var N=isNaN(this.stackPos[I])?0:this.stackPos[I];R=this.stackPos[I]=N+R}else{N=isNaN(this.stackNeg[I])?0:this.stackNeg[I];R=this.stackNeg[I]=N+R}}var F;R=Math.min(R,b),F=new _DataPoint(_,w,I,R);var D=e.convert(I),X=a.convert(R),O=this.chart._convertPoint(X,D);if(I=O.x,R=O.y,isNaN(I)||isNaN(R))S=!0,!0!==M&&(P.push(void 0),T.push(void 0));else{P.push(I),T.push(R);var V=new _CircleArea(new Point(I,R),.5*A);V.tag=F,this.hitTester.add(V,_)}}else S=!0,!0!==M&&(P.push(void 0),T.push(void 0))}var j=0;if(this.hasLines)if(this.isArea?t.fill=f||i._getColorLight(_):t.fill="none",S&&!0!==M){var G=[],Y=[];for(w=0;w<d;w++)void 0===P[w]?(G.push(void 0),Y.push(0)):(G.push(P[w]),Y.push(T[w]));G.length>1&&(l._isPolar&&h!==ChartType.Area?this._drawLines(t,G,Y,null,p,this.chart._plotrectId):(l.totalAngle<360&&(G.push(l._center.x),Y.push(l._center.y)),t.drawPolygon(G,Y,null,p,this.chart._plotrectId)),this.hitTester.add(new _LinesArea(G,Y),_),j++)}else l._isPolar&&h!==ChartType.Area?this._drawLines(t,P,T,null,p,this.chart._plotrectId):(l.totalAngle<360&&(P.push(l._center.x),T.push(l._center.y)),t.drawPolygon(P,T,null,p,this.chart._plotrectId)),this.hitTester.add(new _LinesArea(P,T),_),j++;t.fill=f;for(w=0;w<d;w++){I=P[w],R=T[w];!1===this.hasLines&&(t.fill=c[w]>0?f:v,t.stroke=c[w]>0?x:m),this.isValid(I,R,e,a)&&((this.hasSymbols||k)&&A>0&&this._drawSymbol(t,I,R,A,o,w,k),r._setPointIndex(w,j),j++)}}},e}(_LinePlotter);export{_RadarLinePlotter};var _RadarBarPlotter=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),e.prototype.adjustLimits=function(t,e){this.dataInfo=t;var a=t.getMinX(),r=t.getMinY(),i=t.getMaxX(),n=t.getMaxY(),s=t.getDeltaX();return s<=0&&(s=1),this.chart.totalAngle<360&&(s=0),this.unload(),this.chart.axisY._getLogBase()||(this.origin>n?n=this.origin:this.origin<r&&(r=this.origin)),new Rect(a,r,i-a+s,n-r)},e.prototype._getLabelPoint=function(t,e){var a=t._getAxisX(),r=t._getAxisY(),i=a.convert(e.dataX),n=r.convert(e.dataY);return this.chart._convertPoint(n,i)},e.prototype.plotSeries=function(t,e,a,r,i,n,s){var o=this.chart.series.indexOf(r),l=asType(r,SeriesBase),h=(this.chart._options,this.width),_=this.chart,c=-90*Math.PI/180;n=n||0;var u,p=l._getAxisY()._uniqueId,d=(this.stackNegMap[p],this.stackPosMap[p]),g=this.stacking!=Stacking.None,y=this.stacking==Stacking.Stacked100pc,f=r.getValues(0),v=r.getValues(1);if(f){var x;v||(v=this.dataInfo.getXVals()),(x=v?_.totalAngle/v.length:_.totalAngle/(e.actualMax-e.actualMin))>0&&(h=g?x*h*Math.PI/180:x*Math.pow(h,n+1)*Math.PI/180);var m=l._getSymbolFill(o),A=l._getAltSymbolFill(o)||m,P=l._getSymbolStroke(o),T=l._getAltSymbolStroke(o)||P,b=f.length;null!=v&&(b=Math.min(b,v.length));var C,L,M=this.origin,S=0;void 0!==l._getChartType()&&(g=y=!1),M<a.actualMin?M=a.actualMin:M>a.actualMax&&(M=a.actualMax);a.convert(M);var k=e.actualMin,w=e.actualMax,I=a.actualMax;l._isCustomAxisY()&&(g=y=!1),_._areas[o]||(_._areas[o]=[]);for(var R=0;R<b;R++){var N=v?v[R]:R,F=null==f[R]?0:f[R];if(this._getSymbolOrigin&&a.convert(this._getSymbolOrigin(M,R,b)),this._getSymbolStyles){var D=this._getSymbolStyles(R,b);m=D&&D.fill?D.fill:m,A=D&&D.fill?D.fill:A,P=D&&D.stroke?D.stroke:P,T=D&&D.stroke?D.stroke:T}if(C=F>0?m:A,L=F>0?P:T,t.fill=C,t.stroke=L,_DataInfo.isValid(N)&&_DataInfo.isValid(F)){if(g){var X,O,V=N-.5*h,j=N+.5*h;if(V<k&&j<k||V>w&&j>w)continue;if(V=e.convert(V),j=e.convert(j),!_DataInfo.isValid(V)||!_DataInfo.isValid(j))continue;if(y)F/=this.dataInfo.getStackedAbsSum(N);var G=isNaN(d[N])?0:d[N];X=G,O=G+F,d[N]=G+F;var Y=e.convert(N),B=a.convert(X),E=a.convert(O);Y-=h/2,t.drawDonutSegment(_._center.x,_._center.y,E,B,Y+c,h,null,l.symbolStyle),(u=new _DonutSegment(new Point(_._center.x,_._center.y),E,B,Y+c,h,_.startAngle||0)).tag=new _DataPoint(o,R,N,G+F),this.hitTester.add(u,o)}else{Y=e.convert(N);var W=a.convert(Math.min(F,I));_._convertPoint(W,Y);Y-=h/2,t.drawPieSegment(_._center.x,_._center.y,W,Y+c,h,null,l.symbolStyle),(u=new _PieSegment(new Point(_._center.x,_._center.y),W,Y+c,h,_.startAngle)).tag=new _DataPoint(o,R,N,F),this.hitTester.add(u,o)}_._areas[o].push(u),r._setPointIndex(R,S),S++}}}},e}(_BarPlotter);export{_RadarBarPlotter};export var RadarChartType;!function(t){t[t.Column=0]="Column",t[t.Scatter=1]="Scatter",t[t.Line=2]="Line",t[t.LineSymbols=3]="LineSymbols",t[t.Area=4]="Area"}(RadarChartType||(RadarChartType={}));var FlexRadar=function(t){function e(e,a){var r=t.call(this,e,a)||this;return r._chartType=RadarChartType.Line,r._startAngle=0,r._totalAngle=360,r._reversed=!1,r._areas=[],r}return __extends(e,t),Object.defineProperty(e.prototype,"_radarLinePlotter",{get:function(){return null==this.__radarLinePlotter&&(this.__radarLinePlotter=new _RadarLinePlotter,this._initPlotter(this.__radarLinePlotter)),this.__radarLinePlotter},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_radarColumnPlotter",{get:function(){return null==this.__radarColumnPlotter&&(this.__radarColumnPlotter=new _RadarBarPlotter,this._initPlotter(this.__radarColumnPlotter)),this.__radarColumnPlotter},enumerable:!0,configurable:!0}),e.prototype._initAxes=function(){t.prototype._initAxes.call(this),this.axes.pop(),this.axes.pop(),this.axisX=new FlexRadarAxis(Position.Bottom),this.axisX.majorGrid=!0,this.axisY=new FlexRadarAxis(Position.Left),this.axisY.majorTickMarks=TickMark.Outside,this.axes.push(this.axisX),this.axes.push(this.axisY)},e.prototype._layout=function(e,a,r){t.prototype._layout.call(this,e,a,r);var i=this.axisX._height;this._plotRect.top+=i/2;var n=this._plotRect;this._radius=Math.min(n.width,n.height)/2,this._center=new Point(n.left+n.width/2,n.top+n.height/2)},Object.defineProperty(e.prototype,"chartType",{get:function(){return this._chartType},set:function(t){(t=asEnum(t,RadarChartType))!=this._chartType&&(this._chartType=t,this.invalidate())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"startAngle",{get:function(){return this._startAngle},set:function(t){t!=this._startAngle&&(this._startAngle=asNumber(t,!0),this.invalidate())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"totalAngle",{get:function(){return this._totalAngle},set:function(t){t!=this._totalAngle&&t>=0&&(this._totalAngle=asNumber(t,!0),this._totalAngle<=0&&(assert(!1,"totalAngle must be greater than 0."),this._totalAngle=0),this._totalAngle>360&&(assert(!1,"totalAngle must be less than or equal to 360."),this._totalAngle=360),this.invalidate())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"reversed",{get:function(){return this._reversed},set:function(t){t!=this._reversed&&(this._reversed=asBoolean(t,!0),this.invalidate())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"stacking",{get:function(){return this._stacking},set:function(t){(t=asEnum(t,Stacking))!=this._stacking&&(this._stacking=t,this.invalidate())},enumerable:!0,configurable:!0}),e.prototype._getChartType=function(){var t=ChartType.Line;switch(this.chartType){case RadarChartType.Area:t=ChartType.Area;break;case RadarChartType.Line:t=ChartType.Line;break;case RadarChartType.Column:t=ChartType.Column;break;case RadarChartType.LineSymbols:t=ChartType.LineSymbols;break;case RadarChartType.Scatter:t=ChartType.Scatter}return t},e.prototype._getPlotter=function(e){var a=this.chartType,r=null;if(e){var i=e.chartType;null!=i&&i!=a&&(a=i,!0)}switch(a){case RadarChartType.Line:this._radarLinePlotter.hasSymbols=!1,this._radarLinePlotter.hasLines=!0,this._radarLinePlotter.isArea=!1,r=this._radarLinePlotter;break;case RadarChartType.LineSymbols:this._radarLinePlotter.hasSymbols=!0,this._radarLinePlotter.hasLines=!0,this._radarLinePlotter.isArea=!1,r=this._radarLinePlotter;break;case RadarChartType.Area:this._radarLinePlotter.hasSymbols=!1,this._radarLinePlotter.hasLines=!0,this._radarLinePlotter.isArea=!0,r=this._radarLinePlotter;break;case RadarChartType.Scatter:this._radarLinePlotter.hasSymbols=!0,this._radarLinePlotter.hasLines=!1,this._radarLinePlotter.isArea=!1,r=this._radarLinePlotter;break;case RadarChartType.Column:this._radarColumnPlotter.isVolume=!1,this._radarColumnPlotter.width=.8,r=this._radarColumnPlotter;break;default:r=t.prototype._getPlotter.call(this,e)}return r},e.prototype._convertPoint=function(t,e){var a=new Point,r=this._center;return a.x=r.x+t*Math.sin(e),a.y=r.y-t*Math.cos(e),a},e.prototype._createSeries=function(){return new FlexRadarSeries},e.prototype._clearCachedValues=function(){t.prototype._clearCachedValues.call(this),this._isPolar=!1,this._areas=[]},e.prototype._performBind=function(){if(this._xDataType=null,this._xlabels.splice(0),this._xvals.splice(0),this._cv){var t=this._cv.items;if(t){for(var e=t.length,a=0;a<e;a++){var r=t[a],i=this.bindingX?new Binding(this.bindingX):null;if(i){var n=i.getValue(r);isNumber(n)?(this._xvals.push(asNumber(n)),this._xDataType=DataType.Number):isDate(n)&&(this._xDataType=DataType.Date),this._xlabels.push(n)}}this._xvals.length==e?this._xlabels.splice(0):this._xvals.splice(0)}}this._xDataType===DataType.Number&&(this._isPolar=!0)},e.prototype._prepareRender=function(){t.prototype._prepareRender.call(this),this._areas=[]},e}(FlexChartCore);export{FlexRadar};var FlexRadarAxis=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._points=[],e._axisLabels=[],e}return __extends(e,t),e.prototype._render=function(e){var a=this;if(this._hasVisibileSeries()){t.prototype._render.call(this,e);var r=this._axisLabels;if(r.length){var i=function(){var t=a.axisType==AxisType.X?"wj-axis-x-labels "+FlexChart._CSS_AXIS_X:"wj-axis-y-labels "+FlexChart._CSS_AXIS_Y;e.startGroup(t),r.forEach(function(t){var r=t.labelAngle;r>0?FlexChart._renderRotatedText(e,t.text,t.pos,t.align,t.vAlign,t.pos,r,t.class):r<0?FlexChart._renderRotatedText(e,t.text,t.pos,t.align,t.vAlign,t.pos,r,t.class):a._renderLabel(e,t.val,t.text,t.pos,t.align,t.vAlign,t.class)}),e.endGroup(),a._axisLabels=[],a._chart.rendered.removeHandler(i)};this._chart.rendered.addHandler(i,this)}}},e.prototype._getHeight=function(e,a){var r=t.prototype._getHeight.call(this,e,a);return this._axisType==AxisType.Y&&(r=4),this._height=2*r,2*r},e.prototype._getActualRange=function(){return this._isTimeAxis&&null!=this.__actualMax&&null!=this.__actualMin?this.__actualMax-this.__actualMin:t.prototype._getActualRange.call(this)},e.prototype._updateActualLimits=function(e,a,r,i,n){var s=this;void 0===i&&(i=null),void 0===n&&(n=null),t.prototype._updateActualLimits.call(this,e,a,r,i,n);var o,l=this._chart,h=this._lbls,_=this.actualMin.valueOf?this.actualMin.valueOf():this.actualMin,c=this.actualMax.valueOf?this.actualMax.valueOf():this.actualMax;this._lbls&&this===l.axisX&&(l._angles=[],this._isTimeAxis&&0===this._lbls.length&&this._values.forEach(function(t){h.push(s._formatValue(t))}),o=h.length,l.totalAngle<360&&(o-=1),h.forEach(function(t,e){var a=_+e/o*(c-_),r=l.startAngle+e/o*l.totalAngle;isNaN(r)||isNaN(a)||l._angles.push({value:s.convert(a),angle:r}),s._isTimeAxis?((null==s.__actualMin||s.__actualMin>t)&&(s.__actualMin=t),(null==s.__actualMax||s.__actualMax<t)&&(s.__actualMax=t)):null==s.__actualMin&&null==s.__actualMax||(s.__actualMin=null,s.__actualMax=null)}),this._isTimeAxis&&this._lbls.length>0&&(this._updateAutoFormat(0),this._lbls=h.map(function(t){var e=asDate(t).valueOf();return s._formatValue(e)})))},e.prototype._updateActualLimitsByChartType=function(t,e,a){var r=this._chart;if(r._getChartType()!=ChartType.Column&&360===r.totalAngle&&this.axisType===AxisType.X)if(this._isTimeAxis){var i=(r._xlabels.length||r._xvals.length)-1;a+=(a-e)/(i=i<1?1:i)}else r._isPolar||(a+=1);return{min:e,max:a}},e.prototype.convert=function(t,e,a){var r=null==e?this.actualMax:e,i=null==a?this.actualMin:a,n=this._chart;if(!n)return NaN;if(r==i)return 0;if(this.axisType===AxisType.X)return n.reversed?(n.startAngle-(t-i)/(r-i)*n.totalAngle)*Math.PI/180:(n.startAngle+(t-i)/(r-i)*n.totalAngle)*Math.PI/180;if(this._getLogBase()){if(t<=0)return NaN;var s=Math.log(r/i);return Math.log(t/i)/s*n._radius}return(t-i)/(r-i)*n._radius},e.prototype._renderLineAndTitle=function(t){var e=this._chart,a=FlexChart._CSS_LINE,r=(e.startAngle-90)*Math.PI/180,i=e.totalAngle*Math.PI/180,n=e._radius;this.axisType===AxisType.X&&this.axisLine&&(t.stroke=FlexChart._FG,e._isPolar?(r=e.reversed?r-i:r,t.drawPieSegment(e._center.x,e._center.y,n,r,i,a)):this._renderPolygon(t,n,a))},e.prototype._renderPolygon=function(t,e,a){var r=this._chart,i=r._angles,n=i.length,s=r.axisX.minorGrid,o=[],l=[];if(i.forEach(function(t,a){if(s&&a>0){var n=r._convertPoint(e,t.value-(t.value-i[a-1].value)/2);o.push(n.x),l.push(n.y)}var h=r._convertPoint(e,t.value);o.push(h.x),l.push(h.y)}),r.totalAngle<360)o.push(r._center.x),l.push(r._center.y);else if(s&&n>=2){var h=r._convertPoint(e,i[n-1].value-(i[n-2].value-i[n-1].value)/2);o.push(h.x),l.push(h.y)}t.drawPolygon(o,l,a)},e.prototype._renderMinors=function(t,e,a,r){var i,n=this,s=this._chart,o=FlexChart._CSS_GRIDLINE_MINOR,l=this.minorGrid,h=s._angles,_=h.length,c=s.axisX.minorGrid,u=FlexChart._FG,p=this._GRIDLINE_WIDTH,d=(s.startAngle,Math.PI,s.totalAngle,Math.PI,this._TICK_OVERLAP),g=this.minorTickMarks,y=!0;this._vals.minor=e,g==TickMark.Outside?d=1:g==TickMark.Inside?d=-1:g==TickMark.Cross?d=0:y=!1,this.axisType==AxisType.Y?(t.stroke=u,t.strokeWidth=p,e.forEach(function(e){var a=n.convert(e);if(l&&n._renderYGridLine(t,s,a,o),y&&(h.forEach(function(e,r){if(c&&r>0){i=e.value-(e.value-h[r-1].value)/2;var o=s._convertPoint(a,i);n._drawMinorTickLength(t,d,i,o)}i=e.value;var l=s._convertPoint(a,i);n._drawMinorTickLength(t,d,i,l)}),c&&_>=2)){i=h[_-1].value-(h[_-2].value-h[_-1].value)/2;var r=s._convertPoint(a,i);n._drawMinorTickLength(t,d,i,r)}})):(t.stroke=u,t.strokeWidth=p,e.forEach(function(e){var a=n.convert(e);l&&(n._renderXGridLine(t,s,a,o),y&&n._drawMinorTickLength(t,d,a-Math.PI/2,s._convertPoint(s._radius,a)))}))},e.prototype._drawMinorTickLength=function(t,e,a,r){var i=this._TICK_HEIGHT,n=FlexChart._CSS_TICK_MINOR,s=.5*(e-1)*i*Math.cos(a),o=.5*(1+e)*i*Math.cos(a),l=.5*(e-1)*i*Math.sin(a),h=.5*(1+e)*i*Math.sin(a);t.drawLine(r.x+s,r.y+l,r.x+o,r.y+h,n)},e.prototype._renderLabelsAndTicks=function(t,e,a,r,i,n,s,o,l){this._points=[],i=this.labelAngle||0;var h,_=this._chart,c=this.labelPadding||2,u=FlexChart._CSS_LABEL,p=FlexChart._CSS_GRIDLINE,d=FlexChart._CSS_TICK,g=FlexChart._FG,y=this._TICK_WIDTH,f=this.majorGrid,v=FlexChart._FG,x=this._GRIDLINE_WIDTH,m=_.startAngle*Math.PI/180,A=(_.totalAngle,Math.PI,1);if(this.axisType==AxisType.Y){f=a!=this.actualMin&&f&&a!=this.actualMax;var P=this.convert(a),T=_._convertPoint(P,m);if(f&&(t.stroke=v,t.strokeWidth=x,this._renderYGridLine(t,_,P,p)),t.stroke=g,t.strokeWidth=y,s){(h=(_.startAngle%360+360)%360)<=90&&h>=75||h>=270&&h<=285?A=2:(h>90&&h<=105||h<270&&h>=255)&&(A=0);var b=new Point(T.x-c-Math.abs(o-l),T.y);this._axisLabels.push({val:a,text:r,pos:b,align:2,vAlign:A,labelAngle:i,class:u})}n!=TickMark.None&&t.drawLine(T.x-l*Math.cos(m),T.y-l*Math.sin(m),T.x-o*Math.cos(m),T.y-o*Math.sin(m),d)}else{var C=this.convert(a);if(f&&(t.stroke=v,t.strokeWidth=x,this._renderXGridLine(t,_,C,p)),t.stroke=g,t.strokeWidth=y,s){var L,M,S;b=_._convertPoint(_._radius+c,C);L=_._angles&&_._angles.length?_._angles[e].angle:_.startAngle+(a-this.actualMin)*_.totalAngle/(this.actualMax-this.actualMin),L=(L%=360)>=0?L:L+360,M=this._getXLabelVAlign(L),S=this._getXLabelAlign(L),_._isPolar&&(r=this._formatValue(L)),i>0?FlexChart._renderRotatedText(t,r,b,S,M,b,i,u):i<0?FlexChart._renderRotatedText(t,r,b,S,M,b,i,u):this._renderLabel(t,a,r,b,S,M,u)}n!=TickMark.None&&this._renderXTick(t,_,C,d,o,l)}return!0},e.prototype._renderXGridLine=function(t,e,a,r){var i=e._center,n=e._convertPoint(e._radius,a);t.drawLine(i.x,i.y,n.x,n.y,r)},e.prototype._renderXTick=function(t,e,a,r,i,n){var s,o;e._center;s=e._convertPoint(e._radius+i,a),o=e._convertPoint(e._radius+n,a),t.drawLine(s.x,s.y,o.x,o.y,r)},e.prototype._renderYGridLine=function(t,e,a,r){e._angles;var i=e._center,n=e.startAngle*Math.PI/180,s=e.totalAngle*Math.PI/180;e._isPolar?(n=(e.startAngle-90)*Math.PI/180,n=e.reversed?n-s:n,t.drawPieSegment(i.x,i.y,a,n,s,r)):this._renderPolygon(t,a,r)},e.prototype._getXLabelVAlign=function(t){var e=1,a=this._chart,r=a.startAngle;return a.reversed&&(t=(360+r+(r%360-t%360))%360),0===t?e=2:180===t&&(e=0),e},e.prototype._getXLabelAlign=function(t){var e=0,a=this._chart,r=a.startAngle;return a.reversed&&(t=(360+r+(r%360-t%360))%360),t>0&&t<180?e=-1:t>180&&t<360&&(e=1),e+1},e.prototype._createTimeLabels=function(e,a,r,i){var n=this;if(this._axisType==AxisType.Y)t.prototype._createTimeLabels.call(this,e,a,r,i);else{var s=this._values;this.format;if(!s||0===s.length)return;s.forEach(function(t){r.push(t),i.push(n._formatValue(t))})}},e.prototype._niceNumber=function(e,a,r){var i=this._chart,n=this.actualMax-this.actualMin,s=i.totalAngle;return s>360&&(s%=360),i._isPolar?s%8==0?n/8:s%6==0?n/6:s%4==0?n/4:s%3==0?n/3:s%2==0?n/2:t.prototype._niceNumber.call(this,e,a,r):t.prototype._niceNumber.call(this,e,a,r)},e}(Axis);export{FlexRadarAxis};_registerModule("wijmo.chart.radar",selfModule);