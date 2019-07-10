import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../auth/authentication.service';
import {PostsService} from '../../services/posts.service';
import {AnswersService} from '../../services/answers.service';
import { Router } from "@angular/router";
import { Posts } from '../../../models/posts';
import { Customers } from '../../../models/customers';
import { Answers } from '../../../models/answers';
import { ToastrService } from 'ngx-toastr';

/**
*Muestra si han recibido respuestas en publicaciones del usuario.
*/  
@Component({
  selector: 'app-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['../home/home.component.css']
})
export class NotifyComponent implements OnInit {

  /**
  *Arreglo de respuestas.
  */
	aanswers: Answers[];
  /**
  *Arreglo de respuestas.
  */  
	pposts: Posts[];
  /**
  *@ignore
  */
  constructor(private router: Router, private posts: PostsService, private answers: AnswersService, private auth: AuthenticationService, private toastr: ToastrService) { }

  /**
  *Obtiene todas las respuestas.
  */
  getAnswers()
  {
    return this.answers.getAnswers()
      .subscribe(
          answers => {
            this.aanswers = answers
          }
  )   
  }

  /**
  *Obtiene todas las publicaciones.
  */
  getPosts()
  {
    const id = this.auth.getUserDetails().id_user;
    this.posts.getpostsOwner(id).subscribe(pposts => this.pposts = pposts);
  }

  /**
  *Obtiene todas las respuestas y publicaciones al inicio.
  */
  ngOnInit() {
  	this.getPosts();
  	this.getAnswers();
  }

}
