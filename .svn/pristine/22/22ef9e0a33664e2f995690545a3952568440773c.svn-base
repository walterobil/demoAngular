import { Injectable, NgZone } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MessageComponent } from './message.component';
import { Router } from '@angular/router';
import { ErrorResponse } from '../../interceptors/error/error-response';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private opened = false;

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private ngZone: NgZone
    ) { }

  openDialog(title: string, message: string, errorRes?: ErrorResponse, status?: number): void {
    if (!this.opened) {
      this.opened = true;
      const dialogRef = this.dialog.open(MessageComponent, {
        data: { title, message, errorRes, status },
        /*maxHeight: "100%",
        width: "540px",
        maxWidth: "100%",*/
        disableClose: true,
        hasBackdrop: true
      });

      dialogRef.afterClosed().subscribe(() => {
        this.opened = false;
        /**
         * Navega hacia otra ruta para activar el guard y validar si tiene token de acceso
         */
        if (errorRes && errorRes.developerMessage && errorRes.developerMessage==="invalid_token")
        {
          window.location.href=window.location.href;
        }
      });
    }
  }

}
