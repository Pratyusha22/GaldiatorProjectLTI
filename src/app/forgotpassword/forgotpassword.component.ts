import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl,Validators} from '@angular/forms'


@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  ContactForm :FormGroup= new FormGroup({
    EmailAddress:new FormControl("",[Validators.pattern("[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"),Validators.required])
  });

  constructor() { }

  ngOnInit(): void {
  }
  get EmailAddress()
  {
    return this.ContactForm.get('EmailAddress');
  }
  Submitinfo(){
    console.log(this.ContactForm.value)
  }

}
