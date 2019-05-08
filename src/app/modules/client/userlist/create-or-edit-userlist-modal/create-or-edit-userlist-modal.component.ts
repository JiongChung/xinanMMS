import { Component, ViewChild, Injector, Output, EventEmitter,  OnInit, Input, ElementRef } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
import { AppComponentBase } from '@shared/common/app-component-base';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'CreateOrEditUserlistModal',
  templateUrl: './create-or-edit-userlist-modal.component.html',
  styleUrls: ['./create-or-edit-userlist-modal.component.css']
})
export class CreateOrEditUserlistModalComponent extends AppComponentBase implements OnInit {
    @ViewChild('createOrEditModal') modal: ModalDirective;
    @Output() modalSave: EventEmitter<any> = new EventEmitter<any>();
    @Input() copyList: Array<any>;

    dateRangePickerStartDate: moment.Moment;
    @ViewChild('birth') birth: ElementRef;

    active = false;
    saving = false;

    myForm: FormGroup;
    createOrEditParameter: any = {};

    constructor(
        injector: Injector,
        private fb: FormBuilder,
    ) { 
        super(injector);
        this.dateRangePickerStartDate = moment().add(-7, 'days').endOf('day');
    }

    ngOnInit() {
    }

    onShown(){
        $(this.birth.nativeElement).datetimepicker({
            locale: abp.localization.currentLanguage.name,
            format: 'L'
        });
        $('#isVerifiedIdentity').bootstrapSwitch('state', this.createOrEditParameter.isVerifiedIdentity);
        $('#isVerifiedIdentity').bootstrapSwitch('onSwitchChange', (el: any, value: any) => {
            this.createOrEditParameter.isVerifiedIdentity = value;
        });
    }

    close(): void {
        this.active = false;
        this.modal.hide();
    }
    createForm(){
        this.myForm = this.fb.group({
            nickName: [''],
            phoneNumber: [''],
            distric: [''],
            realName: [''],
            surname: [''],
            userGrade: [''],
            isVerifiedIdentity: [''],
            birth: ['']
        });   
    }

    show(viewid?: number): void {
        this.createForm();
        this.active = true;
        this.createOrEditParameter = this.copyList.filter(item => item.id == viewid)[0];
        this.modal.show();
    }

    save(){
        
    }

}
