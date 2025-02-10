import {Injectable} from '@angular/core';

import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {InterceptorErrorHandler} from './interceptor-error.component';
import {Observable} from 'rxjs';
import {TokenService} from "../../services/token.service";
import {LoggedUser} from "../../../transport/auth/login.response";
import {TranslateService} from "@ngx-translate/core";

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class ServiceInterceptor implements HttpInterceptor {

  constructor(
    private tokenService: TokenService,
    private translateServce: TranslateService,
    private interceptorErrorHandler: InterceptorErrorHandler
  ) {
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    let authReq: HttpRequest<any>;

    const headerSettings: { [name: string]: string | string[]; } = {};
    headerSettings['Content-Type'] = 'application/json';
    const lu: LoggedUser = JSON.parse(sessionStorage.getItem('loggedUser'));
    // headerSettings['Accept-Language'] =  lu ? lu.preferredLanguage : 'en';
    headerSettings['Accept-Language'] =  this.translateServce.currentLang ? this.translateServce.currentLang : 'el';
    const token = this.tokenService.getToken();

    if (token != null) {
      headerSettings[TOKEN_HEADER_KEY] = 'Bearer ' + token;
    }

    const basicHeader = new HttpHeaders(headerSettings);

    authReq = req.clone({
      headers: basicHeader
    });

    return next.handle(authReq).pipe(tap((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        if (event.body.messages) {
          for (const msg of event.body.messages) {
            console.log(msg);
          }
        }
      }
    }, (err: any) => {
      this.interceptorErrorHandler.handleError(err);
    }));

  }

}
