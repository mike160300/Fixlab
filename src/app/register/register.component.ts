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
    username: "",
    email: "",    
    password: ""
  };

  constructor(private auth: AuthenticationService, private router: Router) {}

  register(form: NgForm) {
    var email = document.getElementById("email");
    var username = document.getElementById("username");
    console.log(username);
    console.log(email);
    this.auth.register(this.credentials).subscribe(
      () => {
        this.router.navigateByUrl("/profile");
      },
      err => {
        console.error(err);
      }
    );
  }
}
