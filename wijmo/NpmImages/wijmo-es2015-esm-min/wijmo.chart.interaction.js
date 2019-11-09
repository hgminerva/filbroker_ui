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

import{getElementRect,Point,setCss,removeClass,addClass,hasClass,createElement,Event,asNumber,asBoolean,copy,assert,isArray,toggleClass,isDate,asEnum,asType,_registerModule}from"wijmo/wijmo";import{FlexChartCore,FlexChart}from"wijmo/wijmo.chart";import*as selfModule from"wijmo/wijmo.chart.interaction";export var MouseAction;!function(t){t[t.Zoom=0]="Zoom",t[t.Pan=1]="Pan"}(MouseAction||(MouseAction={}));export var InteractiveAxes;!function(t){t[t.X=0]="X",t[t.Y=1]="Y",t[t.XY=2]="XY"}(InteractiveAxes||(InteractiveAxes={}));export class ChartGestures{constructor(t,i){this._chart=null,this._zoomEle=null,this._overlayEle=null,this._wrapperMousedown=null,this._wrapperMouseMove=null,this._wrapperMouseup=null,this._wrapperPointerdown=null,this._wrapperPointerMove=null,this._wrapperPointerup=null,this._wrapperTouchStart=null,this._wrapperTouchMove=null,this._wrapperTouchEnd=null,this._wrapperMouseWheel=null,this._startFirstPt=null,this._minX=null,this._maxX=null,this._minY=null,this._maxY=null,this._threadHold=20,this._clip={},this._selection={},this._startPointers=[],this._mvPointers=[],this._pinchStartEvents=[],this._minXRange=null,this._minYRange=null,this._innerUpdating=!1,this._lastMinX=null,this._lastMaxX=null,this._lastMinY=null,this._lastMaxY=null,this._mouseAction=MouseAction.Zoom,this._interactiveAxes=InteractiveAxes.X,this._enable=!0,this._scaleX=1,this._scaleY=1,this._posX=0,this._posY=0,t||assert(!1,"The FlexChart cannot be null."),this._chart=t,copy(this,i),this._initialize()}get mouseAction(){return this._mouseAction}set mouseAction(t){this._mouseAction=asEnum(t,MouseAction)}get interactiveAxes(){return this._interactiveAxes}set interactiveAxes(t){t!==this._interactiveAxes&&(this._interactiveAxes=asEnum(t,InteractiveAxes))}get enable(){return this._enable}set enable(t){t!==this._enable&&(this._enable=asBoolean(t,!0))}get scaleX(){return this._scaleX}set scaleX(t){t!==this._scaleX&&(this._scaleX=t<0?0:t>1?1:asNumber(t),this._seriesGroup&&this._initAxisRangeWithPosAndScale(!0))}get scaleY(){return this._scaleY}set scaleY(t){t!==this._scaleY&&(this._scaleY=t<0?0:t>1?1:asNumber(t),this._seriesGroup&&this._initAxisRangeWithPosAndScale(!1))}get posX(){return this._posX}set posX(t){t!==this._posX&&(this._posX=t<0?0:t>1?1:asNumber(t),this._seriesGroup&&this._initAxisRangeWithPosAndScale(!0))}get posY(){return this._posY}set posY(t){t!==this._posY&&(this._posY=t<0?0:t>1?1:asNumber(t),this._seriesGroup&&this._initAxisRangeWithPosAndScale(!1))}remove(){this._zoomEle&&(this._chart.hostElement.removeChild(this._zoomEle),this._zoomEle=null),removeClass(this._chart.hostElement,ChartGestures._CSS_TOUCH_DISABLED),this._switchEvent(!1),this._wrapperMousedown=null,this._wrapperMouseMove=null,this._wrapperMouseup=null,this._wrapperPointerdown=null,this._wrapperPointerMove=null,this._wrapperPointerup=null,this._wrapperTouchStart=null,this._wrapperTouchMove=null,this._wrapperTouchEnd=null,this._wrapperMouseWheel=null}reset(){var t=this._chart,i=t.axisX,s=t.axisY;this._maxX&&(i.max=this._maxX),this._minX&&(i.min=this._minX),this._maxY&&(s.max=this._maxY),this._minY&&(s.min=this._minY),this._initAxisRangeWithPosAndScale(!0),this._initAxisRangeWithPosAndScale(!1)}_refreshChart(){var t=this._chart,i=t.axisX,s=t.axisY;this._minX=this._getAxisMin(i),this._maxX=this._getAxisMax(i),this._minY=this._getAxisMin(s),this._maxY=this._getAxisMax(s),this._minXRange=.005*(this._maxX-this._minX),this._minYRange=.005*(this._maxY-this._minY),this._initAxisRangeWithPosAndScale(!0),this._initAxisRangeWithPosAndScale(!1)}_initialize(){var t=this._chart.hostElement;this._zoomEle=createElement('<div class="'+ChartGestures._CSS_ZOOM+'"><div class="'+ChartGestures._CSS_ZOOM_OVERLAY+'"></div>'),this._zoomEle.style.visibility="visible",t.appendChild(this._zoomEle),addClass(t,ChartGestures._CSS_TOUCH_DISABLED),this._overlayEle=this._zoomEle.querySelector("."+ChartGestures._CSS_ZOOM_OVERLAY),this._wrapperMousedown=this._onMousedown.bind(this),this._wrapperMouseMove=this._onMouseMove.bind(this),this._wrapperMouseup=this._onMouseup.bind(this),this._wrapperPointerdown=this._onPointerdown.bind(this),this._wrapperPointerMove=this._onPointerMove.bind(this),this._wrapperPointerup=this._onPointerup.bind(this),this._wrapperMouseWheel=this._onMouseWheel.bind(this),this._wrapperTouchStart=this._onTouchStart.bind(this),this._wrapperTouchMove=this._onTouchMove.bind(this),this._wrapperTouchEnd=this._onTouchEnd.bind(this),this._switchEvent(!0)}_switchEvent(t){var i=this._chart.hostElement,s=t?"addEventListener":"removeEventListener",e=t?"addHandler":"removeHandler";i&&(i[s]("mousedown",this._wrapperMousedown),i[s]("mousemove",this._wrapperMouseMove),document[s]("mouseup",this._wrapperMouseup),"onpointerdown"in window&&(i[s]("pointerdown",this._wrapperPointerdown),i[s]("pointermove",this._wrapperPointerMove),document[s]("pointerup",this._wrapperPointerup)),i[s]("wheel",this._wrapperMouseWheel),"ontouchstart"in window&&(i[s]("touchstart",this._wrapperTouchStart),i[s]("touchmove",this._wrapperTouchMove),document[s]("touchend",this._wrapperTouchEnd)),this._chart.rendered[e](this._refresh,this))}_refresh(){var t,i,s,e=this._chart,a=e.axisX,n=e.axisY,h=e.hostElement;this._seriesGroup=h.querySelector(".wj-series-group"),t=h.querySelector("."+FlexChart._CSS_PLOT_AREA),this._plotOffset=getElementRect(t),this._plotBox=t.getBBox(),this._zoomEleOffset=getElementRect(this._zoomEle),this._overlayEle&&this._overlayEle.removeAttribute("style"),this._innerUpdating?this._innerUpdating=!1:(i=!1,s=!1,(null===this._minX||isNaN(this._minX)||0===this._minX||-1===this._minX||this._lastMinX!==this._getAxisMin(a))&&(this._minX=this._getAxisMin(a),null===this._minX||isNaN(this._minX)||0===this._minX||-1===this._minX||(i=!0)),(null===this._maxX||isNaN(this._maxX)||0===this._maxX||-1===this._maxX||this._lastMaxX!==this._getAxisMax(a))&&(this._maxX=this._getAxisMax(a),null===this._maxX||isNaN(this._maxX)||0===this._maxX||-1===this._maxX||(i=!0)),(null===this._minY||isNaN(this._minY)||this._lastMinY!==this._getAxisMin(n))&&(this._minY=this._getAxisMin(n),isNaN(this._minY)||(s=!0)),(null===this._maxY||isNaN(this._maxY)||this._lastMaxY!==this._getAxisMax(n))&&(this._maxY=this._getAxisMax(n),isNaN(this._maxY)||(s=!0)),this._minXRange=.005*(this._maxX-this._minX),this._minYRange=.005*(this._maxY-this._minY),i&&null!==this._scaleX&&void 0!==this._scaleX&&1!==this._scaleX&&null!==this._posX&&void 0!==this._posX&&0!==this._posX&&this._initAxisRangeWithPosAndScale(!0),s&&null!==this._scaleY&&void 0!==this._scaleY&&1!==this._scaleY&&null!==this._posY&&void 0!==this._posY&&0!==this._posY&&this._initAxisRangeWithPosAndScale(!1))}_onMousedown(t){this._enable&&(this._disabledOthersInteraction(!0),this._mouseDown(t),t.preventDefault())}_onMouseMove(t){this._enable&&(this._mouseMove(t),t.preventDefault())}_onMouseup(t){this._enable&&(this._mouseup(t),this._disabledOthersInteraction(!1))}_onMouseWheel(t){var i=-t.deltaY>0?.05:-.05;this._enable&&(this._scaling=!0,this._interactiveAxes!==InteractiveAxes.X&&this._interactiveAxes!==InteractiveAxes.XY||this._updateAxisByChg(!0,i,-i),this._interactiveAxes!==InteractiveAxes.Y&&this._interactiveAxes!==InteractiveAxes.XY||this._updateAxisByChg(!1,i,-i),this._scaling=!1,t.preventDefault())}_mouseDown(t){this._startFirstPt=this._getPoint(t),this._updatePoint(this._startFirstPt),this._mouseAction===MouseAction.Zoom?this._initOverlay():(this._seriesGroup.setAttribute("clip-path","url(#"+this._chart._plotrectId+")"),toggleClass(this._chart.hostElement,ChartGestures._CSS_PANABLE,this._mouseAction===MouseAction.Pan))}_mouseMove(t){var i;this._startFirstPt&&(i=this._getPoint(t),this._updatePoint(i),this._endPoint=new Point(i.x,i.y),this._mouseAction===MouseAction.Zoom?this._updateOverLay(i):(this._panning=!0,this._panningChart(i.x-this._startFirstPt.x,i.y-this._startFirstPt.y)))}_mouseup(t){var i=this._endPoint;this._chart.axisX;if(!this._startFirstPt||!i)return removeClass(this._chart.hostElement,ChartGestures._CSS_PANABLE),void this._reset();this._mouseAction===MouseAction.Zoom?(this._zoomedChart(i),this._reset()):(this._pannedChart(i.x-this._startFirstPt.x,i.y-this._startFirstPt.y),this._reset()),removeClass(this._chart.hostElement,ChartGestures._CSS_PANABLE)}_onPointerdown(t){if(this._enable){switch(this._disabledOthersInteraction(!0),t.pointerType){case"touch":this._pointerDown(t);break;case"mouse":this._mouseDown(t)}t.preventDefault()}}_onPointerMove(t){if(this._enable){switch(t.pointerType){case"touch":this._pointerMove(t);break;case"mouse":this._mouseMove(t)}t.preventDefault()}}_onPointerup(t){if(this._enable){switch(t.pointerType){case"touch":this._pointerUp(t);break;case"mouse":this._mouseup(t)}this._disabledOthersInteraction(!1),t.preventDefault()}}_pointerDown(t){t.preventManipulation&&t.preventManipulation(),this._seriesGroup.setAttribute("clip-path","url(#"+this._chart._plotrectId+")"),this._startPointers.push({id:t.pointerId,x:t.pageX,y:t.pageY}),1===this._startPointers.length?(this._scaling=!1,this._panning=!0):2===this._startPointers.length&&(this._panning=!1,this._scaling=!0,this._startDistance={x:this._startPointers[0].x-this._startPointers[1].x,y:this._startPointers[0].y-this._startPointers[1].y})}_pointerMove(t){var i,s,e,a,n=new Point(t.pageX,t.pageY),h={},r={};if(t.preventManipulation&&t.preventManipulation(),this._panning){if(!this._pointInPlotArea(n))return;this._endPoint=new Point(t.pageX,t.pageY),this._panningChart(this._endPoint.x-this._startPointers[0].x,this._endPoint.y-this._startPointers[0].y)}else this._scaling&&(i=this._startPointers[0].id+"",s=this._startPointers[1].id+"",this._mvPointers[t.pointerId+""]={x:t.pageX,y:t.pageY},this._mvPointers[i]&&this._mvPointers[s]&&(Math.abs(this._startDistance.x)>this._threadHold&&this._interactiveAxes!==InteractiveAxes.Y&&(e=this._mvPointers[i].x-this._plotOffset.left,a=this._startPointers[0].x-this._plotOffset.left,r.x=Math.abs((this._mvPointers[i].x-this._mvPointers[s].x)/this._startDistance.x),h.x=e-r.x*a,this._clip.x=(this._plotBox.x-e)/r.x+a,this._selection.w=this._plotBox.width/r.x),Math.abs(this._startDistance.y)>this._threadHold&&this._interactiveAxes!==InteractiveAxes.X&&(e=this._mvPointers[i].y-this._plotOffset.top,a=this._startPointers[0].y-this._plotOffset.top,r.y=Math.abs((this._mvPointers[i].y-this._mvPointers[s].y)/this._startDistance.y),h.y=e-r.y*a,this._clip.y=(this._plotBox.y-e)/r.y+a,this._selection.h=this._plotBox.height/r.y),this._scalingChart(r,h)))}_pointerUp(t){t.preventManipulation&&t.preventManipulation(),this._panning?(this._endPoint&&this._pannedChart(this._endPoint.x-this._startPointers[0].x,this._endPoint.y-this._startPointers[0].y),this._reset()):this._scaling&&(this._scaledChart(t),this._reset())}_onTouchStart(t){if(this._enable)return this._disabledOthersInteraction(!0),1==t.touches.length?(this._scaling=!1,this._panning=!0,this._startFirstPt=this._getPoint(t)):2==t.touches.length&&(this._pinchStartEvents=this._getTouchPair(t),this._startDistance=this._touchDistance(t),this._panning=!1,this._scaling=!0),this._seriesGroup&&this._seriesGroup.setAttribute("clip-path","url(#"+this._chart._plotrectId+")"),this._chart._hideToolTip(),!0}_onTouchMove(t){if(this._enable){var i,s,e,a,n,h={},r={},_=t.touches[0],o=new Point(_.pageX,_.pageY);if(t.preventDefault(),this._panning){if(this._startFirstPt){if(!this._pointInPlotArea(o))return;this._endPoint=new Point(_.pageX,_.pageY),this._panningChart(this._endPoint.x-this._startFirstPt.x,this._endPoint.y-this._startFirstPt.y)}}else this._scaling&&(e=this._touchDistance(t),a=this._getTouchPair(t)[0],n=this._pinchStartEvents[0],Math.abs(this._startDistance.x)>this._threadHold&&this._interactiveAxes!==InteractiveAxes.Y&&(i=a.pageX-this._plotOffset.left,s=n.pageX-this._plotOffset.left,h.x=Math.abs(e.x/this._startDistance.x),r.x=i-h.x*s,this._clip.x=(this._plotBox.x-i)/h.x+s,this._selection.w=this._plotBox.width/h.x),Math.abs(this._startDistance.y)>this._threadHold&&this._interactiveAxes!==InteractiveAxes.X&&(i=a.pageY-this._plotOffset.top,s=n.pageY-this._plotOffset.top,h.y=Math.abs(e.y/this._startDistance.y),r.y=i-h.y*s,this._clip.y=(this._plotBox.y-i)/h.y+s,this._selection.h=this._plotBox.height/h.y),this._scalingChart(h,r));return!0}}_onTouchEnd(t){if(this._enable){var i=this._endPoint;if(this._panning){if(!this._startFirstPt||!i)return void this._reset();this._pannedChart(i.x-this._startFirstPt.x,i.y-this._startFirstPt.y)}else this._scaling&&this._scaledChart(t);return this._reset(),this._disabledOthersInteraction(!1),!0}}_initOverlay(){switch(this._zoomEle.style.visibility="visible",this._interactiveAxes){case InteractiveAxes.X:this._overlayEle.style.left=this._startFirstPt.x-this._zoomEleOffset.left+"px",this._overlayEle.style.top=this._plotOffset.top-this._zoomEleOffset.top+"px";break;case InteractiveAxes.Y:this._overlayEle.style.left=this._plotBox.x+"px",this._overlayEle.style.top=this._startFirstPt.y-this._zoomEleOffset.top+"px";break;case InteractiveAxes.XY:this._overlayEle.style.left=this._startFirstPt.x-this._zoomEleOffset.left+"px",this._overlayEle.style.top=this._startFirstPt.y-this._zoomEleOffset.top+"px"}}_updateOverLay(t){var i=this._startFirstPt.x-t.x,s=this._startFirstPt.y-t.y,e={};switch(this._interactiveAxes){case InteractiveAxes.X:if(Math.abs(i)<this._threadHold)return;e=i<=0?{width:Math.abs(i)+"px",height:this._plotBox.height+"px"}:{left:t.x-this._zoomEleOffset.left+"px",width:i+"px",height:this._plotBox.height+"px"};break;case InteractiveAxes.Y:if(Math.abs(s)<this._threadHold)return;e=s<=0?{height:Math.abs(s)+"px",width:this._plotBox.width+"px"}:{top:t.y-this._zoomEleOffset.top+"px",height:s+"px",width:this._plotBox.width+"px"};break;case InteractiveAxes.XY:Math.abs(i)>=this._threadHold&&(e.width=Math.abs(i)+"px",i>0&&(e.left=t.x-this._zoomEleOffset.left+"px")),Math.abs(s)>=this._threadHold&&(e.height=Math.abs(s)+"px",s>0&&(e.top=t.y-this._zoomEleOffset.top+"px"))}setCss(this._overlayEle,e)}_updatePoint(t){var i=this._plotOffset;t.x<i.left&&(t.x=i.left),t.x>i.left+i.width&&(t.x=i.left+i.width),t.y<i.top&&(t.y=i.top),t.y>i.top+i.height&&(t.y=i.top+i.height)}_pointInPlotArea(t){var i=this._plotOffset;return t.x>=i.left&&t.x<=i.left+i.width&&t.y>=i.top&&t.y<=i.top+i.height}_zoomedChart(t){t&&(this._interactiveAxes!==InteractiveAxes.X&&this._interactiveAxes!==InteractiveAxes.XY||this._zoomedAxis(t,!0),this._interactiveAxes!==InteractiveAxes.Y&&this._interactiveAxes!==InteractiveAxes.XY||this._zoomedAxis(t,!1),this._startFirstPt=null)}_zoomedAxis(t,i){var s,e,a=i?this._chart.axisX:this._chart.axisY,n=i?"x":"y",h=i?"left":"top";t&&Math.abs(this._startFirstPt[n]-t[n])>this._threadHold&&(s=a.convertBack(this._startFirstPt[n]-this._plotOffset[h]+this._plotBox[n]),(e=a.convertBack(t[n]-this._plotOffset[h]+this._plotBox[n]))-s!=0&&this._updateAxisRange(a,Math.min(s,e),Math.max(s,e)))}_panningChart(t,i){var s=this._chart.axisX,e=this._chart.axisY,a=this._getTransFormGroups();t=Math.abs(t)<this._threadHold?0:t,i=Math.abs(i)<this._threadHold?0:i,this._interactiveAxes===InteractiveAxes.X&&(i=0),this._interactiveAxes===InteractiveAxes.Y&&(t=0),t>0&&s.actualMin.valueOf()===this._minX&&(t=0),t<0&&s.actualMax.valueOf()===this._maxX&&(t=0),i>0&&e.actualMax.valueOf()===this._maxY&&(i=0),i<0&&e.actualMin.valueOf()===this._minY&&(i=0);for(var n=0;n<a.length;n++)a[n].setAttribute("transform","translate("+t+","+i+")")}_pannedChart(t,i){this._interactiveAxes!==InteractiveAxes.X&&this._interactiveAxes!==InteractiveAxes.XY||this._updateAxisByDistance(!0,t),this._interactiveAxes!==InteractiveAxes.Y&&this._interactiveAxes!==InteractiveAxes.XY||this._updateAxisByDistance(!1,-i)}_scalingChart(t,i){var s,e,a,n=this._chart.axisX,h=this._chart.axisY,r=void 0!==i.x?i.x:0,_=void 0!==i.y?i.y:0;if(t){s=this._getTransFormGroups(),void 0!==t.x&&t.x<1&&n.actualMin.valueOf()===this._minX&&n.actualMax.valueOf()===this._maxX&&(t.x=1,r=0),void 0!==t.y&&t.y<1&&h.actualMin.valueOf()===this._minY&&h.actualMax.valueOf()===this._maxY&&(t.y=1,_=0),e=void 0!==t.x?t.x:1,a=void 0!==t.y?t.y:1;for(var o=0;o<s.length;o++)s[o].setAttribute("transform","translate("+r+", "+_+") scale("+e+", "+a+")")}}_scaledChart(t){var i,s,e=this._chart,a=e.axisX,n=e.axisY;this._clip&&(this._interactiveAxes!==InteractiveAxes.Y&&void 0!==this._clip.x&&(i=Math.max(this._minX,a.convertBack(this._clip.x)))-(s=Math.min(this._maxX,a.convertBack(this._clip.x+this._selection.w)))!=0&&this._updateAxisRange(a,i,s),this._interactiveAxes!==InteractiveAxes.X&&void 0!==this._clip.y&&(s=Math.min(this._maxY,n.convertBack(this._clip.y)),(i=Math.max(this._minY,n.convertBack(this._clip.y+this._selection.h)))-s!=0&&this._updateAxisRange(n,i,s)))}_updateAxisByDistance(t,i){var s,e=t?this._chart.axisX:this._chart.axisY,a=t?this._minX:this._minY,n=t?this._maxX:this._maxY,h=e.actualMin.valueOf(),r=e.actualMax.valueOf();if(0!==i){if(i>0&&a===h||i<0&&n===r)return this._innerUpdating=!0,void this._chart.invalidate();s=i/(t?this._plotBox.width:this._plotBox.height),this._updateAxisByChg(t,-s,-s)}}_updateAxisByChg(t,i,s){var e,a,n=t?this._chart.axisX:this._chart.axisY,h=t?this._minX:this._minY,r=t?this._maxX:this._maxY,_=n.actualMin.valueOf(),o=(n.actualMax.valueOf(),this._chart._plotRect),l=t?o.left:o.top,c=t?o.width:o.height,d=t?this._minXRange:this._minYRange;isNaN(i)||isNaN(s)||(this._panning?i<0?(e=t?n.convertBack(l+i*c):n.convertBack(l+c-i*c))<h?(e=h,a=t?n.convertBack(n.convert(e)+c):n.convertBack(n.convert(e)-c)):a=t?n.convertBack(l+c+s*c):n.convertBack(l-s*c):(a=t?n.convertBack(l+c+s*c):n.convertBack(l-s*c))>r?(a=r,e=t?n.convertBack(n.convert(a)-c):n.convertBack(n.convert(a)+c)):e=t?n.convertBack(l+i*c):n.convertBack(l+c-i*c):this._scaling&&(e=t?n.convertBack(l+i*c):n.convertBack(l+c-i*c),a=t?n.convertBack(l+c+s*c):n.convertBack(l-s*c),e<h&&(e=h),a>r&&(a=r),a-e<d&&(e=a-d)),this._updateAxisRange(n,e,a))}_initAxisRangeWithPosAndScale(t){var i,s,e,a;t?(s=(i=this._maxX-this._minX)*this._scaleX,a=(e=this._minX+this._posX*(i-s))+s,this._innerUpdating=!0,this._chart.axisX.min=e,this._chart.axisX.max=a,this._lastMinX=e,this._lastMaxX=a):(s=(i=this._maxY-this._minY)*this._scaleY,a=(e=this._minY+this._posY*(i-s))+s,this._innerUpdating=!0,this._chart.axisY.min=e,this._chart.axisY.max=a,this._lastMinY=e,this._lastMaxY=a)}_updateAxisRange(t,i,s){this._chart.beginUpdate(),t.min=i,t.max=s,t===this._chart.axisX?(this._lastMinX=i,this._lastMaxX=s):(this._lastMinY=i,this._lastMaxY=s),this._innerUpdating=!0,this._chart.endUpdate()}_reset(){this._scaling=!1,this._panning=!1,this._startDistance=0,this._startFirstPt=null,this._pinchStartEvents=[],this._startPointers=[],this._mvPointers=[],this._endPoint=null,this._clip={},this._selection={}}_getAxisMin(t){return isDate(t.actualMin)?t.actualMin.valueOf():t.actualMin}_getAxisMax(t){return isDate(t.actualMax)?t.actualMax.valueOf():t.actualMax}_getTransFormGroups(){var t=this._seriesGroup.querySelectorAll("g[clip-path]");return 0===t.length&&(t=this._seriesGroup.querySelectorAll("g")),t}_disabledOthersInteraction(t){var i=this._chart.hostElement;if(null!==i&&void 0!==i)for(var s=i.querySelectorAll(".wj-chart-linemarker-container"),e=0;e<s.length;e++)t?addClass(s[e],ChartGestures._CSS_BLOCK_INTERACTION):removeClass(s[e],ChartGestures._CSS_BLOCK_INTERACTION)}_getPoint(t){return t instanceof MouseEvent?new Point(t.pageX,t.pageY):new Point(t.changedTouches[0].pageX,t.changedTouches[0].pageY)}_getTouchPair(t){var i=[];return isArray(t)?(i[0]=t[0],i[1]=t[1]):"touchend"===t.type?1===t.touches.length?(i[0]=t.touches[0],i[1]=t.changedTouches[0]):0===t.touches.length&&(i[0]=t.changedTouches[0],i[1]=t.changedTouches[1]):(i[0]=t.touches[0],i[1]=t.touches[1]),i}_touchDistance(t){var i=this._getTouchPair(t),s=0,e=0;return i[0]&&void 0!==i[0].pageX&&i[1]&&void 0!==i[1].pageX&&(s=i[0].pageX-i[1].pageX),i[0]&&void 0!==i[0].pageY&&i[1]&&void 0!==i[1].pageY&&(e=i[0].pageY-i[1].pageY),{x:s,y:e}}};ChartGestures._CSS_ZOOM="wj-zoom",ChartGestures._CSS_ZOOM_OVERLAY="wj-zoom-overlay",ChartGestures._CSS_PANABLE="wj-panable",ChartGestures._CSS_TOUCH_DISABLED="wj-flexchart-touch-disabled",ChartGestures._CSS_BLOCK_INTERACTION="wj-block-other-interaction";export class _RangeSlider{constructor(t,i,s,e){this._isVisible=!0,this._buttonsVisible=!0,this._minScale=0,this._maxScale=1,this._seamless=!1,this._rsContainer=null,this._rsEle=null,this._decBtn=null,this._incBtn=null,this._rsContent=null,this._minHandler=null,this._rangeHandler=null,this._maxHandler=null,this._wrapperSliderMousedown=null,this._wrapperDocMouseMove=null,this._wrapperDocMouseup=null,this._wrapperBtnMousedown=null,this._wrapperRangeSpaceMousedown=null,this._wrapperRangeMouseleave=null,this._isTouch=!1,this._slidingInterval=null,this._rangeSliderRect=null,this._isHorizontal=!0,this._isBtnMousedown=!1,this._needSpaceClick=!1,this._hasButtons=!0,this._movingEle=null,this._movingOffset=null,this._range=null,this._startPt=null,this._minPos=0,this._maxPos=1,this.rangeChanged=new Event,this.rangeChanging=new Event,t||assert(!1,"The container cannot be null."),this._isTouch="ontouchstart"in window,this._needSpaceClick=i,this._hasButtons=s,copy(this,e),this._createSlider(t)}get buttonsVisible(){return this._buttonsVisible}set buttonsVisible(t){if(t!=this._buttonsVisible){if(this._buttonsVisible=asBoolean(t),!this._rsContainer||!this._hasButtons)return;this._refresh()}}get isHorizontal(){return this._isHorizontal}set isHorizontal(t){if(t!=this._isHorizontal){if(this._isHorizontal=asBoolean(t),!this._rsContainer)return;this._invalidate()}}get isVisible(){return this._isVisible}set isVisible(t){if(t!=this._isVisible){if(this._isVisible=asBoolean(t),!this._rsContainer)return;this._rsContainer.style.visibility=this._isVisible?"visible":"hidden"}}get minScale(){return this._minScale}set minScale(t){t>=0&&t!=this._minScale&&(this._minScale=asNumber(t))}get maxScale(){return this._maxScale}set maxScale(t){t>=0&&t!=this._maxScale&&(this._maxScale=asNumber(t))}get seamless(){return this._seamless}set seamless(t){t!=this._seamless&&(this._seamless=asBoolean(t))}onRangeChanged(t){this.rangeChanged.raise(this,t)}onRangeChanging(t){this.rangeChanging.raise(this,t)}get _isSliding(){return null!==this._startPt}get _handleWidth(){return this._minHandler.offsetWidth}_createSlider(t){var i=this._isHorizontal?_RangeSlider._HRANGESLIDER:_RangeSlider._VRANGESLIDER,s=this._isHorizontal?"wj-glyph-left":"wj-glyph-down",e=this._isHorizontal?"wj-glyph-right":"wj-glyph-up";this._rsContainer=t,this._rsContainer.style.visibility=this._isVisible?"visible":"hidden",this._rsEle=createElement('<div class="wj-chart-rangeslider '+i+'"></div>'),this._rsContainer.appendChild(this._rsEle),this._hasButtons&&(this._decBtn=createElement('<button class="wj-rangeslider-decbtn wj-btn wj-btn-default" type="button" tabindex="-1"><span class="'+s+" "+_RangeSlider._RANGESLIDER_DECBTN+'"></span></button>'),this._rsEle.appendChild(this._decBtn),this._incBtn=createElement('<button class="wj-rangeslider-incbtn wj-btn wj-btn-default" type="button" tabindex="-1"><span class="'+e+" "+_RangeSlider._RANGESLIDER_INCBTN+'"></span></button>'),this._rsEle.appendChild(this._incBtn)),this._rsContent=createElement('<div class="wj-rangeslider-content"><div class="wj-rangeslider-rangehandle"></div><div class="wj-rangeslider-minhandle"></div><div class="wj-rangeslider-maxhandle"></div>'),this._rsEle.appendChild(this._rsContent),this._minHandler=this._rsContent.querySelector("."+_RangeSlider._RANGESLIDER_MINHANDLE),this._rangeHandler=this._rsContent.querySelector("."+_RangeSlider._RANGESLIDER_RANGEHANDLE),this._maxHandler=this._rsContent.querySelector("."+_RangeSlider._RANGESLIDER_MAXHANDLE),this._wrapperSliderMousedown=this._onSliderMousedown.bind(this),this._wrapperDocMouseMove=this._onDocMouseMove.bind(this),this._wrapperDocMouseup=this._onDocMouseup.bind(this),this._wrapperRangeSpaceMousedown=this._onRangeSpaceMousedown.bind(this),this._wrapperRangeMouseleave=this._onRangeMouseleave.bind(this),this._wrapperBtnMousedown=this._onBtnMousedown.bind(this),this._switchEvent(!0)}_switchEvent(t){var i=t?"addEventListener":"removeEventListener";this._rsContainer&&(this._needSpaceClick&&this._rsEle[i]("mousedown",this._wrapperRangeSpaceMousedown),this._rsEle[i]("mouseleave",this._wrapperRangeMouseleave),this._rsContent[i]("mousedown",this._wrapperSliderMousedown),this._hasButtons&&(this._decBtn[i]("mousedown",this._wrapperBtnMousedown),this._incBtn[i]("mousedown",this._wrapperBtnMousedown)),document[i]("mousemove",this._wrapperDocMouseMove),document[i]("mouseup",this._wrapperDocMouseup),"ontouchstart"in window&&(this._needSpaceClick&&this._rsEle[i]("touchstart",this._wrapperRangeSpaceMousedown),this._rsContent[i]("touchstart",this._wrapperSliderMousedown),this._hasButtons&&(this._decBtn[i]("touchstart",this._wrapperBtnMousedown),this._incBtn[i]("touchstart",this._wrapperBtnMousedown)),document[i]("touchmove",this._wrapperDocMouseMove),document[i]("touchend",this._wrapperDocMouseup)))}_onSliderMousedown(t){this._isVisible&&(this._movingEle=t.srcElement||t.target,this._startPt=t instanceof MouseEvent?new Point(t.pageX,t.pageY):new Point(t.changedTouches[0].pageX,t.changedTouches[0].pageY),removeClass(this._minHandler,_RangeSlider._RANGESLIDER_HANDLE_ACTIVE),removeClass(this._maxHandler,_RangeSlider._RANGESLIDER_HANDLE_ACTIVE),this._movingOffset=getElementRect(this._movingEle),this._movingEle!=this._rangeHandler?(this._isHorizontal?this._movingOffset.left+=.5*this._movingEle.offsetWidth:this._movingOffset.top+=.5*this._movingEle.offsetHeight,addClass(this._movingEle,_RangeSlider._RANGESLIDER_HANDLE_ACTIVE)):this._range=this._maxPos-this._minPos,t.preventDefault())}_onDocMouseMove(t){if(this._isVisible&&this._startPt){var i=t instanceof MouseEvent?new Point(t.pageX,t.pageY):new Point(t.changedTouches[0].pageX,t.changedTouches[0].pageY);this._onMove(i)}}_onMove(t){var i,s=this._startPt,e=this._movingOffset,a=this._plotBox,n=this._range,h=this._movingEle,r=this._minHandler,_=this._rangeHandler,o=this._maxHandler;s&&e&&((i=this._isHorizontal?(e.left+t.x-s.x-a.x)/a.width:1-(e.top+t.y-s.y-a.y)/a.height)<0?i=0:i>1&&(i=1),h===r?this._seamless&&0===this._minScale&&i>=this._maxPos?(this._minPos=this._maxPos,this._movingEle=o,removeClass(this._minHandler,_RangeSlider._RANGESLIDER_HANDLE_ACTIVE),addClass(this._maxHandler,_RangeSlider._RANGESLIDER_HANDLE_ACTIVE)):(i>this._maxPos-this._minScale&&(i=this._maxPos-this._minScale),i<this._maxPos-this._maxScale&&(i=this._maxPos-this._maxScale),this._minPos=i):h===o?this._seamless&&0===this._minScale&&i<=this._minPos?(this._maxPos=this._minPos,this._movingEle=r,removeClass(this._maxHandler,_RangeSlider._RANGESLIDER_HANDLE_ACTIVE),addClass(this._minHandler,_RangeSlider._RANGESLIDER_HANDLE_ACTIVE)):(i<this._minPos+this._minScale&&(i=this._minPos+this._minScale),i>this._minPos+this._maxScale&&(i=this._minPos+this._maxScale),this._maxPos=i):h===_&&(this._isHorizontal?(this._minPos=i,this._maxPos=this._minPos+n,this._maxPos>=1&&(this._maxPos=1,this._minPos=this._maxPos-n)):(this._maxPos=i,this._minPos=this._maxPos-n,this._minPos<=0&&(this._minPos=0,this._maxPos=this._minPos+n))),this._updateElesPosition(),this.onRangeChanging())}_onDocMouseup(t){this._isVisible&&(this._clearInterval(),this._isBtnMousedown=!1,this._startPt&&(this.onRangeChanged(),this._startPt=null,this._movingOffset=null),removeClass(this._minHandler,_RangeSlider._RANGESLIDER_HANDLE_ACTIVE),removeClass(this._maxHandler,_RangeSlider._RANGESLIDER_HANDLE_ACTIVE))}_onRangeSpaceMousedown(t){var i=t instanceof MouseEvent?new Point(t.pageX,t.pageY):new Point(t.changedTouches[0].pageX,t.changedTouches[0].pageY),s=getElementRect(this._rsContent),e=getElementRect(this._rangeHandler),a=t.srcElement||t.target,n=0;t.stopPropagation(),t.preventDefault(),a!==this._rsContent&&a!==this._rsEle||(this._isHorizontal?(n=e.width/s.width,i.x<e.left?n*=-1:i.x>e.left+e.width&&(n*=1)):(n=e.height/s.height,i.y<e.top?n*=1:i.y>e.top+e.height&&(n*=-1)),0!==n&&this._doSliding(n,i))}_onRangeMouseleave(t){t.stopPropagation(),t.preventDefault(),this._isBtnMousedown&&(this._clearInterval(),this.onRangeChanged())}_onBtnMousedown(t){var i=t.srcElement||t.target,s=0;if(t.stopPropagation(),t.preventDefault(),hasClass(i,_RangeSlider._RANGESLIDER_DECBTN)){if(0===this._minPos)return;s=-.05}else if(hasClass(i,_RangeSlider._RANGESLIDER_INCBTN)){if(1===this._maxPos)return;s=.05}this._isBtnMousedown=!0,0!==s&&this._doSliding(s)}_refresh(t){var i,s,e=0,a=getElementRect(this._rsContainer);t&&(this._rangeSliderRect=t),this._rangeSliderRect&&(this._hasButtons&&this._buttonsVisible?(this._decBtn.style.display="block",this._incBtn.style.display="block",e=this._isHorizontal?this._decBtn.offsetWidth+this._minHandler.offsetWidth/2:this._decBtn.offsetHeight+this._minHandler.offsetHeight/2):(this._hasButtons&&(this._decBtn.style.display="none",this._incBtn.style.display="none"),e=this._isHorizontal?this._minHandler.offsetWidth/2:this._minHandler.offsetHeight/2),i=this._getRsRect(),this._isHorizontal?(i.left-=this._minHandler.offsetWidth/2,i.width+=this._minHandler.offsetWidth,s={left:e,width:i.width-2*e}):(i.top-=this._minHandler.offsetHeight/2,i.height+=this._minHandler.offsetHeight,s={top:e,height:i.height-2*e}),setCss(this._rsEle,i),setCss(this._rsContent,s),a=getElementRect(this._rsContent),this._plotBox={x:a.left,y:a.top,width:a.width,height:a.height},this._updateElesPosition())}_updateElesPosition(){var t,i,s,e=this._minHandler,a=(this._rangeHandler,this._maxHandler),n=this._plotBox,h=this._isHorizontal;n&&(t=h?{left:this._minPos*n.width-.5*e.offsetWidth}:{top:(1-this._minPos)*n.height-.5*a.offsetHeight},i=h?{left:this._minPos*n.width,width:(this._maxPos-this._minPos)*n.width}:{top:(1-this._maxPos)*n.height,height:(this._maxPos-this._minPos)*n.height},s=h?{left:this._maxPos*n.width-.5*a.offsetWidth}:{top:(1-this._maxPos)*n.height-.5*e.offsetHeight},this._refreshSlider(t,i,s))}_refreshSlider(t,i,s){setCss(this._minHandler,t),setCss(this._rangeHandler,i),setCss(this._maxHandler,s)}_invalidate(){var t,i;this._rsContainer&&(t=this._isHorizontal?_RangeSlider._HRANGESLIDER:_RangeSlider._VRANGESLIDER,i=this._isHorizontal?_RangeSlider._VRANGESLIDER:_RangeSlider._HRANGESLIDER,removeClass(this._rsEle,i),addClass(this._rsEle,t),[this._rsEle,this._rsContent,this._minHandler,this._maxHandler,this._rangeHandler].forEach(t=>{t.removeAttribute("style")}),this._refresh())}_changeRange(t){var i=this._maxPos-this._minPos;t<0&&0===this._minPos||t>0&&1===this._maxPos||(t<0?(this._minPos+=t,this._minPos=this._minPos<0?0:this._minPos,this._maxPos=this._minPos+i):(this._maxPos+=t,this._maxPos=this._maxPos>1?1:this._maxPos,this._minPos=this._maxPos-i),this._updateElesPosition())}_doSliding(t,i){getElementRect(this._rsContent),getElementRect(this._rangeHandler);this._clearInterval(),this._startPt=new Point,this._changeRange(t),this.onRangeChanged(),this._setSlidingInterval(t,i)}_setSlidingInterval(t,i){var s,e=this;this._slidingInterval=window.setInterval(function(){if(i)if(getElementRect(e._rsContent),s=getElementRect(e._rangeHandler),e._isHorizontal){if(i.x>=s.left&&i.x<=s.left+s.width)return void e._clearInterval()}else if(i.y>=s.top&&i.y<=s.top+s.height)return void e._clearInterval();e._changeRange(t),e.onRangeChanged()},200)}_clearInterval(){this._slidingInterval&&window.clearInterval(this._slidingInterval)}_getRsRect(){var t=this._rangeSliderRect,i={};if(t)return["left","top","width","height"].forEach(function(s){t[s]&&(i[s]=t[s])}),i}};_RangeSlider._HRANGESLIDER="wj-chart-hrangeslider",_RangeSlider._VRANGESLIDER="wj-chart-vrangeslider",_RangeSlider._RANGESLIDER_DECBTN="wj-rangeslider-decbtn",_RangeSlider._RANGESLIDER_INCBTN="wj-rangeslider-incbtn",_RangeSlider._RANGESLIDER_RANGEHANDLE="wj-rangeslider-rangehandle",_RangeSlider._RANGESLIDER_MINHANDLE="wj-rangeslider-minhandle",_RangeSlider._RANGESLIDER_MAXHANDLE="wj-rangeslider-maxhandle",_RangeSlider._RANGESLIDER_HANDLE_ACTIVE="wj-rangeslider-handle-active";export var Orientation;!function(t){t[t.X=0]="X",t[t.Y=1]="Y"}(Orientation||(Orientation={}));export class RangeSelector{constructor(t,i){this._isVisible=!0,this._orientation=Orientation.X,this._seamless=!1,this._minScale=0,this._maxScale=1,this.rangeChanged=new Event,this._chart=asType(t,FlexChartCore,!1),this._createRangeSelector(),copy(this,i)}get isVisible(){return this._isVisible}set isVisible(t){t!=this._isVisible&&(this._isVisible=asBoolean(t),this._rangeSlider&&(this._rangeSlider.isVisible=t))}get min(){return this._min}set min(t){if((t=asNumber(t,!0,!1))!=this._min){var i=!1;null==t||void 0===t||isNaN(t)||null==this._max?(this._min=t,i=!0):(t<=this._max||void 0===this._max)&&(this._min=t,i=!0),this._rangeSlider&&i&&this._changeRange()}}get max(){return this._max}set max(t){if((t=asNumber(t,!0,!1))!=this._max){var i=!1;null==t||isNaN(t)?(this._max=t,i=!0):(t>=this._min||void 0===this._min)&&(this._max=t,i=!0),this._rangeSlider&&i&&this._changeRange()}}get orientation(){return this._orientation}set orientation(t){(t=asEnum(t,Orientation))!==this._orientation&&(this._orientation=t,this._rangeSlider&&(this._rangeSlider.isHorizontal=t==Orientation.X))}get seamless(){return this._seamless}set seamless(t){(t=asBoolean(t,!0))!=this._seamless&&(this._seamless=t,this._rangeSlider&&(this._rangeSlider.seamless=t))}get minScale(){return this._minScale}set minScale(t){(t=asNumber(t))<=1&&t>=0&&t!=this._minScale&&t<this._maxScale&&(this._minScale=t,this._rangeSlider&&(this._rangeSlider.minScale=asNumber(t),this._updateMinAndMaxWithScale(!0)))}get maxScale(){return this._maxScale}set maxScale(t){(t=asNumber(t))<=1&&t>=0&&t!=this._maxScale&&t>this._minScale&&(this._maxScale=t,this._rangeSlider&&(this._rangeSlider.maxScale=asNumber(t),this._updateMinAndMaxWithScale(!0)))}remove(){this._rangeSelectorEle&&(this._chart.hostElement.removeChild(this._rangeSelectorEle),this._switchEvent(!1),this._rangeSelectorEle=null,this._rangeSlider=null)}onRangeChanged(t){this.rangeChanged.raise(this,t)}_createRangeSelector(){var t=this._chart.hostElement,i=this._orientation===Orientation.X;this._rangeSelectorEle=createElement('<div class="wj-chart-rangeselector-container"></div>'),this._rangeSlider=new _RangeSlider(this._rangeSelectorEle,!1,!1,{isHorizontal:i,isVisible:this._isVisible,seamless:this._seamless}),t.appendChild(this._rangeSelectorEle),this._switchEvent(!0)}_switchEvent(t){var i=t?"addHandler":"removeHandler";this._chart.hostElement&&(this._rangeSlider.rangeChanged[i](this._updateRange,this),this._chart.rendered[i](this._refresh,this))}_refresh(){var t,i,s,e=this._chart.hostElement,a=getElementRect(this._rangeSelectorEle);t=e.querySelector("."+FlexChart._CSS_PLOT_AREA),i=getElementRect(t),(s=t.getBBox())&&s.width&&s.height&&(this._adjustMinAndMax(),this._rangeSlider._refresh({left:s.x,top:i.top-a.top,width:s.width,height:s.height}))}_adjustMinAndMax(){var t=this._chart,i=this._rangeSlider,s=this._min,e=this._max,a=this._orientation===Orientation.X?t.axisX:t.axisY,n=isDate(a.actualMin)?a.actualMin.valueOf():a.actualMin,h=isDate(a.actualMax)?a.actualMax.valueOf():a.actualMax;this._min=null===s||isNaN(s)||void 0===s||s<n||s>h?n:s,this._max=null===e||isNaN(e)||void 0===e||e<n||e>h?h:e;var r=this._chart._plotRect;if(r){let t,s;this._orientation===Orientation.X?(t=(a.convert(this._min)-r.left)/r.width,s=(a.convert(this._max)-r.left)/r.width):(t=(r.top-a.convert(this._min))/r.height+1,s=(r.top-a.convert(this._max))/r.height+1),i._minPos=isNaN(t)?0:t,i._maxPos=isNaN(s)?1:s,this._updateMinAndMaxWithScale(!1)}}_updateMinAndMaxWithScale(t){var i,s=this._rangeSlider,e=!1;if(0!==this._minScale&&s._minPos+this._minScale>s._maxPos&&((i=s._minPos+this._minScale)>1?(s._maxPos=1,s._minPos=1-this._minScale):s._maxPos=i,e=!0),1!==this._maxScale&&s._minPos+this._maxScale<s._maxPos&&((i=s._minPos+this._maxScale)>1?(s._maxPos=1,s._minPos=1-this._maxScale):s._maxPos=i,e=!0),e){var a=this._getMinAndMax();this._min=a.min,this._max=a.max,t&&this._rangeSelectorEle&&(this._rangeSlider._refresh(),this.onRangeChanged())}}_changeRange(){this._adjustMinAndMax(),this._rangeSelectorEle&&(this._rangeSlider._refresh(),this.onRangeChanged())}_updateRange(){var t;this._rangeSlider;t=this._chart,this._orientation===Orientation.X?t.axisX:t.axisY;var i=this._getMinAndMax();this._min=i.min,this._max=i.max,this.onRangeChanged()}_getMinAndMax(){var t=this._rangeSlider,i=this._chart,s=i._plotRect,e=null,a=null;return s&&(this._orientation===Orientation.X?(e=i.axisX.convertBack(s.left+t._minPos*s.width),a=i.axisX.convertBack(s.left+t._maxPos*s.width)):(e=i.axisY.convertBack(s.top+(1-t._minPos)*s.height),a=i.axisY.convertBack(s.top+(1-t._maxPos)*s.height))),{min:e,max:a}}};_registerModule("wijmo.chart.interaction",selfModule);