import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {
  /*created one object of any type and stored tdf element data in that obj in tepmlate for interpolation*/
   model:any={};
  specialities=['energetic','powerful','intelligent'];
  // Reactive Form
    registrationForm= new FormGroup({
    firstName:new FormControl('',[Validators.required,Validators.minLength(3)]),
    lastName:new FormControl('',Validators.required),
    date:new FormControl('',Validators.required),
    gender:new FormControl('',Validators.required),
    emailId:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required),
    confirmPassword:new FormControl('',Validators.required),

    marks:new FormGroup({
          math:new FormControl('',Validators.required),
          english:new FormControl('',Validators.required),
    }),

  });
  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
  }
  onSubmit(){
    console.log(JSON.stringify(this.registrationForm.value));
  }

  /*register(formData){
//set local storage
  // console.warn(this.registrationForm.value);

console.log(formData.value);
}*/
}
