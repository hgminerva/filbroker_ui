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
/**
* {@module wijmo.react.base}
 * Contains base classes for all Wijmo for React directives.
 */
/**
 *
 */
export declare var ___keepComment: any;
import { Event, EventArgs } from 'wijmo/wijmo';
import * as React from 'react';
/**
 * Base class for all Wijmo components for React.
 */
export declare class ComponentBase extends React.Component<any, any> {
    readonly _beforeRender: Event;
    readonly _afterRender: Event;
    readonly _beforeWillUnmount: Event;
    readonly _afterWillUnmount: Event;
    static readonly _propsParent: string;
    static readonly _typeSiblingIdProp: string;
    static _siblingDirId: number;
    private _objPropHash;
    private _isMounted;
    private _mountedCBs;
    private _siblingInsertedEH;
    controlType: any;
    props: any;
    control: any;
    parent: ComponentBase;
    protected _parentProp: string;
    protected _parentInCtor: boolean;
    protected _siblingId: string;
    constructor(props: any, controlType: any, meta?: any);
    render(): any;
    componentDidMount(): any;
    componentWillUnmount(): void;
    shouldComponentUpdate(nextProps: any): boolean;
    _mountedCB(cb: () => void): void;
    protected _renderImpl(): any;
    protected _onBeforeRender(e?: EventArgs): void;
    protected _onAfterRender(e?: EventArgs): void;
    protected _onBeforeWillUnmount(e?: EventArgs): void;
    protected _onAfterWillUnmount(e?: EventArgs): void;
    protected _createControl(): any;
    private _prepareControl;
    protected _initParent(): void;
    private _setParent;
    private _isChild;
    private _isParentInCtor;
    private _getParentProp;
    private _getSiblingIndex;
    private _siblingInserted;
    private _copy;
    private _sameValue;
    private _isEvent;
    private _getElement;
    private _ignoreProp;
}
