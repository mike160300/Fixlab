import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { publish } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs'
import { Posts } from '../../models/posts';

/**
*Servicio para gestionar la creación, modificación, eliminación y obtención de publicaciones.
*/
@Injectable({
  providedIn: 'root'
})
export class PostsService {
  /**
  *URL al hosting del backend.
  */
  uri = 'https://fixlab-backend.herokuapp.com/posts';

  /**
  *@ignore
  */
  constructor(private http: HttpClient, private router: Router) { }

  /**
  *Crea una publicación.
  */
  addpost(post: Posts): Observable<any> {
    const url=` ${this.uri}/add`
    console.log(post);
    return this.http.post(url, post);
  };
  /**
  *Obtiene publicaciones del usuario.
  */
  getposts(phone, pc, consola, other): Observable<Posts[]> {
    const url=` ${this.uri}/`
    return this.http.get<Posts[]>(url);
  };
  /**
  *Obtiene publicaciones propias del usuario.
  */
  getpostsOwner(id: number): Observable<Posts[]> {
    const url = `${this.uri}/${id}`;
    return this.http.get<Posts[]>(url);
  }
  /**
  *Elimina una publicación.
  */
  deletePost(post: Posts): Observable<Posts>{
    const url=` ${this.uri}/delete/${post.id_post}`
    return this.http.delete<Posts>(url);
  }
  /**
  *Modifica una publicación.
  */
  updatePost(post: Posts): Observable<any>
  {
    const url=` ${this.uri}/update`
    return this.http.post(url, post);
  }


}