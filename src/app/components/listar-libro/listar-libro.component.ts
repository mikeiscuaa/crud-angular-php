import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../service/crud.service';
import { NgFor, NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-listar-libro',
  templateUrl: './listar-libro.component.html',
  styleUrl: './listar-libro.component.css'
})
export class ListarLibroComponent implements OnInit {
  Libros: any;
  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
    this.crudService.ObtenerLibros().subscribe(respuesta => {
      console.log(respuesta);
    })

  }
}
