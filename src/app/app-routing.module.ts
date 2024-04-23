import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarLibroComponent } from './components/listar-libro/listar-libro.component';
import { AgregarLibroComponent } from './components/agregar-libro/agregar-libro.component';
import { EditarLibroComponent } from './components/editar-libro/editar-libro.component';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'agregar-libro'},
  {path:'agregar-libro', component:AgregarLibroComponent},
  {path:'listar-libro', component:ListarLibroComponent},
  {path:'editar-libro/:isbn', component:EditarLibroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
