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

import{WjComponentBehavior}from"wijmo/wijmo.vue2.base";import*as VueModule from"vue";import*as wjcGridGrouppanel from"wijmo/wijmo.grid.grouppanel";import VueModuleDefault from"vue";export var Vue=VueModuleDefault||VueModule;class WjGroupPanelBehavior extends WjComponentBehavior{}WjGroupPanelBehavior.tag="wj-group-panel",WjGroupPanelBehavior.props=["control","isDisabled","hideGroupedColumns","showDragGlyphs","maxGroups","placeholder","filter","grid"],WjGroupPanelBehavior.events=["initialized","gotFocus","lostFocus","refreshing","refreshed"],WjGroupPanelBehavior.classCtor=function(){return wjcGridGrouppanel.GroupPanel};export var WjGroupPanel=WjGroupPanelBehavior.register();