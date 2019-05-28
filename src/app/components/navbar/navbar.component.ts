import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../auth/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

	isCollapsed = false;	

  constructor(private auth: AuthenticationService) { }

  ngOnInit() {
  }

}
