import { Component } from "@angular/core";
import { AuthenticationService, TokenPayload } from "../authentication.service";
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../login/login.component.css']
})
export class RegisterComponent {
  credentials: TokenPayload = {
    id: 0,
    email: "",
    username: "",
    password: ""
  };
  
  constructor(private auth: AuthenticationService, private router: Router) {}

  register(form: NgForm) {
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
