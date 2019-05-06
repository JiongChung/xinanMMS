import { Component, OnInit } from '@angular/core';
import { CommonserviceService } from '../../../services/commonservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

    public SubMenu:any;

    constructor(private commonservice: CommonserviceService) { }

    ngOnInit() {
        this.SubMenu = this.commonservice.getSubMenu('setting',1);
        let grantedPermissions = window.localStorage.getItem('grantedPermissions');
        for(let i=0; i<this.SubMenu.length; i++){
            if(this.SubMenu[i].permission != undefined){
                if(!this.SubMenu[i].permission){
                    this.SubMenu.splice(i,1);
                    i--;
                }
            }else{
                for(let j=0; j<this.SubMenu[i].list.length; j++){
                    if(grantedPermissions.indexOf(this.SubMenu[i].list[j].permission) == -1 && this.SubMenu[i].list[j].permission != undefined){
                        this.SubMenu[i].list.splice(j,1);
                        j--;
                    }
                }
            } 
        }
    }

}