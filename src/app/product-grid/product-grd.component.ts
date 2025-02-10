// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { BasketService } from '../services/basket.service';
// import { Basket } from '../models/basket.model';
// import { Product } from '../models/product.model';
//
// @Component({
//   selector: 'app-product-grid',
//   templateUrl: './product-grd.component.ts',
//   styleUrls: ['./../../assets/scss/main.scss']
// })
// export class ProductGridComponent implements OnInit {
//   basket: Basket;
//
//   constructor(
//     private route: ActivatedRoute,
//     private basketService: BasketService
//   ) {}
//
//   ngOnInit(): void {
//     const basketId = this.route.snapshot.paramMap.get('id');
//     if (basketId) {
//       this.basket = this.basketService.getBaskets().find(b => b.id === basketId);
//     }
//   }
//
//   addProduct(): void {
//     const productName = prompt('Enter product name:');
//     const productPrice = parseFloat(prompt('Enter product price:'));
//     if (productName && !isNaN(productPrice)) {
//       const newProduct: Product = {
//         id: new Date().toISOString(),
//         name: productName,
//         price: productPrice,
//         storeAvailability: {} // Fill with actual store data
//       };
//       this.basketService.addProductToBasket(this.basket.id, newProduct);
//     }
//   }
//
//   removeProduct(productId: string): void {
//     this.basketService.removeProductFromBasket(this.basket.id, productId);
//   }
// }
