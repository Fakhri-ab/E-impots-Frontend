import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RoleGuard} from '../../../shared/guard/roleguard';
import {MesDeclartionsTvaComponent} from './mes-declartions-tva.component';
import {MalisteComponent} from './maliste/maliste.component';
import {ItemTvaComponent} from './item-tva/item-tva.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'liste',
    pathMatch: 'full',
  },
  {path: 'MesDeclarationTVA', component: MesDeclartionsTvaComponent,
    canActivate: [RoleGuard], data: {role: 'User'}},
  {path: 'liste', component: MalisteComponent,
    canActivate: [RoleGuard], data: {role: 'User'}},
  {path: 'itemTVA/:id', component: ItemTvaComponent,
    canActivate: [RoleGuard], data: {role: 'User'}}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MesDeclartionsTvaRoutingModule { }
