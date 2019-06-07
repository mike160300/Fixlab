import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {AuthenticationService} from '../../auth/authentication.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import {PostsService, PostDetails} from '../../services/posts.service';
import {AnswersService, AnswerDetails} from '../../services/answers.service';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import { post } from 'selenium-webdriver/http';
import { Posts } from '../../../models/posts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pposts: Posts[];
  message: string
  //customer = new Posts() ;

  credentials: PostDetails = {
    id_post: 0,
    title: '',
    description: '',
    image:  '',
    publish_date:Date(),
    resolved : false,
    id_owner: this.auth.getUserDetails().id_user
  };

 solutions: AnswerDetails = {
    id_answer: 0,
    text: '',
    price: 0,
    unlocked: true,
    valorated: false,
    id_owner: this.auth.getUserDetails().id_user,
    id_inpost:2
  };

  modalRef1: BsModalRef;
  modalRef2: BsModalRef;
  modalRef3: BsModalRef;
  modalRef4: BsModalRef;

  constructor(private modalService: BsModalService, private router: Router, private posts: PostsService, private answers: AnswersService, private auth: AuthenticationService) 
  { 
  }
 
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

  answer(template: TemplateRef<any>) 
  {
    this.modalRef4= this.modalService.show(template);
    this.modalRef4.hide();
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
       
  addanswer(form: NgForm) {
    this.answers.addanswer(this.solutions).subscribe(
      () => {
        this.router.navigateByUrl("/dashboard/home");
      },
      err => {
        console.error(err);
      }
    );
  }

  /*getPosts() {
    return this.posts.getposts()
               .subscribe(
                 customers => {
                  console.log(customers);
                  this.pposts = customers
                 }
  )
  };*/

/*update(): void {
    this.submitted = true;
    this.customerService.updateCustomer(this.customer)
        .subscribe(result => this.message = "Customer Updated Successfully!");
  }*/

  delete(id: number){
    console.log(id);
    this.posts.deletePost(id).subscribe(
      () => {
        this.router.navigateByUrl("/dashboard/home");
      },
      err => {
        console.error(err);
      }
    );
  }  


  ngOnInit() {
    //this.getPosts();
    //Obtiene todas las publicaciones de usuario al inicio
    const id = this.auth.getUserDetails().id_user
    this.posts.getpostsOwner(id)
      .subscribe(pposts => this.pposts = pposts)
  }

}

