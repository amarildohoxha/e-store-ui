import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ProductRequest} from "../requests/product.request";
import {MatDialog} from "@angular/material/dialog";
import {NotificationPopupComponent} from "./notification-popup/notification-popup.component";
import {Router} from "@angular/router";
import {Product} from "../models/product.model";
import {Subscription} from "rxjs";
import {EKalathiService} from "../services/e-kalathi.service";
import {BasketService} from "../services/basket.service";
import {TokenService} from "../services/token.service";
import {GenericComponent} from "../generic/generic.component";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./../../assets/scss/main.scss'],
  providers: [EKalathiService, TokenService]
})
export class ProductComponent extends GenericComponent implements OnInit, OnDestroy {
  // @Input() product: any;
  @Input() showActions: boolean = false;
  @Input() basket: any;
  public request: ProductRequest = new ProductRequest();
  products = [
    { id: '1', quantity: 0, name: 'Μπανάνες Εισαγωγής', notify: false, price: 1.48, sale: true, oldPrice: 11, favorite: true, availability: 10, type: 'Φρούτα', image: 'assets/images/products/bananas.jpg' },
    { id: '2', quantity: 0, name: 'Μήλα Εισαγωγής', notify: false, price: 2.48, sale: true, oldPrice: 11, favorite: true, availability: 5, type: 'Φρούτα', image: 'assets/images/products/apples.jpg' },
    { id: '3', quantity: 0, name: 'Κατσέλη Απλόχωμο ολικής ψωμί για τοστ', notify: false, sale: false, oldPrice: 11, favorite: false, availability: 8, price: 1.53, type: 'Είδη Αρτοζαχαροπλαστείου', image: 'assets/images/products/bread.jpg' },
    { id: '4', quantity: 0, name: 'Μπανάνες Εισαγωγής', notify: false, sale: false, oldPrice: 11, favorite: true, price: 1.48, availability: 10, type: 'Φρούτα', image: 'assets/images/products/bananas.jpg' },
    { id: '5', quantity: 0, name: 'Μήλα Εισαγωγής', notify: false, sale: false, oldPrice: 11, favorite: true, price: 2.48, availability: 5, type: 'Φρούτα', image: 'assets/images/products/apples.jpg' },
    { id: '6', quantity: 0, name: 'Κατσέλη Απλόχωμο ολικής ψωμί για τοστ', sale: false, oldPrice: 11, favorite: false, availability: 8, price: 1.53, type: 'Είδη Αρτοζαχαροπλαστείου', image: 'assets/images/products/bread.jpg' },
    { id: '7', quantity: 0, name: 'Μπανάνες Εισαγωγής', notify: false, sale: false, oldPrice: 11, favorite: true, price: 1.48, availability: 10, type: 'Φρούτα', image: 'assets/images/products/bananas.jpg' },
    { id: '8', quantity: 0, name: 'Μήλα Εισαγωγής', notify: false, sale: false, oldPrice: 11, favorite: false, price: 2.48, availability: 5, type: 'Φρούτα', image: 'assets/images/products/apples.jpg' },
    { id: '9', quantity: 0, name: 'Κατσέλη Απλόχωμο ολικής ψωμί για τοστ', notify: false, sale: false, oldPrice: 11, favorite: true, availability: 8, price: 1.53, type: 'Είδη Αρτοζαχαροπλαστείου', image: 'assets/images/products/bread.jpg' },
    // Add more products as needed
  ];

  constructor(private dialog: MatDialog,
              private eKalathiService: EKalathiService,
              private tokenService: TokenService,
              private router: Router) {
    super();
    const loggedUser = JSON.parse(sessionStorage.getItem('loggedUser'));

    this.request.$paging.$orderField = 'ID'
    this.request.$paging.$orderDirection = 'asc'
    this.request.$userId = loggedUser?.id;
  }
  ngOnInit() {
    this.onList();
    // this.subscriptions.add(this.eKalathiService.testRequest('Teast').subscribe((res) => {
    //   console.log(res);
    // }));
  }

  onList() {
    if (this.tokenService.isLoggednIn()) {
      const loggedUser = JSON.parse(sessionStorage.getItem('loggedUser'));
      this.request.$userId = loggedUser.id;
      this.subscriptions.add(this.eKalathiService.fetchProductsByUserId(this.request).subscribe (
        res => {
          this.request.$paging.$totalSize = res.totalElements;
          console.log(res);
        }
      ));
    } else {
      this.subscriptions.add(this.eKalathiService.fetchProducts(this.request).subscribe (
        res => {
          this.request.$paging.$totalSize = res.totalElements;
          console.log(res);
        }
      ));
    }
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  onAddNotification(product: any) {
    const dialogRef = this.dialog.open(NotificationPopupComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if (result) {
        product.notify = true;
      }
    });
  }

  onProductInformation(itemId: number) {
    this.router.navigate([this.router.url + 'product-information', itemId])
  }

  onChangePaging(changePaging: any) {
    this.request.$paging = changePaging;
    this.onList();
  }
}
