import { NgModule } from '@angular/core';
import {DragDropModule} from '@angular/cdk/drag-drop'
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { ChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './user/users.component';
import { RoleComponent } from './role/role.component';
import { DemandeInscriptionComponent } from './demande-inscription/demande-inscription.component';
import { PasserReclamationComponent } from './passer-reclamation/passer-reclamation.component';
import {ObligationfiscaleComponent} from './obligationfiscale/obligationfiscale.component';
import { BackofficedeclarationIRPPComponent } from './backofficedeclaration-irpp/backofficedeclaration-irpp.component';
import { MesDeclarationIRPPComponent } from './mes-declaration-irpp/mes-declaration-irpp.component';
import { MesDeclartionsTvaComponent } from './mes-declartions-tva/mes-declartions-tva.component';
import { BackOfficeDeclarationTvaComponent } from './back-office-declaration-tva/back-office-declaration-tva.component';
import { BackOfficeDeclarationTfComponent } from './back-office-declaration-tf/back-office-declaration-tf.component';
import { MesDeclarationsTFComponent } from './mes-declarations-tf/mes-declarations-tf.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ChartsModule,
    NgbModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule,
    DragDropModule,

  ],
  declarations: [
    DashboardComponent,
    UsersComponent,
    RoleComponent,
    DemandeInscriptionComponent,
    PasserReclamationComponent,
    ObligationfiscaleComponent,
    BackofficedeclarationIRPPComponent,
    MesDeclarationIRPPComponent,
    MesDeclartionsTvaComponent,
    BackOfficeDeclarationTvaComponent,
    BackOfficeDeclarationTfComponent,
    MesDeclarationsTFComponent,



  ]
})

export class AdminLayoutModule {}
