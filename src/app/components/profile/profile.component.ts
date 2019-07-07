import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../auth/authentication.service';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Customers } from '../../../models/customers';
import { AngularFireStorageReference, AngularFireStorage } from '@angular/fire/storage';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  imageUrl: string = null;
  oldimageUrl: string = null;
  uploadProgress: Observable<number>; 
  ref: AngularFireStorageReference;
  downloadURL: Observable<string>;
  selectedUser: Customers = new Customers();
  descriptionValue;

  constructor(private auth: AuthenticationService,private router: Router, private storage: AngularFireStorage, private toastr: ToastrService) {
  }

  getUserProfile()
  {
    this.auth.getUser(this.auth.getUserDetails().id_user).subscribe(user=>{
      this.selectedUser = user;
      this.descriptionValue = this.selectedUser.description;
    });
  }

  editprofile(form: NgForm) {

    if(this.imageUrl!=null)
    {
      this.oldimageUrl=this.selectedUser.image;
      this.selectedUser.image=this.imageUrl;
      if(this.oldimageUrl!=null)
      {
        this.deleteImage(this.oldimageUrl);
      }
      this.imageUrl=null;
    }

    this.selectedUser.description = form.value.description;

    this.auth.editprofile(this.selectedUser).subscribe(
      () => {
        this.toastr.success('Se han editado los datos del usuario exitosamente');
        this.ngOnInit();
      },
      err => {
        this.toastr.error('Error al editar los datos del usuario');
      }
    ); ;
  }

  /**
  *Carga la imagen de perfil en Firebase Storage.
  */ 
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

  deleteImage(downloadUrl) 
  {
    return this.storage.storage.refFromURL(downloadUrl).delete();
  }  

  ngOnInit() 
  {
    this.getUserProfile();
  }

}
