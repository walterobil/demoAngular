import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { MessageService } from 'src/app/comun/dialogs/message/message.service';
import { LoadService } from 'src/app/comun/dialogs/load/load.service';
import { catchError, finalize } from 'rxjs/operators';
import { ErrorResponse } from './error-response';
import { CallbackOauth2Component } from '../../callback-oauth2/callback-oauth2.component';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(
    private errorService: MessageService,
    private loadService: LoadService
  ) {}

  /**
   * Interceptor para ventana de espera de respuesta de la petición
   * y manejo de mensajes de error
   * @param request
   * @param next
   */
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loadService.openDialog();
    return next.handle(request).pipe(
      catchError((htterror: HttpErrorResponse) => {
        let errorMessage!: string;
        let errorRes!: ErrorResponse;
        let status!: number;
        if (htterror.error instanceof ErrorEvent)
        {
            errorMessage=htterror.message;
        }
        else
        {
          errorRes=htterror.error;
          errorMessage=errorRes.userMessage;
          status=htterror.status;
          /**
           * Cuando el error es por token invalido se debe a que la sesión fue cerrada o el token expiró
           * Se limpia la información del token y se redirecciona para volver al guard y obtener nuevo token
           */
          if (status===401
            && htterror.error
            && htterror.error.error
            && htterror.error.error==="invalid_token"
            && localStorage.getItem("guard")
            && localStorage.getItem("guard")==="Authorization")
          {
            errorMessage="Su sesión ha finalizado";
            CallbackOauth2Component.cleanStorageToken();
            errorRes.developerMessage="invalid_token";
            //this.errorService.openDialog("Aviso",errorMessage, errorRes, status);
            window.location.href=window.location.href;
            //return throwError(htterror);
            return throwError("Reiniciando");
          }
        }
        errorMessage=this.getDefaultMessage(errorMessage,status);
        this.errorService.openDialog("Error",errorMessage, errorRes, status);
        return throwError(htterror);
      }),
      finalize(() => {
        this.loadService.hideDialog();
      })
    ) as Observable<HttpEvent<any>>;
  };

  /**
   * Mensaje de error por defecto en base al código de respuesta http
   * @param errorMessage Mensaje de texto capturado
   * @param status codigo de error http
   */
  private getDefaultMessage(errorMessage: string, status: number): string
  {
    let errorMsg=errorMessage;
    /**
     * Si hay mensaje de error lo devuelve para ser mostrado
     * Si no hay mensaje definido coloca alguno por defecto en base al status
     */
    if (errorMsg)
    {
      return errorMsg;
    }
    /**
     * Si el status es 0 no tiene conexión a internet
     */
    if (status===0)
    {
      return "Sin conexión";
    }
    /**
     * Si el error no es por token invalido solo se muestra error de acceso no autorizado
     */
    else if (status===401)
    {
      return "Acceso no autorizado"
    }
    /**
     * Servicio no existe
     */
    else if (status===404)
    {
      return "No se encuentra la ruta solicitada"
    }
    /**
     * Servicio no existe
     */
    else if (status===502)
    {
      return "Servicio solicitado no es válido"
    }
    /**
     * Servicio no está disponible temporalmente
     */
    else if (status===503)
    {
      return "Servicio no disponible, por favor intente en unos segundos"
    }
    /**
     * Tiempo de respuesta excedido, la petición demora demasiado en responder
     */
    else if (status===504)
    {
      return "La operación ha demorado demasiado, por favor espere unos segundos y verifique si se completó"
    }
    else
    {
      return "Error desconocido";
    }
  }
}
