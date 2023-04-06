import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PasserReclamationRoutingModule } from './passer-reclamation-routing.module';
import { MesReclamationsComponent } from './mes-reclamations/mes-reclamations.component';



@NgModule({
  declarations: [MesReclamationsComponent],
  imports: [
    CommonModule,
    PasserReclamationRoutingModule
  ]
})
export class PasserReclamationModule { }
