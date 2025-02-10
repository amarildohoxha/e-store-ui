import {Component, Inject, Injectable, ViewEncapsulation} from '@angular/core';
import {DataMessage} from "../../models/data-message.model";
import {MAT_SNACK_BAR_DATA, MatSnackBar, MatSnackBarRef} from "@angular/material/snack-bar";

// @Component({
//   selector: 'ms-custom-snackbar',
//   template: ''
// })
@Injectable({
  providedIn: 'root', // This makes the service available throughout the app
})
export class CustomSnackBarComponent {

  private snackBarRef: MatSnackBarRef<CustomSnackBarHtmlComponent>;

  constructor(public snackBar: MatSnackBar) {
  }

  /**
   * Title might be null, Type = [info, warning, error, success]
   * @param messages
   */
  openSnackBarSequence(messages: Array<DataMessage>) {

    messages.forEach((message, index) => {

      setTimeout(() => {

        this.snackBar.openFromComponent(CustomSnackBarHtmlComponent,
          {
            duration: 5000,
            verticalPosition: 'bottom',
            horizontalPosition: 'end',
            panelClass: ['cs-' + message.$type],
            data: {
              title: message.$title,
              message: message.$content
            }
          }
        );
        this.snackBarRef.instance.snackBarRefCustom = this.snackBarRef;
      }, index * (5000 + 500)); // 500 => timeout between two messages
    });
  }

  openSnackBar(message: string, type: string, title?: string) {
    this.snackBarRef = this.snackBar.openFromComponent(CustomSnackBarHtmlComponent,
      {
        duration: type === 'info' ? 10000 : 5000,
        verticalPosition: 'bottom',
        horizontalPosition: 'end',
        panelClass: ['cs-' + type],
        data: {
          title: title,
          message: message,
          type: type
        }
      }
    );
    this.snackBarRef.instance.snackBarRefCustom = this.snackBarRef;
  }

  openSplitMessageSnackBar(fullMessage: string) {
    const message: string = fullMessage.split('#')[0];
    const type: string = fullMessage.split('#')[1];
    const title: string = fullMessage.split('#')[2];
    this.snackBarRef = this.snackBar.openFromComponent(CustomSnackBarHtmlComponent,
      {
        duration: type === 'info' ? 10000 : 5000,
        verticalPosition: 'bottom',
        horizontalPosition: 'end',
        panelClass: ['cs-' + type],
        data: {
          title: title,
          message: message,
          type: type
        }
      }
    );
    this.snackBarRef.instance.snackBarRefCustom = this.snackBarRef;
  }

}

@Component({
  selector: 'ms-custom-snackbar-html',
  templateUrl: './custom-snackbar.component.html',
  styleUrls: ['./../../../assets/scss/main.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CustomSnackBarHtmlComponent {

  public snackBarRefCustom: MatSnackBarRef<CustomSnackBarHtmlComponent>;
  public type: string = '';

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) {
    this.type = data.type;
  }

  public close() {
    this.snackBarRefCustom.dismiss();
  }
}
