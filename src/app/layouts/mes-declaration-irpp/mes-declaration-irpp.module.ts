import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MesDeclarationIRPPRoutingModule } from './mes-declaration-irpp-routing.module';
import { MalisteComponent } from './maliste/maliste.component';


@NgModule({
  declarations: [MalisteComponent],
  imports: [
    CommonModule,
    MesDeclarationIRPPRoutingModule
  ]
})
export class MesDeclarationIRPPModule { }
