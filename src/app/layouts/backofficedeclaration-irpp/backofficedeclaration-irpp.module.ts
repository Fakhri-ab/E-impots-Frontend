import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackofficedeclarationIRPPRoutingModule } from './backofficedeclaration-irpp-routing.module';
import { ListeDeclarationIRPPComponent } from './liste-declaration-irpp/liste-declaration-irpp.component';
import {FormsModule} from '@angular/forms';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import { BackItemIrppComponent } from './back-item-irpp/back-item-irpp.component';



@NgModule({
  declarations: [ListeDeclarationIRPPComponent, BackItemIrppComponent],
    imports: [
        CommonModule,
        BackofficedeclarationIRPPRoutingModule,
        FormsModule,
        NgbPaginationModule,

    ]
})
export class BackofficedeclarationIRPPModule { }
