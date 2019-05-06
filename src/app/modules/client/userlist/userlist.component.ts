import { Component, OnInit, Injector, ViewChild } from '@angular/core';
import {appModuleAnimation} from '@shared/animations/routerTransition';
import {AppComponentBase} from '@shared/common/app-component-base';
import { DataTable } from 'primeng/components/datatable/datatable';
import { Paginator } from 'primeng/components/paginator/paginator';
import { LazyLoadEvent } from 'primeng/components/common/lazyloadevent';
import { UserAdminServiceProxy } from '@shared/service-proxies/service-proxies';


@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css'],
  animations: [appModuleAnimation()]
})
export class UserlistComponent extends AppComponentBase implements OnInit {
    @ViewChild('dataTable') dataTable: DataTable;
    @ViewChild('paginator') paginator: Paginator;

    NickName: string = '';
    PhoneNumber: string = '';
    UserGradeId: number = null;
    CreationTimeFrom: any = '';
    CreationTimeTo: any = '';
    Sorting: string = '';

    totalResult:any = [];
    currentPageTotal:number = 0;

    constructor(
        injector:Injector,
        private _UserAdminService: UserAdminServiceProxy
        
    ) { 
        super(injector);
    }

    ngOnInit() {
        
    }

    getSearchData(data: any): void{
        this.NickName = data.NickName;
        this.PhoneNumber = data.PhoneNumber;
        this.UserGradeId = data.UserGradeId;
        this.CreationTimeFrom = data.CreationTimeFrom;
        this.CreationTimeTo = data.CreationTimeTo;
        this.getUsers();
    }

    getUsers(event?: LazyLoadEvent) {
        if (this.primengDatatableHelper.shouldResetPaging(event)) {
            this.paginator.changePage(0);
            return;
        }
        this.primengDatatableHelper.showLoadingIndicator();
        this.currentPageTotal = this.primengDatatableHelper.getSkipCount(this.paginator, event);
        this._UserAdminService.getUsers(
            this.NickName ? this.NickName : undefined,
            this.PhoneNumber ? this.PhoneNumber : undefined,
            this.UserGradeId ? this.UserGradeId : undefined,
            this.CreationTimeFrom ? this.CreationTimeFrom : undefined,
            this.CreationTimeTo ? this.CreationTimeTo : undefined,
            this.Sorting ? this.Sorting : undefined,
            this.primengDatatableHelper.getMaxResultCount(this.paginator, event),
            this.primengDatatableHelper.getSkipCount(this.paginator, event)
        ).subscribe(data => {
            this.primengDatatableHelper.totalRecordsCount = data.totalCount;
            this.totalResult = data.items;
            for(let i=0; i<data.items.length; i++){
                this.totalResult[i].serialnumber = i + 1 + this.currentPageTotal;
            }
            this.primengDatatableHelper.records = this.totalResult;
            this.primengDatatableHelper.hideLoadingIndicator();
        })
    }
}