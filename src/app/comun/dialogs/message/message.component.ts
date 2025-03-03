import { TextUtil } from './../../text-util';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ErrorResponse } from '../../interceptors/error/error-response';

@Component({
  templateUrl: './message.component.html'
})
export class MessageComponent {

  detailError: string[][]=[];
  textUtil: TextUtil = new TextUtil;
  titleStyle: string="notice";

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {title: string, message: string, errorRes: ErrorResponse, status: number})
    {
      if (data.errorRes && data.errorRes.detailError)
      {
        this.detailError=Object.entries(data.errorRes.detailError);
      }
    }

  /**
   * En base al estado del error coloca el estilo del dialogo
   * @param status codigo de estado
   */
  getStyleStatus(status?: number)
  {
    if (status && status>=400 && status<500)
    {
      return "warning"
    }
    else if (status && status>=500)
    {
      return "error"
    }
    else
    {
      return "notice"
    }
  }

  /**
   * Muestra el texto completo asociado al código
   * @param code codigo
   */
  getUserText(code: string)
  {
    return TextUtil.getUserText(code);
  }

}
