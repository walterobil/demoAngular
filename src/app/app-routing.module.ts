
import { AuthorizationGuard } from './comun/guards/authorization.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CallbackOauth2Component } from './comun/callback-oauth2/callback-oauth2.component';
import { MenuUsuarioComponent } from './submenus/menu-usuario/menu-usuario.component';
import { MenuPaisComponent } from './submenus/menu-pais/menu-pais.component';
import { ConsultaEAIaduanasComponent } from './consulta-eaiaduanas/consulta-eaiaduanas.component';
import { MenuTransaccionesAduanerasComponent } from './submenus/menu-transacciones-aduaneras/menu-transacciones-aduaneras.component';


const routes: Routes = [
  /**
   * Carga la opcion del submódulo de paises en modo peresozo, es decir hasta que se invoca la ruta
   */
   {
    path: 'menu-pais',
    component: MenuPaisComponent,
    canActivate: [AuthorizationGuard],
    children:
    [
      {
        path: '',
        loadChildren: () => import('./paises/paises.module').then(m => m.PaisesModule)
      },
    ]
  },
  /**
   * Carga la opcion del submódulo de usuarios en modo peresozo, es decir hasta que se invoca la ruta
   */
   {
    path: 'menu-usuario',
    component: MenuUsuarioComponent,
    canActivate: [AuthorizationGuard],
    children:
    [
      {
        path: '',
        loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
      },
    ]
  },

  {
    path: 'consulta-eaiaduanas',
    component: ConsultaEAIaduanasComponent,
    canActivate: [AuthorizationGuard],
    children:
    [
      {
        path: '',
        loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
      },
    ]
  },
  {
    path: 'menu-transacciones-aduaneras',
    component: MenuTransaccionesAduanerasComponent,
    canActivate: [AuthorizationGuard],
    children:
    [
      {
        path: '',
        loadChildren: () => import('./aduanas/aduanas.module').then(m => m.AduanasModule)
      },
    ]
  },
  /**
   * Componente de retorno una vez se tenga respuesta del servidor de autorización
   */
  {
    path: 'callback',
    component: CallbackOauth2Component
  },
  /**
   * Rutas que no coincidan o sin ruta se redirige a la ruta raíz
   */
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/'
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
