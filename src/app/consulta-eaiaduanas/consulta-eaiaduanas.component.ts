import { Component } from '@angular/core';


@Component({
  selector: 'app-consulta-eaiaduanas',
  templateUrl: './consulta-eaiaduanas.component.html',
  styleUrls: ['./consulta-eaiaduanas.component.css']
})
export class ConsultaEAIaduanasComponent {
  displayedColumns: string[] = ['nombre', 'cantidad', 'estado'];
  dataSource = [
    { nombre: 'SAD', cantidad: 30, estado: 'Activo' },
    { nombre: 'DECLARACION', cantidad: 25, estado: 'Inactivo' },
  ];
  heroes  = [
    { id: 11, name: 'Dr Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
  ];
}


