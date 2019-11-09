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

import{Binding,isString,isArray,assert,EventArgs,asType,asEnum,_startDrag,CancelEventArgs,hasClass,removeClass,addClass,setAttribute,Control,isFunction,asBoolean,enable,toggleClass,removeChild,animate as coreAnimate,closestClass,Key,closest,contains,getActiveElement,asArray,asFunction,Event,createElement,Rect,setCss,asInt,getElement,animate,ObservableArray,_registerModule}from"wijmo/wijmo";import*as selfModule from"wijmo/wijmo.nav";export class TabPanel extends Control{constructor(e,t,s){super(e,null,!0),this._tabs=new ObservableArray,this._selectedIndex=-1,this._animated=!0,this._autoSwitch=!0,this.selectedIndexChanged=new Event;let i=this.hostElement,n=[];if(!s)for(;i.firstElementChild;){let e=i.firstElementChild;i.removeChild(e),n.push(e)}let r=this.getTemplate();this.applyTemplate("wj-control wj-tabpanel",r,{_dRoot:"root",_dTabHeaders:"tabheaders",_dTabPanes:"tabpanes"}),i.tabIndex=-1,this._dRoot.tabIndex=this._dTabHeaders.tabIndex=this._dTabPanes.tabIndex=-1,this.addEventListener(i,"click",this._click.bind(this)),this.addEventListener(i,"keydown",this._keydown.bind(this)),this._tabs.collectionChanged.addHandler(this._populateControl.bind(this)),this.tabs.deferUpdate(()=>{n.forEach(e=>{assert(2==e.childElementCount,"TabPanel children should contain header and pane elements"),this.tabs.push(new Tab(e.children[0],e.children[1]))})}),this.initialize(t),this.selectedIndex<0&&this.tabs.length?this.selectedIndex=0:this.onSelectedIndexChanged()}get tabs(){return this._tabs}get selectedIndex(){return this._selectedIndex}set selectedIndex(e){(e=asInt(e,!1))!=this._selectedIndex?(this._selectedIndex=e,this._updateContent(),this.onSelectedIndexChanged()):this._updateContent()}get selectedTab(){let e=this._selectedIndex;return e>-1?this._tabs[e]:null}set selectedTab(e){let t=-1;for(let s=0;s<this._tabs.length&&t<0;s++)this._tabs[s]==e&&(t=s);this.selectedIndex=t}get isAnimated(){return this._animated}set isAnimated(e){this._animated=asBoolean(e)}get autoSwitch(){return this._autoSwitch}set autoSwitch(e){e!=this._autoSwitch&&(this._autoSwitch=asBoolean(e),this._updateContent())}getTab(e){for(let t=0;t<this._tabs.length;t++){let s=this._tabs[t];if(s.header.id==e||s.pane.id==e)return s}for(let t=0;t<this._tabs.length;t++){let s=this._tabs[t];if(s.header.textContent==e)return s}return null}onSelectedIndexChanged(e){this.selectedIndexChanged.raise(this,e)}_populateControl(){this._removeChildren(this._dTabHeaders),this._removeChildren(this._dTabPanes);let e=-1;this._tabs.forEach((t,s)=>{assert(t instanceof Tab,"tabs array must contain Tab objects."),t._setPanel(this);let i=t.header,n=t.pane;addClass(i,"wj-tabheader"),setAttribute(i,"role","tab"),this._dTabHeaders.appendChild(i),addClass(n,"wj-tabpane"),setAttribute(n,"role","tabpanel"),setAttribute(n,"aria-labelledby",i.id?i.id:null),this._dTabPanes.appendChild(n),e<0&&(hasClass(i,"wj-state-active")||"true"==i.getAttribute("aria-selected"))&&(e=s)}),e<0&&this._tabs.length>0&&(e=0),e>-1?this.selectedIndex=e:this.selectedIndex>-1&&this.selectedIndex<this._tabs.length&&this._updateContent(),this._validateSelection()}_validateSelection(){let e=this.selectedTab;if(e&&(e.isDisabled||!e.isVisible)){let e=this._getNextIndex(this.selectedIndex,1);e<0&&(e=this._getNextIndex(this.selectedIndex,-1)),this.selectedIndex=e}}_updateContent(){let e=contains(this._dTabHeaders,getActiveElement()),t=this._dTabHeaders.children,s=this._dTabPanes.children,i=this._selectedIndex;if(i>-1&&i<s.length){let e=s[i].style;this.isAnimated?(e.opacity="0",this._toAnim&&clearInterval(this._toAnim),this._toAnim=animate(t=>{1==t?(e.opacity="",this._toAnim=null):e.opacity=t.toString()})):e.opacity=""}for(let n=0;n<t.length;n++){let r=n==i,a=t[n],l=s[n];setAttribute(a,"aria-selected",r),toggleClass(a,"wj-state-active",r),toggleClass(l,"wj-state-active",r),a.tabIndex=r||!this._autoSwitch?this._orgTabIndex:-1,r&&(e&&a.focus(),this._szObserver||Control.invalidateAll(l))}}_removeChildren(e){for(;e.firstChild;)e.removeChild(e.firstChild)}_click(e){let t=this._getTabIndex(e.target);if(t>-1){let e=this._tabs[t];!e.isDisabled&&e.isVisible&&(this.selectedIndex=t)}}_keydown(e){if(!e.defaultPrevented){let t=this._getTabIndex(getActiveElement());if(t>-1){let s=this._getKeyCode(e);switch(s){case Key.Left:case Key.Up:case Key.Right:case Key.Down:case Key.Home:case Key.PageUp:case Key.End:case Key.PageDown:switch(s){case Key.Left:case Key.Up:t=this._getNextIndex(t,-1);break;case Key.Right:case Key.Down:t=this._getNextIndex(t,1);break;case Key.Home:case Key.PageUp:t=this._getNextIndex(-1,1);break;case Key.End:case Key.PageDown:t=this._getNextIndex(this._tabs.length,-1)}t>-1&&(this._autoSwitch?this.selectedIndex=t:this._tabs[t].header.focus()),e.preventDefault();break;case Key.Enter:case Key.Space:if(t>-1){this._tabs[t].header.click()}e.preventDefault()}}}}_getTabIndex(e){let t=closest(e,".wj-tabheader");if(t&&closest(t,".wj-tabpanel")==this.hostElement)for(let e=0;e<this._tabs.length;e++)if(this._tabs[e].header==t)return e;return-1}_getNextIndex(e,t){for(let s=e+t;s>-1&&s<this._tabs.length;s+=t){let e=this._tabs[s];if(!e.isDisabled&&e.isVisible)return s}return-1}};TabPanel.controlTemplate='<div wj-part="root"><div wj-part="tabheaders" class="wj-tabheaders" role="tablist"></div><div wj-part="tabpanes" class="wj-tabpanes"></div></div>';export class Tab{constructor(e,t){this._hdr=asType(getElement(e),HTMLElement),this._pane=asType(getElement(t),HTMLElement)}get tabPanel(){return this._p}get header(){return this._hdr}get pane(){return this._pane}get isDisabled(){return hasClass(this._hdr,"wj-state-disabled")}set isDisabled(e){toggleClass(this._hdr,"wj-state-disabled",asBoolean(e)),this._p&&this._p._validateSelection()}get isVisible(){return"none"!=this._hdr.style.display}set isVisible(e){this._hdr.style.display=asBoolean(e)?"":"none",this._p&&this._p._validateSelection()}_setParts(e,t){if(e=asType(getElement(e),HTMLElement),t=asType(getElement(t),HTMLElement,!1),this._hdr!==e||this._pane!==t){let s=this.isDisabled,i=this.isVisible;this._hdr=e,this._pane=t,this.isDisabled=s,this.isVisible=i;let n=this.tabPanel;n&&!n.tabs.isUpdating&&n._populateControl()}}_setPanel(e){this._p=e}};export class FormatNodeEventArgs extends EventArgs{constructor(e,t,s){super(),this._data=e,this._e=asType(t,HTMLElement),this._level=s}get dataItem(){return this._data}get element(){return this._e}get level(){return this._level}};export class TreeNodeEventArgs extends CancelEventArgs{constructor(e){super(),this._node=e}get node(){return this._node}};export class TreeNodeDragDropEventArgs extends CancelEventArgs{constructor(e,t,s){super(),this._src=asType(e,TreeNode),this._tgt=asType(t,TreeNode),this._pos=s}get dragSource(){return this._src}get dropTarget(){return this._tgt}get position(){return this._pos}set position(e){this._pos=asEnum(e,DropPosition)}};export var DropPosition;!function(e){e[e.Before=0]="Before",e[e.After=1]="After",e[e.Into=2]="Into"}(DropPosition||(DropPosition={}));export class TreeNode{constructor(e,t){hasClass(t,"wj-treeview")?(e=Control.getControl(t),t=null):TreeNode._assertNode(t),this._t=e,this._e=t}get dataItem(){return this._e[TreeView._DATAITEM_KEY]}get element(){return this._e}get treeView(){return this._t}ensureVisible(){for(let e=this.parentNode;e;e=e.parentNode)e.isCollapsed=!1;let e=this._t.hostElement,t=this.element.getBoundingClientRect(),s=e.getBoundingClientRect();t.bottom>s.bottom?e.scrollTop+=t.bottom-s.bottom:t.top<s.top&&(e.scrollTop-=s.top-t.top)}equals(e){return null!=e&&e.element==this.element}select(){let e=this._t,t=e._selNode;this.equals(t)||(t&&(removeClass(t.element,TreeView._CSEL),setAttribute(t.element,"aria-selected",!1)),e._selNode=this,addClass(this.element,TreeView._CSEL),setAttribute(this.element,"aria-selected",!0),this.ensureVisible(),e._updateFocus(t),e.onSelectedItemChanged())}get index(){let e=0;for(let t=this._pse(this.element);t;t=this._pse(t))TreeNode._isNode(t)&&e++;return e}get parentNode(){let e=null;if(this._e){let t=this._e.parentElement;TreeNode._assertNodeList(t),e=this._pse(t)}return e?new TreeNode(this._t,e):null}get level(){let e=-1;for(let t=this;t;t=t.parentNode)e++;return e}get hasChildren(){return TreeNode._isNode(this._e)&&!TreeNode._isEmpty(this._e)}get hasPendingChildren(){return this.isCollapsed&&this.hasChildren&&!TreeNode._isNodeList(this.element.nextElementSibling)&&isFunction(this._t.lazyLoadFunction)}get nodes(){return this.hasChildren?TreeNode._getChildNodes(this._t,this._e.nextSibling):null}get checkBox(){return this._e.querySelector("input."+TreeView._CNDC)}get isCollapsed(){return this.hasChildren&&hasClass(this._e,TreeView._CCLD)}set isCollapsed(e){if(e!=this.isCollapsed){let t=this._t,s=new TreeNodeEventArgs(this);t.onIsCollapsedChanging(s)&&(this.setCollapsed(asBoolean(e),t.isAnimated,t.autoCollapse),t.onIsCollapsedChanged(s))}}get isChecked(){let e=this.checkBox;return e&&!e.indeterminate?e.checked:null}set isChecked(e){if(e!=this.isChecked){let t=this._t,s=new TreeNodeEventArgs(this);t.onIsCheckedChanging(s)&&(this.setChecked(asBoolean(e),!0),t.onIsCheckedChanged(s))}}get isDisabled(){return this._e&&null!=this._e.getAttribute("disabled")}set isDisabled(e){(e=asBoolean(e,!0))!=this.isDisabled&&enable(this._e,!e)}previous(e,t){let s=this._pse(this._e);if(!s&&TreeNode._isNodeList(this._e.parentElement)&&(s=this._pse(this._e.parentElement)),TreeNode._isNodeList(s)){for(;TreeNode._isNodeList(s)&&s.childElementCount;)s=s.lastChild;TreeNode._isNodeList(s)&&(s=this._pse(s))}let i=TreeNode._isNode(s)?new TreeNode(this._t,s):null;return e&&i&&!i.element.offsetHeight&&(i=i.previous(e,t)),t&&i&&i.isDisabled&&(i=i.previous(e,t)),i}next(e,t){let s=this._e.nextSibling;if(TreeNode._isNodeList(s)&&(s=s.childElementCount?s.firstChild:s.nextSibling),!s)for(let e=this._e.parentElement;!s&&TreeNode._isNodeList(e);e=e.parentElement)s=e.nextSibling;let i=TreeNode._isNode(s)?new TreeNode(this._t,s):null;return e&&i&&!i.element.offsetHeight&&(i=i.next(e,t)),t&&i&&i.isDisabled&&(i=i.next(e,t)),i}previousSibling(){let e=this._pse(this.element);for(;TreeNode._isNodeList(e);)e=this._pse(e);return e?new TreeNode(this._t,e):null}nextSibling(){let e=this.element.nextSibling;return TreeNode._isNodeList(e)&&(e=e.nextSibling),e?new TreeNode(this._t,e):null}setCollapsed(e,t,s){let i=this._t,n=this._e,r=this._e.nextElementSibling,a=TreeNode._isNodeList(r);if(setAttribute(n,"aria-expanded",a?(!e).toString():null),e!=this.isCollapsed)if(e||a||!isFunction(i.lazyLoadFunction)){if(null==t&&(t=i.isAnimated),null==s&&(s=i.autoCollapse),t){if(a){let t=r.offsetHeight,s=r.style,a=i.hostElement,l=a.style;a.scrollHeight<=a.clientHeight&&(l.overflowY="hidden"),e?(toggleClass(n,TreeView._CCLG,!0),coreAnimate(e=>{e<1?(e=1-e,s.height=(e*t).toFixed(0)+"px"):(s.height=s.opacity=l.overflowY="",toggleClass(n,TreeView._CCLD,!0),toggleClass(n,TreeView._CCLG,!1))},TreeView._AN_DLY)):(toggleClass(n,TreeView._CCLD,!1),s.height=s.opacity="0",coreAnimate(e=>{s.height=e>=1?s.opacity=l.overflowY="":(e*t).toFixed(0)+"px"},TreeView._AN_DLY))}}else toggleClass(n,TreeView._CCLD,e);if(!e&&s){let e=n.parentElement;if(TreeNode._isNodeList(e))for(let t=0;t<e.children.length;t++){let s=e.children[t];s!=n&&TreeNode._isNode(s)&&(toggleClass(s,TreeView._CCLD,!0),s.setAttribute("aria-expanded","false"))}}}else i._lazyLoadNode(this)}setChecked(e,t){let s=this.checkBox,i=s.checked!=e;s.checked=e,s.indeterminate=!1,this.hasChildren&&this.nodes.forEach(t=>{t.setChecked(e,!1)});let n=this._t;if(n&&n.checkedMemberPath&&n._chkPath.setValue(this.dataItem,this.level,e),t){let e=this.parentNode;e&&e._updateCheckedState()}n&&i&&n._raiseCheckedItemsChanged()}remove(){let e=this._t,t=this.parentNode,s=this._getArray(),i=s.indexOf(this.dataItem);e.selectedNode==this&&(e.selectedNode=this.nextSibling()||this.previousSibling()||t);let n=this.element.nextSibling;TreeNode._isNodeList(n)&&removeChild(n),removeChild(this.element),t&&t._updateState(),s.splice(i,1),this._t=null}addChildNode(e,t){let s=this._t._createNode(t),i=this.nodes;return i?e<i.length?s.move(i[e],DropPosition.Before):s.move(i[i.length-1],DropPosition.After):s.move(this,DropPosition.Into),s}refresh(e){let t=this._getArray();e&&(t[this.index]=e),e=t[this.index];let s=this._t._createNode(e),i=this.hasChildren&&!this.hasPendingChildren?this.element.nextSibling:null;i&&removeChild(i),(i=s.hasChildren&&!s.hasPendingChildren?s.element.nextSibling:null)&&this.element.parentElement.insertBefore(i,this.element.nextSibling),this.element.innerHTML=s.element.innerHTML,this._updateState()}move(e,t){if(e instanceof TreeNode&&this._contains(e))return!1;let s=this.parentNode,i=this._getArray();this._moveElements(e,t);let n=this.parentNode,r=this._getArray();s&&s._updateState(),n&&n._updateState();let a=this.dataItem,l=i.indexOf(a);return i.splice(l,1),r.splice(this.index,0,a),e.treeView&&(this._t=e.treeView),!0}get itemsSource(){return this._getArray()}_pse(e){return e.previousElementSibling}_contains(e){for(;e;e=e.parentNode)if(e.element==this.element)return!0;return!1}_getArray(){let e=this._t,t=this.parentNode,s=e.itemsSource;if(t){let i=e._itmPath;(s=i.getValue(t.dataItem,this.level))||(s=[],i.setValue(t.dataItem,this.level,s))}return s}_moveElements(e,t){let s=document.createDocumentFragment(),i=this.hasChildren&&!this.hasPendingChildren?this.element.nextSibling:null;if(s.appendChild(this.element),i&&(TreeNode._assertNodeList(i),s.appendChild(i)),e instanceof TreeView)return void e._root.insertBefore(s,null);let n=e.element,r=n?n.parentElement:e.treeView._root;TreeNode._assertNodeList(r);let a=DropPosition;switch(t){case a.Before:r.insertBefore(s,n);break;case a.After:n=(e=e.nextSibling())?e.element:null,r.insertBefore(s,n);break;case a.Into:e.hasChildren&&!e.hasPendingChildren||(i=document.createElement("div"),addClass(i,TreeView._CNDL),r.insertBefore(i,n.nextSibling)),r=e.element.nextSibling,TreeNode._assertNodeList(r),r.insertBefore(s,null)}}_updateState(){this._updateEmptyState(),this._updateCheckedState()}_updateEmptyState(){let e=this.element.nextSibling,t=!1;TreeNode._isNodeList(e)&&(e.childElementCount?t=!0:removeChild(e)),toggleClass(this.element,TreeView._CEMP,!t),t||this.element.removeAttribute("aria-expanded")}_updateCheckedState(){let e=this._t,t=this.checkBox,s=this.nodes,i=0,n=0;if(t&&s&&(s.forEach(e=>{switch(e.isChecked){case!0:i++;break;case!1:n++}}),i==s.length?(t.checked=!0,t.indeterminate=!1):n==s.length?(t.checked=!1,t.indeterminate=!1):(t.checked=!1,t.indeterminate=!0),e&&e.checkedMemberPath)){let s=t.indeterminate?null:t.checked;e._chkPath.setValue(this.dataItem,this.level,s)}let r=this.parentNode;r&&r._updateCheckedState()}static _getChildNodes(e,t){TreeNode._assertNodeList(t);let s=[];if(TreeNode._isNodeList(t)){let i=t.children;for(let t=0;t<i.length;t++){let n=i[t];TreeNode._isNode(n)&&s.push(new TreeNode(e,n))}}return s}static _isNode(e){return e&&hasClass(e,TreeView._CND)}static _isNodeList(e){return e&&hasClass(e,TreeView._CNDL)}static _isEmpty(e){return TreeNode._isNode(e)&&hasClass(e,TreeView._CEMP)}static _isCollapsed(e){return TreeNode._isNode(e)&&!TreeNode._isEmpty(e)&&hasClass(e,TreeView._CCLD)}static _assertNode(e){assert(TreeNode._isNode(e),"node expected")}static _assertNodeList(e){assert(TreeNode._isNodeList(e),"nodeList expected")}};export class _BindingArray{constructor(e){this.path=e}get path(){return this._path}set path(e){if(this._path=e,isString(e))this._bindings=[new Binding(e)];else if(isArray(e)){this._bindings=[];for(let t=0;t<e.length;t++)this._bindings.push(new Binding(e[t]))}else null!=e&&assert(!1,"Path should be a string or an array of strings.");this._maxLevel=this._bindings?this._bindings.length-1:-1}getValue(e,t){let s=Math.min(t,this._maxLevel);return s>-1?this._bindings[s].getValue(e):null}setValue(e,t,s){let i=Math.min(t,this._maxLevel);i>-1&&this._bindings[i].setValue(e,s)}};export class TreeView extends Control{constructor(e,t){super(e),this._itmPath=new _BindingArray("items"),this._chkPath=new _BindingArray,this._dspPath=new _BindingArray("header"),this._imgPath=new _BindingArray,this._html=!1,this._animated=!0,this._chkOnClick=!1,this._xpndOnClick=!0,this._xpdnOnLoad=!0,this._autoColl=!0,this._showChk=!1,this._srch="",this._isReadOnly=!0,this.itemsSourceChanged=new Event,this.loadingItems=new Event,this.loadedItems=new Event,this.itemClicked=new Event,this.selectedItemChanged=new Event,this.checkedItemsChanged=new Event,this.isCollapsedChanging=new Event,this.isCollapsedChanged=new Event,this.isCheckedChanging=new Event,this.isCheckedChanged=new Event,this.formatItem=new Event(()=>{this.invalidate()}),this.dragStart=new Event,this.dragOver=new Event,this.drop=new Event,this.dragEnd=new Event,this.nodeEditStarting=new Event,this.nodeEditStarted=new Event,this.nodeEditEnding=new Event,this.nodeEditEnded=new Event;let s=this.getTemplate();this.applyTemplate("wj-control wj-content wj-treeview",s,{_root:"root"});let i=this.hostElement;setAttribute(i,"role","tree",!0),addClass(this._root,TreeView._CNDL),setAttribute(this._root,"role","group",!0),this.addEventListener(i,"mousedown",this._mousedown.bind(this)),this.addEventListener(i,"click",this._click.bind(this)),this.addEventListener(i,"keydown",this._keydown.bind(this)),this.addEventListener(i,"keypress",this._keypress.bind(this)),this.addEventListener(i,"wheel",e=>{i.scrollHeight>i.offsetHeight&&(e.deltaY<0&&0==i.scrollTop||e.deltaY>0&&i.scrollTop+i.offsetHeight>=i.scrollHeight)&&e.preventDefault()}),this.addEventListener(i,"blur",()=>{this._edtNode&&!contains(this._edtNode.element,getActiveElement())&&this.finishEditing()},!0),this.addEventListener(i,"paste",e=>{if(this._edtNode&&!this.isContentHtml){let t=(e.clipboardData||window.clipboardData).getData("text"),s=window.getSelection();t&&s.rangeCount&&(s.deleteFromDocument(),s.getRangeAt(0).insertNode(document.createTextNode(t)),e.preventDefault())}}),this.initialize(t),this.refresh()}get itemsSource(){return this._items}set itemsSource(e){this._items!=e&&(this._items=asArray(e),this.onItemsSourceChanged(),this._reload())}get childItemsPath(){return this._itmPath.path}set childItemsPath(e){e!=this.childItemsPath&&(this._itmPath.path=e,this._reload())}get displayMemberPath(){return this._dspPath.path}set displayMemberPath(e){e!=this.displayMemberPath&&(this._dspPath.path=e,this._reload())}get imageMemberPath(){return this._imgPath.path}set imageMemberPath(e){e!=this.imageMemberPath&&(this._imgPath.path=e,this._reload())}get checkedMemberPath(){return this._chkPath.path}set checkedMemberPath(e){e!=this.checkedMemberPath&&(this._chkPath.path=e,this._reload())}get isContentHtml(){return this._html}set isContentHtml(e){e!=this._html&&(this._html=asBoolean(e),this._reload())}get showCheckboxes(){return this._showChk}set showCheckboxes(e){e!=this._showChk&&(this._showChk=asBoolean(e),this._reload())}get autoCollapse(){return this._autoColl}set autoCollapse(e){this._autoColl=asBoolean(e)}get isAnimated(){return this._animated}set isAnimated(e){e!=this._animated&&(this._animated=asBoolean(e))}get isReadOnly(){return this._isReadOnly}set isReadOnly(e){this._isReadOnly=asBoolean(e),toggleClass(this.hostElement,"wj-state-readonly",this.isReadOnly)}startEditing(e){if(this.isReadOnly)return!1;if(e||(e=this.selectedNode),!e||e.isDisabled)return!1;if(!this.finishEditing())return!1;let t=e.element.querySelector("."+TreeView._CNDT);if(!t)return!1;let s=new TreeNodeEventArgs(e);if(!this.onNodeEditStarting(s))return!1;t.tabIndex=0,t.focus(),t.contentEditable="true",t.style.cursor="auto";let i=document.createRange();i.selectNodeContents(t);let n=getSelection();return n.removeAllRanges(),n.addRange(i),t.focus(),setAttribute(t,"autocomplete","off"),setAttribute(t,"autocorrect","off"),this._edtNode=e,this.onNodeEditStarted(s),!0}finishEditing(e){let t=this._edtNode;if(t){let s=t.element.querySelector("."+TreeView._CNDT);if(!s)return!1;let i=new TreeNodeEventArgs(t);if(!this.onNodeEditEnding(i))return!1;let n=t.dataItem,r=t.level;this.isContentHtml?e?s.innerHTML=this._dspPath.getValue(n,r):this._dspPath.setValue(n,r,s.innerHTML):e?s.textContent=this._dspPath.getValue(n,r):this._dspPath.setValue(n,r,s.textContent),document.createRange().selectNodeContents(s),getSelection().removeAllRanges(),s.contentEditable="false",s.style.cursor="",this._edtNode=null,this.onNodeEditEnded(i)}return!0}get allowDragging(){return null!=this._dd}set allowDragging(e){if(e!=this.allowDragging){asBoolean(e)?this._dd=new _TreeDragDropManager(this):(this._dd.dispose(),this._dd=null);let t=this.hostElement.querySelectorAll("."+TreeView._CND);for(let e=0;e<t.length;e++){let s=t[e];setAttribute(s,"draggable",!!this._dd||null)}}}get checkOnClick(){return this._chkOnClick}set checkOnClick(e){this._chkOnClick=asBoolean(e)}get expandOnClick(){return this._xpndOnClick}set expandOnClick(e){this._xpndOnClick=asBoolean(e)}get expandOnLoad(){return this._xpdnOnLoad}set expandOnLoad(e){this._xpdnOnLoad=asBoolean(e)}get selectedItem(){return this._selNode?this._selNode.dataItem:null}set selectedItem(e){e!=this.selectedItem&&(this.selectedNode=e?this.getNode(e):null)}get selectedNode(){return this._selNode}set selectedNode(e){if(e!=this.selectedNode)if(this._prevSel=this._selNode,e)e.select();else if(this._selNode){var t=this._selNode.element;removeClass(t,TreeView._CSEL),setAttribute(t,"aria-selected",!1),this._selNode=null,this._updateFocus(this._prevSel),this.onSelectedItemChanged()}}get selectedPath(){let e=[];for(let t=this.selectedNode;t;t=t.parentNode){let s=this._dspPath.getValue(t.dataItem,t.level);e.splice(0,0,s)}return e}get checkedItems(){if(null==this._chkItems){let e=TreeView,t="."+e._CND+"."+e._CEMP+" > input:checked."+e._CNDC,s=this._root.querySelectorAll(t);this._chkItems=[];for(let t=0;t<s.length;t++){let i=s[t].parentElement[e._DATAITEM_KEY];this._chkItems.push(i)}}return this._chkItems}set checkedItems(e){if(this.showCheckboxes){let t=TreeView,s="."+t._CND+"."+t._CEMP,i=this._root.querySelectorAll(s);for(let t=0;t<i.length;t++){let s=new TreeNode(this,i[t]),n=e.indexOf(s.dataItem)>-1;s.isChecked!=n&&(s.isChecked=n)}}}checkAllItems(e){if(this.showCheckboxes){let t=TreeView,s="."+t._CND+"."+t._CEMP,i=this._root.querySelectorAll(s);for(let t=0;t<i.length;t++){let s=new TreeNode(this,i[t]);s.isChecked!=e&&(s.isChecked=e)}}}get totalItemCount(){return this.hostElement.querySelectorAll("."+TreeView._CND).length}get lazyLoadFunction(){return this._lazyLoad}set lazyLoadFunction(e){e!=this._lazyLoad&&(this._lazyLoad=asFunction(e),this._reload())}getFirstNode(e,t){let s=this.hostElement.querySelector("."+TreeView._CND),i=s?new TreeNode(this,s):null;return e&&i&&!i.element.offsetHeight&&(i=i.next(e,t)),t&&i&&i.isDisabled&&(i=i.next(e,t)),i}getLastNode(e,t){let s=this.hostElement.querySelectorAll("."+TreeView._CND+":last-child"),i=s.length?new TreeNode(this,s[s.length-1]):null;return e&&i&&!i.element.offsetHeight&&(i=i.previous(e,t)),t&&i&&i.isDisabled&&(i=i.previous(e,t)),i}get nodes(){return TreeNode._getChildNodes(this,this._root)}getNode(e){this._isDirty&&this._loadTree();let t=this.hostElement.querySelectorAll("."+TreeView._CND);for(let s=0;s<t.length;s++){let i=t[s];if(i[TreeView._DATAITEM_KEY]==e)return new TreeNode(this,i)}return null}addChildNode(e,t){let s=this._createNode(t),i=this.nodes;return i?e<i.length?s.move(i[e],DropPosition.Before):s.move(i[i.length-1],DropPosition.After):s.move(this,DropPosition.Into),s}collapseToLevel(e){let t=this._animated,s=this._autoColl;this._animated=this._autoColl=!1,this._collapseToLevel(this.nodes,e,0),this._animated=t,this._autoColl=s}loadTree(e){this._loadTree(e)}onItemsSourceChanged(e){this.itemsSourceChanged.raise(this,e)}onLoadingItems(e){return this.loadingItems.raise(this,e),!e.cancel}onLoadedItems(e){this.loadedItems.raise(this,e)}onItemClicked(e){this.itemClicked.raise(this,e)}onSelectedItemChanged(e){this.selectedItemChanged.raise(this,e)}onCheckedItemsChanged(e){this._chkItems=null,this.checkedItemsChanged.raise(this,e)}onIsCollapsedChanging(e){return this.isCollapsedChanging.raise(this,e),!e.cancel}onIsCollapsedChanged(e){this.isCollapsedChanged.raise(this,e)}onIsCheckedChanging(e){return this.isCheckedChanging.raise(this,e),!e.cancel}onIsCheckedChanged(e){this.isCheckedChanged.raise(this,e)}onFormatItem(e){this.formatItem.raise(this,e)}onDragStart(e){return this.dragStart.raise(this,e),!e.cancel}onDragOver(e){return this.dragOver.raise(this,e),!e.cancel}onDrop(e){return this.drop.raise(this,e),!e.cancel}onDragEnd(e){this.dragEnd.raise(this,e)}onNodeEditStarting(e){return this.nodeEditStarting.raise(this,e),!e.cancel}onNodeEditStarted(e){this.nodeEditStarted.raise(this,e)}onNodeEditEnding(e){return this.nodeEditEnding.raise(this,e),!e.cancel}onNodeEditEnded(e){this.nodeEditEnded.raise(this,e)}refresh(e=!0){super.refresh(e),!this.isUpdating&&this._isDirty&&this._loadTree()}_updateFocus(e){let t=this._selNode;t&&(t.element.tabIndex=this._orgTabIndex),this.hostElement.tabIndex=t?-1:this._orgTabIndex,this.containsFocus()&&(t?t.element.focus():this.hostElement.focus()),e&&(e.element.tabIndex=-1)}_raiseCheckedItemsChanged(){this._toItemsChanged&&clearTimeout(this._toItemsChanged),this._toItemsChanged=setTimeout(()=>{this._toItemsChanged=null,this.onCheckedItemsChanged()},10)}_reload(){this._isDirty=!0,this.invalidate()}_createNode(e){return new TreeView(document.createElement("div"),{expandOnLoad:this.expandOnLoad,childItemsPath:this.childItemsPath,displayMemberPath:this.displayMemberPath,imageMemberPath:this.imageMemberPath,isContentHtml:this.isContentHtml,showCheckboxes:this.showCheckboxes,itemsSource:[e]}).getFirstNode()}_mousedown(e){if(!e.defaultPrevented){let t=closest(e.target,"input."+TreeView._CNDC),s=closestClass(e.target,TreeView._CND),i=s?new TreeNode(this,s):null;i&&!i.isDisabled&&(this.selectedNode=i),this._dnIndet=t&&t.indeterminate}}_click(e){if(!e.defaultPrevented){let t=closestClass(e.target,TreeView._CND);if(t){let s=new TreeNode(this,t),i="input."+TreeView._CNDC,n=closest(e.target,i),r=t.getBoundingClientRect(),a=this.rightToLeft?r.right-e.clientX:e.clientX-r.left;if(s.isDisabled)return;if(!n&&s.equals(this._edtNode))return;if(!n&&this._chkOnClick&&(!s.hasChildren||a>t.offsetHeight)&&(n=t.querySelector(i)),t.focus(),n&&(e.preventDefault(),e.stopPropagation(),setTimeout(()=>{n.indeterminate=!1,s.isChecked=!s.isChecked})),!n){let i=(e.ctrlKey||e.metaKey)&&!s.hasPendingChildren,n=!1;a<=t.offsetHeight?(i?this.collapseToLevel(s.isCollapsed?s.level+1:s.level):s.isCollapsed=!s.isCollapsed,n=!0):this.expandOnClick&&s.isCollapsed&&(i?this.collapseToLevel(s.level):s.isCollapsed=!1,n=!0),n&&i&&this.selectedNode&&this.selectedNode.ensureVisible(),n||this.isReadOnly||this.selectedNode&&this.selectedNode.equals(this._prevSel)&&this.startEditing()}this.selectedItem&&this.onItemClicked()}}}_keydown(e){if(!e.defaultPrevented){let t,s=this._getKeyCode(e),i=this._selNode,n=!0;if(!i)switch(s){case Key.Up:case Key.Down:case Key.Left:case Key.Right:case Key.Enter:case Key.Home:case Key.End:if(t=this.getFirstNode(!0,!0))return this.selectedNode=t,void e.preventDefault()}if(i&&!i.isDisabled){switch(s){case Key.F2:this.startEditing(),e.preventDefault();break;case Key.Escape:this.finishEditing(!0),e.preventDefault();break;case Key.Up:case Key.Down:this.finishEditing();break;case Key.Enter:this._edtNode?(this.finishEditing(),s=Key.Down):(this.startEditing(),e.preventDefault())}if(this._edtNode)return;if(this.rightToLeft)switch(s){case Key.Left:s=Key.Right;break;case Key.Right:s=Key.Left}switch(s){case Key.Left:!i.isCollapsed&&i.hasChildren?i.isCollapsed=!0:(i=i.parentNode)&&i.select();break;case Key.Right:i.isCollapsed&&i.hasChildren&&(i.isCollapsed=!1);break;case Key.Up:t=i.previous(!0,!0);break;case Key.Down:t=i.next(!0,!0);break;case Key.Home:t=this.getFirstNode(!0,!0);break;case Key.End:t=this.getLastNode(!0,!0);break;case Key.Space:if(this.selectedItem){let e=i.checkBox;e&&(i.isChecked=!e.checked)}break;case Key.Enter:this.selectedItem&&this.onItemClicked();break;default:n=!1}n&&(e.preventDefault(),t&&t.select())}}}_keypress(e){if(!e.defaultPrevented){if(e.ctrlKey||e.metaKey||e.altKey)return;if(e.target instanceof HTMLInputElement)return;if(this._edtNode)return;if(e.charCode>32&&this.startEditing(this.selectedNode)){let t=getActiveElement();if(contains(this._edtNode.element,t)){t.textContent=String.fromCharCode(e.charCode),e.preventDefault();let s=document.createRange();s.selectNodeContents(t),s.collapse(!1);let i=getSelection();i.removeAllRanges(),i.addRange(s)}return}if(e.charCode>32||32==e.charCode&&this._srch){e.preventDefault(),this._srch+=String.fromCharCode(e.charCode).toLowerCase(),this._toSrch&&clearTimeout(this._toSrch),this._toSrch=setTimeout(()=>{this._toSrch=null,this._srch=""},TreeView._AS_DLY);let t=this._findNext();null==t&&this._srch.length>1&&(this._srch=this._srch[this._srch.length-1],t=this._findNext()),null!=t&&(this.selectedItem=t)}}}_findNext(){if(this.hostElement&&this.selectedItem){let e=this.getNode(this.selectedItem),t=e,s=!1,i=!1;for(1==this._srch.length&&(i=!0);t;){if(!t.isDisabled&&!i){if(0==t.element.textContent.trim().toLowerCase().indexOf(this._srch))return t.dataItem}let n=t.next(!0,!0);if(n==e&&s)break;n||s||(n=this.getFirstNode(!0,!0),s=!0),t=n,i=!1}}return null}_loadTree(e){let t=this._root;if(t){if(!this.onLoadingItems(new CancelEventArgs))return;this._isDirty=!1;let s,i=this.containsFocus(),n=this.selectedItem;if(this.selectedItem=null,this._chkItems=null,this._ldLvl=-1,e&&isFunction(window.Map)){s=new Map;let e=this.hostElement.querySelectorAll("."+TreeView._CND);for(let t=0;t<e.length;t++){let i=e[t];hasClass(i,TreeView._CCLD)&&s.set(i[TreeView._DATAITEM_KEY],!0)}}if(t.innerHTML="",this._items&&this._items.forEach(e=>{this._addItem(t,0,e)}),s){let e=this.hostElement.querySelectorAll("."+TreeView._CND);for(let t=0;t<e.length;t++){let i=e[t],n=TreeNode._isNodeList(i),r=s.get(i[TreeView._DATAITEM_KEY]);toggleClass(i,TreeView._CCLD,1==r),setAttribute(i,"aria-expanded",n?(!r).toString():null)}}i&&!this.containsFocus()&&this.focus(),this.selectedItem=n,this.onLoadedItems(),this._ldLvl=-1}}_addItem(e,t,s){let i,n=this._dspPath.getValue(s,t),r=this._imgPath.getValue(s,t),a=asArray(this._itmPath.getValue(s,t),!0),l=document.createElement("div");addClass(l,TreeView._CND),l.tabIndex=-1,setAttribute(l,"role","treeitem",!0),setAttribute(l,"aria-selected",!1);let d=document.createElement("span");if(this.isContentHtml?d.innerHTML=n:d.textContent=n,addClass(d,TreeView._CNDT),l.appendChild(d),r){let e=document.createElement("img");e.src=r,l.insertBefore(e,l.firstChild)}if(this._showChk&&!this._lazyLoad&&((i=document.createElement("input")).type="checkbox",i.tabIndex=-1,addClass(i,TreeView._CNDC),l.insertBefore(i,l.firstChild)),this._dd&&l.setAttribute("draggable","true"),e.appendChild(l),l[TreeView._DATAITEM_KEY]=s,a&&0==a.length&&!this.lazyLoadFunction&&(a=null),a){let s=this.expandOnLoad;if(t>this._ldLvl&&s?(this._ldLvl=t,0==a.length&&(s=!1,addClass(l,TreeView._CCLD))):(s=!1,addClass(l,TreeView._CCLD),t<this._ldLvl&&(this._ldLvl=100)),a.length>0){let i=document.createElement("div");i.tabIndex=-1,addClass(i,TreeView._CNDL);for(let e=0;e<a.length;e++)this._addItem(i,t+1,a[e]);e.appendChild(i),setAttribute(l,"aria-expanded",s.toString(),!0),setAttribute(i,"role","group",!0)}}else addClass(l,TreeView._CEMP);if(i&&this.checkedMemberPath)if(a&&a.length){new TreeNode(this,l)._updateCheckedState()}else i.checked=this._chkPath.getValue(s,t);this.formatItem.hasHandlers&&this.onFormatItem(new FormatNodeEventArgs(s,l,t))}_collapseToLevel(e,t,s){for(let i=0;i<e.length;i++){let n=e[i];n.hasPendingChildren||(n.isCollapsed=s>=t,n.hasChildren&&this._collapseToLevel(n.nodes,t,s+1))}}_lazyLoadNode(e){let t=this.hostElement;hasClass(t,TreeView._CLDG)||(addClass(t,TreeView._CLDG),addClass(e.element,TreeView._CLDG),this.lazyLoadFunction(e,this._lazyLoadCallback.bind(e)))}_lazyLoadCallback(e){this.treeView._lazyLoadNodeDone(this,e)}_lazyLoadNodeDone(e,t){let s=TreeView;removeClass(e.element,s._CLDG),removeClass(this.hostElement,s._CLDG);let i=e.dataItem,n=e.level,r=asArray(t,!0);if(null==r||0==r.length)this._itmPath.setValue(i,n,null),addClass(e.element,s._CEMP);else if(r.length){this._itmPath.setValue(i,n,r);let t=document.createElement("div"),a=e.element;addClass(t,s._CNDL),a.parentElement.insertBefore(t,a.nextSibling);for(let e=0;e<r.length;e++)this._addItem(t,n+1,r[e]);e.isCollapsed=!1}}};TreeView._DATAITEM_KEY="wj-Data-Item",TreeView._AS_DLY=600,TreeView._AN_DLY=200,TreeView._CND="wj-node",TreeView._CNDL="wj-nodelist",TreeView._CEMP="wj-state-empty",TreeView._CNDT="wj-node-text",TreeView._CNDC="wj-node-check",TreeView._CSEL="wj-state-selected",TreeView._CCLD="wj-state-collapsed",TreeView._CCLG="wj-state-collapsing",TreeView._CLDG="wj-state-loading",TreeView.controlTemplate='<div wj-part="root"></div>';export class _TreeDragDropManager{constructor(e){this._tree=asType(e,TreeView),this._dragstartBnd=this._dragstart.bind(this),this._dragoverBnd=this._dragover.bind(this),this._dropBnd=this._drop.bind(this),this._dragendBnd=this._dragend.bind(this);let t=this._tree,s=t.hostElement;t.addEventListener(s,"dragstart",this._dragstartBnd),t.addEventListener(s,"dragover",this._dragoverBnd),t.addEventListener(s,"dragleave",this._dragoverBnd),t.addEventListener(s,"drop",this._dropBnd),t.addEventListener(s,"dragend",this._dragendBnd),t.addEventListener(s,"keydown",this._keydown)}dispose(){let e=this._tree,t=e.hostElement;e.removeEventListener(t,"dragstart",this._dragstartBnd),e.removeEventListener(t,"dragover",this._dragoverBnd),e.removeEventListener(t,"dragleave",this._dragoverBnd),e.removeEventListener(t,"drop",this._dropBnd),e.removeEventListener(t,"dragend",this._dragendBnd),e.removeEventListener(t,"keydown",this._keydown),this._showDragMarker()}_dragstart(e){if(!e.defaultPrevented){let t=this._tree,s=closestClass(e.target,TreeView._CND),i=_TreeDragDropManager;if(i._drgSrc=TreeNode._isNode(s)?new TreeNode(t,s):null,i._drgSrc){let e=new TreeNodeEventArgs(i._drgSrc);t.onDragStart(e)||(i._drgSrc=null)}i._drgSrc&&e.dataTransfer?(_startDrag(e.dataTransfer,"copyMove"),e.stopPropagation()):e.preventDefault()}}_dragover(e){this._handleDragDrop(e,!1)}_drop(e){this._handleDragDrop(e,!0)}_dragend(e){_TreeDragDropManager._drgSrc=null,this._showDragMarker(),this._tree.onDragEnd()}_keydown(e){e.defaultPrevented||e.keyCode==Key.Escape&&this._dragendBnd(null)}_handleDragDrop(e,t){let s,i,n=this._tree,r=_TreeDragDropManager,a=DropPosition,l=a.Into;if(!e.defaultPrevented&&r._drgSrc){let d=document.elementFromPoint(e.clientX,e.clientY),h=closestClass(d,TreeView._CND);if(null==h){let e=Control.getControl(closest(d,".wj-treeview"));e instanceof TreeView&&0==e.totalItemCount&&(h=e.hostElement)}if(h==r._drgSrc.element&&(h=null),h){i=h.getBoundingClientRect();let t=new TreeNode(n,h),d=t.hasPendingChildren?i.height/2:i.height/3;null==t.element?((i=Rect.fromBoundingRect(i)).inflate(-12,-12),l=a.Before):e.clientY<i.top+d?l=a.Before:(e.clientY>i.bottom-d||t.hasPendingChildren)&&(l=a.After,!t.hasChildren||t.isCollapsed||t.hasPendingChildren||(l=a.Before,i=(h=(t=t.next(!0,!1)).element).getBoundingClientRect())),r._drgSrc._contains(t)?h=null:((s=new TreeNodeDragDropEventArgs(r._drgSrc,t,l)).cancel=r._drgSrc.treeView!=t.treeView,n.onDragOver(s)||(h=null))}if(h)if((l=s.position)==a.Before){let e=s.dragSource.next(!0,!1);e&&e.element==h&&(h=null)}else if(l==a.After){let e=s.dragSource.previous(!0,!1);e&&e.element==h&&(h=null)}if(h&&!t?(e.dataTransfer.dropEffect="move",e.preventDefault(),e.stopPropagation(),this._showDragMarker(i,l)):this._showDragMarker(),h&&t&&n.onDrop(s)){n.hostElement.focus();let e=s.dragSource;e.move(s.dropTarget,s.position),e.ensureVisible(),e.select()}}}_showDragMarker(e,t){let s=this._tree,i=_TreeDragDropManager._dMarker.parentElement;if(e){let n=s.hostElement.getBoundingClientRect(),r=t==DropPosition.After?e.bottom:e.top,a={top:Math.round(r-n.top+s.hostElement.scrollTop-2),width:"75%",height:t==DropPosition.Into?e.height:4,opacity:t==DropPosition.Into?"0.15":""};s.rightToLeft?a.right=Math.round(n.right-e.right):a.left=Math.round(e.left-n.left),setCss(_TreeDragDropManager._dMarker,a),i!=s._root&&s._root.appendChild(_TreeDragDropManager._dMarker)}else i&&i.removeChild(_TreeDragDropManager._dMarker)}};_TreeDragDropManager._dMarker="undefined"!=typeof window?createElement('<div class="wj-marker">&nbsp;</div>'):null,_registerModule("wijmo.nav",selfModule);