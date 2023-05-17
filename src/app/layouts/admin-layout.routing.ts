
import { UsersComponent } from './user/users.component';
import { Routes } from '@angular/router';

import { DashboardComponent } from '../../app/layouts/dashboard/dashboard.component';
import { RoleComponent } from './role/role.component';
import { AuthGuard } from 'shared/guard/auth.guard';
import {DemandeInscriptionComponent} from './demande-inscription/demande-inscription.component';
import {InfogeneraleComponent} from './infogenerale/infogenerale.component';
import {ObligationfiscaleComponent} from './obligationfiscale/obligationfiscale.component';
import {BackofficedeclarationIRPPComponent} from './backofficedeclaration-irpp/backofficedeclaration-irpp.component';
import {MesDeclarationIRPPComponent} from './mes-declaration-irpp/mes-declaration-irpp.component';
import {PaymentComponent} from './payment/payment.component';
import {MesDeclartionsTvaComponent} from './mes-declartions-tva/mes-declartions-tva.component';
import {BackOfficeDeclarationTvaComponent} from './back-office-declaration-tva/back-office-declaration-tva.component';


// @ts-ignore
// @ts-ignore
// @ts-ignore
export const AdminLayoutRoutes: Routes = [

    {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./dashboard/dashboard.module').then(x => x.DashboardModule),



            }]},


    {
        path: 'role',
        component: RoleComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./role/role.module').then(x => x.RoleModule),

            }]},

    {
        path: 'user',
        component: UsersComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./user/users.module').then(x => x.UserModule),

            }]},
    {
        path: 'reclamation',
        component: RoleComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./reclamation/reclamation.module').then(x => x.ReclamationModule),

            }]},
    {
        path: 'demandes',
        component: DemandeInscriptionComponent ,
        children: [
            {
                path: '',
                loadChildren: () => import('./demande-inscription/demande-inscription.module').then(x => x.DemandeInscriptionModule),

            }]} ,

    {
        path: 'infosGenerales',
        component: InfogeneraleComponent ,
        children: [
            {
                path: '',
                loadChildren: () => import('./infogenerale/infogenerale.module').then(x => x.InfogeneraleModule),

            }]},

    {
        path: 'passerReclamation',
        component: InfogeneraleComponent ,
        children: [
            {
                path: '',
                loadChildren: () => import('./passer-reclamation/passer-reclamation.module').then(x => x.PasserReclamationModule),

            }]} ,
    {
        path: 'obligationfiscale',
        component: ObligationfiscaleComponent ,
        children: [
            {
                path: '',
                loadChildren: () => import('./obligationfiscale/obligationfiscale.module').then(x => x.ObligationfiscaleModule),

            }]},
    {
        path: 'backofficedeclarationIRPP',
        component: BackofficedeclarationIRPPComponent ,
        children: [
            {
                path: '',
                // tslint:disable-next-line:max-line-length
                loadChildren: () => import('./backofficedeclaration-irpp/backofficedeclaration-irpp.module').then(x => x.BackofficedeclarationIRPPModule),

            }]},
    {
        path: 'backofficedeclarationTVA',
        component: BackOfficeDeclarationTvaComponent ,
        children: [
            {
                path: '',
                // tslint:disable-next-line:max-line-length
                loadChildren: () => import('./back-office-declaration-tva/back-office-declaration-tva.module').then(x => x.BackOfficeDeclarationTvaModule),

            }]},
    {
        path: 'MesDeclarationIRPP',
        component: MesDeclarationIRPPComponent ,
        children: [
            {
                path: '',
                // tslint:disable-next-line:max-line-length
                loadChildren: () => import('./mes-declaration-irpp/mes-declaration-irpp.module').then(x => x.MesDeclarationIRPPModule),

            }]},
    {
        path: 'payment',
        component: PaymentComponent ,
        children: [
            {
                path: '',
                // tslint:disable-next-line:max-line-length
                loadChildren: () => import('./payment/payment.module').then(x => x.PaymentModule),

            }]},
    {
        path: 'MesDeclarationTVA',
        component: MesDeclartionsTvaComponent ,
        children: [
            {
                path: '',
                // tslint:disable-next-line:max-line-length
                loadChildren: () => import('./mes-declartions-tva/mes-declartions-tva.module').then(x => x.MesDeclartionsTvaModule),

            }]}



];
