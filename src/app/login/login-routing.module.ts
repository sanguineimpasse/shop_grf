import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class LoginRoutingModule { }
