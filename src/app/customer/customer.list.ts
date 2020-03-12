// angular
import { Component, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

// wijmo
import { ObservableArray, CollectionView } from 'wijmo/wijmo';

// message box
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

// service(s)
import { CustomerService } from './customer.service';
import { SecurityService } from '../security/security.service';

// model(s)
import { MstCustomer } from '../model/model.mst.customer';

import * as wjcCore from 'wijmo/wijmo';
import * as wjcGrid from 'wijmo/wijmo.grid';

@Component({
    templateUrl: './customer.list.html'
})
export class CustomerList {

    // ==================
    // private properties
    // ==================

    // User Rights
    private canEdit: boolean = false;
    private canSave: boolean = false;
    private canLock: boolean = false;
    private canUnlock: boolean = false;
    private canPrint: boolean = false;
    private canDelete: boolean = false;

    private currentDate = new Date();
    private currentDateString = [this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, this.currentDate.getDate()].join('-');

    // list
    private customersSub: any;

    // list operations
    private customersDeletedSub: any;

    // =================
    // public properties
    // =================

    public title: string = 'Customer List';
    public filterCustomer: string;

    // model(s)
    public customer: MstCustomer = {
        id: 0,
        customerCode: "",
        lastName: "",
        firstName: "",
        middleName: "",
        fullName: "",
        civilStatus: "SINGLE",
        gender: "MALE",
        birthDate: this.currentDateString,
        citizen: "FILIPINO",
        tin: "",
        idType: "DRIVERS LICENSE",
        idNumber: "",
        address: "",
        city: "",
        province: "",
        country: "",
        zipCode: "",
        emailAddress: "",
        telephoneNumber: "",
        mobileNumber: "",
        employer: "",
        employerIndustry: "",
        noOfYearsEmployed: 0,
        position: "",
        employmentStatus: "PERMANENT",
        employerAddress: "",
        employerCity: "",
        employerProvince: "",
        employerCountry: "",
        employerZipCode: "",
        employerTelephoneNumber: "",
        employerMobileNumber: "",
        spouseLastName: "",
        spouseFirstName: "",
        spouseMiddleName: "",
        spouseBirthDate: this.currentDateString,
        spouseCitizen: "",
        spouseEmployer: "",
        spouseTIN: "",
        remarks: "",
        status: "ACTIVE",
        picture: "",
        isLocked: false,
        createdBy: 0,
        createdDateTime: this.currentDateString,
        updatedBy: 0,
        updatedDateTime: this.currentDateString
    };

    // list data source
    public fgdCustomersData: ObservableArray;
    public fgdCustomersCollection: CollectionView;

    // modals
    public mdlCustomerDeleteShow: boolean = false;

    // =======
    // angular
    // =======

    //constructor
    constructor(
        private customerService: CustomerService,
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
        this.fgdCustomersData = new ObservableArray();
        this.fgdCustomersCollection = new CollectionView(this.fgdCustomersData);

        if (this.securityService.openPage("CUSTOMER LIST") == true) {
            this.getCustomers();
        } else {
            this.toastr.error("No rights to open page.")
            setTimeout(() => { this.location.back(); }, 1000);
        }

        this.getUserRights();
    }

    ngOnDestroy() {
        if (this.customersSub != null) this.customersSub.unsubscribe();
        if (this.customersDeletedSub != null) this.customersDeletedSub.unsubscribe();
    }

    customerItemFormatter(panel, row, col, cell) {
        if (panel.cellType === wjcGrid.CellType.Cell && panel.columns[col].header === 'Edit') {
            cell.innerHTML = `<button class="btn-edit btn btn-primary btn-xs btn-block"><i class="fa fa-edit fa-fw"></i> Edit</button>`
        }

        if (panel.cellType === wjcGrid.CellType.Cell && panel.columns[col].header === 'Delete') {
            cell.innerHTML = `<button class="btn-delete btn btn-danger btn-xs btn-block"><i class="fa fa-trash fa-fw"></i> Delete</button>`
        }
    }

    customerGridClick(s, e) {
        if (wjcCore.hasClass(e.target, 'btn-edit')) {
            let selectedCustomer = this.fgdCustomersCollection.currentItem;
            this.router.navigate(['/customer', selectedCustomer.id]);
        }

        if (wjcCore.hasClass(e.target, 'btn-delete')) {
            this.mdlCustomerDeleteShow = true;
            if (!this.canDelete) {
                (<HTMLInputElement>document.getElementById("btnOkCustomerDeleteModal")).hidden = true;
            }
        }
    }

    //================
    // Get User Rights
    //================
    private getUserRights() {
        var userRightsData = localStorage.getItem('userRights')
        var userRights = JSON.parse(userRightsData);
        for (var i = 0; i < userRights.length; i++) {
            if (userRights[i].page == 'CUSTOMER LIST') {
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

    // customer list
    public getCustomers(): void {
        let customers = new ObservableArray();

        this.customerService.getCustomers();

        this.customersSub = this.customerService.customersObservable.subscribe(
            data => {
                if (data.length > 0) {
                    this.fgdCustomersData = data;
                    this.fgdCustomersCollection = new CollectionView(this.fgdCustomersData);
                    this.fgdCustomersCollection.pageSize = 15;
                    this.fgdCustomersCollection.trackChanges = true;
                }
            }
        );
    }

    // ======
    // events
    // ======

    // customer list operations
    public btnAddCustomerClick(): void {
        let btnAddCustomer: Element = document.getElementById("btnAddCustomer");

        btnAddCustomer.setAttribute("disabled", "true");
        btnAddCustomer.innerHTML = "<i class='fa fa-plus fa-fw'></i> Adding...";

        this.customerService.addCustomer(this.customer, btnAddCustomer);
    }
    public btnEditCustomerClick(): void {
        let selectedCustomer = this.fgdCustomersCollection.currentItem;
        this.router.navigate(['/customer', selectedCustomer.id]);
    }
    public btnDeleteCustomerClick(): void {
        this.mdlCustomerDeleteShow = true;
        if (!this.canDelete) {
            (<HTMLInputElement>document.getElementById("btnOkCustomerDeleteModal")).hidden = true;
        }
    }

    // customer delete modal operations
    public btnOkCustomerDeleteModalClick(): void {
        let btnOkCustomerDeleteModal: Element = document.getElementById("btnOkCustomerDeleteModal");
        let btnCloseCustomerDeleteModal: Element = document.getElementById("btnCloseCustomerDeleteModal");

        let selectedCustomer = this.fgdCustomersCollection.currentItem;

        btnOkCustomerDeleteModal.setAttribute("disabled", "disabled");
        btnCloseCustomerDeleteModal.setAttribute("disabled", "disabled");

        this.customerService.deleteCustomer(selectedCustomer.id);
        this.customersDeletedSub = this.customerService.customerDeletedObservable.subscribe(
            data => {
                if (data == 1) {
                    this.toastr.success("Delete successful.");
                    this.fgdCustomersCollection.remove(selectedCustomer);

                    btnOkCustomerDeleteModal.removeAttribute("disabled");
                    btnCloseCustomerDeleteModal.removeAttribute("disabled");

                    this.mdlCustomerDeleteShow = false
                } else if (data == 0) {
                    this.toastr.error("Delete failed.");

                    btnOkCustomerDeleteModal.removeAttribute("disabled");
                    btnCloseCustomerDeleteModal.removeAttribute("disabled");
                }
            }
        );
    }
    public btnCloseCustomerDeleteModalClick(): void {
        this.mdlCustomerDeleteShow = false;
    }
    public btnCSVReportClick(): void {
        var fileName = "customer.csv";

        var collection = this.fgdCustomersCollection;
        var data = "Customer List" + "\r\n\n";
        var columns = "";

        // csv columns
        for (var s in collection.items[0]) columns += s + ",";
        columns = columns.slice(0, -1);
        data += columns + "\r\n";

        // csv records
        collection.moveToFirstPage();
        for (var p = 0; p < collection.pageCount; p++) {
            for (var i = 0; i < collection.items.length; i++) {
                var row = "";
                for (var s in collection.items[i]) {
                    row += "\"" + collection.items[i][s] + "\",";
                }
                row.slice(0, row.length - 1);
                data += row + "\r\n";
            }
            collection.moveToNextPage();
        }

        // Create the csv blob
        var csvData = new Blob([data], { type: 'text/csv;charset=utf-8;' });

        // Create a link then click the link to down load the csv blob
        var csvURL = window.URL.createObjectURL(csvData);
        var csvLink = document.createElement('a');
        csvLink.href = csvURL;
        csvLink.setAttribute('download', fileName);
        csvLink.click();
    }
}