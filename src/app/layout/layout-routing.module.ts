import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent
  }

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class LayoutRoutingModule { }
