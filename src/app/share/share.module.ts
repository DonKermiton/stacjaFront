import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareRoutingModule } from './share-routing.module';
import { LayoutLoggedComponent } from './layouts/layout-logged/layout-logged.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarLoggedComponent } from './layouts/layout-logged/navbar-logged/navbar-logged.component';


@NgModule({
  declarations: [
    LayoutLoggedComponent,
    NavbarComponent,
    SidebarComponent,
    NavbarLoggedComponent
  ],
  exports: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    ShareRoutingModule
  ]
})
export class ShareModule { }
