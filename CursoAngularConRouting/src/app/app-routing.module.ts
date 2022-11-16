import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CursoComponent} from "./curso/curso.component";
import {AlumnoComponent} from "./alumno/alumno.component";

const routes: Routes = [
  {path: 'alumno', component: AlumnoComponent},
  {path: '', component: CursoComponent},
  {path:'**', component: CursoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
