import { Component, OnInit } from '@angular/core';
import { sideNavNameList } from './menu';
import { sideNavCnname } from './nav';

@Component({
  selector: 'app-newsidebarmenu',
  templateUrl: './newsidebarmenu.component.html',
  styleUrls: ['./newsidebarmenu.component.css']
})
export class NewsidebarmenuComponent implements OnInit {

  public sidemenu = sideNavNameList;
  public cnname = sideNavCnname;
  public cnmenu:any;
  public url: string;
  public status = false;
  constructor() { }

  ngOnInit() {
    this.cnmenu = this.cnname[0];
    for(let i=0;i<this.sidemenu.length;i++){
      let firstname = this.sidemenu[i].name;
      this.sidemenu[i].name = this.cnmenu[firstname];
      for(let j=0;j<this.sidemenu[i].list.length;j++){
        let name = this.sidemenu[i].list[j].subname;
        this.sidemenu[i].list[j].subname = this.cnmenu[name];
        for(let k=0;k<this.sidemenu[i].list[j].list.length;k++){
          let lastname = this.sidemenu[i].list[j].list[k].lastname;
          this.sidemenu[i].list[j].list[k].lastname = this.cnmenu[lastname];
        }
      }
   }

   this.url = location.pathname;
   if(this.url.toString().indexOf('main/dashboard')){
     this.status = true; 
   }else{
   }
  }
}
