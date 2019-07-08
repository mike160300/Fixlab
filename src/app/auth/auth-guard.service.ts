import { Injectable } from '@angular/core'
import { Router, CanActivate } from '@angular/router'
import { AuthenticationService } from './authentication.service'
/**
*Evita los accesos no permitidos.
*/
@Injectable()
export class AuthGuardService implements CanActivate {

/**
*@ignore
*/	
  constructor(private auth: AuthenticationService, private router: Router) {}

  /**
  *Evita que pueda accederse por URL al dashboard sin autenticarse.
  */
  canActivate() {
    if (!this.auth.isLoggedIn()) {
      this.router.navigateByUrl('/')
      return false
    }
    return true
  }
}
