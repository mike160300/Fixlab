import { Component } from "@angular/core";
import { AuthenticationService} from "./../authentication.service";
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';
import { Customers } from '../../../models/customers';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../auth.styles.css']
})
export class RegisterComponent {

  credentials: Customers = new Customers();
  
  constructor(private auth: AuthenticationService, private router: Router, private toastr: ToastrService) {}

  register(form: NgForm) {

    this.credentials.id_user= 0;
    this.credentials.email= form.value.email;
    this.credentials.username= form.value.username;
    this.credentials.password= form.value.password;
    
    this.auth.register(this.credentials).subscribe(
      () => {
        this.toastr.success('Registro exitoso');
        this.toastr.info('Puede proceder a iniciar sesión');
        this.router.navigateByUrl("/**");
      },
      err => {
        this.toastr.error('Compruebe los datos introducidos','Error al registrarse');
      }
    );
  }
}
