import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { PaymentComponent } from './payment.component';
import { CheckoutComponent } from './checkout/checkout.component';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [PaymentComponent, CheckoutComponent],
  imports: [
    CommonModule,
    PaymentRoutingModule,
    MatCardModule
  ]
})
export class PaymentModule { }
