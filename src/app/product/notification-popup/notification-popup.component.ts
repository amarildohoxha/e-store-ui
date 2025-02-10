import { Component } from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-notification-popup',
  templateUrl: './notification-popup.component.html',
  styleUrls: ['./../../../assets/scss/main.scss']
})
export class NotificationPopupComponent {
  isOpen = true;
  selectedSize = 'any';
  priceDropEnabled = false;
  price = 32;
  availabilityChangeEnabled = false;
  newReviewsEnabled = false;

  constructor(private dialogRef: MatDialogRef<NotificationPopupComponent>) {
  }

  closePopup() {
    this.dialogRef.close();
  }

  savePreferences() {
    const preferences = {
      size: this.selectedSize,
      priceDropEnabled: this.priceDropEnabled,
      price: this.price,
      availabilityChangeEnabled: this.availabilityChangeEnabled,
      newReviewsEnabled: this.newReviewsEnabled
    };
    this.dialogRef.close(preferences)
    console.log('Preferences saved:', preferences);
    alert('Preferences saved!');
  }
}
