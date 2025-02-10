import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {childWin} from "../../config/server.config";

const TOKEN_KEY = 'e-store-token';
@Injectable()
export class TokenService {

  constructor(
    private router: Router
  ) { }

  isLoggednIn() {
    return this.getToken() != null;
  }

  signOut() {

    sessionStorage.clear();
    this.router.navigate(['/']);
  }

  public saveToken(token: string) {
    sessionStorage.removeItem(TOKEN_KEY);
    sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }
}
