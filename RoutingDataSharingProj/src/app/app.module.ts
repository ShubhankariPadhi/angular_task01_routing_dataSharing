import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppRoutingModule, routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import {StudentListComponent} from "../student-list/student-list.component";
import {RegistrationFormComponent} from "../RegistrationFormDir/registration-form/registration-form.component";
import {LoginFormComponent} from "../RegistrationFormDir/login-form/login-form.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HomeComponent} from "../RegistrationFormDir/home/home.component";

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,routingComponents,
    HomeComponent,
    RegistrationFormComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
