import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClientRoutingModule} from './admin.client.routing';
import {HomeComponent} from './home/home.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ModalModule, PopoverModule, TabsModule, TooltipModule} from '@node_modules/ngx-bootstrap';
import {DataTableModule, EditorModule, PaginatorModule} from '@node_modules/primeng/primeng';
import {UtilsModule} from '@shared/utils/utils.module';
import {AppCommonModule} from '@app/shared/common/app-common.module';
import {FileUploadModule} from '@node_modules/ng2-file-upload';
import { UserlistComponent } from './userlist/userlist.component';
import { ClientNumberInterceptPipe } from '../../pipe/client-number-intercept.pipe';
import { NgxEchartsModule } from 'ngx-echarts';
import { UserlistSearchComponent } from './userlist/userlist-search/userlist-search.component';

@NgModule({
    imports: [
        ClientRoutingModule,
        CommonModule,
        FormsModule,
        ModalModule.forRoot(),
        TabsModule.forRoot(),
        TooltipModule.forRoot(),
        PopoverModule.forRoot(),
        DataTableModule,
        PaginatorModule,
        DataTableModule,
        PaginatorModule,
        AppCommonModule,
        UtilsModule,
        EditorModule,
        FileUploadModule,
        ReactiveFormsModule,
        NgxEchartsModule
        // ,AppModule
    ],
    declarations: [
        HomeComponent, 
        UserlistComponent, 
        ClientNumberInterceptPipe, UserlistSearchComponent
    ]
})
export class ClientModule {
}
