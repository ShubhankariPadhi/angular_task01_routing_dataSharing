import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators, AbstractControl, ValidatorFn, ValidationErrors} from "@angular/forms";
import {Router} from "@angular/router";
import { from } from 'rxjs';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {

  matchMessage;
  invalidDateMessage;

    registrationForm= new FormGroup({
    firstName:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(20),Validators.pattern("^[A-Za-z]*$")]),
    lastName:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(20),Validators.pattern("^[A-Za-z]*$")]),
    date:new FormControl('',Validators.required),
    gender:new FormControl('',Validators.required),
    emailId:new FormControl('',[Validators.required,Validators.pattern("[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}")]),
   
    passwordGroup:new FormGroup({
      password:new FormControl('',[Validators.required,Validators.minLength(8),Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[#$^+=!*()@%&]).{8,10}$')]),
      confirmPassword:new FormControl('',[Validators.required])
    }),
 

    marks:new FormGroup({
          math:new FormControl('',[Validators.required,Validators.pattern("^[0-9.]*$")]),
          english:new FormControl('',[Validators.required,Validators.pattern("^[0-9.]*$")]),
    }),

  });
  constructor(private fb: FormBuilder , private router:Router) {

  }




  dateValidate(){
    let date = new Date();
    let enteredDate = this.registrationForm.get('date').value;
    let d = date.getDay();
    let m = date.getMonth();
    let y = date.getFullYear();
    let currentDate = new Date(y, m, d);
    let myDate = new Date(enteredDate);
    console.log("myDate: "+myDate);
    console.log("currentDate: "+currentDate);
    if(enteredDate != undefined && enteredDate != ''){
    if(currentDate <= myDate ){
    this.invalidDateMessage = "Invalid DateOfBirth";
    }
    else{
    this.invalidDateMessage = "";
    }
    }
    }

  pswMatch(){
    let password=this.registrationForm.get('passwordGroup').get('password').value;
    let confirmpassword=this.registrationForm.get('passwordGroup').get('confirmPassword').value;
   console.log(password+"   "+ confirmpassword);
   if(confirmpassword!=''  && confirmpassword!= null && confirmpassword!=undefined ){
    if( password==confirmpassword){
      this.matchMessage="";
    }
    else
    this.matchMessage="password missmatched";
  }
  }
  ngOnInit() {

  }
  onSubmit(){


    let emailId=this.registrationForm.get('emailId').value;
    let password=this.registrationForm.get('passwordGroup').get('password').value;
    console.log('local strg'+emailId,password);

    localStorage.setItem('mailId',emailId);
    localStorage.setItem('psw',password);

    console.log(JSON.stringify(this.registrationForm.value));
    this.router.navigate(['home']);
  }

}
