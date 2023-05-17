import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackOfficeDeclarationTvaRoutingModule } from './back-office-declaration-tva-routing.module';
import { BackTvaListeComponent } from './back-tva-liste/back-tva-liste.component';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import { BackItemTvaComponent } from './back-item-tva/back-item-tva.component';


@NgModule({
  declarations: [BackTvaListeComponent, BackItemTvaComponent],
    imports: [
        CommonModule,
        BackOfficeDeclarationTvaRoutingModule,
        NgbPaginationModule,
        FormsModule
    ]
})
export class BackOfficeDeclarationTvaModule { }
