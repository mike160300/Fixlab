import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { map } from 'rxjs/operators'
import { Router } from '@angular/router'
import { Customers } from '../../models/customers';
/**
*@ignore
*/
interface TokenResponse {
  token: string
}
/**
*Servicio para realizar la autenticación y modificación de datos de usuarios.
*/
@Injectable()
export class AuthenticationService {
  /**
  *@ignore
  */  
  private token: string
  /**
  *@ignore
  */  
  customer: Customers;

  /**
  *URL al hosting del backend.
  */
  uri = 'https://fixlab-backend.herokuapp.com/users'

  /**
  *@ignore
  */
  constructor(private http: HttpClient, private router: Router) {}

  /**
  *Guarda el valor del Token para la autenticación.
  */
  private saveToken(token: string): void 
  {
    localStorage.setItem('usertoken', token)
    this.token = token
  }

  /**
  *Obtiene el Token para la autenticación.
  */
  private getToken(): string 
  {
    if (!this.token) {
      this.token = localStorage.getItem('usertoken')
    }
    return this.token
  }

  /**
  *Obtiene los datos de un usuario.
  */
  public getUserDetails() 
  {
    const token = this.getToken()
    let payload
    if (token) {
      payload = token.split('.')[1]
      payload = window.atob(payload)
      return JSON.parse(payload)
    } else {
      return null
    }
  }

  /**
  *Comprueba si el usuario esta logeado.
  */
  public isLoggedIn(): boolean 
  {
    const user = this.getUserDetails()
    if (user) {
      return user.exp > Date.now() / 1000
    } else {
      return false
    }
  }

  /**
  *Registra a un usuario.
  */
  public register(user: Customers): Observable<any> 
  {
    const url=` ${this.uri}/register`;
    return this.http.post(url, user)
  }

  /**
  *Inicia sesión a un usuario.
  */
  public login(user: Customers): Observable<any> 
  {
    const url=` ${this.uri}/login`;
    const base = this.http.post(url, user)

    const request = base.pipe(
      map((data: TokenResponse) => {
        if (data.token) {
          this.saveToken(data.token)
        }
        return data
      })
    )

    return request
  }

  /**
  *Cierra la sesión.
  */
  public logout(): void {
    this.token = ''
    window.localStorage.removeItem('usertoken')
    this.router.navigateByUrl('/')
  }

  /**
  *Edita los datos del perfil.
  */
  public editprofile(prof:Customers): Observable<any> 
  {
    const url=` ${this.uri}/update`;
    return this.http.post(url, prof)
  }

  /**
  *Obtiene a todos los usuarios.
  */
  getUsers(id: number): Observable<Customers[]> {    
    const url = `${this.uri}/${id}`;
    return this.http.get<Customers[]>(url);
  }

  /**
  *Obtiene al usuario actual.
  */
  getUser(id: number): Observable<Customers>
  {
    const url = `${this.uri}/profile/${id}`;
    return this.http.get<Customers>(url);
  }


}
