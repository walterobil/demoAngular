import { ErrorHandler, Injectable } from '@angular/core';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
  })
export class GlobalErrorHandler implements ErrorHandler {

  constructor(private errorService: MessageService) {}

  handleError(error: Error) {
    console.error(error);
    this.errorService.openDialog("Error","Error no definido");
  }

}
