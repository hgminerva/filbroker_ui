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

import{isArray,Control,isUndefined,isFunction}from"wijmo/wijmo";import*as VueModule from"vue";import VueModuleDefault from"vue";export var Vue=VueModuleDefault||VueModule;export var WjVueBase=Vue.extend({beforeCreate:function(){var t=this.$options[WjComponentBehavior._behClassProp];t&&(this[WjComponentBehavior._behProp]=t._attach(this))},mounted:function(){this[WjComponentBehavior._behProp].lhMounted()},destroyed:function(){this[WjComponentBehavior._behProp].lhDestroyed()}});var WjComponentBehavior=function(){function t(t){this._isMounted=!1,this._mountedCBs=[],this.component=t}return t._attach=function(t){return new this(t)},t.register=function(){var e,n=((e={data:this.data,extends:WjVueBase,render:this.render,props:this._getProps()})[t._behClassProp]=this,e);return Vue.component(this.tag,n)},t.prototype.lhMounted=function(){var e=this;if(this._isChild()){var n=this.component.$parent;n&&(this.parent=n[t._behProp],this.parent._mountedCB(function(){e._prepareControl(),e._initParent()}))}else this._prepareControl()},t.prototype.lhDestroyed=function(){this._siblingInsertedEH&&this._getElement().removeEventListener("DOMNodeInserted",this._siblingInsertedEH);var t=this.control;if(t)if(this._isChild()){var e=this._getParentProp();if(e){var n=this.parent.control[e];if(isArray(n)){var o=n.indexOf(t);o>-1&&n.splice(o,1)}}}else t instanceof Control&&t.dispose()},t._getProps=function(){var t=[];return this.props&&(t=this.props),this.events&&(t=t.concat(this.events)),this.changeEvents&&(t=t.concat(Object.keys(this.changeEvents))),t},t.prototype._createControl=function(){var t=this._isChild()?this._isParentInCtor()?this.parent.control:void 0:this._getElement();return new(this.constructor._getControlType())(t)},t.prototype._initParent=function(){var t=this._getParentProp();if(t){var e=this.parent.control,n=e[t];if(isArray(n)){var o=this._getSiblingIndex();(o<0||o>=n.length)&&(o=n.length),n.splice(o,0,this.control),this._siblingInsertedEH=this._siblingInserted.bind(this),this._getElement().addEventListener("DOMNodeInserted",this._siblingInsertedEH)}else e[t]=this.control}},t.prototype._updateControl=function(t,e){this.control[t]=e},t.prototype._prepareControl=function(){this.control=this._createControl();var t=this._getElement(),e=this.constructor;this._siblingId||(null==e.siblingId&&(e.siblingId=++e._siblingDirId+""),this._siblingId=e.siblingId),t.setAttribute(e._typeSiblingIdAttr,this._siblingId),this._isMounted=!0;var n=this._mountedCBs;this._mountedCBs=[];for(var o=0,i=n;o<i.length;o++){(0,i[o])()}_initialize(this)},t.prototype._isChild=function(){var t=this.constructor;return null!=t.parentProp||null!=t.parentInCtor},t.prototype._isParentInCtor=function(){return!0===this.constructor.parentInCtor},t.prototype._getParentProp=function(){return this.component.$options.propsData.wjProperty||this.constructor.parentProp},t.prototype._getSiblingIndex=function(){var e=this._getElement(),n=e.parentElement;if(!n)return-1;for(var o=n.childNodes,i=-1,r=this._siblingId,s=0;s<o.length;s++){var p=o[s];if(1==p.nodeType&&p.getAttribute(t._typeSiblingIdAttr)==r&&(++i,p===e))return i}return-1},t.prototype._siblingInserted=function(t){if(t.target===this._getElement()){var e=this._getSiblingIndex(),n=this.control,o=this.parent.control[this._getParentProp()],i=o.indexOf(n);e>=0&&i>=0&&e!==i&&(o.splice(i,1),e=Math.min(e,o.length),o.splice(e,0,n))}},t.prototype._getElement=function(){return this.component.$el},t._getControlType=function(){return this.classCtor()},t.prototype._mountedCB=function(t){this._isMounted?t():this._mountedCBs.push(t)},t.render=function(t){return t("div",[this.$slots.default])},t._typeSiblingIdAttr="_wjSiblingId",t._behClassProp="_wjBehCl",t._behProp="__wjBeh",t._propIdxMapProp="__propInitIdx",t._siblingDirId=0,t}();export{WjComponentBehavior};export function _initialize(t){var e=t.component,n=t.control,o=t.constructor,i=o[WjComponentBehavior._propIdxMapProp];if(!i){i=o[WjComponentBehavior._propIdxMapProp]={};var r=o.props;if(r)for(var s=0;s<r.length;s++)i[r[s]]=s}var p=[],h=[];for(var a in e.$options.propsData)null!=i[a]?p.push(a):h.push(a);p.sort(function(t,e){return i[t]-i[e]});var l,u;e[WjComponentBehavior._behProp].constructor.extraProps;return p.forEach(function(t){isUndefined(e[t])||e[WjComponentBehavior._behProp]._updateControl(t,e[t]),e.$watch(t,function(t){this.cmp[WjComponentBehavior._behProp]._updateControl(this.prop,t)}.bind({cmp:e,prop:t}))}),l=e.$el,u={},"style"in n&&l.style.cssText.length&&(l.style.cssText.split(";").forEach(function(t){var e=t.split(":");2==e.length&&(u[e[0].trim()]=e[1].trim())}),n.style=u),h.forEach(function(t){"initialized"!==t&&t.indexOf(".")<0&&isFunction(e[t])&&n[t].addHandler(e[t],n)}),e.control&&e.$parent&&(e.$parent[e.control]=n),isFunction(e.initialized)&&e.initialized(n),n};