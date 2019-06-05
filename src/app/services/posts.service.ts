import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { publish } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs'


export interface PostDetails {
  id_post: number,
  title: string,
  description: string,
  image:  string,
  publish_date:string,
  resolved : boolean,
  id_owner: number

}
@Injectable({
  providedIn: 'root'
})
export class PostsService {

  uri = 'http://localhost:3000/posts';



  constructor(private http: HttpClient, private router: Router) {

   }

  public addpost(post: PostDetails): Observable<any> {
    return this.http.post('${this.uri}/add', post)
  }


}