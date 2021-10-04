import { HttpHeaders,HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject } from 'rxjs';
import { Booking } from './booking';
import { Busschedule } from './busschedule';
import { GetBookingDetails } from './get-booking-details';
import { PassengerDetails } from './passenger-details';
import { RegisterCustomer } from './register-customer';
import { Ticket } from './ticket';

@Injectable({
  providedIn: 'root'
})
export class BusService {

  private FareSource=new BehaviorSubject<any>("current_cost")
 CurrentFare=this.FareSource.asObservable();
 private BookingSource=new BehaviorSubject<any>("UserName")
 CurrentUserName=this.BookingSource.asObservable();
 
  private searchurl="http://localhost:5000/api/Busschedule";
  public subject=new Subject<boolean>();
  url :string;  
  token ?: string;  
  header : any;  
  //busData1 : any;
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
   /* public getBus(id:number):any{
    return this.client.get(this.busUrl+"/"+id)
    
  } */
  Search(bus:Busschedule):Observable<Busschedule[]>{

    return this.client.post<Busschedule[]>(this.searchurl+'/GetBus',JSON.stringify(bus),this.HttpOptions );
  }
  PassDetails(passenger:PassengerDetails):Observable<PassengerDetails>{

    return this.client.post<PassengerDetails>(this.searchurl+'/PassengerDetails',JSON.stringify(passenger),this.HttpOptions );
  } 

  /* EnteringDetails(details:Booking[]):Observable<Booking[]>{

    return this.client.post<Booking[]>(this.searchurl+'/EnterDetails',JSON.stringify(details),this.HttpOptions );
  } */
  EnteringDetails(details:Booking):Observable<Booking>{

    return this.client.post<Booking>(this.searchurl+'/EnterDetails',JSON.stringify(details),this.HttpOptions );
  }
  GetBookingDetails(UserName:string): Observable<GetBookingDetails[]>
    {
      console.log(this.client.get<GetBookingDetails[]>(this.searchurl+'/bookings?name='+UserName));
      return this.client.get<GetBookingDetails[]>(this.searchurl+'/bookings?name='+UserName);
    }
    cancelBooking(bookingId:number)
    {
      return this.client.post(this.searchurl+'/cancel?bookingid='+bookingId,this.HttpOptions);
    }
    getTicket(bookingId:number):Observable<Ticket[]>
    {
      return this.client.get<Ticket[]>(this.searchurl+'/ticket?bookingid='+bookingId);
    }
  
  SendFare(Fare:any){
    this.FareSource.next(Fare);
  }
  SendDetails(user:string){
    this.BookingSource.next(user);
  }
  
}