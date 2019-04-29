import { Component, OnInit } from '@angular/core';
import { CommonserviceService } from '../../../services/commonservice.service';

@Component({
  selector: 'app-newtopbarmenu',
  templateUrl: './newtopbarmenu.component.html',
  styleUrls: ['./newtopbarmenu.component.css']
})
export class NewtopbarmenuComponent implements OnInit {
  public FirstMenu:any;
  constructor(private commonservice: CommonserviceService) { }

  ngOnInit() {
    this.FirstMenu = this.commonservice.getSubMenu('dashboard',0);
  }

}
