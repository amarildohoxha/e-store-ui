import {ErrorHandler, Injectable} from '@angular/core';
import {throwError} from 'rxjs';
import {MessageService} from "../../services/message.service";
import {DataMessage} from "../../models/data-message.model";

@Injectable()
export class InterceptorErrorHandler implements ErrorHandler {

  constructor(
    private messageService: MessageService
  ) {
  }

  handleError(error: any) {

      // Server or connection error happened
      if (!navigator.onLine) {
        // Handle offline error
        this.messageService.showMessage(new DataMessage('No Internet Connection', 'error'));
      } else {

        if (error.error && error.error.message) {
          // Handle Http Error (error.status === 403, 404...)
          this.messageService.showMessage(new DataMessage(error.error.message, 'error'));
        } else {
          this.messageService.showMessage(new DataMessage('An error occurred, please try again later', 'error'));
        }
      }
    // Log the error anyway
    console.error('Other Error: ', error);
    return throwError(error);
  }
}
