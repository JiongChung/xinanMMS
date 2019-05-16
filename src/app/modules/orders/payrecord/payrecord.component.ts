import { Component, OnInit, Injector, ViewChild } from '@angular/core';
import {appModuleAnimation} from '@shared/animations/routerTransition';
import {AppComponentBase} from '@shared/common/app-component-base';
import { DataTable } from 'primeng/components/datatable/datatable';
import { Paginator } from 'primeng/components/paginator/paginator';
import { LazyLoadEvent } from 'primeng/components/common/lazyloadevent';
import { UserAdminServiceProxy } from '@shared/service-proxies/service-proxies';

@Component({
  selector: 'app-payrecord',
  templateUrl: './payrecord.component.html',
  styleUrls: ['./payrecord.component.css'],
  animations: [appModuleAnimation()]
})
export class PayrecordComponent extends AppComponentBase implements OnInit {
    @ViewChild('dataTable') dataTable: DataTable;
    @ViewChild('paginator') paginator: Paginator;

    totalResult:any = [];
    currentPageTotal:number = 0;

    payRecordList: Array<PayRecordList>;

    constructor(
        injector:Injector
    ) {
        super(injector);
     }

    ngOnInit() {
        this.payRecordList = [
            new PayRecordList(1,'15089196516','王魏','0000600001','管理费',0.01,'2018-12-24T17:57:46','微信','20190101010101'),
            new PayRecordList(2,'15089196516','王魏','0000600001','救助金',33,'2018-12-24T17:57:46','支付宝','20190101010101'),
        ];
    }

    getSearchData(data: any): void{

    }

    getPayRecordList(event?: LazyLoadEvent) {
        if (this.primengDatatableHelper.shouldResetPaging(event)) {
            this.paginator.changePage(0);
            return;
        }
        this.primengDatatableHelper.showLoadingIndicator();
        this.currentPageTotal = this.primengDatatableHelper.getSkipCount(this.paginator, event);
        
        this.primengDatatableHelper.totalRecordsCount = this.payRecordList.length;
        this.totalResult = this.payRecordList;
        
        for(let i=0; i<this.payRecordList.length; i++){
            this.totalResult[i].serialnumber = i + 1 + this.currentPageTotal;
        }
        this.primengDatatableHelper.records = this.totalResult;
        this.primengDatatableHelper.hideLoadingIndicator();
    }

}

export class PayRecordList {
    constructor(
        public id: number,
        public platformUser: string,
        public rescueMember: string,
        public fundNo: string,
        public type: string,
        public amount: number,
        public paydate: string,
        public method: string,
        public orderNo: string
    ){}
}