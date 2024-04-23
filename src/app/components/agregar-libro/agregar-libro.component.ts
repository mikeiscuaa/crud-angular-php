import { Component } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import {Route, Router } from '@angular/router';
// importar el servicio de crud

@Component({
  selector: 'app-agregar-libro',
  templateUrl: './agregar-libro.component.html',
  styleUrl: './agregar-libro.component.css'
})
export class AgregarLibroComponent {
  // Recolectamos los datos desde el 
  formularioDeLibros: FormGroup;

  constructor(public formulario:FormBuilder){
    this.formularioDeLibros=this.formulario.group({
      isbn:[''],
      titulo:[''],
      autor:[''],
      anio:[''],
      editorial:['']
    });
  }
  enviarDatos(){
    console.log("Presionaste el boton enviar datos, quieres enviar datos?");
    console.log(this.formularioDeLibros.value);

  }
}

