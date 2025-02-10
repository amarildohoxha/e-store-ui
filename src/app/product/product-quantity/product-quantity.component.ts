import { Component, OnInit, Input } from '@angular/core';
import {Product} from "../../models/product.model";
import {BasketService} from "../../services/basket.service";
import {Basket} from "../../models/basket.model";
@Component({
  selector: 'product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./../../../assets/scss/main.scss']
})
export class ProductQuantityComponent{

  @Input('product') product: Product;
  @Input('basket') basket: Basket;

  // @Input('shopping-cart') shoppingCart: ShoppingCart;
  basketProduct: any;

  constructor(public basketService: BasketService) { }

  ngOnInit() {
    // this.basketProduct = this.basketService.getProduct(this.basket, this.product);
    this.basketProduct = this.basketService.getProductById(this.basket.id, this.product.id);
  }

  addToCart() {
    // this.cartService.addToCart(this.product);
    // this.product.quantity++;
    this.basketProduct.quantity++;
  }

  removeFromCart() {
    // this.cartService.removeFromCart(this.product)
    // this.product.quantity--;
    this.basketProduct.quantity--;
    if (this.basketProduct.quantity < 1) {
      this.basketService.removeProductFromBasket(this.basket.id, this.product.id)
      console.log(this.basket);
      // this.basketService.clearBasket(this.basket.id);
    }
    // this.basketProduct.quantity--;
  }

}
