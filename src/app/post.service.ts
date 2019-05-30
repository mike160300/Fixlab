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
export class PostService {

  uri = 'http://localhost:3000/posts';



  constructor(private http: HttpClient,private router: Router) { }
    /*
  addpost(title, description, image,publish_date, resolved,id_owner) {
    const obj = {
      title: title,
      description: description,
      image:  image,
      publish_date:publish_date,
      resolved : resolved,
      id_owner: id_owner
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }*/
  public addpost(post: PostDetails): Observable<any> {
    return this.http.post(`${this.uri}/add`, post)
  }

}
