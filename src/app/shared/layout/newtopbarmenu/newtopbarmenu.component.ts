import { Component, OnInit } from '@angular/core';
import { CommonserviceService } from '../../../services/commonservice.service';

@Component({
  selector: 'app-newtopbarmenu',
  templateUrl: './newtopbarmenu.component.html',
  styleUrls: ['./newtopbarmenu.component.css']
})
export class NewtopbarmenuComponent implements OnInit {
    public FirstMenu:any;
    public isAdmin: boolean = false;
    constructor(private commonservice: CommonserviceService) { }

    ngOnInit() {
        this.getPermission();
        this.FirstMenu = this.commonservice.getSubMenu('dashboard',0);
        let formatGrantedPermissions = JSON.parse(window.localStorage.getItem('formatGrantedPermissions'));
        for(let i=0; i<this.FirstMenu.length; i++){
            if(this.FirstMenu[i].permissionName != undefined && formatGrantedPermissions[this.FirstMenu[i].permissionName] == undefined){
                this.FirstMenu.splice(i,1);
                i--;
            }
        }
    }

    getPermission(): void{
        let formatGrantedPermissions = window.localStorage.getItem('formatGrantedPermissions');
        // this.isAdmin = (formatGrantedPermissions.indexOf('PagesCustomer') > -1) ? true : false;
        this.isAdmin = true;
    }
}
