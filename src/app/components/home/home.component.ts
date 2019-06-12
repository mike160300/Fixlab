import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {AuthenticationService} from '../../auth/authentication.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import {PostsService} from '../../services/posts.service';
import {AnswersService, AnswerDetails} from '../../services/answers.service';
import { AngularFireStorageReference, AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
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
  imageUrl: string = null;
  oldimageUrl: string = null;
  newPost: Posts = new Posts();
  uploadProgress: Observable<number>; 
  ref: AngularFireStorageReference;
  downloadURL: Observable<string>;

  /*credentials: PostDetails = {
    id_post: 0,
    title: '',
    description: '',
    image: '',
    publish_date:Date(),
    resolved : false,
    id_owner: this.auth.getUserDetails().id_user
  };*/

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

  constructor(private modalService: BsModalService, private router: Router, private posts: PostsService, private answers: AnswersService, private auth: AuthenticationService, private http: HttpClient, private storage: AngularFireStorage) 
  { 
    //Obtiene todas las publicaciones de usuario al inicio
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
    this.modalRef1 = this.modalService.show(template);
    this.modalRef1.hide();
  }

  modify(template: TemplateRef<any>, editPost: Posts) 
  {
    this.selectedPost = editPost;
    console.log(this.selectedPost);
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

  /*answer(template: TemplateRef<any>) 
  {
    this.modalRef4= this.modalService.show(template);
    this.modalRef4.hide();
  }*/

  addpost(form: NgForm) 
  {

    if(form.value.title === "")
    {
      alert("Debe escribir un título");
      return;
    }
    else if(form.value.description === "")
    {
      alert("Debe escribir una descripcion");
      return;
    }
    else 
    {
      this.newPost.id_post: 0,
      this.newPost.title: form.value.name,
      this.newPost.description: form.value.descripcion,
      this.newPost.image: "",
      this.newPost.id_owner: this.auth.getUserDetails().id_user,
      this.newPost.publish_date: new Date(),
      this.newPost.resolved : false
    }

    if(this.imageUrl!=null)
    {
      this.newPost.id_post: 0,
      this.newPost.title: form.value.name,
      this.newPost.description: form.value.descripcion,
      this.newPost.image: this.imageUrl,
      this.newPost.id_owner: this.auth.getUserDetails().id_user,
      this.newPost.publish_date: new Date(),
      this.newPost.resolved : false
    }
    this.imageUrl=null;    
    

    this.posts.addpost(this.newPost).subscribe(
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

    if(this.imageUrl!=null)
    {
      this.oldimageUrl=this.selectedPost.image;
      this.selectedPost.image=this.imageUrl;
      //this.deleteImage(this.oldimageUrl);
      this.imageUrl=null;
    }

    console.log(this.selectedPost);

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
      })
    ).subscribe();
  }

  
  ngOnInit() 
  {
    
  }

}

