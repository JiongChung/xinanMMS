import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ModalModule, TabsModule, TooltipModule } from 'ngx-bootstrap';
import { AppCommonModule } from '@app/shared/common/app-common.module';
import { UtilsModule } from '@shared/utils/utils.module';
import { MainRoutingModule } from './main-routing.module';
import { CountoModule } from 'angular2-counto';
import { EasyPieChartModule } from 'ng2modules-easypiechart';
import { HomeComponent } from './dashboard/home/home.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { ViewAnnouncementModalComponent } from './dashboard/home/view-announcement-modal/view-announcement-modal.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ModalModule,
        TabsModule,
        TooltipModule,
        AppCommonModule,
        UtilsModule,
        MainRoutingModule,
        CountoModule,
        EasyPieChartModule,
        NgxEchartsModule
    ],
    declarations: [
        DashboardComponent,
        HomeComponent,
        ViewAnnouncementModalComponent
    ]
})
export class MainModule { }
