import {Product} from "./product.model";

export interface Basket {
   id: string;
   name: string;
   category: string;
   products: Product[];
   costRange: { min: number; max: number };
  // priceRange: string;
   hasUnavailableProducts: boolean;
   lastUpdatedDate: Date;

  // private id: string;
  // private name: string;
  // private category: string;
  // private products: Product[];
  // private costRange: { min: number; max: number };
  // // priceRange: string;
  // private hasUnavailableProducts: boolean;

  // getter and setter


  // get $id(): string {
  //   return this.id;
  // }
  //
  // set $id(value: string) {
  //   this.id = value;
  // }
  //
  // get $name(): string {
  //   return this.name;
  // }
  //
  // set $name(value: string) {
  //   this.name = value;
  // }
  //
  // get $category(): string {
  //   return this.category;
  // }
  //
  // set $category(value: string) {
  //   this.category = value;
  // }
  //
  // get $products(): Product[] {
  //   return this.products;
  // }
  //
  // set $products(value: Product[]) {
  //   this.products = value;
  // }
  //
  // get $costRange(): { min: number; max: number } {
  //   return this.costRange;
  // }
  //
  // set $costRange(value: { min: number; max: number }) {
  //   this.costRange = value;
  // }
  //
  // get $hasUnavailableProducts(): boolean {
  //   return this.hasUnavailableProducts;
  // }
  //
  // set $hasUnavailableProducts(value: boolean) {
  //   this.hasUnavailableProducts = value;
  // }
}
