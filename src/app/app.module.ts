import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from'@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StepOneComponent } from './components/step-one/step-one.component';
import { HomeComponent } from './components/home/home.component';
import { CellPhoneDirective } from './validations/cell-phone.directive';


@NgModule({
  declarations: [
    AppComponent,
    StepOneComponent,
    HomeComponent,
    CellPhoneDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
