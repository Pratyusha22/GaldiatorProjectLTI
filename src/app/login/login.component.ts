import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { BusService } from '../bus.service';
   
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ContactForm :FormGroup= new FormGroup({
    UserName:new FormControl(""),
    Password:new FormControl("")
  }
  );
  errorMessage?:string;

  constructor(private service:BusService,private route:Router) { }

  ngOnInit(): void {
    sessionStorage.removeItem('UserName');    
    sessionStorage.clear();  
  }
  get UserName()
  {
    return this.ContactForm.get('UserName');
  }
  get Password()
  {
    return this.ContactForm.get('Password');
  }
  /* SubmitInfo()
  {
    console.log(this.ContactForm.value)
  } */
  Login(){    
       
    this.service.Login(this.ContactForm.value).subscribe(
        
      (res) => {  
                     
          console.log("Success");
          sessionStorage.setItem('UserName',this.ContactForm.value.UserName);
          //this.Service.sendstatus(true);
          this.service.subject.next(true);
          this.route.navigateByUrl('Home');     
           
      },    
      error => {    
        this.errorMessage = "Login Failed";    
      }
      );    
  };    
}