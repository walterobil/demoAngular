import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoadComponent } from './load.component';

@Injectable({
  providedIn: 'root'
})
export class LoadService {

  private opened = false;
  private dialogRef!: MatDialogRef<LoadComponent>;

  constructor(private dialog: MatDialog) { }

  openDialog(): void {
    if (!this.opened) {
      this.opened = true;
      this.dialogRef = this.dialog.open(LoadComponent, {
        data: undefined/*,
        maxHeight: "200%",
        width: "400px",
        maxWidth: "100%"*/,
        disableClose: true,
        hasBackdrop: true
      });

      this.dialogRef.afterClosed().subscribe(() => {
        this.opened = false;
      });
    }
  }

  hideDialog() {
    this.dialogRef.close();
  }

}
