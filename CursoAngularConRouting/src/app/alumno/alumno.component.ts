import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Alumno} from "./alumno";
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {
  title = 'Alumno componente creado: segunda version';

  public nombre_ex = "Federico";
  public nombre: string;
  public edad: number;
  public matriculado: boolean;
  public notasParcial: Array<number> = [10, 8, 7];

  public alu: Array<Alumno>;

  public parametro: string = '';

  @Input() idCurso: string = '';

  @Output() nuevoEvento = new EventEmitter<string>();

  constructor(private _route: ActivatedRoute, private _router: Router) {  // Inicializador de variables
    this.nombre = "Antonio";
    this.edad = 25;
    this.matriculado = false;
    this.alu = [new Alumno("Pepe"), new Alumno("Juan")]
    console.log(this.edad);
  }

  ngOnInit(): void {   // Código que se ejecuta al cargar el componente
    this._route.params.forEach( s => {
      this.parametro = s.valueOf().toString();
    });
    console.log(this.parametro);
    this.cambiarEdad();
    console.log(this.edad);
  }

  cambiarEdad(): void {
    this.edad = 29;
  }

  cambiarMatricula(estado: boolean): void {
    this.matriculado = estado;
    this.nuevoEvento.emit("Esto es una prueba");
  }

  addAlumno(nombre: string) {
    this.alu.push(new Alumno(nombre));
  }
}
