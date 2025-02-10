import {ErrorHandler, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { PaginationComponent } from './templates/pagination.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';

// Angular Material Modules
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from "@angular/material/select";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatSliderModule } from "@angular/material/slider";
import { MatCheckboxModule } from "@angular/material/checkbox";
import {AppSideRegisterComponent} from "./authentication/register/register.component";
import {LogInComponent} from "./authentication/login/login.component";
import {MatDialogModule} from "@angular/material/dialog";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatListModule} from "@angular/material/list";
import {NotificationPopupComponent} from "./product/notification-popup/notification-popup.component";
import {ProductInformationComponent} from "./product/product-information/product-information.component";
import {StoreComponent} from "./store/store.component";
import {ProductCardComponent} from "./product/product-card/product-card.component";
import {ProductQuantityComponent} from "./product/product-quantity/product-quantity.component";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {ManageCartsPopupComponent} from "./product/manage-carts-popup/manage-carts-popup.component";
import {CustomSnackBarHtmlComponent} from "./helper/custom-snackBar/custom-snackbar.component";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {CarouselComponent} from "./carousel/carousel.component";
import {LineChartComponent} from "./am-charts/line-chart/line-chart.component";
import {OnlineHelpComponent} from "./online-help/online-help.component";
import {MatTabsModule} from "@angular/material/tabs";
import {
  MatSidenavModule
} from "@angular/material/sidenav";
import {GenericComponent} from "./generic/generic.component";
import {InterceptorErrorHandler} from "./authentication/interceptor/interceptor-error.component";
import {ServiceInterceptor} from "./authentication/interceptor/interceptor.component";
import {TokenService} from "./services/token.service";
import {StoreService} from "./services/store.service";
import {BasketService} from "./services/basket.service";
import {EKalathiService} from "./services/e-kalathi.service";
import {AuthService} from "./services/auth.service";
import {ToastrModule} from "ngx-toastr";
import {MessageService} from "./services/message.service";
import {SortingComponent} from "./sorting/sorting.component";
export function HttpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    FooterComponent,
    HeaderComponent,
    PaginationComponent,
    GenericComponent,
    SliderComponent,
    AppSideRegisterComponent,
    NotificationPopupComponent,
    ProductInformationComponent,
    StoreComponent,
    ProductCardComponent,
    ProductQuantityComponent,
    ManageCartsPopupComponent,
    CustomSnackBarHtmlComponent,
    CarouselComponent,
    LineChartComponent,
    OnlineHelpComponent,
    LogInComponent,
    SortingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 12000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      newestOnTop: true,
      maxOpened: 10,
      progressBar: true
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpTranslateLoader,
        deps: [HttpClient]
      },
      isolate: false
    }),
    FlexLayoutModule,
    MatSlideToggleModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatCardModule,
    MatExpansionModule,
    FormsModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatCheckboxModule,
    MatDialogModule,
    MatToolbarModule,
    MatListModule,
    CommonModule,
    DragDropModule,
    MatSnackBarModule,
    MatTabsModule,
    MatSidenavModule,
  ],
  providers: [
    ServiceInterceptor,
    InterceptorErrorHandler,
    TokenService,
    StoreService,
    BasketService,
    EKalathiService,
    MessageService,
    {provide: HTTP_INTERCEPTORS, useClass: ServiceInterceptor, multi:true},
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
