import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

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
    firstName:this.fb.control('',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
    lastName:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
    date:new FormControl('',Validators.required),
    gender:new FormControl('',Validators.required),
    emailId:new FormControl('',[Validators.required,Validators.pattern("[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}")]),
    password:new FormControl('',[Validators.required,Validators.minLength(8),Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[#$^+=!*()@%&]).{8,10}$')]),
    confirmPassword:new FormControl('',Validators.required),

    marks:new FormGroup({
          math:new FormControl('',Validators.required),
          english:new FormControl('',Validators.required),
    }),

  });
  constructor(private fb: FormBuilder , private router:Router) {

  }

  ngOnInit() {

  }
  onSubmit(){


    let emailId=this.registrationForm.controls['emailId'].value;
    let password=this.registrationForm.controls['password'].value;


    localStorage.setItem('mailId',emailId);
    localStorage.setItem('psw',password);

    console.log(JSON.stringify(this.registrationForm.value));
    this.router.navigate(['home']);
  }
  psw(){
    console.log(!(this.registrationForm.controls['confirmPassword'].value==this.registrationForm.controls['password'].value));
    return !((this.registrationForm.controls['confirmPassword'].value)==(this.registrationForm.controls['password'].value));
  }
}
