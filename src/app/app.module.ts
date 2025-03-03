import { BrowserModule } from '@angular/platform-browser';
import { ApplicationRef, CUSTOM_ELEMENTS_SCHEMA, ErrorHandler, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ConfirmComponent } from './comun/dialogs/confirm/confirm.component';
import { LoadComponent } from './comun/dialogs/load/load.component';
import { MessageComponent } from './comun/dialogs/message/message.component';
import { CallbackOauth2Component } from './comun/callback-oauth2/callback-oauth2.component';
import { ServiceWorkerModule, SwUpdate } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { GlobalErrorHandler } from './comun/dialogs/message/global-error-handler';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CacheInterceptor } from './comun/interceptors/cache/cache.interceptor';
import { AuthInterceptor } from './comun/interceptors/auth/auth.interceptor';
import { ErrorInterceptor } from './comun/interceptors/error/error.interceptor';
import { concat, interval } from 'rxjs';
import { first } from 'rxjs/operators';
import { SubmenusModule } from './submenus/submenus.module';
import { PaisesModule }  from './paises/paises.module';
import { AduanasModule } from './aduanas/aduanas.module';

@NgModule({
  declarations: [
    AppComponent,
    ConfirmComponent,
    LoadComponent,
    MessageComponent,
    CallbackOauth2Component
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    SubmenusModule,
    PaisesModule,
    AduanasModule,
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CacheInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
  constructor(private updates: SwUpdate,
    private appRef: ApplicationRef,
    /*private snackBar: MatSnackBar*/
    ) {
    this.updateVersion();
    this.checkPeriodicalUpdate();
  }

  /**
   * Metodo para validar si hay actualizaciones de la aplicación de angular
   * este se ejecuta cada 6 horas
   */
  checkPeriodicalUpdate() {
    if (this.updates.isEnabled)
    {
      const appIsStable = this.appRef.isStable.pipe(first(isStable => isStable === true));
      const everyNHours = interval(6 * 60 * 60 * 1000);
      const everyHoursAppIsStable = concat(appIsStable, everyNHours);
      everyHoursAppIsStable.subscribe(() => {
        console.log("Buscando actualizaciones");
        this.updates.checkForUpdate();
      });
    }
  }

  /**
   * Valida si hay una versión disponible de la aplicación de angular
   * Muestra un mensaje al usuario para realizar la actualización
   */
  updateVersion() {
    if (this.updates.isEnabled)
    {
      this.updates.available.subscribe(event => {
        console.log('Nueva versión disponible: ', event.available.hash);
        this.updates.activateUpdate().then(() => document.location.reload());
        /*const snack = this.snackBar.open(`Nueva versión ${event.available.hash}`, 'Actualizar');
        snack.onAction().subscribe(()=>{
          this.updates.activateUpdate().then(() => document.location.reload());
        });*/
      });
      this.updates.activated.subscribe(event => {
        console.log('Actualizada de la versión ', event.previous?.hash, ' a ', event.current.hash);
      });
    }
  }

 }
