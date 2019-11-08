import { Component, OnInit } from '@angular/core';
import { ViewContainerRef, ViewChild, ElementRef } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

// wijmo
import { ObservableArray, CollectionView } from 'wijmo/wijmo';
import { WjComboBox } from 'wijmo/wijmo.angular2.input';

// message box 
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { TrnCollectionModel } from '../model/model.trn.collection';
import { CollectionDetailService } from './collection-detail.service';
import { TrnCollectionPayment } from '../model/model.trn.collection.payment';
import { DateTime } from '../../../wijmo/NpmImages/wijmo-amd-min/wijmo';

@Component({
  selector: 'app-collection-detail',
  templateUrl: './collection-detail.component.html',
  styleUrls: ['./collection-detail.component.css']
})
export class CollectionDetailComponent implements OnInit {

  public title = "Collection Detail";

  @ViewChild('cmbCustomer') cboCustomer: WjComboBox;
  @ViewChild('cmbPreparedBy') cmbPreparedBy: WjComboBox;
  @ViewChild('cmbCheckedBy') cmbCheckedBy: WjComboBox;
  @ViewChild('cmbApprovedBy') cmbApprovedBy: WjComboBox;

  @ViewChild('cmbSoldUnit') cmbSoldUnit: WjComboBox;
  @ViewChild('cmbSoldUnitProject') cmbSoldUnitProject: WjComboBox;
  @ViewChild('cmbPayType') cmbPayType: WjComboBox;

  private cmbCustomersSub: any;
  private cmbUsersSub: any;
  private collectionDetailSub: any;
  private collectionLockedSub: any;
  private collectionUnlockedSub: any;
  private collectionSavedSub: any;
  private cmbSoldUnitSub: any;
  private cmbSoldUnitProjectSub: any;
  private cmbPayTypeSub: any;
  private collectionPaymentSub: any;
  public collectionPaymentSavedSub: any;
  public updateCollectionPaymentSub: any;


  public fgdCollectionPaymentData: ObservableArray;
  public fgdCollectionPaymentCollectionView: CollectionView;

  public mdlAddCollectionPaymentShow: boolean = false;

  public saveAction: string = "";

  public cmbCustomersData: ObservableArray;
  public cmbUsersData: ObservableArray; // (cmbPreparedBy, cmbCheckedBy, cmbApprovedBy)
  public cmbSoldUnitData: ObservableArray;
  public cmbSoldUnitProjectData: ObservableArray;
  public cmbPayTypeData: ObservableArray;

  public CollectionDetail: TrnCollectionModel = {
    Id: 0,
    CollectionNumber: "",
    CollectionDate: "",
    CustomerId: 0,
    Customer: "",
    Particulars: "",
    PreparedBy: 0,
    CheckedBy: 0,
    ApprovedBy: 0,
    IsLocked: false,
    CreatedBy: 0,
    CreatedDateTime: "",
    UpdatedBy: 0,
    UpdatedDateTime: ""
  }

