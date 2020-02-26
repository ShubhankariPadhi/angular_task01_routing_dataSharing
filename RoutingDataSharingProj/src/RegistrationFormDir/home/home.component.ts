import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  mailId; password;

  constructor() {
    this.mailId = localStorage.getItem('mailId');
    this.password = localStorage.getItem('psw');
    console.log(this.mailId,  this.password);//
  }

  ngOnInit() {

  }
  check(){
return typeof this.mailId !== 'undefined' && this.mailId !== null && this.mailId !=='' && typeof this.password !== 'undefined' && this.password !== null && this.password !=='';

     }


}
