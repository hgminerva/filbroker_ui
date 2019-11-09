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

import{getElementRect,Point,setCss,removeClass,addClass,hasClass,createElement,Event,asNumber,asBoolean,copy,assert,isArray,toggleClass,isDate,asEnum,asType,_registerModule}from"wijmo/wijmo";import{FlexChartCore,FlexChart}from"wijmo/wijmo.chart";import*as selfModule from"wijmo/wijmo.chart.interaction";export var MouseAction;!function(t){t[t.Zoom=0]="Zoom",t[t.Pan=1]="Pan"}(MouseAction||(MouseAction={}));export var InteractiveAxes;!function(t){t[t.X=0]="X",t[t.Y=1]="Y",t[t.XY=2]="XY"}(InteractiveAxes||(InteractiveAxes={}));var ChartGestures=function(){function t(t,i){this._chart=null,this._zoomEle=null,this._overlayEle=null,this._wrapperMousedown=null,this._wrapperMouseMove=null,this._wrapperMouseup=null,this._wrapperPointerdown=null,this._wrapperPointerMove=null,this._wrapperPointerup=null,this._wrapperTouchStart=null,this._wrapperTouchMove=null,this._wrapperTouchEnd=null,this._wrapperMouseWheel=null,this._startFirstPt=null,this._minX=null,this._maxX=null,this._minY=null,this._maxY=null,this._threadHold=20,this._clip={},this._selection={},this._startPointers=[],this._mvPointers=[],this._pinchStartEvents=[],this._minXRange=null,this._minYRange=null,this._innerUpdating=!1,this._lastMinX=null,this._lastMaxX=null,this._lastMinY=null,this._lastMaxY=null,this._mouseAction=MouseAction.Zoom,this._interactiveAxes=InteractiveAxes.X,this._enable=!0,this._scaleX=1,this._scaleY=1,this._posX=0,this._posY=0,t||assert(!1,"The FlexChart cannot be null."),this._chart=t,copy(this,i),this._initialize()}return Object.defineProperty(t.prototype,"mouseAction",{get:function(){return this._mouseAction},set:function(t){this._mouseAction=asEnum(t,MouseAction)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"interactiveAxes",{get:function(){return this._interactiveAxes},set:function(t){t!==this._interactiveAxes&&(this._interactiveAxes=asEnum(t,InteractiveAxes))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"enable",{get:function(){return this._enable},set:function(t){t!==this._enable&&(this._enable=asBoolean(t,!0))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"scaleX",{get:function(){return this._scaleX},set:function(t){t!==this._scaleX&&(this._scaleX=t<0?0:t>1?1:asNumber(t),this._seriesGroup&&this._initAxisRangeWithPosAndScale(!0))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"scaleY",{get:function(){return this._scaleY},set:function(t){t!==this._scaleY&&(this._scaleY=t<0?0:t>1?1:asNumber(t),this._seriesGroup&&this._initAxisRangeWithPosAndScale(!1))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"posX",{get:function(){return this._posX},set:function(t){t!==this._posX&&(this._posX=t<0?0:t>1?1:asNumber(t),this._seriesGroup&&this._initAxisRangeWithPosAndScale(!0))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"posY",{get:function(){return this._posY},set:function(t){t!==this._posY&&(this._posY=t<0?0:t>1?1:asNumber(t),this._seriesGroup&&this._initAxisRangeWithPosAndScale(!1))},enumerable:!0,configurable:!0}),t.prototype.remove=function(){this._zoomEle&&(this._chart.hostElement.removeChild(this._zoomEle),this._zoomEle=null),removeClass(this._chart.hostElement,t._CSS_TOUCH_DISABLED),this._switchEvent(!1),this._wrapperMousedown=null,this._wrapperMouseMove=null,this._wrapperMouseup=null,this._wrapperPointerdown=null,this._wrapperPointerMove=null,this._wrapperPointerup=null,this._wrapperTouchStart=null,this._wrapperTouchMove=null,this._wrapperTouchEnd=null,this._wrapperMouseWheel=null},t.prototype.reset=function(){var t=this._chart,i=t.axisX,e=t.axisY;this._maxX&&(i.max=this._maxX),this._minX&&(i.min=this._minX),this._maxY&&(e.max=this._maxY),this._minY&&(e.min=this._minY),this._initAxisRangeWithPosAndScale(!0),this._initAxisRangeWithPosAndScale(!1)},t.prototype._refreshChart=function(){var t=this._chart,i=t.axisX,e=t.axisY;this._minX=this._getAxisMin(i),this._maxX=this._getAxisMax(i),this._minY=this._getAxisMin(e),this._maxY=this._getAxisMax(e),this._minXRange=.005*(this._maxX-this._minX),this._minYRange=.005*(this._maxY-this._minY),this._initAxisRangeWithPosAndScale(!0),this._initAxisRangeWithPosAndScale(!1)},t.prototype._initialize=function(){var i=this._chart.hostElement;this._zoomEle=createElement('<div class="'+t._CSS_ZOOM+'"><div class="'+t._CSS_ZOOM_OVERLAY+'"></div>'),this._zoomEle.style.visibility="visible",i.appendChild(this._zoomEle),addClass(i,t._CSS_TOUCH_DISABLED),this._overlayEle=this._zoomEle.querySelector("."+t._CSS_ZOOM_OVERLAY),this._wrapperMousedown=this._onMousedown.bind(this),this._wrapperMouseMove=this._onMouseMove.bind(this),this._wrapperMouseup=this._onMouseup.bind(this),this._wrapperPointerdown=this._onPointerdown.bind(this),this._wrapperPointerMove=this._onPointerMove.bind(this),this._wrapperPointerup=this._onPointerup.bind(this),this._wrapperMouseWheel=this._onMouseWheel.bind(this),this._wrapperTouchStart=this._onTouchStart.bind(this),this._wrapperTouchMove=this._onTouchMove.bind(this),this._wrapperTouchEnd=this._onTouchEnd.bind(this),this._switchEvent(!0)},t.prototype._switchEvent=function(t){var i=this._chart.hostElement,e=t?"addEventListener":"removeEventListener",s=t?"addHandler":"removeHandler";i&&(i[e]("mousedown",this._wrapperMousedown),i[e]("mousemove",this._wrapperMouseMove),document[e]("mouseup",this._wrapperMouseup),"onpointerdown"in window&&(i[e]("pointerdown",this._wrapperPointerdown),i[e]("pointermove",this._wrapperPointerMove),document[e]("pointerup",this._wrapperPointerup)),i[e]("wheel",this._wrapperMouseWheel),"ontouchstart"in window&&(i[e]("touchstart",this._wrapperTouchStart),i[e]("touchmove",this._wrapperTouchMove),document[e]("touchend",this._wrapperTouchEnd)),this._chart.rendered[s](this._refresh,this))},t.prototype._refresh=function(){var t,i,e,s=this._chart,n=s.axisX,a=s.axisY,o=s.hostElement;this._seriesGroup=o.querySelector(".wj-series-group"),t=o.querySelector("."+FlexChart._CSS_PLOT_AREA),this._plotOffset=getElementRect(t),this._plotBox=t.getBBox(),this._zoomEleOffset=getElementRect(this._zoomEle),this._overlayEle&&this._overlayEle.removeAttribute("style"),this._innerUpdating?this._innerUpdating=!1:(i=!1,e=!1,(null===this._minX||isNaN(this._minX)||0===this._minX||-1===this._minX||this._lastMinX!==this._getAxisMin(n))&&(this._minX=this._getAxisMin(n),null===this._minX||isNaN(this._minX)||0===this._minX||-1===this._minX||(i=!0)),(null===this._maxX||isNaN(this._maxX)||0===this._maxX||-1===this._maxX||this._lastMaxX!==this._getAxisMax(n))&&(this._maxX=this._getAxisMax(n),null===this._maxX||isNaN(this._maxX)||0===this._maxX||-1===this._maxX||(i=!0)),(null===this._minY||isNaN(this._minY)||this._lastMinY!==this._getAxisMin(a))&&(this._minY=this._getAxisMin(a),isNaN(this._minY)||(e=!0)),(null===this._maxY||isNaN(this._maxY)||this._lastMaxY!==this._getAxisMax(a))&&(this._maxY=this._getAxisMax(a),isNaN(this._maxY)||(e=!0)),this._minXRange=.005*(this._maxX-this._minX),this._minYRange=.005*(this._maxY-this._minY),i&&null!==this._scaleX&&void 0!==this._scaleX&&1!==this._scaleX&&null!==this._posX&&void 0!==this._posX&&0!==this._posX&&this._initAxisRangeWithPosAndScale(!0),e&&null!==this._scaleY&&void 0!==this._scaleY&&1!==this._scaleY&&null!==this._posY&&void 0!==this._posY&&0!==this._posY&&this._initAxisRangeWithPosAndScale(!1))},t.prototype._onMousedown=function(t){this._enable&&(this._disabledOthersInteraction(!0),this._mouseDown(t),t.preventDefault())},t.prototype._onMouseMove=function(t){this._enable&&(this._mouseMove(t),t.preventDefault())},t.prototype._onMouseup=function(t){this._enable&&(this._mouseup(t),this._disabledOthersInteraction(!1))},t.prototype._onMouseWheel=function(t){var i=-t.deltaY>0?.05:-.05;this._enable&&(this._scaling=!0,this._interactiveAxes!==InteractiveAxes.X&&this._interactiveAxes!==InteractiveAxes.XY||this._updateAxisByChg(!0,i,-i),this._interactiveAxes!==InteractiveAxes.Y&&this._interactiveAxes!==InteractiveAxes.XY||this._updateAxisByChg(!1,i,-i),this._scaling=!1,t.preventDefault())},t.prototype._mouseDown=function(i){this._startFirstPt=this._getPoint(i),this._updatePoint(this._startFirstPt),this._mouseAction===MouseAction.Zoom?this._initOverlay():(this._seriesGroup.setAttribute("clip-path","url(#"+this._chart._plotrectId+")"),toggleClass(this._chart.hostElement,t._CSS_PANABLE,this._mouseAction===MouseAction.Pan))},t.prototype._mouseMove=function(t){var i;this._startFirstPt&&(i=this._getPoint(t),this._updatePoint(i),this._endPoint=new Point(i.x,i.y),this._mouseAction===MouseAction.Zoom?this._updateOverLay(i):(this._panning=!0,this._panningChart(i.x-this._startFirstPt.x,i.y-this._startFirstPt.y)))},t.prototype._mouseup=function(i){var e=this._endPoint;this._chart.axisX;if(!this._startFirstPt||!e)return removeClass(this._chart.hostElement,t._CSS_PANABLE),void this._reset();this._mouseAction===MouseAction.Zoom?(this._zoomedChart(e),this._reset()):(this._pannedChart(e.x-this._startFirstPt.x,e.y-this._startFirstPt.y),this._reset()),removeClass(this._chart.hostElement,t._CSS_PANABLE)},t.prototype._onPointerdown=function(t){if(this._enable){switch(this._disabledOthersInteraction(!0),t.pointerType){case"touch":this._pointerDown(t);break;case"mouse":this._mouseDown(t)}t.preventDefault()}},t.prototype._onPointerMove=function(t){if(this._enable){switch(t.pointerType){case"touch":this._pointerMove(t);break;case"mouse":this._mouseMove(t)}t.preventDefault()}},t.prototype._onPointerup=function(t){if(this._enable){switch(t.pointerType){case"touch":this._pointerUp(t);break;case"mouse":this._mouseup(t)}this._disabledOthersInteraction(!1),t.preventDefault()}},t.prototype._pointerDown=function(t){t.preventManipulation&&t.preventManipulation(),this._seriesGroup.setAttribute("clip-path","url(#"+this._chart._plotrectId+")"),this._startPointers.push({id:t.pointerId,x:t.pageX,y:t.pageY}),1===this._startPointers.length?(this._scaling=!1,this._panning=!0):2===this._startPointers.length&&(this._panning=!1,this._scaling=!0,this._startDistance={x:this._startPointers[0].x-this._startPointers[1].x,y:this._startPointers[0].y-this._startPointers[1].y})},t.prototype._pointerMove=function(t){var i,e,s,n,a=new Point(t.pageX,t.pageY),o={},h={};if(t.preventManipulation&&t.preventManipulation(),this._panning){if(!this._pointInPlotArea(a))return;this._endPoint=new Point(t.pageX,t.pageY),this._panningChart(this._endPoint.x-this._startPointers[0].x,this._endPoint.y-this._startPointers[0].y)}else this._scaling&&(i=this._startPointers[0].id+"",e=this._startPointers[1].id+"",this._mvPointers[t.pointerId+""]={x:t.pageX,y:t.pageY},this._mvPointers[i]&&this._mvPointers[e]&&(Math.abs(this._startDistance.x)>this._threadHold&&this._interactiveAxes!==InteractiveAxes.Y&&(s=this._mvPointers[i].x-this._plotOffset.left,n=this._startPointers[0].x-this._plotOffset.left,h.x=Math.abs((this._mvPointers[i].x-this._mvPointers[e].x)/this._startDistance.x),o.x=s-h.x*n,this._clip.x=(this._plotBox.x-s)/h.x+n,this._selection.w=this._plotBox.width/h.x),Math.abs(this._startDistance.y)>this._threadHold&&this._interactiveAxes!==InteractiveAxes.X&&(s=this._mvPointers[i].y-this._plotOffset.top,n=this._startPointers[0].y-this._plotOffset.top,h.y=Math.abs((this._mvPointers[i].y-this._mvPointers[e].y)/this._startDistance.y),o.y=s-h.y*n,this._clip.y=(this._plotBox.y-s)/h.y+n,this._selection.h=this._plotBox.height/h.y),this._scalingChart(h,o)))},t.prototype._pointerUp=function(t){t.preventManipulation&&t.preventManipulation(),this._panning?(this._endPoint&&this._pannedChart(this._endPoint.x-this._startPointers[0].x,this._endPoint.y-this._startPointers[0].y),this._reset()):this._scaling&&(this._scaledChart(t),this._reset())},t.prototype._onTouchStart=function(t){if(this._enable)return this._disabledOthersInteraction(!0),1==t.touches.length?(this._scaling=!1,this._panning=!0,this._startFirstPt=this._getPoint(t)):2==t.touches.length&&(this._pinchStartEvents=this._getTouchPair(t),this._startDistance=this._touchDistance(t),this._panning=!1,this._scaling=!0),this._seriesGroup&&this._seriesGroup.setAttribute("clip-path","url(#"+this._chart._plotrectId+")"),this._chart._hideToolTip(),!0},t.prototype._onTouchMove=function(t){if(this._enable){var i,e,s,n,a,o={},h={},r=t.touches[0],_=new Point(r.pageX,r.pageY);if(t.preventDefault(),this._panning){if(this._startFirstPt){if(!this._pointInPlotArea(_))return;this._endPoint=new Point(r.pageX,r.pageY),this._panningChart(this._endPoint.x-this._startFirstPt.x,this._endPoint.y-this._startFirstPt.y)}}else this._scaling&&(s=this._touchDistance(t),n=this._getTouchPair(t)[0],a=this._pinchStartEvents[0],Math.abs(this._startDistance.x)>this._threadHold&&this._interactiveAxes!==InteractiveAxes.Y&&(i=n.pageX-this._plotOffset.left,e=a.pageX-this._plotOffset.left,o.x=Math.abs(s.x/this._startDistance.x),h.x=i-o.x*e,this._clip.x=(this._plotBox.x-i)/o.x+e,this._selection.w=this._plotBox.width/o.x),Math.abs(this._startDistance.y)>this._threadHold&&this._interactiveAxes!==InteractiveAxes.X&&(i=n.pageY-this._plotOffset.top,e=a.pageY-this._plotOffset.top,o.y=Math.abs(s.y/this._startDistance.y),h.y=i-o.y*e,this._clip.y=(this._plotBox.y-i)/o.y+e,this._selection.h=this._plotBox.height/o.y),this._scalingChart(o,h));return!0}},t.prototype._onTouchEnd=function(t){if(this._enable){var i=this._endPoint;if(this._panning){if(!this._startFirstPt||!i)return void this._reset();this._pannedChart(i.x-this._startFirstPt.x,i.y-this._startFirstPt.y)}else this._scaling&&this._scaledChart(t);return this._reset(),this._disabledOthersInteraction(!1),!0}},t.prototype._initOverlay=function(){switch(this._zoomEle.style.visibility="visible",this._interactiveAxes){case InteractiveAxes.X:this._overlayEle.style.left=this._startFirstPt.x-this._zoomEleOffset.left+"px",this._overlayEle.style.top=this._plotOffset.top-this._zoomEleOffset.top+"px";break;case InteractiveAxes.Y:this._overlayEle.style.left=this._plotBox.x+"px",this._overlayEle.style.top=this._startFirstPt.y-this._zoomEleOffset.top+"px";break;case InteractiveAxes.XY:this._overlayEle.style.left=this._startFirstPt.x-this._zoomEleOffset.left+"px",this._overlayEle.style.top=this._startFirstPt.y-this._zoomEleOffset.top+"px"}},t.prototype._updateOverLay=function(t){var i=this._startFirstPt.x-t.x,e=this._startFirstPt.y-t.y,s={};switch(this._interactiveAxes){case InteractiveAxes.X:if(Math.abs(i)<this._threadHold)return;s=i<=0?{width:Math.abs(i)+"px",height:this._plotBox.height+"px"}:{left:t.x-this._zoomEleOffset.left+"px",width:i+"px",height:this._plotBox.height+"px"};break;case InteractiveAxes.Y:if(Math.abs(e)<this._threadHold)return;s=e<=0?{height:Math.abs(e)+"px",width:this._plotBox.width+"px"}:{top:t.y-this._zoomEleOffset.top+"px",height:e+"px",width:this._plotBox.width+"px"};break;case InteractiveAxes.XY:Math.abs(i)>=this._threadHold&&(s.width=Math.abs(i)+"px",i>0&&(s.left=t.x-this._zoomEleOffset.left+"px")),Math.abs(e)>=this._threadHold&&(s.height=Math.abs(e)+"px",e>0&&(s.top=t.y-this._zoomEleOffset.top+"px"))}setCss(this._overlayEle,s)},t.prototype._updatePoint=function(t){var i=this._plotOffset;t.x<i.left&&(t.x=i.left),t.x>i.left+i.width&&(t.x=i.left+i.width),t.y<i.top&&(t.y=i.top),t.y>i.top+i.height&&(t.y=i.top+i.height)},t.prototype._pointInPlotArea=function(t){var i=this._plotOffset;return t.x>=i.left&&t.x<=i.left+i.width&&t.y>=i.top&&t.y<=i.top+i.height},t.prototype._zoomedChart=function(t){t&&(this._interactiveAxes!==InteractiveAxes.X&&this._interactiveAxes!==InteractiveAxes.XY||this._zoomedAxis(t,!0),this._interactiveAxes!==InteractiveAxes.Y&&this._interactiveAxes!==InteractiveAxes.XY||this._zoomedAxis(t,!1),this._startFirstPt=null)},t.prototype._zoomedAxis=function(t,i){var e,s,n=i?this._chart.axisX:this._chart.axisY,a=i?"x":"y",o=i?"left":"top";t&&Math.abs(this._startFirstPt[a]-t[a])>this._threadHold&&(e=n.convertBack(this._startFirstPt[a]-this._plotOffset[o]+this._plotBox[a]),(s=n.convertBack(t[a]-this._plotOffset[o]+this._plotBox[a]))-e!=0&&this._updateAxisRange(n,Math.min(e,s),Math.max(e,s)))},t.prototype._panningChart=function(t,i){var e=this._chart.axisX,s=this._chart.axisY,n=this._getTransFormGroups();t=Math.abs(t)<this._threadHold?0:t,i=Math.abs(i)<this._threadHold?0:i,this._interactiveAxes===InteractiveAxes.X&&(i=0),this._interactiveAxes===InteractiveAxes.Y&&(t=0),t>0&&e.actualMin.valueOf()===this._minX&&(t=0),t<0&&e.actualMax.valueOf()===this._maxX&&(t=0),i>0&&s.actualMax.valueOf()===this._maxY&&(i=0),i<0&&s.actualMin.valueOf()===this._minY&&(i=0);for(var a=0;a<n.length;a++)n[a].setAttribute("transform","translate("+t+","+i+")")},t.prototype._pannedChart=function(t,i){this._interactiveAxes!==InteractiveAxes.X&&this._interactiveAxes!==InteractiveAxes.XY||this._updateAxisByDistance(!0,t),this._interactiveAxes!==InteractiveAxes.Y&&this._interactiveAxes!==InteractiveAxes.XY||this._updateAxisByDistance(!1,-i)},t.prototype._scalingChart=function(t,i){var e,s,n,a=this._chart.axisX,o=this._chart.axisY,h=void 0!==i.x?i.x:0,r=void 0!==i.y?i.y:0;if(t){e=this._getTransFormGroups(),void 0!==t.x&&t.x<1&&a.actualMin.valueOf()===this._minX&&a.actualMax.valueOf()===this._maxX&&(t.x=1,h=0),void 0!==t.y&&t.y<1&&o.actualMin.valueOf()===this._minY&&o.actualMax.valueOf()===this._maxY&&(t.y=1,r=0),s=void 0!==t.x?t.x:1,n=void 0!==t.y?t.y:1;for(var _=0;_<e.length;_++)e[_].setAttribute("transform","translate("+h+", "+r+") scale("+s+", "+n+")")}},t.prototype._scaledChart=function(t){var i,e,s=this._chart,n=s.axisX,a=s.axisY;this._clip&&(this._interactiveAxes!==InteractiveAxes.Y&&void 0!==this._clip.x&&(i=Math.max(this._minX,n.convertBack(this._clip.x)))-(e=Math.min(this._maxX,n.convertBack(this._clip.x+this._selection.w)))!=0&&this._updateAxisRange(n,i,e),this._interactiveAxes!==InteractiveAxes.X&&void 0!==this._clip.y&&(e=Math.min(this._maxY,a.convertBack(this._clip.y)),(i=Math.max(this._minY,a.convertBack(this._clip.y+this._selection.h)))-e!=0&&this._updateAxisRange(a,i,e)))},t.prototype._updateAxisByDistance=function(t,i){var e,s=t?this._chart.axisX:this._chart.axisY,n=t?this._minX:this._minY,a=t?this._maxX:this._maxY,o=s.actualMin.valueOf(),h=s.actualMax.valueOf();if(0!==i){if(i>0&&n===o||i<0&&a===h)return this._innerUpdating=!0,void this._chart.invalidate();e=i/(t?this._plotBox.width:this._plotBox.height),this._updateAxisByChg(t,-e,-e)}},t.prototype._updateAxisByChg=function(t,i,e){var s,n,a=t?this._chart.axisX:this._chart.axisY,o=t?this._minX:this._minY,h=t?this._maxX:this._maxY,r=a.actualMin.valueOf(),_=(a.actualMax.valueOf(),this._chart._plotRect),l=t?_.left:_.top,c=t?_.width:_.height,p=t?this._minXRange:this._minYRange;isNaN(i)||isNaN(e)||(this._panning?i<0?(s=t?a.convertBack(l+i*c):a.convertBack(l+c-i*c))<o?(s=o,n=t?a.convertBack(a.convert(s)+c):a.convertBack(a.convert(s)-c)):n=t?a.convertBack(l+c+e*c):a.convertBack(l-e*c):(n=t?a.convertBack(l+c+e*c):a.convertBack(l-e*c))>h?(n=h,s=t?a.convertBack(a.convert(n)-c):a.convertBack(a.convert(n)+c)):s=t?a.convertBack(l+i*c):a.convertBack(l+c-i*c):this._scaling&&(s=t?a.convertBack(l+i*c):a.convertBack(l+c-i*c),n=t?a.convertBack(l+c+e*c):a.convertBack(l-e*c),s<o&&(s=o),n>h&&(n=h),n-s<p&&(s=n-p)),this._updateAxisRange(a,s,n))},t.prototype._initAxisRangeWithPosAndScale=function(t){var i,e,s,n;t?(e=(i=this._maxX-this._minX)*this._scaleX,n=(s=this._minX+this._posX*(i-e))+e,this._innerUpdating=!0,this._chart.axisX.min=s,this._chart.axisX.max=n,this._lastMinX=s,this._lastMaxX=n):(e=(i=this._maxY-this._minY)*this._scaleY,n=(s=this._minY+this._posY*(i-e))+e,this._innerUpdating=!0,this._chart.axisY.min=s,this._chart.axisY.max=n,this._lastMinY=s,this._lastMaxY=n)},t.prototype._updateAxisRange=function(t,i,e){this._chart.beginUpdate(),t.min=i,t.max=e,t===this._chart.axisX?(this._lastMinX=i,this._lastMaxX=e):(this._lastMinY=i,this._lastMaxY=e),this._innerUpdating=!0,this._chart.endUpdate()},t.prototype._reset=function(){this._scaling=!1,this._panning=!1,this._startDistance=0,this._startFirstPt=null,this._pinchStartEvents=[],this._startPointers=[],this._mvPointers=[],this._endPoint=null,this._clip={},this._selection={}},t.prototype._getAxisMin=function(t){return isDate(t.actualMin)?t.actualMin.valueOf():t.actualMin},t.prototype._getAxisMax=function(t){return isDate(t.actualMax)?t.actualMax.valueOf():t.actualMax},t.prototype._getTransFormGroups=function(){var t=this._seriesGroup.querySelectorAll("g[clip-path]");return 0===t.length&&(t=this._seriesGroup.querySelectorAll("g")),t},t.prototype._disabledOthersInteraction=function(i){var e=this._chart.hostElement;if(null!==e&&void 0!==e)for(var s=e.querySelectorAll(".wj-chart-linemarker-container"),n=0;n<s.length;n++)i?addClass(s[n],t._CSS_BLOCK_INTERACTION):removeClass(s[n],t._CSS_BLOCK_INTERACTION)},t.prototype._getPoint=function(t){return t instanceof MouseEvent?new Point(t.pageX,t.pageY):new Point(t.changedTouches[0].pageX,t.changedTouches[0].pageY)},t.prototype._getTouchPair=function(t){var i=[];return isArray(t)?(i[0]=t[0],i[1]=t[1]):"touchend"===t.type?1===t.touches.length?(i[0]=t.touches[0],i[1]=t.changedTouches[0]):0===t.touches.length&&(i[0]=t.changedTouches[0],i[1]=t.changedTouches[1]):(i[0]=t.touches[0],i[1]=t.touches[1]),i},t.prototype._touchDistance=function(t){var i=this._getTouchPair(t),e=0,s=0;return i[0]&&void 0!==i[0].pageX&&i[1]&&void 0!==i[1].pageX&&(e=i[0].pageX-i[1].pageX),i[0]&&void 0!==i[0].pageY&&i[1]&&void 0!==i[1].pageY&&(s=i[0].pageY-i[1].pageY),{x:e,y:s}},t._CSS_ZOOM="wj-zoom",t._CSS_ZOOM_OVERLAY="wj-zoom-overlay",t._CSS_PANABLE="wj-panable",t._CSS_TOUCH_DISABLED="wj-flexchart-touch-disabled",t._CSS_BLOCK_INTERACTION="wj-block-other-interaction",t}();export{ChartGestures};var _RangeSlider=function(){function t(t,i,e,s){this._isVisible=!0,this._buttonsVisible=!0,this._minScale=0,this._maxScale=1,this._seamless=!1,this._rsContainer=null,this._rsEle=null,this._decBtn=null,this._incBtn=null,this._rsContent=null,this._minHandler=null,this._rangeHandler=null,this._maxHandler=null,this._wrapperSliderMousedown=null,this._wrapperDocMouseMove=null,this._wrapperDocMouseup=null,this._wrapperBtnMousedown=null,this._wrapperRangeSpaceMousedown=null,this._wrapperRangeMouseleave=null,this._isTouch=!1,this._slidingInterval=null,this._rangeSliderRect=null,this._isHorizontal=!0,this._isBtnMousedown=!1,this._needSpaceClick=!1,this._hasButtons=!0,this._movingEle=null,this._movingOffset=null,this._range=null,this._startPt=null,this._minPos=0,this._maxPos=1,this.rangeChanged=new Event,this.rangeChanging=new Event,t||assert(!1,"The container cannot be null."),this._isTouch="ontouchstart"in window,this._needSpaceClick=i,this._hasButtons=e,copy(this,s),this._createSlider(t)}return Object.defineProperty(t.prototype,"buttonsVisible",{get:function(){return this._buttonsVisible},set:function(t){if(t!=this._buttonsVisible){if(this._buttonsVisible=asBoolean(t),!this._rsContainer||!this._hasButtons)return;this._refresh()}},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isHorizontal",{get:function(){return this._isHorizontal},set:function(t){if(t!=this._isHorizontal){if(this._isHorizontal=asBoolean(t),!this._rsContainer)return;this._invalidate()}},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isVisible",{get:function(){return this._isVisible},set:function(t){if(t!=this._isVisible){if(this._isVisible=asBoolean(t),!this._rsContainer)return;this._rsContainer.style.visibility=this._isVisible?"visible":"hidden"}},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"minScale",{get:function(){return this._minScale},set:function(t){t>=0&&t!=this._minScale&&(this._minScale=asNumber(t))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"maxScale",{get:function(){return this._maxScale},set:function(t){t>=0&&t!=this._maxScale&&(this._maxScale=asNumber(t))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"seamless",{get:function(){return this._seamless},set:function(t){t!=this._seamless&&(this._seamless=asBoolean(t))},enumerable:!0,configurable:!0}),t.prototype.onRangeChanged=function(t){this.rangeChanged.raise(this,t)},t.prototype.onRangeChanging=function(t){this.rangeChanging.raise(this,t)},Object.defineProperty(t.prototype,"_isSliding",{get:function(){return null!==this._startPt},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_handleWidth",{get:function(){return this._minHandler.offsetWidth},enumerable:!0,configurable:!0}),t.prototype._createSlider=function(i){var e=this._isHorizontal?t._HRANGESLIDER:t._VRANGESLIDER,s=this._isHorizontal?"wj-glyph-left":"wj-glyph-down",n=this._isHorizontal?"wj-glyph-right":"wj-glyph-up";this._rsContainer=i,this._rsContainer.style.visibility=this._isVisible?"visible":"hidden",this._rsEle=createElement('<div class="wj-chart-rangeslider '+e+'"></div>'),this._rsContainer.appendChild(this._rsEle),this._hasButtons&&(this._decBtn=createElement('<button class="wj-rangeslider-decbtn wj-btn wj-btn-default" type="button" tabindex="-1"><span class="'+s+" "+t._RANGESLIDER_DECBTN+'"></span></button>'),this._rsEle.appendChild(this._decBtn),this._incBtn=createElement('<button class="wj-rangeslider-incbtn wj-btn wj-btn-default" type="button" tabindex="-1"><span class="'+n+" "+t._RANGESLIDER_INCBTN+'"></span></button>'),this._rsEle.appendChild(this._incBtn)),this._rsContent=createElement('<div class="wj-rangeslider-content"><div class="wj-rangeslider-rangehandle"></div><div class="wj-rangeslider-minhandle"></div><div class="wj-rangeslider-maxhandle"></div>'),this._rsEle.appendChild(this._rsContent),this._minHandler=this._rsContent.querySelector("."+t._RANGESLIDER_MINHANDLE),this._rangeHandler=this._rsContent.querySelector("."+t._RANGESLIDER_RANGEHANDLE),this._maxHandler=this._rsContent.querySelector("."+t._RANGESLIDER_MAXHANDLE),this._wrapperSliderMousedown=this._onSliderMousedown.bind(this),this._wrapperDocMouseMove=this._onDocMouseMove.bind(this),this._wrapperDocMouseup=this._onDocMouseup.bind(this),this._wrapperRangeSpaceMousedown=this._onRangeSpaceMousedown.bind(this),this._wrapperRangeMouseleave=this._onRangeMouseleave.bind(this),this._wrapperBtnMousedown=this._onBtnMousedown.bind(this),this._switchEvent(!0)},t.prototype._switchEvent=function(t){var i=t?"addEventListener":"removeEventListener";this._rsContainer&&(this._needSpaceClick&&this._rsEle[i]("mousedown",this._wrapperRangeSpaceMousedown),this._rsEle[i]("mouseleave",this._wrapperRangeMouseleave),this._rsContent[i]("mousedown",this._wrapperSliderMousedown),this._hasButtons&&(this._decBtn[i]("mousedown",this._wrapperBtnMousedown),this._incBtn[i]("mousedown",this._wrapperBtnMousedown)),document[i]("mousemove",this._wrapperDocMouseMove),document[i]("mouseup",this._wrapperDocMouseup),"ontouchstart"in window&&(this._needSpaceClick&&this._rsEle[i]("touchstart",this._wrapperRangeSpaceMousedown),this._rsContent[i]("touchstart",this._wrapperSliderMousedown),this._hasButtons&&(this._decBtn[i]("touchstart",this._wrapperBtnMousedown),this._incBtn[i]("touchstart",this._wrapperBtnMousedown)),document[i]("touchmove",this._wrapperDocMouseMove),document[i]("touchend",this._wrapperDocMouseup)))},t.prototype._onSliderMousedown=function(i){this._isVisible&&(this._movingEle=i.srcElement||i.target,this._startPt=i instanceof MouseEvent?new Point(i.pageX,i.pageY):new Point(i.changedTouches[0].pageX,i.changedTouches[0].pageY),removeClass(this._minHandler,t._RANGESLIDER_HANDLE_ACTIVE),removeClass(this._maxHandler,t._RANGESLIDER_HANDLE_ACTIVE),this._movingOffset=getElementRect(this._movingEle),this._movingEle!=this._rangeHandler?(this._isHorizontal?this._movingOffset.left+=.5*this._movingEle.offsetWidth:this._movingOffset.top+=.5*this._movingEle.offsetHeight,addClass(this._movingEle,t._RANGESLIDER_HANDLE_ACTIVE)):this._range=this._maxPos-this._minPos,i.preventDefault())},t.prototype._onDocMouseMove=function(t){if(this._isVisible&&this._startPt){var i=t instanceof MouseEvent?new Point(t.pageX,t.pageY):new Point(t.changedTouches[0].pageX,t.changedTouches[0].pageY);this._onMove(i)}},t.prototype._onMove=function(i){var e,s=this._startPt,n=this._movingOffset,a=this._plotBox,o=this._range,h=this._movingEle,r=this._minHandler,_=this._rangeHandler,l=this._maxHandler;s&&n&&((e=this._isHorizontal?(n.left+i.x-s.x-a.x)/a.width:1-(n.top+i.y-s.y-a.y)/a.height)<0?e=0:e>1&&(e=1),h===r?this._seamless&&0===this._minScale&&e>=this._maxPos?(this._minPos=this._maxPos,this._movingEle=l,removeClass(this._minHandler,t._RANGESLIDER_HANDLE_ACTIVE),addClass(this._maxHandler,t._RANGESLIDER_HANDLE_ACTIVE)):(e>this._maxPos-this._minScale&&(e=this._maxPos-this._minScale),e<this._maxPos-this._maxScale&&(e=this._maxPos-this._maxScale),this._minPos=e):h===l?this._seamless&&0===this._minScale&&e<=this._minPos?(this._maxPos=this._minPos,this._movingEle=r,removeClass(this._maxHandler,t._RANGESLIDER_HANDLE_ACTIVE),addClass(this._minHandler,t._RANGESLIDER_HANDLE_ACTIVE)):(e<this._minPos+this._minScale&&(e=this._minPos+this._minScale),e>this._minPos+this._maxScale&&(e=this._minPos+this._maxScale),this._maxPos=e):h===_&&(this._isHorizontal?(this._minPos=e,this._maxPos=this._minPos+o,this._maxPos>=1&&(this._maxPos=1,this._minPos=this._maxPos-o)):(this._maxPos=e,this._minPos=this._maxPos-o,this._minPos<=0&&(this._minPos=0,this._maxPos=this._minPos+o))),this._updateElesPosition(),this.onRangeChanging())},t.prototype._onDocMouseup=function(i){this._isVisible&&(this._clearInterval(),this._isBtnMousedown=!1,this._startPt&&(this.onRangeChanged(),this._startPt=null,this._movingOffset=null),removeClass(this._minHandler,t._RANGESLIDER_HANDLE_ACTIVE),removeClass(this._maxHandler,t._RANGESLIDER_HANDLE_ACTIVE))},t.prototype._onRangeSpaceMousedown=function(t){var i=t instanceof MouseEvent?new Point(t.pageX,t.pageY):new Point(t.changedTouches[0].pageX,t.changedTouches[0].pageY),e=getElementRect(this._rsContent),s=getElementRect(this._rangeHandler),n=t.srcElement||t.target,a=0;t.stopPropagation(),t.preventDefault(),n!==this._rsContent&&n!==this._rsEle||(this._isHorizontal?(a=s.width/e.width,i.x<s.left?a*=-1:i.x>s.left+s.width&&(a*=1)):(a=s.height/e.height,i.y<s.top?a*=1:i.y>s.top+s.height&&(a*=-1)),0!==a&&this._doSliding(a,i))},t.prototype._onRangeMouseleave=function(t){t.stopPropagation(),t.preventDefault(),this._isBtnMousedown&&(this._clearInterval(),this.onRangeChanged())},t.prototype._onBtnMousedown=function(i){var e=i.srcElement||i.target,s=0;if(i.stopPropagation(),i.preventDefault(),hasClass(e,t._RANGESLIDER_DECBTN)){if(0===this._minPos)return;s=-.05}else if(hasClass(e,t._RANGESLIDER_INCBTN)){if(1===this._maxPos)return;s=.05}this._isBtnMousedown=!0,0!==s&&this._doSliding(s)},t.prototype._refresh=function(t){var i,e,s=0,n=getElementRect(this._rsContainer);t&&(this._rangeSliderRect=t),this._rangeSliderRect&&(this._hasButtons&&this._buttonsVisible?(this._decBtn.style.display="block",this._incBtn.style.display="block",s=this._isHorizontal?this._decBtn.offsetWidth+this._minHandler.offsetWidth/2:this._decBtn.offsetHeight+this._minHandler.offsetHeight/2):(this._hasButtons&&(this._decBtn.style.display="none",this._incBtn.style.display="none"),s=this._isHorizontal?this._minHandler.offsetWidth/2:this._minHandler.offsetHeight/2),i=this._getRsRect(),this._isHorizontal?(i.left-=this._minHandler.offsetWidth/2,i.width+=this._minHandler.offsetWidth,e={left:s,width:i.width-2*s}):(i.top-=this._minHandler.offsetHeight/2,i.height+=this._minHandler.offsetHeight,e={top:s,height:i.height-2*s}),setCss(this._rsEle,i),setCss(this._rsContent,e),n=getElementRect(this._rsContent),this._plotBox={x:n.left,y:n.top,width:n.width,height:n.height},this._updateElesPosition())},t.prototype._updateElesPosition=function(){var t,i,e,s=this._minHandler,n=(this._rangeHandler,this._maxHandler),a=this._plotBox,o=this._isHorizontal;a&&(t=o?{left:this._minPos*a.width-.5*s.offsetWidth}:{top:(1-this._minPos)*a.height-.5*n.offsetHeight},i=o?{left:this._minPos*a.width,width:(this._maxPos-this._minPos)*a.width}:{top:(1-this._maxPos)*a.height,height:(this._maxPos-this._minPos)*a.height},e=o?{left:this._maxPos*a.width-.5*n.offsetWidth}:{top:(1-this._maxPos)*a.height-.5*s.offsetHeight},this._refreshSlider(t,i,e))},t.prototype._refreshSlider=function(t,i,e){setCss(this._minHandler,t),setCss(this._rangeHandler,i),setCss(this._maxHandler,e)},t.prototype._invalidate=function(){var i,e;this._rsContainer&&(i=this._isHorizontal?t._HRANGESLIDER:t._VRANGESLIDER,e=this._isHorizontal?t._VRANGESLIDER:t._HRANGESLIDER,removeClass(this._rsEle,e),addClass(this._rsEle,i),[this._rsEle,this._rsContent,this._minHandler,this._maxHandler,this._rangeHandler].forEach(function(t){t.removeAttribute("style")}),this._refresh())},t.prototype._changeRange=function(t){var i=this._maxPos-this._minPos;t<0&&0===this._minPos||t>0&&1===this._maxPos||(t<0?(this._minPos+=t,this._minPos=this._minPos<0?0:this._minPos,this._maxPos=this._minPos+i):(this._maxPos+=t,this._maxPos=this._maxPos>1?1:this._maxPos,this._minPos=this._maxPos-i),this._updateElesPosition())},t.prototype._doSliding=function(t,i){getElementRect(this._rsContent),getElementRect(this._rangeHandler);this._clearInterval(),this._startPt=new Point,this._changeRange(t),this.onRangeChanged(),this._setSlidingInterval(t,i)},t.prototype._setSlidingInterval=function(t,i){var e,s=this;this._slidingInterval=window.setInterval(function(){if(i)if(getElementRect(s._rsContent),e=getElementRect(s._rangeHandler),s._isHorizontal){if(i.x>=e.left&&i.x<=e.left+e.width)return void s._clearInterval()}else if(i.y>=e.top&&i.y<=e.top+e.height)return void s._clearInterval();s._changeRange(t),s.onRangeChanged()},200)},t.prototype._clearInterval=function(){this._slidingInterval&&window.clearInterval(this._slidingInterval)},t.prototype._getRsRect=function(){var t=this._rangeSliderRect,i={};if(t)return["left","top","width","height"].forEach(function(e){t[e]&&(i[e]=t[e])}),i},t._HRANGESLIDER="wj-chart-hrangeslider",t._VRANGESLIDER="wj-chart-vrangeslider",t._RANGESLIDER_DECBTN="wj-rangeslider-decbtn",t._RANGESLIDER_INCBTN="wj-rangeslider-incbtn",t._RANGESLIDER_RANGEHANDLE="wj-rangeslider-rangehandle",t._RANGESLIDER_MINHANDLE="wj-rangeslider-minhandle",t._RANGESLIDER_MAXHANDLE="wj-rangeslider-maxhandle",t._RANGESLIDER_HANDLE_ACTIVE="wj-rangeslider-handle-active",t}();export{_RangeSlider};export var Orientation;!function(t){t[t.X=0]="X",t[t.Y=1]="Y"}(Orientation||(Orientation={}));var RangeSelector=function(){function t(t,i){this._isVisible=!0,this._orientation=Orientation.X,this._seamless=!1,this._minScale=0,this._maxScale=1,this.rangeChanged=new Event,this._chart=asType(t,FlexChartCore,!1),this._createRangeSelector(),copy(this,i)}return Object.defineProperty(t.prototype,"isVisible",{get:function(){return this._isVisible},set:function(t){t!=this._isVisible&&(this._isVisible=asBoolean(t),this._rangeSlider&&(this._rangeSlider.isVisible=t))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"min",{get:function(){return this._min},set:function(t){if((t=asNumber(t,!0,!1))!=this._min){var i=!1;null==t||void 0===t||isNaN(t)||null==this._max?(this._min=t,i=!0):(t<=this._max||void 0===this._max)&&(this._min=t,i=!0),this._rangeSlider&&i&&this._changeRange()}},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"max",{get:function(){return this._max},set:function(t){if((t=asNumber(t,!0,!1))!=this._max){var i=!1;null==t||isNaN(t)?(this._max=t,i=!0):(t>=this._min||void 0===this._min)&&(this._max=t,i=!0),this._rangeSlider&&i&&this._changeRange()}},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"orientation",{get:function(){return this._orientation},set:function(t){(t=asEnum(t,Orientation))!==this._orientation&&(this._orientation=t,this._rangeSlider&&(this._rangeSlider.isHorizontal=t==Orientation.X))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"seamless",{get:function(){return this._seamless},set:function(t){(t=asBoolean(t,!0))!=this._seamless&&(this._seamless=t,this._rangeSlider&&(this._rangeSlider.seamless=t))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"minScale",{get:function(){return this._minScale},set:function(t){(t=asNumber(t))<=1&&t>=0&&t!=this._minScale&&t<this._maxScale&&(this._minScale=t,this._rangeSlider&&(this._rangeSlider.minScale=asNumber(t),this._updateMinAndMaxWithScale(!0)))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"maxScale",{get:function(){return this._maxScale},set:function(t){(t=asNumber(t))<=1&&t>=0&&t!=this._maxScale&&t>this._minScale&&(this._maxScale=t,this._rangeSlider&&(this._rangeSlider.maxScale=asNumber(t),this._updateMinAndMaxWithScale(!0)))},enumerable:!0,configurable:!0}),t.prototype.remove=function(){this._rangeSelectorEle&&(this._chart.hostElement.removeChild(this._rangeSelectorEle),this._switchEvent(!1),this._rangeSelectorEle=null,this._rangeSlider=null)},t.prototype.onRangeChanged=function(t){this.rangeChanged.raise(this,t)},t.prototype._createRangeSelector=function(){var t=this._chart.hostElement,i=this._orientation===Orientation.X;this._rangeSelectorEle=createElement('<div class="wj-chart-rangeselector-container"></div>'),this._rangeSlider=new _RangeSlider(this._rangeSelectorEle,!1,!1,{isHorizontal:i,isVisible:this._isVisible,seamless:this._seamless}),t.appendChild(this._rangeSelectorEle),this._switchEvent(!0)},t.prototype._switchEvent=function(t){var i=t?"addHandler":"removeHandler";this._chart.hostElement&&(this._rangeSlider.rangeChanged[i](this._updateRange,this),this._chart.rendered[i](this._refresh,this))},t.prototype._refresh=function(){var t,i,e,s=this._chart.hostElement,n=getElementRect(this._rangeSelectorEle);t=s.querySelector("."+FlexChart._CSS_PLOT_AREA),i=getElementRect(t),(e=t.getBBox())&&e.width&&e.height&&(this._adjustMinAndMax(),this._rangeSlider._refresh({left:e.x,top:i.top-n.top,width:e.width,height:e.height}))},t.prototype._adjustMinAndMax=function(){var t=this._chart,i=this._rangeSlider,e=this._min,s=this._max,n=this._orientation===Orientation.X?t.axisX:t.axisY,a=isDate(n.actualMin)?n.actualMin.valueOf():n.actualMin,o=isDate(n.actualMax)?n.actualMax.valueOf():n.actualMax;this._min=null===e||isNaN(e)||void 0===e||e<a||e>o?a:e,this._max=null===s||isNaN(s)||void 0===s||s<a||s>o?o:s;var h=this._chart._plotRect;if(h){var r=void 0,_=void 0;this._orientation===Orientation.X?(r=(n.convert(this._min)-h.left)/h.width,_=(n.convert(this._max)-h.left)/h.width):(r=(h.top-n.convert(this._min))/h.height+1,_=(h.top-n.convert(this._max))/h.height+1),i._minPos=isNaN(r)?0:r,i._maxPos=isNaN(_)?1:_,this._updateMinAndMaxWithScale(!1)}},t.prototype._updateMinAndMaxWithScale=function(t){var i,e=this._rangeSlider,s=!1;if(0!==this._minScale&&e._minPos+this._minScale>e._maxPos&&((i=e._minPos+this._minScale)>1?(e._maxPos=1,e._minPos=1-this._minScale):e._maxPos=i,s=!0),1!==this._maxScale&&e._minPos+this._maxScale<e._maxPos&&((i=e._minPos+this._maxScale)>1?(e._maxPos=1,e._minPos=1-this._maxScale):e._maxPos=i,s=!0),s){var n=this._getMinAndMax();this._min=n.min,this._max=n.max,t&&this._rangeSelectorEle&&(this._rangeSlider._refresh(),this.onRangeChanged())}},t.prototype._changeRange=function(){this._adjustMinAndMax(),this._rangeSelectorEle&&(this._rangeSlider._refresh(),this.onRangeChanged())},t.prototype._updateRange=function(){var t;this._rangeSlider;t=this._chart,this._orientation===Orientation.X?t.axisX:t.axisY;var i=this._getMinAndMax();this._min=i.min,this._max=i.max,this.onRangeChanged()},t.prototype._getMinAndMax=function(){var t=this._rangeSlider,i=this._chart,e=i._plotRect,s=null,n=null;return e&&(this._orientation===Orientation.X?(s=i.axisX.convertBack(e.left+t._minPos*e.width),n=i.axisX.convertBack(e.left+t._maxPos*e.width)):(s=i.axisY.convertBack(e.top+(1-t._minPos)*e.height),n=i.axisY.convertBack(e.top+(1-t._maxPos)*e.height))),{min:s,max:n}},t}();export{RangeSelector};_registerModule("wijmo.chart.interaction",selfModule);