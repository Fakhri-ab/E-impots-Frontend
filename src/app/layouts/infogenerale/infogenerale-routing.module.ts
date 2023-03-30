import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RoleGuard} from '../../../shared/guard/roleguard';
import {AddinfogeneraleComponent} from './addinfogenerale/addinfogenerale.component';
import {EditinfoComponent} from './editinfo/editinfo.component';
import {InfogeneraleComponent} from './infogenerale.component';
import {DetailinfoComponent} from './detailinfo/detailinfo.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'infosGenerales',
    pathMatch: 'full',
  },
  {path: 'infosGenerales', component: DetailinfoComponent,
    canActivate: [RoleGuard], data: {role: 'User'}},
  {path: 'add', component: AddinfogeneraleComponent,
    canActivate: [RoleGuard], data: {role: 'User'}},
  {path: 'edit', component: EditinfoComponent,
    canActivate: [RoleGuard], data: {role: 'User'}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfogeneraleRoutingModule { }
