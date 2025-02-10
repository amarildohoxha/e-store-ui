
import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TranslateService} from '@ngx-translate/core';
import {MatDialog} from '@angular/material/dialog';
import {LoggedUser} from "../../../transport/auth/login.response";
import {TokenService} from "../../services/token.service";
import {AuthService} from "../../services/auth.service";
import {LoginRequest} from "../../../transport/auth/login.request";
import {GenericComponent} from "../../generic/generic.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./../../../assets/scss/main.scss'],
  providers: [TokenService]
})
export class LogInComponent extends GenericComponent implements OnInit, OnDestroy {
  form: FormGroup;
  roles: string[] = [];
  roleNames: string[] = [];
  notificationService: any;
  translate: any;
  userService: any;
  dialogRef: any;
  result: any;


  constructor(
    private dialog: MatDialog,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private tokenService: TokenService,
    private translateService: TranslateService
  ) {
    super();
  }

  ngOnInit() {
    // this.subscriptions.add(this.authService.checkIpAddress()
    //   .subscribe(res => {
    //     this.result = res;
    //   }, error => {
    //     this.fillErrors(error);
    //   }));

    this.form = this.formBuilder.group({
      username: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  onLogin() {
    this.buttonPushed = true;
    if (this.form.valid) {
      const req: LoginRequest = new LoginRequest();
      req.$username = this.form.value.username;
      req.$password = this.form.value.password;
      this.authService.login(req).subscribe(
        data => {
          // if (data.body.accessToken) {
            const lu: LoggedUser = data.body;
            // save token
            this.tokenService.saveToken(lu.accessToken);
            // use preferred language
            // this.translateService.use(lu.preferredLanguage);
            // this.translateService.currentLang = lu.preferredLanguage;
            // store in local storage
            sessionStorage.setItem('loggedUser', JSON.stringify(lu));
            this.router.navigateByUrl(this.route.snapshot.queryParams['returnUrl'] || '/');
          // }
          // else {
          //   const dialogRef = this.dialog.open(ChangePasswordPopupComponent, {disableClose: true});
          //   dialogRef.componentInstance.admin = true;
          //   dialogRef.componentInstance.logIn = true;
          //   dialogRef.componentInstance.id = data.body.id;
          // }
        }, error => {
          this.fillErrors(error);
        }
      );

      // this.tokenService.saveToken('temp_token');
      // sessionStorage.setItem('loggedUser', JSON.stringify(this.fetchDummyUser()));
      // this.router.navigateByUrl(this.route.snapshot.queryParams['returnUrl'] || '/');

    }
  }

  onList() {
    throw new Error('Method not implemented.');
  }

  // private fetchDummyUser(): LoggedUser {
  //   return {
  //     firstName: 'John',
  //     lastName: 'Doe',
  //     username: 'user1',
  //     accessToken: 'temp_token',
  //     preferredLanguage: 'en'
  //   };
  // }


  reloadPage() {
    window.location.reload();
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
