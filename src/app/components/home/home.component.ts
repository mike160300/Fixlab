import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {AuthenticationService} from '../../auth/authentication.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import {PostsService, PostDetails} from '../../services/posts.service';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  credentials: PostDetails = {
    id_post: 0,
    title: '',
    description: '',
    image:  '',
    publish_date:Date(),
    resolved : false,
    id_owner: this.auth.getUserDetails().id_user
  };

  modalRef1: BsModalRef;
  modalRef2: BsModalRef;
  modalRef3: BsModalRef;

  constructor(private modalService: BsModalService, private router: Router, private posts: PostsService, private auth: AuthenticationService) {}
 
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

  addpost(form: NgForm) {
    this.posts.addpost(this.credentials).subscribe(
      () => {
        this.router.navigateByUrl("/dashboard/home");
      },
      err => {
        console.error(err);
      }
    );
  }

  ngOnInit() {
  }

}
