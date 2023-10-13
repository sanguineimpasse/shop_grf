import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import('./layout/layout.module').then(mod=>mod.LayoutModule)
  },
  {
    path:"login",
    loadChildren: () => import('./login/login.module').then(mod=>mod.LoginModule)
  },
  {
    path: "registration",
    loadChildren: () => import('./registration/registration.module').then(mod=>mod.RegistrationModule)
  },
  {
    path: "dashboard",
    loadChildren: () => import('./dashboard/dashboard.module').then(mod=>mod.DashboardModule)
  },
  {
    path: "user-management",
    loadChildren: () => import('./user-management/user-management.module').then(mod=>mod.UserManagementModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
