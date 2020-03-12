// angular
import { Component, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

// services
import { BrokerService } from './broker.service';
import { SecurityService } from '../security/security.service';

// wijmo
import { ObservableArray, CollectionView } from 'wijmo/wijmo';

// message box
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

// model(s)
import { MstBroker } from '../model/model.mst.broker';

import * as wjcCore from 'wijmo/wijmo';
import * as wjcGrid from 'wijmo/wijmo.grid';

@Component({
  templateUrl: './broker.list.html'
})
export class BrokerList {

  // ==================
  // private properties
  // ==================

  // user rights
  public canEdit: boolean = false;
  private canSave: boolean = false;
  private canLock: boolean = false;
  private canUnlock: boolean = false;
  private canPrint: boolean = false;
  private canDelete: boolean = false;

  private currentDate = new Date();
  private currentDateString = [this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, this.currentDate.getDate()].join('-');

  // list
  private brokersSub: any;

  // list operations
  private brokerDeletedSub: any;

  // =================
  // public properties
  // =================

  public title: string = 'Broker List';
  public filterBroker: string;

  // model(s)
  public broker: MstBroker = {
    id: 0,
    brokerCode: "",
    lastName: "",
    firstName: "",
    middleName: "",
    fullName: "",
    licenseNumber: "",
    birthDate: this.currentDateString,
    civilStatus: "SINGLE",
    gender: "",
    address: "",
    telephoneNumber: "",
    mobileNumber: "",
    religion: "",
    emailAddress: "",
    facebook: "",
    tin: "",
    realtyFirm: "",
    realtyFirmAddress: "",
    realtyFirmTelephoneNumber: "",
    realtyFirmMobileNumber: "",
    realtyFirmFaxNumber: "",
    realtyFirmEmailAddress: "",
    realtyFirmWebsite: "",
    realtyFirmTIN: "",
    organization: "",
    remarks: "",
    picture: "",
    attachment1: "",
    attachment2: "",
    attachment3: "",
    attachment4: "",
    attachment5: "",
    status: "ACTIVE",
    isLocked: false,
    createdBy: 0,
    createdDateTime: this.currentDateString,
    updatedBy: 0,
    updatedDateTime: this.currentDateString,
  };

  // list data sources
  public fgdBrokerData: ObservableArray;
  public fgdBrokerCollection: CollectionView;

  // modals
  public mdlBrokerDeleteShow: boolean = false;

  // =======
  // angular
  // =======

  // constructor
  constructor(
    private brokerService: BrokerService,
    private toastr: ToastsManager,
    private viewContainer: ViewContainerRef,
    private router: Router,
    private securityService: SecurityService,
    private location: Location
  ) {
    this.toastr.setRootViewContainerRef(viewContainer);
  }

  // ng
  ngOnInit() {
    this.fgdBrokerData = new ObservableArray();
    this.fgdBrokerCollection = new CollectionView(this.fgdBrokerData);

    if (this.securityService.openPage("BROKER LIST") == true) {
      this.getBrokers();
    } else {
      this.toastr.error("No rights to open page.")
      setTimeout(() => { this.location.back(); }, 1000);
    }

    this.getUserRights();

  }
  ngOnDestroy() {
    if (this.brokersSub != null) this.brokersSub.unsubscribe();
    if (this.brokerDeletedSub != null) this.brokerDeletedSub.unsubscribe();
  }

  // ===============
  // Get User Rights
  // ===============
  private getUserRights() {
    var userRightsData = localStorage.getItem('userRights')
    var userRights = JSON.parse(userRightsData);
    for (var i = 0; i < userRights.length; i++) {
      if (userRights[i].page == 'BROKER LIST') {
        this.canEdit = userRights[i].canEdit;
        this.canSave = userRights[i].canSave;
        this.canLock = userRights[i].canLock;
        this.canUnlock = userRights[i].canUnlock;
        this.canPrint = userRights[i].canPrint;
        this.canDelete = userRights[i].canDelete;
      }
    }
  }

  // ==============
  // public methods
  // ==============

  // list
  public getBrokers(): void {
    this.brokerService.getBrokers();

    this.brokersSub = this.brokerService.brokersObservable.subscribe(
      data => {
        this.fgdBrokerData = data;
        this.fgdBrokerCollection = new CollectionView(this.fgdBrokerData);
        this.fgdBrokerCollection.pageSize = 15;
        this.fgdBrokerCollection.trackChanges = true;
      }
    );
  }

  // ======
  // events
  // ======

  // list operations
  public btnAddBrokerClick(): void {
    let btnAddBroker: Element = document.getElementById("btnAddBroker");

    btnAddBroker.setAttribute("disabled", "disabled");
    btnAddBroker.innerHTML = "<i class='fa fa-plus fa-fw'></i> Adding...";

    this.brokerService.addBroker(this.broker);
  }

  brokerItemFormatter(panel, row, col, cell) {
    if (panel.cellType === wjcGrid.CellType.Cell && panel.columns[col].header === 'Edit') {
      cell.innerHTML = `<button class="btn-edit btn btn-primary btn-xs btn-block"><i class="fa fa-edit fa-fw"></i> Edit</button>`
    }

    if (panel.cellType === wjcGrid.CellType.Cell && panel.columns[col].header === 'Delete') {
      cell.innerHTML = `<button class="btn-delete btn btn-danger btn-xs btn-block"><i class="fa fa-trash fa-fw"></i> Delete</button>`
    }
  }

  brokerGridClick(s, e) {
    if (wjcCore.hasClass(e.target, 'btn-edit')) {
      this.btnEditBrokerClick();
    }

    if (wjcCore.hasClass(e.target, 'btn-delete')) {
      this.btnDeleteBrokerClick();
    }
  }

  public btnEditBrokerClick(): void {
    let selectedBroker = this.fgdBrokerCollection.currentItem;
    this.router.navigate(['/broker', selectedBroker.id]);
  }
  public btnDeleteBrokerClick(): void {
    this.mdlBrokerDeleteShow = true;
  }

  // delete broker modal operations
  public btnOkBrokerDeleteModalClick(): void {

    let btnOkBrokerDeleteModal: Element = document.getElementById("btnOkBrokerDeleteModal");
    let btnCloseBrokerDeleteModal: Element = document.getElementById("btnCloseBrokerDeleteModal");

    btnOkBrokerDeleteModal.setAttribute("disabled", "disabled");
    btnCloseBrokerDeleteModal.setAttribute("disabled", "disabled");

    let selectedBroker = this.fgdBrokerCollection.currentItem;

    this.brokerService.deleteBroker(selectedBroker.id);

    this.brokerDeletedSub = this.brokerService.brokerDeletedObservable.subscribe(
      data => {
        if (data == 1) {
          this.toastr.success("Delete successful.");
          this.fgdBrokerCollection.remove(selectedBroker);

          btnOkBrokerDeleteModal.removeAttribute("disabled");
          btnCloseBrokerDeleteModal.removeAttribute("disabled");

          this.mdlBrokerDeleteShow = false;
        } else if (data == 0) {
          this.toastr.error("Delete failed.");

          btnOkBrokerDeleteModal.removeAttribute("disabled");
          btnCloseBrokerDeleteModal.removeAttribute("disabled");
        }
      }
    );
  }
  public btnCloseBrokerDeleteModalClick(): void {
    this.mdlBrokerDeleteShow = false;
  }
}
