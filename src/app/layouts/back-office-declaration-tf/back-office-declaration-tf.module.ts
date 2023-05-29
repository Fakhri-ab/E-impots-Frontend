import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackOfficeDeclarationTfRoutingModule } from './back-office-declaration-tf-routing.module';
import { BackTfListeComponent } from './back-tf-liste/back-tf-liste.component';
import { BackItemTfComponent } from './back-item-tf/back-item-tf.component';
import {FormsModule} from '@angular/forms';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [BackTfListeComponent, BackItemTfComponent],
    imports: [
        CommonModule,
        BackOfficeDeclarationTfRoutingModule,
        FormsModule,
        NgbPaginationModule
    ]
})
export class BackOfficeDeclarationTfModule { }
