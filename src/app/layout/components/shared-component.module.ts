import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScreenComponent } from './screen/screen.component';
import { TopnavComponent } from './topnav/topnav.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { CardComponent } from './card/card.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ScreenComponent,
    TopnavComponent,
    SidenavComponent,
    CardComponent
  ],
  imports: [
    CommonModule, 
    RouterModule
  ],
  exports:[
    ScreenComponent,
    TopnavComponent,
    SidenavComponent,
    CardComponent
  ]
})
export class SharedComponentModule { }
