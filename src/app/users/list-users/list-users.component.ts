import { User } from './../user';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ApiUsersService } from '../api-users.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmComponent } from 'src/app/comun/dialogs/confirm/confirm.component';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
})
export class ListUsersComponent implements OnInit {

  usuarioData: any = [];
  dataSource!: MatTableDataSource<User>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = ['name', 'email', 'opciones'];

  constructor(
    private usuarioApi: ApiUsersService,
    private dialog: MatDialog,
    ) {
    this.usuarioApi.getUsuarios().subscribe(data => {
      this.usuarioData = data;
      this.dataSource = new MatTableDataSource<User>(this.usuarioData);
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
        if (this.usuarioData.length>0)
          {
            this.dataSource.paginator._intl.itemsPerPageLabel="Registros por página";
          }
      }, 0);
    });

  }

  ngOnInit() {  }

  deleteUsuario(index: number, e: { id: number; name: string;}){
    this.dialog.open(ConfirmComponent, {
      data: {
        message: `¿Está seguro de eliminar el usuario "${e.name}"?`
      }
    })
    .afterClosed()
    .subscribe((confirm: Boolean) => {
      if (confirm)
      {
        this.usuarioApi.deleteUsuario(e.id).subscribe(res => {
          const data = this.dataSource.data;
          data.splice((this.paginator.pageIndex * this.paginator.pageSize) + index, 1);
          this.dataSource.data = data;
        });
      }
    });
  }
}
