import {Component, HostListener} from '@angular/core';
import {Subscription} from 'rxjs';

@Component({
  template: ''
})
export class GenericComponent {

  constructor(
  ) { }

  filterOpened = false;
  req: any;
  buttonPushed = false;
  selectedRow: any = null;
  modelList:Array<any> = [];
  apiErrors: any = null;
  subscriptions: Subscription = new Subscription();
  showSpinner = true;
  enableKeyEvent = true;
  response: any;

  // Method to cut the specific records by id from 'look-up' tables
  protected static CutSpecificRecord(list: any, ids: Array<number>) {
    const newList = [];
    for (const l of list) {
      if (!ids.includes(l.id)) {
        newList.push(l);
      }
    }
    return newList;
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (this.enableKeyEvent === true) {
      if (this.modelList.length > 0) {
        if (event.key === 'ArrowUp') {
          this.move(true);
        } else if (event.key === 'ArrowDown') {
          this.move(false);
        }
      }
    } else {
      event.preventDefault();
    }
  }

  private move(isUp: boolean) {
    for (let i = 0; i < this.modelList.length; i++) {
      if (this.modelList[i].id === this.selectedRow.id) {
        if (isUp) {
          // if first so assign the last
          if (i === 0) {
            this.selectedRow = this.modelList[this.modelList.length - 1];
          } else {
            this.selectedRow = this.modelList[i - 1];
          }
        } else {
          // if last so assign the first
          if (i === this.modelList.length - 1) {
            this.selectedRow = this.modelList[0];
          } else {
            this.selectedRow = this.modelList[i + 1];
          }
        }
        break;
      }
    }
  }

  protected fillErrors(resError: any): any {
    if (resError.error) {
      this.apiErrors = {
        errors: resError.error.errors,
        fieldErrors: resError.error.fieldErrors
      };
      return this.apiErrors;
    } else {
      return null;
    }
  }

  invalidHighlight(namefield: any): any {
    if (this.apiErrors && this.apiErrors.fieldErrors) {
      for (const data of this.apiErrors.fieldErrors) {
        if (data.field === namefield) {
          return 'invalidInputHighlight';
        }
      }
    }
    return 'mat-select';
  }
}
