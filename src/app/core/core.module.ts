import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import {ShareModule} from '../share/share.module';
import { SideActionsComponent } from './components/welcome-page/side-actions/side-actions.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [

    WelcomePageComponent,
     SideActionsComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    ShareModule,
    ReactiveFormsModule
  ]
})
export class CoreModule { }
