import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BusService } from '../bus.service';
import { GetBookingDetails } from '../get-booking-details';
import { Ticket } from '../ticket';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {

  constructor(private service:BusService,private router:ActivatedRoute,private route:Router) { }
  // ticket: Ticket;
  //bookingid=1;
  UserName:any="";
  //user?: string | null;
  bookingList:GetBookingDetails[]=[];
  bid:any;
  // ticket: Ticket;
  //bookingid=1;
  public show:boolean = false;
  
  ticketDetails:Ticket[]=[];
  ngOnInit():void{
    this.UserName=sessionStorage.getItem('UserName')
  this.PreviouBookings();}
  PreviouBookings(){
    this.service.GetBookingDetails(this.UserName).subscribe(data=>{
      this.bookingList=data;
    console.log(this.bookingList);});
    }

    cancelBooking(bookingId:number)
  {
    alert("Booking Cancelled");
    this.service.cancelBooking(bookingId).subscribe(data=>{
      console.log(data);});
  }


  getTicket(bookingId:number){
    this.service.getTicket(bookingId).subscribe(data=>{
      this.ticketDetails=data;
      console.log(this.ticketDetails);
      this.show = !this.show;
    })
  }
  
  printPage() {
    window.print();
  }
}

