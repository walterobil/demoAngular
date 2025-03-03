import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TokenOauth2 } from './token-oauth2';

const ENDPOINT: string = environment.API_URL_SEC + '/tokens';

@Injectable({
  providedIn: 'root'
})
export class Oauth2Service {

  constructor(private http: HttpClient) { }

  /**
   * Obtener el token en base a los parametros redireccionados por el modulo de seguridad
   */
  getToken(code: string, redirect_uri: string, scope: string): Observable<TokenOauth2> {
    let API_URL = `${ENDPOINT}/${code}/${scope}?uri=${redirect_uri}`;
    return this.http.get<TokenOauth2>(`${API_URL}`);
  }

  getNewToken(refreshToken: string): Observable<TokenOauth2> {
    let API_URL = `${ENDPOINT}/new/${refreshToken}`;
    return this.http.get<TokenOauth2>(`${API_URL}`);
  }
}
