import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'order-summery',
  templateUrl: './order-summery.component.html',
  styleUrls: ['./order-summery.component.css']
})

 // tslint:disable
export class OrderSummeryComponent{

 
  @Input('cart-products')
  cartProducts;
  constructor() { }


  getTotalPrice() {
    
        let total:number=0;
        this.cartProducts.forEach(product=>{
    
            total=total+(product.selectedQty* parseInt(product.price))
        })
    
        return total;
      }

}
