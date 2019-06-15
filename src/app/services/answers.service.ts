import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { publish } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Answers } from '../../models/answers';


@Injectable({
  providedIn: 'root'
})
export class AnswersService {

  uri = 'http://localhost:3000/answers';

  constructor(private http: HttpClient, private router: Router) {

   }

  addreply(answer: Answers): Observable<any> {
    const url=` ${this.uri}/add`
    console.log(answer);
     return this.http.post(url, answer)
  };

  getanswerofpost(id: number): Observable<Answers[]> {
    const url = `${this.uri}/${id}`;
    return this.http.get<Answers[]>(url);
  }
  valorateAnswer(ans: Answers): Observable<any>
  {
    const url=` ${this.uri}/update`
    return this.http.post(url, ans);
  }


}
