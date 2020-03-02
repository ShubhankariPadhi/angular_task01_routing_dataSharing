import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  emailMismatchedMessage;passwordMissmatchedMessage;
mailId;
password;

  loginForm= new FormGroup({
    emailId:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required),
      });

  constructor(private router:Router) {
    this.mailId=localStorage.getItem('mailId');
    this.password=localStorage.getItem('psw');
  }

  ngOnInit() {
  }
  onSubmit(){
    this.passwordMissmatchedMessage="";
    this.emailMismatchedMessage="";
    if((this.mailId==this.loginForm.controls['emailId'].value )&&(this.password==this.loginForm.controls['password'].value)){

    console.log("inside login",this.mailId)
   //localStorage.clear();
  localStorage.removeItem('mailId');
  localStorage.removeItem('psw');
  // console.log(localStorage.getItem('psw'));
  // this.successfulMessage='successfully logged in';
  this.router.navigate(['home']);
 
  return true;
    }
   
    else if(this.mailId !=this.loginForm.controls['emailId'].value){
      this.emailMismatchedMessage='wrong emailId';
      return false;
    }
    else if(this.password!=this.loginForm.controls['password'].value){
      this.passwordMissmatchedMessage='wrong password';
      return false;
    }

}


}
