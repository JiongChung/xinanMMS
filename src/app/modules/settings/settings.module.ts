import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { SettingsRoutingModule } from './admin.settings.routing';
import { HomeComponent } from './home/home.component';
import { BasesettingsComponent } from './basesettings/basesettings.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ModalModule, TabsModule, TooltipModule, PopoverModule } from 'ngx-bootstrap';
import { UtilsModule } from '@shared/utils/utils.module';
import {DataTableModule} from 'primeng/primeng';
import { PaginatorModule } from 'primeng/primeng';
import { EditorModule } from 'primeng/primeng';
import { AppCommonModule } from '@app/shared/common/app-common.module';
import { FileUploadModule } from 'ng2-file-upload';

@NgModule({
  imports: [
    SettingsRoutingModule,
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
    ReactiveFormsModule
  ],
  declarations: [
    HomeComponent, 
    BasesettingsComponent
  ]
})
export class SettingsModule { }
