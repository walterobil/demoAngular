import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html'
})
export class ConfirmComponent {

  title: string;
  cancelText: string;
  confirmText: string;
  message: string;

  constructor(
    public dialogo: MatDialogRef<ConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
      cancelText: string,
      confirmText: string,
      message: string,
      title: string
    }) {
      this.cancelText=data.cancelText?data.cancelText:"No";
      this.confirmText=data.confirmText?data.confirmText:"Si";
      this.title=data.title?data.title:"Confirmación";
      this.message=data.message?data.message:"¿Está seguro de realizar la operación?";
    }

    cancel(): void {
      this.dialogo.close(false);
    }
    confirm(): void {
      this.dialogo.close(true);
    }
}
