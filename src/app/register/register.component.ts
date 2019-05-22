import { Component } from "@angular/core";
import { AuthenticationService, TokenPayload } from "../authentication.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  credentials: TokenPayload = {
    id: 0,
    email: "",
    username: "",
    password: ""
  };

  constructor(private auth: AuthenticationService, private router: Router) {}

  register() {
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
