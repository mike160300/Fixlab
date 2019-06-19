import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Rates } from '../../models/rates';


@Injectable({
  providedIn: 'root'
})
export class RatesService {

 uri = 'http://localhost:3000/rates';	

  constructor(private http: HttpClient, private router: Router) { }

  addrate(rate: Rates): Observable<any>
  {
    const url=` ${this.uri}/add`
    console.log(rate);
    return this.http.post(url, rate);  	
  }

  updateRate(rate: Rates): Observable<any>
  {
    const url=` ${this.uri}/update`
    return this.http.post(url, rate);	
  }
}
