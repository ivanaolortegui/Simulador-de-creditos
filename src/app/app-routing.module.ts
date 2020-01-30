import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StepOneComponent } from './components/step-one/step-one.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  { path: 'PasoUno', component: StepOneComponent },
  { path: 'Home', component: HomeComponent },
  { path: '**', component:  HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
