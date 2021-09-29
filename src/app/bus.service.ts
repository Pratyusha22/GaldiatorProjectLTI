import { HttpHeaders,HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, Subject } from 'rxjs';
import { RegisterCustomer } from './register-customer';

@Injectable({
  providedIn: 'root'
})
export class BusService {
  public subject=new Subject<boolean>();
  url :string;  
  token ?: string;  
  header : any;  
  HttpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      
    })}  
  
  constructor(public client:HttpClient) { 
     this.url="http://localhost:5000/api/RegCustomer";

    const headerSettings: {[name: string]: string | string[]; } = {};  
    this.header = new HttpHeaders(headerSettings);  
  }  
  recievedStatus():Observable<boolean>
  {
    return this.subject.asObservable();
  }
 

 
  Get():Observable<RegisterCustomer[]>{
    return this.client.get<RegisterCustomer[]>(this.url);
  }
 
Register(customer:RegisterCustomer)  
   {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };  
    return this.client.post<RegisterCustomer[]>(this.url , customer, httpOptions)  
   }
Login(customer:RegisterCustomer){
     
    return this.client.post(this.url+'/Login',JSON.stringify(customer),this.HttpOptions );  
   }
}