import { Component } from "@angular/core";
import { AuthenticationService} from "./../authentication.service";
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';
import { Customers } from '../../../models/customers';
import { ToastrService } from 'ngx-toastr';

/**
*Llama al servicio y notifica si el inicio de sesión fue exitoso.
*/
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../auth.styles.css']
})
export class LoginComponent {

  /**
  *Credenciales del usuario.
  */
  credentials: Customers = new Customers();

  /**
  *@ignore
  */
  constructor(private auth: AuthenticationService, private router: Router, private toastr: ToastrService) {}

  /**
  *Recibe los datos del formulario de login.
  */
  login(form: NgForm) 
  {
      this.credentials.email= form.value.email;
      this.credentials.password= form.value.password;

    this.auth.login(this.credentials).subscribe(
      () => {
        this.toastr.success('Inicio de sesión exitoso');
        this.router.navigateByUrl('/dashboard/home')
      },
      err => {
        this.toastr.error('Compruebe los datos introducidos','Error al iniciar sesión');
      }
    );
  }
}
