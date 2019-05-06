import { Component, ViewChild, OnInit} from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';

@Component({
  selector: 'ViewAnnouncementModal',
  templateUrl: './view-announcement-modal.component.html',
  styleUrls: ['./view-announcement-modal.component.css']
})
export class ViewAnnouncementModalComponent implements OnInit {
    @ViewChild('createOrEditModal') modal: ModalDirective;

    public active = false;
    public saving = false;

    constructor() { }

    ngOnInit() {
    }

    onShown(){}

    close(): void {
        this.active = false;
        this.modal.hide();
    }

    show(): void{
        this.active = true;
        this.modal.show();
    }
}
