import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MesDeclartionsTvaRoutingModule } from './mes-declartions-tva-routing.module';
import { MalisteComponent } from './maliste/maliste.component';
import { ItemTvaComponent } from './item-tva/item-tva.component';


@NgModule({
  declarations: [MalisteComponent, ItemTvaComponent],
  imports: [
    CommonModule,
    MesDeclartionsTvaRoutingModule
  ]
})
export class MesDeclartionsTvaModule { }
