import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {ILogin} from 'interfaces/login.interface';
import {TokenStorage} from '../token/token.storage';
import {Subscription} from 'rxjs';
import {domainURL} from '../../../data/useful.data';

@Component({
  template: '',
  encapsulation: ViewEncapsulation.None
})

export class LogoutComponent implements OnInit {

  loginMessage: string;
  protected subscriptions: Subscription = new Subscription();

  constructor(
    private router: Router,
    private token: TokenStorage,
  ) {
  }


  ngOnInit() {
    const authUser = <ILogin>JSON.parse(sessionStorage.getItem('authUser'));
    if (authUser) {
      // const idmProvider = authUser.identityProviderId;
      // let logoutUri;
      // if (idmProvider === 5 || idmProvider === 2) {
      //   // cylogin || google
      //   logoutUri = authUser.oidcEndSessionEndpoint + '?id_token_hint=' + authUser.oidcIdToken;
      // } else if (idmProvider === 6 || idmProvider === 7) {
      //   // ked
      //   logoutUri = authUser.oidcEndSessionEndpoint + authUser.oidcClientId + '?url=' + domainURL + '/login';
      // }

      if (sessionStorage.getItem('login-message')) {
        this.loginMessage = sessionStorage.getItem('login-message');
      }
      sessionStorage.clear();
      if (this.loginMessage) {
        sessionStorage.setItem('login-message', this.loginMessage);
      }
      this.token.signOut();

      if (idmProvider !== 1) {
        window.location.href = logoutUri;
      } else {
        this.router.navigate(['/login']);
      }
    } else {
      this.router.navigate(['/login']);
    }
  }

}
