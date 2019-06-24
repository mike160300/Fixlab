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

  constructor(private modalService: BsModalService, private router: Router, private posts: PostsService, private answers: AnswersService, private auth: AuthenticationService, private http: HttpClient, private toastr: ToastrService) 
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

    if(form.value.text != "")
    {
      this.selectedAnswer.text = form.value.text;
    }
    else
    {
      this.toastr.warning('Debe añadirse texto a la respuesta');
      return null;       
    }


    if(form.value.price != "")
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

  delete() 
  {
    this.answers.deleteAnswer(this.selectedAnswer).subscribe(
      () => {
        this.toastr.success('Respuesta borrada exitosamente');
      },
      err => {
        this.toastr.error('Error al borrar la respuesta')
      }
    );
    this.modalRef2.hide();
  }

  ngOnInit() {}

}
