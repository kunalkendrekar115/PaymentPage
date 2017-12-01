import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'wallets',
  templateUrl: './wallets.component.html',
  styleUrls: ['./wallets.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class WalletsComponent {

  wallets=[{walletName:'Paytm',walletLogo:'assets/images/paytm.png'},
  {walletName:'Mobikwik',walletLogo:'assets/images/mobikwik.jpg'},
  {walletName:'Freecharge',walletLogo:'assets/images/freecharge.png'},]

  constructor() { }


  submit(form)
  {
    console.log(form)
  }
}
