import { Component } from "@angular/core";
import { AuthenticationService} from "./../authentication.service";
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';
import { Customers } from '../../../models/customers';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../auth.styles.css']
})
export class LoginComponent {

  credentials: Customers = new Customers();

  constructor(private auth: AuthenticationService, private router: Router) {}

  login(form: NgForm) 
  {
      this.credentials.email= form.value.email;
      this.credentials.password= form.value.password;

    this.auth.login(this.credentials).subscribe(
      () => {
        console.log("Iniciaste sesión")
        this.router.navigateByUrl('/dashboard/home')
      },
      err => {
        console.error(err)
      }
    );
  }
}
