import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ReclamationComponent} from '../reclamation/reclamation.component';
import {RoleGuard} from '../../../shared/guard/roleguard';
import {BackofficedeclarationIRPPComponent} from './backofficedeclaration-irpp.component';
import {ListeDeclarationIRPPComponent} from './liste-declaration-irpp/liste-declaration-irpp.component';
import {BackItemTvaComponent} from '../back-office-declaration-tva/back-item-tva/back-item-tva.component';
import {BackItemIrppComponent} from './back-item-irpp/back-item-irpp.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'liste',
    pathMatch: 'full',
  },
  {path: 'backofficedeclarationIRPP', component: BackofficedeclarationIRPPComponent,
    canActivate: [RoleGuard], data: {role: 'admin'}},
  {path: 'liste', component: ListeDeclarationIRPPComponent,
    canActivate: [RoleGuard], data: {role: 'admin'}},
  {path: 'BackItemIrpp/:id', component: BackItemIrppComponent,
    canActivate: [RoleGuard], data: {role: 'admin'}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackofficedeclarationIRPPRoutingModule { }
