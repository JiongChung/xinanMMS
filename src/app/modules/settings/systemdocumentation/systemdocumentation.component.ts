import { Component, OnInit,Injector,ViewChild } from '@angular/core';
import {appModuleAnimation} from '@shared/animations/routerTransition';
import { AppComponentBase } from '@shared/common/app-component-base';
import { DataTable } from 'primeng/components/datatable/datatable';
import { Paginator } from 'primeng/components/paginator/paginator';
import { LazyLoadEvent } from 'primeng/components/common/lazyloadevent';
import { SystemDocumentationAdminServiceProxy } from '@shared/service-proxies/service-proxies';

@Component({
  selector: 'app-systemdocumentation',
  templateUrl: './systemdocumentation.component.html',
  styleUrls: ['./systemdocumentation.component.css'],
  animations: [appModuleAnimation()]
})
export class SystemdocumentationComponent extends AppComponentBase implements OnInit {
    @ViewChild('dataTable') dataTable: DataTable;
    @ViewChild('paginator') paginator: Paginator;

    totalResult:any = [];
    currentPageTotal:number = 0;

    IsActive: boolean = undefined;
    Title: string = '';
    Sorting: string = '';

    testList: Array<any> = [];

    constructor(
        injector: Injector,
        private _SystemDocumentationAdminService : SystemDocumentationAdminServiceProxy
    ) { 
        super(injector);
    }

    ngOnInit() {
    }

    getSearchData(data: any): void{
        this.Title = data.Title;
        this.IsActive = data.IsActive;
        this.getDocumentationList();
    }

    getDocumentationList(event?: LazyLoadEvent) {
        if (this.primengDatatableHelper.shouldResetPaging(event)) {
            this.paginator.changePage(0);
            return;
        }
        this.primengDatatableHelper.showLoadingIndicator();
        this.currentPageTotal = this.primengDatatableHelper.getSkipCount(this.paginator, event);

        this._SystemDocumentationAdminService.getDocumentationList(
            this.IsActive,
            this.Title ? this.Title : undefined,
            this.Sorting ? this.Sorting : undefined,
            this.primengDatatableHelper.getMaxResultCount(this.paginator, event),
            this.primengDatatableHelper.getSkipCount(this.paginator, event)
        ).subscribe((data: any) => {
            this.primengDatatableHelper.totalRecordsCount = data.totalCount;
            this.totalResult = data.items;
            this.testList = data.items;
            for(let i=0; i<data.items.length; i++){
                this.totalResult[i].serialnumber = i + 1 + this.currentPageTotal;
            }
            this.primengDatatableHelper.records = this.totalResult;
            this.primengDatatableHelper.hideLoadingIndicator();
        });
    }
}
