import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MesDeclartionsTvaComponent} from '../mes-declartions-tva/mes-declartions-tva.component';
import {RoleGuard} from '../../../shared/guard/roleguard';
import {BackOfficeDeclarationTvaComponent} from './back-office-declaration-tva.component';
import {BackTvaListeComponent} from './back-tva-liste/back-tva-liste.component';
import {BackItemTvaComponent} from './back-item-tva/back-item-tva.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'BackTvaListe',
    pathMatch: 'full',
  },
  {path: 'backofficedeclarationTVA', component: BackOfficeDeclarationTvaComponent,
    canActivate: [RoleGuard], data: {role: 'admin'}},
  {path: 'BackTvaListe', component: BackTvaListeComponent,
    canActivate: [RoleGuard], data: {role: 'admin'}},
  {path: 'BackItemTva/:id', component: BackItemTvaComponent,
    canActivate: [RoleGuard], data: {role: 'admin'}}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackOfficeDeclarationTvaRoutingModule { }
