import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { PaymentComponent } from './payment.component';
import { CheckoutComponent } from './checkout/checkout.component';
import {MatCardModule} from '@angular/material/card';
import { SuccessComponent } from './success/success.component';
import { CancelComponent } from './cancel/cancel.component';


@NgModule({
  declarations: [PaymentComponent, CheckoutComponent, SuccessComponent, CancelComponent],
  imports: [
    CommonModule,
    PaymentRoutingModule,
    MatCardModule
  ]
})
export class PaymentModule { }
