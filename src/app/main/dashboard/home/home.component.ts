import { Component, AfterViewInit, Injector, ViewEncapsulation, ViewChild, OnInit } from '@angular/core';
import { appModuleAnimation } from '@shared/animations/routerTransition';
import { AppComponentBase } from '@shared/common/app-component-base';
import * as _ from 'lodash';
import { ViewAnnouncementModalComponent } from './view-announcement-modal/view-announcement-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None,
  animations: [appModuleAnimation()]
})
export class HomeComponent extends AppComponentBase implements OnInit,AfterViewInit {
    @ViewChild('ViewAnnouncementModal') ViewAnnouncementModal: ViewAnnouncementModalComponent;
    dashboardHeaderStats: DashboardHeaderStats;
    DashboardSummaryReport: DashboardSummaryReport;
    tipsBackgroundColor: string;
    showDashboard: boolean = false;

    constructor(
        injector: Injector
    ) { 
        super(injector);
        this.dashboardHeaderStats = new DashboardHeaderStats();
    }

    ngOnInit(){
        setInterval(() => {
            this.tipsBackgroundColor = this.createBackgroundColor();
        },1000)
    }

    ngAfterViewInit() {
        this.dashboardHeaderStats.init();
        // this.DashboardSummaryReport.init();
        this.checkLocalStorage();
    }

    createBackgroundColor(){
        let r = Math.floor(Math.random()*230);
        let g = Math.floor(Math.random()*230);
        let b = Math.floor(Math.random()*230);

        return "rgb("+r+','+g+','+b+")";
    }

    checkLocalStorage(): void{
        window.localStorage.removeItem('viewAnnouncement_2019413');
        let viewAnnouncementStatus = window.localStorage.getItem('viewAnnouncement_2019423');
        if(viewAnnouncementStatus == null){
            setTimeout(() => {
                this.viewAnnouncement();
                window.localStorage.setItem('viewAnnouncement_2019423','yes');
            }, 500);
        }
    }

    viewAnnouncement(): void{
        // this.ViewAnnouncementModal.show();
    }
}

abstract class DashboardChartBase {
    loading = true;

    showLoading() {
        setTimeout(() => { this.loading = true; });
    }

    hideLoading() {
        setTimeout(() => { this.loading = false; });
    }
}

class DashboardHeaderStats extends DashboardChartBase {

    init() {
        this.reload();
    }

    reload(){
        $('app-home').closest('ng-component').css('width','100%');
    }
}


class DashboardSummaryReport extends DashboardChartBase{
    totalAmount = 0; totalOrder = 0; totalNewUser = 0; 
    totalAmountCounter = 0; totalOrderCounter = 0; totalNewUserCounter = 0;
    constructor() {
        super();
    }
    init() {
        // this._SummaryReportService.getWeeklySummaryReport().subscribe(result => {
        //     this.totalAmount = result.totalOrderAmount;
        //     this.totalOrder = result.totalNumberOfOrder;
        //     this.totalNewUser = result.totalNewUser;
        //     this.hideLoading();
        // })
    }
}