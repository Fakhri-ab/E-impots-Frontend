import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddReclamataionComponent} from '../reclamation/add-reclamataion/add-reclamataion.component';
import {RoleGuard} from '../../../shared/guard/roleguard';
import {DetailinfoComponent} from '../infogenerale/detailinfo/detailinfo.component';
import {PasserReclamationComponent} from './passer-reclamation.component';
import {MesReclamationsComponent} from './mes-reclamations/mes-reclamations.component';
import {FrontdetailReclamationComponent} from './frontdetail-reclamation/frontdetail-reclamation.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'passerReclamation',
    pathMatch: 'full',
  },
  {path: 'passerReclamation', component: PasserReclamationComponent,
    canActivate: [RoleGuard], data: {role: 'User'}},
  {path: 'mesReclamations', component: MesReclamationsComponent,
    canActivate: [RoleGuard], data: {role: 'User'}},
  {path: 'DetailReclamation/:id', component: FrontdetailReclamationComponent,
    canActivate: [RoleGuard], data: {role: 'User'}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PasserReclamationRoutingModule { }
