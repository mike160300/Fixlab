import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {AuthenticationService} from '../../auth/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  modalRef1: BsModalRef;
  modalRef2: BsModalRef;
  modalRef3: BsModalRef;
  constructor(private modalService: BsModalService, private auth: AuthenticationService) {}
 
  create(template: TemplateRef<any>) 
  {
    this.modalRef1 = this.modalService.show(template);
    this.modalRef1.hide();
  }

  modify(template: TemplateRef<any>) 
  {
    this.modalRef2 = this.modalService.show(template);
    this.modalRef2.hide();
  }

  delet(template: TemplateRef<any>) 
  {
    this.modalRef3 = this.modalService.show(template);
    this.modalRef3.hide();
  }

  ngOnInit() {
  }

}
