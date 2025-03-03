import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const ENDPOINT = environment.API_URL_SEC + '/tokens';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationGuard implements CanActivate, CanActivateChild {

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
  {
    /**
     * Redirecciona hacia el servicio de seguridad para iniciar el flujo de consentimiento y obtener un token de acceso
     */
    if (environment.seguridad && !localStorage.getItem('accessToken'))
    {
      /**
       * Guarda la la ruta de la pagina a la que se quiere acceder y el tipo de guard
       */
      let tempState=state.url.split("?")[0];
      localStorage.setItem('pageRedirect',tempState);
      localStorage.setItem('guard','Authorization');
      /**
       * Obtiene la ruta de retorno al proyecto, la ruta callback corresponde al componente callback-oauth2
       * Esta se envia como parametro al servicio de seguridad para que posteriormente pueda redireccionar
       * nuevamente hacia el proyecto
       */
      let tempUrl=window.location.href.split('?')[0];
      let indexOf=tempUrl.indexOf(tempState);
      if (indexOf>0)
      {
        tempUrl=tempUrl.substr(0, indexOf);
      }
      tempUrl=tempUrl+'/callback'
      tempUrl=tempUrl.replace('//callback','/callback');
      window.location.href = ENDPOINT+'?uri='+tempUrl;
      return false;
    }
    /**
     * Si ya tiene token de acceso continua hacia la pantalla solicitada
     */
    else
    {
      return true;
    }
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.canActivate(childRoute, state);
  }

}
