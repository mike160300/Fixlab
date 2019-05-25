import { Component } from '@angular/core';
import { AuthenticationService, TokenPayload } from './../authentication.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../auth.styles.css']
})
export class LoginComponent {
  credentials: TokenPayload = {
    id: 0,
    email: '',
    username:'',
    password: ''
  }

  constructor(private auth: AuthenticationService, private router: Router) {}

  login(form: NgForm) 
  {
    this.auth.login(this.credentials).subscribe(
      () => {
        console.log("Iniciaste sesión")
        this.router.navigateByUrl('/dashboard/home')
      },
      err => {
        console.error(err)
      }
    )
  }
}
