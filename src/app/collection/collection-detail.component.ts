import { Component, OnInit } from '@angular/core';
import { ViewContainerRef, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ObservableArray, CollectionView } from 'wijmo/wijmo';
import { WjComboBox } from 'wijmo/wijmo.angular2.input';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { TrnCollectionModel } from '../model/model.trn.collection';
import { CollectionService } from './collection.service';
import { TrnCollectionPayment } from '../model/model.trn.collection.payment';

@Component({
  selector: 'app-collection-detail',
  templateUrl: './collection-detail.component.html',
  styleUrls: ['./collection-detail.component.css']
})
export class CollectionDetailComponent implements OnInit {
  public title = "Collection Detail";

  @ViewChild('cmbCustomer') cboCustomer: WjComboBox;
  @ViewChild('cmbSoldUnit') cmbSoldUnit: WjComboBox;
  @ViewChild('cmbSoldUnitProject') cmbSoldUnitProject: WjComboBox;
  @ViewChild('cmbPayType') cmbPayType: WjComboBox;
  @ViewChild('cmbPreparedBy') cmbPreparedBy: WjComboBox;
  @ViewChild('cmbCheckedBy') cmbCheckedBy: WjComboBox;
  @ViewChild('cmbApprovedBy') cmbApprovedBy: WjComboBox;

  public cmbCustomersSub: any;
  public cmbUsersSub: any;
  public collectionDetailSub: any;
  public collectionLockedSub: any;
  public collectionUnlockedSub: any;
  public collectionSavedSub: any;
  public cmbSoldUnitSub: any;
  public cmbSoldUnitProjectSub: any;
  public cmbPayTypeSub: any;
  public collectionPaymentSub: any;
  public collectionPaymentSavedSub: any;
  public updateCollectionPaymentSub: any;
  public collectionPaymentDeletedSub: any;

