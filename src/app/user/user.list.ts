// angular
import { Component, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

// wijmo
import { ObservableArray, CollectionView } from 'wijmo/wijmo';

// message box
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

// service(s)
import { UserService } from './user.service';
import { SecurityService } from '../security/security.service';

// model(s)
import { MstUser } from '../model/model.mst.user';

@Component({
    templateUrl: './user.list.html'
})
export class UserList {

    // ==================
    // private properties
    // ==================

    // user rights
    private canEdit: boolean = false;
    private canSave: boolean = false;
    private canLock: boolean = false;
    private canUnlock: boolean = false;
    private canPrint: boolean = false;
    private canDelete: boolean = false;

    private currentDate = new Date();
    private currentDateString = [this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, this.currentDate.getDate()].join('-');

    // list
    private usersSub: any;

    // =================
    // public properties
    // =================

    public title: string = 'User List';
    public filterUser: string;

    // model(s)
    public user: MstUser = {
        id: 0,
        username: "",
        fullName: "",
        password: "",
        status: "",
        aspNetId: ""
    };

    // list data source
    public fgdUsersData: ObservableArray;
    public fgdUsersCollection: CollectionView;

    // =======
    // angular
    // =======

    // constructor
    constructor(
        private userService: UserService,
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
        this.fgdUsersData = new ObservableArray();
        this.fgdUsersCollection = new CollectionView(this.fgdUsersData);

        if (this.securityService.openPage("USER LIST") == true) {
            this.getUsers();
        } else {
            this.toastr.error("No rights to open page.")
            setTimeout(() => { this.location.back(); }, 1000);
        }

        this.getUserRights();
    }

    ngOnDestroy() {
        if (this.usersSub != null) this.usersSub.unsubscribe();
    }

    // ===============
    // Get User Rights
    // ===============
    private getUserRights() {
        var userRightsData = localStorage.getItem('userRights')
        var userRights = JSON.parse(userRightsData);
        for (var i = 0; i < userRights.length; i++) {
            if (userRights[i].page == 'USER LIST') {
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
    public getUsers(): void {
        this.userService.getUsers();

        this.usersSub = this.userService.usersObservable.subscribe(
            data => {
                this.fgdUsersData = data;
                this.fgdUsersCollection = new CollectionView(this.fgdUsersData);
                this.fgdUsersCollection.pageSize = 15;
                this.fgdUsersCollection.trackChanges = true;
            }
        );
    }

    // ======
    // events
    // ======

    // list opertaions
    public btnEditUserClick(): void {
        let selectedUser = this.fgdUsersCollection.currentItem;
        this.router.navigate(['/user', selectedUser.id]);
    }

}