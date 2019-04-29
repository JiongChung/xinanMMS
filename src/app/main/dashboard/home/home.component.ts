import { Component, OnInit } from '@angular/core';
import { CommonserviceService } from '../../../services/commonservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  public FirstMenu:any;
  constructor(private commonservice: CommonserviceService) { }

  ngOnInit() {
    this.FirstMenu = this.commonservice.getSubMenu('customer',0);
  }

}
