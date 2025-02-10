import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {NotificationPopupComponent} from "../notification-popup/notification-popup.component";
import {Product} from "../../models/product.model";
import {BasketService} from "../../services/basket.service";
import {Basket} from "../../models/basket.model";
import {ManageCartsPopupComponent} from "../manage-carts-popup/manage-carts-popup.component";
import {CustomSnackBarComponent} from "../../helper/custom-snackBar/custom-snackbar.component";
import {TokenService} from "../../services/token.service";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./../../../assets/scss/main.scss'],
  providers: [TokenService]
})
export class ProductCardComponent {
  @Input() product: any;
  @Input() basket: Basket;
  @Input() showAddToCart: boolean = true;
  @Input() showActions: boolean = true;
  @Input() showDeleteButton: boolean = false;

  @Output() emitDeleteProduct: EventEmitter<any> = new EventEmitter<any>();

  public isLogged: boolean = false;

  constructor(private dialog: MatDialog,
              private router: Router,
              public snackBar: CustomSnackBarComponent,
              private tokenService: TokenService,
              public basketService: BasketService) {

  }

  ngOnInit() {
// console.log(this.product);
    console.log(this.basket);
    this.isLogged = this.tokenService.isLoggednIn();
  }

  onAddNotification(product: any) {
    const dialogRef = this.dialog.open(NotificationPopupComponent, {
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if (result) {
        product.notify = true;
      }
    });
  }

  onSelectCart(product: any) {
    const baskets = this.basketService.getBaskets();
    if (baskets && baskets.length > 0) {
      const dialogRef = this.dialog.open(ManageCartsPopupComponent, {
        disableClose: true
      });

      dialogRef.componentInstance.product = product;
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed', result);
        if (result) {
          product.notify = true;
        }
      });
    }
    else {
      this.snackBar.openSnackBar('Unabe to find available Carts, please create a cart and try again', 'error')
    }
  }

  onProductInformation(product: any) {
    // const parsedUrl = new URL(window.location.href);
    // const baseUrl = parsedUrl.origin;
    // console.log(baseUrl);
    // console.log(this.router.url);
    this.router.navigate(['/product-information', product.id])
  }

  addToCart() {
    this.basketService.addProductToBasket(this.basket.id, this.product);
  }

  removeProduct() {
    // this.basketService.removeProductFromBasket(this.basket.id, this.product.id);
    this.emitDeleteProduct.emit(this.product);
}

}
