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
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['../home/home.component.css']
})
export class DiscoverComponent implements OnInit {

pposts: Posts[];
uuser: Customers[];
newAnswer: Answers = new Answers();
selectedPost: Posts;
textValue;
priceValue;
message: string;

modalRef1: BsModalRef;

  constructor(private modalService: BsModalService, private router: Router, private posts: PostsService, private answers: AnswersService, private auth: AuthenticationService, private http: HttpClient, private toastr: ToastrService) 
  { 
  
  }

  getPosts() {
    return this.posts.getposts()
      .subscribe(
          pposts => {
            this.pposts = pposts;
          }
  )
  };

  reply(template: TemplateRef<any>, replyPost: Posts) 
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
  }

  addreply(form: NgForm)
  {
    if(form.value.text === "")
    {
      this.toastr.warning('Debe añadirse texto a la respuesta');
      return;
    }
    else if(form.value.price <= 0)
    {
      this.toastr.warning('Debe añadirse un precio a la respuesta mayor');
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
        this.toastr.success('Respuesta publicada exitosamente');
      },
      err => {
        this.toastr.error('Error al crear respuesta');
      }
    );
    this.modalRef1.hide();    

  }

  ngOnInit() 
  {
    //Obtiene todas las publicaciones de usuario al inicio
    this.getPosts();
  }

}
