import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  ContactForm :FormGroup= new FormGroup({
    Password:new FormControl("",[Validators.required,Validators.pattern(" /^(?=.[A-Z])(?=.\d)(?=.[$@$!%#?&])[A-Za-z\d$@$!%*#?&]{8,20}$/"),
    Validators.minLength(8)])
  }
  );

  constructor() { }

  ngOnInit(): void {
  }
  get Password()
  {
    return this.ContactForm.get('Password');
  }
  SubmitInfo()
  {
    console.log(this.ContactForm.value)
  }

}
