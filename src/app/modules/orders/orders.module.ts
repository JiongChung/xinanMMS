import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { OrdersRoutingModule } from './admin.orders.routing';
import { HomeComponent } from './home/home.component';
import {FormsModule} from '@angular/forms';

import {ReactiveFormsModule} from '@angular/forms';
import { ModalModule, TabsModule, TooltipModule, PopoverModule } from 'ngx-bootstrap';
import { UtilsModule } from '@shared/utils/utils.module';
import {DataTableModule} from 'primeng/primeng';
import { PaginatorModule } from 'primeng/primeng';
import { EditorModule } from 'primeng/primeng';
import { AppCommonModule } from '@app/shared/common/app-common.module';
import { FileUploadModule } from 'ng2-file-upload';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { OrderNumberInterceptPipe } from '../../pipe/order-number-intercept.pipe';
import { NgxEchartsModule } from 'ngx-echarts';

import { QuillModule } from 'ngx-quill';

import { ChineseInterceptPipe } from '../../pipe/chinese-intercept.pipe';
import { DataChineseInterceptPipe } from '../../pipe/data-chinese-intercept.pipe';
import { NumberInterceptPipe } from '../../pipe/number-intercept.pipe';
import { PayrecordComponent } from './payrecord/payrecord.component';
import { PayrecordSearchComponent } from './payrecord/payrecord-search/payrecord-search.component';


@NgModule({
  imports: [
    OrdersRoutingModule,
    CommonModule,
    FormsModule,
    ModalModule.forRoot(),
    TabsModule.forRoot(),
    TooltipModule.forRoot(),
    PopoverModule.forRoot(),
    DataTableModule,
    PaginatorModule,
    AppCommonModule,
    UtilsModule,
    EditorModule,
    FileUploadModule,
    ReactiveFormsModule,
    NgxEchartsModule,
    QuillModule
  ],
  declarations: [
    HomeComponent,
    OrderlistComponent, 
    OrderNumberInterceptPipe,
    ChineseInterceptPipe,
    DataChineseInterceptPipe,
    NumberInterceptPipe,
    PayrecordComponent,
    PayrecordSearchComponent
  ]
})
export class OrdersModule { }
