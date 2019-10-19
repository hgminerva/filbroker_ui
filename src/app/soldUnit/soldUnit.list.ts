// angular
import { Component, ViewContainerRef, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

// wijmo
import { ObservableArray, CollectionView } from 'wijmo/wijmo';

// message box
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

// service(s)
import { SoldUnitService } from './soldUnit.service';
import { SecurityService } from '../security/security.service';

// model(s)
import { TrnSoldUnit } from '../model/model.trn.soldUnit';

@Component({
  templateUrl: './soldUnit.list.html'
})
export class SoldUnitList {

  // ==================
  // private properties
  // ==================
  private currentDate = new Date();
  private currentDateString = [this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, this.currentDate.getDate()].join('-');

   // userrights
   private canEdit: boolean = false;
   private canSave: boolean = false;
   private canLock: boolean = false;
   private canUnlock: boolean = false;
   private canPrint: boolean = false;
   private canDelete: boolean = false;

  // list
  private soldUnitsSub: any;

  // list operations
  private soldUnitsDeletedSub: any;

  // =================
  // public properties
  // =================

  public title: string = 'Sold Unit List';
  public soldUnitFilter: string;

  // model(s)
  public soldUnit: TrnSoldUnit = {
    id: 0,
    soldUnitNumber: "",
    soldUnitDate: this.currentDateString,
    projectId: 0,
    project: "",
    unitId: 0,
    unit: "",
    customerId: 0,
    customer: "",
    brokerId: 0,
    broker: "",
    agent: "",
    brokerCoordinator: "",
    checklistId: 0,
    checklist: "",
    price: 0,
    tcp: 0,
    tsp: 0,
    tcpdiscount: 0,
    equityValue: 0,
    equityPercent: 0,
    equitySpotPayment1: 0,
    equitySpotPayment2: 0,
    equitySpotPayment3: 0,
    discount: 0,
    discountedEquity: 0,
    reservation: 0,
    netEquity: 0,
    netEquityBalance: 0,
    netEquityInterest: 0,
    netEquityNoOfPayments: 0,
    netEquityAmortization: 0,
    balance: 0,
    balanceInterest: 0,
    balanceNoOfPayments: 0,
    balanceAmortization: 0,
    totalInvestment: "",
    paymentOptions: "",
    financing: "",
    remarks: "",
    financingType: "",
    preparedBy: 0,
    preparedByUser: "",
    checkedBy: 0,
    checkedByUser: "",
    approvedBy: 0,
    approvedByUser: "",
    status: "SOLD",
    isLocked: false,
    createdBy: 0,
    createdDateTime: this.currentDateString,
    updatedBy: 0,
    updatedDateTime: this.currentDateString,
  };

  // list data sources
  public fgdSoldUnitData: ObservableArray;
  public fgdSoldUnitCollection: CollectionView;

  // filters
  public calDateStartData = new Date();
  public calDateEndData = new Date();

  // modal
  public mdlSoldUnitDeleteShow: boolean = false;

  // =======
  // angular
  // =======

  // constructor
  constructor(
    private soldUnitService: SoldUnitService,
    private toastr: ToastsManager,
    private viewContainer: ViewContainerRef,
    private router: Router,
    private securityService: SecurityService,
    private location: Location
  ) {
    this.toastr.setRootViewContainerRef(viewContainer);
  }

  public getUserRights() {
    var userRightsData = localStorage.getItem('userRights')
    var userRights = JSON.parse(userRightsData);
    for (var i = 0; i < userRights.length; i++) {
      if (userRights[i].page == 'CUSTOMER DETAIL') {
        this.canEdit = userRights[i].canEdit;
        this.canSave = userRights[i].canSave;
        this.canLock = userRights[i].canLock;
        this.canUnlock = userRights[i].canUnlock;
        this.canPrint = userRights[i].canPrint;
        this.canDelete = userRights[i].canDelete;
      }
    }
  }
  // ng
  ngOnInit() {
    this.fgdSoldUnitData = new ObservableArray();
    this.fgdSoldUnitCollection = new CollectionView(this.fgdSoldUnitData);

    if (this.securityService.openPage("SOLD UNIT LIST") == true) {
      this.getSoldUnits();
    } else {
      this.toastr.error("No rights to open page.")
      setTimeout(() => { this.location.back(); }, 1000);
    }

    this.getUserRights();
  }

  ngOnDestroy() {
    if (this.soldUnitsSub != null) this.soldUnitsSub.unsubscribe();
    if (this.soldUnitsDeletedSub != null) this.soldUnitsDeletedSub.unsubscribe();
  }

  // ==============
  // public methods
  // ==============

  // list
  public getSoldUnits(): void {
    let dateStart = [this.calDateStartData.getFullYear(), this.calDateStartData.getMonth() + 1, this.calDateStartData.getDate()].join('-');
    let dateEnd = [this.calDateEndData.getFullYear(), this.calDateEndData.getMonth() + 1, this.calDateEndData.getDate()].join('-');
    let soldUnits = new ObservableArray();

    this.soldUnitService.getSoldUnitsPerDates(dateStart, dateEnd);

    this.soldUnitsSub = this.soldUnitService.soldUnitsObservable.subscribe(
      data => {
        this.fgdSoldUnitData = data;
        this.fgdSoldUnitCollection = new CollectionView(this.fgdSoldUnitData);
        this.fgdSoldUnitCollection.pageSize = 15;
        this.fgdSoldUnitCollection.trackChanges = true;
      }
    );
  }

  // ======
  // events
  // ======

  // list operations
  public btnAddSoldUnitClick(): void {
    let btnAddSoldUnit: Element = document.getElementById("btnAddSoldUnit");

    btnAddSoldUnit.setAttribute("disabled", "true");
    btnAddSoldUnit.innerHTML = "<i class='fa fa-plus fa-fw'></i> Adding...";

    this.soldUnitService.addSoldUnit(this.soldUnit, btnAddSoldUnit);
  }
  public btnEditSoldUnitClick(): void {
    let selectedSoldUnit = this.fgdSoldUnitCollection.currentItem;
    this.router.navigate(['/soldUnit', selectedSoldUnit.id]);
  }
  public btnDeleteSoldUnitClick(): void {
    this.mdlSoldUnitDeleteShow = true;
  }

  // delete modal operations
  public btnOkSoldUnitDeleteModalClick(): void {
    let btnOkSoldUnitDeleteModal: Element = document.getElementById("btnOkSoldUnitDeleteModal");
    let btnCloseSoldUnitDeleteModal: Element = document.getElementById("btnCloseSoldUnitDeleteModal");

    let selectedSoldUnit = this.fgdSoldUnitCollection.currentItem;

    btnOkSoldUnitDeleteModal.setAttribute("disabled", "disabled");
    btnCloseSoldUnitDeleteModal.setAttribute("disabled", "disabled");

    this.soldUnitService.deleteSoldUnit(selectedSoldUnit.id);
    this.soldUnitsDeletedSub = this.soldUnitService.soldUnitDeletedObservable.subscribe(
      data => {
        if (data == 1) {
          this.toastr.success("Delete successful.");
          this.fgdSoldUnitCollection.remove(selectedSoldUnit);

          btnOkSoldUnitDeleteModal.removeAttribute("disabled");
          btnCloseSoldUnitDeleteModal.removeAttribute("disabled");

          this.mdlSoldUnitDeleteShow = false
        } else if (data == 0) {
          this.toastr.error("Delete failed.");

          btnOkSoldUnitDeleteModal.removeAttribute("disabled");
          btnCloseSoldUnitDeleteModal.removeAttribute("disabled");
        }
      }
    );
  }
  public btnCloseSoldUnitDeleteModalClick(): void {
    this.mdlSoldUnitDeleteShow = false;
  }
}