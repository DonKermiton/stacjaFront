import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddVehicleComponent } from './components/add-vehicle/add-vehicle.component';
import { CarInfoComponent } from './components/car-info/car-info.component';
import { AppointmentComponent } from './components/appointment/appointment.component';

@NgModule({
  declarations: [
  
    DashboardComponent,
       AddVehicleComponent,
       CarInfoComponent,
       AppointmentComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
