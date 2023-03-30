import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfogeneraleRoutingModule } from './infogenerale-routing.module';
import { InfogeneraleComponent } from './infogenerale.component';
import { AddinfogeneraleComponent } from './addinfogenerale/addinfogenerale.component';
import { EditinfoComponent } from './editinfo/editinfo.component';
import { DetailinfoComponent } from './detailinfo/detailinfo.component';


@NgModule({
  declarations: [InfogeneraleComponent, AddinfogeneraleComponent, EditinfoComponent, DetailinfoComponent],
  imports: [
    CommonModule,
    InfogeneraleRoutingModule
  ]
})
export class InfogeneraleModule { }
