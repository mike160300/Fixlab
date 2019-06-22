import { Component, OnInit, TemplateRef } from '@angular/core';
import {AuthenticationService} from '../../auth/authentication.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import {PostsService} from '../../services/posts.service';
import {AnswersService} from '../../services/answers.service';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import { Posts } from '../../../models/posts';
import { Customers } from '../../../models/customers';
import { Answers } from '../../../models/answers';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['../home/home.component.css']
})
export class AnswersComponent implements OnInit {

pposts: Posts[];
uuser: Customers[];
aanswers: Answers[];
selectedAnswer: Answers;
message: string;

modalRef1: BsModalRef;
modalRef2: BsModalRef;

  constructor(private modalService: BsModalService, private router: Router, private posts: PostsService, private answers: AnswersService, private auth: AuthenticationService, private http: HttpClient) 
  { 
    //Obtiene todas las publicaciones de usuario al inicio
    this.getAnswers();
  }

  getAnswers() {
    return this.answers.getAnswers()
      .subscribe(
          answers => {
            this.aanswers = answers
          }
  )
  };

  modify(template: TemplateRef<any>, modifyAnswer: Answers) 
  {
    this.selectedAnswer = modifyAnswer;  
    this.modalRef1 = this.modalService.show(template);
    this.modalRef1.hide();
  }

  delet(template: TemplateRef<any>, delAnswer: Answers) 
  {
    this.selectedAnswer = delAnswer;  
    this.modalRef2 = this.modalService.show(template);
    this.modalRef2.hide();
  }

  update(form: NgForm) {

    if(form.value.text != ""){
      this.selectedAnswer.text = form.value.text;
    }
    if(form.value.price != ""){
      this.selectedAnswer.price = form.value.price;
    }

    this.answers.updateAnswer(this.selectedAnswer)
        .subscribe(result => this.message = "Answer Updated Successfully!");
    this.modalRef1.hide();

  }

  delete() 
  {
    this.answers.deleteAnswer(this.selectedAnswer).subscribe(
      () => {
        this.message = "Answer Deleted Successfully!";
        console.log(this.message);
      },
      err => {
        console.error(err);
      }
    );
    this.modalRef2.hide();
  }

  /*reply(template: TemplateRef<any>, replyPost: Posts) 
  {
    this.selectedPost = replyPost;

    this.newAnswer.id_answer= 0;
    this.newAnswer.text="";
    this.newAnswer.price=0;
    this.newAnswer.unlocked = false;
    this.newAnswer.valorated = false;
    this.newAnswer.id_owner= this.auth.getUserDetails().id_user;
    this.newAnswer.id_inpost = this.selectedPost.id_post;

    
    this.modalRef1 = this.modalService.show(template);
    this.modalRef1.hide();
  }*/

  /*addreply(form: NgForm)
  {
    if(form.value.text === "")
    {
      alert("Debe escribir una respuesta");
      return;
    }
    else if(form.value.price === "")
    {
      alert("Debe poner un precio");
      return;
    }
    else 
    {
      var newAnswer = {
        id_answer: 0,
        text: form.value.text,
        price : form.value.price,
        unlocked: false,
        valorated: false,
        id_owner : this.auth.getUserDetails().id_user,
        id_inpost: this.selectedPost.id_post        
      };
    }

    this.answers.addreply(this.newAnswer).subscribe(
      () => {
        this.message = "Answers Published Successfully!";
        console.log(this.message);
      },
      err => {
        console.error(err);
      }
    );
    this.modalRef1.hide();    

  }*/


  ngOnInit() {
  }

}
