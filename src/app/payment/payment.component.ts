import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Booking } from '../booking';
import { BusService } from '../bus.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  Fare?:any;
  BookingForm: any;
  user!: string | null;

  constructor(private service:BusService,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.service.CurrentFare.subscribe(Fare=>this.Fare=Fare)
    this.user=sessionStorage.getItem('UserName')
  
    this.BookingForm = this.fb.group({
     user:[''],
    scheduleId: [],
   
    numberOfSeats: [],
     totalAmount: [],    
  })
  }
  submitForm()
  {
      this.service.EnteringDetails(this.BookingForm.value).subscribe();

  }
}