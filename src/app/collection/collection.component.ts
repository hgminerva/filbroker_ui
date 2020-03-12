import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ObservableArray, CollectionView } from 'wijmo/wijmo';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { CollectionService } from './collection.service';
import { TrnCollectionModel } from '../model/model.trn.collection';

import * as wjcCore from 'wijmo/wijmo';
import * as wjcGrid from 'wijmo/wijmo.grid';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
  title = "Collection";

  public calDateStartData = new Date();
  public calDateEndData = new Date();
  public fgdCollectionData: ObservableArray;
  public fgdCollectionCollectionView: CollectionView;
  public collectionSub: any;
  public collectionsDeletedSub: any;
  public mdlDeleteCollectionShow: boolean = false;
  public currentCollectionNumber: "";

  public collectionModel: TrnCollectionModel = {
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
    private router: Router,
    private collectionService: CollectionService,
    private toastr: ToastsManager
  ) { }

  ngOnInit() {
    this.geCollectionList();
  }

  public geCollectionList(): void {
    let dateStart = [this.calDateStartData.getFullYear(), this.calDateStartData.getMonth() + 1, this.calDateStartData.getDate()].join('-');
    let dateEnd = [this.calDateEndData.getFullYear(), this.calDateEndData.getMonth() + 1, this.calDateEndData.getDate()].join('-');

    this.collectionService.getCollectionList(dateStart, dateEnd);

    this.collectionSub = this.collectionService.collectionListObservable.subscribe(
      data => {
        this.fgdCollectionData = data;
        this.fgdCollectionCollectionView = new CollectionView(this.fgdCollectionData);
        this.fgdCollectionCollectionView.pageSize = 15;
        this.fgdCollectionCollectionView.trackChanges = true;
      }
    );
  }

  public btnAddCollectionClick(): void {
    let btnAddCollection: Element = document.getElementById("btnAddCollection");
    btnAddCollection.setAttribute("disabled", "true");
    btnAddCollection.innerHTML = "<i class='fa fa-plus fa-fw'></i> Adding...";

    this.collectionService.addCollection(btnAddCollection);
  }

  collectionItemFormatter(panel, row, col, cell) {
    if (panel.cellType === wjcGrid.CellType.Cell && panel.columns[col].header === 'Edit') {
      cell.innerHTML = `<button class="btn-edit btn btn-primary btn-xs btn-block"><i class="fa fa-edit fa-fw"></i> Edit</button>`
    }

    if (panel.cellType === wjcGrid.CellType.Cell && panel.columns[col].header === 'Delete') {
      cell.innerHTML = `<button class="btn-delete btn btn-danger btn-xs btn-block"><i class="fa fa-trash fa-fw"></i> Delete</button>`
    }
  }

  collectionGridClick(s, e) {
    if (wjcCore.hasClass(e.target, 'btn-edit')) {
      this.btnEditCollectionClick();
    }

    if (wjcCore.hasClass(e.target, 'btn-delete')) {
      this.btnDeleteCollectionClick();
    }
  }

  public btnEditCollectionClick(): void {
    let selectedCollection = this.fgdCollectionCollectionView.currentItem;

    setTimeout(() => {
      this.router.navigate(['/collectionDetail/', selectedCollection.Id]);
    }, 100);
  }

  public btnDeleteCollectionClick(): void {
    this.mdlDeleteCollectionShow = true;
    this.currentCollectionNumber = this.fgdCollectionCollectionView.currentItem.CollectionNumber;
  }

  public btnCloseCollectionDeleteModalClick(): void {
    this.mdlDeleteCollectionShow = false;
  }

  public btnOkCollectionDeleteModalClick(): void {
    let btnOkCollectionDeleteModal: Element = document.getElementById("btnOkCollectionDeleteModal");
    let btnCloseCollectionDeleteModal: Element = document.getElementById("btnCloseCollectionDeleteModal");

    let selectedCollection = this.fgdCollectionCollectionView.currentItem;

    btnOkCollectionDeleteModal.setAttribute("disabled", "disabled");
    btnCloseCollectionDeleteModal.setAttribute("disabled", "disabled");

    this.collectionService.deleteCollection(selectedCollection.Id);
    this.collectionsDeletedSub = this.collectionService.collectionDeletedObservable.subscribe(
      data => {
        if (data == 1) {
          this.toastr.success("Delete successful.");
          this.fgdCollectionCollectionView.remove(selectedCollection);

          btnOkCollectionDeleteModal.removeAttribute("disabled");
          btnCloseCollectionDeleteModal.removeAttribute("disabled");

          this.mdlDeleteCollectionShow = false
        } else if (data == 0) {
          this.toastr.error("Delete failed.");

          btnOkCollectionDeleteModal.removeAttribute("disabled");
          btnCloseCollectionDeleteModal.removeAttribute("disabled");
        }
      }
    );
  }

  ngOnDestroy() {
    if (this.collectionSub != null) this.collectionSub.unsubscribe();
    if (this.collectionsDeletedSub != null) this.collectionsDeletedSub.unsubscribe();
  }
}
