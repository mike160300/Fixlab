import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {AuthenticationService} from '../../auth/authentication.service';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Customers } from '../../../models/customers';
import { AngularFireStorageReference, AngularFireStorage } from '@angular/fire/storage';
import { ToastrService } from 'ngx-toastr';

/**
*Muestra y modifica los datos de perfil del usuario.
**/
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit 
{
  /**
  *URL para la imagen a cargar en Firebase Storage.
  **/
  imageUrl: string = null;
  /**
  *URL para la imagen a eliminar de Firebase Storage.
  **/  
  oldimageUrl: string = null;
  /**
  *Progreso en la subida de la imagen.
  **/    
  uploadProgress: Observable<number>;
  /**
  *Referencia al Storage de Firebase.
  **/     
  ref: AngularFireStorageReference;
  /**
  *URL de descarga de la imagen.
  **/    
  downloadURL: Observable<string>;
  /**
  *Usuario seleccionado actualemente.
  **/    
  selectedUser: Customers = new Customers();
  /**
  *@ignore
  */
  descriptionValue;
  /**
  *@ignore
  */
  modalRef1: BsModalRef;
  /**
  *@ignore
  */
  constructor(private modalService: BsModalService, private auth: AuthenticationService,private router: Router, private storage: AngularFireStorage, private toastr: ToastrService) 
  { }

  /**
  *Modal editar un usuario.
  */
  update(template: TemplateRef<any>) 
  {
    this.modalRef1 = this.modalService.show(template);
    this.modalRef1.hide();
  }

  /**
  *Obtiene el perfil del usuario.
  */
  getUserProfile()
  {
    this.auth.getUser(this.auth.getUserDetails().id_user).subscribe(user=>{
      this.selectedUser = user;
      this.descriptionValue = this.selectedUser.description;
    });
  }

  /**
  *Para editar el perfil del usuario.
  */
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
    );
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

  /**
  *Cancela la actualización de los datos de usuario.
  */
  cancelEdit()
  {
    if(this.imageUrl!=null)
    {
      this.deleteImage(this.imageUrl);
    }
    this.imageUrl=null;
    this.modalRef1.hide();
  }

  /**
  *Para eliminar la imagen a partir de una URL.
  */
  deleteImage(downloadUrl) 
  {
    return this.storage.storage.refFromURL(downloadUrl).delete();
  }

  /**
  *Obtiene los datos del perfil al inicio.
  */
  ngOnInit() 
  {
    this.getUserProfile();
  }

}
