import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorizationGuard } from '../comun/guards/authorization.guard';

import { ADConsultasDeclaracionesComponent } from './adconsultas-declaraciones/adconsultas-declaraciones.component';
import { EAIConsultasDeclaracionesComponent } from './eaiconsultas-declaraciones/eaiconsultas-declaraciones.component';

const routes: Routes = [{
  path: '', canActivateChild: [AuthorizationGuard],
  children:
  [
    { path: 'adconsultas-declaraciones', component: ADConsultasDeclaracionesComponent },
    { path: 'eaiconsultas-declaraciones', component: EAIConsultasDeclaracionesComponent },
  ]
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AduanasRoutingModule { }