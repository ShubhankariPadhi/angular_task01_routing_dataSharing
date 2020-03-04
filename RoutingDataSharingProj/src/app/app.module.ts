import { UnlessDirective } from './../directivesExample/unless.directive';
import { StructuralDirectivesComponent } from './../directivesExample/structural-directives/structural-directives.component';
import { DirectivesComponent } from './../directivesExample/directives/directives.component';
import { HighLightDirective } from './../directivesExample/high-light.directive';
import { TdfFormValidationComponent } from './../TemplateDrivenFormExample/tdf-form-validation/tdf-form-validation.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppRoutingModule, routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import {StudentListComponent} from "../student-list/student-list.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,routingComponents  ,
    TdfFormValidationComponent,
    HighLightDirective ,
    DirectivesComponent,
    StructuralDirectivesComponent,
    UnlessDirective
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
