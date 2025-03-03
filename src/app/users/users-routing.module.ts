import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorizationGuard } from '../comun/guards/authorization.guard';

import { CruUsersComponent } from './cru-users/cru-users.component';
import { ListUsersComponent } from './list-users/list-users.component';

const routes: Routes = [
  {
  path: '', canActivateChild: [AuthorizationGuard],
  children:
  [
    { path: 'add-usuario', component: CruUsersComponent },
    { path: 'edit-usuario/:id', component: CruUsersComponent },
    { path: 'view-usuario/:id', component: CruUsersComponent },
    { path: 'list-usuario', component: ListUsersComponent },
  ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
