import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PaymentComponent {
  paymodes = ['Credit / Debit Card', 'Net Banking', 'Wallets', 'UPI']
  selectedPaymode 

  constructor() {
    this.selectedPaymode = this.paymodes[0]
  }


  onPaymodeSelected(paymode) {
    console.log(paymode)
    this.selectedPaymode = paymode;
  }

}
