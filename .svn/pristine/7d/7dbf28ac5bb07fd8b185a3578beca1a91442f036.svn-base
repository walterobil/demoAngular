import { Country } from './country';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiCountriesService {

  endpoint: string = environment.API_URL + '/countries';

  constructor(
    private http: HttpClient
    ) { }

  /** Obtener listado de paises y divisiones */
  getCountries() {
    return this.http.get<Country[]>(`${this.endpoint}?sort=id,asc`);
  }
}