  constructor(
    private collectionDetailService: CollectionDetailService,
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private toastr: ToastsManager,
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.getCollectionDetail();
    }, 3000);
  }

  // detail combo boxes
  public getCmbCustomers(customerId: number): void {
    this.collectionDetailService.getCustomers();

    this.cmbCustomersSub = this.collectionDetailService.customersObservable.subscribe(
      data => {
        let collectionCustomerData = new ObservableArray();

        if (data.length > 0) {
          for (var i = 0; i <= data.length - 1; i++) {
            collectionCustomerData.push({
              id: data[i].id,
              customerCode: data[i].customerCode,
              fullName: data[i].fullName
            });
          }
        }
        this.cmbCustomersData = collectionCustomerData;
        setTimeout(() => {
          this.CollectionDetail.CustomerId = customerId;
        }, 100);
      }
    );
  }

  // detail combo boxes
  public getCmbUser(user: any) {
    this.collectionDetailService.getUsers();

    this.cmbUsersSub = this.collectionDetailService.usersObservable.subscribe(
      data => {
        let userData = new ObservableArray();
        if (data.length > 0) {
          for (var i = 0; i <= data.length - 1; i++) {
            userData.push({
              id: data[i].id,
              fullName: data[i].fullName
            });
          }
        }
        this.cmbUsersData = userData;
        setTimeout(() => {
          this.CollectionDetail.PreparedBy = user.PreparedBy;
          this.CollectionDetail.CheckedBy = user.CheckedBy;
          this.CollectionDetail.ApprovedBy = user.ApprovedBy;
          this.CollectionDetail.UpdatedBy = user.UpdatedBy;
          this.CollectionDetail.CreatedBy = user.CreatedBy;
        }, 100);
      }
    );
  }

  public getIdParameter() {
    let id = 0;
    this.activatedRoute.params.subscribe(params => {
      id = params['id'];
    });

    return id;
  }

  private getCollectionDetail(): void {
    console.log(this.getIdParameter());

    this.collectionDetailService.getCollectionDetail(this.getIdParameter());

    this.collectionDetailSub = this.collectionDetailService.collectionDetailObservable.subscribe(
      data => {
        this.CollectionDetail.Id = data.Id;
        this.CollectionDetail.CollectionNumber = data.CollectionNumber;
        this.CollectionDetail.CollectionDate = data.CollectionDate;
        this.CollectionDetail.Particulars = data.Particulars;
        this.CollectionDetail.IsLocked = data.IsLocked;
        this.CollectionDetail.CreatedDateTime = data.CreatedDateTime;
        this.CollectionDetail.UpdatedDateTime = data.UpdatedDateTime;
        this.getCmbUser(data);
        this.getCmbCustomers(data.CustomerId);
      }
    );

    this.geCollectionPaymentList();
  }

  public btnSaveCollectionClick(): void {
    let btnSaveCollection: Element = document.getElementById("btnSaveCollection");

    btnSaveCollection.setAttribute("disabled", "disabled");
    btnSaveCollection.innerHTML = "<i class='fa fa-plus fa-fw'></i> Saving...";

    this.collectionDetailService.saveCollection(this.CollectionDetail);
    this.collectionSavedSub = this.collectionDetailService.collectionSaveObservable.subscribe(
      data => {
        if (data == 1) {
          this.toastr.success("Saving successful.");
          btnSaveCollection.removeAttribute("disabled");
          btnSaveCollection.innerHTML = "<i class='fa fa-plus fa-fw'></i> Save";
        } else if (data == 0) {
          this.toastr.error("Saving failed.");
          btnSaveCollection.removeAttribute("disabled");
          btnSaveCollection.innerHTML = "<i class='fa fa-plus fa-fw'></i> Save";
        }
      }
    );
  }

  public btnLockCollectionClick(): void {
    let btnLockCollection: Element = document.getElementById("btnLockCollection");

    btnLockCollection.setAttribute("disabled", "disabled");
    btnLockCollection.innerHTML = "<i class='fa fa-plus fa-fw'></i> Locking...";

    this.collectionDetailService.lockCollection(this.CollectionDetail);
    this.collectionLockedSub = this.collectionDetailService.collectionLockedObservable.subscribe(
      data => {
        if (data == 1) {
          this.toastr.success("Locking successful.");
          this.CollectionDetail.IsLocked = true;
          btnLockCollection.removeAttribute("disabled");
          btnLockCollection.innerHTML = "<i class='fa fa-lock fa-fw'></i> Lock";
        } else if (data == 0) {
          this.toastr.error("Locking failed.");
          btnLockCollection.removeAttribute("disabled");
          btnLockCollection.innerHTML = "<i class='fa fa-lock fa-fw'></i> Lock";
        }
      }
    );
  }

  public btnUnlockCollectionClick(): void {
    let btnUnlockCollection: Element = document.getElementById("btnUnlockCollection");

    btnUnlockCollection.setAttribute("disabled", "disabled");
    btnUnlockCollection.innerHTML = "<i class='fa fa-plus fa-fw'></i> Unlocking...";

    this.collectionDetailService.unLockCollection(this.CollectionDetail);
    this.collectionUnlockedSub = this.collectionDetailService.collectionUnLockedObservable.subscribe(
      data => {
        if (data == 1) {
          this.toastr.success("Unlocking successful.");
          this.CollectionDetail.IsLocked = false;
          btnUnlockCollection.removeAttribute("disabled");
          btnUnlockCollection.innerHTML = "<i class='fa fa-lock fa-fw'></i> Unlock";
        } else if (data == 0) {
          this.toastr.error("Unlocking failed.");
          btnUnlockCollection.removeAttribute("disabled");
          btnUnlockCollection.innerHTML = "<i class='fa fa-lock fa-fw'></i> Unlock";
        }
      }
    );
  }

  public geCollectionPaymentList(): void {

    this.collectionDetailService.getCollectionPayments(this.getIdParameter());

    this.collectionPaymentSub = this.collectionDetailService.collectionPaymentSourceObservable.subscribe(
      data => {
        setTimeout(() => {
          this.fgdCollectionPaymentData = data;
          this.fgdCollectionPaymentCollectionView = new CollectionView(this.fgdCollectionPaymentData);
          this.fgdCollectionPaymentCollectionView.pageSize = 15;
          this.fgdCollectionPaymentCollectionView.trackChanges = true;
        }, 3000);
      }
    );
  }


  // Add Collection
  public btnAddCollectionPaymentShowModalClick(): void {
    this.saveAction = "Add";
    this.mdlAddCollectionPaymentShow = true;
    this.CollecitonPayment.CollectionId = this.CollectionDetail.Id;
    this.getCmbSoldUnits();
    this.getSysDropDown();
  }

  public btnCloseCollectionPaymenteModalClick(): void {
    this.mdlAddCollectionPaymentShow = false;
    this.resetCollectionPaymentClick();
  }

  public CollecitonPayment: TrnCollectionPayment = {
    Id: 0,
    CollectionId: 0,
    SoldUnitId: 0,
    PayType: "",
    Amount: 0,
    CheckNumber: "",
    CheckDate: new Date,
    CheckBank: "",
    OtherInformation: "",
  }

  public getCmbSoldUnits(): void {
    this.collectionDetailService.getSoldUnits();
    this.cmbSoldUnitSub = this.collectionDetailService.soldUnitsObservable.subscribe(
      data => {
        let soldUnitData = new ObservableArray();

        if (data.length > 0) {
          for (var i = 0; i <= data.length - 1; i++) {
            soldUnitData.push({
              Id: data[i].Id,
              SoldUnit: data[i].SoldUnit,
              Project: data[i].Project,
            });
          }
        }
        this.cmbSoldUnitProjectData = soldUnitData;
        this.cmbSoldUnitData = soldUnitData;
      }
    );
  }

  public cmbSoldUnitChange(): void {
    let index = this.cmbSoldUnit["selectedIndex"];
    let cmbSoldUnit = this.cmbSoldUnitData[index]["Id"];
    this.CollecitonPayment.SoldUnitId = cmbSoldUnit;
  }

  public getSysDropDown(): void {
    this.collectionDetailService.getSysDropDown();
    this.cmbPayTypeSub = this.collectionDetailService.sysDropDownSourceObservable.subscribe(
      data => {
        let sysDropDownData = new ObservableArray();

        if (data.length > 0) {
          for (var i = 0; i <= data.length - 1; i++) {
            sysDropDownData.push({
              Id: data[i].Id,
              Description: data[i].Description
            });
          }
        }
        this.cmbPayTypeData = sysDropDownData;
      }
    );
  }


  public btnSaveCollectionPaymentModalClick(): void {

    if (this.saveAction == "Save") {
      this.saveCollectionPayment();
    }

    if (this.saveAction == "Edit") {
      this.updateCollecitonPayment();
    }

  }

  public saveCollectionPayment(): void {
    let btnSaveCollectionPaymentModal: Element = document.getElementById("btnSaveCollectionPaymentModal");

    btnSaveCollectionPaymentModal.setAttribute("disabled", "disabled");
    btnSaveCollectionPaymentModal.innerHTML = "<i class='fa fa-plus fa-fw'></i> Saving...";

    this.collectionDetailService.addCollectionPayment(this.CollecitonPayment);
    this.collectionPaymentSavedSub = this.collectionDetailService.saveCollectionPaymentObservable.subscribe(
      data => {
        if (data == 1) {
          this.toastr.success("Saving successful.");
          btnSaveCollectionPaymentModal.removeAttribute("disabled");
          btnSaveCollectionPaymentModal.innerHTML = "<i class='fa fa-plus fa-fw'></i> Save";
          this.mdlAddCollectionPaymentShow = false;
          this.geCollectionPaymentList();
        } else if (data == 0) {
          this.toastr.error("Saving failed.");
          btnSaveCollectionPaymentModal.removeAttribute("disabled");
          btnSaveCollectionPaymentModal.innerHTML = "<i class='fa fa-plus fa-fw'></i> Save";
        }
      }
    );
  }

  public updateCollecitonPayment(): void {
    let btnSaveCollectionPaymentModal: Element = document.getElementById("btnSaveCollectionPaymentModal");

    btnSaveCollectionPaymentModal.setAttribute("disabled", "disabled");
    btnSaveCollectionPaymentModal.innerHTML = "<i class='fa fa-plus fa-fw'></i> Saving...";

    this.collectionDetailService.updateCollectionPayment(this.CollecitonPayment);
    this.updateCollectionPaymentSub = this.collectionDetailService.updateCollectionPaymentObservable.subscribe(
      data => {
        if (data == 1) {
          this.toastr.success("Saving successful.");
          btnSaveCollectionPaymentModal.removeAttribute("disabled");
          btnSaveCollectionPaymentModal.innerHTML = "<i class='fa fa-plus fa-fw'></i> Save";
          this.mdlAddCollectionPaymentShow = false;
          this.geCollectionPaymentList();
        } else if (data == 0) {
          this.toastr.error("Saving failed.");
          btnSaveCollectionPaymentModal.removeAttribute("disabled");
          btnSaveCollectionPaymentModal.innerHTML = "<i class='fa fa-plus fa-fw'></i> Save";
        }
      }
    );
  }


  public mdlDeleteCollectionPaymentShow: boolean;
  public currentSoldUnit: string = "";

  public btnDeleteCollectionPaymentClick(): void {
    this.mdlDeleteCollectionPaymentShow = true;
    this.currentSoldUnit = this.fgdCollectionPaymentCollectionView.currentItem.SoldUnit;
  }

  public btnCloseCollectionPaymentDeleteModalClick(): void {
    this.mdlDeleteCollectionPaymentShow = false;
  }

  public collectionPaymentDeletedSub: any;
  public btnOkCollectionPaymentDeleteModalClick(): void {
    let btnOkCollectionPaymentDeleteModal: Element = document.getElementById("btnOkCollectionPaymentDeleteModal");
    let btnCloseCollectionPaymentDeleteModal: Element = document.getElementById("btnCloseCollectionPaymentDeleteModal");

    let selectedCollectionPayment = this.fgdCollectionPaymentCollectionView.currentItem;

    btnOkCollectionPaymentDeleteModal.setAttribute("disabled", "disabled");
    btnCloseCollectionPaymentDeleteModal.setAttribute("disabled", "disabled");

    this.collectionDetailService.deleteCollectionPayment(selectedCollectionPayment.Id);
    this.collectionPaymentDeletedSub = this.collectionDetailService.collectionPaymentDeletedObservable.subscribe(
      data => {
        if (data == 1) {
          this.toastr.success("Delete successful.");
          this.fgdCollectionPaymentCollectionView.remove(selectedCollectionPayment);

          btnOkCollectionPaymentDeleteModal.removeAttribute("disabled");
          btnCloseCollectionPaymentDeleteModal.removeAttribute("disabled");

          this.mdlDeleteCollectionPaymentShow = false
          this.resetCollectionPaymentClick();
        } else if (data == 0) {
          this.toastr.error("Delete failed.");

          btnOkCollectionPaymentDeleteModal.removeAttribute("disabled");
          btnCloseCollectionPaymentDeleteModal.removeAttribute("disabled");
        }
      }
    );
  }

  public btnEditCollectionPaymentClick(): void {
    this.saveAction = "Edit";
    this.mdlAddCollectionPaymentShow = true;
    this.getCmbSoldUnits();
    this.getSysDropDown();
    this.CollecitonPayment.Id = this.fgdCollectionPaymentCollectionView.currentItem.Id;
    this.CollecitonPayment.CollectionId = this.fgdCollectionPaymentCollectionView.currentItem.CollectionId;
    this.CollecitonPayment.SoldUnitId = this.fgdCollectionPaymentCollectionView.currentItem.SoldUnitId;
    this.CollecitonPayment.PayType = this.fgdCollectionPaymentCollectionView.currentItem.PayType;
    this.CollecitonPayment.Amount = this.fgdCollectionPaymentCollectionView.currentItem.Amount;
    this.CollecitonPayment.CheckNumber = this.fgdCollectionPaymentCollectionView.currentItem.CheckNumber;
    this.CollecitonPayment.CheckDate = this.fgdCollectionPaymentCollectionView.currentItem.CheckDate;
    this.CollecitonPayment.CheckBank = this.fgdCollectionPaymentCollectionView.currentItem.CheckBank;
    this.CollecitonPayment.OtherInformation = this.fgdCollectionPaymentCollectionView.currentItem.OtherInformation;
  }

  public resetCollectionPaymentClick(): void {

    this.CollecitonPayment.Id = 0;
    this.CollecitonPayment.CollectionId = 0;
    this.CollecitonPayment.SoldUnitId = 0;
    this.CollecitonPayment.PayType = "";
    this.CollecitonPayment.Amount = 0;
    this.CollecitonPayment.CheckNumber = "";
    this.CollecitonPayment.CheckDate = new Date();
    this.CollecitonPayment.CheckBank = "";
    this.CollecitonPayment.OtherInformation = "";
  }


  ngOnDestroy() {
    if (this.cmbCustomersSub != null) this.cmbCustomersSub.unsubscribe();
    if (this.cmbUsersSub != null) this.cmbUsersSub.unsubscribe();
    if (this.collectionDetailSub != null) this.collectionDetailSub.unsubscribe();
    if (this.collectionLockedSub != null) this.cmbCustomersSub.unsubscribe();
    if (this.collectionUnlockedSub != null) this.collectionUnlockedSub.unsubscribe();
  }

}
