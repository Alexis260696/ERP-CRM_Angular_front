import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GLOBAL } from './GLOBAL'; // Archivo con la URL base de la API

@Injectable({
  providedIn: 'root' // Hace que el servicio esté disponible en toda la aplicación
})
export class TestService {

  public url = GLOBAL.url; // Guarda la URL base de la API

  constructor(private _http: HttpClient) {
    console.log(this.url); // Muestra la URL base en la consola
  }

  prueba_test(): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.get(this.url + 'prueba_test', { headers: headers });
  }
}
