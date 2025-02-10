import {Injectable} from "@angular/core";

@Injectable()
export class StoreService {
  private screenHeight: number;
  private screenWidth: number;

  // getter and setter

  get $screenHeight(): string {
    return this.screenHeight + 'px';
  }

  set $screenHeight(value: number) {
    this.screenHeight = value;
  }

  get $screenWidth(): string {
    return this.screenWidth + 'px';
  }

  set $screenWidth(value: number) {
    this.screenWidth = value;
  }
}
