import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import {catchError, retry } from "rxjs";
import  { ToDo } from "./todo";

@Injectable()
export class CursoService {

  constructor(private http: HttpClient) {
  }

  public mensaje(): void {
    console.log('Mensaje: en el servicio');
  }

  public allToDo() {
    return this.http.get<Array<ToDo>>('https://jsonplaceholder.typicode.com/users');
  }

}
