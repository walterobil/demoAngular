import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Persona {
  codigo: string;
  nombre: string;
  estatus: string;
}
@Component({
  selector: 'app-eaiconsultas-declaraciones',
  templateUrl: './eaiconsultas-declaraciones.component.html',
  styleUrls: ['./eaiconsultas-declaraciones.component.css']
})

export class EAIConsultasDeclaracionesComponent implements OnInit {
  personas: Persona[] = [];
  isLoading: boolean = true;
  hasError: boolean = false;

  currentPage = 1;
  itemsPerPage = 20;
  paginatedData: any[] = [];
  updatePaginatedData() {
    try {
          const startIndex = (this.currentPage - 1) * this.itemsPerPage;
          this.paginatedData = this.personas.slice(startIndex, startIndex + this.itemsPerPage);
          console.log("paso updatepagina");
        } catch (error) {
          console.error(error);
        } 
    }
   changePage(page: number) {
    try {
      this.currentPage = page;
      this.updatePaginatedData();
      console.log("paso changepage");
    } catch (error) {
      console.error(error);
    }
  }
   get totalPages(): number {
    return Math.ceil(this.personas.length / this.itemsPerPage);
  }
   get pageNumbers(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.http.get<Persona[]>('http://localhost:3000/ListaPersonas')
      .subscribe({
        next: (data) => {
          this.personas = data;
          this.isLoading = false;
          this.updatePaginatedData();
          //this.changePage(this.currentPage);          
        },
        error: (error) => {
          console.error('Error al obtener los datos:', error);
          this.isLoading = false;
          this.hasError = true;
        }
      });

  }
}
