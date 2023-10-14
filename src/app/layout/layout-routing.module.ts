import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children:[
      {
        path: "",
        redirectTo: "dashboard",
        pathMatch: "prefix"
      },
      {
        path:"dashboard",
        loadChildren: ()=>import('./dashboard/dashboard.module').then(mod => mod.DashboardModule),
      },
      {
        path:"products",
        loadChildren: ()=>import('./products/products.module').then(mod => mod.ProductsModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
