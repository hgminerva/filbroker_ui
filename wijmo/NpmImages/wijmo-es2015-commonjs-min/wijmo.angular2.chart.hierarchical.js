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

"use strict";var WjSunburst_1,WjTreeMap_1,__decorate=this&&this.__decorate||function(e,t,r,o){var n,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(i<3?n(a):i>3?n(t,r,a):n(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a},__param=this&&this.__param||function(e,t){return function(r,o){t(r,o,e)}};Object.defineProperty(exports,"__esModule",{value:!0});const core_1=require("@angular/core"),common_1=require("@angular/common"),forms_1=require("@angular/forms"),wijmo_angular2_directiveBase_1=require("wijmo/wijmo.angular2.directiveBase"),wjcChartHierarchical=require("wijmo/wijmo.chart.hierarchical");exports.wjSunburstMeta={selector:"wj-sunburst",template:"<div><ng-content></ng-content></div>",inputs:["wjModelProperty","isDisabled","binding","footer","header","selectionMode","palette","plotMargin","footerStyle","headerStyle","tooltipContent","itemsSource","bindingName","innerRadius","isAnimated","offset","reversed","startAngle","selectedIndex","selectedItemPosition","selectedItemOffset","itemFormatter","labelContent","childItemsPath"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","renderingNg: rendering","renderedNg: rendered","selectionChangedNg: selectionChanged","itemsSourceChangingNg: itemsSourceChanging","itemsSourceChangedNg: itemsSourceChanged"],providers:[{provide:forms_1.NG_VALUE_ACCESSOR,useFactory:wijmo_angular2_directiveBase_1.WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};let WjSunburst=WjSunburst_1=class extends wjcChartHierarchical.Sunburst{constructor(e,t,r){super(wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(e,t)),this.isInitialized=!1;this._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this,e,t,r);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}addEventListener(e,t,r,o=!1){let n=wijmo_angular2_directiveBase_1.WjDirectiveBehavior,i=n.ngZone;i&&n.outsideZoneEvents[t]?i.runOutsideAngular(()=>{super.addEventListener(e,t,r,o)}):super.addEventListener(e,t,r,o)}get tooltipContent(){return this.tooltip.content}set tooltipContent(e){this.tooltip.content=e}get labelContent(){return this.dataLabel.content}set labelContent(e){this.dataLabel.content=e}};WjSunburst.meta={outputs:exports.wjSunburstMeta.outputs},WjSunburst=WjSunburst_1=__decorate([core_1.Component({selector:exports.wjSunburstMeta.selector,template:exports.wjSunburstMeta.template,inputs:exports.wjSunburstMeta.inputs,outputs:exports.wjSunburstMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef(()=>WjSunburst_1)},...exports.wjSunburstMeta.providers]}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],WjSunburst),exports.WjSunburst=WjSunburst,exports.wjTreeMapMeta={selector:"wj-tree-map",template:"",inputs:["wjModelProperty","isDisabled","binding","footer","header","selectionMode","palette","plotMargin","footerStyle","headerStyle","tooltipContent","itemsSource","bindingName","maxDepth","type","labelContent","childItemsPath"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","renderingNg: rendering","renderedNg: rendered","selectionChangedNg: selectionChanged","itemsSourceChangingNg: itemsSourceChanging","itemsSourceChangedNg: itemsSourceChanged"],providers:[{provide:forms_1.NG_VALUE_ACCESSOR,useFactory:wijmo_angular2_directiveBase_1.WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};let WjTreeMap=WjTreeMap_1=class extends wjcChartHierarchical.TreeMap{constructor(e,t,r){super(wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(e,t)),this.isInitialized=!1;this._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this,e,t,r);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}addEventListener(e,t,r,o=!1){let n=wijmo_angular2_directiveBase_1.WjDirectiveBehavior,i=n.ngZone;i&&n.outsideZoneEvents[t]?i.runOutsideAngular(()=>{super.addEventListener(e,t,r,o)}):super.addEventListener(e,t,r,o)}get tooltipContent(){return this.tooltip.content}set tooltipContent(e){this.tooltip.content=e}get labelContent(){return this.dataLabel.content}set labelContent(e){this.dataLabel.content=e}};WjTreeMap.meta={outputs:exports.wjTreeMapMeta.outputs},WjTreeMap=WjTreeMap_1=__decorate([core_1.Component({selector:exports.wjTreeMapMeta.selector,template:exports.wjTreeMapMeta.template,inputs:exports.wjTreeMapMeta.inputs,outputs:exports.wjTreeMapMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef(()=>WjTreeMap_1)},...exports.wjTreeMapMeta.providers]}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],WjTreeMap),exports.WjTreeMap=WjTreeMap;let moduleExports=[WjSunburst,WjTreeMap],WjChartHierarchicalModule=class{};WjChartHierarchicalModule=__decorate([core_1.NgModule({imports:[wijmo_angular2_directiveBase_1.WjDirectiveBaseModule,common_1.CommonModule],declarations:[...moduleExports],exports:[...moduleExports]})],WjChartHierarchicalModule),exports.WjChartHierarchicalModule=WjChartHierarchicalModule;