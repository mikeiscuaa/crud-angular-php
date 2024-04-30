import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../service/crud.service';

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
      this.Libros = respuesta;
    })

  }

  borrarRegistro(iControl: any, isbn: any, titulo: any)
  {
    // console.log(iControl);
    // console.log(isbn)
    // console.log(titulo)
    if(window.confirm("Realmente deseas eliminar el libro con titulo "+titulo)){
      this.crudService.BorrarLibro(isbn).subscribe(respuesta=>{
        // Esto es para actualizar la lista de libros en el template
        this.Libros.splice(iControl,1);
      });
    }
  }

}
