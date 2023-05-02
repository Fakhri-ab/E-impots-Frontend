import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackofficedeclarationIRPPRoutingModule } from './backofficedeclaration-irpp-routing.module';
import { ListeDeclarationIRPPComponent } from './liste-declaration-irpp/liste-declaration-irpp.component';
import {FormsModule} from '@angular/forms';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [ListeDeclarationIRPPComponent],
    imports: [
        CommonModule,
        BackofficedeclarationIRPPRoutingModule,
        FormsModule,
        NgbPaginationModule,

    ]
})
export class BackofficedeclarationIRPPModule { }
