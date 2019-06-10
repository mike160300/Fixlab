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
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pposts: Posts[];
  message: string;
  selectedPost: Posts;
  nameValue;
  descriptionValue;
  selecetdFile: File;
  imageUrl: string = '';
  oldimageUrl: string = null;  

  credentials: PostDetails = {
    id_post: 0,
    title: '',
    description: '',
    image:  this.imageUrl,
    publish_date:Date(),
    resolved : false,
    id_owner: this.auth.getUserDetails().id_user
  };

 /*solutions: AnswerDetails = {
    id_answer: 0,
    text: '',
    price: 0,
    unlocked: true,
    valorated: false,
    id_owner: this.auth.getUserDetails().id_user,
    id_inpost:2
  };*/

  modalRef1: BsModalRef;
  modalRef2: BsModalRef;
  modalRef3: BsModalRef;
  modalRef4: BsModalRef;

  constructor(private modalService: BsModalService, private router: Router, private posts: PostsService, private answers: AnswersService, private auth: AuthenticationService, private http: HttpClient) 
  { 
    //Obtiene todas las publicaciones de usuario al inicio
    const id = this.auth.getUserDetails().id_user;
    this.posts.getpostsOwner(id).subscribe(pposts => this.pposts = pposts);
  }
 
  create(template: TemplateRef<any>) 
  {
    this.modalRef1 = this.modalService.show(template);
    this.modalRef1.hide();
  }

  modify(template: TemplateRef<any>, editPost: Posts) 
  {
    this.selectedPost = editPost;
    this.nameValue= this.selectedPost.title;
    this.descriptionValue = this.selectedPost.description;
    this.modalRef2 = this.modalService.show(template);
    this.modalRef2.hide();
  }

  delet(template: TemplateRef<any>, deletePost: Posts) 
  {
    this.selectedPost = deletePost;
    console.log(this.selectedPost);
    this.modalRef3 = this.modalService.show(template);
    this.modalRef3.hide();
  }

  cancel(): void
  {
    this.modalRef1.hide();
  }

  /*answer(template: TemplateRef<any>) 
  {
    this.modalRef4= this.modalService.show(template);
    this.modalRef4.hide();
  }*/

  addpost(form: NgForm) {

    this.posts.addpost(this.credentials).subscribe(
      () => {
        this.message = "Post Created Successfully!";
        console.log(this.message);
      },
      err => {
        console.error(err);
      }
    );
    this.modalRef1.hide();
  }
       
  /*addanswer(form: NgForm) {
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

  update(form: NgForm) {

    if(form.value.name != ""){
      this.selectedPost.title = form.value.name;
    }
    if(form.value.descripcion != ""){
      this.selectedPost.description = form.value.descripcion;
    }

    this.posts.updatePost(this.selectedPost)
        .subscribe(result => this.message = "Post Updated Successfully!");
    this.modalRef2.hide();

  }

  delete() 
  {
    this.posts.deletePost(this.selectedPost).subscribe(
      () => {
        this.message = "Post Deleted Successfully!";
        console.log(this.message);
      },
      err => {
        console.error(err);
      }
    );
    this.modalRef3.hide();

  }

  //No funciona muy bien todavía
  upload(event) 
  {

    // Obtiene la imagen:
    this.selecetdFile = event.target.files[0];
    
    // Genera un ID random para la imagen:
    const randomId = Math.random().toString(36).substring(2);
    const filepath = `${randomId}`;

    this.http.post('/assets/', this.selecetdFile)
      .subscribe(resposta => console.log('Upload ok.'));

}
  
  ngOnInit() 
  {
    
  }

}

