import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MesDeclarationIRPPRoutingModule } from './mes-declaration-irpp-routing.module';
import { MalisteComponent } from './maliste/maliste.component';
import { ItemIRPPComponent } from './item-irpp/item-irpp.component';


@NgModule({
  declarations: [MalisteComponent, ItemIRPPComponent],
  imports: [
    CommonModule,
    MesDeclarationIRPPRoutingModule
  ]
})
export class MesDeclarationIRPPModule { }
