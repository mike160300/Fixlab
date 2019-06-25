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

  selectedAnswer: Answers;
  payRealized: boolean;
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

  getAnswers(): Observable<Answers[]> {
    const url = `${this.uri}/`;
    return this.http.get<Answers[]>(url);
  }

  getAnswersUser(id): Observable<Answers[]> {
    const url = `${this.uri}/user/${id}`;
    return this.http.get<Answers[]>(url);
  }

  valorateAnswer(ans: Answers): Observable<any>
  {
    const url=` ${this.uri}/update`
    return this.http.post(url, ans);
  }

  unlockAnswer(ans: Answers): Observable<any>
  {
    const url=` ${this.uri}/update`
    return this.http.post(url, ans);   
  }

  updateAnswer(ans: Answers): Observable<any>
  {
    const url=` ${this.uri}/update`
    return this.http.post(url, ans);   
  }

  deleteAnswer(ans: Answers): Observable<Answers>
  {
    const url=` ${this.uri}/delete/${ans.id_answer}`
    return this.http.delete<Answers>(url);
  }

  saveAnswer(ans: Answers)
  {
    this.selectedAnswer=ans;
  }

  getSelectedAnswer()
  {
    return this.selectedAnswer;
  }

  savePay(pay: boolean)
  {
    this.payRealized=pay;
  }

  getPay()
  {
    var temp = this.payRealized;
    this.payRealized = false;
    return temp;
  }



}
