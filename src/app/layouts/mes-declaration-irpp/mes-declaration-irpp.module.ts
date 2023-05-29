import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MesDeclarationIRPPRoutingModule } from './mes-declaration-irpp-routing.module';
import { MalisteComponent } from './maliste/maliste.component';
import { ItemIRPPComponent } from './item-irpp/item-irpp.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [MalisteComponent, ItemIRPPComponent],
    imports: [
        CommonModule,
        MesDeclarationIRPPRoutingModule,
        FormsModule
    ]
})
export class MesDeclarationIRPPModule { }
