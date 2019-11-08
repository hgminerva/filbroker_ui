import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';

// message box
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

// wijmo
import { ObservableArray } from 'wijmo/wijmo';

// async
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CollectionService {
  // ==================
  // private properties
  // ==================

  private headers = new Headers({
    'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
    'Content-Type': 'application/json'
  });
  private options = new RequestOptions({ headers: this.headers });

  // list and detail
  public collectionListSource = new Subject<ObservableArray>();
  public collectionListObservable = this.collectionListSource.asObservable();

  public collectionDeletedSource = new Subject<number>();
  public collectionDeletedObservable = this.collectionDeletedSource.asObservable();

  constructor(
    private router: Router,
    private http: Http,
    private toastr: ToastsManager
  ) {

  }

  // list and detail
  public getCollectionList(dateStart: string, dateEnd: string): void {
    let url = "http://localhost:10136/api/TrnCollection/CollectionFillterByDate/" + dateStart + "/" + dateEnd;
    let collectionListObservableArray = new ObservableArray();
    this.http.get(url, this.options).subscribe(
      response => {
        var results = new ObservableArray(response.json());
        if (results.length > 0) {
          for (var i = 0; i <= results.length - 1; i++) {
            collectionListObservableArray.push({
              Id: results[i].Id,
              CollectionNumber: results[i].CollectionNumber,
              CollectionDate: results[i].CollectionDate,
              CustomerId: results[i].CustomerId,
              Customer: results[i].Customer,
              Particulars: results[i].Particulars,
              PreparedBy: results[i].PreparedBy,
              CheckedBy: results[i].CheckedBy,
              ApprovedBy: results[i].ApprovedBy,
              IsLocked: results[i].IsLocked,
              CreatedBy: results[i].CreatedBy,
              CreatedDateTime: results[i].CreatedDateTime,
              UpdatedBy: results[i].UpdatedBy,
              UpdatedDateTime: results[i].UpdatedDateTime
            });
          }
          this.collectionListSource.next(collectionListObservableArray);
        } else {
          this.collectionListSource.next(collectionListObservableArray);
          this.toastr.error("No commissions for this date range.");
        }
      }
    );
  }

  // add operations
  public addCollection(btnAddCollection: Element): void {
    let url = "http://localhost:10136/api/TrnCollection/Add";

    this.http.post(url, JSON.stringify(""), this.options).subscribe(
      response => {
        var id = response.json();
        if (id > 0) {
          this.toastr.success("Add successful.");
          setTimeout(() => {
            this.router.navigate(['/collectionDetail/', id]);
          }, 1000);
        } else {
          this.toastr.error("Add failed.");
          btnAddCollection.removeAttribute("disabled");
          btnAddCollection.innerHTML = "<i class='fa fa-plus fa-fw'></i> Add";
        }
      },
      error => {
        this.toastr.error("Server error.");
        btnAddCollection.removeAttribute("disabled");
        btnAddCollection.innerHTML = "<i class='fa fa-plus fa-fw'></i> Add";
      }
    )
  }

  public deleteCollection(id: number): void {
    let url = "http://localhost:10136/api/TrnCollection/Delete/" + id;
    this.http.delete(url, this.options).subscribe(
      response => {
        this.collectionDeletedSource.next(1);
      },
      error => {
        this.collectionDeletedSource.next(0);
      }
    )
  }

}
