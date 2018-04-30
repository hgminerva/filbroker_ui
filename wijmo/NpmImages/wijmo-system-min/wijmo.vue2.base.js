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
System.register(["wijmo/wijmo","wijmo/wijmo.vue2.base"],function(t,i){"use strict";i&&i.id;t("_getProps",function(t,i){for(var n=window,o=t.split("."),e=0;e<o.length&&null!=n;e++)n=n[o[e]];if(!n)return null;for(var r=["control","initialized"],a=n.prototype;a!=Object.prototype;a=Object.getPrototypeOf(a))for(var c=Object.getOwnPropertyNames(a),e=0;e<c.length;e++){var s=c[e],u=Object.getOwnPropertyDescriptor(a,s),p=s.match(/^on[A-Z]/);(u.set||p)&&(p&&(s=s[2].toLowerCase()+s.substr(3)),r.indexOf(s)<0&&!s.match(/disabled|required/)&&r.push(s))}return i&&Array.prototype.push.apply(r,i),r}),t("_initialize",function(t,i){function o(t){this.ctl[this.prop]=t}var e=[];for(var r in t.$options.propsData)e.push(r);return e.sort(),e.forEach(function(e){!(e in i)||i[e]instanceof n.Event||n.isUndefined(t[e])||(i[e]=t[e],t.$watch(e,o.bind({ctl:i,prop:e})))}),e.forEach(function(o){if(i[o]instanceof n.Event){var e=i[o];n.isFunction(t[o])&&e.addHandler(t[o],i)}}),t.control&&t.$parent&&(t.$parent[t.control]=i),n.isFunction(t.initialized)&&t.initialized(i),i});var n,o;return{setters:[function(t){n=t},function(t){o=t}],execute:function(){window.wijmo=window.wijmo||{},window.wijmo.vue2=window.wijmo.vue2||{},window.wijmo.vue2.base=o}}});