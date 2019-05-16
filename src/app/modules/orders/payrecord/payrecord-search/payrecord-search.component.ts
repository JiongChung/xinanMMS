import { Component, OnInit, Output , EventEmitter,  Injector, Input,ViewChild,ElementRef,AfterViewInit} from '@angular/core';
import { AppComponentBase } from '@shared/common/app-component-base';
import * as moment from 'moment';
import {CommonService} from '../../../../services/common.service';

@Component({
  selector: 'app-payrecord-search',
  templateUrl: './payrecord-search.component.html',
  styleUrls: ['./payrecord-search.component.css']
})
export class PayrecordSearchComponent extends AppComponentBase implements OnInit {
    @Output() private ListenSearch = new EventEmitter();

    searchParameter: any = {};
    constructor(
        injector: Injector,
        private CommonService: CommonService
    ) { 
        super(injector);
    }

    ngOnInit() {
    }

    submitSearch(){
        
    }

}
