// popup.service.ts
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditpopupComponent } from './landing/editpopup/editpopup.component';


@Injectable({
  providedIn: 'root'
})
export class PopupService {
  constructor(private dialog: MatDialog) {}

  openPopup(): void {
    this.dialog.open(EditpopupComponent, {
      width: '400px',
      // Add more configuration options as needed
    });
  }
}
