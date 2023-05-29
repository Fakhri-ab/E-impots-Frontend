import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BackOfficeDeclarationTvaComponent} from '../back-office-declaration-tva/back-office-declaration-tva.component';
import {RoleGuard} from '../../../shared/guard/roleguard';
import {BackTvaListeComponent} from '../back-office-declaration-tva/back-tva-liste/back-tva-liste.component';
import {BackItemTvaComponent} from '../back-office-declaration-tva/back-item-tva/back-item-tva.component';
import {BackOfficeDeclarationTfComponent} from './back-office-declaration-tf.component';
import {BackTfListeComponent} from './back-tf-liste/back-tf-liste.component';
import {BackItemTfComponent} from './back-item-tf/back-item-tf.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'BackTFListe',
    pathMatch: 'full',
  },
  {path: 'backofficedeclarationTF', component: BackOfficeDeclarationTfComponent,
    canActivate: [RoleGuard], data: {role: 'admin'}},
  {path: 'BackTFListe', component: BackTfListeComponent,
    canActivate: [RoleGuard], data: {role: 'admin'}},
  {path: 'BackItemTF/:id', component: BackItemTfComponent,
    canActivate: [RoleGuard], data: {role: 'admin'}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackOfficeDeclarationTfRoutingModule { }
