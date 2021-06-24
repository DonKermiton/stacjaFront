import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddVehicleComponent} from './components/add-vehicle/add-vehicle.component';
import {AddRepairComponent} from './components/add-repair/add-repair.component';
import {FindCarComponent} from './components/find-car/find-car.component';

const routes: Routes = [
  {path: 'add-vehicle', component: AddVehicleComponent},
  {path: 'add-repair', component: AddRepairComponent},
  {path: 'find-car', component: FindCarComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