  public fgdCollectionPaymentData: ObservableArray;
  public fgdCollectionPaymentCollectionView: CollectionView;
  public mdlAddCollectionPaymentShow: boolean = false;
  public saveAction: string = "";
  public cmbCustomersData: ObservableArray;
  public cmbUsersData: ObservableArray;
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
    private collectionService: CollectionService,
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private toastr: ToastsManager,
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.getCollectionDetail();
    }, 3000);
  }

  public getCmbCustomers(collectionDetail: any): void {
    this.collectionService.getCustomers();

    this.cmbCustomersSub = this.collectionService.customersObservable.subscribe(
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
          this.CollectionDetail.CustomerId = collectionDetail.CustomerId;
        }, 100);
      }
    );
    this.getCmbUser(collectionDetail);

  }

  public getCmbUser(user: any) {
    this.collectionService.getUsers();

    this.cmbUsersSub = this.collectionService.usersObservable.subscribe(
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
    this.collectionService.getCollectionDetail(this.getIdParameter());

    this.collectionDetailSub = this.collectionService.collectionDetailObservable.subscribe(
      data => {
        this.CollectionDetail.Id = data.Id;
        this.CollectionDetail.CollectionNumber = data.CollectionNumber;
        this.CollectionDetail.CollectionDate = data.CollectionDate;
        this.CollectionDetail.Particulars = data.Particulars;
        this.CollectionDetail.IsLocked = data.IsLocked;
        this.CollectionDetail.CreatedDateTime = data.CreatedDateTime;
        this.CollectionDetail.UpdatedDateTime = data.UpdatedDateTime;
        this.getCmbCustomers(data);
      }
    );

    this.geCollectionPaymentList();
  }

  public btnSaveCollectionClick(): void {
    let btnSaveCollection: Element = document.getElementById("btnSaveCollection");

    btnSaveCollection.setAttribute("disabled", "disabled");
    btnSaveCollection.innerHTML = "<i class='fa fa-plus fa-fw'></i> Saving...";

    this.collectionService.saveCollection(this.CollectionDetail);
    this.collectionSavedSub = this.collectionService.collectionSaveObservable.subscribe(
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

    this.collectionService.lockCollection(this.CollectionDetail);
    this.collectionLockedSub = this.collectionService.collectionLockedObservable.subscribe(
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

    this.collectionService.unLockCollection(this.CollectionDetail);
    this.collectionUnlockedSub = this.collectionService.collectionUnLockedObservable.subscribe(
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
    this.collectionService.getCollectionPayments(this.getIdParameter());

    this.collectionPaymentSub = this.collectionService.collectionPaymentSourceObservable.subscribe(
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

  public btnAddCollectionPaymentShowModalClick(): void {
    this.saveAction = "Add";
    this.mdlAddCollectionPaymentShow = true;
    this.CollecitonPayment.CollectionId = this.CollectionDetail.Id;

    this.getCmbSoldUnitsAdd();
    this.getSysDropDown("");
  }

  public btnCloseCollectionPaymenteModalClick(): void {
    this.resetCollectionPaymentClick();
    this.mdlAddCollectionPaymentShow = false;
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

  public getCmbSoldUnitEdit(soldUnitId: number): void {
    this.collectionService.getSoldUnits(this.CollectionDetail.CustomerId);
    this.cmbSoldUnitSub = this.collectionService.soldUnitsObservable.subscribe(
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
        this.cmbSoldUnitData = soldUnitData;
        setTimeout(() => {
          this.CollecitonPayment.SoldUnitId = soldUnitId;
        }, 100);
      }
    );
    let payType = this.fgdCollectionPaymentCollectionView.currentItem.PayType;
    this.getSysDropDown(payType);
  }

  public getCmbSoldUnitsAdd(): void {
    this.collectionService.getSoldUnits(this.CollectionDetail.CustomerId);
    this.cmbSoldUnitSub = this.collectionService.soldUnitsObservable.subscribe(
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
        this.cmbSoldUnitData = soldUnitData;
      }
    );
  }

  public getSysDropDown(payType: string): void {
    this.collectionService.getSysDropDown();
    this.cmbPayTypeSub = this.collectionService.sysDropDownSourceObservable.subscribe(
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
        setTimeout(() => {
          this.CollecitonPayment.PayType = payType;
        }, 100);
      }
    );
    this.getCurrentPayment();
  }

  public btnSaveCollectionPaymentModalClick(): void {
    if (this.saveAction == "Add") {
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

    this.collectionService.addCollectionPayment(this.CollecitonPayment);
    this.collectionPaymentSavedSub = this.collectionService.saveCollectionPaymentObservable.subscribe(
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

    this.collectionService.updateCollectionPayment(this.CollecitonPayment);
    this.updateCollectionPaymentSub = this.collectionService.updateCollectionPaymentObservable.subscribe(
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

  public btnOkCollectionPaymentDeleteModalClick(): void {
    let btnOkCollectionPaymentDeleteModal: Element = document.getElementById("btnOkCollectionPaymentDeleteModal");
    let btnCloseCollectionPaymentDeleteModal: Element = document.getElementById("btnCloseCollectionPaymentDeleteModal");

    let selectedCollectionPayment = this.fgdCollectionPaymentCollectionView.currentItem;

    btnOkCollectionPaymentDeleteModal.setAttribute("disabled", "disabled");
    btnCloseCollectionPaymentDeleteModal.setAttribute("disabled", "disabled");

    this.collectionService.deleteCollectionPayment(selectedCollectionPayment.Id);
    this.collectionPaymentDeletedSub = this.collectionService.collectionPaymentDeletedObservable.subscribe(
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
    let currentSoldUnit = this.fgdCollectionPaymentCollectionView.currentItem.SoldUnitId;
    this.saveAction = "Edit";
    this.getCmbSoldUnitEdit(currentSoldUnit);
  }

  public getCurrentPayment(): void {
    this.CollecitonPayment.Id = this.fgdCollectionPaymentCollectionView.currentItem.Id;
    this.CollecitonPayment.CollectionId = this.fgdCollectionPaymentCollectionView.currentItem.CollectionId;
    this.CollecitonPayment.Amount = this.fgdCollectionPaymentCollectionView.currentItem.Amount;
    this.CollecitonPayment.CheckNumber = this.fgdCollectionPaymentCollectionView.currentItem.CheckNumber;
    this.CollecitonPayment.CheckDate = this.fgdCollectionPaymentCollectionView.currentItem.CheckDate;
    this.CollecitonPayment.CheckBank = this.fgdCollectionPaymentCollectionView.currentItem.CheckBank;
    this.CollecitonPayment.OtherInformation = this.fgdCollectionPaymentCollectionView.currentItem.OtherInformation;
    this.mdlAddCollectionPaymentShow = true;
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