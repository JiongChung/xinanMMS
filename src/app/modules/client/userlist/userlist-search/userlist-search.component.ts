import { Component, OnInit, Output , EventEmitter,  Injector, Input,ViewChild,ElementRef,AfterViewInit} from '@angular/core';
import { AppComponentBase } from '@shared/common/app-component-base';
import * as moment from 'moment';
import {CommonService} from '../../../../services/common.service';

@Component({
  selector: 'app-userlist-search',
  templateUrl: './userlist-search.component.html',
  styleUrls: ['./userlist-search.component.css']
})
export class UserlistSearchComponent extends AppComponentBase implements OnInit,AfterViewInit {
    @Output() private ListenSearch = new EventEmitter();
    @ViewChild('startDatePicker') startDatePicker: ElementRef;
    @ViewChild('endDatePicker') endDatePicker: ElementRef;

    dateRangePickerStartDate: moment.Moment;
    dateRangePickerEndDate: moment.Moment;

    NickName: string = '';
    PhoneNumber: string = '';
    UserGradeId: any = '';
    CreationTimeFrom: any = '';
    CreationTimeTo: any = '';

    searchParameter: any = {};

    constructor(
        injector: Injector,
        private CommonService: CommonService
    ) { 
        super(injector);
        this.dateRangePickerStartDate = moment().add(-7, 'days').endOf('day');
        this.dateRangePickerEndDate = moment().startOf('day');
    }

    ngOnInit() {
    }

    ngAfterViewInit(): void {
        $(this.startDatePicker.nativeElement).datetimepicker({
            locale: abp.localization.currentLanguage.name,
            format: 'L'
        });

        $(this.endDatePicker.nativeElement).datetimepicker({
            locale: abp.localization.currentLanguage.name,
            format: 'L'
        });
    }

    checkDate(){
        let params =  this.CommonService.checkSearchDate(
            this.startDatePicker.nativeElement,
            this.endDatePicker.nativeElement);
        this.CreationTimeFrom = params.startDate;
        this.CreationTimeTo = params.endDate;
        return params.status;
    }

    submitSearch(){
        if(!this.checkDate() && this.checkDate() != undefined){
            this.message.info('搜索开始时间不能大于结束时间');
            return false;
        }
        this.searchParameter.NickName = this.NickName.trim();
        this.searchParameter.PhoneNumber = this.PhoneNumber.trim();
        this.searchParameter.UserGradeId = this.UserGradeId;
        this.searchParameter.CreationTimeFrom = this.CreationTimeFrom;
        this.searchParameter.CreationTimeTo = this.CreationTimeTo;

        this.ListenSearch.emit(this.searchParameter);
    }

}
