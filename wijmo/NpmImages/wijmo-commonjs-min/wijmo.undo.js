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

"use strict";var __extends=this&&this.__extends||function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function i(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}}();Object.defineProperty(exports,"__esModule",{value:!0});var wijmo_1=require("wijmo/wijmo"),selfModule=require("wijmo/wijmo.undo"),UndoableAction=function(){function t(t){this._target=t}return t.prototype.undo=function(){this.applyState(this._oldState),this._actions&&this._actions.forEach(function(t){t.undo()})},t.prototype.redo=function(){this.applyState(this._newState),this._actions&&this._actions.forEach(function(t){t.redo()})},t.prototype.close=function(){return!0},t.prototype.applyState=function(t){},t.prototype.shouldAddAsChildAction=function(t){return!1},t.prototype.addChildAction=function(t){this._actions||(this._actions=[]),this._actions.push(t)},Object.defineProperty(t.prototype,"target",{get:function(){return this._target},enumerable:!0,configurable:!0}),t}();exports.UndoableAction=UndoableAction;var _UndoStackHTML=function(){function t(){}return t.addTarget=function(n,e){var i=!1;if(e instanceof HTMLInputElement)t._addInputElement(n,e),i=!0;else if(e instanceof HTMLTextAreaElement)t._addTextAreaElement(n,e),i=!0;else if(e instanceof HTMLSelectElement)t._addSelectElement(n,e),i=!0;else for(var o=0;o<e.children.length;o++){var c=e.children[o];n.addTarget(c)&&(i=!0)}return i},t._addInputElement=function(n,e){if("checkbox"==e.type)e.addEventListener("click",function(t){n._pendingAction=new CheckboxClickAction(t),n.pushPendingAction()});else if("radio"==e.type){e.addEventListener("mousedown",function(t){n._pendingAction=new RadioClickAction(t)},!0);var i=t._getLabel(e);i&&i.addEventListener("mousedown",function(t){n._pendingAction=new RadioClickAction({target:e})},!0),e.addEventListener("focus",function(t){n._pendingAction instanceof RadioClickAction&&n._pendingAction.target==t.target||(n._pendingAction=new RadioClickAction(t))}),e.addEventListener("click",function(t){n._pendingAction instanceof RadioClickAction&&n.pushPendingAction()})}else e.addEventListener("focus",function(t){n._pendingAction=new InputChangeAction(t)}),e.addEventListener("blur",function(t){n._pendingAction instanceof InputChangeAction&&n.pushPendingAction()})},t._addTextAreaElement=function(t,n){n.addEventListener("focus",function(n){t._pendingAction=new InputChangeAction(n)}),n.addEventListener("blur",function(n){t._pendingAction instanceof InputChangeAction&&t.pushPendingAction()})},t._addSelectElement=function(t,n){n.addEventListener("focus",function(n){t._pendingAction=new InputChangeAction(n)}),n.addEventListener("blur",function(n){t._pendingAction instanceof InputChangeAction&&t.pushPendingAction()})},t._getLabel=function(t){var n=t.parentElement;return n instanceof HTMLLabelElement||(n=document.querySelector('label[for="'+t.id+'"')),n},t}();exports._UndoStackHTML=_UndoStackHTML;var InputChangeAction=function(t){function n(n){var e=t.call(this,n.target)||this;return wijmo_1.assert(n.target instanceof HTMLInputElement||n.target instanceof HTMLTextAreaElement||n.target instanceof HTMLSelectElement,"HTMLInputElement, HTMLTextAreaElement, or HTMLSelectElement expected."),e._oldState=e._target.value,e}return __extends(n,t),n.prototype.close=function(){return this._newState=this._target.value,this._newState!=this._oldState},n.prototype.applyState=function(t){var n=this._target;n.value=t,n.dispatchEvent(UndoStack._evtInput),wijmo_1.isFunction(n.select)?n.select():n.focus()},n}(UndoableAction);exports.InputChangeAction=InputChangeAction;var CheckboxClickAction=function(t){function n(n){var e=t.call(this,n.target)||this;return wijmo_1.assert("checkbox"==e._target.type,"checkbox expected"),e._newState=e._target.checked,e._oldState=!e._newState,e}return __extends(n,t),n.prototype.applyState=function(t){this._target.checked=t,this._target.focus()},n}(UndoableAction);exports.CheckboxClickAction=CheckboxClickAction;var RadioClickAction=function(t){function n(n){var e=t.call(this,n.target)||this,i=e._target.type;return wijmo_1.assert("radio"==i,"radio button expected"),e._oldState=e._getState(),e}return __extends(n,t),n.prototype.close=function(){return this._newState=this._getState(),this._newState!=this._oldState},n.prototype.applyState=function(t){t&&(t.checked=!0,t.focus())},n.prototype._getState=function(){for(var t='input[name="'+this._target.name+'"]',n=document.querySelectorAll(t),e=0;e<n.length;e++)if(n[e].checked)return n[e];return null},n}(UndoableAction);exports.RadioClickAction=RadioClickAction;var UndoStack=function(){function t(n,e){var i=this;this._autoKbd=!0,this._stack=[],this._maxActions=1e3,this._ptr=0,this.addingTarget=new wijmo_1.Event,this.addedTarget=new wijmo_1.Event,this.addingAction=new wijmo_1.Event,this.addedAction=new wijmo_1.Event,this.undoingAction=new wijmo_1.Event,this.undoneAction=new wijmo_1.Event,this.redoingAction=new wijmo_1.Event,this.redoneAction=new wijmo_1.Event,this.stateChanged=new wijmo_1.Event,t._evtInput=document.createEvent("HTMLEvents"),t._evtInput.initEvent("input",!0,!1),e&&wijmo_1.copy(this,e),this.addTarget(n||"body"),document.addEventListener("keydown",function(t){if(i._autoKbd&&t.ctrlKey&&!t.defaultPrevented)switch(t.keyCode){case 90:i.canUndo&&(i.undo(),t.stopImmediatePropagation());break;case 89:i.canRedo&&(i.redo(),t.stopImmediatePropagation())}},!0)}return t.prototype.addTarget=function(t){var n=!1;if(wijmo_1.isString(t)){for(var e=document.querySelectorAll(t),i=!1,o=0;o<e.length;o++)this.addTarget(e[o])&&(i=!0);return i}wijmo_1.assert(t instanceof HTMLElement,"Undo target should be an HTML element");var c=new AddTargetEventArgs(t);if(c.cancel=wijmo_1.hasClass(t,"wj-no-undo"),this.onAddingTarget(c)){var r=wijmo_1.Control.getControl(t);r&&(n=_UndoStackWijmo.addTarget(this,r)),n||wijmo_1.closest(t,".wj-control")||(n=_UndoStackHTML.addTarget(this,t)),n&&this.onAddedTarget(c)}return n},Object.defineProperty(t.prototype,"autoKeyboard",{get:function(){return this._autoKbd},set:function(t){this._autoKbd=wijmo_1.asBoolean(t)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isDisabled",{get:function(){return this._disabled},set:function(t){this._disabled=wijmo_1.asBoolean(t)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"maxActions",{get:function(){return this._maxActions},set:function(t){t!=this._maxActions&&(this._maxActions=wijmo_1.asNumber(t,!1,!0),this.clear())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"actionCount",{get:function(){return this._stack.length},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"canUndo",{get:function(){return this._stack.length&&this._ptr>0&&!this._disabled},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"canRedo",{get:function(){return this._stack.length&&this._ptr<this._stack.length&&!this._disabled},enumerable:!0,configurable:!0}),t.prototype.undo=function(){if(this.canUndo){var t=this._stack[this._ptr-1],n=new UndoActionEventArgs(t);this.onUndoingAction(n)&&(this._ptr--,this._undoing=!0,t.undo(),this._undoing=!1,this._pendingAction=null,this.onUndoneAction(n),this.onStateChanged())}},t.prototype.redo=function(){if(this.canRedo){var t=this._stack[this._ptr],n=new UndoActionEventArgs(t);this.onRedoingAction(n)&&(this._ptr++,this._undoing=!0,t.redo(),this._undoing=!1,this._pendingAction=null,this.onRedoneAction(n),this.onStateChanged())}},t.prototype.clear=function(){this._ptr=0,this._stack.splice(0,this._stack.length),this.onStateChanged()},t.prototype.onAddingTarget=function(t){return this.addingTarget.raise(this,t),!t.cancel},t.prototype.onAddedTarget=function(t){this.addedTarget.raise(this,t)},t.prototype.onAddingAction=function(t){return this.addingAction.raise(this,t),!t.cancel},t.prototype.onAddedAction=function(t){this.addedAction.raise(this,t)},t.prototype.onUndoingAction=function(t){return this.undoingAction.raise(this,t),!t.cancel},t.prototype.onUndoneAction=function(t){this.undoneAction.raise(this,t)},t.prototype.onRedoingAction=function(t){return this.redoingAction.raise(this,t),!t.cancel},t.prototype.onRedoneAction=function(t){this.redoneAction.raise(this,t)},t.prototype.onStateChanged=function(){this.stateChanged.raise(this,wijmo_1.EventArgs.empty)},t.prototype.pushPendingAction=function(){if(!this._disabled&&!this._undoing&&this._pendingAction&&this._pendingAction.close()){if(this._stack.splice(this._ptr,this._stack.length-this._ptr),wijmo_1.assert(this._stack.length==this._ptr,"should be at the end of the stack"),this._stack.length){var t=this._stack[this._ptr-1];if(t.shouldAddAsChildAction(this._pendingAction))return t.addChildAction(this._pendingAction),this._pendingAction=null,void this.onStateChanged()}var n=new UndoActionEventArgs(this._pendingAction);if(!this.onAddingAction(n))return;this._stack.push(this._pendingAction),this._ptr++,this._pendingAction=null;var e=this._stack.length-this._maxActions;e>0&&(this._stack.splice(0,e),this._ptr-=e,wijmo_1.assert(this._ptr>=0,"pointer should not be negative")),this.onStateChanged()}},t}();exports.UndoStack=UndoStack;var AddTargetEventArgs=function(t){function n(n){var e=t.call(this)||this;return e._target=n,e}return __extends(n,t),Object.defineProperty(n.prototype,"target",{get:function(){return this._target},enumerable:!0,configurable:!0}),n}(wijmo_1.CancelEventArgs);exports.AddTargetEventArgs=AddTargetEventArgs;var UndoActionEventArgs=function(t){function n(n){var e=t.call(this)||this;return e._action=n,e}return __extends(n,t),Object.defineProperty(n.prototype,"action",{get:function(){return this._action},enumerable:!0,configurable:!0}),n}(wijmo_1.CancelEventArgs);function softInput(){return wijmo_1._getModule("wijmo.input")}function softGrid(){return wijmo_1._getModule("wijmo.grid")}function softGauge(){return wijmo_1._getModule("wijmo.gauge")}exports.UndoActionEventArgs=UndoActionEventArgs,exports.softInput=softInput,exports.softGrid=softGrid,exports.softGauge=softGauge;var _UndoStackWijmo=function(){function t(){}return t.addTarget=function(n,e){return softGrid()&&e instanceof softGrid().FlexGrid?t._addFlexGrid(n,e):softGauge()&&e instanceof softGauge().Gauge?t._addGauge(n,e):!!e.hostElement.querySelector("input")&&t._addInputControl(n,e)},t._addInputControl=function(t,n){var e=n.hostElement,i=e.querySelector("input");wijmo_1.assert(null!=i,"We need a control with an input element"),e.addEventListener("focus",function(){t._pendingAction instanceof InputControlChangeAction&&t._pendingAction.target==i||(t._pendingAction=new InputControlChangeAction({target:i}))},!0),e.addEventListener("blur",function(){t._pendingAction instanceof InputControlChangeAction&&!n.containsFocus()&&t.pushPendingAction()},!0);var o=n.dropDown;return null!=o&&o.addEventListener("blur",function(e){t._pendingAction instanceof InputControlChangeAction&&!n.containsFocus()&&t.pushPendingAction()},!0),!0},t._addGauge=function(t,n){if(!(softGauge()&&n instanceof softGauge().Gauge))return!1;var e=n.hostElement;e.addEventListener("focus",function(){t._pendingAction instanceof GaugeChangeAction&&t._pendingAction.target==n||(t._pendingAction=new GaugeChangeAction(n))},!0),e.addEventListener("blur",function(){t._pendingAction instanceof GaugeChangeAction&&!n.containsFocus()&&t.pushPendingAction()},!0)},t._addFlexGrid=function(t,n){return!!(softGrid()&&n instanceof softGrid().FlexGrid)&&(n.beginningEdit.addHandler(function(n,e){t._pendingAction=new GridEditAction(n,e)}),n.cellEditEnded.addHandler(function(n,e){t._pendingAction instanceof GridEditAction&&t.pushPendingAction()}),n.pastingCell.addHandler(function(n,e){t._pendingAction=new GridEditAction(n,e)}),n.pastedCell.addHandler(function(n,e){t._pendingAction instanceof GridEditAction&&t.pushPendingAction()}),n.sortingColumn.addHandler(function(n,e){t._pendingAction=new GridSortAction(n,e)}),n.sortedColumn.addHandler(function(n,e){t._pendingAction instanceof GridSortAction&&t.pushPendingAction()}),n.resizingColumn.addHandler(function(n,e){t._pendingAction instanceof GridResizeAction&&t._pendingAction.target==n||(t._pendingAction=new GridResizeAction(n,e))}),n.resizedColumn.addHandler(function(){t._pendingAction instanceof GridResizeAction&&t.pushPendingAction()}),n.autoSizingColumn.addHandler(function(n,e){t._pendingAction=new GridResizeAction(n,e)}),n.autoSizedColumn.addHandler(function(){t._pendingAction instanceof GridResizeAction&&t.pushPendingAction()}),n.draggingColumn.addHandler(function(n,e){t._pendingAction=new GridDragAction(n,e)}),n.draggedColumn.addHandler(function(n,e){t._pendingAction instanceof GridDragAction&&t.pushPendingAction()}),n.rowAdded.addHandler(function(n,e){e.cancel||(t._pendingAction=new GridAddRowAction(n,e),t.pushPendingAction())}),n.deletingRow.addHandler(function(n,e){e.cancel||(t._pendingAction=new GridRemoveRowAction(n,e),t.pushPendingAction())}),!0)},t}();exports._UndoStackWijmo=_UndoStackWijmo;var InputControlChangeAction=function(t){function n(n){var e=t.call(this,n)||this;return e._ctl=wijmo_1.Control.getControl(wijmo_1.closest(n.target,".wj-control")),softInput()&&(e._ctl instanceof softInput().MultiSelect?e._oldState=e._ctl.checkedItems.slice(0):e._ctl instanceof softInput().MultiAutoComplete&&(e._oldState=e._ctl.selectedItems.slice(0))),e}return __extends(n,t),n.prototype.close=function(){if(softInput()){if(this._ctl instanceof softInput().MultiSelect)return this._newState=this._ctl.checkedItems.slice(0),!this._sameContent(this._oldState,this._newState);if(this._ctl instanceof softInput().MultiAutoComplete)return this._newState=this._ctl.selectedItems.slice(0),!this._sameContent(this._oldState,this._newState)}return t.prototype.close.call(this)},n.prototype.applyState=function(n){softInput()&&this._ctl instanceof softInput().MultiSelect?this._ctl.checkedItems=n:softInput()&&this._ctl instanceof softInput().MultiAutoComplete?this._ctl.selectedItems=n:t.prototype.applyState.call(this,n)},n.prototype._sameContent=function(t,n){if(t.length!=n.length)return!1;for(var e=0;e<t.length;e++)if(t[e]!=n[e])return!1;return!0},n}(InputChangeAction),GaugeChangeAction=function(t){function n(n){var e=t.call(this,n)||this;return e._oldState=n.value,e}return __extends(n,t),n.prototype.close=function(){return this._newState=this._target.value,this._newState!=this._oldState},n.prototype.applyState=function(t){this._target.value=t},n}(UndoableAction),GridEditAction=function(t){function n(n,e){var i=t.call(this,n)||this;return i._row=e.row,i._col=e.col,i._dataItem=n.rows[e.row].dataItem,i._oldState=n.getCellData(e.row,e.col,!1),i}return __extends(n,t),n.prototype.close=function(){var t=this._target.collectionView;return(!t||!t.currentAddItem)&&(this._timeStamp=Date.now(),this._newState=this._target.getCellData(this._row,this._col,!1),this._newState!=this._oldState)},n.prototype.applyState=function(t){var n=this._row,e=this._target,i=e.rows;if(this._dataItem&&i[n].dataItem!=this._dataItem){n=-1;for(var o=0;o<i.length;o++)if(i[o].dataItem==this._dataItem){n=o;break}}n>-1&&(e.setCellData(n,this._col,t,!1),e.select(n,this._col),e.focus())},n.prototype.shouldAddAsChildAction=function(t){return t instanceof n&&t.target==this.target&&t._timeStamp-this._timeStamp<100},n}(UndoableAction),GridSortAction=function(t){function n(n,e){var i=t.call(this,n)||this,o=i._target.collectionView;return o&&(i._oldState=o.sortDescriptions.slice()),i}return __extends(n,t),n.prototype.close=function(){var t=this._target.collectionView;return!!t&&(this._newState=t.sortDescriptions.slice(),!0)},n.prototype.applyState=function(t){var n=this._target.collectionView;n&&n.deferUpdate(function(){var e=n.sortDescriptions;e.clear(),t.forEach(function(t){e.push(t)})})},n}(UndoableAction),GridResizeAction=function(t){function n(n,e){var i=t.call(this,n)||this;return i._col=n.columns[e.col],i._oldState=i._col.renderWidth,i}return __extends(n,t),n.prototype.close=function(){return this._newState=this._col.renderWidth,this._newState!=this._oldState},n.prototype.applyState=function(t){this._col.width=t},n}(UndoableAction),GridDragAction=function(t){function n(n,e){var i=t.call(this,n)||this;return i._col=n.columns[e.col],i._oldState=n.columns.indexOf(i._col),i}return __extends(n,t),n.prototype.close=function(){return this._newState=this._col.grid.columns.indexOf(this._col),this._newState!=this._oldState},n.prototype.applyState=function(t){var n=this,e=this._col.grid.columns;e.deferUpdate(function(){e.remove(n._col),e.insert(t,n._col)})},n}(UndoableAction),GridAddRowAction=function(t){function n(n,e){var i=t.call(this,n)||this,o=i._target.collectionView;if(o&&o.currentAddItem){var c=o.currentAddItem,r=o.sourceCollection.indexOf(c),a=o.currentPosition;i._oldState={item:c,index:r,position:a},i._newState={index:r,position:a}}return i}return __extends(n,t),n.prototype.close=function(){return null!=this._oldState},n.prototype.applyState=function(t){var n=this._target.collectionView;if(n){var e=n.sourceCollection;if(t.item){if(e.splice(t.index,1),n instanceof wijmo_1.CollectionView&&n.trackChanges){var i=t.item;wijmo_1.assert(n.itemsAdded.indexOf(i)>-1,"item should be in the itemsAdded list"),n.itemsAdded.remove(i)}}else{i=this._oldState.item;e.splice(t.index,0,i),n instanceof wijmo_1.CollectionView&&n.trackChanges&&(wijmo_1.assert(n.itemsAdded.indexOf(i)<0,"item should not be in the itemsAdded list"),n.itemsAdded.push(i))}n.refresh(),n.moveCurrentToPosition(t.position)}},n}(UndoableAction),GridRemoveRowAction=function(t){function n(n,e){var i=t.call(this,n)||this,o=i._target.collectionView;if(o){var c=n.rows[e.row].dataItem,r=o.sourceCollection.indexOf(c),a=o.currentPosition;i._oldState={item:c,index:r,position:a},i._newState={index:r,position:a}}return i}return __extends(n,t),n.prototype.close=function(){return null!=this._oldState},n.prototype.applyState=function(t){var n=this._target.collectionView;if(n){var e=n.sourceCollection;if(t.item){if(e.splice(t.index,0,t.item),n instanceof wijmo_1.CollectionView&&n.trackChanges){var i=t.item;wijmo_1.assert(n.itemsRemoved.indexOf(i)>-1,"item should be in the itemsRemoved list"),n.itemsRemoved.remove(i)}}else if(e.splice(t.index,1),n instanceof wijmo_1.CollectionView&&n.trackChanges){i=this._oldState.item;wijmo_1.assert(n.itemsRemoved.indexOf(i)<0,"item should not be in the itemsRemoved list"),n.itemsRemoved.push(i)}n.refresh(),n.moveCurrentToPosition(t.position);var o=new(softGrid().CellRange)(t.position,0,t.position,this.target.columns.length-1);this.target.select(o)}},n}(UndoableAction);wijmo_1._registerModule("wijmo.undo",selfModule);