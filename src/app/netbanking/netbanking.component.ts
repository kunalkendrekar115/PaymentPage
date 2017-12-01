import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'netbanking',
  templateUrl: './netbanking.component.html',
  styleUrls: ['./netbanking.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NetbankingComponent {

  banks=[{bankName:'SBI',bankLogo:'assets/images/sbi.png'},
  {bankName:'Kotak',bankLogo:'assets/images/kotak.jpg'},
  {bankName:'HDFC',bankLogo:'assets/images/hdfc.jpg'},
  {bankName:'ICICI',bankLogo:'assets/images/icici.jpg'},
  {bankName:'Axis',bankLogo:'assets/images/axis.png'},
  {bankName:'Yes',bankLogo:'assets/images/yes.jpg'},
  {bankName:'HSBC',bankLogo:'assets/images/logo.png'},
  {bankName:'Citi',bankLogo:'assets/images/logo.png'},
  {bankName:'BOB',bankLogo:'assets/images/logo.png'},
  {bankName:'BOI',bankLogo:'assets/images/logo.png'},]

  constructor() { }



}
