import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CursoComponent} from "./curso/curso.component";
import {AlumnoComponent} from "./alumno/alumno.component";
import {UsuarioComponent} from "./usuario/usuario.component";

const routes: Routes = [
  {path: 'alumno', component: AlumnoComponent},
  {path: 'alumno/:curso', component: AlumnoComponent}, // Definimos un parametro 'curso' que se maneja en alumnoComponent > Params
  {path: 'usuario', component: UsuarioComponent},
  {path: 'usuario/:id', component: UsuarioComponent},
  {path: '', component: CursoComponent},
  {path:'**', component: CursoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
