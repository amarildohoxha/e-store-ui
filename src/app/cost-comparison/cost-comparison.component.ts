// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { BasketService } from '../services/basket.service';
// import { Basket } from '../models/basket.model';
// import { Store } from '../models/store.model';
//
// interface StoreCost {
//   store: Store;
//   totalCost: number;
//   availableProducts: number;
// }
//
// @Component({
//   selector: 'app-cost-comparison',
//   templateUrl: './cost-comparison.component.html',
//   styleUrls: ['./../../assets/scss/main.scss']
// })
// export class CostComparisonComponent implements OnInit {
//   basket?: Basket;  // Change to allow undefined
//   storeCosts: StoreCost[] = [];
//   stores: Store[] = [
//     { id: 'store1', name: 'Supermarket A' },
//     { id: 'store2', name: 'Supermarket B' },
//     // Add more stores as needed
//   ];
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
//       if (this.basket) {  // Check if basket is found
//         this.calculateStoreCosts();
//       } else {
//         // Handle the case where the basket is not found
//         console.error('Basket not found');
//       }
//     }
//   }
//
//   calculateStoreCosts(): void {
//     // if (!this.basket) return;  // Guard clause if basket is undefined
//     // this.storeCosts = this.stores.map(store => {
//     //   const totalCost = this.basket.products
//     //     .filter(product => product.storeAvailability[store.id])
//     //     .reduce((acc, product) => acc + product.price, 0);
//     //
//     //   const availableProducts = this.basket.products
//     //     .filter(product => product.storeAvailability[store.id]).length;
//     //
//     //   return {
//     //     store,
//     //     totalCost,
//     //     availableProducts
//     //   };
//     // });
//   }
//
//   sortBy(property: 'store' | 'totalCost' | 'availableProducts'): void {
//     this.storeCosts.sort((a, b) => {
//       if (property === 'store') {
//         return a.store.name.localeCompare(b.store.name);
//       } else {
//         return a[property] - b[property];
//       }
//     });
//   }
// }
