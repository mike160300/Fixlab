import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../auth/authentication.service';
import {PostsService} from '../../services/posts.service';
import {AnswersService} from '../../services/answers.service';
import { Router } from "@angular/router";
import { Posts } from '../../../models/posts';
import { Customers } from '../../../models/customers';
import { Answers } from '../../../models/answers';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['../home/home.component.css']
})
export class NotifyComponent implements OnInit {

	aanswers: Answers[];
	pposts: Posts[];
	Totalnotificatios: number;	

  constructor(private router: Router, private posts: PostsService, private answers: AnswersService, private auth: AuthenticationService, private toastr: ToastrService) { }

  getAnswers()
  {
    return this.answers.getAnswers()
      .subscribe(
          answers => {
            this.aanswers = answers
          }
  )   
  }

  getPosts()
  {
    const id = this.auth.getUserDetails().id_user;
    this.posts.getpostsOwner(id).subscribe(pposts => this.pposts = pposts);
  }


  ngOnInit() {
  	this.getPosts();
  	this.getAnswers();
  }

}
