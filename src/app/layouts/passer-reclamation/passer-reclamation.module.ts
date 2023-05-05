import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PasserReclamationRoutingModule } from './passer-reclamation-routing.module';
import { MesReclamationsComponent } from './mes-reclamations/mes-reclamations.component';
import { FrontdetailReclamationComponent } from './frontdetail-reclamation/frontdetail-reclamation.component';



@NgModule({
  declarations: [MesReclamationsComponent, FrontdetailReclamationComponent],
  imports: [
    CommonModule,
    PasserReclamationRoutingModule
  ]
})
export class PasserReclamationModule { }
