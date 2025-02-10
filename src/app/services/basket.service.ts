import {Injectable} from '@angular/core';
import {Basket} from '../models/basket.model';
import {Product} from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  private baskets: Basket[] = [];

  constructor() {}

  getBaskets(): Basket[] {
    return this.baskets;
  }

  addBasket(name: string, category: string): Basket {
    const newBasket: Basket = {
      id: new Date().toISOString(),
      name,
      category,
      products: [],
      costRange: { min: 0, max: 0 },
      hasUnavailableProducts: false,
      lastUpdatedDate: new Date()
    };
    this.baskets.push(newBasket);
    return newBasket
  }

  updateBasket(basketId: string, newName: string): void {
    const basket = this.baskets.find(b => b.id === basketId);
    if (basket) {
      basket.name = newName;
    }
  }

  deleteBasket(basketId: string): void {
    this.baskets = this.baskets.filter(b => b.id !== basketId);
  }

  addProductToBasket(basketId: string, product: Product): void {
    const basket = this.baskets.find(b => b.id === basketId);
    if (basket) {
      product.quantity++;
      basket.products.push(product);
      this.updateCostRange(basket);
    }
  }

  removeProductFromBasket(basketId: string, productId: string): void {
    const basket = this.baskets.find(b => b.id === basketId);
    if (basket) {
      basket.products = basket.products.filter(p => p.id !== productId);
      this.updateCostRange(basket);
    }
  }

  updateCostRange(basket: Basket): void {
    const prices = basket.products.map(p => p.price);
    basket.costRange = {
      min: Math.min(...prices),
      max: Math.max(...prices),
    };
    // basket.hasUnavailableProducts = basket.products.some(product =>
    //   Object.values(product.storeAvailability).includes(false)
    // );
  }

  getQuantity(basket: Basket, product: Product) {
    // const bask = this.getBaskets().filter((item) => item.id = basket.id)[0]
    const bask = this.getBaskets().find(item => item.id == basket.id);
    let item = bask?.products.find(item  => item.id == product.id);
    return item ? item.quantity : 0;
  }

  getProduct(basket: Basket, product: Product) {
    if (basket) {
      // const bask = this.getBaskets().filter((item) => item.id = basket.id)[0]
      const bask = this.getBaskets().find(item => item.id == basket.id);
      return bask?.products.find(item => item.id == product.id);
    }
    return null;
  }

  getProductById(basketId: string, productId: string): Product | undefined {
    const basket = this.baskets.find(b => b.id === basketId);
    return basket?.products.find(p => p.id === productId);
  }


    getBasketById(basketId: string): Basket {
    return <Basket>this.baskets.find(b => b.id === basketId);
  }

  clearBasket(basketId: string): void {
    const basket = this.baskets.find(b => b.id === basketId);
    if (basket) {
      basket.products = [];
      this.updateCostRange(basket);
      // this.basketsSubject.next(this.baskets);
    }
  }

  checkProductAvailability(productId: string): boolean {
    // Implement logic to check product availability
    // This could involve checking a separate service or API
    return true;
  }
}




// import { Injectable } from '@angular/core';
// import { Basket } from '../models/basket.model';
// import { Product } from '../models/product.model';
// import { Observable, BehaviorSubject } from 'rxjs';
//
// @Injectable({
//   providedIn: 'root'
// })
// export class BasketService {
//   private baskets: Basket[] = [];
//   private basketsSubject: BehaviorSubject<Basket[]> = new BehaviorSubject<Basket[]>(this.baskets);
//
//   constructor() {}
//
//   getBaskets(): Observable<Basket[]> {
//     return this.basketsSubject.asObservable();
//   }
//
//   addBasket(name: string, category: string): Basket {
//     const newBasket: Basket = {
//       id: new Date().toISOString(),
//       name,
//       category,
//       products: [],
//       costRange: { min: 0, max: 0 },
//       hasUnavailableProducts: false
//     };
//     this.baskets.push(newBasket);
//     this.basketsSubject.next(this.baskets); // Notify subscribers
//     return newBasket;
//   }
//
//   updateBasket(basketId: string, newName: string): void {
//     const basket = this.baskets.find(b => b.id === basketId);
//     if (basket) {
//       basket.name = newName;
//       this.basketsSubject.next(this.baskets);
//     } else {
//       console.error(`Basket with ID ${basketId} not found`);
//     }
//   }
//
//   deleteBasket(basketId: string): void {
//     this.baskets = this.baskets.filter(b => b.id !== basketId);
//     this.basketsSubject.next(this.baskets);
//   }
//
//   addProductToBasket(basketId: string, product: Product): void {
//     const basket = this.baskets.find(b => b.id === basketId);
//     if (basket) {
//       const existingProduct = basket.products.find(p => p.id === product.id);
//       if (existingProduct) {
//         existingProduct.quantity += 1;
//       } else {
//         product.quantity = 1;
//         basket.products.push(product);
//       }
//       this.updateCostRange(basket);
//       this.basketsSubject.next(this.baskets);
//     } else {
//       console.error(`Basket with ID ${basketId} not found`);
//     }
//   }
//
//   removeProductFromBasket(basketId: string, productId: string): void {
//     const basket = this.baskets.find(b => b.id === basketId);
//     if (basket) {
//       basket.products = basket.products.filter(p => p.id !== productId);
//       this.updateCostRange(basket);
//       this.basketsSubject.next(this.baskets);
//     } else {
//       console.error(`Basket with ID ${basketId} not found`);
//     }
//   }
//
//   updateCostRange(basket: Basket): void {
//     const prices = basket.products.map(p => p.price);
//     if (prices.length > 0) {
//       basket.costRange = {
//         min: Math.min(...prices),
//         max: Math.max(...prices)
//       };
//     } else {
//       basket.costRange = { min: 0, max: 0 };
//     }
//   }
//
//   getQuantity(basket: Basket, product: Product): number {
//     const bask = this.baskets.find(b => b.id === basket.id);
//     const item = bask?.products.find(item => item.id === product.id);
//     return item ? item.quantity : 0;
//   }
//
//   getProduct(basket: Basket, product: Product): Product | undefined {
//     const bask = this.baskets.find(item => item.id === basket.id);
//     return bask?.products.find(item => item.id === product.id);
//   }
//
//   getProductById(basketId: string, productId: string): Product | undefined {
//     const basket = this.baskets.find(b => b.id === basketId);
//     return basket?.products.find(p => p.id === productId);
//   }
//
//   clearBasket(basketId: string): void {
//     const basket = this.baskets.find(b => b.id === basketId);
//     if (basket) {
//       basket.products = [];
//       this.updateCostRange(basket);
//       this.basketsSubject.next(this.baskets);
//     }
//   }
//
//   checkProductAvailability(productId: string): boolean {
//     // Implement logic to check product availability
//     // This could involve checking a separate service or API
//     return true;
//   }
//
// }
