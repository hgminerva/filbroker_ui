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

"use strict";var __extends=this&&this.__extends||function(){var t=function(e,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(e,i)};return function(e,i){function a(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(a.prototype=i.prototype,new a)}}();Object.defineProperty(exports,"__esModule",{value:!0});var wijmo_1=require("wijmo/wijmo"),wijmo_chart_1=require("wijmo/wijmo.chart"),selfModule=require("wijmo/wijmo.chart.finance"),FinancialSeries=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),Object.defineProperty(e.prototype,"chartType",{get:function(){return this._finChartType},set:function(t){(t=wijmo_1.asEnum(t,FinancialChartType,!0))!=this._finChartType&&(this._finChartType=t,this._invalidate())},enumerable:!0,configurable:!0}),e.prototype._getChartType=function(){var t=null;switch(this.chartType){case FinancialChartType.Area:t=wijmo_chart_1.ChartType.Area;break;case FinancialChartType.Line:case FinancialChartType.Kagi:case FinancialChartType.PointAndFigure:t=wijmo_chart_1.ChartType.Line;break;case FinancialChartType.Column:case FinancialChartType.ColumnVolume:t=wijmo_chart_1.ChartType.Column;break;case FinancialChartType.LineSymbols:t=wijmo_chart_1.ChartType.LineSymbols;break;case FinancialChartType.Scatter:t=wijmo_chart_1.ChartType.Scatter;break;case FinancialChartType.Candlestick:case FinancialChartType.Renko:case FinancialChartType.HeikinAshi:case FinancialChartType.LineBreak:case FinancialChartType.EquiVolume:case FinancialChartType.CandleVolume:case FinancialChartType.ArmsCandleVolume:t=wijmo_chart_1.ChartType.Candlestick;break;case FinancialChartType.HighLowOpenClose:t=wijmo_chart_1.ChartType.HighLowOpenClose}return t},e.prototype.getDataRect=function(t,e){if(e)return e;var i=this.getValues(0),a=this.getValues(1)||(this.chart._xvals&&this.chart._xvals.length?this.chart._xvals:null),n=this._getBinding(0),r=this._getBinding(1),s=this._getBinding(2),o=this._getBinding(3),l=(this._plotter,this._getChartType()||this.chart._getChartType());if(l!==wijmo_chart_1.ChartType.HighLowOpenClose&&l!==wijmo_chart_1.ChartType.Candlestick||n===r)return null;if(i){for(var h=NaN,c=NaN,_=NaN,u=NaN,g=i.length,p=0;p<g;p++){var m=this._getItem(p),d=i[p];if(isFinite(d))[d,r?m[r]:null,s?m[s]:null,o?m[o]:null].forEach(function(t){wijmo_chart_1._DataInfo.isValid(t)&&null!==t&&((isNaN(c)||t<c)&&(c=t),(isNaN(u)||t>u)&&(u=t))});if(a){var f=a[p];isFinite(f)&&(isNaN(h)?h=_=f:f<h?h=f:d>u&&(_=f))}}if(a||(h=0,_=g-1),!isNaN(c))return new wijmo_1.Rect(h,c,_-h,u-c)}return null},e}(wijmo_chart_1.SeriesBase);function _trunc(t){return wijmo_1.asNumber(t,!0,!1),t>0?Math.floor(t):Math.ceil(t)}function _sum(t){return arguments.length>1&&(t=Array.prototype.slice.call(arguments)),wijmo_1.asArray(t,!1),t.reduce(function(t,e){return t+wijmo_1.asNumber(e)},0)}function _average(t){return arguments.length>1&&(t=Array.prototype.slice.call(arguments)),wijmo_1.asArray(t,!1),_sum(t)/t.length}function _minimum(t){return arguments.length>1&&(t=Array.prototype.slice.call(arguments)),wijmo_1.asArray(t,!1),Math.min.apply(null,t)}function _maximum(t){return arguments.length>1&&(t=Array.prototype.slice.call(arguments)),wijmo_1.asArray(t,!1),Math.max.apply(null,t)}function _variance(t){arguments.length>1&&(t=Array.prototype.slice.call(arguments)),wijmo_1.asArray(t,!1);var e=_average(t);return _average(t.map(function(t){return Math.pow(t-e,2)}))}function _stdDeviation(t){return arguments.length>1&&(t=Array.prototype.slice.call(arguments)),wijmo_1.asArray(t,!1),Math.sqrt(_variance(t))}function _avgTrueRng(t,e,i,a){void 0===a&&(a=14),wijmo_1.asArray(t,!1),wijmo_1.asArray(e,!1),wijmo_1.asArray(i,!1),wijmo_1.asInt(a,!1,!0);var n=_trueRng(t,e,i,a),r=Math.min(t.length,e.length,i.length,n.length),s=[];wijmo_1.assert(r>a&&a>1,"Average True Range period must be an integer less than the length of the data and greater than one.");for(var o=0;o<r;o++)wijmo_1.asNumber(t[o],!1),wijmo_1.asNumber(e[o],!1),wijmo_1.asNumber(i[o],!1),wijmo_1.asNumber(n[o],!1),o+1===a?s.push(_average(n.slice(0,a))):o+1>a&&s.push(((a-1)*s[s.length-1]+n[o])/a);return s}function _trueRng(t,e,i,a){void 0===a&&(a=14),wijmo_1.asArray(t,!1),wijmo_1.asArray(e,!1),wijmo_1.asArray(i,!1),wijmo_1.asInt(a,!1,!0);var n=Math.min(t.length,e.length,i.length),r=[];wijmo_1.assert(n>a&&a>1,"True Range period must be an integer less than the length of the data and greater than one.");for(var s=0;s<n;s++)wijmo_1.asNumber(t[s],!1),wijmo_1.asNumber(e[s],!1),wijmo_1.asNumber(i[s],!1),0===s?r.push(t[s]-e[s]):r.push(Math.max(t[s]-e[s],Math.abs(t[s]-i[s-1]),Math.abs(e[s]-i[s-1])));return r}function _sma(t,e){wijmo_1.asArray(t,!1),wijmo_1.asNumber(e,!1,!0),wijmo_1.assert(t.length>e&&e>1,"Simple Moving Average period must be an integer less than the length of the data and greater than one.");for(var i=[],a=e;a<=t.length;a++)i.push(_average(t.slice(a-e,a)));return i}function _ema(t,e){wijmo_1.asArray(t,!1),wijmo_1.asNumber(e,!1,!0),wijmo_1.assert(t.length>e&&e>1,"Exponential Moving Average period must be an integer less than the length of the data and greater than one.");var i=[],a=2/(e+1),n=_sma(t,e);t=t.slice(e-1);for(var r=0;r<t.length;r++)0===r?i.push(n[0]):i.push((t[r]-i[r-1])*a+i[r-1]);return i}function _range(t,e,i){void 0===i&&(i=1),wijmo_1.asNumber(t,!1),wijmo_1.asNumber(e,!1),wijmo_1.asNumber(i,!1),wijmo_1.assert(t<e,"begin argument must be less than end argument.");for(var a=[],n=t;n<=e;n+=i)a.push(n);return a}exports.FinancialSeries=FinancialSeries,exports._trunc=_trunc,exports._sum=_sum,exports._average=_average,exports._minimum=_minimum,exports._maximum=_maximum,exports._variance=_variance,exports._stdDeviation=_stdDeviation,exports._avgTrueRng=_avgTrueRng,exports._trueRng=_trueRng,exports._sma=_sma,exports._ema=_ema,exports._range=_range;var _BaseCalculator=function(){function t(t,e,i,a){this.highs=t,this.lows=e,this.opens=i,this.closes=a}return t.prototype.calculate=function(){},t}();exports._BaseCalculator=_BaseCalculator;var _HeikinAshiCalculator=function(t){function e(e,i,a,n){return t.call(this,e,i,a,n)||this}return __extends(e,t),e.prototype.calculate=function(){var t,e,i,a,n=Math.min(this.highs.length,this.lows.length,this.opens.length,this.closes.length),r=[];if(n<=0)return r;for(var s=0;s<n;s++)a=_average(this.highs[s],this.lows[s],this.opens[s],this.closes[s]),0===s?(i=_average(this.opens[s],this.closes[s]),t=this.highs[s],e=this.lows[s]):(i=_average(r[s-1].open,r[s-1].close),t=Math.max(this.highs[s],i,a),e=Math.min(this.lows[s],i,a)),r.push({high:t,low:e,close:a,open:i,pointIndex:s,x:null});return r},e}(_BaseCalculator);exports._HeikinAshiCalculator=_HeikinAshiCalculator;var _BaseRangeCalculator=function(t){function e(e,i,a,n,r,s,o,l){var h=t.call(this,e,i,a,n)||this;return h.xs=r,h.size=s,h.unit=o,h.fields=l,h}return __extends(e,t),e.prototype._getValues=function(){var t,e=[],i=Math.min(this.highs.length,this.lows.length,this.opens.length,this.closes.length);switch(this.fields){case DataFields.High:e=this.highs;break;case DataFields.Low:e=this.lows;break;case DataFields.Open:e=this.opens;break;case DataFields.HL2:for(t=0;t<i;t++)e.push(_average(this.highs[t],this.lows[t]));break;case DataFields.HLC3:for(t=0;t<i;t++)e.push(_average(this.highs[t],this.lows[t],this.closes[t]));break;case DataFields.HLOC4:for(t=0;t<i;t++)e.push(_average(this.highs[t],this.lows[t],this.opens[t],this.closes[t]));break;case DataFields.Close:default:e=this.closes}return e},e.prototype._getSize=function(){var t=this.unit===RangeMode.ATR?_avgTrueRng(this.highs,this.lows,this.closes,this.size):null;return this.unit===RangeMode.ATR?t[t.length-1]:this.size},e}(_BaseCalculator);exports._BaseRangeCalculator=_BaseRangeCalculator;var _LineBreakCalculator=function(t){function e(e,i,a,n,r,s){return t.call(this,e,i,a,n,r,s)||this}return __extends(e,t),e.prototype.calculate=function(){var t=null!==this.xs&&this.xs.length>0,e=this.closes.length,i=[],a=[[],[]];if(e<=0)return i;for(var n,r,s,o,l,h,c=[],_=1;_<e;_++){if(o=i.length-1,r=t?this.xs[_]:_,s=this.closes[_],-1===o){if((n=this.closes[0])===s)continue}else if(c=this._trendExists(a)||1===this.size?a[0].slice(-this.size).concat(a[1].slice(-this.size)):a[0].slice(1-this.size).concat(a[1].slice(1-this.size)),l=Math.max.apply(null,c),h=Math.min.apply(null,c),s>l)n=Math.max(a[0][o],a[1][o]);else{if(!(s<h))continue;n=Math.min(a[0][o],a[1][o])}a[0].push(n),a[1].push(s),i.push({high:Math.max(n,s),low:Math.min(n,s),open:n,close:s,x:r,pointIndex:_})}return i},e.prototype._trendExists=function(t){if(t[1].length<this.size)return!1;var e,i=!1,a=t[1].slice(-this.size);for(e=1;e<this.size&&(i=a[e]>a[e-1]);e++);if(!i)for(e=1;e<this.size&&(i=a[e]<a[e-1]);e++);return i},e}(_BaseRangeCalculator);exports._LineBreakCalculator=_LineBreakCalculator;var _KagiCalculator=function(t){function e(e,i,a,n,r,s,o,l){return t.call(this,e,i,a,n,r,s,o,l)||this}return __extends(e,t),e.prototype.calculate=function(){var t,e,i,a,n,r,s,o,l,h=this._getSize(),c=Math.min(this.highs.length,this.lows.length,this.opens.length,this.closes.length),_=this._getValues(),u=null!==this.xs&&this.xs.length>0,g=[],p=[[],[]];if(c<=0)return g;for(var m=1;m<c;m++){if(a=g.length-1,e=u?this.xs[m]:m,l=m,o=!1,this.fields===DataFields.HighLow)if(-1===a)if(this.highs[m]>this.highs[0])i=this.highs[m];else{if(!(this.lows[m]<this.lows[0]))continue;i=this.lows[m]}else if((s=p[1][a]-p[0][a])>0)if(this.highs[m]>p[1][a])i=this.highs[m];else{if(!(this.lows[m]<p[1][a]))continue;i=this.lows[m]}else if(this.lows[m]<p[1][a])i=this.lows[m];else{if(!(this.highs[m]>p[1][a]))continue;i=this.highs[m]}else i=_[m];if(this.unit===RangeMode.Percentage&&(h=i*this.size),-1===a){if(e=u?this.xs[0]:0,l=0,t=this.fields===DataFields.HighLow?null==this.highs[0]?this.highs[this.highs.length-1]:this.highs[0]:null==_[0]?_[_.length-1]:_[0],(s=Math.abs(t-i)||0)<h)continue}else if(s=p[1][a]-p[0][a],r=Math.max(p[0][a],p[1][a]),n=Math.min(p[0][a],p[1][a]),s>0)if(i>r)o=!0;else{if(!((s=r-i)>=h))continue;t=r}else if(i<n)o=!0;else{if(!((s=i-n)>=h))continue;t=n}o?(p[1][a]=i,g[a].close=i,g[a].high=Math.max(g[a].open,g[a].close),g[a].low=Math.min(g[a].open,g[a].close)):(p[0].push(t),p[1].push(i),g.push({high:Math.max(t,i),low:Math.min(t,i),open:t,close:i,x:e,pointIndex:l}))}return g},e}(_BaseRangeCalculator);exports._KagiCalculator=_KagiCalculator;var _RenkoCalculator=function(t){function e(e,i,a,n,r,s,o,l,h){void 0===h&&(h=!1);var c=t.call(this,e,i,a,n,r,s,o,l)||this;return c.rounding=h,c}return __extends(e,t),e.prototype.calculate=function(){var t,e,i,a,n,r,s,o=this._getSize(),l=Math.min(this.highs.length,this.lows.length,this.opens.length,this.closes.length),h=null!==this.xs&&this.xs.length>0,c=this._getValues(),_=[],u=[[],[]];if(l<=0)return _;for(var g=1;g<l;g++){if(a=_.length-1,e=h?this.xs[g]:g,this.fields===DataFields.HighLow)if(-1===a)if(this.highs[g]-this.highs[0]>o)t=this.highs[0],i=this.highs[g];else{if(!(this.lows[0]-this.lows[g]>o))continue;t=this.lows[0],i=this.lows[g]}else if(n=Math.min(u[0][a],u[1][a]),r=Math.max(u[0][a],u[1][a]),this.highs[g]-r>o)t=r,i=this.highs[g];else{if(!(n-this.lows[g]>o))continue;t=n,i=this.lows[g]}else if(i=c[g],-1===a)t=c[0];else if(n=Math.min(u[0][a],u[1][a]),i>(r=Math.max(u[0][a],u[1][a])))t=r;else{if(!(i<n))continue;t=n}if(s=i-t,!(Math.abs(s)<o)){s=_trunc(s/o);for(var p=0;p<Math.abs(s);p++){var m={};this.rounding&&(t=this._round(t,o)),u[0].push(t),m.open=t,t=s>0?t+o:t-o,u[1].push(t),m.close=t,m.x=e,m.pointIndex=g,m.high=Math.max(m.open,m.close),m.low=Math.min(m.open,m.close),_.push(m)}}}return _},e.prototype._round=function(t,e){return Math.round(t/e)*e},e}(_BaseRangeCalculator);exports._RenkoCalculator=_RenkoCalculator;var DataFields,RangeMode,PointAndFigureScaling,_BaseRangePlotter=function(t){function e(){var e=t.call(this)||this;return e._symFactor=.7,e.clear(),e}return __extends(e,t),e.prototype.clear=function(){t.prototype.clear.call(this),this._rangeValues=null,this._rangeXLabels=null,this._calculator=null},e.prototype.unload=function(){var e,i;t.prototype.unload.call(this);for(var a=0;a<this.chart.series.length;a++)(e=this.chart.series[a])&&(i=e._getAxisX())&&i.itemsSource&&(i.itemsSource=null)},e.prototype.adjustLimits=function(t,e){var i,a,n,r=0,s=0,o=0,l=0,h=this.chart._xDataType===wijmo_1.DataType.Date?.5:0;wijmo_1.assert(this.chart.series.length<=1,"Current FinancialChartType only supports a single series");for(var c=0;c<this.chart.series.length;c++)i=this.chart.series[c],this._calculate(i),this._rangeValues.length<=0||this._rangeXLabels.length<=0||((a=this._rangeValues.map(function(t){return t.open})).push.apply(a,this._rangeValues.map(function(t){return t.close})),n=this._rangeXLabels.map(function(t){return t.value}),o=Math.min.apply(null,a),l=Math.max.apply(null,a),r=Math.min.apply(null,n),s=Math.max.apply(null,n),i._getAxisX().itemsSource=this._rangeXLabels);return r-=h,new wijmo_1.Rect(r,o,s-r+h,l-o)},e.prototype.plotSeries=function(t,e,i,a,n,r,s){var o=this;this._calculate(a);var l=this.chart.series.indexOf(a),h=this._rangeValues.length,c=e.actualMin,_=e.actualMax,u=this._DEFAULT_WIDTH,g=this._symFactor,p=a._getSymbolFill(l),m=a._getAltSymbolFill(l)||"transparent",d=a._getSymbolStroke(l),f=a._getAltSymbolStroke(l)||d;t.strokeWidth=u;for(var w,y,v,x,C=0,j=this.getItemFormatter(a),b=0;b<h;b++)if(w=b,wijmo_chart_1._DataInfo.isValid(w)&&c<=w&&w<=_){if(y=this._rangeValues[b].open,v=this._rangeValues[b].close,t.fill=y>v?p:m,t.stroke=y>v?d:f,x=this._getDataPoint(l,b,a,Math.max(y,v)),t.startGroup(),j){var k=new wijmo_chart_1.HitTestInfo(this.chart,new wijmo_1.Point(e.convert(w),i.convert(v)),wijmo_chart_1.ChartElement.SeriesSymbol);k._setData(a,b),k._setDataPoint(x),j(t,k,function(){o._drawSymbol(t,e,i,l,C,g,w,y,v,x)})}else this._drawSymbol(t,e,i,l,C,g,w,y,v,x);t.endGroup(),a._setPointIndex(b,C),C++}},e.prototype._drawSymbol=function(t,e,i,a,n,r,s,o,l,h){var c,_,u,g,p;if((u=e.convert(s-.5*r))>(g=e.convert(s+.5*r))){var m=u;u=g,g=m}wijmo_chart_1._DataInfo.isValid(o)&&wijmo_chart_1._DataInfo.isValid(l)&&(o=i.convert(o),l=i.convert(l),_=(c=Math.min(o,l))+Math.abs(o-l),t.drawRect(u,c,g-u,_-c),(p=new wijmo_chart_1._RectArea(new wijmo_1.Rect(u,c,g-u,_-c))).tag=h,this.hitTester.add(p,a))},e.prototype._getDataPoint=function(t,e,i,a){var n=e,r=new wijmo_chart_1._DataPoint(t,e,n,a),s=i._getItem(this._rangeValues[e].pointIndex),o=i.bindingX||this.chart.bindingX,l=i._getBinding(0),h=i._getBinding(1),c=i._getBinding(2),_=i._getBinding(3),u=i._getAxisY();return r.item=wijmo_chart_1._BasePlotter.cloneStyle(s,[]),r.item[l]=this._rangeValues[e].high,r.item[h]=this._rangeValues[e].low,r.item[c]=this._rangeValues[e].open,r.item[_]=this._rangeValues[e].close,r.y=this._rangeValues[e].close,r.yfmt=u._formatValue(this._rangeValues[e].close),r.x=r.item[o],r.xfmt=this._rangeXLabels[e]._text,r},e.prototype._init=function(){this._rangeValues=[],this._rangeXLabels=[]},e.prototype._calculate=function(t){},e.prototype._generateXLabels=function(t){var e,i=this,a=t._getAxisX(),n=t.getDataType(1)||this.chart._xDataType;this._rangeValues.forEach(function(t,r){var s=t.x;e=n===wijmo_1.DataType.Date?wijmo_1.Globalize.format(wijmo_chart_1.FlexChart._fromOADate(s),a.format||"d"):n===wijmo_1.DataType.Number?a._formatValue(s):null!==n&&n!==wijmo_1.DataType.String||!i.chart._xlabels?s.toString():i.chart._xlabels[s],i._rangeXLabels.push({value:r,text:e,_text:e})},this)},e}(wijmo_chart_1._BasePlotter);exports._BaseRangePlotter=_BaseRangePlotter,function(t){t[t.Close=0]="Close",t[t.High=1]="High",t[t.Low=2]="Low",t[t.Open=3]="Open",t[t.HighLow=4]="HighLow",t[t.HL2=5]="HL2",t[t.HLC3=6]="HLC3",t[t.HLOC4=7]="HLOC4"}(DataFields=exports.DataFields||(exports.DataFields={})),function(t){t[t.Fixed=0]="Fixed",t[t.ATR=1]="ATR",t[t.Percentage=2]="Percentage"}(RangeMode=exports.RangeMode||(exports.RangeMode={})),function(t){t[t.Traditional=0]="Traditional",t[t.Fixed=1]="Fixed",t[t.Dynamic=2]="Dynamic"}(PointAndFigureScaling=exports.PointAndFigureScaling||(exports.PointAndFigureScaling={}));var _PointAndFigurePlotter=function(t){function e(){return t.call(this)||this}return __extends(e,t),e.prototype.clear=function(){t.prototype.clear.call(this),this._boxSize=null,this._fields=null,this._reversal=null,this._scaling=null},e.prototype.unload=function(){t.prototype.unload.call(this),this.chart.axisX.itemsSource=this._xlbls},e.prototype._init=function(){this._boxSize=this.getNumOption("boxSize","pointAndFigure")||1,this._reversal=this.getNumOption("reversal","pointAndFigure")||3,this._period=this.getNumOption("period","pointAndFigure")||20,this._fields=this.getOption("fields","pointAndFigure")||DataFields.Close,this._fields=wijmo_1.asEnum(this._fields,DataFields,!0),wijmo_1.assert(this._fields==DataFields.Close||this._fields==DataFields.HighLow,"Only DataFields.Close and DataFields.HighLow are supported"),this._scaling=this.getOption("scaling","pointAndFigure")||PointAndFigureScaling.Traditional,this._scaling=wijmo_1.asEnum(this._scaling,PointAndFigureScaling,!0),this._xlbls=[]},e.prototype.adjustLimits=function(t,e){this._init(),this.hitTester.clear();var i=new wijmo_1.Rect(0,0,0,0),a=this.chart.series.length;if(wijmo_1.assert(a<=1,"Current FinancialChartType only supports a single series"),a>0){var n=this.chart.series[0],r=this._reversal,s=n.collectionView?n.collectionView:this.chart.collectionView,o=s?s.items:null;if(o&&o.length>0){var l=n._getBinding(0),h=n._getBinding(1),c=n._getBinding(2),_=n._getBinding(3);this._fields==DataFields.Close&&(_?l=_:c&&(l=c),h=l);var u=n.bindingX?n.bindingX:this.chart.bindingX,g=this._actualBoxSize=this.calcBoxSize(o,l,h);if(this._pfdata=this.calcPFHiLo2(o,l,h,u,g,r),this._pfdata&&this._pfdata.length>0){var p=this._pfdata.reduce(function(t,e){return Math.max(t,e.max)},this._pfdata[0].max),m=this._pfdata.reduce(function(t,e){return Math.min(t,e.min)},this._pfdata[0].min);i=new wijmo_1.Rect(-.5,m-.5*g,this._pfdata.length,p-m+g);for(var d=1;d<this._pfdata.length;d++){var f=this._pfdata[d-1],w=this._pfdata[d];wijmo_1.isDate(w.date)&&wijmo_1.isDate(f.date)&&w.date.getYear()!=f.date.getYear()&&this._xlbls.push({value:d,text:wijmo_1.Globalize.formatNumber(w.date.getFullYear()%100,"d2")})}}}}return 0==this._xlbls.length&&this._xlbls.push({value:0}),this.axisYMajorGrid=this.chart.axisY.majorGrid,this.chart.axisY.majorGrid=!1,this.chart.axisX.itemsSource=this._xlbls,i},e.prototype.plotSeries=function(t,e,i,a,n,r,s){if(this._pfdata&&this._pfdata.length>0){var o=this._actualBoxSize;this.renderGrid(t,this._pfdata,o),this.renderData(this.chart,t,this._pfdata,o)}this.chart.axisY.majorGrid=this.axisYMajorGrid},e.prototype.calcBoxSize=function(t,e,i){var a=t.reduce(function(t,i){return Math.max(t,i[e])},t[0][e]),n=t.reduce(function(t,e){return Math.min(t,e[i])},t[0][i]),r=this._boxSize,s=a-n;switch(this._scaling){case PointAndFigureScaling.Traditional:s<.25?r=.0625:s>=.25&&s<1?r=.125:s>=1&&s<5?r=.25:s>=5&&s<20?r=.5:s>=20&&s<100?r=1:s>=100&&s<200?r=2:s>=200&&s<500?r=4:s>=500&&s<1e3?r=5:s>=1e3&&s<25e3?r=50:s>-25e3&&(r=500);break;case PointAndFigureScaling.Dynamic:var o=this.chart.series[0],l=o._getBindingValues(0),h=o._getBindingValues(1),c=(o._getBindingValues(2),_avgTrueRng(l,h,o._getBindingValues(3),this._period));r=c[c.length-1];break;case PointAndFigureScaling.Fixed:}return r},e.prototype.calcPFHiLo2=function(t,e,i,a,n,r){for(var s=[],o=0;o<t.length;o++){var l=t[o][e],h=t[o][i];wijmo_1.assert(l>=h,"'High' value must be larger than 'low' value.");var c=t[o][a];if(0==s.length)s.push({min:this.roundDown(h,n),max:this.roundDown(l,n),rise:!1,date:c});else{var _=s[s.length-1];if(_.rise){var u=_.max+n,g=_.max-r*n;this.roundUp(l,n)>=u?_.max=this.roundUp(l,n):h<=g&&s.push({min:this.roundDown(h,n),max:_.max-n,rise:!1,date:c})}else{u=_.min-n,g=_.min+r*n;this.roundDown(h,n)<=u?_.min=this.roundDown(h,n):l>=g&&s.push({min:_.min+n,max:this.roundUp(l,n),rise:!0,date:c})}}}if(s.length>0){var p=s[0];p.min==p.max&&s.splice(0,1)}return s},e.prototype.roundUp=function(t,e){return Math.ceil(t/e-.999999)*e},e.prototype.roundDown=function(t,e){return Math.floor(t/e+.999999)*e},e.prototype.renderGrid=function(t,e,i){if(this._pfdata){for(var a=this._pfdata.reduce(function(t,e){return Math.max(t,e.max)},this._pfdata[0].max),n=this._pfdata.reduce(function(t,e){return Math.min(t,e.min)},this._pfdata[0].min),r=this.chart,s=this._pfdata.length,o=n-.5*i;o<=a+i;o+=i){var l=new wijmo_1.Point(-.5,o);l=r.dataToPoint(l);var h=new wijmo_1.Point(s,o);h=r.dataToPoint(h),t.stroke=wijmo_chart_1.FlexChartCore._FG,t.strokeWidth=1,t.drawLine(l.x,l.y,h.x,h.y,wijmo_chart_1.FlexChartCore._CSS_GRIDLINE)}for(var c=-.5;c<=s;c+=1){l=new wijmo_1.Point(c,this.chart.axisY.actualMin);l=r.dataToPoint(l);h=new wijmo_1.Point(c,this.chart.axisY.actualMax);h=r.dataToPoint(h),t.stroke=wijmo_chart_1.FlexChartCore._FG,t.strokeWidth=1,t.drawLine(l.x,l.y,h.x,h.y,wijmo_chart_1.FlexChartCore._CSS_GRIDLINE)}}},e.prototype.renderData=function(t,e,i,a){for(var n=t.series[0],r=n._getSymbolStroke(0),s=n._getAltSymbolStroke(0)||r,o=0;o<i.length;o++){var l=i[o],h=(i[o].max-i[o].min)/a;if(0!=h){var c=new wijmo_1.Point(o-.5,l.min);c=t.dataToPoint(c);var _=new wijmo_1.Point(o+.5,l.max);_=t.dataToPoint(_),e.fill="transparent";for(var u=(_.y-c.y)/h,g=0;g<h+1;g++)if(e.strokeWidth=1.5,l.rise?(e.stroke=r,e.drawLine(c.x,c.y+(g-.5)*u,_.x,c.y+(g+.5)*u),e.drawLine(_.x,c.y+(g-.5)*u,c.x,c.y+(g+.5)*u)):(e.stroke=s,e.drawEllipse(.5*(c.x+_.x),c.y+g*u,.5*Math.abs(c.x-_.x),.5*Math.abs(u))),this.hitTester){var p=l.min+g*a,m=new wijmo_chart_1._DataPoint(0,o,l.date,p);m.y=p,m.yfmt=this.chart.axisY._formatValue(p),wijmo_1.isDate(l.date)&&(m.x=l.date,m.xfmt=wijmo_1.Globalize.formatDate(l.date,"d"));var d=new wijmo_1.Rect(Math.min(c.x,_.x),c.y+g*u-.5*u,Math.abs(_.x-c.x),u);d.height<0&&(d.top+=u,d.height=-d.height);var f=new wijmo_chart_1._RectArea(d);f.tag=m,this.hitTester.add(f,0)}}}},e}(wijmo_chart_1._BasePlotter);exports._PointAndFigurePlotter=_PointAndFigurePlotter;var _KagiPlotter=function(t){function e(){return t.call(this)||this}return __extends(e,t),e.prototype._calculate=function(t){this._init();var e=t._getBindingValues(0),i=t._getBindingValues(1),a=t._getBindingValues(2),n=t._getBindingValues(3),r=t.getValues(1)||this.chart._xvals;this._calculator=new _KagiCalculator(e,i,a,n,r,this._reversalAmount,this._rangeMode,this._fields),this._rangeValues=this._calculator.calculate(),(null===this._rangeValues||wijmo_1.isUndefined(this._rangeValues))&&(this._rangeValues=[]),this._generateXLabels(t)},e.prototype.plotSeries=function(t,e,i,a,n,r,s){this._calculate(a);var o=this.chart.series.indexOf(a),l=this._rangeValues.length,h=e.actualMin,c=e.actualMax,_=this._DEFAULT_WIDTH,u=a._getSymbolStroke(o),g=a._getAltSymbolStroke(o)||u,p=[],m=[];t.stroke=u,t.strokeWidth=_;var d,f,w,y,v,x,C,j=0;t.startGroup();for(var b=0;b<l;b++)d=b,wijmo_chart_1._DataInfo.isValid(d)&&h<=d&&d<=c&&(f=this._rangeValues[b].open,w=this._rangeValues[b].close,0===b?(y=Math.min(f,w),v=Math.max(f,w),t.strokeWidth=f>w?_:2*_,t.stroke=f>w?u:g,t.drawLine(e.convert(d),i.convert(f),e.convert(d),i.convert(w)),t.drawLine(e.convert(d-1)-t.strokeWidth/2,i.convert(f),e.convert(d)+t.strokeWidth/2,i.convert(f))):t.strokeWidth===_?w>f?(w>v?(t.drawLine(e.convert(d),i.convert(f),e.convert(d),i.convert(v)),t.strokeWidth=2*_,t.stroke=g,t.drawLine(e.convert(d),i.convert(v),e.convert(d),i.convert(w)),y=f):t.drawLine(e.convert(d),i.convert(f),e.convert(d),i.convert(w)),v=w):t.drawLine(e.convert(d),i.convert(f),e.convert(d),i.convert(w)):t.strokeWidth/2===_&&(w<f?(w<y?(t.drawLine(e.convert(d),i.convert(f),e.convert(d),i.convert(y)),t.strokeWidth=_,t.stroke=u,t.drawLine(e.convert(d),i.convert(y),e.convert(d),i.convert(w)),v=f):t.drawLine(e.convert(d),i.convert(f),e.convert(d),i.convert(w)),y=w):t.drawLine(e.convert(d),i.convert(f),e.convert(d),i.convert(w))),b<l-1&&t.drawLine(e.convert(d)-t.strokeWidth/2,i.convert(w),e.convert(d+1)+t.strokeWidth/2,i.convert(w)),C=this._getDataPoint(o,b,a,w),(x=new wijmo_chart_1._CircleArea(new wijmo_1.Point(e.convert(d),i.convert(w)),.5*t.strokeWidth)).tag=C,this.hitTester.add(x,o),a._setPointIndex(b,j),j++,p.push(e.convert(d)),m.push(i.convert(f)),p.push(e.convert(d)),m.push(i.convert(w)));t.endGroup(),this.hitTester.add(new wijmo_chart_1._LinesArea(p,m),o)},e.prototype._init=function(){t.prototype._init.call(this),this._reversalAmount=this.getNumOption("reversalAmount","kagi")||14,this._rangeMode=this.getOption("rangeMode","kagi")||RangeMode.Fixed,this._rangeMode=wijmo_1.asEnum(this._rangeMode,RangeMode,!0),this._fields=this.getOption("fields","kagi")||DataFields.Close,this._fields=wijmo_1.asEnum(this._fields,DataFields,!0)},e.prototype.clear=function(){t.prototype.clear.call(this),this._reversalAmount=null,this._rangeMode=null},e}(_BaseRangePlotter);exports._KagiPlotter=_KagiPlotter;var _RenkoPlotter=function(t){function e(){return t.call(this)||this}return __extends(e,t),e.prototype.clear=function(){t.prototype.clear.call(this),this._boxSize=null,this._rangeMode=null},e.prototype._calculate=function(t){this._init();var e=t._getBindingValues(0),i=t._getBindingValues(1),a=t._getBindingValues(2),n=t._getBindingValues(3),r=t.getValues(1)||this.chart._xvals;this._calculator=new _RenkoCalculator(e,i,a,n,r,this._boxSize,this._rangeMode,this._fields,this._rounding),this._rangeValues=this._calculator.calculate(),(null===this._rangeValues||wijmo_1.isUndefined(this._rangeValues))&&(this._rangeValues=[]),this._generateXLabels(t)},e.prototype._init=function(){t.prototype._init.call(this),this._boxSize=this.getNumOption("boxSize","renko")||14,this._rangeMode=this.getOption("rangeMode","renko")||RangeMode.Fixed,this._rangeMode=wijmo_1.asEnum(this._rangeMode,RangeMode,!0),wijmo_1.assert(this._rangeMode!==RangeMode.Percentage,"RangeMode.Percentage is not supported"),this._fields=this.getOption("fields","renko")||DataFields.Close,this._fields=wijmo_1.asEnum(this._fields,DataFields,!0),wijmo_1.assert(this._fields!==DataFields.HighLow,"DataFields.HighLow is not supported"),this._rounding=wijmo_1.asBoolean(this.getOption("rounding","renko"),!0)},e.prototype._generateXLabels=function(e){var i=this;t.prototype._generateXLabels.call(this,e),this._rangeXLabels.forEach(function(t,e){e>0&&i._rangeXLabels[e-1]._text===t.text&&(t.text="")},this)},e}(_BaseRangePlotter);exports._RenkoPlotter=_RenkoPlotter;var _LineBreakPlotter=function(t){function e(){return t.call(this)||this}return __extends(e,t),e.prototype.clear=function(){t.prototype.clear.call(this),this._newLineBreaks=null},e.prototype._calculate=function(t){this._init();var e=t._getBindingValues(3),i=t.getValues(1)||this.chart._xvals;this._calculator=new _LineBreakCalculator(null,null,null,e,i,this._newLineBreaks),this._rangeValues=this._calculator.calculate(),(null===this._rangeValues||wijmo_1.isUndefined(this._rangeValues))&&(this._rangeValues=[]),this._generateXLabels(t)},e.prototype._init=function(){t.prototype._init.call(this),this._newLineBreaks=wijmo_1.asInt(this.getNumOption("newLineBreaks","lineBreak"),!0,!0)||3,wijmo_1.assert(this._newLineBreaks>=1,"Value must be greater than 1")},e}(_BaseRangePlotter);exports._LineBreakPlotter=_LineBreakPlotter;var FinancialChartType,_HeikinAshiPlotter=function(t){function e(){var e=t.call(this)||this;return e._symFactor=.7,e.clear(),e}return __extends(e,t),e.prototype.clear=function(){t.prototype.clear.call(this),this._haValues=null,this._calculator=null},e.prototype.plotSeries=function(t,e,i,a,n,r,s){var o=this;this._calculate(a);var l=wijmo_1.asType(a,wijmo_chart_1.SeriesBase),h=this.chart.series.indexOf(a),c=a.getValues(1),_=this._symFactor,u=this._haValues.length,g=!0;if(c){var p=this.dataInfo.getDeltaX();p>0&&(_*=p)}else c=this.dataInfo.getXVals();c?u=Math.min(u,c.length):(g=!1,c=new Array(u));var m=this._DEFAULT_WIDTH,d=l._getSymbolFill(h),f=l._getAltSymbolFill(h)||"transparent",w=l._getSymbolStroke(h),y=l._getAltSymbolStroke(h)||w,v=_,x=a.getDataType(1)||a.chart._xDataType;t.strokeWidth=m;for(var C,j,b,k,F,P,T,V,A=e.actualMin,M=e.actualMax,L=0,D=this.getItemFormatter(a),S=0;S<u;S++)if(b=g?c[S]:S,wijmo_chart_1._DataInfo.isValid(b)&&A<=b&&b<=M){if(F=this._haValues[S].high,P=this._haValues[S].low,T=this._haValues[S].open,V=this._haValues[S].close,C=T<V?f:d,j=T<V?y:w,t.fill=C,t.stroke=j,t.startGroup(),k=this._getDataPoint(h,S,b,a),D){var B=new wijmo_chart_1.HitTestInfo(this.chart,new wijmo_1.Point(e.convert(b),i.convert(F)),wijmo_chart_1.ChartElement.SeriesSymbol);B._setData(l,S),B._setDataPoint(k),D(t,B,function(){o._drawSymbol(t,e,i,h,S,C,v,b,F,P,T,V,k,x)})}else this._drawSymbol(t,e,i,h,S,C,v,b,F,P,T,V,k,x);t.endGroup(),a._setPointIndex(S,L),L++}},e.prototype._drawSymbol=function(t,e,i,a,n,r,s,o,l,h,c,_,u,g){var p,m=null,d=null,f=null,w=null,y=g===wijmo_1.DataType.Date?432e5:.5;if((f=e.convert(o-y*s))>(w=e.convert(o+y*s))){var v=f;f=w,w=v}o=e.convert(o),wijmo_chart_1._DataInfo.isValid(c)&&wijmo_chart_1._DataInfo.isValid(_)&&(c=i.convert(c),_=i.convert(_),d=(m=Math.min(c,_))+Math.abs(c-_),t.drawRect(f,m,w-f,d-m),(p=new wijmo_chart_1._RectArea(new wijmo_1.Rect(f,m,w-f,d-m))).tag=u,this.hitTester.add(p,a)),wijmo_chart_1._DataInfo.isValid(l)&&(l=i.convert(l),null!==m&&(t.drawLine(o,m,o,l),p.rect.top=l,p.rect.height=p.rect.height+l)),wijmo_chart_1._DataInfo.isValid(h)&&(h=i.convert(h),null!==d&&(t.drawLine(o,d,o,h),p.rect.height=p.rect.height+h))},e.prototype._getDataPoint=function(t,e,i,a){var n=new wijmo_chart_1._DataPoint(t,e,i,this._haValues[e].high),r=a._getItem(e),s=a._getBinding(0),o=a._getBinding(1),l=a._getBinding(2),h=a._getBinding(3),c=a._getAxisY();return null!=r&&(n.item=wijmo_chart_1._BasePlotter.cloneStyle(r,[]),n.item[s]=this._haValues[e].high,n.item[o]=this._haValues[e].low,n.item[l]=this._haValues[e].open,n.item[h]=this._haValues[e].close),n.y=this._haValues[e].high,n.yfmt=c._formatValue(this._haValues[e].high),n},e.prototype._calculate=function(t){var e=t._getBindingValues(0),i=t._getBindingValues(1),a=t._getBindingValues(2),n=t._getBindingValues(3);this._calculator=new _HeikinAshiCalculator(e,i,a,n),this._haValues=this._calculator.calculate(),(null===this._haValues||wijmo_1.isUndefined(this._haValues))&&this._init()},e.prototype._init=function(){this._haValues=[]},e}(wijmo_chart_1._FinancePlotter);exports._HeikinAshiPlotter=_HeikinAshiPlotter,function(t){t[t.Column=0]="Column",t[t.Scatter=1]="Scatter",t[t.Line=2]="Line",t[t.LineSymbols=3]="LineSymbols",t[t.Area=4]="Area",t[t.Candlestick=5]="Candlestick",t[t.HighLowOpenClose=6]="HighLowOpenClose",t[t.HeikinAshi=7]="HeikinAshi",t[t.LineBreak=8]="LineBreak",t[t.Renko=9]="Renko",t[t.Kagi=10]="Kagi",t[t.ColumnVolume=11]="ColumnVolume",t[t.EquiVolume=12]="EquiVolume",t[t.CandleVolume=13]="CandleVolume",t[t.ArmsCandleVolume=14]="ArmsCandleVolume",t[t.PointAndFigure=15]="PointAndFigure"}(FinancialChartType=exports.FinancialChartType||(exports.FinancialChartType={}));var FinancialChart=function(t){function e(e,i){var a=t.call(this,e,null)||this;return a._chartType=FinancialChartType.Line,a.__heikinAshiPlotter=null,a.__lineBreakPlotter=null,a.__renkoPlotter=null,a.__kagiPlotter=null,a.__pfPlotter=null,a.initialize(i),a}return __extends(e,t),e.prototype._getProductInfo=function(){return"A78U,FinancialChart"},Object.defineProperty(e.prototype,"chartType",{get:function(){return this._chartType},set:function(t){(t=wijmo_1.asEnum(t,FinancialChartType))!=this._chartType&&(this._chartType=t,this.invalidate())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"options",{get:function(){return this._options},set:function(t){t!=this._options&&(this._options=t,this.invalidate())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_heikinAshiPlotter",{get:function(){return null===this.__heikinAshiPlotter&&(this.__heikinAshiPlotter=new _HeikinAshiPlotter,this._initPlotter(this.__heikinAshiPlotter)),this.__heikinAshiPlotter},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_lineBreakPlotter",{get:function(){return null===this.__lineBreakPlotter&&(this.__lineBreakPlotter=new _LineBreakPlotter,this._initPlotter(this.__lineBreakPlotter)),this.__lineBreakPlotter},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_renkoPlotter",{get:function(){return null===this.__renkoPlotter&&(this.__renkoPlotter=new _RenkoPlotter,this._initPlotter(this.__renkoPlotter)),this.__renkoPlotter},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_kagiPlotter",{get:function(){return null===this.__kagiPlotter&&(this.__kagiPlotter=new _KagiPlotter,this._initPlotter(this.__kagiPlotter)),this.__kagiPlotter},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_pfPlotter",{get:function(){return null===this.__pfPlotter&&(this.__pfPlotter=new _PointAndFigurePlotter,this._initPlotter(this.__pfPlotter)),this.__pfPlotter},enumerable:!0,configurable:!0}),e.prototype._getChartType=function(){var t=null;switch(this.chartType){case FinancialChartType.Area:t=wijmo_chart_1.ChartType.Area;break;case FinancialChartType.Line:case FinancialChartType.Kagi:case FinancialChartType.PointAndFigure:t=wijmo_chart_1.ChartType.Line;break;case FinancialChartType.Column:case FinancialChartType.ColumnVolume:t=wijmo_chart_1.ChartType.Column;break;case FinancialChartType.LineSymbols:t=wijmo_chart_1.ChartType.LineSymbols;break;case FinancialChartType.Scatter:t=wijmo_chart_1.ChartType.Scatter;break;case FinancialChartType.Candlestick:case FinancialChartType.Renko:case FinancialChartType.HeikinAshi:case FinancialChartType.LineBreak:case FinancialChartType.EquiVolume:case FinancialChartType.CandleVolume:case FinancialChartType.ArmsCandleVolume:t=wijmo_chart_1.ChartType.Candlestick;break;case FinancialChartType.HighLowOpenClose:t=wijmo_chart_1.ChartType.HighLowOpenClose}return t},e.prototype._getPlotter=function(e){var i=this.chartType,a=null;if(e){var n=e.chartType;n&&!wijmo_1.isUndefined(n)&&n!=i&&(i=n,!0)}switch(i){case FinancialChartType.HeikinAshi:a=this._heikinAshiPlotter;break;case FinancialChartType.LineBreak:a=this._lineBreakPlotter;break;case FinancialChartType.Renko:a=this._renkoPlotter;break;case FinancialChartType.Kagi:a=this._kagiPlotter;break;case FinancialChartType.ColumnVolume:(a=t.prototype._getPlotter.call(this,e)).isVolume=!0,a.width=1;break;case FinancialChartType.EquiVolume:(a=t.prototype._getPlotter.call(this,e)).isEqui=!0,a.isCandle=!1,a.isArms=!1,a.isVolume=!0,a.symbolWidth="100%";break;case FinancialChartType.CandleVolume:(a=t.prototype._getPlotter.call(this,e)).isEqui=!1,a.isCandle=!0,a.isArms=!1,a.isVolume=!0,a.symbolWidth="100%";break;case FinancialChartType.ArmsCandleVolume:(a=t.prototype._getPlotter.call(this,e)).isEqui=!1,a.isCandle=!1,a.isArms=!0,a.isVolume=!0,a.symbolWidth="100%";break;case FinancialChartType.PointAndFigure:a=this._pfPlotter;break;default:a=t.prototype._getPlotter.call(this,e)}return a},e.prototype._createSeries=function(){return new FinancialSeries},e}(wijmo_chart_1.FlexChartCore);exports.FinancialChart=FinancialChart,wijmo_1._registerModule("wijmo.chart.finance",selfModule);