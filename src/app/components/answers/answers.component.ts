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

/**
*Para ver y modificar las respuestas hechas por el usuario.
*/
@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['../home/home.component.css']
})
export class AnswersComponent implements OnInit {

/**
*Arreglo de publicaciones.
*/
pposts: Posts[];
/**
*Arreglo de usuarios.
*/
uuser: Customers[];
/**
*Arreglo de respuestas.
*/
aanswers: Answers[];
/**
*Respuesta seleccionada actualmente.
*/
selectedAnswer: Answers;
/**
*@ignore
*/
modalRef1: BsModalRef;
/**
*@ignore
*/
modalRef2: BsModalRef;

  /**
  *@ignore
  */
  constructor(private modalService: BsModalService, private router: Router, private posts: PostsService, private answers: AnswersService, private auth: AuthenticationService, private http: HttpClient, private toastr: ToastrService) 
  { 

  }

  /**
  *Obtiene las respuestas hechas por el usuario.
  */
  getAnswers() 
  {
    return this.answers.getAnswersUser(this.auth.getUserDetails().id_user)
      .subscribe(
          answers => {
            this.aanswers = answers
          })
  };

  /**
  *Ventana de modal para modificar una respuesta.
  */
  modify(template: TemplateRef<any>, modifyAnswer: Answers) 
  {
    this.selectedAnswer = modifyAnswer;  
    this.modalRef1 = this.modalService.show(template);
    this.modalRef1.hide();
  }

  /**
  *Ventana de modal para borrar una respuesta.
  */
  delet(template: TemplateRef<any>, delAnswer: Answers) 
  {
    this.selectedAnswer = delAnswer;  
    this.modalRef2 = this.modalService.show(template);
    this.modalRef2.hide();
  }

  /**
  *Modifica una respuesta existente.
  */
  update(form: NgForm) {

    if(form.value.text != "")
    {
      this.selectedAnswer.text = form.value.text;
    }
    else
    {
      this.toastr.warning('Debe añadirse texto a la respuesta');
      return null;       
    }

    if(form.value.price > 0)
    {
      this.selectedAnswer.price = form.value.price;
    }
    else if(form.value.price <= 0)
    {
      this.toastr.warning('Debe añadirse un precio a la publicación');
      return null;       
    }

    this.answers.updateAnswer(this.selectedAnswer)
        .subscribe(() => { 
          this.toastr.success('Respuesta editada exitosamente'); 
        },
          err =>{
            this.toastr.error('Error al editar respuesta');
          });
    this.modalRef1.hide();

  }

  /**
  *Elimina una respuesta existente.
  */
  delete() 
  {
    this.answers.deleteAnswer(this.selectedAnswer).subscribe(
      () => {
        this.toastr.success('Respuesta borrada exitosamente');
        this.ngOnInit();
      },
      err => {
        this.toastr.error('Error al borrar la respuesta');
      }
    );
    this.modalRef2.hide();
  }

  /**
  *Obtiene todas las publicaciones de usuario al inicio
  */
  ngOnInit() 
  {
    this.getAnswers();
  }

}
