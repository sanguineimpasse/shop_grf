import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SidenavComponent } from './sidenav.component';

const routes: Routes = [
  {
    path:'',
    component: SidenavComponent
  },
  {
    path:'login',
    loadChildren: () => import('../../../login/login-routing.module').then(mod=>mod.LoginModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SidenavRoutingModule { }
