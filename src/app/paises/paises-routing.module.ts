import { ListPaisComponent } from './list-pais/list-pais.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorizationGuard } from '../comun/guards/authorization.guard';

const routes: Routes = [{
  path: '', canActivateChild: [AuthorizationGuard],
  children:
  [
    { path: 'list-pais', component: ListPaisComponent },
  ]
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaisesRoutingModule { }
