import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import  { Curso } from './curso';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CursoService {

    private _curso: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient) {
  }

    public getCursos(): Observable<any> {
        return this.http.get<Curso[]>('api/apps/academia/cursos').pipe(
                tap((response: Curso[]) => {
                this._curso.next(response);
            })
        );
    }

}
