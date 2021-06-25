import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { AddVehicleComponent } from './components/add-vehicle/add-vehicle.component';
import { FindCarComponent } from './components/find-car/find-car.component';
import { AddRepairComponent } from './components/add-repair/add-repair.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ListCarsComponent } from './components/list-cars/list-cars.component';

@NgModule({
  declarations: [

    AddVehicleComponent,
       FindCarComponent,
       AddRepairComponent,
       ListCarsComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    ReactiveFormsModule
  ]
})
export class EmployeeModule { }
