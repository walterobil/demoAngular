import { MaterialModule } from './../material.module';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmenusRoutingModule } from './submenus-routing.module';
import { MenuUsuarioComponent } from './menu-usuario/menu-usuario.component';
import { MenuPaisComponent } from './menu-pais/menu-pais.component';
import { ConsultaEAIaduanasComponent } from '../consulta-eaiaduanas/consulta-eaiaduanas.component';
import { MenuTransaccionesAduanerasComponent } from './menu-transacciones-aduaneras/menu-transacciones-aduaneras.component';

@NgModule({
  declarations: [MenuUsuarioComponent, MenuPaisComponent,
                 ConsultaEAIaduanasComponent, MenuTransaccionesAduanerasComponent],
  imports: [
    CommonModule,
    SubmenusRoutingModule,
    MaterialModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SubmenusModule { }
