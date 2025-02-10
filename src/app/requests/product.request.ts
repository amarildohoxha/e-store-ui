import {GenericRequest} from "../../transport/generic.request";

export class ProductRequest extends GenericRequest{

  private category: string
  private barcode: string
  private fromKM: number = 0;
  private toKM: number = 5;
  private userId: number;
  private offers: boolean = true;


  // getter and setter

  get $userId(): number {
    return this.userId;
  }

  set $userId(value: number) {
    this.userId = value;
  }

  get $category(): string {
    return this.category;
  }

  set $category(value: string) {
    this.category = value;
  }
  get $barcode(): string {
    return this.barcode;
  }

  set $barcode(value: string) {
    this.barcode = value;
  }
  get $fromKM(): number {
    return this.fromKM;
  }

  set $fromKM(value: number) {
    this.fromKM = value;
  }
  get $toKM(): number {
    return this.toKM;
  }

  set $toKM(value: number) {
    this.toKM = value;
  }
  get $offers(): boolean {
    return this.offers;
  }

  set $offers(value: boolean) {
    this.offers = value;
  }
}
