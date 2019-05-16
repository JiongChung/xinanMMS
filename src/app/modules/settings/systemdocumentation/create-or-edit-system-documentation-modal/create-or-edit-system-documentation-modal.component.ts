import { Component, ViewChild, Injector, Output, EventEmitter,  OnInit, Input, ElementRef } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
import { AppComponentBase } from '@shared/common/app-component-base';
import { SystemDocumentationAdminServiceProxy } from '@shared/service-proxies/service-proxies';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'CreateOrEidtSystemDocumentationModal',
  templateUrl: './create-or-edit-system-documentation-modal.component.html',
  styleUrls: ['./create-or-edit-system-documentation-modal.component.css']
})
export class CreateOrEditSystemDocumentationModalComponent extends AppComponentBase implements OnInit {
    @ViewChild('createOrEditModal') modal: ModalDirective;
    @Output() modalSave: EventEmitter<any> = new EventEmitter<any>();
    @Input() testList: Array<any>;

    myForm: FormGroup;
    active = false;
    saving = false;

    createOrEditParameter: any = {};

    constructor(
        injector: Injector,
        private fb: FormBuilder,
        private _SystemDocumentationAdminService: SystemDocumentationAdminServiceProxy
    ) { 
        super(injector);
    }

    ngOnInit() {
    }

    createForm(){
        this.myForm = this.fb.group({
            title: ['',[Validators.required]],
            content: [''],
            isActive: [''],
            sequence: ['',[Validators.required, Validators.pattern(/^[0-9]*[0-9][0-9]*$/)]],
            isCommonIssue: ['']
        });   
    }

    onShown(): void{
        $('#isActive').bootstrapSwitch('state', this.createOrEditParameter.isActive);
        $('#isActive').bootstrapSwitch('onSwitchChange', (el: any, value: any) => {
            this.createOrEditParameter.isActive = value;
        });
        $('#isCommonIssue').bootstrapSwitch('state', this.createOrEditParameter.isCommonIssue);
        $('#isCommonIssue').bootstrapSwitch('onSwitchChange', (el: any, value: any) => {
            this.createOrEditParameter.isCommonIssue = value;
        });
    }

    close(): void {
        this.active = false;
        this.modal.hide();
    }

    show(viewid?: number): void {
        this.active = true;
        this.createForm();
        if(viewid != undefined){
            this.createOrEditParameter = this.testList.filter(item => item.id == viewid)[0];
        }else{
            delete this.createOrEditParameter.id;
            this.createOrEditParameter.title = '';
            this.createOrEditParameter.content = '';
            this.createOrEditParameter.isActive = false;
            this.createOrEditParameter.sequence = 0;
            this.createOrEditParameter.isCommonIssue = false;
        }
        this.modal.show();
    }

    save(){
        this.saving = true;
        this._SystemDocumentationAdminService.createOrUpdateDocumentation(this.createOrEditParameter)
        .finally(() => { this.saving = false; })
            .subscribe(() => {
                this.notify.info(this.l('SavedSuccessfully'));
                this.close();
                this.modalSave.emit(null);
            });
    }
}
