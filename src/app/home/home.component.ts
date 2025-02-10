import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {ProductRequest} from "../requests/product.request";
import {TranslateService} from "@ngx-translate/core";
import {NavigationEnd, Router} from "@angular/router";
import {BasketService} from "../services/basket.service";
import {StoreService} from "../services/store.service";
import {Subscription} from "rxjs";
import {MatSidenav} from "@angular/material/sidenav";
import {MediaObserver} from "@angular/flex-layout";
import {LoggedUser} from "../../transport/auth/login.response";
import {TokenService} from "../services/token.service";
import {EKalathiService} from "../services/e-kalathi.service";
import {GenericComponent} from "../generic/generic.component";

@Component({
  selector: 'app-main',
  templateUrl: './home.component.html',
  styleUrls: ['./../../assets/scss/main.scss'],
  providers: [StoreService, TokenService, EKalathiService]
})
export class HomeComponent extends GenericComponent implements OnInit {
  favoriteProducts = [
    { name: 'Μπανάνες Εισαγωγής', price: 1.48, availability: 10, type: 'Φρούτα', image: 'assets/images/products/bananas.jpg' },
    { name: 'Μήλα Εισαγωγής', price: 2.48, availability: 5, type: 'Φρούτα', image: 'assets/images/products/apples.jpg' },
    { name: 'Κατσέλη Απλόχωμο ολικής ψωμί για τοστ', availability: 8, price: 1.53, type: 'Είδη Αρτοζαχαροπλαστείου', image: 'assets/images/products/bread.jpg' }
  ];

  products = [
    { name: 'Μπανάνες Εισαγωγής', price: 1.48, availability: 10, type: 'Φρούτα', image: 'assets/images/products/bananas.jpg' },
    { name: 'Μήλα Εισαγωγής', price: 2.48, availability: 5, type: 'Φρούτα', image: 'assets/images/products/apples.jpg' },
    { name: 'Κατσέλη Απλόχωμο ολικής ψωμί για τοστ', availability: 8, price: 1.53, type: 'Είδη Αρτοζαχαροπλαστείου', image: 'assets/images/products/bread.jpg' },
    { name: 'Μπανάνες Εισαγωγής', price: 1.48, availability: 10, type: 'Φρούτα', image: 'assets/images/products/bananas.jpg' },
    { name: 'Μήλα Εισαγωγής', price: 2.48, availability: 5, type: 'Φρούτα', image: 'assets/images/products/apples.jpg' },
    { name: 'Κατσέλη Απλόχωμο ολικής ψωμί για τοστ', availability: 8, price: 1.53, type: 'Είδη Αρτοζαχαροπλαστείου', image: 'assets/images/products/bread.jpg' },
    { name: 'Μπανάνες Εισαγωγής', price: 1.48, availability: 10, type: 'Φρούτα', image: 'assets/images/products/bananas.jpg' },
    { name: 'Μήλα Εισαγωγής', price: 2.48, availability: 5, type: 'Φρούτα', image: 'assets/images/products/apples.jpg' },
    { name: 'Κατσέλη Απλόχωμο ολικής ψωμί για τοστ', availability: 8, price: 1.53, type: 'Είδη Αρτοζαχαροπλαστείου', image: 'assets/images/products/bread.jpg' },
    // Add more products as needed
  ];

  public request: ProductRequest = new ProductRequest();
  public currentLanguage: string = 'Greek';
  public cartsCount: number = 0;
  public sidenavOpen: boolean = false;
  public isMobile: boolean = false;
  public sidenavMode: string = 'side';
  public loggedUser: any = null;
  public notificationCount: number = 2;
  public isLogged: boolean = false;
  @ViewChild('sidenav')
  public sidenav: MatSidenav | any;

  itemsPerPage = 8;
  currentPage = 1;

  constructor(private translate: TranslateService,
              public router: Router,
              public storeService: StoreService,
              private media: MediaObserver,
              private tokenService: TokenService,
              public basketService: BasketService) {
    super();
    this.loggedUser = JSON.parse(sessionStorage.getItem('loggedUser'));
    this.currentLanguage = this.translate.currentLang;
    this.request.$category = 'asc'
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event: any) {
    this.storeService.$screenHeight = window.innerHeight;
    this.storeService.$screenWidth = window.innerWidth;
  }

  ngOnInit() {

    this.loggedUser = JSON.parse(sessionStorage.getItem('loggedUser'));
    // To be deleted after is for test
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });

    this.subscriptions.add(this.media.asObservable().subscribe((change) => {
        if (this.media.isActive('xs') || this.media.isActive('sm')) {
          this.isMobile = true;
          this.sidenavMode = 'over';
          console.log(this.isMobile);
          console.log(this.sidenavMode);
        } else {
          this.isMobile = false;
          this.sidenavMode = 'side';
          this.sidenavOpen = false;
          console.log(this.isMobile);
          console.log(this.sidenavMode);
        }
      }
    ));
  }

  get paginatedProducts() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.products.slice(startIndex, startIndex + this.itemsPerPage);
  }

  onPageChange(page: number) {
    this.currentPage = page;
  }

  onChangeLanguage(language: string) {
    this.currentLanguage = language;
    this.translate.use(language)
  }


    onLogout() {
      sessionStorage.removeItem('loggedUser');
      this.tokenService.signOut();
      this.loggedUser = null;
    }

  onLogin() {
    this.router.navigate(['/login'])
  }

  onHelp() {
    this.router.navigate(['/online-help'])
  }

  toggleSidenav() {
    this.sidenavOpen = !this.sidenavOpen;
    this.sidenav.toggle();
  }

  protected readonly length = length;
}
