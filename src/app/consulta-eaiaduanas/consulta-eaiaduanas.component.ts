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
  /*
  exportToExcel1() {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Heroes');

    // Agrega encabezados con estilos
    worksheet.columns = [
      { header: 'ID', key: 'id', width: 10, style: { font: { bold: true }, fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFFFAA00' } }, alignment: { horizontal: 'center' } } },
      { header: 'Nombre', key: 'name', width: 30, style: { font: { bold: true }, fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFFFAA00' } }, alignment: { horizontal: 'center' } } }
    ];

    // Agrega filas con estilos
    this.heroes.forEach(hero => {
      const row = worksheet.addRow(hero);
      row.font = { name: 'Arial', size: 12, bold: false, color: { argb: 'FF000000' } };
      row.alignment = { vertical: 'middle', horizontal: 'center' };
    });

    // Guarda el archivo Excel
    workbook.xlsx.writeBuffer().then((data) => {
      const blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      FileSaver.saveAs(blob, 'heroes.xlsx');
    });
  }
*/
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


