import { User } from './../user';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-tdf-form-validation',
  templateUrl: './tdf-form-validation.component.html',
  styleUrls: ['./tdf-form-validation.component.scss']
})
export class TdfFormValidationComponent implements OnInit {
  /*created one object of any type and stored tdf element data in that obj in tepmlate for interpolation*/
  
  topics=['angular','react','vue'];
  
userModel=new User('',879797989,'','evening',true);




  specialities=['energetic','powerful','intelligent'];
  
  constructor() { }

  ngOnInit() {
  }

}
