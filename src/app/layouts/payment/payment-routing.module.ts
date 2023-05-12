import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RoleGuard} from '../../../shared/guard/roleguard';
import {PaymentComponent} from './payment.component';
import {CheckoutComponent} from './checkout/checkout.component';
import {SuccessComponent} from './success/success.component';
import {CancelComponent} from './cancel/cancel.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'checkout',
    pathMatch: 'full',
  },
  {path: 'payment', component: PaymentComponent,
    canActivate: [RoleGuard], data: {role: 'User'}},
  {path: 'checkout', component: CheckoutComponent,
    canActivate: [RoleGuard], data: {role: 'User'}},
  {path: 'Success', component: SuccessComponent,
    canActivate: [RoleGuard], data: {role: 'User'}},
  {path: 'Cancel', component: CancelComponent,
    canActivate: [RoleGuard], data: {role: 'User'}}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule { }
