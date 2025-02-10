import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProductComponent} from "./product/product.component";
import {AppSideRegisterComponent} from "./authentication/register/register.component";
import {AuthGuard} from "./authentication/auth.guard";
import {ProductInformationComponent} from "./product/product-information/product-information.component";
import {OnlineHelpComponent} from "./online-help/online-help.component";
import {LogInComponent} from "./authentication/login/login.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        // path: 'products',
        path: '',
        component: ProductComponent,
      },
      // {
      //   path: 'carts',
      //   component: CartComponent,
      //   canActivate: [AuthGuard]
      // },
      {
        path: 'online-help',
        component: OnlineHelpComponent,
      },
      {
        path: 'product-information/:id',
        component: ProductInformationComponent,
      }

    ]
  },
  {
    path: 'login',
    component: LogInComponent
  },
  {
    path: 'register',
    component: AppSideRegisterComponent
  },
  // {
  //   path: 'authentication',
  //   loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
