/*
    *
    * Wijmo Library 5.20173.380
    * http://wijmo.com/
    *
    * Copyright(c) GrapeCity, Inc.  All rights reserved.
    *
    * Licensed under the GrapeCity Commercial License.
    * sales@wijmo.com
    * wijmo.com/products/wijmo-5/license/
    *
    */
define(["require","exports","wijmo/wijmo","wijmo/wijmo.vue2.base"],function(t,i,o,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),window.wijmo=window.wijmo||{},window.wijmo.vue2=window.wijmo.vue2||{},window.wijmo.vue2.base=e,i._getProps=function(t,i){for(var o=window,e=t.split("."),n=0;n<e.length&&null!=o;n++)o=o[e[n]];if(!o)return null;for(var r=["control","initialized"],a=o.prototype;a!=Object.prototype;a=Object.getPrototypeOf(a))for(var p=Object.getOwnPropertyNames(a),n=0;n<p.length;n++){var s=p[n],c=Object.getOwnPropertyDescriptor(a,s),u=s.match(/^on[A-Z]/);(c.set||u)&&(u&&(s=s[2].toLowerCase()+s.substr(3)),r.indexOf(s)<0&&!s.match(/disabled|required/)&&r.push(s))}return i&&Array.prototype.push.apply(r,i),r},i._initialize=function(t,i){function e(t){this.ctl[this.prop]=t}var n=[];for(var r in t.$options.propsData)n.push(r);return n.sort(),n.forEach(function(n){!(n in i)||i[n]instanceof o.Event||o.isUndefined(t[n])||(i[n]=t[n],t.$watch(n,e.bind({ctl:i,prop:n})))}),n.forEach(function(e){if(i[e]instanceof o.Event){var n=i[e];o.isFunction(t[e])&&n.addHandler(t[e],i)}}),t.control&&t.$parent&&(t.$parent[t.control]=i),o.isFunction(t.initialized)&&t.initialized(i),i}});