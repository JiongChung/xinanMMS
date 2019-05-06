import { Component, OnInit, Injector, ViewChild } from '@angular/core';
import {appModuleAnimation} from '@shared/animations/routerTransition';
import {AppComponentBase} from '@shared/common/app-component-base';
import { DataTable } from 'primeng/components/datatable/datatable';
import { Paginator } from 'primeng/components/paginator/paginator';
import { LazyLoadEvent } from 'primeng/components/common/lazyloadevent';


@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css'],
  animations: [appModuleAnimation()]
})
export class UserlistComponent extends AppComponentBase implements OnInit {
    constructor(
        injector:Injector
        
    ) { 
        super(injector);
    }

    ngOnInit() {
    }
}