import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';

// message box
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

// wijmo
import { ObservableArray, CollectionView } from 'wijmo/wijmo';
import { WjComboBox } from 'wijmo/wijmo.angular2.input';

// async
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import { MstCustomer } from '../model/model.mst.customer';

import { SysDropDown } from '../model/model.sys.dropDown';
import { SysBlob } from '../model/model.sys.blob';
import { TrnCollectionModel } from '../model/model.trn.collection';
import { TrnCollectionPayment } from '../model/model.trn.collection.payment';
@Injectable()
export class CollectionDetailService {
  // ==================
  // private properties
  // ==================
  
  private headers = new Headers({
    'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
    'Content-Type': 'application/json'
  });
  private options = new RequestOptions({ headers: this.headers });

  public customersSource = new Subject<ObservableArray>();
  public customersObservable = this.customersSource.asObservable();

  public soldUnitsSource = new Subject<ObservableArray>();
  public soldUnitsObservable = this.soldUnitsSource.asObservable();

  public sysDropDownSource = new Subject<ObservableArray>();
  public sysDropDownSourceObservable = this.sysDropDownSource.asObservable();

  public usersSource = new Subject<ObservableArray>();
  public usersObservable = this.usersSource.asObservable();

  public collectionDetailSource = new Subject<TrnCollectionModel>();
  public collectionDetailObservable = this.collectionDetailSource.asObservable();

  public collectionSaveSource = new Subject<number>();
  public collectionSaveObservable = this.collectionSaveSource.asObservable();

  public updateCollectionPaymentSource = new Subject<number>();
  public updateCollectionPaymentObservable = this.updateCollectionPaymentSource.asObservable();

  public collectionLockedSource = new Subject<number>();
  public collectionLockedObservable = this.collectionLockedSource.asObservable();

  public collectionUnLockedSource = new Subject<number>();
  public collectionUnLockedObservable = this.collectionUnLockedSource.asObservable();

  public collectionPaymentSource = new Subject<ObservableArray>();
  public collectionPaymentSourceObservable = this.collectionPaymentSource.asObservable();

  public saveCollectionPaymentSource = new Subject<number>();
  public saveCollectionPaymentObservable = this.saveCollectionPaymentSource.asObservable();

  public collectionPaymentDeletedSource = new Subject<number>();
  public collectionPaymentDeletedObservable = this.collectionPaymentDeletedSource.asObservable();

  // constructor
  constructor(
    private router: Router,
    private http: Http,
    private toastr: ToastsManager
  ) { }

  public getCustomers(): void {
    let url = "http://localhost:10136/api/TrnCollection/CustomerList";

    let customers = new ObservableArray();
    this.http.get(url, this.options).subscribe(
      response => {
        var results = new ObservableArray(response.json());
        if (results.length > 0) {
          for (var i = 0; i <= results.length - 1; i++) {
            customers.push({
              id: results[i].Id,
              fullName: results[i].FullName
            });
          }
          this.customersSource.next(customers);
        } else {
          this.toastr.error("No customers.");
        }
      }
    );
  }

  public getSoldUnits(): void {
    let url = "http://localhost:10136/api/TrnCollectionPayment/SoldUnits";

    let soldUnits = new ObservableArray();
    this.http.get(url, this.options).subscribe(
      response => {
        var results = new ObservableArray(response.json());
        if (results.length > 0) {
          for (var i = 0; i <= results.length - 1; i++) {
            soldUnits.push({
              Id: results[i].Id,
              SoldUnit: results[i].SoldUnit,
              Project: results[i].Project
            });
          }
          this.soldUnitsSource.next(soldUnits);
        } else {
          this.toastr.error("No Sold Units.");
        }
      }
    );
  }

  public getSysDropDown(): void {
    let url = "http://localhost:10136/api/TrnCollectionPayment/SysDropDown";

    let sysDropDown = new ObservableArray();
    this.http.get(url, this.options).subscribe(
      response => {
        var results = new ObservableArray(response.json());
        if (results.length > 0) {
          for (var i = 0; i <= results.length - 1; i++) {
            sysDropDown.push({
              Id: results[i].Id,
              Description: results[i].Description
            });
          }
          this.sysDropDownSource.next(sysDropDown);
        } else {
          this.toastr.error("No SysDropDown.");
        }
      }
    );
  }

  public getUsers(): void {
    let url = "http://localhost:10136/api/TrnCollection/UserList";

    let users = new ObservableArray();
    this.http.get(url, this.options).subscribe(
      response => {
        var results = new ObservableArray(response.json());
        if (results.length > 0) {
          for (var i = 0; i <= results.length - 1; i++) {
            users.push({
              id: results[i].Id,
              fullName: results[i].FullName
            });
          }
          this.usersSource.next(users);
        } else {
          this.toastr.error("No brokers.");
        }
      }
    );
  }

