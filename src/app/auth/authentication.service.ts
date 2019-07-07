import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { map } from 'rxjs/operators'
import { Router } from '@angular/router'
import { Customers } from '../../models/customers';

interface TokenResponse {
  token: string
}

@Injectable()
export class AuthenticationService {
  private token: string
  customer: Customers;

  uri = 'https://fixlab-backend.herokuapp.com/users'

  constructor(private http: HttpClient, private router: Router) {}

  private saveToken(token: string): void 
  {
    localStorage.setItem('usertoken', token)
    this.token = token
  }

  private getToken(): string 
  {
    if (!this.token) {
      this.token = localStorage.getItem('usertoken')
    }
    return this.token
  }

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

  public isLoggedIn(): boolean 
  {
    const user = this.getUserDetails()
    if (user) {
      return user.exp > Date.now() / 1000
    } else {
      return false
    }
  }

  public register(user: Customers): Observable<any> 
  {
    const url=` ${this.uri}/register`;
    return this.http.post(url, user)
  }

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

  public logout(): void {
    this.token = ''
    window.localStorage.removeItem('usertoken')
    this.router.navigateByUrl('/')
  }

  public editprofile(prof:Customers): Observable<any> 
  {
    const url=` ${this.uri}/update`;
    return this.http.post(url, prof)
  }

  getUsers(id: number): Observable<Customers[]> {    
    const url = `${this.uri}/${id}`;
    return this.http.get<Customers[]>(url);
  }

  getUser(id: number): Observable<Customers>
  {
    const url = `${this.uri}/profile/${id}`;
    return this.http.get<Customers>(url);
  }


}
