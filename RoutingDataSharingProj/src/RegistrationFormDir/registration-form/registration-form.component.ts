import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {
  firstnameFRomLocal;

  registrationForm= new FormGroup({
    firstName:new FormControl('',Validators.required),
    lastName:new FormControl('',Validators.required)
  });
  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
  }
onSubmit(){
//set local storage
  this.firstnameFRomLocal= localStorage.setItem('registrationData', this.registrationForm.value);
  console.warn(this.registrationForm.value);


}
}
