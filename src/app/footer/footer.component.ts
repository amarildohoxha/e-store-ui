import {Component, HostListener, Inject} from '@angular/core';
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./../../assets/scss/main.scss']
})
export class FooterComponent {
  title = 'kalathi-public-pages-ui';
  windowScrolled: boolean;
  constructor(@Inject(DOCUMENT) private document: Document) {}
  // @HostListener("window:scroll", [])
  //
  // onWindowScroll() {
  //   if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 300) {
  //     this.windowScrolled = true;
  //   }
  //   else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
  //     this.windowScrolled = false;
  //   }
  // }

  scrollToTop(): void {
    // window.scrollTo(0, 0);
    return this.document.body.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'start'
    });
  }


    // scrollToTop() {
  //   (function smoothscroll() {
  //
  //     var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
  //
  //     if (currentScroll > 0) {
  //       window.requestAnimationFrame(smoothscroll);
  //       window.scrollTo(0, currentScroll - (currentScroll / 8));
  //     }
  //
  //   })();
  // }

  ngOnInit() {
  }
}
