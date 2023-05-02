import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObligationfiscaleRoutingModule } from './obligationfiscale-routing.module';
import { ObligationfiscaleComponent } from './obligationfiscale.component';
import { DeclarartionirppComponent } from './declarartionirpp/declarartionirpp.component';
import { DeclarartiontvaComponent } from './declarartiontva/declarartiontva.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [ObligationfiscaleComponent, DeclarartionirppComponent, DeclarartiontvaComponent],
    imports: [
        CommonModule,
        ObligationfiscaleRoutingModule,
        ReactiveFormsModule
    ]
})
export class ObligationfiscaleModule { }
