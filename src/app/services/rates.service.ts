import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Rates } from '../../models/rates';

/**
*Servicio para la calificación de usuarios.
*/
@Injectable({
  providedIn: 'root'
})
export class RatesService {
  /**
  *URL al hosting del backend.
  */
 uri = 'https://fixlab-backend.herokuapp.com/rates';	

  /**
  *@ignore
  */
  constructor(private http: HttpClient, private router: Router) { }

  /**
  *Crea una valoración para un usuario.
  */
  addrate(rate: Rates): Observable<any>
  {
    const url=` ${this.uri}/add`
    console.log(rate);
    return this.http.post(url, rate);  	
  }
  /**
  *@ignore.
  */
  updateRate(rate: Rates): Observable<any>
  {
    const url=` ${this.uri}/update`
    return this.http.post(url, rate);	
  }
}
