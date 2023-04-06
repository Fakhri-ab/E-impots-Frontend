import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReclamationRoutingModule } from './reclamation-routing.module';
import { ReclamationComponent } from './reclamation.component';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AddReclamataionComponent } from './add-reclamataion/add-reclamataion.component';
import { DetailReclamationComponent } from './detail-reclamation/detail-reclamation.component';
import { EditReclamationComponent } from './edit-reclamation/edit-reclamation.component';
import { ImprimerReclamationComponent } from './imprimer-reclamation/imprimer-reclamation.component';
import {JwBootstrapSwitchNg2Module} from 'jw-bootstrap-switch-ng2';
import {NouisliderModule} from 'ng2-nouislider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
    // tslint:disable-next-line:max-line-length
  declarations: [ReclamationComponent, AddReclamataionComponent, DetailReclamationComponent, EditReclamationComponent, ImprimerReclamationComponent],
    imports: [
        CommonModule,
        ReclamationRoutingModule,
        NgbPaginationModule,
        FormsModule,
        ReactiveFormsModule,
        MatPaginatorModule,
        MatFormFieldModule,
        MatTableModule,
        MatCheckboxModule,


    ]
})
export class ReclamationModule { }
