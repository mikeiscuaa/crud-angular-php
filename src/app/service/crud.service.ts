import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Libro } from './Libros';
import { DefaultValueAccessor } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class CrudService {
  API: string = "http://localhost/libros/";

  constructor(private clienteHttp: HttpClient) { }

  AgregarLibro(datoslibro: Libro) {
    return this.clienteHttp.post(this.API + "?insertar=1", datoslibro);
  }
  ObtenerLibros() {
    return this.clienteHttp.get(this.API);
  }
  BorrarLibro(isbn: any) {
    return this.clienteHttp.get(this.API + "?borrar=" + isbn);
  }

  ObtenerLibro(isbn: any): Observable<any> {
     return this.clienteHttp.get(this.API+"?consultar="+isbn);
  }

  EditarLibro(isbn:any, datosLibro: any){
    return this.clienteHttp.post(this.API+"?actualizar="+isbn,datosLibro);
  }


}
