import {Injectable, Injector} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {TokenService} from "../services/token.service";

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(private tokenService: TokenService, private router: Router, public injector: Injector) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (this.tokenService.isLoggednIn()) {
      const loggedUser = JSON.parse(sessionStorage.getItem('loggedUser'));

      if(route.data && route.data['role']) {

        for(const role of loggedUser.roles ) {
          for(const temp of route.data['role']) {
            if ( role === temp) {
              return true;
            }
          }
        }
        this.router.navigate(['']);
      }
      return true;
    }
    this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
    return false;
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(route, state);
  }
}
