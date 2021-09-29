import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl,Validators, FormBuilder,AbstractControl} from '@angular/forms';
import { Router } from '@angular/router';
import { BusService } from '../bus.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignUpComponent implements OnInit {
  data=false;
  message?:string;

  // customer!:RegisterCustomer;
  constructor(private service:BusService,private route:Router) { }
  
  ContactForm :FormGroup= new FormGroup({
    CustomerName:new FormControl("",[Validators.required,Validators.minLength(5)]),
    
    UserName:new FormControl("",[Validators.required,Validators.minLength(5)]),
    CustomerEmail:new FormControl("",[Validators.pattern("[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"),Validators.required]),
    Password:new FormControl("",[Validators.pattern(" ^(?=.[A-Z])(?=.?[a-z])(?=.*?[0-9]).{8,16}$/"),Validators.minLength(8),
                                  Validators.required]),
    
    CustomerContact:new FormControl("",[Validators.pattern("[789][0-9]{9}"),Validators.maxLength(10)]),
    ConfirmPassword:new FormControl("",[Validators.required]),
    CustomerAge:new FormControl(),
    CustomerGender:new FormControl()

  });



  ngOnInit(): void {
    
   
  }
  
  get CustomerName()
  {
    return this.ContactForm.get('CustomerName');
  }
  
  get UserName()
  {
    return this.ContactForm.get('UserName');
  }
  get CustomerEmail()
  {
    return this.ContactForm.get('CustomerEmail');
  }
  get Password()
  {
    return this.ContactForm.get('Password');
  }
  get ConfirmPassword()
  {
    return this.ContactForm.get('ConfirmPassword');
  }
  get CustomerContact()
  {
    return this.ContactForm.get('CustomerContact');
  }
  get CustomerAge()
  {
    return this.ContactForm.get('CustomerAge');
  }
  get CustomerGender()
  {
    return this.ContactForm.get('CustomerGender');
  }
  /* Submitinfo(){
    
    console.log(this.ContactForm.value)
  } */
  /* register(){
    var customer1=this.service.GetCustomerByUserName(this.Username?.value).subscribe();
    if(customer1!=null){
      this.route.navigateByUrl("/Sign-Up");
      alert("Username already exists");
    }
    else{
      this.service.Register(this.ContactForm.value).subscribe();
      this.route.navigateByUrl("/Login");
    }
   
  } */
  register()    
  {    
  this.service.Register(this.ContactForm.value).subscribe(    
    (data)=>    
    {    
      console.log(data);
       
      this.ContactForm.reset();    
      this.message="Registered Successfully"
      this.route.navigateByUrl('Login')
    },
    error=>{
      console.log(error.message)
      this.message="User already exists"
    }
    );    
  }    

}