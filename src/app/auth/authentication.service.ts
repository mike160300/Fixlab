import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { map } from 'rxjs/operators'
import { Router } from '@angular/router'
import { Customers } from '../../models/customers';

export interface UserDetails {
  id_user:number
  username: string
  email: string
  password: string
  description:string
  exp: number
  iat: number
}

export interface UserProfile {
  description:string
  image: string

}

interface TokenResponse {
  token: string
}

export interface TokenPayload {
  id_user:number
  email: string
  username: string
  password: string
}

@Injectable()
export class AuthenticationService {
  private token: string
  uri = 'http://localhost:3000/users'

  constructor(private http: HttpClient, private router: Router) {
  }

  private saveToken(token: string): void {
    localStorage.setItem('usertoken', token)
    this.token = token
  }

  private getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('usertoken')
    }
    return this.token
  }

  public getUserDetails(): UserDetails {
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

  public isLoggedIn(): boolean {
    const user = this.getUserDetails()
    if (user) {
      return user.exp > Date.now() / 1000
    } else {
      return false
    }
  }

  public register(user: TokenPayload): Observable<any> {
    return this.http.post(`/users/register`, user)
  }

  public login(user: TokenPayload): Observable<any> {
    const base = this.http.post(`/users/login`, user)

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

  public editprofile(prof:UserProfile,id_user): Observable<any> {
    return this.http.post('http://localhost:3000/users/update/'+id_user, prof)
  }

  getuser(id: number): Observable<Customers[]> {
     
    const url = `${this.uri}/${id}`;
    return this.http.get<Customers[]>(url);
  }


}
