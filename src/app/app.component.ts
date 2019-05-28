
import { Component, OnInit } from  '@angular/core';
import { ApiService } from  './api.service';
import { Item } from  './api.service';
import { AuthenticationService } from './auth/authentication.service';

@Component({
selector:  'app-root',
templateUrl:  './app.component.html',
styleUrls: ['./app.component.css']
})

export  class  AppComponent  {
    constructor(public auth: AuthenticationService) {};
    title  =  'FixLab';
     items:  Array<Item>;
//constructor(private  apiService:  ApiService){
}/*
ngOnInit(){
this.fetchData();
}
fetchData(){
this.apiService.fetch().subscribe((data:  Array<Item>)=>{
console.log(data);
this.items  =  data;
}, (err)=>{
console.log(err);
});
}
}*/