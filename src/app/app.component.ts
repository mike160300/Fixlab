import { Component, OnInit } from  '@angular/core';
import { ApiService } from  './api.service';
import { Item } from  './api.service';
import { AuthenticationService } from './auth/authentication.service';
/**
*@ignore
*/
@Component({
selector:  'app-root',
templateUrl:  './app.component.html',
styleUrls: ['./app.component.css']
})

export  class  AppComponent  {
    constructor(public auth: AuthenticationService) {};
    title  =  'FixLab';
     items:  Array<Item>;
}