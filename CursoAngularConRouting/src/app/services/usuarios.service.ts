import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import {catchError, retry } from "rxjs";
import  { User } from "./user";

@Injectable()
export class UsuariosService {

  constructor(private http: HttpClient) {
  }

  public allUsers() {
    return this.http.get<Array<User>>('https://jsonplaceholder.typicode.com/users');
  }

  public findUser(id: string) {
    return this.http.get<User>('https://jsonplaceholder.typicode.com/users/' + id);
  }

}
