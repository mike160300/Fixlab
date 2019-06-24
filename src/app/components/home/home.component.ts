import { Component, OnInit, AfterViewChecked, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {AuthenticationService} from '../../auth/authentication.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import {PostsService} from '../../services/posts.service';
import {AnswersService} from '../../services/answers.service';
import {RatesService} from '../../services/rates.service';
import { AngularFireStorageReference, AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import { post } from 'selenium-webdriver/http';
import { Posts } from '../../../models/posts';
import { Answers } from '../../../models/answers';
import { Rates } from '../../../models/rates';
import { HttpClient } from '@angular/common/http';
import { Customers } from '../../../models/customers';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pposts: Posts[];
  aanswer: Answers[];
  uuser: Customers[];
  rrate: Rates[];
  newRate: Rates = new Rates();
  selectedPost: Posts;
  selectedAnswer: Answers;
  selectedRate: Rates;
  nameValue;
  descriptionValue;
  imageUrl: string = null;
  oldimageUrl: string = null;
  newPost: Posts = new Posts();
  uploadProgress: Observable<number>; 
  ref: AngularFireStorageReference;
  downloadURL: Observable<string>;
  y: number = 0;
  x: number = 0;
  done: boolean = false;

  modalRef1: BsModalRef;
  modalRef2: BsModalRef;
  modalRef3: BsModalRef;
  modalRef4: BsModalRef;
  modalRef5: BsModalRef;
  modalRef6: BsModalRef;

  constructor(private modalService: BsModalService, private router: Router, private answers: AnswersService, private rates: RatesService ,private posts: PostsService, private auth: AuthenticationService, private http: HttpClient, private storage: AngularFireStorage, private toastr: ToastrService) 
  { 

  }

  getPosts()
  {
    const id = this.auth.getUserDetails().id_user;
    this.posts.getpostsOwner(id).subscribe(pposts => this.pposts = pposts);
  }
 
  create(template: TemplateRef<any>) 
  {
    this.newPost.id_post= 0;
    this.newPost.title="";
    this.newPost.description="";
    this.newPost.image="";
    this.newPost.id_owner= this.auth.getUserDetails().id_user;
    this.newPost.publish_date= new Date();
    this.newPost.resolved = false;
    this.newPost.categoria = "";
    
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

  pay(template: TemplateRef<any>, ans: Answers) 
  {
    this.selectedAnswer = ans;
    this.answers.saveAnswer(this.selectedAnswer);
    this.auth.getUsers(this.selectedAnswer.id_owner).subscribe(uuser => this.uuser = uuser);
    this.modalRef6 = this.modalService.show(template);
    this.modalRef6.hide();
  }

  valorate(resp :Answers)
  {
    this.selectedAnswer = resp;
    this.selectedAnswer.valorated = true;
    this.answers.valorateAnswer(this.selectedAnswer)
        .subscribe(() => {this.toastr.success('Esta respuesta resolvió tu problema');});
  }

  rateUser(y)
  {
    console.log(y);
    this.newRate = {
      id_user1: this.selectedAnswer.id_owner,
      id_user2: this.auth.getUserDetails().id_user,
      value: y
    }

    this.x=y;
    console.log(this.newRate);

    this.rates.addrate(this.newRate).subscribe(
      () => {
        this.toastr.success('Has calificado al usuario exitosamente');
      },
      err => {
         this.toastr.warning('Usuario ya calificado con anterioridad');
      }
    );
    this.done = true;
  }

  notvalorate(resp :Answers)
  {
    this.selectedAnswer = resp;
    this.selectedAnswer.valorated = false;
    this.answers.valorateAnswer(this.selectedAnswer)
        .subscribe(() => {this.toastr.warning('Esta respuesta no resolvió tu problema');});
  }  

  unlocked(viewans:Answers)
  {
    this.selectedAnswer = viewans;
    this.selectedAnswer.unlocked = true;
    this.answers.valorateAnswer(this.selectedAnswer)
        .subscribe(() =>  {
          this.toastr.success('Respuesta desbloqueada exitosamente');  
      });   
  }

  viewAnswer(template: TemplateRef<any>, viewans:Answers)
  {
    this.selectedAnswer = viewans;
    //this.selectedRate=this.newRate;
    this.auth.getUsers(this.selectedAnswer.id_owner).subscribe(uuser => this.uuser = uuser);
    this.modalRef5 = this.modalService.show(template); 
    this.modalRef5.hide();   
  }

  viewAnswers(template: TemplateRef<any>, viewans:Posts)
  {
     this.selectedPost = viewans;
     this.answers.getanswerofpost(this.selectedPost.id_post).subscribe(aanswer => this.aanswer = aanswer);
     this.modalRef4 = this.modalService.show(template);
     this.modalRef4.hide();
  }


  delet(template: TemplateRef<any>, deletePost: Posts) 
  {
    this.selectedPost = deletePost;
    this.modalRef3 = this.modalService.show(template);
    this.modalRef3.hide();
  }

  addpost(form: NgForm) 
  {

    if(form.value.title === "")
    {
      this.toastr.warning('Debe añadirse un título');
      return null;
    }
    else if(form.value.description === "")
    {
      this.toastr.warning('Debe añadirse una descripción');
      return null;
    }
    else if(form.value.categoria === "")
    {
      this.toastr.warning('Debe añadirse una categoría');
      return null;
    }
    else
    {
      var newPost = {
        id_post : 0,
        title : form.value.name,
        description : form.value.description,
        id_owner : this.auth.getUserDetails().id_user,
        publish_date : new Date(),
        resolved : false
      };
    }

    if(this.imageUrl!=null)
    {
      this.newPost.image = this.imageUrl;
    }

    this.imageUrl=null; 

    this.posts.addpost(this.newPost).subscribe(
      () => {
        this.toastr.success('Publicación creada exitosamente');
        this.ngOnInit();
      },
      err => {
        this.toastr.error('Error al crear publicación');
      }
    );
    this.modalRef1.hide();
  }

  update(form: NgForm) {

    if(form.value.name != "")
    {
      this.selectedPost.title = form.value.name;
    }
    else
    {
      this.toastr.warning('Debe añadirse un título');
      return null;      
    }

    if(form.value.descripcion != "")
    {
      this.selectedPost.description = form.value.descripcion;
    }
    else
    {
      this.toastr.warning('Debe añadirse una descripción');
      return null;        
    }

    if(this.imageUrl!=null)
    {
      this.oldimageUrl=this.selectedPost.image;
      if(this.oldimageUrl!=null || this.oldimageUrl!="")
      {
        this.deleteImage(this.oldimageUrl);
      }
      this.selectedPost.image=this.imageUrl;
      this.imageUrl=null;
    }

    this.posts.updatePost(this.selectedPost)
      .subscribe(() => {
        this.toastr.success('Publicación editada exitosamente')
      },
      err =>
      {
        this.toastr.error('Error al editar la publicación');
      });
    this.modalRef2.hide();

  }

  delete() 
  {
    this.posts.deletePost(this.selectedPost).subscribe(
      () => {
        this.deleteImage(this.selectedPost.image);
        this.toastr.success('Publicación borrada exitosamente');
        this.ngOnInit();
      },
      err => {
        this.toastr.error('Error al borrar la publicación');
      }
    );
    this.modalRef3.hide();
  }

  deleteImage(downloadUrl) 
  {
    return this.storage.storage.refFromURL(downloadUrl).delete();
  } 

 upload(event) 
  {
    // Obtiene la imagen:
    const file = event.target.files[0];
    
    // Genera un ID random para la imagen:
    const randomId = Math.random().toString(36).substring(2);
    const filepath = `Posts_Images/${randomId}`;

    // Cargar imagen:
    const task = this.storage.upload(filepath, file);
    this.ref = this.storage.ref(filepath);

    // Observa los cambios en el % de la barra de progresos:
    this.uploadProgress = task.percentageChanges();

    // Notifica cuando la URL de descarga está disponible:
    task.snapshotChanges().pipe(
      finalize(() => {
        this.downloadURL = this.ref.getDownloadURL();  
        this.downloadURL.subscribe(url => {this.imageUrl = url} );
        console.log(this.imageUrl);
      })
    ).subscribe();
  }

  cancelAdd()
  {
    this.deleteImage(this.imageUrl);
    this.imageUrl=null;
    this.modalRef1.hide();
  }

  cancelEdit()
  {
    this.deleteImage(this.imageUrl);
    this.imageUrl=null;
    this.modalRef2.hide();
  }

  comprobar()
  {
    if(this.answers.getPay()==true)
    {
      this.unlocked(this.selectedAnswer);
    }
    else
    {
      this.toastr.warning('Todavía no se ha concretado el pago');
    }
    this.modalRef6.hide();
  }
  
  ngOnInit() {
    //Obtiene todas las publicaciones de usuario al inicio
    this.getPosts();
  }

}

