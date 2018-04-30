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
define(["require","exports","wijmo/wijmo","wijmo/wijmo.vue2.core","vue","vue"],function(e,o,i,n,t,u){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),window.wijmo=window.wijmo||{},window.wijmo.vue2=window.wijmo.vue2||{},window.wijmo.vue2.core=n,o.Vue=t.default||u,o.WjInclude=o.Vue.component("wj-include",{template:"<div/>",props:["src"],mounted:function(){var e=this;i.httpRequest(this.src,{success:function(o){e.$el.innerHTML=o.response}})}}),o.WjFormat=o.Vue.filter("wj-format",function(e,o){return i.Globalize.format(e,o)})});