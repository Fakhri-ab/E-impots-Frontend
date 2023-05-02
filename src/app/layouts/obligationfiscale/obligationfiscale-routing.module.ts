import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ReclamationComponent} from '../reclamation/reclamation.component';
import {RoleGuard} from '../../../shared/guard/roleguard';
import {ObligationfiscaleComponent} from './obligationfiscale.component';
import {DeclarartionirppComponent} from './declarartionirpp/declarartionirpp.component';
import {DeclarartiontvaComponent} from './declarartiontva/declarartiontva.component';

const routes: Routes = [

  {path: 'obligationfiscale', component: ObligationfiscaleComponent,
    canActivate: [RoleGuard], data: {role: 'User'}},
  {path: 'declarationIRPP', component: DeclarartionirppComponent,
    canActivate: [RoleGuard], data: {role: 'User'}},
  {path: 'declarationTVA', component: DeclarartiontvaComponent,
    canActivate: [RoleGuard], data: {role: 'User'}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObligationfiscaleRoutingModule { }
