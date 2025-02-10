import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {LoginRequest} from "../../transport/auth/login.request";
import {apiPath, serverURL} from "../../config/server.config";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }


  login(req: LoginRequest): Observable<any> {
    return this.http.post(serverURL + apiPath + '/auth/signin', req, {
      observe: 'response',
    });
  }

  checkIpAddress(): Observable<boolean> {
    return this.http.get<boolean>(
      serverURL + apiPath + '/auth/checkIpAddress',
    ).pipe(map((response: boolean) => {
      return response;
    }));
  }

}
