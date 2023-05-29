import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RoleGuard} from '../../../shared/guard/roleguard';
import {MesDeclarationsTFComponent} from './mes-declarations-tf.component';
import {ListeComponent} from './liste/liste.component';
import {ItemTFComponent} from './item-tf/item-tf.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'liste',
    pathMatch: 'full',
  },
  {path: 'MesDeclarationTF', component: MesDeclarationsTFComponent,
    canActivate: [RoleGuard], data: {role: 'User'}},
  {path: 'liste', component: ListeComponent,
    canActivate: [RoleGuard], data: {role: 'User'}},
  {path: 'itemTF/:id', component: ItemTFComponent,
    canActivate: [RoleGuard], data: {role: 'User'}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MesDeclarationsTFRoutingModule { }
