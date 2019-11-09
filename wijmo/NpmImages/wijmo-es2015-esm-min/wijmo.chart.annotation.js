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

import{Size,asNumber,isArray,Point,isDate,Rect,asBoolean,asEnum,ObservableArray,hasClass,Tooltip,NotifyCollectionChangedAction,_registerModule}from"wijmo/wijmo";import{DataPoint,SeriesVisibility,ChartTooltip}from"wijmo/wijmo.chart";import*as selfModule from"wijmo/wijmo.chart.annotation";export var AnnotationAttachment;!function(t){t[t.DataIndex=0]="DataIndex",t[t.DataCoordinate=1]="DataCoordinate",t[t.Relative=2]="Relative",t[t.Absolute=3]="Absolute"}(AnnotationAttachment||(AnnotationAttachment={}));export var AnnotationPosition;!function(t){t[t.Center=0]="Center",t[t.Top=1]="Top",t[t.Bottom=2]="Bottom",t[t.Left=4]="Left",t[t.Right=8]="Right"}(AnnotationPosition||(AnnotationPosition={}));export class AnnotationBase{constructor(t){this._resetDefaultValue(),t&&this._copy(this,t)}get attachment(){return this._attachment}set attachment(t){(t=asEnum(t,AnnotationAttachment))!=this._attachment&&(this._attachment=t,this._repaint())}get point(){return this._point}set point(t){null!=t.x&&null!=t.y&&(t.x===this._point.x&&t.y===this._point.y||(this._point=t,this._repaint()))}get seriesIndex(){return this._seriesIndex}set seriesIndex(t){(t=asNumber(t,!1,!0))!=this._seriesIndex&&(this._seriesIndex=t,this._repaint())}get pointIndex(){return this._pointIndex}set pointIndex(t){t!==this._pointIndex&&(this._pointIndex=asNumber(t,!1,!0),this._repaint())}get position(){return this._position}set position(t){t!=this._position&&(this._position=t,this._repaint())}get offset(){return this._offset}set offset(t){null!=t.x&&null!=t.y&&(t.x===this._offset.x&&t.y===this._offset.y||(this._offset=t,this._repaint()))}get style(){return null==this._style&&(this._style={}),this._style}set style(t){t!=this._style&&(this._style=t,this._repaint())}get isVisible(){return this._isVisible}set isVisible(t){(t=asBoolean(t,!1))!=this._isVisible&&(this._isVisible=t,this._toggleVisibility(t))}get tooltip(){return this._tooltip}set tooltip(t){this._tooltip=t}get name(){return this._name}set name(t){this._name=t}render(t){var e;this._element=t.startGroup(this._getCSSClass()),t.fill="#88bde6",t.strokeWidth=1,t.stroke="#000000",this._render(t),t.endGroup(),this._element[AnnotationBase._DATA_KEY]=this,this._isVisible?this._attachment===AnnotationAttachment.DataIndex&&(!(e=this._layer._chart.series[this._seriesIndex])||e.visibility!==SeriesVisibility.Legend&&e.visibility!==SeriesVisibility.Hidden||this._toggleVisibility(!1)):this._toggleVisibility(!1)}destroy(){}_copy(t,e){for(var i in e)i in t&&this._processOptions(i,t,e)}_processOptions(t,e,i){e[t]=i[t]}_resetDefaultValue(){this._attachment=AnnotationAttachment.Absolute,this._point=new DataPoint(0,0),this._seriesIndex=0,this._pointIndex=0,this._position=AnnotationPosition.Center,this._offset=new Point(0,0),this._isVisible=!0,this._tooltip=""}_toggleVisibility(t){var e=t?"visible":"hidden";this._element&&this._element.setAttribute("visibility",e)}_getCSSClass(){return AnnotationBase._CSS_ANNOTATION}_render(t){this._element=null}_repaint(){this._layer&&this._layer._renderAnnotation(this)}_convertPoint(t){var e,i,s,n,r,o,a,h=this._attachment,_=new Point;switch(this._layer&&this._layer._chart&&(i=(e=this._layer._chart)._plotRect),h){case AnnotationAttachment.DataIndex:if(!e.series||e.series.length<=this.seriesIndex)break;if(!(o=(r=e.series[this.seriesIndex])._getItem(this.pointIndex)))break;s=r.axisX||e.axisX,n=r.axisY||e.axisY,a=o[r.bindingX]||o.x;let l=o[r._getBinding(0)]||n.actualMin+.25;null!=r._getYOffset&&(l=r._getYOffset(this.pointIndex)),"string"==typeof a&&(a=this.pointIndex,null!=r._getXOffset&&(a+=r._getXOffset())),_.x=this._convertDataToLen(i.width,s,a),_.y=this._convertDataToLen(i.height,n,l,!0);break;case AnnotationAttachment.DataCoordinate:s=e.axisX,n=e.axisY,_.x=this._convertDataToLen(i.width,s,t.x),_.y=this._convertDataToLen(i.height,n,t.y,!0);break;case AnnotationAttachment.Relative:_.x=i.width*t.x,_.y=i.height*t.y;break;case AnnotationAttachment.Absolute:default:_.x=t.x,_.y=t.y}return _}_convertDataToLen(t,e,i,s=!1){var n=null==e.min?e.actualMin:e.min,r=null==e.max?e.actualMax:e.max;if(e._getLogBase()){if(i<=0)return NaN;let e=Math.log(r/n);return s?t*(1-Math.log(i/n)/e):t*Math.log(i/n)/e}return s?t*(1-(i-n)/(r-n)):t*(i-n)/(r-n)}_renderCenteredText(t,e,i,s,n,r){var o,a;this._isValidPoint(i)&&(n?e.drawStringRotated(t,i,i,n,s,r):e.drawString(t,i,s,r),(o=this._element.querySelector("text"))&&(a=o.getBBox(),o.setAttribute("x",(i.x-a.width/2).toFixed(1)),o.setAttribute("y",(i.y+a.height/6).toFixed(1))))}_adjustOffset(t,e){t.x=t.x+e.x,t.y=t.y+e.y}_getOffset(t){var e=this._getPositionOffset(t);return new Point(this._offset.x+e.x,this._offset.y+e.y)}_getPositionOffset(t){var e=new Point(0,0),i=this.position,s=this._getSize(t);return(i&AnnotationPosition.Top)===AnnotationPosition.Top?e.y-=s.height/2:(i&AnnotationPosition.Bottom)===AnnotationPosition.Bottom&&(e.y+=s.height/2),(i&AnnotationPosition.Left)===AnnotationPosition.Left?e.x-=s.width/2:(i&AnnotationPosition.Right)===AnnotationPosition.Right&&(e.x+=s.width/2),e}_getSize(t){return new Size}_isValidPoint(t){return isFinite(t.x)&&isFinite(t.y)}_measureString(t,e,i){var s,n=t;return n._textGroup&&null==n._textGroup.parentNode?(n._svg.appendChild(n._textGroup),s=n.measureString(e,i,null,this.style),n.endRender()):s=n.measureString(e,i,null,this.style),s}};AnnotationBase._DATA_KEY="wj-chart-annotation",AnnotationBase._CSS_ANNOTATION="gcchart-annotation",AnnotationBase._CSS_ANNO_TEXT="anno-text",AnnotationBase._CSS_ANNO_SHAPE="anno-shape";export class Text extends AnnotationBase{constructor(t){super(t)}_resetDefaultValue(){super._resetDefaultValue(),this._text="",this.position=AnnotationPosition.Top}_getCSSClass(){return super._getCSSClass()+" "+Text._CSS_TEXT}get text(){return this._text}set text(t){t!==this._text&&(this._text=t,this._repaint())}_render(t){var e,i=this._convertPoint(this.point);e=this._getOffset(t),this._adjustOffset(i,e),this._renderCenteredText(this._text,t,i,AnnotationBase._CSS_ANNO_TEXT,null,this.style)}_getSize(t){return t?this._measureString(t,this._text,AnnotationBase._CSS_ANNO_TEXT):new Size}};Text._CSS_TEXT="gcchart-anno-text";export class Shape extends AnnotationBase{constructor(t){super(t)}_resetDefaultValue(){super._resetDefaultValue(),this._content=""}_getCSSClass(){return super._getCSSClass()+" "+Shape._CSS_SHAPE}get content(){return this._content}set content(t){t!==this._content&&(this._content=t,this._repaint())}_render(t){this._shapeContainer=t.startGroup(),t.stroke="#000",this._renderShape(t),t.stroke=null,t.endGroup(),this._content&&this._renderText(t)}_getContentCenter(){return this.point}_renderShape(t){}_renderText(t){var e,i;e=this._convertPoint(this._getContentCenter()),this._isValidPoint(e)&&(i=this._getOffset(),this._adjustOffset(e,i),this._renderCenteredText(this._content,t,e,AnnotationBase._CSS_ANNO_TEXT))}};Shape._CSS_SHAPE="gcchart-anno-shape";export class Ellipse extends Shape{constructor(t){super(t)}get width(){return this._width}set width(t){t!==this._width&&(this._width=asNumber(t,!1,!0),this._repaint())}get height(){return this._height}set height(t){t!==this._height&&(this._height=asNumber(t,!1,!0),this._repaint())}_resetDefaultValue(){super._resetDefaultValue(),this._width=100,this._height=80}_getCSSClass(){return super._getCSSClass()+" "+Ellipse._CSS_ELLIPSE}_renderShape(t){super._renderShape(t);var e=this._convertPoint(this.point),i=this._width,s=this._height,n=this._getOffset();this._adjustOffset(e,n),this._isValidPoint(e)&&t.drawEllipse(e.x,e.y,i/2,s/2,AnnotationBase._CSS_ANNO_SHAPE,this.style)}_getSize(){return new Size(this.width,this.height)}};Ellipse._CSS_ELLIPSE="gcchart-anno-ellipse";export class Rectangle extends Shape{constructor(t){super(t)}get width(){return this._width}set width(t){t!==this._width&&(this._width=asNumber(t,!1,!0),this._repaint())}get height(){return this._height}set height(t){t!==this._height&&(this._height=asNumber(t,!1,!0),this._repaint())}_resetDefaultValue(){super._resetDefaultValue(),this._width=100,this._height=80}_getCSSClass(){return super._getCSSClass()+" "+Rectangle._CSS_RECTANGLE}_renderShape(t){super._renderShape(t);var e=this._convertPoint(this.point),i=this._width,s=this._height,n=this._getOffset();this._adjustOffset(e,n),this._isValidPoint(e)&&t.drawRect(e.x-i/2,e.y-s/2,this._width,this._height,AnnotationBase._CSS_ANNO_SHAPE,this.style)}_getSize(){return new Size(this.width,this.height)}};Rectangle._CSS_RECTANGLE="gcchart-anno-rectangle";export class Line extends Shape{constructor(t){super(t)}get start(){return this._start}set start(t){null!=t.x&&null!=t.y&&(t.x===this._start.x&&t.y===this._start.y||(this._start=t,this._repaint()))}get end(){return this._end}set end(t){null!=t.x&&null!=t.y&&(t.x===this._end.x&&t.y===this._end.y||(this._end=t,this._repaint()))}_resetDefaultValue(){super._resetDefaultValue(),this._start=new DataPoint(0,0),this._end=new DataPoint(0,0),this.position=AnnotationPosition.Top}_getCSSClass(){return super._getCSSClass()+" "+Line._CSS_LINE}_getContentCenter(){var t=this.start,e=this.end;return isDate(t.x)&&isDate(e.x)?new DataPoint(new Date(t.x.getTime()+(e.x-t.x)/2),(t.y+e.y)/2):new DataPoint((t.x+e.x)/2,(t.y+e.y)/2)}_renderShape(t){super._renderShape(t);var e,i=this._convertPoint(this._start),s=this._convertPoint(this._end);this._cS=i,this._cE=s,e=this._getOffset(),this._adjustOffset(i,e),this._adjustOffset(s,e),this._isValidPoint(i)&&this._isValidPoint(s)&&t.drawLine(i.x,i.y,s.x,s.y,AnnotationBase._CSS_ANNO_SHAPE,this.style)}_getSize(){var t=this._cS,e=this._cE;return new Size(Math.abs(t.x-e.x),Math.abs(t.y-e.y))}_renderText(t){var e,i,s,n=this._cS,r=this._cE;e=this._convertPoint(this._getContentCenter()),i=this._getOffset(),this._adjustOffset(e,i),this._isValidPoint(e)&&(s=(s=180*Math.atan2(r.y-n.y,r.x-n.x)/Math.PI)<-90?s+180:s>90?s-180:s,this._renderCenteredText(this.content,t,e,AnnotationBase._CSS_ANNO_TEXT,s))}_renderCenteredText(t,e,i,s,n,r){var o,a,h,_;null!=n&&(h=this._measureString(e,t,s).height/2,_=n*Math.PI/180,o=h*Math.sin(_),a=h*Math.cos(_),i.x=i.x+o,i.y=i.y-a);super._renderCenteredText(t,e,i,s,n,r)}};Line._CSS_LINE="gcchart-anno-line";export class Polygon extends Shape{constructor(t){super(t)}_processOptions(t,e,i){if("points"===t){var s=i[t];isArray(s)&&s.forEach(t=>{this.points.push(t)})}else super._processOptions(t,e,i)}get points(){return this._points}_resetDefaultValue(){var t=this;super._resetDefaultValue(),t._points=new ObservableArray,t._points.collectionChanged.addHandler(function(){t._element&&t._repaint()})}_getCSSClass(){return super._getCSSClass()+" "+Polygon._CSS_POLYGON}_getContentCenter(){var t,e=this.points,i=e.length,s=0,n=0;for(t=0;t<i;t++)s+=isDate(e[t].x)?e[t].x.getTime():e[t].x,n+=isDate(e[t].y)?e[t].y.getTime():e[t].y;return new DataPoint(s/i,n/i)}_renderShape(t){super._renderShape(t);var e,i,s=[],n=[],r=this._points,o=r.length,a=this._getOffset();for(e=0;e<o;e++){if(i=this._convertPoint(r[e]),!this._isValidPoint(i))return;this._adjustOffset(i,a),s.push(i.x),n.push(i.y)}t.drawPolygon(s,n,AnnotationBase._CSS_ANNO_SHAPE,this.style)}_getSize(){var t,e,i,s,n,r,o,a=this,h=a._points.length;for(o=[].map.call(a._points,function(t){return a._convertPoint(t)}),n=0;n<h;n++)r=o[n],0!==n?(r.x<t?t=r.x:r.x>e&&(e=r.x),r.y<i?i=r.y:r.y>s&&(s=r.y)):(t=e=r.x,i=s=r.y);return new Size(e-t,s-i)}};Polygon._CSS_POLYGON="gcchart-anno-polygon";export class Circle extends Shape{constructor(t){super(t)}get radius(){return this._radius}set radius(t){t!==this._radius&&(this._radius=asNumber(t,!1,!0),this._repaint())}_resetDefaultValue(){super._resetDefaultValue(),this._radius=100}_getCSSClass(){return super._getCSSClass()+" "+Circle._CSS_CIRCLE}_renderShape(t){super._renderShape(t);var e=this._convertPoint(this.point),i=this._getOffset();this._adjustOffset(e,i),this._isValidPoint(e)&&t.drawPieSegment(e.x,e.y,this.radius,0,360,AnnotationBase._CSS_ANNO_SHAPE,this.style)}_getSize(){var t=2*this.radius;return new Size(t,t)}};Circle._CSS_CIRCLE="gcchart-anno-circle";export class Square extends Shape{constructor(t){super(t)}get length(){return this._length}set length(t){t!==this._length&&(this._length=asNumber(t,!1,!0),this._repaint())}_resetDefaultValue(){super._resetDefaultValue(),this._length=100}_getCSSClass(){return super._getCSSClass()+" "+Square._CSS_SQUARE}_renderShape(t){super._renderShape(t);var e=this._convertPoint(this.point),i=this.length,s=this._getOffset();this._adjustOffset(e,s),this._isValidPoint(e)&&t.drawRect(e.x-i/2,e.y-i/2,i,i,AnnotationBase._CSS_ANNO_SHAPE,this.style)}_getSize(){return new Size(this.length,this.length)}};Square._CSS_SQUARE="gcchart-anno-square";export class Image extends Shape{constructor(t){super(t)}get width(){return this._width}set width(t){t!==this._width&&(this._width=asNumber(t,!1,!0),this._repaint())}get height(){return this._height}set height(t){t!==this._height&&(this._height=asNumber(t,!1,!0),this._repaint())}get href(){return this._href}set href(t){t!==this._href&&(this._href=t,this._repaint())}_resetDefaultValue(){super._resetDefaultValue(),this._width=100,this._height=100,this._href=""}_getCSSClass(){return super._getCSSClass()+" "+Image._CSS_IMAGE}_renderShape(t){super._renderShape(t);var e=this._convertPoint(this.point),i=this._href,s=this.width,n=this.height,r=this._getOffset();i.length>0&&this._isValidPoint(e)&&(this._adjustOffset(e,r),t.drawImage(i,e.x-s/2,e.y-n/2,s,n)),this._applyStyle(this._element,this.style)}_getSize(){return new Size(this.width,this.height)}_applyStyle(t,e){if(e)for(var i in e)t.setAttribute(this._deCase(i),e[i])}_deCase(t){return t.replace(/[A-Z]/g,function(t){return"-"+t.toLowerCase()})}};Image._CSS_IMAGE="gcchart-anno-image";export class AnnotationLayer{constructor(t,e){var i=this;i._init(t),i._renderGroup(),i._bindTooltip(),e&&isArray(e)&&e.forEach(t=>{var e,s=t.type||"Circle";selfModule[s]&&(e=new selfModule[s](t),i._items.push(e))})}_init(t){this._items=new ObservableArray,this._items.collectionChanged.addHandler(this._itemsChanged,this),this._chart=t,this._forceTTShowing=!1,this._annoTTShowing=!1,this._engine=t._currentRenderEngine,t.rendered.addHandler(this._renderAnnotations,this),t.lostFocus.addHandler(this._lostFocus,this)}_lostFocus(t){this._toggleTooltip(this._tooltip,t,this._chart.hostElement)}get items(){return this._items}getItem(t){var e=this.getItems(t);return e.length>0?e[0]:null}getItems(t){var e=[];if(0===this._items.length||!t||""===t)return e;for(var i=0;i<this._items.length;i++)t===this._items[i].name&&e.push(this._items[i]);return e}_bindTooltip(){var t,e=this,i=e._chart.hostElement,s=e._tooltip;s||(s=e._tooltip=new ChartTooltip,t=Tooltip.prototype.hide,Tooltip.prototype.hide=function(){e._forceTTShowing||t.call(s)}),i&&(i.addEventListener("click",function(t){e._toggleTooltip(s,t,i)}),document.addEventListener("mousemove",function(t){e._showTooltip()&&e._toggleTooltip(s,t,i)}))}_showTooltip(){return!this._chart.isTouching}_toggleTooltip(t,e,i){var s=this._getAnnotation(e.target,i);if(s&&s.tooltip)this._forceTTShowing=!0,this._annoTTShowing=!0,t.show(this._layerEle,s.tooltip,new Rect(e.clientX,e.clientY,5,5));else{if(!this._annoTTShowing)return;this._annoTTShowing=!1,this._forceTTShowing=!1,t.hide()}}_getAnnotation(t,e){var i=this._getAnnotationElement(t,e);return null==i?null:i[AnnotationBase._DATA_KEY]}_getAnnotationElement(t,e){if(!t||!e)return null;var i=t.parentNode;return hasClass(t,AnnotationBase._CSS_ANNOTATION)?t:null==i||i===document.body||i===document||i===e?null:this._getAnnotationElement(i,e)}_itemsChanged(t,e){var i=e.action,s=e.item;switch(i){case NotifyCollectionChangedAction.Add:case NotifyCollectionChangedAction.Change:s._layer=this,this._renderAnnotation(s);break;case NotifyCollectionChangedAction.Remove:this._destroyAnnotation(s);break;default:this._destroyAnnotations(),this._renderAnnotations()}}_renderAnnotations(){var t,e=this.items,i=e.length;for(this._renderGroup(),t=0;t<i;t++)this._renderAnnotation(e[t])}_renderGroup(){var t=this._engine,e=this._chart._plotRect;e&&(this._layerEle&&null!=this._layerEle.parentNode||(this._plotrectId="plotRect"+(1e6*Math.random()).toFixed(),t.addClipRect({left:0,top:0,width:e.width,height:e.height},this._plotrectId),this._layerEle=t.startGroup(AnnotationLayer._CSS_Layer,this._plotrectId),this._layerEle.setAttribute("transform","translate("+e.left+", "+e.top+")"),t.endGroup()))}_renderAnnotation(t){this._layerEle&&null!=this._layerEle.parentNode&&(t._element&&t._element.parentNode==this._layerEle&&this._layerEle.removeChild(t._element),t.render(this._engine),this._layerEle.appendChild(t._element))}_destroyAnnotations(){var t,e=this.items,i=e.length;for(t=0;t<i;t++)this._destroyAnnotation(e[t]);this._layerEle.innerHTML=""}_destroyAnnotation(t){this._layerEle&&this._layerEle.removeChild(t._element),t.destroy()}};AnnotationLayer._CSS_Layer="wj-chart-annotationlayer",_registerModule("wijmo.chart.annotation",selfModule);