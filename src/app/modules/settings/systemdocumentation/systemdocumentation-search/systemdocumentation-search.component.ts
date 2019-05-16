import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-systemdocumentation-search',
  templateUrl: './systemdocumentation-search.component.html',
  styleUrls: ['./systemdocumentation-search.component.css']
})
export class SystemdocumentationSearchComponent implements OnInit {

    @Output() private ListenSearch = new EventEmitter();

    Title: string = '';
    IsActive: any = '';
    searchParameter: any = {};
    constructor() { }

    ngOnInit() {
    }

    submitSearch(): void{
        this.searchParameter.Title = this.Title;
        this.searchParameter.IsActive = this.IsActive ? ((this.IsActive == '1') ? true : false) : undefined;
        this.ListenSearch.emit(this.searchParameter);
    }

}
