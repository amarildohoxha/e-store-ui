import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {Product} from "../../models/product.model";
import {Validators} from "@angular/forms";
import {Basket} from "../../models/basket.model";
import {BasketService} from "../../services/basket.service";
import {Router} from "@angular/router";
import {CustomSnackBarComponent} from "../../helper/custom-snackBar/custom-snackbar.component";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-manage-carts',
  templateUrl: './manage-carts-popup.component.html',
  styleUrls: ['./../../../assets/scss/main.scss']
})
export class ManageCartsPopupComponent implements OnInit {

  public product: Product;
  public baskets: Array<Basket> = [];
  public selectedBasket: any;

  constructor(private dialogRef: MatDialogRef<ManageCartsPopupComponent>,
              private router: Router,
              private translateService: TranslateService,
              public snackBar: CustomSnackBarComponent,
              private basketService: BasketService) {
  }

  ngOnInit() {
    this.baskets = this.basketService.getBaskets();
  }

  onSelectBasket(basket: any) {
    if (this.selectedBasket?.id !== basket.id) {
      this.selectedBasket = basket;
    }

  }

  onSave() {
    if (this.selectedBasket) {
      this.basketService.addProductToBasket(this.selectedBasket.id, this.product)
      this.snackBar.openSnackBar(this.translateService.instant('popup.manage-carts.successful-addition'), 'success');
      this.dialogRef.close();
    }
  }

  onViewCart(basket: any) {
    this.dialogRef.close();
    this.router.navigate(['/carts/cart-details', basket.id])
  }


  closePopup() {
    this.dialogRef.close();
  }
}
