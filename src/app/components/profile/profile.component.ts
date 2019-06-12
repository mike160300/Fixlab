import { Component, OnInit } from '@angular/core';
import {AuthenticationService, UserProfile} from '../../auth/authentication.service';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { AngularFireStorageReference, AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  credentials: UserProfile = {
    description: '',
    image: ''
  };

  imageUrl: string = null;
  oldimageUrl: string = null;
  uploadProgress: Observable<number>; 
  ref: AngularFireStorageReference;
  downloadURL: Observable<string>;

  constructor(private auth: AuthenticationService,private router: Router, private storage: AngularFireStorage) { 
  }


  editprofile(form: NgForm) {

    if(this.imageUrl!=null)
    {
      this.oldimageUrl=this.credentials.image;
      this.credentials.image=this.imageUrl;
      //this.deleteImage(this.oldimageUrl);
      this.imageUrl=null;
    }


    this.auth.editprofile(this.credentials,this.auth.getUserDetails().id_user).subscribe(
      () => {
        this.router.navigateByUrl("/dashboard/home");
      },
      err => {
        console.error(err);
      }
    ); ;
  }

 upload(event) 
  {
    // Obtiene la imagen:
    const file = event.target.files[0];
    
    // Genera un ID random para la imagen:
    const randomId = Math.random().toString(36).substring(2);
    const filepath = `Avatars/${randomId}`;
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

  ngOnInit() {

  }

}
