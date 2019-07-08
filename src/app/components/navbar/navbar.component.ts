import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../auth/authentication.service';
import { ToastrService } from 'ngx-toastr';
/**
*Barra de navegación de la aplicación.
*/
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  /**
  *@ignore
  */
	isCollapsed = false;	

  /**
  *@ignore
  */  
  constructor(private auth: AuthenticationService, private toastr: ToastrService) { }

  /**
  *Cierra la sesión de la aplicación.
  */  
  logout()
  {
  	this.auth.logout();
  	this.toastr.info('Has cerrado la sesión');
  }

  /**
  *@ignore
  */  
  ngOnInit() {}

}
