import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ReclamationComponent} from '../reclamation/reclamation.component';
import {RoleGuard} from '../../../shared/guard/roleguard';
import {BackofficedeclarationIRPPComponent} from './backofficedeclaration-irpp.component';
import {ListeDeclarationIRPPComponent} from './liste-declaration-irpp/liste-declaration-irpp.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'liste',
    pathMatch: 'full',
  },
  {path: 'backofficedeclarationIRPP', component: BackofficedeclarationIRPPComponent,
    canActivate: [RoleGuard], data: {role: 'admin'}},
  {path: 'liste', component: ListeDeclarationIRPPComponent,
    canActivate: [RoleGuard], data: {role: 'admin'}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackofficedeclarationIRPPRoutingModule { }
