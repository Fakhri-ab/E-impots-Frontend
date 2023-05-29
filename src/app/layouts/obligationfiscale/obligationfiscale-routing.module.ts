import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RoleGuard} from '../../../shared/guard/roleguard';
import {ObligationfiscaleComponent} from './obligationfiscale.component';
import {DeclarartionirppComponent} from './declarartionirpp/declarartionirpp.component';
import {DeclarartiontvaComponent} from './declarartiontva/declarartiontva.component';
import {DaclarationtfComponent} from './daclarationtf/daclarationtf.component';

const routes: Routes = [

  {path: 'obligationfiscale', component: ObligationfiscaleComponent,
    canActivate: [RoleGuard], data: {role: 'User'}},
  {path: 'declarationIRPP', component: DeclarartionirppComponent,
    canActivate: [RoleGuard], data: {role: 'User'}},
  {path: 'declarationTVA', component: DeclarartiontvaComponent,
    canActivate: [RoleGuard], data: {role: 'User'}},
  {path: 'declarationTF', component: DaclarationtfComponent,
    canActivate: [RoleGuard], data: {role: 'User'}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObligationfiscaleRoutingModule { }
