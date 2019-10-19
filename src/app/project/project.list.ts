// angular
import { Component, ViewContainerRef, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

// service(s)
import { ProjectService } from './project.service';
import { SecurityService } from '../security/security.service';

// wijmo
import { ObservableArray, CollectionView } from 'wijmo/wijmo';
import { WjFlexGrid } from 'wijmo/wijmo.angular2.grid';

// message box
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

// model(s)
import { MstProject } from '../model/model.mst.project';

@Component({
    templateUrl: './project.list.html'
})
export class ProjectList {

    // ==================
    // private properties
    // ==================

    private currentDate = new Date();
    private currentDateString = [this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, this.currentDate.getDate()].join('-');

    private projectsSub: any;
    private projectDeletedSub: any;

    // user rights
    private canEdit: boolean = false;
    private canSave: boolean = false;
    private canLock: boolean = false;
    private canUnlock: boolean = false;
    private canPrint: boolean = false;
    private canDelete: boolean = false;

    // =================
    // public properties
    // =================

    public title = 'Project List';
    public filterProject: string;

    public project: MstProject = {
        id: 0,
        projectCode: "",
        project: "",
        address: "",
        status: "OPEN",
        projectLogo: "",
        isLocked: false,
        createdBy: 1,
        createdDateTime: this.currentDateString,
        updatedBy: 1,
        updatedDateTime: this.currentDateString
    };

    public fgdProjectsData: ObservableArray;
    public fgdProjectsCollection: CollectionView;

    public mdlProjectDeleteShow: boolean = false;

    // =============
    // angular class
    // =============

    // constructor
    constructor(
        private projectService: ProjectService,
        private toastr: ToastsManager,
        private viewContainer: ViewContainerRef,
        private router: Router,
        private location: Location,
        private securityService: SecurityService
    ) {
        this.toastr.setRootViewContainerRef(viewContainer);
    }

    public getUserRights() {
        var userRightsData = localStorage.getItem('userRights')
        var userRights = JSON.parse(userRightsData);
        for (var i = 0; i < userRights.length; i++) {
            if (userRights[i].page == 'CHECKLIST DETAIL') {
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
        this.fgdProjectsData = new ObservableArray();
        this.fgdProjectsCollection = new CollectionView(this.fgdProjectsData);

        if (this.securityService.openPage("PROJECT LIST") == true) {
            this.getProjects();
        } else {
            this.toastr.error("No rights to open page.")
            setTimeout(() => { this.location.back(); }, 1000);
        }

        this.getUserRights();
    }
    
    ngOnDestroy() {
        if (this.projectDeletedSub != null) this.projectDeletedSub.unsubscribe();
        if (this.projectsSub != null) this.projectsSub.unsubscribe();
    }

    // ==============
    // public methods
    // ==============

    // project list
    public getProjects(): void {
        let projects = new ObservableArray();

        this.projectService.getProjects();

        this.projectsSub = this.projectService.projectsObservable.subscribe(
            data => {
                if (data.length > 0) {
                    this.fgdProjectsData = data;
                    this.fgdProjectsCollection = new CollectionView(this.fgdProjectsData);
                    this.fgdProjectsCollection.pageSize = 15;
                    this.fgdProjectsCollection.trackChanges = true;
                }
            }
        );
    }

    // ======
    // events
    // ======

    // project list operations
    public btnAddProjectClick(): void {
        let btnAddProject: Element = document.getElementById("btnAddProject");

        btnAddProject.setAttribute("disabled", "true");
        btnAddProject.innerHTML = "<i class='fa fa-plus fa-fw'></i> Adding...";

        this.projectService.addProject(this.project, btnAddProject);
    }
    public btnEditProjectClick(): void {
        let selectedProject = this.fgdProjectsCollection.currentItem;
        this.router.navigate(['/project', selectedProject.id]);
    }
    public btnDeleteProjectClick(): void {
        this.mdlProjectDeleteShow = true;
    }

    // project delete modal operations
    public btnOkProjectDeleteModalClick(): void {
        let btnOkProjectDeleteModal: Element = document.getElementById("btnOkProjectDeleteModal");
        let btnCloseProjectDeleteModal: Element = document.getElementById("btnCloseProjectDeleteModal");

        let selectedProject = this.fgdProjectsCollection.currentItem;

        btnOkProjectDeleteModal.setAttribute("disabled", "disabled");
        btnCloseProjectDeleteModal.setAttribute("disabled", "disabled");

        this.projectService.deleteProject(selectedProject.id);
        this.projectDeletedSub = this.projectService.projectDeletedObservable.subscribe(
            data => {
                if (data == 1) {
                    this.toastr.success("Delete successful.");
                    this.fgdProjectsCollection.remove(selectedProject);

                    btnOkProjectDeleteModal.removeAttribute("disabled");
                    btnCloseProjectDeleteModal.removeAttribute("disabled");

                    this.mdlProjectDeleteShow = false
                } else if (data == 0) {
                    this.toastr.error("Delete failed.");

                    btnOkProjectDeleteModal.removeAttribute("disabled");
                    btnCloseProjectDeleteModal.removeAttribute("disabled");
                }
            }
        );
    }
    public btnCloseProjectDeleteModalClick(): void {
        this.mdlProjectDeleteShow = false;
    }
}