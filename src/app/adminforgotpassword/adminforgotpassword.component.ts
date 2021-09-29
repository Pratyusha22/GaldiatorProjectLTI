import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-adminforgotpassword',
  templateUrl: './adminforgotpassword.component.html',
  styleUrls: ['./adminforgotpassword.component.css']
})
export class AdminforgotpasswordComponent implements OnInit {
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
