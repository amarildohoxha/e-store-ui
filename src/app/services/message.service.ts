import {Injectable} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {DataMessage} from "../models/data-message.model";

@Injectable()
export class MessageService {

  private options: Map<string, any> = new Map<string, any>();
  private optionsSnack: any = {
    timeOut: 12000,
    extendedTimeOut: 12000,
    positionClass: 'toast-bottom-right',
    preventDuplicates: true,
    newestOnTop: false,
    maxOpened: 10,
    progressBar: true
  };
  private optionsNoTimeSnack: any = {
    timeOut: 0,
    extendedTimeOut: 0,
    positionClass: 'toast-bottom-right',
    preventDuplicates: true,
    newestOnTop: false,
    maxOpened: 10,
    progressBar: false
  };
  private optionsDialog: any = {
    timeOut: 0,
    extendedTimeOut: 0,
    positionClass: 'toast-center-center',
    preventDuplicates: true,
    newestOnTop: false,
    maxOpened: 10,
    progressBar: false,
    closeButton: true,
    tapToDismiss: false
  };

  constructor(private toastr: ToastrService) {
    this.options.set('SNACK', this.optionsSnack);
    this.options.set('NO_TIME_SNACK', this.optionsNoTimeSnack);
    this.options.set('DIALOG', this.optionsDialog);
  }

  public showMessage(message: DataMessage) {
    switch (message.$type) {
      case 'success': {
        this.toastr.success(message.$content, message.$title, this.options.get(message.$display));
        break;
      }
      case 'error': {
        this.toastr.error(message.$content, message.$title, this.options.get(message.$display));
        break;
      }
      case 'info': {
        this.toastr.info(message.$content, message.$title, this.options.get(message.$display));
        break;
      }
      case 'warning': {
        this.toastr.warning(message.$content, message.$title, this.options.get(message.$display));
        break;
      }
      default: {
        break;
      }
    }
  }

}
