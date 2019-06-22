import { Component } from "@angular/core";
import { AuthenticationService} from "./../authentication.service";
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';
import { Customers } from '../../../models/customers';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../auth.styles.css']
})
export class RegisterComponent {

  credentials: Customers = new Customers();
  
  constructor(private auth: AuthenticationService, private router: Router) {}

  register(form: NgForm) {

    this.credentials.id_user= 0;
    this.credentials.email= form.value.email;
    this.credentials.username= form.value.username;
    this.credentials.password= form.value.password;
    
    this.auth.register(this.credentials).subscribe(
      () => {
        this.router.navigateByUrl("/home");
      },
      err => {
        console.error(err);
      }
    );
  }
}
