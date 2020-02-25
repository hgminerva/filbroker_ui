// angular
import { Injectable } from "@angular/core";
import { Headers, Http, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';

// message box
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

// wijmo
import { ObservableArray } from 'wijmo/wijmo';

// async
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

// model(s)
import { MstCustomer } from '../model/model.mst.customer';
import { SysDropDown } from '../model/model.sys.dropDown';
import { SysBlob } from '../model/model.sys.blob';

@Injectable()
export class CustomerService {

    // ==================
    // private properties
    // ==================

    // default date
    private currentDate = new Date();
    private currentDateString = [this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, this.currentDate.getDate()].join('-');

    private headers = new Headers({
        'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
        'Content-Type': 'application/json'
    });
    private options = new RequestOptions({ headers: this.headers });

    // =================
    // public properties
    // =================

    // customer list
    public customersSource = new Subject<ObservableArray>();
    public customersObservable = this.customersSource.asObservable();

    // customer list operations
    public customerDeletedSource = new Subject<number>();
    public customerDeletedObservable = this.customerDeletedSource.asObservable();

    // customer detail
    public customerSource = new Subject<MstCustomer>();
    public customerObservable = this.customerSource.asObservable();

    // customer operations
    public customerSavedSource = new Subject<number>();
    public customerSavedObservable = this.customerSavedSource.asObservable();   

    public customerLockedSource = new Subject<number>();
    public customerLockedObservable = this.customerLockedSource.asObservable();  

    public customerUnlockedSource = new Subject<number>();
    public customerUnlockedObservable = this.customerUnlockedSource.asObservable();  

    // Blob, picture
    public customerPictureSource = new Subject<SysBlob>();
    public customerPictureObservable = this.customerPictureSource.asObservable();

    // combo boxes
    public dropDownsSource = new Subject<ObservableArray>();
    public dropDownsObservable = this.dropDownsSource.asObservable();

    // =======
    // angular
    // =======

    // constructor
    constructor(
        private router: Router,
        private http: Http,
        private toastr: ToastsManager
    ) { }

    // ==============
    // public methods
    // ==============

    // customer list
    public getCustomers(): void {
        let url = "https://filbrokerwebsite-greentech-api.azurewebsites.net/api/MstCustomer/List";
        let customers = new ObservableArray();
        this.http.get(url, this.options).subscribe(
            response => {
                var results = new ObservableArray(response.json());
                if (results.length > 0) {
                    for (var i = 0; i <= results.length - 1; i++) {
                        customers.push({
                            id: results[i].Id,
                            customerCode: results[i].CustomerCode,
                            lastName: results[i].LastName,
                            firstName: results[i].FirstName,
                            middleName: results[i].MiddleName,
                            fullName: results[i].FullName,
                            civilStatus: results[i].CivilStatus,
                            gender: results[i].Gender,
                            birthDate: results[i].BirthDate,
                            citizen: results[i].Citizen,
                            tin: results[i].TIN,
                            idType: results[i].IdType,
                            idNumber: results[i].IdNumber,
                            address: results[i].Address,
                            city: results[i].City,
                            province: results[i].Province,
                            country: results[i].Country,
                            zipCode: results[i].ZipCode,
                            emailAddress: results[i].EmailAddress,
                            telephoneNumber: results[i].TelephoneNumber,
                            mobileNumber: results[i].MobileNumber,
                            employer: results[i].Employer,
                            employerIndustry: results[i].EmployerIndustry,
                            noOfYearsEmployed: results[i].NoOfYearsEmployed,
                            position: results[i].Position,
                            employmentStatus: results[i].EmploymentStatus,
                            employerAddress: results[i].EmployerAddress,
                            employerCity: results[i].EmployerCity,
                            employerProvince: results[i].EmployerProvince,
                            employerCountry: results[i].EmployerCountry,
                            employerZipCode: results[i].EmployerZipCode,
                            employerTelephoneNumber: results[i].EmployerTelephoneNumber,
                            employerMobileNumber: results[i].EmployerMobileNumber,
                            spouseLastName: results[i].SpouseLastName,
                            spouseFirstName: results[i].SpouseFirstName,
                            spouseMiddleName: results[i].SpouseMiddleName,
                            spouseBirthDate: results[i].SpouseBirthDate,
                            spouseCitizen : results[i].SpouseCitizen,
                            spouseEmployer : results[i].SpouseEmployer,
                            spouseTIN : results[i].SpouseTIN,
                            remarks: results[i].Remarks,
                            status: results[i].Status,
                            picture: results[i].Picture,
                            isLocked: results[i].IsLocked,
                            createdBy: results[i].CreatedBy,
                            createdDateTime: results[i].CreatedDateTime,
                            updatedBy: results[i].UpdatedBy,
                            updatedDateTime: results[i].UpdatedDateTime
                        });
                    }
                    this.customersSource.next(customers);
                } else {
                    this.customersSource.next(customers);
                    this.toastr.error("No customers.");   
                }
            }
        );
    }

    // customer list operations
    public addCustomer(customer: MstCustomer, btnAddCustomer: Element): void {
        let url = "https://filbrokerwebsite-greentech-api.azurewebsites.net/api/MstCustomer/Add";
        this.http.post(url, JSON.stringify(customer), this.options).subscribe(
            response => {
                var id = response.json();
                if (id > 0) {
                    this.toastr.success("Add successful.");
                    setTimeout(() => {
                        this.router.navigate(['/customer', id]);
                    }, 1000);
                } else {
                    this.toastr.error("Add failed.");
                    btnAddCustomer.removeAttribute("disabled");
                    btnAddCustomer.innerHTML = "<i class='fa fa-plus fa-fw'></i> Add";
                }
            },
            error => {
                this.toastr.error("Server error.");
                btnAddCustomer.removeAttribute("disabled");
                btnAddCustomer.innerHTML = "<i class='fa fa-plus fa-fw'></i> Add";
            }
        )
    }
    public deleteCustomer(id : number) {
        let url = "https://filbrokerwebsite-greentech-api.azurewebsites.net/api/MstCustomer/Delete/" + id;
        this.http.delete(url, this.options).subscribe(
            response => {
                this.customerDeletedSource.next(1);
            },
            error => {
                this.customerDeletedSource.next(0);
            }
        )
    }

    // customer detail
    public getCustomer(id : number) {
        let customer: MstCustomer;
        let url = "https://filbrokerwebsite-greentech-api.azurewebsites.net/api/MstCustomer/Detail/" + id;

        this.http.get(url, this.options).subscribe(
            response => {
                var result = response.json();
                if (result != null) {
                    customer = {
                        id: result.Id,
                        customerCode: result.CustomerCode,
                        lastName: result.LastName,
                        firstName: result.FirstName,
                        middleName: result.MiddleName,
                        fullName: result.FullName,
                        civilStatus: result.CivilStatus,
                        gender: result.Gender,
                        birthDate: result.BirthDate,
                        citizen: result.Citizen,
                        tin: result.TIN,
                        idType: result.IdType,
                        idNumber: result.IdNumber,
                        address: result.Address,
                        city: result.City,
                        province: result.Province,
                        country: result.Country,
                        zipCode: result.ZipCode,
                        emailAddress: result.EmailAddress,
                        telephoneNumber: result.TelephoneNumber,
                        mobileNumber: result.MobileNumber,
                        employer: result.Employer,
                        employerIndustry: result.EmployerIndustry,
                        noOfYearsEmployed: result.NoOfYearsEmployed,
                        position: result.Position,
                        employmentStatus: result.EmploymentStatus,
                        employerAddress: result.EmployerAddress,
                        employerCity: result.EmployerCity,
                        employerProvince: result.EmployerProvince,
                        employerCountry: result.EmployerCountry,
                        employerZipCode: result.EmployerZipCode,
                        employerTelephoneNumber: result.EmployerTelephoneNumber,
                        employerMobileNumber: result.EmployerMobileNumber,
                        spouseLastName: result.SpouseLastName,
                        spouseFirstName: result.SpouseFirstName,
                        spouseMiddleName: result.SpouseMiddleName,
                        spouseBirthDate: result.SpouseBirthDate == "" ? this.currentDateString : result.SpouseBirthDate,
                        spouseCitizen : result.SpouseCitizen,
                        spouseEmployer : result.SpouseEmployer,
                        spouseTIN : result.SpouseTIN,
                        remarks: result.Remarks,
                        status: result.Status,
                        picture: result.Picture,
                        isLocked: result.IsLocked,
                        createdBy: result.CreatedBy,
                        createdDateTime: result.CreatedDateTime,
                        updatedBy: result.UpdatedBy,
                        updatedDateTime: result.UpdatedDateTime                
                    };
                    this.customerSource.next(customer);
                } else {
                    this.toastr.error("No data.");
                    setTimeout(() => {
                        this.router.navigate(["/customer"]);
                    }, 1000);
                }
            }
        );
    }

    // customer detail operations
    public saveCustomer(project: MstCustomer): void {
        let url = "https://filbrokerwebsite-greentech-api.azurewebsites.net/api/MstCustomer/Save";
        this.http.put(url, JSON.stringify(project), this.options).subscribe(
            response => {
                this.customerSavedSource.next(1);
            },
            error => {
                this.customerSavedSource.next(0);
            }
        )
    }
    public lockCustomer(project: MstCustomer): void {
        let url = "https://filbrokerwebsite-greentech-api.azurewebsites.net/api/MstCustomer/Lock";
        this.http.put(url, JSON.stringify(project), this.options).subscribe(
            response => {
                this.customerLockedSource.next(1);
            },
            error => {
                this.customerLockedSource.next(0);
            }
        )
    }
    public unlockCustomer(project: MstCustomer): void {
        let url = "https://filbrokerwebsite-greentech-api.azurewebsites.net/api/MstCustomer/Unlock";
        this.http.put(url, JSON.stringify(project), this.options).subscribe(
            response => {
                this.customerUnlockedSource.next(1);
            },
            error => {
                this.customerUnlockedSource.next(0);
            }
        )
    }
    public uploadCustomerPicture(file: File, fileName: string) : void {
        let url = "https://filbrokerwebsite-greentech-api.azurewebsites.net/api/Blob/Upload";
        let blob : SysBlob;

        var formData: FormData = new FormData();
        formData.append("image", file, fileName);

        this.http
            .post(url, formData)
            .subscribe(
                response => {
                    var results = new ObservableArray(response.json());
                    if (results.length > 0) {
                        blob = {
                            fileName : results[0].FileName,
                            fileUrl : results[0].FileUrl,
                            fileSizeInBytes : results[0].FileSizeInBytes,
                            fileSizeInKb : results[0].FileSizeInKb,
                        };
                        this.customerPictureSource.next(blob);
                        this.toastr.success("Upload successful.");
                    } else {
                        this.customerPictureSource.next(blob);
                        this.toastr.error("Uploading failed.");  
                    }
                },
                error => {
                    this.customerPictureSource.next(blob);
                    this.toastr.error("Server error.");
                }    
            );
    }

    // combo boxes
    public getDropDowns()  {
        let dropDowns  = new ObservableArray();
        let url = "https://filbrokerwebsite-greentech-api.azurewebsites.net/api/SysDropDown/List";

        this.http.get(url, this.options).subscribe(
            response => {
                var results = new ObservableArray(response.json());
                if (results.length > 0) {
                    for (var i = 0; i <= results.length - 1; i++) {
                        dropDowns.push({
                            id: results[i].Id,
                            category: results[i].Category,
                            description: results[i].Description,
                            value: results[i].Value
                        });
                    }
                    this.dropDownsSource.next(dropDowns);
                } else {
                    this.toastr.error("No data.");   
                }
            }
        );

    }

    // list (sold units)
    public soldUnitsSource = new Subject<ObservableArray>();
    public soldUnitsObservable = this.soldUnitsSource.asObservable();

    // list
    public getSoldUnitsList(id: number): void {
        // let url = "https://filbrokerwebsite-greentech-api.azurewebsites.net/api/TrnSoldUnit/ListPerDates/" + dateStart + "/" + dateEnd;
        let url = "https://filbrokerwebsite-greentech-api.azurewebsites.net/api/MstCustomer/list/soldunit/" + id;
        let soldUnits = new ObservableArray();
        this.http.get(url, this.options).subscribe(
            response => {
                var results = new ObservableArray(response.json());
                if (results.length > 0) {
                    for (var i = 0; i <= results.length - 1; i++) {
                        soldUnits.push({
                            id: results[i].Id,
                            soldUnitNumber: results[i].SoldUnitNumber,
                            soldUnitDate: results[i].SoldUnitDate,
                            projectId: results[i].ProjectId,
                            project: results[i].Project,
                            unitId: results[i].UnitId,
                            unit: results[i].Unit,
                            customerId: results[i].CustomerId,
                            customer: results[i].Customer,
                            brokerId: results[i].BrokerId,
                            broker: results[i].Broker,
                            agent: results[i].Agent,
                            brokerCoordinator: results[i].BrokerCoordinator,
                            checklistId: results[i].ChecklistId,
                            checklist: results[i].Checklist,
                            price: results[i].Price,
                            tcpdiscount: results[i].PriceDiscount,
                            equityValue: results[i].EquityValue,
                            equityPercent: results[i].EquityPercent,
                            equitySpotPayment1: results[i].equitySpotPayment1,
                            equitySpotPayment2: results[i].equitySpotPayment2,
                            equitySpotPayment3: results[i].equitySpotPayment3,
                            discount: results[i].Discount,
                            discountedEquity: results[i].DiscountedEquity,
                            reservation: results[i].Reservation,
                            netEquity: results[i].NetEquity,
                            netEquityBalance: results[i].NetEquityBalance,
                            netEquityInterest: results[i].NetEquityInterest,
                            netEquityNoOfPayments: results[i].NetEquityNoOfPayments,
                            netEquityAmortization: results[i].NetEquityAmortization,
                            balance: results[i].Balance,
                            balanceInterest: results[i].BalanceInterest,
                            balanceNoOfPayments: results[i].BalanceNoOfPayments,
                            balanceAmortization: results[i].BalanceAmortization,
                            totalInvestment: results[i].TotalInvestment,
                            paymentOptions: results[i].PaymentOptions,
                            financing: results[i].Financing,
                            remarks: results[i].Remarks,
                            financingType: results[i].FinancingType,
                            preparedBy: results[i].PreparedBy,
                            preparedByUser: results[i].PreparedByUser,
                            checkedBy: results[i].CheckedBy,
                            checkedByUser: results[i].CheckedByUser,
                            approvedBy: results[i].ApprovedBy,
                            approvedByUser: results[i].ApprovedByUser,
                            status: results[i].Status,
                            isLocked: results[i].IsLocked,
                            createdBy: results[i].CreatedBy,
                            createdDateTime: results[i].CreatedDateTime,
                            updatedBy: results[i].UpdatedBy,
                            updatedDateTime: results[i].UpdatedDateTime
                        });
                    }
                    this.soldUnitsSource.next(soldUnits);
                } else {
                    this.soldUnitsSource.next(soldUnits);
                    this.toastr.error("No sold units for this date range.");
                }
            }
        );
    }

}