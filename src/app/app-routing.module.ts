import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutLoggedComponent} from './share/layouts/layout-logged/layout-logged.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./core/core.module').then(m => m.CoreModule) },
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) , component: LayoutLoggedComponent },
  { path: 'share', loadChildren: () => import('./share/share.module').then(m => m.ShareModule) },
  { path: 'employee', loadChildren: () => import('./employee/employee.module')
  .then(m => m.EmployeeModule),  component: LayoutLoggedComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
