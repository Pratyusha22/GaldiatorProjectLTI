import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BusService } from '../bus.service';
import { PassengerDetails } from '../passenger-details';

@Component({
  selector: 'app-enterpassengerdetails',
  templateUrl: './enterpassengerdetails.component.html',
  styleUrls: ['./enterpassengerdetails.component.css']
})
export class EnterpassengerdetailsComponent implements OnInit {

 
  
  
  PassengerForm :FormGroup= new FormGroup({
    name:new FormControl("",[Validators.required,Validators.minLength(5)]),
    email:new FormControl("",[Validators.pattern("[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"),Validators.required]),
    contact:new FormControl("",[Validators.pattern("[789][0-9]{9}"),Validators.maxLength(10)]),
    age:new FormControl(""),
    gender:new FormControl(""),
    numberOfPassengers:new FormControl("")
  });

  message:boolean=false;

  passenger! : PassengerDetails;

  constructor(private service:BusService,private route:Router) { }

  ngOnInit(): void {
  }
 
  DisplayPassenger(){
    console.log(this.PassengerForm.value);
    
    this.service.PassDetails(this.PassengerForm.value).subscribe(
      data => {
        
        this.passenger=data;
        console.log(data);
        this.PassengerForm.reset();   
        this.message=true;
      
      },
      error=>{
        console.log(error.message)
       this.PassengerForm.reset(); 
      }
      );
  }

  get name()
  {
    return this.PassengerForm.get('name');
  }
  get email()
  {
    return this.PassengerForm.get('email');
  }
  
  get contact()
  {
    return this.PassengerForm.get('contact');
  }
  get age()
  {
    return this.PassengerForm.get('age');
  }
  get gender()
  {
    return this.PassengerForm.get('gender');
  }
  get numberOfPassengers()
  {
    return this.PassengerForm.get('numberOfPassengers');

  }
  
   
}
