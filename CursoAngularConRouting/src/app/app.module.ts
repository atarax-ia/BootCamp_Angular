import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlumnoComponent } from './alumno/alumno.component';
import {CursoComponent} from "./curso/curso.component";
import {FormsModule} from "@angular/forms";
import {CursoService} from "./services/curso.service";
import { HttpClientModule} from "@angular/common/http";
import { UsuarioComponent } from './usuario/usuario.component';
import {UsuariosService} from "./services/usuarios.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
    AlumnoComponent,
    CursoComponent,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [CursoService, UsuariosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
