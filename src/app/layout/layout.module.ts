import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { TopnavComponent } from '../components/topnav/topnav.component';
import { SidenavComponent } from '../components/sidenav/sidenav.component';
import { ScreenComponent } from '../components/screen/screen.component';
import { UserManagementComponent } from './user-management/user-management.component';



@NgModule({
  declarations: [
    LayoutComponent,
    TopnavComponent,
    SidenavComponent,
    ScreenComponent,
    UserManagementComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
