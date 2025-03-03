import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AduanasRoutingModule } from './aduanas-routing.module'; 
import { ADConsultasDeclaracionesComponent } from './adconsultas-declaraciones/adconsultas-declaraciones.component';
import { EAIConsultasDeclaracionesComponent } from './eaiconsultas-declaraciones/eaiconsultas-declaraciones.component';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [ADConsultasDeclaracionesComponent,EAIConsultasDeclaracionesComponent],
  imports: [
    CommonModule,
    AduanasRoutingModule,
    MaterialModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AduanasModule { }