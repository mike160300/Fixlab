import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { publish } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Answers } from '../../models/answers';

/**
*Gestiona la obtención, modificación, eliminación, desbloqueo y valoración de las respuestas.
*/
@Injectable({
  providedIn: 'root'
})
export class AnswersService {
  /**
  *Respuesta seleccionada actualmente.
  */
  selectedAnswer: Answers;
  /**
  *Comprobación del pago realizado por Paypal.
  */  
  payRealized: boolean;
  /**
  *URL al hosting del backend.
  */  
  uri = 'https://fixlab-backend.herokuapp.com/answers';
  /**
  *@ignore
  */
  constructor(private http: HttpClient, private router: Router) { }

  /**
  *Añade una respuesta a la publicación.
  */
  addreply(answer: Answers): Observable<any> {
    const url=` ${this.uri}/add`
    console.log(answer);
     return this.http.post(url, answer)
  };
  /**
  *Obtiene las respuestas a una publicación.
  */
  getanswerofpost(id: number): Observable<Answers[]> {
    const url = `${this.uri}/${id}`;
    return this.http.get<Answers[]>(url);
  }
  /**
  *Obtiene todas las respuestas.
  */
  getAnswers(): Observable<Answers[]> {
    const url = `${this.uri}/`;
    return this.http.get<Answers[]>(url);
  }
  /**
  *Obtiene las respuestas de un usuario.
  */
  getAnswersUser(id): Observable<Answers[]> {
    const url = `${this.uri}/user/${id}`;
    return this.http.get<Answers[]>(url);
  }
  /**
  *Califica una respuesta.
  */
  valorateAnswer(ans: Answers): Observable<any>
  {
    const url=` ${this.uri}/update`
    return this.http.post(url, ans);
  }
  /**
  *Desbloquea una respuesta.
  */
  unlockAnswer(ans: Answers): Observable<any>
  {
    const url=` ${this.uri}/update`
    return this.http.post(url, ans);   
  }
  /**
  *Modifica la respuesta a una publicación.
  */
  updateAnswer(ans: Answers): Observable<any>
  {
    const url=` ${this.uri}/update`
    return this.http.post(url, ans);   
  }
  /**
  *Borra una publicación.
  */
  deleteAnswer(ans: Answers): Observable<Answers>
  {
    const url=` ${this.uri}/delete/${ans.id_answer}`
    return this.http.delete<Answers>(url);
  }
  /**
  *Guarda la respuesta seleccionada (para el pago).
  */
  saveAnswer(ans: Answers)
  {
    this.selectedAnswer=ans;
  }
  /**
  *Obtiene la respuesta (para el pago).
  */
  getSelectedAnswer()
  {
    return this.selectedAnswer;
  }
  /**
  *Guarda el pago.
  */
  savePay(pay: boolean)
  {
    this.payRealized=pay;
  }
  /**
  *Obtiene el estado del pago.
  */
  getPay()
  {
    var temp = this.payRealized;
    this.payRealized = false;
    return temp;
  }



}
