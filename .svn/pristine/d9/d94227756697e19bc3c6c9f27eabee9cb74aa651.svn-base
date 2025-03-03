import { User } from './user';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiUsersService {

  endpoint: string = environment.API_URL + '/users';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) { }

  /** Agregar usuario */
  addUsuario(data: User): Observable<any> {
    let API_URL = `${this.endpoint}`;
    return this.http.post(API_URL, data);
  }

  /** Obtener listado de usuario */
  getUsuarios() {
    return this.http.get<User>(`${this.endpoint}?sort=id,asc`);
  }

  /** Obtener el usuario por id */
  getUsuario(id: number): Observable<any> {
    let API_URL = `${this.endpoint}/${id}`;
    return this.http.get<User>(`${API_URL}`, {observe: 'response'});
  }

  /** Actualizar usuario */
  updateUsuario(data: User): Observable<any> {
    let API_URL = `${this.endpoint}`;
    return this.http.patch(API_URL, data, { headers: this.headers });
  }

  /** Borrar usuario */
  deleteUsuario(id: number): Observable<any> {
    var API_URL = `${this.endpoint}/${id}`;
    return this.http.delete(API_URL);
  }
}
