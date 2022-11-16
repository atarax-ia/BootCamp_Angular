import {Alumno} from "../alumno/alumno";

export class Curso {
  public nombre: string;
  public terminado: boolean;
  public listaAlumnos: Array<Alumno>;

  constructor(nombre: string, terminado:boolean, lista: Array<Alumno>) {
    this.nombre = nombre;
    this.terminado = terminado;
    this.listaAlumnos = lista;
  }

}
