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

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Persona[]>('http://localhost:3000/ListaPersonas')
      .subscribe({
        next: (data) => {
          this.personas = data;
          this.isLoading = false;
        },
        error: (error) => {
          console.error('Error al obtener los datos:', error);
          this.isLoading = false;
          this.hasError = true;
        }
      });
  }
}
/*
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eaiconsultas-declaraciones',
  templateUrl: './eaiconsultas-declaraciones.component.html',
  styleUrls: ['./eaiconsultas-declaraciones.component.css']
})
export class EAIConsultasDeclaracionesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
  
*/
