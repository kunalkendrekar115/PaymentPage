import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'card-payment',
  templateUrl: './card-payment.component.html',
  styleUrls: ['./card-payment.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CardPaymentComponent {

  monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  yearNames = ['2017', '2018', '2019', '2020', '2021', '2022', '2023']
  constructor() { }

  submit(form)
  {
     console.log(form)
  }
}
