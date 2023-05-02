import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RoleGuard} from '../../../shared/guard/roleguard';
import {ReclamationComponent} from './reclamation.component';
import {AddReclamataionComponent} from './add-reclamataion/add-reclamataion.component';
import {DetailReclamationComponent} from './detail-reclamation/detail-reclamation.component';
import {EditReclamationComponent} from './edit-reclamation/edit-reclamation.component';
import {ImprimerReclamationComponent} from './imprimer-reclamation/imprimer-reclamation.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'reclamation',
    pathMatch: 'full',
  },
  {path: 'reclamation', component: ReclamationComponent,
    canActivate: [RoleGuard], data: {role: 'admin'}},
  {path: 'add', component: AddReclamataionComponent,
    canActivate: [RoleGuard], data: {role: 'admin'}},
  {path: 'detail/:id', component: DetailReclamationComponent,
    canActivate: [RoleGuard], data: {role: 'admin'}},
  {path: 'edit/:id', component: EditReclamationComponent,
    canActivate: [RoleGuard], data: {role: 'admin'}},
  {path: 'imprimerRec', component: ImprimerReclamationComponent,
    canActivate: [RoleGuard], data: {role: 'admin'}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReclamationRoutingModule { }
