import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MesDeclartionsTvaRoutingModule } from './mes-declartions-tva-routing.module';
import { MalisteComponent } from './maliste/maliste.component';
import { ItemTvaComponent } from './item-tva/item-tva.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [MalisteComponent, ItemTvaComponent],
    imports: [
        CommonModule,
        MesDeclartionsTvaRoutingModule,
        FormsModule
    ]
})
export class MesDeclartionsTvaModule { }
