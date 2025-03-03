import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { ListUsersComponent } from './list-users/list-users.component';
import { CruUsersComponent } from './cru-users/cru-users.component';
import { MaterialModule } from '../material.module';


@NgModule({
  declarations: [ListUsersComponent, CruUsersComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MaterialModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UsersModule { }
