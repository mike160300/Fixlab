import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../auth/authentication.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import {PostsService, PostDetails} from '../../services/posts.service';
import {AnswersService, AnswerDetails} from '../../services/answers.service';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import { post } from 'selenium-webdriver/http';
import { Posts } from '../../../models/posts';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['../home/home.component.css']
})
export class DiscoverComponent implements OnInit {

pposts: Posts[];

  constructor(private router: Router, private posts: PostsService, private answers: AnswersService, private auth: AuthenticationService, private http: HttpClient) 
  { 
    //Obtiene todas las publicaciones de usuario al inicio
    this.getPosts();
  }

  getPosts() {
    return this.posts.getposts()
               .subscribe(
                 customers => {
                  console.log(customers);
                  this.pposts = customers
                 }
  )
  };


  ngOnInit() {
  }

}