  public getCollectionDetail(id: number) {
    let collectionDetailData: TrnCollectionModel;
    let url = "http://localhost:10136/api/TrnCollection/Detail/" + id;
    this.http.get(url, this.options).subscribe(
      response => {
        var result = response.json();
        if (result != null) {
          collectionDetailData = {
            Id: result.Id,
            CollectionNumber: result.CollectionNumber,
            CollectionDate: result.CollectionDate,
            CustomerId: result.CustomerId,
            Customer: result.Customer,
            Particulars: result.Particulars,
            PreparedBy: result.PreparedBy,
            CheckedBy: result.CheckedBy,
            ApprovedBy: result.ApprovedBy,
            IsLocked: result.IsLocked,
            CreatedBy: result.CreatedBy,
            CreatedDateTime: result.CreatedDateTime,
            UpdatedBy: result.UpdatedBy,
            UpdatedDateTime: result.UpdatedDateTime
          };
          this.collectionDetailSource.next(collectionDetailData);

        } else {
          this.toastr.error("No Collection Detail.");
        }
      }
    );
  }

  public saveCollection(collection: TrnCollectionModel): void {
    let url = "http://localhost:10136/api/TrnCollection/Lock";

    this.http.put(url, JSON.stringify(collection), this.options).subscribe(
      response => {
        this.collectionSaveSource.next(1);
      },
      error => {
        this.collectionSaveSource.next(0);
      }
    )
  }

  public lockCollection(collection: TrnCollectionModel): void {
    let url = "http://localhost:10136/api/TrnCollection/Lock";

    this.http.put(url, JSON.stringify(collection), this.options).subscribe(
      response => {
        this.collectionLockedSource.next(1);
      },
      error => {
        this.collectionLockedSource.next(0);
      }
    )
  }


  public unLockCollection(collection: TrnCollectionModel): void {
    let url = "http://localhost:10136/api/TrnCollection/UnLock";

    this.http.put(url, JSON.stringify(collection), this.options).subscribe(
      response => {
        this.collectionUnLockedSource.next(1);
      },
      error => {
        this.collectionUnLockedSource.next(0);
      }
    )
  }

 

  public saveCollectionPayment(collection: TrnCollectionModel): void {
    let url = "http://localhost:10136/api/TrnCollection/Lock";

    this.http.put(url, JSON.stringify(collection), this.options).subscribe(
      response => {
        this.collectionSaveSource.next(1);
      },
      error => {
        this.collectionSaveSource.next(0);
      }
    )
  }

  public getCollectionPayments(collectionId: number): void {
    let url = "http://localhost:10136/api/TrnCollectionPayment/CollectionPayment/" + collectionId;

    let collectionPayment = new ObservableArray();
    this.http.get(url, this.options).subscribe(
      response => {
        var results = new ObservableArray(response.json());
        if (results.length > 0) {
          for (var i = 0; i <= results.length - 1; i++) {
            collectionPayment.push({
              Id: results[i].Id,
              CollectionId: results[i].CollectionId,
              SoldUnitId: results[i].SoldUnitId,
              SoldUnit: results[i].SoldUnit,
              Project: results[i].Project,
              PayType: results[i].PayType,
              Amount: results[i].Amount,
              CheckNumber: results[i].CheckNumber,
              CheckDate: results[i].CheckDate,
              CheckBank: results[i].CheckBank,
              OtherInformation: results[i].OtherInformation
            });
          }
          this.collectionPaymentSource.next(collectionPayment);
        } else {
          this.toastr.error("No Payment.");
        }
      }
    );
  }

  // add operations
  public addCollectionPayment(collectionPayment: TrnCollectionPayment): void {
    let url = "http://localhost:10136/api/TrnCollectionPayment/Add";

    this.http.post(url, JSON.stringify(collectionPayment), this.options).subscribe(
      response => {
        this.saveCollectionPaymentSource.next(1);
      },
      error => {
        this.saveCollectionPaymentSource.next(0);
      }
    )
  }

 
  public deleteCollectionPayment(id: number): void {
    let url = "http://localhost:10136/api/TrnCollectionPayment/Delete/" + id;
    this.http.delete(url, this.options).subscribe(
      response => {
        this.collectionPaymentDeletedSource.next(1);
      },
      error => {
        this.collectionPaymentDeletedSource.next(0);
      }
    )
  }

  public updateCollectionPayment(collectionPayment: TrnCollectionPayment): void {
    let url = "http://localhost:10136/api/TrnCollectionPayment/Update";

    this.http.put(url, JSON.stringify(collectionPayment), this.options).subscribe(
      response => {
        this.updateCollectionPaymentSource.next(1);
      },
      error => {
        this.updateCollectionPaymentSource.next(0);
      }
    )
  }
}
