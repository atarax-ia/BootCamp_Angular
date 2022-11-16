import { Component, OnInit } from '@angular/core';
import {Alumno} from "../alumno/alumno";
import {Curso} from "./curso";

@Component({
  selector: 'curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {
  title = 'Curso componente creado';

  private e: Alumno = new Alumno("Eva");
  private l: Alumno = new Alumno("Luisa");
  private m: Alumno = new Alumno("Maria");

  private a: Alumno = new Alumno("Antonio");
  private j: Alumno = new Alumno("Jose");
  private p: Alumno = new Alumno("Pepe");

  public alumnosCurso_1: Array<Alumno> = [this.e, this.l, this.m];
  public alumnosCurso_2: Array<Alumno> = [this.a, this.j, this.p];

  public c1: Curso;
  public c2: Curso;
  public listaDeCursos: Array<Curso> = [];

  constructor() {  // Inicializador de variables
    this.c1 = new Curso("Curso_1", false, this.alumnosCurso_1);
    this.c2 = new Curso("Curso_2", false, this.alumnosCurso_2);
    this.listaDeCursos = [this.c1, this.c2];
  }

  ngOnInit(): void {   // Código que se ejecuta al cargar el componente

  }
}
