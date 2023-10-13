import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { RegistrationComponent } from './registration.component';

const routes: Routes = [
  {
    path: '',
    component: RegistrationComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class RegistrationRoutingModule { }
