import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { publish } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs'
import { Posts } from '../../models/posts';


export interface PostDetails {
  id_post: number,
  title: string,
  description: string,
  image:  string,
  resolved : boolean,
  id_owner: number,
  publish_date: string

};

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  uri = 'http://localhost:3000/posts';

  constructor(private http: HttpClient, private router: Router) {

   }

  addpost(post: PostDetails): Observable<any> {
    const url=` ${this.uri}/add`
    return this.http.post(url, post)
  };

  /*getposts(): Observable<Posts[]> {
    const url=` ${this.uri}/`
    return this.http.get<Posts[]>(url)
  };*/

  getpostsOwner(id: number): Observable<Posts[]> {
    const url = `${this.uri}/${id}`;
    return this.http.get<Posts[]>(url);
  }

  deletePost(id: number): Observable<any>{
    const url=` ${this.uri}/delete/${id}`
    return this.http.delete(url);
  }

  updatePost(post: Posts): Observable<any>
  {
    console.log("servicio")
    const url=` ${this.uri}/update`
    return this.http.post(url, post)
  }

}