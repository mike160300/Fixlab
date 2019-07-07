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
phone: boolean = false;
pc: boolean = false;
console: boolean = false;
other: boolean = false;
textValue;
priceValue;

modalRef1: BsModalRef;

  constructor(private modalService: BsModalService, private router: Router, private posts: PostsService, private answers: AnswersService, private auth: AuthenticationService, private http: HttpClient, private toastr: ToastrService) 
  { 
  
  }

  getPosts() 
  {
    return this.posts.getposts(this.phone, this.pc, this.console, this.other)
      .subscribe(
          pposts => {
            this.pposts = pposts;
          })
  }; 

  /**
  *Para filtrar por la categoría de Teléfonos.
  */
  getPhones()
  {
    this.toastr.info('Se muestran las etiquetas de la categoría: Teléfonos y Tablets');
    this.phone=true;
    this.pc=false;
    this.console=false;
    this.other=false;
    this.ngOnInit();
  }

  /**
  *Para filtrar por la categoría de PC's/Laptops.
  */
  getPcs()
  {
    this.toastr.info('Se muestran las etiquetas de la categoría: PCs y Laptops');
    this.phone=false;
    this.pc=true;
    this.console=false;
    this.other=false;
    this.ngOnInit();
  }

  /**
  *Para filtrar por la categoría de Consolas.
  */
  getConsoles()
  {
    this.toastr.info('Se muestran las etiquetas de la categoría: Consolas');
    this.phone=false;
    this.pc=false;
    this.console=true;
    this.other=false;
    this.ngOnInit();
  }

  /**
  *Para filtrar por la categoría de Otros.
  */
  getOthers()
  {
    this.toastr.info('Se muestran las etiquetas de la categoría: Otros');
    this.phone=false;
    this.pc=false;
    this.console=false;
    this.other=true;
    this.ngOnInit();
  }

  /**
  *Para no aplicar filtros.
  */
  getAll()
  {
    this.toastr.info('Se muestran las etiquetas de todas las categoría');
    this.phone=false;
    this.pc=false;
    this.console=false;
    this.other=false;
    this.ngOnInit();
  }        

  /**
  *Modal para responder una publicación.
  */
  reply(template: TemplateRef<any>, replyPost: Posts) 
  {
    this.selectedPost = replyPost;
    console.log(this.selectedPost);

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

  /**
  *Responde a una publicación.
  */
  addreply(form: NgForm)
  {
    if(form.value.text === "")
    {
      this.toastr.warning('Debe añadirse texto a la respuesta');
      return;
    }
    else if(form.value.price <= 0)
    {
      this.toastr.warning('Debe añadirse un precio mayor a la respuesta');
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
