/*!
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

import{WjComponentBehavior}from"wijmo/wijmo.vue2.base";import*as VueModule from"vue";import*as wjcGridFilter from"wijmo/wijmo.grid.filter";import VueModuleDefault from"vue";export var Vue=VueModuleDefault||VueModule;class WjFlexGridFilterBehavior extends WjComponentBehavior{}WjFlexGridFilterBehavior.tag="wj-flex-grid-filter",WjFlexGridFilterBehavior.parentInCtor=!0,WjFlexGridFilterBehavior.props=["control","showFilterIcons","showSortButtons","defaultFilterType","filterColumns"],WjFlexGridFilterBehavior.events=["initialized","filterChanging","filterChanged","filterApplied"],WjFlexGridFilterBehavior.classCtor=function(){return wjcGridFilter.FlexGridFilter};export var WjFlexGridFilter=WjFlexGridFilterBehavior.register();