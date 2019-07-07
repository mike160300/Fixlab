import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../auth/authentication.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

	isCollapsed = false;	

  constructor(private auth: AuthenticationService, private toastr: ToastrService) { }

  logout()
  {
  	this.auth.logout();
  	this.toastr.info('Has cerrado la sesión');
  }

  ngOnInit() {}

}
