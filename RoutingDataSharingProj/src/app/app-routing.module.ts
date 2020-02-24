import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentEditComponent} from "../student-edit/student-edit.component";
import {StudentMarksComponent} from "../student-marks/student-marks.component";
import {StudentListComponent} from "../student-list/student-list.component";
import {RegistrationFormComponent} from "../RegistrationFormDir/registration-form/registration-form.component";
import {LoginFormComponent} from "../RegistrationFormDir/login-form/login-form.component";


const routes: Routes = [
  {path:'studentlist',component:StudentListComponent,
    children:[
      {path:'studentmarks/:id',component:StudentMarksComponent}
    ]
  },

  {path:'studentEdit/:id',component:StudentEditComponent},



  {path:'registrationForm',component:RegistrationFormComponent},
  {path:'loginForm',component:LoginFormComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
export const routingComponents=[
  StudentMarksComponent, StudentEditComponent

];
