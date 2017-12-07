import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';

@Component({
  selector: 'order-summery',
  templateUrl: './order-summery.component.html',
  styleUrls: ['./order-summery.component.css']
})

// tslint:disable
export class OrderSummeryComponent implements OnInit {


  private sub: any
  @Input('cart-products')
  cartProducts= new Array();
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];

      console.log("id is "+id)
      if (id =='1') {
       
       this.cartProducts=JSON.parse( localStorage.getItem('cart'))
       
       console.log("items "+this.cartProducts)
      }
    });
  }
  getTotalPrice() {

    let total: number = 0;
    this.cartProducts.forEach(product => {

      total = total + (product.selectedQty * parseInt(product.price))
    })

    return total;
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
