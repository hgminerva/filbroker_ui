// angular
import { Component, ViewContainerRef, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

// wijmo
import { ObservableArray, CollectionView } from 'wijmo/wijmo';
import { WjComboBox } from 'wijmo/wijmo.angular2.input';

// message box 
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

// service(s)
import { ChecklistService } from './checklist.service';
import { SecurityService } from '../security/security.service';

// model(s)
import { MstChecklist } from '../model/model.mst.checklist';

import * as wjcCore from 'wijmo/wijmo';
import * as wjcGrid from 'wijmo/wijmo.grid';

@Component({
  templateUrl: './checklist.list.html'
})
export class ChecklistList {

  // ==================
  // private properties
  // ==================

  // userrights
  private canEdit: boolean = false;
  private canSave: boolean = false;
  private canLock: boolean = false;
  private canUnlock: boolean = false;
  private canPrint: boolean = false;
  private canDelete: boolean = false;

  private currentDate = new Date();
  private currentDateString = [this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, this.currentDate.getDate()].join('-');

  // filters
  private projectsSub: any;

  // list
  private checklistsSub: any;

  // list operations
  private checklistDeletedSub: any;

  // =================
  // public properties
  // =================

  public title: string = 'Checklist List';
  public filterChecklist: string;

  // model(s)
  public checklist: MstChecklist = {
    id: 0,
    checklistCode: "",
    checklist: "",
    checklistDate: this.currentDateString,
    projectId: 0,
    project: "",
    remarks: "",
    status: "ACTIVE",
    isLocked: false,
    createdBy: 1,
    createdDateTime: this.currentDateString,
    updatedBy: 1,
    updatedDateTime: this.currentDateString
  };

  // list data source
  public fgdChecklistData: ObservableArray;
  public fgdChecklistCollection: CollectionView;

  // filter combo boxes
  public cmbProjectsData: ObservableArray;

  // filter combo boxes element (if there are events associated)
  @ViewChild("cmbProjects")
  public cmbProjects: ElementRef;

  // modals
  public mdlChecklistDeleteShow: boolean = false;

  // =======
  // angular
  // =======

  //constructor
  constructor(
    private checklistService: ChecklistService,
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
    this.fgdChecklistData = new ObservableArray();
    this.fgdChecklistCollection = new CollectionView(this.fgdChecklistData);

    if (this.securityService.openPage("CHECKLIST") == true) {
      this.getProjects();
    } else {
      this.toastr.error("No rights to open page.")
      setTimeout(() => { this.location.back(); }, 1000);
    }

    this.getUserRights();
  }
  ngOnDestroy() {
    if (this.checklistsSub != null) this.checklistsSub.unsubscribe();
    if (this.projectsSub != null) this.projectsSub.unsubscribe();
    if (this.checklistDeletedSub != null) this.checklistDeletedSub.unsubscribe();
  }

  // ===============
  // Get User Rights
  // ===============
  private getUserRights() {
    var userRightsData = localStorage.getItem('userRights')
    var userRights = JSON.parse(userRightsData);
    for (var i = 0; i < userRights.length; i++) {
      if (userRights[i].page == 'CHECKLIST') {
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

  // filters
  public getProjects(): void {
    this.checklistService.getProjects();

    this.projectsSub = this.checklistService.projectsObservable.subscribe(
      data => {
        if (data.length > 0) {
          this.cmbProjectsData = data;
        }
      }
    );
  }

  // list
  public getChecklistPerProjectId(projectId: number): void {
    let checklist = new ObservableArray();

    this.checklistService.getChecklistPerProjectId(projectId);

    this.checklistsSub = this.checklistService.checklistsObservable.subscribe(
      data => {
        this.fgdChecklistData = data;
        this.fgdChecklistCollection = new CollectionView(this.fgdChecklistData);
        this.fgdChecklistCollection.pageSize = 15;
        this.fgdChecklistCollection.trackChanges = true;
      }
    );
  }

  // ======
  // events
  // ======

  // filter events
  public cmbProjectsChange(): void {
    let index = this.cmbProjects["selectedIndex"];
    let projectId = this.cmbProjectsData[index]["id"];
    let project = this.cmbProjectsData[index]["project"];

    this.checklist.projectId = projectId;
    this.checklist.project = project;

    this.getChecklistPerProjectId(projectId);
  }

  // list events
  public btnAddChecklistClick(): void {
    let btnAddChecklist: Element = document.getElementById("btnAddChecklist");

    btnAddChecklist.setAttribute("disabled", "disabled");
    btnAddChecklist.innerHTML = "<i class='fa fa-plus fa-fw'></i> Adding...";

    this.checklistService.addChecklist(this.checklist, btnAddChecklist);
  }

  checklistItemFormatter(panel, row, col, cell) {
    if (panel.cellType === wjcGrid.CellType.Cell && panel.columns[col].header === 'Edit') {
      cell.innerHTML = `<button class="btn-edit btn btn-primary btn-xs btn-block"><i class="fa fa-edit fa-fw"></i> Edit</button>`
    }

    if (panel.cellType === wjcGrid.CellType.Cell && panel.columns[col].header === 'Delete') {
      cell.innerHTML = `<button class="btn-delete btn btn-danger btn-xs btn-block"><i class="fa fa-trash fa-fw"></i> Delete</button>`
    }
  }

  checklistGridClick(s, e) {
    if (wjcCore.hasClass(e.target, 'btn-edit')) {
      this.btnEditChecklistClick();
    }

    if (wjcCore.hasClass(e.target, 'btn-delete')) {
      this.btnDeleteChecklistClick();
    }
  }

  public btnDeleteChecklistClick(): void {
    this.mdlChecklistDeleteShow = true;
  }
  public btnEditChecklistClick(): void {
    let selectedChecklist = this.fgdChecklistCollection.currentItem;
    this.router.navigate(['/checklist', selectedChecklist.id]);
  }

  // delete checklist modal events
  public btnOkChecklistDeleteModalClick(): void {
    let btnOkChecklistDeleteModal: Element = document.getElementById("btnOkChecklistDeleteModal");
    let btnCloseChecklistDeleteModal: Element = document.getElementById("btnCloseChecklistDeleteModal");

    let selectedChecklist = this.fgdChecklistCollection.currentItem;

    btnOkChecklistDeleteModal.setAttribute("disabled", "disabled");
    btnCloseChecklistDeleteModal.setAttribute("disabled", "disabled");

    this.checklistService.deleteChecklist(selectedChecklist.id);
    this.checklistDeletedSub = this.checklistService.checklistDeletedObservable.subscribe(
      data => {
        if (data == 1) {
          this.toastr.success("Delete successful.");
          this.fgdChecklistCollection.remove(selectedChecklist);

          btnOkChecklistDeleteModal.removeAttribute("disabled");
          btnCloseChecklistDeleteModal.removeAttribute("disabled");

          this.mdlChecklistDeleteShow = false
        } else if (data == 0) {
          this.toastr.error("Delete failed.");

          btnOkChecklistDeleteModal.removeAttribute("disabled");
          btnCloseChecklistDeleteModal.removeAttribute("disabled");
        }
      }
    );
  }
  public btnCloseChecklistDeleteModalClick(): void {
    this.mdlChecklistDeleteShow = false
  }

}