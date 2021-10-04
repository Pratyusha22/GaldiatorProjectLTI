import { Component,  OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BusService } from '../bus.service';

@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.css']
})
export class SeatComponent implements OnInit {
 

  total=1;
   fareAmount: number=700;
   seatCount=0; 
   current=0;
  public current_cost:number=0;
  old=[0,0,0,0,0,0];
   new=[0,0,0,0,0,0];
  seatcolor?:boolean=false;
  Fare?:any;
   select:boolean=false;
   deselect:boolean=false;
   
   
   constructor(private _router:Router,private service:BusService) { }
 
     
  
   ngOnInit(): void {     
   this.service.CurrentFare.subscribe(Fare=>this.Fare=Fare)
   }
 changeEco(n:number){

  console.log(this.new);    
    this.new[n]=n;    
    this.current_cost=(this.fareAmount*this.seatCount);    
    console.log(this.current_cost);   
    this.seatCount+=(this.seatCount+1);
    console.log(this.new);    
 }
 selected(){
   
  if(this.select==false)
  {
    this.seatCount=this.seatCount+1;
  
    this.current_cost=(this.fareAmount*this.seatCount);   
    if(this.deselect)
    {
      this.deselected();
    }
    this.select=true;
  }
  else
  {
    this.seatCount=this.seatCount-1;
    this.select=false;
  }

 }
 deselected()
 {
   if(this.deselect==false)
   {
     this.seatCount=this.seatCount+1;
     if(this.select)
     {
       this.selected();
     }
     this.select=true;
   }
   else
   {
     this.seatCount=this.seatCount-1;
     this.deselect=false;
   }

 }

 

 pay(){  
  
  localStorage.setItem("totalSeats",this.seatCount.toString());
  localStorage.setItem("totalFare",this.current_cost.toString());
  console.log(this.seatCount);
  
  this.service.SendFare(this.current_cost);
  this._router.navigate(['Payment'])


 
 } 

 
}
