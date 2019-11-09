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

import{WjComponentBehavior}from"wijmo/wijmo.vue2.base";import*as VueModule from"vue";import*as wjcCore from"wijmo/wijmo";import*as wjcInput from"wijmo/wijmo.input";import VueModuleDefault from"vue";export var Vue=VueModuleDefault||VueModule;class WjListBoxBehavior extends WjComponentBehavior{}WjListBoxBehavior.tag="wj-list-box",WjListBoxBehavior.props=["control","isDisabled","isContentHtml","maxHeight","selectedValuePath","itemFormatter","displayMemberPath","checkedMemberPath","itemsSource","showGroups","selectedIndex","selectedItem","selectedValue","checkedItems"],WjListBoxBehavior.events=["initialized","gotFocus","lostFocus","refreshing","refreshed","formatItem","itemsChanged","itemChecked"],WjListBoxBehavior.changeEvents={selectedIndexChanged:["selectedIndex","selectedItem","selectedValue"],checkedItemsChanged:["checkedItems"]},WjListBoxBehavior.classCtor=function(){return wjcInput.ListBox};export var WjListBox=WjListBoxBehavior.register();class WjComboBoxBehavior extends WjComponentBehavior{}WjComboBoxBehavior.tag="wj-combo-box",WjComboBoxBehavior.props=["control","isDisabled","isDroppedDown","showDropDownButton","autoExpandSelection","placeholder","dropDownCssClass","isAnimated","isReadOnly","isRequired","inputType","displayMemberPath","selectedValuePath","headerPath","isContentHtml","isEditable","maxDropDownHeight","maxDropDownWidth","itemFormatter","showGroups","trimText","itemsSource","text","selectedIndex","selectedItem","selectedValue"],WjComboBoxBehavior.events=["initialized","gotFocus","lostFocus","refreshing","refreshed","isDroppedDownChanging","itemsSourceChanged","formatItem"],WjComboBoxBehavior.changeEvents={isDroppedDownChanged:["isDroppedDown"],textChanged:["text"],selectedIndexChanged:["selectedIndex","selectedItem","selectedValue"]},WjComboBoxBehavior.classCtor=function(){return wjcInput.ComboBox};export var WjComboBox=WjComboBoxBehavior.register();class WjAutoCompleteBehavior extends WjComponentBehavior{}WjAutoCompleteBehavior.tag="wj-auto-complete",WjAutoCompleteBehavior.props=["control","isDisabled","isDroppedDown","showDropDownButton","autoExpandSelection","placeholder","dropDownCssClass","isAnimated","isReadOnly","isRequired","inputType","displayMemberPath","selectedValuePath","headerPath","isContentHtml","isEditable","maxDropDownHeight","maxDropDownWidth","itemFormatter","showGroups","trimText","delay","maxItems","minLength","cssMatch","itemsSourceFunction","searchMemberPath","itemsSource","text","selectedIndex","selectedItem","selectedValue"],WjAutoCompleteBehavior.events=["initialized","gotFocus","lostFocus","refreshing","refreshed","isDroppedDownChanging","itemsSourceChanged","formatItem"],WjAutoCompleteBehavior.changeEvents={isDroppedDownChanged:["isDroppedDown"],textChanged:["text"],selectedIndexChanged:["selectedIndex","selectedItem","selectedValue"]},WjAutoCompleteBehavior.classCtor=function(){return wjcInput.AutoComplete};export var WjAutoComplete=WjAutoCompleteBehavior.register();class WjCalendarBehavior extends WjComponentBehavior{}WjCalendarBehavior.tag="wj-calendar",WjCalendarBehavior.props=["control","isDisabled","monthView","showHeader","itemFormatter","itemValidator","firstDayOfWeek","max","min","formatYearMonth","formatDayHeaders","formatDays","formatYear","formatMonths","selectionMode","isReadOnly","repeatButtons","showYearPicker","value","displayMonth"],WjCalendarBehavior.events=["initialized","gotFocus","lostFocus","refreshing","refreshed","formatItem"],WjCalendarBehavior.changeEvents={valueChanged:["value"],displayMonthChanged:["displayMonth"]},WjCalendarBehavior.classCtor=function(){return wjcInput.Calendar};export var WjCalendar=WjCalendarBehavior.register();class WjColorPickerBehavior extends WjComponentBehavior{}WjColorPickerBehavior.tag="wj-color-picker",WjColorPickerBehavior.props=["control","isDisabled","showAlphaChannel","showColorString","palette","value"],WjColorPickerBehavior.events=["initialized","gotFocus","lostFocus","refreshing","refreshed"],WjColorPickerBehavior.changeEvents={valueChanged:["value"]},WjColorPickerBehavior.classCtor=function(){return wjcInput.ColorPicker};export var WjColorPicker=WjColorPickerBehavior.register();class WjInputMaskBehavior extends WjComponentBehavior{}WjInputMaskBehavior.tag="wj-input-mask",WjInputMaskBehavior.props=["control","isDisabled","mask","isRequired","isReadOnly","promptChar","placeholder","inputType","rawValue","value"],WjInputMaskBehavior.events=["initialized","gotFocus","lostFocus","refreshing","refreshed"],WjInputMaskBehavior.changeEvents={valueChanged:["rawValue","value"]},WjInputMaskBehavior.classCtor=function(){return wjcInput.InputMask};export var WjInputMask=WjInputMaskBehavior.register();class WjInputColorBehavior extends WjComponentBehavior{}WjInputColorBehavior.tag="wj-input-color",WjInputColorBehavior.props=["control","isDisabled","isDroppedDown","showDropDownButton","autoExpandSelection","placeholder","dropDownCssClass","isAnimated","isReadOnly","isRequired","inputType","showAlphaChannel","value","text"],WjInputColorBehavior.events=["initialized","gotFocus","lostFocus","refreshing","refreshed","isDroppedDownChanging"],WjInputColorBehavior.changeEvents={isDroppedDownChanged:["isDroppedDown"],textChanged:["text"],valueChanged:["value"]},WjInputColorBehavior.classCtor=function(){return wjcInput.InputColor};export var WjInputColor=WjInputColorBehavior.register();class WjMultiSelectBehavior extends WjComponentBehavior{}WjMultiSelectBehavior.tag="wj-multi-select",WjMultiSelectBehavior.props=["control","isDisabled","isDroppedDown","showDropDownButton","autoExpandSelection","placeholder","dropDownCssClass","isAnimated","isReadOnly","isRequired","inputType","displayMemberPath","selectedValuePath","headerPath","isContentHtml","isEditable","maxDropDownHeight","maxDropDownWidth","itemFormatter","showGroups","trimText","checkedMemberPath","maxHeaderItems","headerFormat","headerFormatter","showSelectAllCheckbox","selectAllLabel","itemsSource","checkedItems","text","selectedIndex","selectedItem","selectedValue"],WjMultiSelectBehavior.events=["initialized","gotFocus","lostFocus","refreshing","refreshed","isDroppedDownChanging","itemsSourceChanged","formatItem"],WjMultiSelectBehavior.changeEvents={isDroppedDownChanged:["isDroppedDown"],textChanged:["text"],selectedIndexChanged:["selectedIndex","selectedItem","selectedValue"],checkedItemsChanged:["checkedItems"]},WjMultiSelectBehavior.classCtor=function(){return wjcInput.MultiSelect};export var WjMultiSelect=WjMultiSelectBehavior.register();class WjMultiAutoCompleteBehavior extends WjComponentBehavior{}WjMultiAutoCompleteBehavior.tag="wj-multi-auto-complete",WjMultiAutoCompleteBehavior.props=["control","isDisabled","isDroppedDown","showDropDownButton","autoExpandSelection","placeholder","dropDownCssClass","isAnimated","isReadOnly","isRequired","inputType","displayMemberPath","selectedValuePath","headerPath","isContentHtml","isEditable","maxDropDownHeight","maxDropDownWidth","itemFormatter","showGroups","trimText","delay","maxItems","minLength","cssMatch","itemsSourceFunction","searchMemberPath","maxSelectedItems","selectedItems","itemsSource","selectedMemberPath","text","selectedIndex","selectedItem","selectedValue"],WjMultiAutoCompleteBehavior.events=["initialized","gotFocus","lostFocus","refreshing","refreshed","isDroppedDownChanging","itemsSourceChanged","formatItem"],WjMultiAutoCompleteBehavior.changeEvents={isDroppedDownChanged:["isDroppedDown"],textChanged:["text"],selectedIndexChanged:["selectedIndex","selectedItem","selectedValue"],selectedItemsChanged:["selectedItems"]},WjMultiAutoCompleteBehavior.classCtor=function(){return wjcInput.MultiAutoComplete};export var WjMultiAutoComplete=WjMultiAutoCompleteBehavior.register();class WjInputNumberBehavior extends WjComponentBehavior{}WjInputNumberBehavior.tag="wj-input-number",WjInputNumberBehavior.props=["control","isDisabled","showSpinner","repeatButtons","max","min","step","isRequired","placeholder","inputType","format","isReadOnly","value","text"],WjInputNumberBehavior.events=["initialized","gotFocus","lostFocus","refreshing","refreshed"],WjInputNumberBehavior.changeEvents={valueChanged:["value"],textChanged:["text"]},WjInputNumberBehavior.classCtor=function(){return wjcInput.InputNumber};export var WjInputNumber=WjInputNumberBehavior.register();class WjInputDateBehavior extends WjComponentBehavior{}WjInputDateBehavior.tag="wj-input-date",WjInputDateBehavior.props=["control","isDisabled","isDroppedDown","showDropDownButton","autoExpandSelection","placeholder","dropDownCssClass","isAnimated","isReadOnly","isRequired","inputType","selectionMode","format","mask","max","min","inputType","repeatButtons","showYearPicker","itemValidator","itemFormatter","text","value"],WjInputDateBehavior.events=["initialized","gotFocus","lostFocus","refreshing","refreshed","isDroppedDownChanging"],WjInputDateBehavior.changeEvents={isDroppedDownChanged:["isDroppedDown"],textChanged:["text"],valueChanged:["value"]},WjInputDateBehavior.classCtor=function(){return wjcInput.InputDate};export var WjInputDate=WjInputDateBehavior.register();class WjInputTimeBehavior extends WjComponentBehavior{}WjInputTimeBehavior.tag="wj-input-time",WjInputTimeBehavior.props=["control","isDisabled","isDroppedDown","showDropDownButton","autoExpandSelection","placeholder","dropDownCssClass","isAnimated","isReadOnly","isRequired","inputType","displayMemberPath","selectedValuePath","headerPath","isContentHtml","isEditable","maxDropDownHeight","maxDropDownWidth","itemFormatter","showGroups","trimText","max","min","step","format","mask","inputType","itemsSource","text","selectedIndex","selectedItem","selectedValue","value"],WjInputTimeBehavior.events=["initialized","gotFocus","lostFocus","refreshing","refreshed","isDroppedDownChanging","itemsSourceChanged","formatItem"],WjInputTimeBehavior.changeEvents={isDroppedDownChanged:["isDroppedDown"],textChanged:["text"],selectedIndexChanged:["selectedIndex","selectedItem","selectedValue"],valueChanged:["value"]},WjInputTimeBehavior.classCtor=function(){return wjcInput.InputTime};export var WjInputTime=WjInputTimeBehavior.register();class WjInputDateTimeBehavior extends WjComponentBehavior{}WjInputDateTimeBehavior.tag="wj-input-date-time",WjInputDateTimeBehavior.props=["control","isDisabled","isDroppedDown","showDropDownButton","autoExpandSelection","placeholder","dropDownCssClass","isAnimated","isReadOnly","isRequired","inputType","selectionMode","format","mask","max","min","inputType","repeatButtons","showYearPicker","itemValidator","itemFormatter","timeMax","timeMin","timeStep","timeFormat","text","value"],WjInputDateTimeBehavior.events=["initialized","gotFocus","lostFocus","refreshing","refreshed","isDroppedDownChanging"],WjInputDateTimeBehavior.changeEvents={isDroppedDownChanged:["isDroppedDown"],textChanged:["text"],valueChanged:["value"]},WjInputDateTimeBehavior.classCtor=function(){return wjcInput.InputDateTime};export var WjInputDateTime=WjInputDateTimeBehavior.register();class WjMenuBehavior extends WjComponentBehavior{get value(){return this._value}set value(e){this._value=e,null!=e&&(this.control.selectedValue=e,this._updateHeader())}_createControl(){const e=super._createControl();return e.itemsSource=new wjcCore.ObservableArray,e.selectedIndex=0,e.listBox.formatItem.addHandler(this._fmtItem,this),e.invalidate(),e.itemClicked.addHandler(e=>{this.value=this.control.selectedValue}),e}_updateControl(e,t){super._updateControl(e,t),"header"===e&&(this._definedHeader=t,this._updateHeader()),"value"===e&&(this.value=t)}_updateHeader(){this.control.header=this._definedHeader||"";const e=this.control.selectedItem;if(null!=this.value&&e&&this.control.displayMemberPath){let t=null;if(e instanceof WjMenuItemBehavior){const o=e.contentRoot;t=o?o.innerHTML:e[this.control.displayMemberPath]}null!=t&&(this.control.header+=": <b>"+t+"</b>")}}_fmtItem(e,t){(t.data instanceof WjMenuItemBehavior||t.data instanceof WjMenuSeparatorBehavior)&&(t.item.textContent="",t.item.appendChild(t.data.contentRoot),t.data.added(t.item))}}WjMenuBehavior.tag="wj-menu",WjMenuBehavior.props=["control","isDisabled","isDroppedDown","showDropDownButton","autoExpandSelection","placeholder","dropDownCssClass","isAnimated","isReadOnly","isRequired","inputType","displayMemberPath","selectedValuePath","headerPath","isContentHtml","isEditable","maxDropDownHeight","maxDropDownWidth","itemFormatter","showGroups","trimText","header","commandParameterPath","commandPath","subItemsPath","openOnHover","closeOnLeave","isButton","itemsSource","text","selectedIndex","selectedItem","selectedValue","value"],WjMenuBehavior.events=["initialized","gotFocus","lostFocus","refreshing","refreshed","isDroppedDownChanging","itemsSourceChanged","formatItem"],WjMenuBehavior.changeEvents={isDroppedDownChanged:["isDroppedDown"],textChanged:["text"],selectedIndexChanged:["selectedIndex","selectedItem","selectedValue"],itemClicked:["value"]},WjMenuBehavior.classCtor=function(){return wjcInput.Menu};export var WjMenu=WjMenuBehavior.register();class WjMenuItemBehavior extends WjComponentBehavior{_createControl(){const e=this.parent.control;return 1==e.itemsSource.length&&e.selectedIndex<0&&(e.selectedIndex=0),e.displayMemberPath||(e.displayMemberPath="header"),e.selectedValuePath||(e.selectedValuePath="value"),e.commandPath||(e.commandPath="cmd"),e.commandParameterPath||(e.commandParameterPath="cmdParam"),this.contentRoot=this.component.$el.firstElementChild,this.component.$el.style.display="none",this}added(e){}}WjMenuItemBehavior.tag="wj-menu-item",WjMenuItemBehavior.parentProp="itemsSource",WjMenuItemBehavior.siblingId="menuItemDir",WjMenuItemBehavior.props=["wjProperty","control","value","cmd","cmdParam"],WjMenuItemBehavior.events=["initialized"],WjMenuItemBehavior.render=function(e){return e("div",[e("div",[this.$slots.default])])};export var WjMenuItem=WjMenuItemBehavior.register();class WjMenuSeparatorBehavior extends WjComponentBehavior{_createControl(){return this.contentRoot=this.component.$el.firstElementChild,this.component.$el.style.display="none",this}added(e){wjcCore.addClass(e,"wj-state-disabled")}}WjMenuSeparatorBehavior.tag="wj-menu-separator",WjMenuSeparatorBehavior.parentProp="itemsSource",WjMenuSeparatorBehavior.siblingId="menuItemDir",WjMenuSeparatorBehavior.props=["wjProperty","control"],WjMenuSeparatorBehavior.events=["initialized"],WjMenuSeparatorBehavior.render=function(e){return e("div",[e("div",{style:{width:"100%",height:"1px","background-color":"lightgray"}})])};export var WjMenuSeparator=WjMenuSeparatorBehavior.register();class WjPopupBehavior extends WjComponentBehavior{}WjPopupBehavior.tag="wj-popup",WjPopupBehavior.props=["control","isDisabled","owner","showTrigger","hideTrigger","fadeIn","fadeOut","isDraggable","isResizable","dialogResultEnter","modal","removeOnHide"],WjPopupBehavior.events=["initialized","gotFocus","lostFocus","refreshing","refreshed","showing","shown","hiding","hidden"],WjPopupBehavior.classCtor=function(){return wjcInput.Popup};export var WjPopup=WjPopupBehavior.register();class WjCollectionViewNavigatorBehavior extends WjComponentBehavior{}WjCollectionViewNavigatorBehavior.tag="wj-collection-view-navigator",WjCollectionViewNavigatorBehavior.props=["control","isDisabled","cv","byPage","headerFormat","repeatButtons"],WjCollectionViewNavigatorBehavior.events=["initialized","gotFocus","lostFocus","refreshing","refreshed"],WjCollectionViewNavigatorBehavior.classCtor=function(){return wjcInput.CollectionViewNavigator};export var WjCollectionViewNavigator=WjCollectionViewNavigatorBehavior.register();