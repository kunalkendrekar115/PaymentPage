import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Product } from '../product';
import { Router } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  encapsulation: ViewEncapsulation.None
})
// tslint:disable
export class CartComponent {

  products: Product[] = new Array();
  cartProducts: Product[] = new Array();
  col = 2;
   
  constructor(private router:Router) {

    this.products.push(new Product("Sandwhich", "100", "sandwich.jpg", "description"))
    this.products.push(new Product("Wrap", "120", "wrap.jpg", "description"))
    this.products.push(new Product("Pizza", "300", "pizza.jpg", "description"))
    this.products.push(new Product("Ice Cream", "150", "icecream.jpg", "description"))

  }


  getImageURL(imageName) {
    return 'assets/images/' + imageName
  }

  onResize(event) {

    const element = event.target.innerWidth;
    console.log(element);

    if (element < 750) {
      this.col = 1;
    } else
      this.col = 2;
  }

  addToCart(product: Product) {
    const index = this.cartProducts.indexOf(product)
    if (index == -1) {
      product.selectedQty = 1;
      this.cartProducts.push(product)
    } else {
      product = this.cartProducts[index]
      product.selectedQty = product.selectedQty + 1;
    }

    console.log(JSON.stringify(this.cartProducts))
  }

  removeFromCart(product: Product) {

    const index = this.cartProducts.indexOf(product)
    if (index != -1) {
      product = this.cartProducts[index]
      product.selectedQty = product.selectedQty - 1;
      if (product.selectedQty == 0) {
        this.cartProducts.splice(index, 1)
      }
    }

    console.log(JSON.stringify(this.cartProducts))
  }


  redirect() {

    localStorage.setItem('cart',JSON.stringify(this.cartProducts));
    this.router.navigate(['/ordersummery',1])
  }
}
