import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RoleGuard} from '../../../shared/guard/roleguard';
import {MesDeclarationIRPPComponent} from './mes-declaration-irpp.component';
import {MalisteComponent} from './maliste/maliste.component';
import {ItemIRPPComponent} from './item-irpp/item-irpp.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'liste',
    pathMatch: 'full',
  },
  {path: 'MesDeclarationIRPP', component: MesDeclarationIRPPComponent,
    canActivate: [RoleGuard], data: {role: 'User'}},
  {path: 'liste', component: MalisteComponent,
    canActivate: [RoleGuard], data: {role: 'User'}},
  {path: 'itemIRPP/:id', component: ItemIRPPComponent,
    canActivate: [RoleGuard], data: {role: 'User'}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MesDeclarationIRPPRoutingModule { }
