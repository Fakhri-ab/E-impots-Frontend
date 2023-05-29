import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MesDeclarationsTFRoutingModule } from './mes-declarations-tf-routing.module';
import { ItemTFComponent } from './item-tf/item-tf.component';
import { ListeComponent } from './liste/liste.component';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [ItemTFComponent, ListeComponent],
    imports: [
        CommonModule,
        MesDeclarationsTFRoutingModule,
        NgbPaginationModule,
        FormsModule
    ]
})
export class MesDeclarationsTFModule { }
