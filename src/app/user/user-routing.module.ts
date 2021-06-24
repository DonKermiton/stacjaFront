import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {AddVehicleComponent} from './components/add-vehicle/add-vehicle.component';
import {CarInfoComponent} from './components/car-info/car-info.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'add-vehicle', component: AddVehicleComponent},
  {path: 'car-info/:id', component: CarInfoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
