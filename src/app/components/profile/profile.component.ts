import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../auth/authentication.service';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  credentials: UserProfile = {
    description: ''
  };

  constructor(private auth: AuthenticationService,private router: Router) { }


  editprofile(form: NgForm) {
    this.auth.editprofile(this.credentials,this.auth.getUserDetails().id_user).subscribe(
      () => {
        this.router.navigateByUrl("/dashboard/home");
      },
      err => {
        console.error(err);
      }
    ); ;
  }

  ngOnInit() {
  }

}
