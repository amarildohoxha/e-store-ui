import {Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {Router} from "@angular/router";
import {BasketService} from "../services/basket.service";
import {Subscription} from "rxjs";
import {MediaObserver} from "@angular/flex-layout";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./../../assets/scss/main.scss']
})
export class HeaderComponent implements OnInit {
  title = 'kalathi-public-pages-ui';
  public currentLanguage: string = 'Greek';
  public sidenavOpen: boolean = false;
  public isMobile: boolean = false;
  public sidenavMode: string = 'side';
  private subscriptions: Subscription = new Subscription();
  public notificationCount: number = 2;

  constructor(private translate: TranslateService,
              public router: Router,
              private media: MediaObserver,
              public basketService: BasketService) {
    this.currentLanguage = this.translate.currentLang;
    // this.cartsCount = this.basketService.getBaskets().length;
    // this.router.navigate(['/products'])
  }

  ngOnInit() {
    this.subscriptions.add(this.media.asObservable().subscribe((change) => {
        if (this.media.isActive('xs') || this.media.isActive('sm')) {
          this.isMobile = true;
          this.sidenavMode = 'over';
          console.log(this.isMobile);
          console.log(this.sidenavMode);
        } else {
          this.isMobile = false;
          this.sidenavMode = 'side';
          console.log(this.isMobile);
          console.log(this.sidenavMode);
        }
      }
    ));
  }

  onChangeLanguage(language: string) {
    // if (language === 'el') {
    //   this.currentLanguage = 'Greek';
    // } else {
    //   this.currentLanguage = 'English';
    // }
    this.currentLanguage = language;
    this.translate.use(language)
  }

  onLogin() {
    this.router.navigate(['/login'])
  }
}
