import {Injectable} from '@angular/core';
import {sideNavNameList} from '../shared/layout/newsidebarmenu/menu';
import {sideNavCnname} from '../shared/layout/newsidebarmenu/nav';

@Injectable()
export class CommonserviceService {

    public sidemenu = sideNavNameList;
    public sidenavlist = sideNavNameList;
    public cnname = sideNavCnname;
    public cnmenu: any;
    public SubMenu: any;   //左边二三级显示
    public FirstMenu = [];  //顶部一级展示

    constructor() {
    }

    /*
      type: 1为非控制台分类；0为控制台
    */
    getSubMenu(item, type) {
        this.FirstMenu = [];
        this.cnmenu = this.cnname[0];
        for (let i = 0; i < this.sidemenu.length; i++) {
            let firstname = this.sidemenu[i].name;
            let backname = this.sidemenu[i].backname;
            // this.sidemenu[i].name = this.cnmenu[firstname];
            if (backname.toLocaleLowerCase() == item && type == 1) {
                this.SubMenu = this.sidemenu[i].list;
                for (let j = 0; j < this.sidemenu[i].list.length; j++) {
                    let name = this.sidemenu[i].list[j].subname;
                    if (name != this.cnmenu[name] && this.cnmenu[name] != undefined) {
                        this.sidemenu[i].list[j].subname = this.cnmenu[name];
                    }
                    for (let k = 0; k < this.sidemenu[i].list[j].list.length; k++) {
                        let lastname = this.sidemenu[i].list[j].list[k].lastname;
                        if (lastname != this.cnmenu[lastname] && this.cnmenu[lastname] != undefined) {
                            this.sidemenu[i].list[j].list[k].lastname = this.cnmenu[lastname];
                        }
                    }
                }
                return this.SubMenu;
                // break;
            } else {
                if (firstname != this.cnmenu[firstname] && this.cnmenu[firstname] != undefined) {
                    this.sidemenu[i].name = this.cnmenu[firstname];
                }
                let permission = 'permission';
                let permissionName = 'permissionName';
                this.FirstMenu.push({
                    name: this.sidemenu[i].name,
                    url: this.sidemenu[i].url,
                    icon: this.sidemenu[i].icon,
                    value: this.sidemenu[i].value.replace('&amp;', '&'),
                    permission: this.sidemenu[i][permission],
                    permissionName: this.sidemenu[i][permissionName]
                });
                // if(this.sidenavlist[i].permission == undefined){
                //     this.FirstMenu.push({
                //         name: this.sidemenu[i].name,
                //         url: this.sidemenu[i].url,
                //         icon: this.sidemenu[i].icon,
                //         value: this.sidemenu[i].value.replace('&amp;', '&')
                //     });
                // }else{
                //     this.FirstMenu.push({
                //         name: this.sidemenu[i].name,
                //         url: this.sidemenu[i].url,
                //         icon: this.sidemenu[i].icon,
                //         value: this.sidemenu[i].value.replace('&amp;', '&'),
                //         permission: this.sidenavlist[i].permission,
                //         permissionName: this.sidenavlist[i].permissionName
                //     });
                // }
                
            }

        }
        if (type == 0) {
            return this.FirstMenu;
        }
    }
}
