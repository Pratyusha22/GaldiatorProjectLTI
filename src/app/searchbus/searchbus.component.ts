import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Booking } from '../booking';

import { BusService } from '../bus.service';
import { Busschedule } from '../busschedule';

@Component({
  selector: 'app-searchbus',
  templateUrl: './searchbus.component.html',
  styleUrls: ['./searchbus.component.css']
})
export class SearchbusComponent implements OnInit {
  
  fareAmount=500;
  seatCount=0; 
   current_cost=0;
   SearchBusForm:FormGroup= new FormGroup({
     Startingpt:new FormControl(""),
     Destination:new FormControl(""),
     ScheduledDate:new FormControl("")
    /*  DepartureTime:new FormControl(""),
     ArrivalTime:new FormControl(""),
     FareAmount:new FormControl(""), */
   }
   );
   message:boolean=false;
   
     bus: Busschedule[]=[];
   Fare: any;
    public show :boolean =false;
    user!: string | null; 
  
  
     constructor(private service:BusService, private route: Router) { }
  
     ngOnInit(): void { 
       this.service.CurrentFare.subscribe(Fare=>this.Fare=Fare)
       this.service.CurrentUserName.subscribe(user => this.user =user)
       
     }
     SearchBus(){
       console.log(this.SearchBusForm.value);
       
       this.service.Search(this.SearchBusForm.value).subscribe(
         data => {
           
           this.bus=data;
           console.log(data);
           /* sessionStorage.setItem('scheduleId',data[0].scheduleId);
           console.log(data[0].scheduleId); */
           this.SearchBusForm.reset();   
           this.message=true;
           
         
         },
         error=>{
           console.log(error.message)
          this.SearchBusForm.reset(); 
         }
         );
     }
     back(){
       this.message=false; 
       console.log("done")
       this.ngOnInit();
       this.route.navigateByUrl('searchbus');  
      } 

       getId(scheduleId:number)
      {
        this.show=!this.show
        console.log(scheduleId)
      } 
      CurrentVal:any;
     
 
      pay(val:any){  
       console.warn(val)
       this.CurrentVal=val
       /* localStorage.setItem("totalSeats",this.seatCount.toString());
       localStorage.setItem("totalFare",this.current_cost.toString()); */
       console.log(this.CurrentVal);
       this.current_cost=(this.fareAmount*this.CurrentVal);
       console.log(this.current_cost);
       this.service.SendFare(this.current_cost);

       this.route.navigate(['Payment'])
     
     
     } 

      
     
 
      
     get Startingpt()
     {
       return this.SearchBusForm.get('StartingPt');
     }
     get Destination()
     {
       return this.SearchBusForm.get('Destination');
     }
     get ScheduledDate()
     {
       return this.SearchBusForm.get('ScheduledDate');
     }
    /*  get DepartureTime()
     {
       return this.SearchBusForm.get('DepartureTime');
     }
     get ArrivalTime()
     {
       return this.SearchBusForm.get('ArrivalTime');
     }
     get FareAmount()
     {
       return this.SearchBusForm.get('FareAmount');
     } */
    
   
   
 }