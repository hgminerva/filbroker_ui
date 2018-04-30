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
System.register(["wijmo/wijmo","wijmo/wijmo.vue2.core","vue"],function(e,o){"use strict";var i,n,t,u,r,w,c;o&&o.id;return{setters:[function(e){i=e},function(e){n=e},function(e){t=e,u=e}],execute:function(){window.wijmo=window.wijmo||{},window.wijmo.vue2=window.wijmo.vue2||{},window.wijmo.vue2.core=n,e("Vue",r=t.default||u),e("WjInclude",w=r.component("wj-include",{template:"<div/>",props:["src"],mounted:function(){var e=this;i.httpRequest(this.src,{success:function(o){e.$el.innerHTML=o.response}})}})),e("WjFormat",c=r.filter("wj-format",function(e,o){return i.Globalize.format(e,o)}))}}});