import { Component, OnInit } from '@angular/core';
import {Alumno} from "../alumno/alumno";
import {Curso} from "./curso";
import { Router, ActivatedRoute, Params } from "@angular/router";
import * as process from "process";
import { CursoService } from "../services/curso.service";
import {ToDo} from "../services/todo";

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

  public curso: any;

  public mensaje: string = 'texto de ejemplo';

  constructor(private _route: Router, private _cursoService: CursoService) {  // Inicializador de variables
    this.c1 = new Curso("Curso_1", false, this.alumnosCurso_1);
    this.c2 = new Curso("Curso_2", false, this.alumnosCurso_2);
    this.listaDeCursos = [this.c1, this.c2];
  }

  ngOnInit(): void {   // Código que se ejecuta al cargar el componente

  }

  alumnoIr(): void {
    this._route.navigate((['/alumno']))
    this._cursoService.mensaje();
    this._cursoService.allToDo().subscribe(((data) => console.log(data)))
  }

  escribirMensaje(valor: string) {
    this.mensaje = valor;
  }
}
