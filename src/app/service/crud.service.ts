import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Libro } from './Libros';


@Injectable({
  providedIn: 'root'
})
export class CrudService {
  API: string = "http://localhost/libros/";

  constructor(private clienteHttp: HttpClient) {}
    
  AgregarLibro(datoslibro: Libro){
    return this.clienteHttp.post(this.API + "?insertar=1", datoslibro);
    }
   
}
