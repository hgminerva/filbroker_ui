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

"use strict";var __extends=this&&this.__extends||function(){var t=function(e,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(e,i)};return function(e,i){function n(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(n.prototype=i.prototype,new n)}}();Object.defineProperty(exports,"__esModule",{value:!0});var Easing,AnimationMode,wijmo_1=require("wijmo/wijmo"),wijmo_chart_1=require("wijmo/wijmo.chart"),selfModule=require("wijmo/wijmo.chart.animation");function softFinancial(){return wijmo_1._getModule("wijmo.chart.finance")}function softRadar(){return wijmo_1._getModule("wijmo.chart.radar")}exports.softFinancial=softFinancial,exports.softRadar=softRadar,function(t){t[t.Linear=0]="Linear",t[t.Swing=1]="Swing",t[t.EaseInQuad=2]="EaseInQuad",t[t.EaseOutQuad=3]="EaseOutQuad",t[t.EaseInOutQuad=4]="EaseInOutQuad",t[t.EaseInCubic=5]="EaseInCubic",t[t.EaseOutCubic=6]="EaseOutCubic",t[t.EaseInOutCubic=7]="EaseInOutCubic",t[t.EaseInQuart=8]="EaseInQuart",t[t.EaseOutQuart=9]="EaseOutQuart",t[t.EaseInOutQuart=10]="EaseInOutQuart",t[t.EaseInQuint=11]="EaseInQuint",t[t.EaseOutQuint=12]="EaseOutQuint",t[t.EaseInOutQuint=13]="EaseInOutQuint",t[t.EaseInSine=14]="EaseInSine",t[t.EaseOutSine=15]="EaseOutSine",t[t.EaseInOutSine=16]="EaseInOutSine",t[t.EaseInExpo=17]="EaseInExpo",t[t.EaseOutExpo=18]="EaseOutExpo",t[t.EaseInOutExpo=19]="EaseInOutExpo",t[t.EaseInCirc=20]="EaseInCirc",t[t.EaseOutCirc=21]="EaseOutCirc",t[t.EaseInOutCirc=22]="EaseInOutCirc",t[t.EaseInBack=23]="EaseInBack",t[t.EaseOutBack=24]="EaseOutBack",t[t.EaseInOutBack=25]="EaseInOutBack",t[t.EaseInBounce=26]="EaseInBounce",t[t.EaseOutBounce=27]="EaseOutBounce",t[t.EaseInOutBounce=28]="EaseInOutBounce",t[t.EaseInElastic=29]="EaseInElastic",t[t.EaseOutElastic=30]="EaseOutElastic",t[t.EaseInOutElastic=31]="EaseInOutElastic"}(Easing=exports.Easing||(exports.Easing={})),function(t){t[t.All=0]="All",t[t.Point=1]="Point",t[t.Series=2]="Series"}(AnimationMode=exports.AnimationMode||(exports.AnimationMode={}));var ChartAnimation=function(){function t(t,e){this._play=!0;var i=this,n=t.hostElement,a=new wijmo_1.Size(n.offsetWidth,n.offsetHeight);i._chart=t,i._updateEventArgs=[],t instanceof wijmo_chart_1.FlexPie?i._animation=new FlexPieAnimation(t,i._updateEventArgs):(softRadar()&&t instanceof softRadar().FlexRadar?i._animation=new FlexRadarAnimation(t,i._updateEventArgs):i._animation=new FlexChartAnimation(t,i._updateEventArgs),i._chartType=t.chartType),e&&i._initOptions(e),t.beginUpdate(),window.setTimeout(function(){t.rendered.addHandler(i._playAnimation,i),t.endUpdate()},0),i._setCV(t.collectionView),window.addEventListener("resize",function(t){var e=new wijmo_1.Size(n.offsetWidth,n.offsetHeight);a.equals(e)||(i._play=!1,a=e)})}return t.prototype._initOptions=function(t){t.duration&&(this.duration=t.duration),t.easing&&(this.easing=t.easing),t.animationMode&&(this.animationMode=t.animationMode)},t.prototype._setCV=function(t){this._cv=t,this._animation._clearState()},Object.defineProperty(t.prototype,"animationMode",{get:function(){return this._animation.animationMode},set:function(t){(t=wijmo_1.asEnum(t,AnimationMode))!=this.animationMode&&(this._animation.animationMode=t)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"easing",{get:function(){return this._animation.easing},set:function(t){(t=wijmo_1.asEnum(t,Easing))!=this.easing&&(this._animation.easing=t)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"duration",{get:function(){return this._animation.duration},set:function(t){(t=wijmo_1.asNumber(t))!=this.duration&&(this._animation.duration=t)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"axisAnimation",{get:function(){return this._animation.axisAnimation},set:function(t){(t=wijmo_1.asBoolean(t))!=this.axisAnimation&&(this._animation.axisAnimation=t)},enumerable:!0,configurable:!0}),t.prototype._playAnimation=function(){var t=this._chart,e=t.chartType;this._cv!==t.collectionView&&this._setCV(t.collectionView),null!=this._chartType&&this._chartType!==e&&(this._chartType=e,this._animation._clearState()),this._play?this._animation.playAnimation():this._play=!0},t.prototype.animate=function(){var t=this._chart;if(t){var e=t.itemsSource;t.beginUpdate(),t.itemsSource=null,t.itemsSource=e,t.endUpdate()}},t}();exports.ChartAnimation=ChartAnimation;var FlexAnimation=function(){function t(t,e){this._axisAnimation=!0,this._chart=t,this._timers=[]}return Object.defineProperty(t.prototype,"animationMode",{get:function(){return this._animationMode||AnimationMode.All},set:function(t){(t=wijmo_1.asEnum(t,AnimationMode,!1))!==this._animationMode&&(this._clearState(),this._animationMode=t)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"easing",{get:function(){return null==this._easing?Easing.Swing:this._easing},set:function(t){t!==this._easing&&(this._easing=wijmo_1.asEnum(t,Easing,!1))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"duration",{get:function(){return this._duration||400},set:function(t){t!==this._duration&&(this._duration=wijmo_1.asNumber(t,!1,!0))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"axisAnimation",{get:function(){return!!this._axisAnimation},set:function(t){t!==this._axisAnimation&&(this._axisAnimation=wijmo_1.asBoolean(t,!1))},enumerable:!0,configurable:!0}),t.prototype.playAnimation=function(){},t.prototype._clearState=function(){this._previousState&&(this._previousState=null),this._currentState&&(this._currentState=null)},t.prototype._setInitState=function(t,e,i){var n=AnimationHelper.parseAttrs(e,i);AnimationHelper.setElementAttr(t,n,0)},t.prototype._getAnimation=function(t,e){return t[e]||(t[e]=[]),t[e]},t.prototype._toggleVisibility=function(t,e){e?AnimationHelper.playAnimation(t,{opacity:0},{opacity:1},null,Easing.Swing,100):t.setAttribute("opacity","0")},t.prototype._toggleDataLabelVisibility=function(t){var e=this._chart.hostElement,i=e&&e.querySelector(".wj-data-labels");i&&this._toggleVisibility(i,t)},t.prototype._playAnimation=function(t){var e,i=this,n=this,a=n.duration,o=n.easing,r=t.length;n._toggleDataLabelVisibility(!1),e=n._getDurationAndDelay(t.length,a),this._timers&&this._timers.length&&(this._timers.forEach(function(t){return window.clearInterval(t)}),this._timers.length=0),t.forEach(function(t,a){var s;t&&(s=window.setTimeout(function(){var s;t.forEach(function(t,l){if(t&&t.ele){if(a===r-1&&0===l){var c=t.done;t.done=function(){n._toggleDataLabelVisibility(!0),c&&c()}}wijmo_1.isArray(t.ele)?(s=AnimationHelper.playAnimations(t.ele,t.from,t.to,t.done,o,e.duration),i._timers=i._timers.concat.apply(s)):(s=AnimationHelper.playAnimation(t.ele,t.from,t.to,t.done,o,e.duration),i._timers.push(s))}})},e.delay*a),i._timers.push(s))})},t.prototype._getDurationAndDelay=function(t,e){var i={duration:e,delay:0};return t>1&&(this._previousState?(i.duration=e/t,i.delay=e/t):(i.duration=.5*e,i.delay=.5*e/(t-1))),i},t}(),FlexPieAnimation=function(t){function e(e,i){var n=t.call(this,e,i)||this;return e.selectionChanged.addHandler(n._selectionChanged,n),n}return __extends(e,t),e.prototype._selectionChanged=function(){this._isSelectionChanged=!0},e.prototype._clearState=function(){t.prototype._clearState.call(this),this._isSelectionChanged=!1},e.prototype._getElementRotate=function(t){var e,i=t.getAttribute("transform");return i&&i.indexOf("rotate")>-1?1==(i=(i=i.replace("rotate(","").replace(")","")).indexOf(",")>-1?i.split(",").map(function(t){return+t}):i.split(" ").map(function(t){return+t})).length&&(e=this._chart._areas[0].center,i.push(e.x,e.y)):i=[0,(e=this._chart._areas[0].center).x,e.y],i},e.prototype._getDurationAndDelay=function(t,e){var i={duration:e,delay:0};return this.animationMode===AnimationMode.Point&&t>1&&(i.duration=e/t,i.delay=e/t),i},e.prototype.playAnimation=function(){t.prototype.playAnimation.call(this);var e=[];this._playPieAnimation(e),e.length&&this._playAnimation(e)},e.prototype._playPieAnimation=function(t){var e=this._chart,i=!0;if(this._previousState=this._currentState,this._currentState={areas:e._areas,pels:e._pels,rotate:e._pels.length&&this._getElementRotate(e._pels[0].parentNode)},this._previousState&&(i=!1),this._isSelectionChanged)return e.isAnimated||this._playSelectPieAnimation(t),void(this._isSelectionChanged=!1);i?this._playLoadPieAnimation(t):this._playUpdatePieAnimation(t)},e.prototype._playSelectPieAnimation=function(t){if(null!=this._previousState){var e,i,n,a=this._chart._pels[0].parentNode,o=this._previousState.rotate,r=this._getElementRotate(a),s=o[0],l=r[0];s!==l&&(s-l>180?r[0]+=360:l-s>180&&(o[0]+=360),e=this._getAnimation(t,0),i={rotate:o},n={rotate:r},this._setInitState(a,i,n),e.push({ele:a,from:i,to:n}))}},e.prototype._playUpdatePieAnimation=function(t){var e,i,n,a,o=this._chart,r=this._previousState,s=o._areas,l=o._pels,c=r.areas.length,u=s.length,h=Math.max(u,c),p=this._getAnimation(t,0),m=0;if(0!==u&&0!==c)for(this._playSelectPieAnimation(t),e=0;e<h;e++)i={},l[e]&&l[e].childNodes&&l[e].childNodes.length>0&&(e<u&&e<c&&(n=s[0],0===e&&(m=n.angle),1===c?l[e].childNodes[0].setAttribute("d",AnimationHelper.getPathDescOfPie(n.center.x,n.center.y,n.radius,m,2*Math.PI,n.innerRadius||0)):l[e].childNodes[0].setAttribute("d",r.pels[e].childNodes[0].getAttribute("d"))),e<u?(n=s[e],i.to={pie:[n.center.x,n.center.y,n.radius,n.angle,n.sweep,n.innerRadius||0]},i.ele=l[e].childNodes[0]):(n=s[0],a=r.pels[e],i.to={pie:[n.center.x,n.center.y,n.radius,m+2*Math.PI,0,n.innerRadius||0]},l[0].parentNode.appendChild(a),i.done=function(t){return function(){t.parentNode.removeChild(t)}}(a),i.ele=a.childNodes[0]),e<c?(n=r.areas[e],i.from={pie:[n.center.x,n.center.y,n.radius,n.angle,n.sweep,n.innerRadius||0]}):(l[e].childNodes[0].setAttribute("d",AnimationHelper.getPathDescOfPie(n.center.x,n.center.y,n.radius,2*Math.PI+m,0,n.innerRadius||0)),n=r.areas[0],i.from={pie:[n.center.x,n.center.y,n.radius,2*Math.PI+m,0,n.innerRadius||0]}),p.push(i))},e.prototype._playLoadPieAnimation=function(t){var e=this,i=e._chart,n=e.animationMode,a=i._areas;i._pels.forEach(function(i,o){var r,s=i.childNodes[0],l={},c={};s&&(n===AnimationMode.Point?(e._parsePathByAngle(a[o],l,c),r=e._getAnimation(t,o)):(e._parsePathByRadius(a[o],l,c),r=e._getAnimation(t,0)),e._setInitState(s,l,c),r.push({ele:s,from:l,to:c}))})},e.prototype._parsePathByRadius=function(t,e,i){var n,a,o=t.center.x,r=t.center.y,s=t.radius,l=t.angle,c=t.sweep;n=[o,r,0,l,c,0],a=[o,r,s,l,c,t.innerRadius||0],e.pie=n,i.pie=a},e.prototype._parsePathByAngle=function(t,e,i){var n,a,o=t.center.x,r=t.center.y,s=t.radius,l=t.angle,c=t.sweep,u=t.innerRadius;n=[o,r,s,l,0,u||0],a=[o,r,s,l,c,u||0],e.pie=n,e["stroke-width"]=0,i.pie=a,i["stroke-width"]=1},e}(FlexAnimation),FlexChartAnimation=function(t){function e(e,i){return t.call(this,e,i)||this}return __extends(e,t),e.prototype._clearState=function(){t.prototype._clearState.call(this);this._prevAxesStates&&(this._prevAxesStates=null),this._currAxesStates&&(this._currAxesStates=null)},e.prototype.playAnimation=function(){t.prototype.playAnimation.call(this);var e,i,n,a,o,r,s,l,c,u=!0,h=this._chart,p=softFinancial()&&h instanceof softFinancial().FinancialChart,m=h.series,_=m.length,d=[];for(this._previousState=this._currentState,this._previousXVal=this._currentXVal,this._currentState=[],this._addStart=0,this._removeStart=0,this._currentXVal=h._xlabels.slice(),this._previousState&&this._previousState.length&&(u=!1,o=(r=this._previousState).length,s=this._previousXVal,l=this._currentXVal,s.length>2&&l.length>2&&((e=l.indexOf(s[0]))>0&&e<l.length-2?l[e+1]===s[1]&&l[e+2]===s[2]&&(this._addStart=e):(e=s.indexOf(l[0]))>0&&e<s.length-2&&s[e+1]===l[1]&&s[e+2]===l[2]&&(this._removeStart=e))),e=0;e<_;e++)if(a=null!=(i=m[e])._getChartType()?i._getChartType():h._getChartType(),n=this._getChartType(a),this._currentState.push({seriesType:a,ele:i.hostElement}),p)this._playDefaultAnimation(d,e);else{if(c=r&&r[e],"Default"===n){this._playDefaultAnimation(d,e);continue}if(u||c&&c.seriesType!==a||c&&c.ele&&(""==c.ele.innerHTML||0===c.ele.childNodes.length))this._playLoadAnimation(d,e,n);else if(this._playUpdateAnimation(d,e,n,i,c&&c.ele||null),e===_-1&&e<o-1)for(e++;e<=o-1;e++)this._playUpdateAnimation(d,e,n,null,c.ele)}this._adjustAnimations(n,d),d.length&&this._playAnimation(d),this.axisAnimation&&!p&&this._playAxesAnimation()},e.prototype._playAxesAnimation=function(){var t,e,i,n=this._chart.axes,a=n.length;for(this._prevAxesStates=this._currAxesStates,this._currAxesStates=[],e=0;e<a;e++)(t=n[e]).hostElement&&this._currAxesStates.push({ele:t.hostElement,vals:t._vals,axis:t,maxValue:wijmo_1.isDate(t.actualMax)?t.actualMax.getTime():t.actualMax,minValue:wijmo_1.isDate(t.actualMin)?t.actualMin.getTime():t.actualMin});if(this._prevAxesStates)for(i=Math.max(this._prevAxesStates.length,this._currAxesStates.length),e=0;e<i;e++)this._playAxisAnimation(this._prevAxesStates[e],this._currAxesStates[e])},e.prototype._playAxisAnimation=function(t,e){var i,n=[],a=[];e&&e.maxValue-e.minValue&&(i=this._parseAxisState(e),this._convertAxisAnimation(n,i.major,e.axis,t.maxValue,t.minValue),this._convertAxisAnimation(n,i.minor,e.axis,t.maxValue,t.minValue)),t&&t.maxValue-t.minValue&&(i=this._parseAxisState(t),this._convertAxisAnimation(a,i.major,t.axis),this._convertAxisAnimation(a,i.minor,t.axis)),n&&a&&this._combineAxisAnimations(n,a),this._playCurrAxisAnimation(n),this._playPrevAxisAnimation(a)},e.prototype._combineAxisAnimations=function(t,e){var i,n,a=this,o=e.length;for(i=o-1;i>=0;i--)(n=e[i]).text&&t.some(function(t){if(t.text&&t.text===n.text)return a._combineAxisAnimation(t,n),e.splice(i,1),!0})},e.prototype._combineAxisAnimation=function(t,e){var i=this;["label","majorGrid","tick"].forEach(function(n){t[n]&&e[n]&&i._resetExistAxisAttrs(t[n],e[n])})},e.prototype._resetExistAxisAttrs=function(t,e){var i=t.ele,n=e.ele,a={},o={};["x","y","x1","x2","y1","y2"].forEach(function(t){var e=i.getAttribute(t),r=n.getAttribute(t);e!==r&&(a[t]=r,o[t]=e)}),t.calcPos=a,t.elePos=o},e.prototype._convertAxisAnimation=function(t,e,i,n,a){var o,r=this,s=i.hostElement,l=i.axisType==wijmo_chart_1.AxisType.Y;e.forEach(function(e,c){var u=i.convert(e.val,n,a);isNaN(u)||(o={},e.majorGrid&&(o.majorGrid=r._getAxisAnimationAttrs(e.majorGrid,s,u,l)),e.label&&(o.label=r._getAxisAnimationAttrs(e.label,s,u,l),o.text=e.label.innerHTML||e.label.textContent),e.tick&&(o.tick=r._getAxisAnimationAttrs(e.tick,s,u,l)),t.push(o))})},e.prototype._getAxisAnimationAttrs=function(t,e,i,n){var a,o,r;return a={ele:t,parent:e,elePos:{},calcPos:{}},"text"===t.nodeName?(o=n?"y":"x",r=Number(t.getAttribute(o)),a.elePos[o]=r,a.calcPos[o]=i):(o=n?"y1":"x1",r=Number(t.getAttribute(o)),n?(a.elePos={y1:r,y2:r},a.calcPos={y1:i,y2:i}):(a.elePos={x1:r,x2:r},a.calcPos={x1:i,x2:i})),a.elePos.opacity=1,a.calcPos.opacity=0,a},e.prototype._playCurrAxisAnimation=function(t){var e=this.duration;t&&0!==t.length&&t.forEach(function(t){["majorGrid","label","tick"].forEach(function(i){var n=t[i];if(n){n.parent;var a=n.ele,o=n.elePos,r=n.calcPos;AnimationHelper.playAnimation(a,r,o,null,Easing.Swing,e)}})})},e.prototype._playPrevAxisAnimation=function(t){var e=this.duration;t&&0!==t.length&&t.forEach(function(t){["majorGrid","label","tick"].forEach(function(i){var n=t[i];if(n){var a=n.parent,o=n.ele,r=n.elePos,s=n.calcPos;a.appendChild(o),AnimationHelper.playAnimation(o,r,s,function(){o.parentNode===a&&a.removeChild(o)},Easing.Swing,e)}})})},e.prototype._parseAxisState=function(t){if(null==t)return null;var e=t.vals,i=t.axis,n=i.axisType==wijmo_chart_1.AxisType.Y,a=t.ele.childNodes,o=0,r=e.major,s=e.minor,l=e.hasLbls,c=[],u=[];return r&&r.forEach(function(t,e){var r,s={},u=!!l[e];c.push(s),s.val=t,r=a[o],i.majorGrid&&wijmo_1.hasClass(r,wijmo_chart_1.FlexChart._CSS_GRIDLINE)&&(s.majorGrid=r,r=a[++o]),n?(u&&r&&i.majorTickMarks!==wijmo_chart_1.TickMark.None&&wijmo_1.hasClass(r,wijmo_chart_1.FlexChart._CSS_TICK)&&(s.tick=r,r=a[++o]),u&&r&&(wijmo_1.hasClass(r,wijmo_chart_1.FlexChart._CSS_LABEL)||r.querySelector("."+wijmo_chart_1.FlexChart._CSS_LABEL))&&(s.label=r,o++)):(u&&r&&(wijmo_1.hasClass(r,wijmo_chart_1.FlexChart._CSS_LABEL)||r.querySelector("."+wijmo_chart_1.FlexChart._CSS_LABEL))&&(s.label=r,r=a[++o]),u&&r&&i.majorTickMarks!==wijmo_chart_1.TickMark.None&&wijmo_1.hasClass(r,wijmo_chart_1.FlexChart._CSS_TICK)&&(s.tick=r,o++))}),s&&s.forEach(function(t,e){var n,r={};u.push(r),r.val=t,n=a[o],i.minorTickMarks!==wijmo_chart_1.TickMark.None&&wijmo_1.hasClass(n,wijmo_chart_1.FlexChart._CSS_TICK_MINOR)&&(r.tick=n,n=a[++o]),i.minorGrid&&wijmo_1.hasClass(n,wijmo_chart_1.FlexChart._CSS_GRIDLINE_MINOR)&&(r.majorGrid=n,o++)}),{major:c,minor:u}},e.prototype._playLoadAnimation=function(t,e,i){this["_playLoad"+i+"Animation"](t,e)},e.prototype._playUpdateAnimation=function(t,e,i,n,a){null==n||null==a?null==n?this["_play"+i+"RemoveAnimation"](t,a):this["_play"+i+"AddAnimation"](t,n):this["_play"+i+"MoveAnimation"](t,n,a)},e.prototype._adjustAnimations=function(t,e){var i,n=e.length;if("Column"===t||"Bar"===t)for(i=n-1;i>=0;i--)null==e[i]&&e.splice(i,1)},e.prototype._getChartType=function(t){var e="Default",i=this._chart._isRotated();switch(t){case wijmo_chart_1.ChartType.Scatter:case wijmo_chart_1.ChartType.Bubble:case wijmo_chart_1.ChartType.Candlestick:case wijmo_chart_1.ChartType.HighLowOpenClose:e="Scatter";break;case wijmo_chart_1.ChartType.Column:case wijmo_chart_1.ChartType.Bar:e=i?"Bar":"Column";break;case wijmo_chart_1.ChartType.Line:case wijmo_chart_1.ChartType.LineSymbols:case wijmo_chart_1.ChartType.Area:case wijmo_chart_1.ChartType.Spline:case wijmo_chart_1.ChartType.SplineSymbols:case wijmo_chart_1.ChartType.SplineArea:e="Line";break;default:e="Default"}return e},e.prototype._playLoadLineAnimation=function(t,e){var i,n=this,a=n._chart.series[e],o=n.animationMode,r=a.hostElement;o===AnimationMode.Point?n._playDefaultAnimation(t,e):(i=o===AnimationMode.All?n._getAnimation(t,0):n._getAnimation(t,e),[].slice.call(r.childNodes).forEach(function(t){n._setLineRiseDiveAnimation(i,t,!0)}))},e.prototype._setLineRiseDiveAnimation=function(t,e,i){var n,a,o,r,s,l,c,u=this,h=this,p=h._chart,m=e.nodeName,_=[],d=[],f=h._chart._plotRect,y=f.top+f.height,A=f.left,g={},v={};if("g"===m&&e.childNodes)[].slice.call(e.childNodes).forEach(function(e){u._setLineRiseDiveAnimation(t,e,i)});else{if("polyline"===m||"polygon"===m){for(o=(l=e.points).length||l.numberOfItems,r=0;r<o;r++)s=l[r]||l.getItem(r),p.rotated?_.push({x:A,y:s.y}):_.push({x:s.x,y:y}),d.push({x:s.x,y:s.y});g[m]=_,v[m]=d}else"ellipse"===m&&(h._toggleVisibility(e,!1),i&&(c=function(){h._toggleVisibility(e,!0)}));n=i?g:v,a=i?v:g,h._setInitState(e,n,a),t.push({ele:e,from:n,to:a,done:c})}},e.prototype._setLineMoveAnimation=function(t,e,i,n,a){if(null!=e&&null!=i){var o,r,s,l,c,u,h,p,m,_=e.nodeName,d=[],f=[],y={},A={};for(m="polygon"===_,s=e.points,u=i.points,o=s.length||s.numberOfItems,l=u.length||u.numberOfItems,p=Math.max(o,l),h=0;h<p;h++)h<o&&(r=s[h]||s.getItem(h),d.push({x:r.x,y:r.y})),h<l&&(c=u[h]||u.getItem(h),f.push({x:c.x,y:c.y}));this._addStart?(this._adjustStartLinePoints(this._addStart,d,s),o+=this._addStart):this._removeStart&&(this._adjustStartLinePoints(this._removeStart,f,u),l+=this._removeStart),l>o?this._adjustEndLinePoints(l,o,d,s,m):l<o&&this._adjustEndLinePoints(o,l,f,u,m),y[_]=d,A[_]=f,this._setInitState(n,y,A),t.push({ele:n,from:y,to:A,done:a})}},e.prototype._adjustStartLinePoints=function(t,e,i){for(var n=i[0]||i.getItem(0);t;)e.splice(0,0,{x:n.x,y:n.y}),t--},e.prototype._adjustEndLinePoints=function(t,e,i,n,a){var o,r,s;for(a&&(n.length>=3||n.numberOfItems>=3)?(r=i.pop(),o=i.pop(),s=n[n.length-3]||n.getItem(n.numberOfItems-3)):(n.length>0||n.numberOfItems>0)&&(s=n[n.length-1]||n.getItem(n.numberOfItems-1));t>e&&s;)i.push({x:s.x,y:s.y}),e++;a&&r&&o&&(i.push(o),i.push(r))},e.prototype._playLineRemoveAnimation=function(t,e){var i,n=this,a=n._chart.series[0].hostElement.parentNode,o=n._getAnimation(t,0);a.appendChild(e),[].slice.call(e.childNodes).forEach(function(t){n._setLineRiseDiveAnimation(o,t,!1)}),o.length&&(i=o[0].done,o[0].done=function(){e&&e.parentNode===a&&a.removeChild(e),i&&i()})},e.prototype._playLineAddAnimation=function(t,e){var i=this,n=e.hostElement,a=this._getAnimation(t,0);[].slice.call(n.childNodes).forEach(function(t){i._setLineRiseDiveAnimation(a,t,!0)})},e.prototype._playLineMoveAnimation=function(t,e,i){var n,a,o,r,s=this,l=(s._chart,s._getAnimation(t,0)),c=[];n=e.hostElement,a=[].slice.call(i.childNodes),[].slice.call(n.childNodes).forEach(function(t,e){r=t.nodeName,o=a[e],"g"===r&&t.nodeChilds?[].slice.call(t.nodeChilds).forEach(function(t,e){o&&(c.push(t),s._toggleVisibility(t,!1))}):"polygon"===r||"polyline"===r?s._setLineMoveAnimation(l,o,t,t,0===e?function(){c.forEach(function(t){s._toggleVisibility(t,!0)}),c=null}:null):o&&(c.push(t),s._toggleVisibility(t,!1))})},e.prototype._playLoadColumnAnimation=function(t,e){this._playLoadBarAnimation(t,e,!0)},e.prototype._playLoadBarAnimation=function(t,e,i){void 0===i&&(i=!1);var n=this,a=n._chart.series[e],o=n.animationMode,r=a.hostElement;[].slice.call(r.childNodes).forEach(function(a,r){var s,l=a.nodeName;s=o===AnimationMode.Point?n._getAnimation(t,r):o===AnimationMode.Series?n._getAnimation(t,e):n._getAnimation(t,0),"g"===l?a.childNodes&&[].slice.call(a.childNodes).forEach(function(t,e){n._setLoadBarAnimation(s,t,i)}):n._setLoadBarAnimation(s,a,i)})},e.prototype._setBarAnimation=function(t,e,i,n,a){this._setInitState(e,i,n),t.push({ele:e,from:i,to:n,done:a})},e.prototype._setLoadBarAnimation=function(t,e,i,n,a){void 0===n&&(n=!1);var o,r,s=this,l=i?"height":"width",c=i?"y":"x",u=e.getAttribute(l),h=e.getAttribute(c),p=i?"top":"left",m=s._chart._plotRect,_={},d={};_[l]=0,d[l]=Number(u),i&&(_[c]=m[l]+m[p],d[c]=Number(h)),o=n?d:_,r=n?_:d,"g"===e.nodeName?e.childNodes&&[].slice.call(e.childNodes).forEach(function(e){s._setBarAnimation(t,e,o,r,a)}):s._setBarAnimation(t,e,o,r,a)},e.prototype._setMoveBarAnimation=function(t,e,i){var n={},a={};null!=e&&null!=i&&(["width","height","x","y","top","left"].forEach(function(t){var o=e.getAttribute(t),r=i.getAttribute(t);o!==r&&(n[t]=Number(o),a[t]=Number(r))}),this._setInitState(i,n,a),t.push({ele:i,from:n,to:a}))},e.prototype._playColumnRemoveAnimation=function(t,e){this._playBarRemoveAnimation(t,e,!0)},e.prototype._playColumnAddAnimation=function(t,e){this._playBarAddAnimation(t,e,!0)},e.prototype._playColumnMoveAnimation=function(t,e,i){this._playBarMoveAnimation(t,e,i,!0)},e.prototype._playBarRemoveAnimation=function(t,e,i){void 0===i&&(i=!1);var n=this,a=n._chart.series[0].hostElement.parentNode,o=n._getAnimation(t,0);a.appendChild(e),[].slice.call(e.childNodes).forEach(function(t){n._setLoadBarAnimation(o,t,i,!0)}),o.length&&(o[0].done=function(){e&&e.parentNode===a&&a.removeChild(e)})},e.prototype._playBarAddAnimation=function(t,e,i){var n=this;void 0===i&&(i=!1);var a=e.hostElement,o=this._getAnimation(t,2);[].slice.call(a.childNodes).forEach(function(t){n._setLoadBarAnimation(o,t,i,!1)})},e.prototype._playBarMoveAnimation=function(t,e,i,n){void 0===n&&(n=!1);var a,o,r,s,l,c,u,h=this;h._chart;if(a=e.hostElement,r=[].slice.call(i.childNodes),h._addStart)for(u=0,s=r[0];u<h._addStart;)r.splice(0,0,s),u++;if(h._removeStart)for(u=0,s=r[r.length-1];u<h._removeStart;){var p=r.shift();r.push(p),u++}l=r.length,o=[].slice.call(a.childNodes),c=o.length,o.forEach(function(e,i){var a;if(i<l){if(s=r[i],i<h._addStart?(a=h._getAnimation(t,2),h._setLoadBarAnimation(a,e,n,!1)):i>=l-h._removeStart?(a=h._getAnimation(t,2),h._setLoadBarAnimation(a,e,n,!1),a=h._getAnimation(t,0),h._removeBarAnimation(a,e,s,n)):(a=h._getAnimation(t,1),h._setMoveBarAnimation(a,s,e)),i===c-1&&i<l-1)for(a=h._getAnimation(t,0),i++;i<l;i++)s=r[i],h._removeBarAnimation(a,e,s,n)}else a=h._getAnimation(t,2),h._setLoadBarAnimation(a,e,n,!1)})},e.prototype._removeBarAnimation=function(t,e,i,n){var a=e.parentNode;a.appendChild(i),this._setLoadBarAnimation(t,i,n,!0,function(t){return function(){t.parentNode&&t.parentNode===a&&a.removeChild(t)}}(i))},e.prototype._playLoadScatterAnimation=function(t,e){var i=this,n=i._chart,a=n.series[e],o=i.animationMode,r=a.hostElement,s=a._xValues||n._xvals;0===s.length&&(s=a._pointIndexes),[].slice.call(r.childNodes).forEach(function(n,a){var r;r=o===AnimationMode.Point?i._getScatterAnimation(t,s[a]):o===AnimationMode.Series?i._getAnimation(t,e):i._getAnimation(t,0),i._setLoadScatterAnimation(r,n,!1)})},e.prototype._setLoadScatterAnimation=function(t,e,i,n){var a=this;void 0===i&&(i=!1);var o,r,s={},l={};"g"===e.nodeName&&e.childNodes?[].slice.call(e.childNodes).forEach(function(e){a._setLoadScatterAnimation(t,e,i,n)}):(["rx","ry","stroke-width"].forEach(function(t){var i=e.getAttribute(t);s[t]=0,l[t]=Number(i)}),o=i?l:s,r=i?s:l,this._setInitState(e,o,r),t.push({ele:e,from:o,to:r,done:n}))},e.prototype._setUpdateScatterAnimation=function(t,e,i,n){var a={},o={};["cx","cy"].forEach(function(t){var n=e.getAttribute(t),r=i.getAttribute(t);n!==r&&(a[t]=Number(n),o[t]=Number(r))}),this._setInitState(i,a,o),t.push({ele:i,from:a,to:o,done:n})},e.prototype._getScatterAnimation=function(t,e){var i=this._getScatterAnimationIndex(t,e);return t[i]||(t[i]=[]),t[i]},e.prototype._getScatterAnimationIndex=function(t,e){var i=this._chart.axisX,n=null==i.min?i.actualMin:i.min,a=null==i.max?i.actualMax:i.max;return Math.ceil((e-n)/((a-n)/20))},e.prototype._playScatterRemoveAnimation=function(t,e){var i=this,n=i._chart.series[0].hostElement.parentNode,a=i._getAnimation(t,0);n.appendChild(e),[].slice.call(e.childNodes).forEach(function(t){i._setLoadScatterAnimation(a,t,!0)}),a.length&&(a[0].done=function(){e&&e.parentNode===n&&n.removeChild(e)})},e.prototype._playScatterAddAnimation=function(t,e){var i=this,n=e.hostElement,a=this._getAnimation(t,0);[].slice.call(n.childNodes).forEach(function(t){i._setLoadScatterAnimation(a,t,!1)})},e.prototype._playScatterMoveAnimation=function(t,e,i){var n,a,o,r,s,l,c,u=this,h=(u._chart,u._getAnimation(t,0));if(n=e.hostElement,o=[].slice.call(i.childNodes),u._addStart)for(c=0,r=o[0];c<u._addStart;)o.splice(0,0,r),c++;if(u._removeStart)for(c=0,r=o[o.length-1];c<u._removeStart;){var p=o.shift();o.push(p),c++}s=o.length,a=[].slice.call(n.childNodes),l=a.length,a.forEach(function(t,e){if(e<s){if(e<u._addStart?u._setLoadScatterAnimation(h,t,!1):e>=s-u._removeStart?(u._setLoadScatterAnimation(h,t,!1),r=o[e],u._removeScatterAnimation(h,t,r)):(r=o[e],u._setUpdateScatterAnimation(h,r,t)),e===l-1&&e<s-1)for(e++;e<s;e++)r=o[e],u._removeScatterAnimation(h,t,r)}else u._setLoadScatterAnimation(h,t,!1)})},e.prototype._removeScatterAnimation=function(t,e,i){var n=e.parentNode;n.appendChild(i),this._setLoadScatterAnimation(t,i,!0,function(t){return function(){t.parentNode&&t.parentNode===n&&n.removeChild(t)}}(i))},e.prototype._playDefaultAnimation=function(t,e){var i,n=this._chart,a=n.series[e].hostElement,o=n._plotRect,r=n._currentRenderEngine,s=a.getAttribute("clip-path"),l="clipPath"+(1e6*Math.random()).toFixed();r.addClipRect(new wijmo_1.Rect(o.left,o.top,0,o.height),l),a.setAttribute("clip-path","url(#"+l+")"),i=n.hostElement.querySelector("#"+l),this._getAnimation(t,0).push({ele:i.querySelector("rect"),from:{width:0},to:{width:o.width},done:function(){a&&(s?a.setAttribute("clip-path",s):a.removeAttribute("clip-path"),i&&i.parentNode&&i.parentNode.removeChild(i))}})},e}(FlexAnimation),FlexRadarAnimation=function(t){function e(e,i){return t.call(this,e,i)||this}return __extends(e,t),e.prototype._getDurationAndDelay=function(e,i){var n=t.prototype._getDurationAndDelay.call(this,e,i);return this.animationMode===AnimationMode.Point&&(n.duration=i/e,n.delay=i/e),n},e.prototype._playAxesAnimation=function(){},e.prototype._getChartType=function(e){var i=t.prototype._getChartType.call(this,e);return"Bar"===i&&(i="Column"),i},e.prototype._playLoadLineAnimation=function(t,e){var i,n,a,o=this,r=o._chart,s=o._chart.series[e],l=s._xValues||r._xvals,c=o.animationMode,u=s.hostElement;c===AnimationMode.Point?(0===l.length&&(l=s._pointIndexes),a=[].slice.call(u.childNodes),n=a.length-u.querySelectorAll("ellipse").length,a.forEach(function(e,i){o._setRadarLinePointAnimation(t,e,i,l,n)})):(i=c===AnimationMode.All?o._getAnimation(t,0):o._getAnimation(t,e),[].slice.call(u.childNodes).forEach(function(t){o._setLineRiseDiveAnimation(i,t,!0)}))},e.prototype._setRadarLinePointAnimation=function(t,e,i,n,a){var o,r,s,l,c,u,h,p=this,m=p._chart,_=e.nodeName,d=[],f=[],y=[],A=[],g=m._center,v=[],x=!1,E={},S={},b=0;if("polyline"===_||"polygon"===_){for(o=(l=e.points).length||l.numberOfItems,r=0;r<o;r++)v[h=p._getScatterAnimationIndex(t,n[r])]||(v[h]=[]),v[h].push(r),s=l[r]||l.getItem(r),d.push({x:g.x,y:g.y}),f.push({x:s.x,y:s.y});for(r=0,o=v.length;r<o;r++)v[r]&&(u=p._getAnimation(t,b),y=A.length?A.slice():d.slice(),A=y.slice(),v[r].forEach(function(t){var e=f[t];A[t]={x:e.x,y:e.y}}),S={},(E={})[_]=y,S[_]=A,x||(p._setInitState(e,E,S),x=!0),u.push({ele:e,from:E,to:S,done:c}),b++)}else if("ellipse"===_){if((r=i-(a||0))<0)return;u=m._isPolar?p._getScatterAnimation(t,n[r]):p._getScatterAnimation(t,r),p._toggleVisibility(e,!1),c=function(){p._toggleVisibility(e,!0)},u.push({ele:e,from:E,to:S,done:c})}},e.prototype._setLineRiseDiveAnimation=function(t,e,i){var n,a,o,r,s,l,c,u=this,h=u._chart,p=e.nodeName,m=[],_=[],d=h._center,f={},y={};if("polyline"===p||"polygon"===p){for(o=(l=e.points).length||l.numberOfItems,r=0;r<o;r++)s=l[r]||l.getItem(r),m.push({x:d.x,y:d.y}),_.push({x:s.x,y:s.y});f[p]=m,y[p]=_}else"ellipse"===p&&(u._toggleVisibility(e,!1),i&&(c=function(){u._toggleVisibility(e,!0)}));n=i?f:y,a=i?y:f,u._setInitState(e,n,a),t.push({ele:e,from:n,to:a,done:c})},e.prototype._parsePathByRadius=function(t,e,i){var n,a,o=t.center.x,r=t.center.y,s=t.radius,l=t.angle,c=t.sweep;n=[o,r,0,l,c,0],a=[o,r,s,l,c,t.innerRadius||0],e.pie=n,i.pie=a},e.prototype._playUpdateAnimation=function(e,i,n,a,o){if("Bar"===n||"Column"===n){if(null==a)return;this._playLoadBarAnimation(e,i,!1)}else t.prototype._playUpdateAnimation.call(this,e,i,n,a,o)},e.prototype._playLoadBarAnimation=function(t,e,i){void 0===i&&(i=!1);var n=this,a=n._chart,o=a.series[e],r=a._areas[e],s=n.animationMode,l=o.hostElement;[].slice.call(l.childNodes).forEach(function(i,a){var o,l,c={},u={};o=s===AnimationMode.Point?n._getAnimation(t,a):s===AnimationMode.Series?n._getAnimation(t,e):n._getAnimation(t,0),l=r[a],n._parsePathByRadius(l,c,u),n._setInitState(i,c,u),o.push({ele:i,from:c,to:u})})},e}(FlexChartAnimation),AnimationHelper=function(){function t(){}return t.playAnimations=function(e,i,n,a,o,r,s){void 0===o&&(o=Easing.Swing);var l=e.length,c=0,u=[];return e.forEach(function(e,h){var p=t.playAnimation(e,i[h],n[h],function(){c===l-1&&a&&a(),c++},o,r,s);u.push(p)}),u},t.playAnimation=function(e,i,n,a,o,r,s){void 0===o&&(o=Easing.Swing);var l=t.parseAttrs(i,n);return t.animate(function(i){t.setElementAttr(e,l,i)},a,o,r,s)},t.setElementAttr=function(e,i,n){var a,o;for(o in i)a=i[o],t.calcValue(a,n),e.setAttribute(o,a.getValue(a.value,n))},t.getPathDescOfPie=function(t,e,i,n,a,o){void 0===o&&(o=0);var r=!1;a>=2*Math.PI&&(r=!0,a=2*Math.PI-.001);var s=new wijmo_1.Point(t,e);s.x+=i*Math.cos(n),s.y+=i*Math.sin(n);var l=n+a,c=new wijmo_1.Point(t,e);if(c.x+=i*Math.cos(l),c.y+=i*Math.sin(l),o){var u=new wijmo_1.Point(t,e);u.x+=o*Math.cos(l),u.y+=o*Math.sin(l);var h=new wijmo_1.Point(t,e);h.x+=o*Math.cos(n),h.y+=o*Math.sin(n)}var p=" 0 0,1 ",m=" 0 0,0 ";Math.abs(a)>Math.PI&&(p=" 0 1,1 ",m=" 0 1,0 ");var _="M "+s.x.toFixed(3)+","+s.y.toFixed(3);return _+=" A "+i.toFixed(3)+","+i.toFixed(3)+p,_+=c.x.toFixed(3)+","+c.y.toFixed(3),o?(_+=r?" M "+u.x.toFixed(3)+","+u.y.toFixed(3):" L "+u.x.toFixed(3)+","+u.y.toFixed(3),_+=" A "+o.toFixed(3)+","+o.toFixed(3)+m,_+=h.x.toFixed(3)+","+h.y.toFixed(3)):_+=" L "+t.toFixed(3)+","+e.toFixed(3),r||(_+=" z"),_},t.parseAttrs=function(e,i){var n={};for(var a in e)if(null!=i[a])switch(a){case"polyline":n.points=t.parseAttr(e[a],i[a],function(t,e){if(1===e){for(var i,n,a;t.length>1;){if(n=t[0],a=t[1],n.x!==a.x||n.y!==a.y){n=null,a=null;break}t.splice(1,1)}for(i=t.length-1;i>0;i--)if(n=a,a=t[i],n){if(n.x!==a.x||n.y!==a.y)break;t.pop()}}return t.map(function(t){return t.x+","+t.y}).join(" ")});break;case"polygon":n.points=t.parseAttr(e[a],i[a],function(t,e){if(1===e){var i,n,a,o,r;for(o=t.pop(),r=t.pop();t.length>1;){if(n=t[0],a=t[1],n.x!==a.x||n.y!==a.y){n=null,a=null;break}t.splice(1,1)}for(i=t.length-1;i>=0;i--)if(n=a,a=t[i],n){if(n.x!==a.x||n.y!==a.y)break;t.splice(i,1)}t.push(r),t.push(o)}return t.map(function(t){return t.x+","+t.y}).join(" ")});break;case"d":n[a]=t.parseAttr(e[a],i[a],function(t){return t.map(function(t){return"string"==typeof t?t:t[0]+","+t[1]}).join(" ")});break;case"pie":n.d=t.parseAttr(e[a],i[a],function(e){return t.getPathDescOfPie.apply(t,e)});break;case"rotate":n.transform=t.parseAttr(e[a],i[a],function(t){return"rotate("+t.join(" ")+")"});break;case"width":case"height":case"rx":case"ry":case"stroke-width":n[a]=t.parseAttr(e[a],i[a],function(t){return Math.abs(t)});break;default:n[a]=t.parseAttr(e[a],i[a])}return n},t.animate=function(t,e,i,n,a){void 0===i&&(i=Easing.Swing),void 0===n&&(n=400),void 0===a&&(a=16),wijmo_1.asFunction(t),wijmo_1.asNumber(n,!1,!0),wijmo_1.asNumber(a,!1,!0);var o=0,r=setInterval(function(){Date.now();var s=o/n;s=EasingHelper[Easing[i]](s),t(s),(o+=a)>=n&&(clearInterval(r),(s<1||s>1)&&t(1),e&&e())},a);return r},t.calcValue=function(e,i){var n=e.from,a=e.diff,o=e.value;wijmo_1.isNumber(n)?e.value=0===a?n:n+a*i:wijmo_1.isArray(n)&&t.parseArrayAttr(o,n,a,function(t,e){return"number"==typeof t?t+e*i:t})},t.parseAttr=function(e,i,n){var a,o,r,s;return wijmo_1.isArray(e)&&wijmo_1.isArray(i)?(o=i,r=[],s=(a=e).slice(),t.parseArrayAttr(r,a,o,function(t,e){return t===e?0:e-t})):(s=a=Number(e),r=(o=Number(i))-a),{from:a,to:o,value:s,diff:r,getValue:n||function(t,e){return t}}},t.parseArrayAttr=function(t,e,i,n){e.forEach(function(e,a){var o={},r=[],s=i[a];wijmo_1.isNumber(e)||"string"==typeof e?t[a]=n(e,s):wijmo_1.isArray(e)?(e.forEach(function(t,i){r[i]=n(e[i],s[i])}),t[a]=r):(Object.getOwnPropertyNames(e).forEach(function(t){o[t]=n(e[t],s[t])}),t[a]=o)})},t}(),EasingHelper=function(){function t(){}return t.Linear=function(t){return t},t.Swing=function(t){var e=1.70158;return(t/=.5)<1?t*t*((1+(e*=1.525))*t-e)*.5:.5*((t-=2)*t*((1+(e*=1.525))*t+e)+2)},t.EaseInQuad=function(t){return t*t},t.EaseOutQuad=function(t){return t*(2-t)},t.EaseInOutQuad=function(t){return t<.5?2*t*t:(4-2*t)*t-1},t.EaseInCubic=function(t){return t*t*t},t.EaseOutCubic=function(t){return--t*t*t+1},t.EaseInOutCubic=function(t){return t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1},t.EaseInQuart=function(t){return t*t*t*t},t.EaseOutQuart=function(t){return 1- --t*t*t*t},t.EaseInOutQuart=function(t){return t<.5?8*t*t*t*t:1-8*--t*t*t*t},t.EaseInQuint=function(t){return t*t*t*t*t},t.EaseOutQuint=function(t){return 1+--t*t*t*t*t},t.EaseInOutQuint=function(t){return t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t},t.EaseInSine=function(t){return 1-Math.cos(t*(Math.PI/2))},t.EaseOutSine=function(t){return Math.sin(t*(Math.PI/2))},t.EaseInOutSine=function(t){return-.5*(Math.cos(Math.PI*t)-1)},t.EaseInExpo=function(t){return 0==t?0:Math.pow(2,10*(t-1))},t.EaseOutExpo=function(t){return 1==t?1:1-Math.pow(2,-10*t)},t.EaseInOutExpo=function(t){return t==!!t?t:(t/=.5)<1?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*--t))},t.EaseInCirc=function(t){return-(Math.sqrt(1-t*t)-1)},t.EaseOutCirc=function(t){return Math.sqrt(1-Math.pow(t-1,2))},t.EaseInOutCirc=function(t){return(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},t.EaseInBack=function(t){var e=1.70158;return t*t*((e+1)*t-e)},t.EaseOutBack=function(t){var e=1.70158;return(t-=1)*t*((e+1)*t+e)+1},t.EaseInOutBack=function(t){var e=1.70158;return(t/=.5)<1?t*t*((1+(e*=1.525))*t-e)*.5:.5*((t-=2)*t*((1+(e*=1.525))*t+e)+2)},t.EaseInBounce=function(e){return 1-t.EaseOutBounce(1-e)},t.EaseOutBounce=function(t){var e=7.5625;return t<1/2.75?e*t*t:t<2/2.75?e*(t-=1.5/2.75)*t+.75:t<2.5/2.75?e*(t-=2.25/2.75)*t+.9375:e*(t-=2.625/2.75)*t+.984375},t.EaseInOutBounce=function(e){return e<.5?.5*t.EaseInBounce(2*e):.5*t.EaseOutBounce(2*e-1)+.5},t.EaseInElastic=function(t){return t==!!t?t:-Math.pow(2,10*(t-=1))*Math.sin((t-.075)*(2*Math.PI)/.3)},t.EaseOutElastic=function(t){return t==!!t?t:Math.pow(2,-10*t)*Math.sin((t-.075)*(2*Math.PI)/.3)+1},t.EaseInOutElastic=function(t){return t==!!t?t:(t*=2)<1?Math.pow(2,10*(t-=1))*Math.sin((t-.1125)*(2*Math.PI)/.45)*-.5:Math.pow(2,-10*(t-=1))*Math.sin((t-.1125)*(2*Math.PI)/.45)*.5+1},t}();wijmo_1._registerModule("wijmo.chart.animation",selfModule);