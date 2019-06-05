import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { publish } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs'

export interface AnswerDetails {
  id_answer: number
  text: string
  price: number
  unlocked: boolean
  valorated: boolean
  id_owner: number
  id_inpost: number

}

@Injectable({
  providedIn: 'root'
})
export class AnswersService {

  uri = 'http://localhost:3000/answers';



  constructor(private http: HttpClient, private router: Router) {

   }

  public addanswer(answer: AnswerDetails): Observable<any> {
    return this.http.post('${this.uri}/add', answer)
  }
}
